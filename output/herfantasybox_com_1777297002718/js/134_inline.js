function waitForElement(querySelector, timeout) {
  return new Promise((resolve, reject) => {
    var timer = false;
    if (document.querySelectorAll(querySelector).length) return resolve();
    const observer = new MutationObserver(() => {
      if (document.querySelectorAll(querySelector).length) {
        observer.disconnect();
        if (timer !== false) clearTimeout(timer);
        return resolve();
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
    if (timeout)
      timer = setTimeout(() => {
        observer.disconnect();
        reject();
      }, timeout);
  });
}

function isElementVisible(element) {
  let style = window.getComputedStyle(element);
  return style.display !== 'none';
}

class RechargeElement {
  async init() {
    this.session = await recharge.auth.loginShopifyAppProxy();

    let plan_response = await recharge.plan.listPlans(this.session, {
      external_product_id: "7048466202763"
    });

    this.plans = plan_response ? plan_response.plans : false;

    if (this.plans) {
      this.plans.sort(function(a, b) {
        return a.sort_order - b.sort_order;
      });

      this.init_v1();
      this.init_v2();
    }
  }

  init_v1() {
    const items = document.querySelectorAll('.product-subscription__item');

    items.forEach((item) => {
      if (item.dataset.place > 0) {
        for (let index in this.plans) {
          const plan = this.plans[index];
          if (plan.type == 'subscription' && plan.sort_order == item.dataset.place) {
            item.dataset.sellingPlan = plan.external_plan_id;

            if (plan.discount_type == "percentage") {
              let percentageElement = item.querySelector('.percentage-off');
              if (percentageElement) {
                item.querySelector('.percentage-off').innerHTML = "(" + parseInt(plan.discount_amount) + "% off)";
              }
            }

            break;
          }
        }
      }

      item.addEventListener('click', () => {
        items.forEach((item) => {
          item.classList.remove('product-subscription__item--active');
        });
        item.classList.add('product-subscription__item--active');

        if (item.dataset.place == 0) {
          // One-time
          document.getElementById('selling_plan').value = '';

        } else {
          // Subscription
          document.getElementById('selling_plan').value = item.dataset.sellingPlan;
        }
      });

      if (item.dataset.place == 1) {
        document.getElementById('selling_plan').value = item.dataset.sellingPlan;
      }
    });
  }

  init_v2() {
    // Add event handler to "One-Time Purchase" and "Subscribe & Save up to 15%" radio group
    const items = document.querySelectorAll('.product-subscription__item-v2');
    const subscribeGroupElement = document.getElementById('ss-recurring');

    items.forEach((item) => {
      // Add click event handler
      item.addEventListener('click', e => {
        // When you click either One-Time Purchase or Subscribe group (pink background when active)
        if (subscribeGroupElement.classList.contains('active') && e.srcElement.tagName === 'SELECT') {
          return;
        }

        const planIndex = (item.dataset.place == 0 ? 0 : parseInt(sel_delivery_cycle.value));
        var option_sale_spans = document.querySelectorAll('.product-bottle-options__list--item-price-wrap span');
        option_sale_spans.forEach((option_sale_span) => {
          option_sale_span.classList.remove('active');
        })

        var option_sale_active_spans = document.querySelectorAll('.product-bottle-options__list--item-price-wrap span[data-option="' + planIndex + '"]');
        option_sale_active_spans.forEach((option_sale_span) => {
          option_sale_span.classList.add('active');
        })

        if (planIndex > 0) {
          if (subscribeGroupElement.classList.contains('active')) {
            // Subscribe Group is already selected, no action needed
            return;
          }

          item.querySelectorAll('.ss-plan-choices').forEach(element => {
            if (element.dataset.place == planIndex) {
              element.style.display = 'block';
            } else {
              element.style.display = 'none';
            }
          });
        }

        // Change active plan group between One-Time | Subscribe
        items.forEach(element => {
          if (element == item) {
            element.classList.add('active');
          } else {
            element.classList.remove('active');
          }
        });

        // Update hidden selling_plan
        if (planIndex > 0) {
          document.getElementById('selling_plan').value = sel_delivery_cycle.querySelector('option[selected]').dataset.planId;
        } else {
          document.getElementById('selling_plan').value = '';
        }

        // Update bullets text
        if (planIndex > 0) {
          item.querySelector(".product-subscription__bullets .frequency").innerText = sel_delivery_cycle.querySelector('option[selected]').dataset.planName.split(' subscription')[0];
        }

        // TODO: dispatch a new custom event with the name of the selected plan
        const event = new CustomEvent('planSelected', {
          detail: {
            planName: planIndex == 0 ? item.dataset.sellingPlanName : sel_delivery_cycle.querySelector('option[selected]').dataset.planName
          }
        });

        document.dispatchEvent(event);
      });
    });

    // When you change delivery cycle from v2 layout
    sel_delivery_cycle.addEventListener('change', function() {
      const planIndex = this.value;

      subscribeGroupElement.querySelectorAll('.ss-plan-choices').forEach(element => {
        if (element.dataset.place == planIndex) {
          element.style.display = 'block';
        } else {
          element.style.display = 'none';
        }
      });

      // Update selling plan
      let optionDataset = sel_delivery_cycle.querySelector('option[value="' + planIndex + '"]').dataset;
      document.getElementById('selling_plan').value = optionDataset.planId;

      // Update frequency text
      subscribeGroupElement.querySelector(".product-subscription__bullets .frequency").innerText = optionDataset.planName.split(' subscription')[0];

      // Dispatch a new custom event with the name of the selected plan
      const event = new CustomEvent('planSelected', {
        detail: {
          planName: sel_delivery_cycle.querySelector('option[selected]').dataset.planName
        }
      });

      document.dispatchEvent(event);
    });
  }
}

const rcElement = new RechargeElement();
rcElement.init();