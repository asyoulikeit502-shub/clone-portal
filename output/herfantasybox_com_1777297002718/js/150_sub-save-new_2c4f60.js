(function() {
  var isProcessing = !1;

  function setProcessing(state) {
    isProcessing = state, document.querySelectorAll(".sub-save-new").forEach(function(w) {
      state ? w.classList.add("sub-save-new--processing") : w.classList.remove("sub-save-new--processing")
    })
  }

  function watchOverlay() {
    var checkCount = 0,
      maxChecks = 50,
      checkInterval = setInterval(function() {
        checkCount++;
        var overlay = document.getElementById("cart-overlay");
        if (!overlay || overlay.style.display === "none" || overlay.style.display === "") {
          clearInterval(checkInterval), setProcessing(!1), syncAllStates();
          return
        }
        checkCount >= maxChecks && (clearInterval(checkInterval), setProcessing(!1), syncAllStates())
      }, 100)
  }

  function getControlCheckbox(wrapper) {
    var rcItem = wrapper.closest(".rc90-item");
    if (rcItem) return rcItem.querySelector(".upsell__checkbox");
    var variantId = wrapper.dataset.variantId;
    return document.getElementById("sellingPlanCheckbox-" + variantId)
  }

  function getControlOptions(wrapper) {
    var rcItemMain = wrapper.closest(".rc90-item-main");
    return rcItemMain ? rcItemMain.querySelector(".upsell__options") : null
  }

  function getLineItemKey(wrapper) {
    var rcItem = wrapper.closest(".rc90-item");
    if (rcItem) {
      var removeBtn = rcItem.querySelector("[data-line-item-key]");
      if (removeBtn) return removeBtn.dataset.lineItemKey
    }
    return null
  }
  async function addSellingPlanToItem(lineItemKey, variantId, planId) {
    try {
      var cartResponse = await fetch("/cart.json"),
        cart = await cartResponse.json(),
        lineItem = cart.items.find(function(item) {
          return item.key === lineItemKey
        });
      if (!lineItem) return !1;
      var quantity = lineItem.quantity,
        removeResponse = await fetch(window.Shopify.routes.root + "cart/change.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            id: lineItemKey,
            quantity: 0
          })
        });
      if (!removeResponse.ok) return !1;
      var addResponse = await fetch(window.Shopify.routes.root + "cart/add.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          items: [{
            quantity,
            id: variantId,
            selling_plan: planId
          }]
        })
      });
      return addResponse.ok ? (window.robustCart && window.robustCart.refreshCart && await window.robustCart.refreshCart(), !0) : !1
    } catch {
      return !1
    }
  }
  async function removeSellingPlanFromItem(lineItemKey, variantId) {
    try {
      var cartResponse = await fetch("/cart.json"),
        cart = await cartResponse.json(),
        lineItem = cart.items.find(function(item) {
          return item.key === lineItemKey
        });
      if (!lineItem) return !1;
      var quantity = lineItem.quantity,
        removeResponse = await fetch(window.Shopify.routes.root + "cart/change.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            id: lineItemKey,
            quantity: 0
          })
        });
      if (!removeResponse.ok) return !1;
      var addResponse = await fetch(window.Shopify.routes.root + "cart/add.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          items: [{
            quantity,
            id: variantId
          }]
        })
      });
      return addResponse.ok ? (window.robustCart && window.robustCart.refreshCart && await window.robustCart.refreshCart(), !0) : !1
    } catch {
      return !1
    }
  }
  async function updateSellingPlanDirectly(lineItemKey, variantId, newPlanId) {
    try {
      var cartResponse = await fetch("/cart.json"),
        cart = await cartResponse.json(),
        lineItem = cart.items.find(function(item) {
          return item.key === lineItemKey
        });
      if (!lineItem) return !1;
      var quantity = lineItem.quantity,
        removeResponse = await fetch(window.Shopify.routes.root + "cart/change.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            id: lineItemKey,
            quantity: 0
          })
        });
      if (!removeResponse.ok) return !1;
      var addResponse = await fetch(window.Shopify.routes.root + "cart/add.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          items: [{
            quantity,
            id: variantId,
            selling_plan: newPlanId
          }]
        })
      });
      return addResponse.ok ? (window.robustCart && window.robustCart.refreshCart && await window.robustCart.refreshCart(), !0) : !1
    } catch {
      return !1
    }
  }

  function syncAllStates() {
    document.querySelectorAll(".sub-save-new").forEach(function(wrapper) {
      var controlCheckbox = getControlCheckbox(wrapper),
        buttonWrapper = wrapper.querySelector(".sub-save-new__button-wrapper"),
        collapsed = wrapper.querySelector(".sub-save-new__collapsed"),
        oneTimeRadio = wrapper.querySelector('input[value="one-time"]');
      if (controlCheckbox && controlCheckbox.checked) {
        buttonWrapper && (buttonWrapper.style.display = "none"), collapsed && collapsed.classList.add("sub-save-new__collapsed--active");
        var controlOptions = getControlOptions(wrapper);
        if (controlOptions && controlOptions.value) {
          var matchingRadio = wrapper.querySelector('input[value="' + controlOptions.value + '"]');
          if (matchingRadio) {
            matchingRadio.checked = !0;
            var collapsedText = collapsed ? collapsed.querySelector(".sub-save-new__collapsed-text") : null;
            collapsedText && matchingRadio.dataset.label && (collapsedText.textContent = matchingRadio.dataset.label)
          }
        }
      } else {
        oneTimeRadio && (oneTimeRadio.checked = !0), buttonWrapper && (buttonWrapper.style.display = "block"), collapsed && (collapsed.classList.remove("sub-save-new__collapsed--active"), collapsed.classList.remove("sub-save-new__collapsed--expanded"));
        var collapsedText = collapsed ? collapsed.querySelector(".sub-save-new__collapsed-text") : null;
        collapsedText && oneTimeRadio && oneTimeRadio.dataset.label && (collapsedText.textContent = oneTimeRadio.dataset.label)
      }
    })
  }
  document.addEventListener("click", function(e) {
    var btn = e.target.closest(".sub-save-new__button");
    if (btn && (e.preventDefault(), e.stopPropagation(), !isProcessing)) {
      var wrapper = btn.closest(".sub-save-new");
      if (wrapper) {
        var options = wrapper.querySelector(".sub-save-new__options"),
          buttonWrapper = wrapper.querySelector(".sub-save-new__button-wrapper"),
          collapsed = wrapper.querySelector(".sub-save-new__collapsed");
        buttonWrapper && (buttonWrapper.style.display = "none"), collapsed && collapsed.classList.add("sub-save-new__collapsed--active");
        var firstSubRadio = options ? options.querySelector("input[data-plan-id]") : null;
        if (firstSubRadio) {
          var collapsedText = collapsed ? collapsed.querySelector(".sub-save-new__collapsed-text") : null;
          collapsedText && firstSubRadio.dataset.label && (collapsedText.textContent = firstSubRadio.dataset.label), firstSubRadio.checked = !0, firstSubRadio.dispatchEvent(new Event("change", {
            bubbles: !0
          }))
        }
      }
    }
  }, !0), document.addEventListener("click", function(e) {
    var collapsed = e.target.closest(".sub-save-new__collapsed");
    if (collapsed && !e.target.closest(".sub-save-new__options")) {
      e.preventDefault(), e.stopImmediatePropagation();
      var wrapper = collapsed.closest(".sub-save-new");
      if (wrapper) {
        var options = wrapper.querySelector(".sub-save-new__options"),
          isExpanded = collapsed.classList.contains("sub-save-new__collapsed--expanded");
        isExpanded ? (collapsed.classList.remove("sub-save-new__collapsed--expanded"), options && options.classList.remove("sub-save-new__options--active")) : (document.querySelectorAll(".sub-save-new__collapsed--expanded").forEach(function(c) {
          c !== collapsed && c.classList.remove("sub-save-new__collapsed--expanded")
        }), document.querySelectorAll(".sub-save-new__options--active").forEach(function(o) {
          o !== options && o.classList.remove("sub-save-new__options--active")
        }), collapsed.classList.add("sub-save-new__collapsed--expanded"), options && options.classList.add("sub-save-new__options--active"))
      }
    }
  }, !0), document.addEventListener("mousedown", function(e) {
    e.target.closest(".sub-save-new") || (document.querySelectorAll(".sub-save-new__collapsed--expanded").forEach(function(collapsed) {
      collapsed.classList.remove("sub-save-new__collapsed--expanded")
    }), document.querySelectorAll(".sub-save-new__options--active").forEach(function(options) {
      options.classList.remove("sub-save-new__options--active")
    }))
  }), document.addEventListener("change", function(e) {
    var radio = e.target.closest(".sub-save-new__radio");
    if (radio) {
      var value = radio.value,
        wrapper = radio.closest(".sub-save-new");
      if (wrapper) {
        var controlCheckbox = getControlCheckbox(wrapper),
          controlOptions = getControlOptions(wrapper),
          collapsed = wrapper.querySelector(".sub-save-new__collapsed"),
          collapsedText = collapsed ? collapsed.querySelector(".sub-save-new__collapsed-text") : null,
          options = wrapper.querySelector(".sub-save-new__options"),
          buttonWrapper = wrapper.querySelector(".sub-save-new__button-wrapper");
        if (collapsedText && radio.dataset.label && (collapsedText.textContent = radio.dataset.label), collapsed && collapsed.classList.remove("sub-save-new__collapsed--expanded"), options && options.classList.remove("sub-save-new__options--active"), !isProcessing) {
          if (value === "one-time") {
            if (buttonWrapper && (buttonWrapper.style.display = "block"), collapsed && collapsed.classList.remove("sub-save-new__collapsed--active"), controlCheckbox && controlCheckbox.checked) {
              var lineItemKey = getLineItemKey(wrapper),
                variantId = wrapper.dataset.variantId;
              if (lineItemKey && variantId) {
                setProcessing(!0);
                var overlay = document.getElementById("cart-overlay");
                overlay && (overlay.style.display = "flex"), removeSellingPlanFromItem(lineItemKey, variantId).then(function(success) {
                  overlay && (overlay.style.display = "none"), setProcessing(!1), syncAllStates()
                })
              } else setProcessing(!0), watchOverlay(), controlCheckbox.checked = !1, controlCheckbox.dispatchEvent(new Event("change", {
                bubbles: !0
              }))
            }
          } else if (buttonWrapper && (buttonWrapper.style.display = "none"), collapsed && collapsed.classList.add("sub-save-new__collapsed--active"), controlOptions && (controlOptions.value = value), controlCheckbox) {
            var lineItemKey = getLineItemKey(wrapper),
              variantId = wrapper.dataset.variantId;
            if (controlCheckbox.checked)
              if (lineItemKey && variantId) {
                setProcessing(!0);
                var overlay = document.getElementById("cart-overlay");
                overlay && (overlay.style.display = "flex"), updateSellingPlanDirectly(lineItemKey, variantId, value).then(function(success) {
                  overlay && (overlay.style.display = "none"), setProcessing(!1), syncAllStates()
                })
              } else controlOptions && (setProcessing(!0), watchOverlay(), controlOptions.dispatchEvent(new Event("change", {
                bubbles: !0
              })));
            else if (lineItemKey && variantId) {
              setProcessing(!0);
              var overlay = document.getElementById("cart-overlay");
              overlay && (overlay.style.display = "flex"), addSellingPlanToItem(lineItemKey, variantId, value).then(function(success) {
                overlay && (overlay.style.display = "none"), setProcessing(!1), syncAllStates()
              })
            } else setProcessing(!0), watchOverlay(), controlCheckbox.checked = !0, controlCheckbox.dispatchEvent(new Event("change", {
              bubbles: !0
            }))
          }
        }
      }
    }
  }), document.addEventListener("change", function(e) {
    if (!(!e.target.classList || !e.target.classList.contains("upsell__checkbox"))) {
      var rcItem = e.target.closest(".rc90-item"),
        wrapper = rcItem ? rcItem.querySelector(".sub-save-new") : null;
      if (wrapper) {
        var options = wrapper.querySelector(".sub-save-new__options"),
          buttonWrapper = wrapper.querySelector(".sub-save-new__button-wrapper"),
          collapsed = wrapper.querySelector(".sub-save-new__collapsed"),
          oneTimeRadio = wrapper.querySelector('input[value="one-time"]');
        e.target.checked ? (buttonWrapper && (buttonWrapper.style.display = "none"), collapsed && collapsed.classList.add("sub-save-new__collapsed--active")) : (oneTimeRadio && (oneTimeRadio.checked = !0), options && options.classList.remove("sub-save-new__options--active"), collapsed && (collapsed.classList.remove("sub-save-new__collapsed--active"), collapsed.classList.remove("sub-save-new__collapsed--expanded")), buttonWrapper && (buttonWrapper.style.display = "block"))
      }
    }
  });

  function initCartObserver() {
    var cartBox = document.querySelector(".rc90-box");
    if (cartBox) {
      var debounceTimer = null,
        observer = new MutationObserver(function(mutations) {
          debounceTimer && clearTimeout(debounceTimer), debounceTimer = setTimeout(function() {
            setProcessing(!1), syncAllStates()
          }, 300)
        });
      observer.observe(cartBox, {
        childList: !0
      })
    }
  }
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", function() {
    syncAllStates(), initCartObserver()
  }) : (syncAllStates(), initCartObserver())
})();
//# sourceMappingURL=/cdn/shop/t/260/assets/sub-save-new.js.map?v=145075633065866742891773786319