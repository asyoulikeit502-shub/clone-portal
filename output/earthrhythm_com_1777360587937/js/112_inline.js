window.addEventListener("DOMContentLoaded", (event) => {
                        var customer_id = ''
                        var customer_email = ''
                        var customer_phone = ''
                        var customer_first_name = ''
                        var customer_last_name = ''
                        customer_id = customer_id || ""
                        customer_email = customer_email || ""
                        customer_phone = customer_phone || ""
                        customer_first_name = customer_first_name || ""
                        customer_last_name = customer_last_name || ""
                        if (customer_id === "") {
                          LoyaltyHub.logoutUser()
                        }
                        LoyaltyHub.trigger({
                          PROJECT_ID: "us-east-1-UGSWOQGn-live",
                          API_KEY: "GqvVXgDKCCbjZNTiZMES8pTkawyTmke3",
                          email: customer_email,
                          shopifyCustomerId: customer_id,
                          firstName: customer_first_name,
                          lastName: customer_last_name,
                          mobile: customer_phone,
                          device: "5",
                          build: "1.0.0",
                          deviceType: "web"
                      });
                      document.querySelectorAll("#uLoyalRewardTrigger")?.forEach((triggerBtn) => {
                        triggerBtn?.addEventListener("click", () => {
                          LoyaltyHub.toggleModal();
                        });
                      })
                    });