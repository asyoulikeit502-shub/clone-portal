var __wzrk_account_id = "449-4Z7-Z86Z";
	var __wzrk_region = "in1";
	var __wzrk_version = 2;
	var __wzrk_web_push_enabled = true;
	var __wzrk_webhook_enabled = "true";
	var __wzrk_variables = "shop_url,shop_domain,shop_email,shop_money_format,product_json,product_title,product_price,cart_json,cart_item_count,cart_total_price";
	var __wzrk_shop_url = "https://earthrhythm.com";
	var __wzrk_shop_domain = "earthrhythm.com";
	var __wzrk_shop_email = "support@earthrhythm.com";
	var __wzrk_shop_money_format = "₹{{amount}}";
	var __wzrk_shop_name ="Earth Rhythm - Clean. Kind. Effective";
	var __wzrk_charged_currency = "INR";
	var __wzrk_customer_name = "";
	var __wzrk_customer_identity = "";
	var __wzrk_customer_email = "";
	var __wzrk_customer_phone = "";
	
	
	
window.clevertapApp = {
        config: {
          	currency: 'INR',
            meta : {
                title : 'Earth Rhythm - Clean. Kind. Effective',
                template : 'index',
                url : 'https://earthrhythm.com/',
                type : 'index',
            },
            routes: {
                customer: {
                    account: '/account',
                    login: '/account/login',
                    logout: '/account/logout',
                    register: '/account/register'
                },
                cart: {
                    list: '/cart',
                    add: '/cart/add',
                    clear: '/cart/clear',
                    update: '/cart/change',
                    change: '/cart/change',
                }    
            }
        }
    };

    

    clevertapApp.frame = {
        hide: function(){
            window.document.getElementById('clevertap-frame').style.display = 'none';
        }
    };
if (localStorage) {
	localStorage.setItem("WZRK_SHOP_INFO", "{ \"acct_id\" : \"449-4Z7-Z86Z\" , \"region\" : \"in1\" , \"webPushEnabled\" : true , \"webhookEnabled\" : true}");
}