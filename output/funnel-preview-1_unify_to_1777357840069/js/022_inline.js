app.controller("allProductData", function($rootScope, $scope, $http) {
  // console.log("Controller loaded new ",$rootScope); 

  $scope.allproducts = {
    "14": {
      "Id": "21",
      "ProductName": "Member Reward Program",
      "Price": "4.99",
      "inUse": true,
      "Category": "member-reward",
      "offerType": "memberreward",
      "ProductVariation": [{
          "Id": "21",
          "ProductName": "Member Rewards Program Tier 0",
          "Price": "4.99",
          "OrderNo": 1,
          "reward_terms": "By redeeming this offer at checkout, you agree to our Terms and authorize a charge of 4.99 for your first month’s membership, and 4.99 a month thereafter to be billed automatically to any active card on file. You understand that any promotions or discounts being offered at checkout only apply to the first month, all future months will be 4.99 per month. Every month, 1 product valued at a minimum of $50.00 from our online store will be selected at random and shipped to the address on file and you will receive an email coupon for store credit up to $20 with free 2-Day Shipping. You can alter or cancel the Member Rewards Program anytime by contacting customer service available 24-7. Your billing descriptor for the Member Rewards Program will appear as  on your credit card statement."
        },
        {
          "Id": "22",
          "ProductName": "Member Rewards Program Tier 1",
          "Price": "9.99",
          "OrderNo": 2,
          "reward_terms": "By redeeming this offer at checkout, you agree to our Terms and authorize a charge of  for your first month’s membership, and  a month thereafter to be billed automatically to any active card on file. You understand that any promotions or discounts being offered at checkout only apply to the first month, all future months will be  per month. Every month, 2 products valued at a minimum of $50.00 from our online store will be selected at random and shipped to the address on file and you will receive an email coupon for store credit up to $25 with free 2-Day Shipping. You can alter or cancel the Member Rewards Program anytime by contacting customer service available 24-7. Your billing descriptor for the Member Rewards Program will appear as  on your credit card statement."
        },
        {
          "Id": "23",
          "ProductName": "Member Rewards Program Tier 2",
          "Price": "19.99",
          "OrderNo": 3,
          "reward_terms": "By redeeming this offer at checkout, you agree to our Terms and authorize a charge of  for your first month’s membership, and  a month thereafter to be billed automatically to any active card on file. You understand that any promotions or discounts being offered at checkout only apply to the first month, all future months will be  per month. Every month, 3 products valued at a minimum of $50.00 from our online store will be selected at random and shipped to the address on file and you will receive an email coupon for store credit up to $30 with free 2-Day Shipping. You can alter or cancel the Member Rewards Program anytime by contacting customer service available 24-7. Your billing descriptor for the Member Rewards Program will appear as  on your credit card statement."
        },
        {
          "Id": "24",
          "ProductName": "Member Rewards Program Tier 3",
          "Price": "24.99",
          "OrderNo": 4,
          "reward_terms": "By redeeming this offer at checkout, you agree to our Terms and authorize a charge of  for your first month’s membership, and  a month thereafter to be billed automatically to any active card on file. You understand that any promotions or discounts being offered at checkout only apply to the first month, all future months will be  per month. Every month, 4 products valued at a minimum of $50.00 from our online store will be selected at random and shipped to the address on file and you will receive an email coupon for store credit up to $35 with free 2-Day Shipping. You can alter or cancel the Member Rewards Program anytime by contacting customer service available 24-7. Your billing descriptor for the Member Rewards Program will appear as  on your credit card statement."
        }
      ],
      "ParentProduct": {},
      "Image": "images/nf.png",
      "ImageVariation": [
        "images/nf.png",
        "images/mem-icon1.png",
        "images/mem-icon2.png",
        "images/mem-icon3.png",
        "images/mem-icon4.png"
      ],
      "Color": ["Silver", "Black"],
      "Descriptions": "",

      "Terms": ""
    },
    "2": {
      "Id": "112",
      "ProductName": "Clarity Blue Glasses",
      "Price": "39.99",
      "inUse": true,
      "offerType": "clarityblueglasses",
      "Category": "HealthBeauty",
      "ProductVariation": [{
          "Id": "112",
          "ProductName": "1x Clarity Blue Glass",
          "Price": "39.99",
          "OrderNo": 1,
          "item_id": "419",
          "itemId": ""
        },
        {
          "Id": "112",
          "ProductName": "2x Clarity Blue Glasses",
          "Price": "75.98",
          "OrderNo": 2,
          "item_id": "420",
          "itemId": ""
        },
        {
          "Id": "112",
          "ProductName": "3x Clarity Blue Glasses",
          "Price": "107.97",
          "OrderNo": 3,
          "item_id": "421",
          "itemId": ""
        },
        {
          "Id": "112",
          "ProductName": "4x Clarity Blue Glasses",
          "Price": "135.96",
          "OrderNo": 4,
          "item_id": "422",
          "itemId": ""
        },
        {
          "Id": "112",
          "ProductName": "5x Clarity Blue Glasses",
          "Price": "159.95",
          "OrderNo": 5,
          "item_id": "423",
          "itemId": ""
        }
      ],
      "ParentProduct": {
        "Id": "112",
        "ProductName": "Clarity Blue Glasses",
        "Price": "0.00",
        "OrderNo": 1,
        "item_id": "417",
        "itemId": ""
      },
      "protectionPlan": {
        "Id": "112",
        "ProductName": "Clarity Blue Glasses - 3 Year Warranty",
        "Price": "9.95",
        "OrderNo": 1,
        "item_id": "450",
        "itemId": ""
      },
      "coveragePlan": {
        "Id": "112",
        "ProductName": "Clarity Blue Glasses Journey Package Protection",
        "Price": "3.50",
        "OrderNo": 1,
        "item_id": "451",
        "itemId": ""
      },
      "upsellProduct": [{
          "Id": "112",
          "ProductName": "Special 1x EXTRA Clarity Blue Glasses",
          "Price": "79.98",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "452",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "112",
          "ProductName": "Clarity Blue Glasses - Case UPGRADE!",
          "Price": "19.90",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "453",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "112",
          "ProductName": "Clarity Blue Glasses - Expedited Shipping",
          "Price": "19.90",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "454",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "112",
          "ProductName": "1x USB Charger",
          "Price": "14.95",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "69",
          "itemId": "",
          "ParentItemId": ""
        }
      ],
      "Image": "images/product-2.jpg",
      "ImageVariation": [
        "images/product-2.jpg",
        "images/featured_img1-1.jpg",
        "images/featured_img1-2.jpg",
        "images/featured_img1-3.jpg",
        "images/featured_img1-4.jpg"
      ],
      "Color": "",
      "Descriptions": "Clarity Blue Glasses are designed to safeguard your eyes from harmful blue light emitted by digital screens, enhancing visual comfort and clarity. Their advanced blue light filtering technology helps reduce eye strain, dryness, and irritation, making screen time more comfortable and enjoyable. The anti-reflective coating minimizes glare, allowing for clearer vision without squinting, while the lightweight, durable frames ensure lasting comfort throughout the day. With Clarity Blue Glasses, you can experience improved sleep quality, as they help regulate circadian rhythms affected by blue light exposure. Stylishly designed to suit any occasion, these glasses are a perfect blend of functionality and fashion, making them ideal for work, gaming, or casual wear.",
      "Specifications": {
        "Product Dimensions": "Approx. 14 cm x 5 cm x 3 cm",
        "Product Weight": "0.88 Ounces"
      },
      "Terms": "",
      "HOW_TO_USE": "Wear Clarity Blue Glasses whenever you're using screens—like your phone, laptop, or TV—to reduce eye strain and filter blue light. Keep the lenses clean with a soft cloth and store them safely in the case when not in use.",
      "DELIVERY_INFO": "This is an American-owned business that doesn't believe it should take 45 days to receive your product from China. Orders are sent from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers depending on speed and efficiency of delivery. Product will be shipped within 48 business hours. Please allow between 5-7 days for standard delivery. You will be emailed a tracking link after your order is shipped. Thank you for your purchase!",
      "FAQ": [{
          "question": "How long does shipping take?",
          "answer": "This is an American-owned business that doesn't believe it should take 45 days to receive your product from China. Orders are sent from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers depending on speed and efficiency of delivery. Product will be shipped within 48 business hours. Please allow between 5-7 days for standard delivery. You will be emailed a tracking link after your order is shipped. Thank you for your purchase!",
          "isRequired": true
        },
        {
          "question": "How does the money back guarantee work?",
          "answer": "Simply return your product and we'll give you a refund for 30 days.",
          "isRequired": true
        },
        {
          "question": "How Do Clarity Blue Glasses Reduce Eye Strain?",
          "answer": "Clarity Blue Glasses have advanced blue light filtering technology that blocks harmful blue light emitted from digital screens. This helps to reduce eye strain, dryness, and fatigue, allowing for more comfortable extended screen use.",
          "isRequired": true
        },
        {
          "question": "Will Wearing Clarity Blue Glasses Improve My Sleep Quality?",
          "answer": "Yes, Clarity Blue Glasses helps to improve sleep quality by minimizing blue light exposure, especially during evening screen time. Reducing blue light can prevent disruption to your natural sleep-wake cycle, making it easier to fall asleep and stay asleep.",
          "isRequired": true
        },
        {
          "question": "Are Clarity Blue Glasses Suitable For All Types Of Screens?",
          "answer": "Absolutely. Clarity Blue Glasses are designed to work with all digital screens, including computers, smartphones, tablets, and TVs. They effectively filter blue light from any device, providing protection and comfort across various uses.",
          "isRequired": true
        },
        {
          "question": "Can I Wear Clarity Blue Glasses With Contact Lenses?",
          "answer": "Yes, Clarity Blue Glasses can be comfortably worn with contact lenses. They are designed to provide eye protection without interfering with your contact lenses, making them a versatile choice for daily screen use.",
          "isRequired": true
        },
        {
          "question": "How Should I Clean And Maintain Clarity Blue Glasses?",
          "answer": "To clean your Clarity Blue Glasses, use a microfiber cloth and a lens cleaner specifically designed for optical lenses. Avoid using paper towels or rough fabrics, as these can scratch the lenses. Regular cleaning and proper care will help maintain clarity and extend the life of your glasses.",
          "isRequired": true
        },
      ]
    },
    "3": {
      "Id": "112",
      "ProductName": "Chapter Book Mug",
      "Price": "39.99",
      "inUse": true,
      "Category": "HouseHoldessentials",
      "offerType": "chapterbookmug",
      "ProductVariation": [{
          "Id": "112",
          "ProductName": "1x Chapter Book Mug",
          "Price": "39.99",
          "OrderNo": 1,
          "item_id": "1034",
          "itemId": ""
        },
        {
          "Id": "112",
          "ProductName": "2x Chapter Book Mug",
          "Price": "71.98",
          "OrderNo": 2,
          "item_id": "1035",
          "itemId": ""
        },
        {
          "Id": "112",
          "ProductName": "3x Chapter Book Mug",
          "Price": "95.98",
          "OrderNo": 3,
          "item_id": "1036",
          "itemId": ""
        },
        {
          "Id": "112",
          "ProductName": "4x Chapter Book Mug",
          "Price": "111.97",
          "OrderNo": 4,
          "item_id": "1037",
          "itemId": ""
        },
        {
          "Id": "112",
          "ProductName": "5x Chapter Book Mug",
          "Price": "119.97",
          "OrderNo": 5,
          "item_id": "1038",
          "itemId": ""
        }
      ],
      "ParentProduct": {
        "Id": "112",
        "ProductName": "Chapter Book Mug",
        "Price": "0.00",
        "OrderNo": 1,
        "item_id": "1033",
        "itemId": ""
      },
      "protectionPlan": {
        "Id": "112",
        "ProductName": "Chapter Book Mug - 3 Year Warranty",
        "Price": "9.95",
        "OrderNo": 1,
        "item_id": "1039",
        "itemId": ""
      },
      "coveragePlan": {
        "Id": "112",
        "ProductName": "Chapter Book Mug Journey Package Protection",
        "Price": "3.50",
        "OrderNo": 1,
        "item_id": "1040",
        "itemId": ""
      },
      "upsellProduct": [{
        "Id": "112",
        "ProductName": "Special 1x EXTRA Chapter Book Mug",
        "Price": "19.99",
        "isUpsell": "true",
        "OrderNo": 1,
        "item_id": "1041",
        "itemId": "",
        "ParentItemId": ""
      }],
      "Image": "images/product-3.png",
      "ImageVariation": [
        "images/product-3.png",
        "images/featured_img2-1.jpg",
        "images/featured_img2-2.jpg",
        "images/featured_img2-3.jpg",
        "images/featured_img2-4.jpg"
      ],
      "Color": "",
      "Descriptions": "Bring your love for stories to every sip with this uniquely crafted Chapter Book Mug, designed to look like a charming stack of colorful books. The vivid red, blue, and white “book spines” give the mug a striking 3D textured look, making it a perfect collectible for readers, writers, and anyone who enjoys artistic home décor. Made from high-quality, crystal-clear glass with beautifully carved book-style layers, this mug is both eye-catching and functional. The sturdy transparent handle adds elegance while offering a comfortable grip. Whether you're enjoying coffee, tea, or hot chocolate, this mug turns every drink into a cozy reading moment.",
      "Specifications": {
        "Product Dimensions": "4.3 in (H) x 3.1 in (W)",
        "Product Weight": "0.9 lb"
      },
      "Terms": "",
      "HOW_TO_USE": "Use the Book Mug to enjoy your favorite drink while adding a stylish, book-themed touch to your space.",
      "DELIVERY_INFO": "This is an American-owned business that doesn't believe it should take 45 days to receive your product from China. Orders are sent from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers depending on speed and efficiency of delivery. Product will be shipped within 48 business hours. Please allow between 5-7 days for standard delivery. You will be emailed a tracking link after your order is shipped. Thank you for your purchase!",


      "FAQ": [{
          "question": "How long will shipping take?",
          "answer": "Orders are shipped from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers based on delivery speed and efficiency. Products are shipped within 48 business hours. Standard delivery typically takes 5–7 days. A tracking link is emailed once the order is shipped.",
          "isRequired": true
        },
        {
          "question": "How does the money-back guarantee work?",
          "answer": "You can return your product within 30 days of purchase to receive a full refund.",
          "isRequired": true
        },
        {
          "question": "What is the design and style of the Chapter Book Mug?",
          "answer": "The Chapter Book Mug is crafted to resemble a stack of books with detailed three-dimensional features. The body mimics book spines, giving it a unique literary and decorative appearance.",
          "isRequired": true
        },
        {
          "question": "What material is the Chapter Book Mug made of?",
          "answer": "The Chapter Book Mug is made of durable resin, glass, or a painted 3D composite material designed for regular use while maintaining artistic detail.",
          "isRequired": true
        },
        {
          "question": "What is the capacity or size of the Chapter Book Mug?",
          "answer": "The Chapter Book Mug holds approximately 300 mL (10–11 oz), offering a compact size that is suitable for a regular cup of coffee or tea.",
          "isRequired": true
        },
        {
          "question": "Is the Chapter Book Mug safe for hot beverages?",
          "answer": "Yes, the Chapter Book Mug is heat resistant within standard beverage temperature ranges and is suitable for both hot and cold drinks.",
          "isRequired": true
        },
        {
          "question": "How should the Chapter Book Mug be cleaned?",
          "answer": "Hand washing is recommended to preserve the detailed 3D design. Use a soft sponge and mild detergent, and avoid abrasive scrubbers. The mug is also safe for dishwasher use.",
          "isRequired": true
        },
        {
          "question": "Is the Chapter Book Mug suitable as a gift?",
          "answer": "Yes, the Chapter Book Mug makes an excellent gift for readers, writers, librarians, and anyone who enjoys literary or artistic drinkware.",
          "isRequired": true
        }
      ]
    },
    "4": {
      "Id": "112",
      "ProductName": "Galaxy Fly Ball",
      "Price": "39.99",
      "inUse": true,
      "isOffer": true,
      "offerType": "galaxyflyball",
      "offerLogo": "images/logo-white1.png",
      "Category": "ToysKidsBaby",
      "ProductVariation": [{
          "Id": "112",
          "ProductName": "1x Galaxy Fly Ball",
          "Price": "39.99",
          "OrderNo": 1,
          "item_id": "544",
          "itemId": ""
        },
        {
          "Id": "112",
          "ProductName": "2x Galaxy Fly Ball",
          "Price": "75.98",
          "OrderNo": 2,
          "item_id": "545",
          "itemId": ""
        },
        {
          "Id": "112",
          "ProductName": "3x Galaxy Fly Ball",
          "Price": "107.97",
          "OrderNo": 3,
          "item_id": "546",
          "itemId": ""
        },
        {
          "Id": "112",
          "ProductName": "4x Galaxy Fly Ball",
          "Price": "135.96",
          "OrderNo": 4,
          "item_id": "547",
          "itemId": ""
        },
        {
          "Id": "112",
          "ProductName": "5x Galaxy Fly Ball",
          "Price": "159.95",
          "OrderNo": 5,
          "item_id": "548",
          "itemId": ""
        }
      ],
      "ParentProduct": {
        "Id": "112",
        "ProductName": "Galaxy Fly Ball",
        "Price": "0.00",
        "OrderNo": 1,
        "item_id": "543",
        "itemId": ""
      },
      "protectionPlan": {
        "Id": "112",
        "ProductName": "Galaxy Fly Ball - 3 Year Warranty",
        "Price": "9.95",
        "OrderNo": 1,
        "item_id": "762",
        "itemId": ""
      },
      "coveragePlan": {
        "Id": "112",
        "ProductName": "Galaxy Fly Ball Journey Package Protection",
        "Price": "3.50",
        "OrderNo": 1,
        "item_id": "763",
        "itemId": ""
      },
      "upsellProduct": [{
          "Id": "112",
          "ProductName": "Special 1x EXTRA Galaxy Fly Ball",
          "Price": "24.99",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "764",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "112",
          "ProductName": "1x Remote Car Toy",
          "Price": "19.99",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "768",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "112",
          "ProductName": "1x Glow Sketch Tablet Toy",
          "Price": "19.96",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "626",
          "itemId": "",
          "ParentItemId": ""
        }
      ],
      "Image": "images/product-4.png",
      "ImageVariation": [
        "images/product-4.png",
        "images/featured_img3-1.jpg",
        "images/featured_img3-2.jpg",
        "images/featured_img3-3.jpg",
        "images/featured_img3-4.jpg"
      ],
      "Color": "",
      "Short_Descript": "The Most Tricked Out Galaxy Ball! Guaranteed!",
      "Descriptions": "Experience futuristic fun with the Galaxy Fly Ball, a dazzling hovering toy designed to light up your playtime. Its unique spherical design, paired with an open-grid outer shell, lets you see the internal rotor system as it spins and glides through the air. The vibrant metallic blue finish gives it a premium, space-inspired look—perfect for both kids and adults. Simply toss it gently upward, and watch it float, spin, and return like magic. Built-in sensors help it avoid obstacles, making it safe for indoor and outdoor play. Whether you're playing alone or passing it back and forth, the Galaxy Fly Ball delivers endless entertainment with its smooth flight and glowing presence.",
      "Specifications": {
        "Product Dimensions": "3.9 in (Diameter)",
        "Product Weight": "0.35 lb"
      },
      "Terms": "",
      "HOW_TO_USE": "Toss the Galaxy Fly Ball gently into the air and guide it with your hand as it hovers, spins, and returns like a flying boomerang.",
      "DELIVERY_INFO": "This is an American-owned business that doesn't believe it should take 45 days to receive your product from China. Orders are sent from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers depending on speed and efficiency of delivery. Product will be shipped within 48 business hours. Please allow between 5-7 days for standard delivery. You will be emailed a tracking link after your order is shipped. Thank you for your purchase!",

      "FAQ": [{
          "question": "What is it and is it hard to use?",
          "answer": "Galaxy Ball is a flying spinner toy with a hidden drive mechanism that performs aerobatic tricks and stunts. It is easy to learn and can be mastered within minutes. It is fun to play alone or with friends and works as an engaging activity for all ages.",
          "isRequired": true
        },
        {
          "question": "Is it safe?",
          "answer": "Yes, Galaxy Ball features an aerodynamic enclosed wheel design that ensures smooth flight while performing tricks. The enclosed structure protects your hands while launching, catching, and playing.",
          "isRequired": true
        },
        {
          "question": "Can kids play with it?",
          "answer": "Yes, Galaxy Ball has been tested for safe use by both children and adults. The enclosed wheel design keeps hands protected, making it suitable for all age groups.",
          "isRequired": true
        },
        {
          "question": "Where can it be used?",
          "answer": "Galaxy Ball can be used both indoors and outdoors without requiring a large space. It works well at home, school, the office, or in the backyard, offering smooth flight and a boomerang-style return.",
          "isRequired": true
        },
        {
          "question": "Does it light up?",
          "answer": "Yes, Galaxy Ball includes built-in LED lights that can be controlled with or without the magic wand. The lights look especially impressive at night and add visual appeal during daytime play.",
          "isRequired": true
        },
        {
          "question": "Is it durable?",
          "answer": "Galaxy Ball is built with a durable, aerodynamic enclosed wheel design. It is designed for safe handling and can be easily caught mid-air while performing tricks.",
          "isRequired": true
        },
        {
          "question": "What is the battery life and how do I charge it?",
          "answer": "Galaxy Ball is powered by a 100mAh battery that provides up to 30 minutes of playtime. It charges in approximately 15 minutes using a USB charging interface.",
          "isRequired": true
        }
      ]
    },
    "5": {
      "Id": "112",
      "ProductName": "Vi-Shift Glasses",
      "Price": "29.99",
      "inUse": true,
      "Category": "HealthBeauty",
      "offerType": "vishiftglasses",
      "ProductVariation": [{
          "Id": "112",
          "ProductName": "1x Vi-Shift Glasses",
          "Price": "29.99",
          "OrderNo": 1,
          "item_id": "735",
          "itemId": ""
        },
        {
          "Id": "112",
          "ProductName": "2x Vi-Shift Glasses",
          "Price": "53.98",
          "OrderNo": 2,
          "item_id": "736",
          "itemId": ""
        },
        {
          "Id": "112",
          "ProductName": "3x Vi-Shift Glasses",
          "Price": "71.98",
          "OrderNo": 3,
          "item_id": "737",
          "itemId": ""
        },
        {
          "Id": "112",
          "ProductName": "4x Vi-Shift Glasses",
          "Price": "83.97",
          "OrderNo": 4,
          "item_id": "738",
          "itemId": ""
        },
        {
          "Id": "112",
          "ProductName": "5x Vi-Shift Glasses",
          "Price": "89.97",
          "OrderNo": 5,
          "item_id": "739",
          "itemId": ""
        }
      ],
      "ParentProduct": {
        "Id": "112",
        "ProductName": "Vi-Shift Glasses",
        "Price": "0.00",
        "OrderNo": 1,
        "item_id": "734",
        "itemId": ""
      },
      "protectionPlan": {
        "Id": "112",
        "ProductName": "3x Year Extended Warranty",
        "Price": "9.95",
        "OrderNo": 1,
        "item_id": "740",
        "itemId": ""
      },
      "coveragePlan": {
        "Id": "112",
        "ProductName": "Journey Package Protection",
        "Price": "3.50",
        "OrderNo": 1,
        "item_id": "741",
        "itemId": ""
      },
      "upsellProduct": [{
          "Id": "112",
          "ProductName": "1x EXTRA Vi-Shift Glasses",
          "Price": "19.99",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "742",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "112",
          "ProductName": "1x USB Quick Charger",
          "Price": "14.98",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "69",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "112",
          "ProductName": "Vi-Shift Glasses - Expedited Shipping",
          "Price": "9.95",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "743",
          "itemId": "",
          "ParentItemId": ""
        }
      ],
      "Image": "images/product-5.png",
      "ImageVariation": [
        "images/product-5.png",
        "images/featured_img4-1.jpg",
        "images/featured_img4-2.jpg",
        "images/featured_img4-3.jpg",
        "images/featured_img4-4.jpg"
      ],
      "Color": "",
      "Descriptions": "The Vi-Shift Glasses - HD offer superior visual clarity and comfort. Designed for daily use, these glasses provide enhanced HD vision, making them perfect for both work and leisure activities. Choose the model that fits your needs and enjoy premium quality at an excellent value.",
      "Specifications": {
        "Product Dimensions": "Approx. 14 cm x 5 cm x 3 cm",
        "Product Weight": "0.88 Ounces"
      },
      "Terms": "",
      "HOW_TO_USE": "Use Vi-Shift FlexVision Glasses by wearing them like regular eyewear and adjusting the flexible lenses to instantly enhance clarity.",
      "DELIVERY_INFO": "This is an American-owned business that doesn't believe it should take 45 days to receive your product from China. Orders are sent from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers depending on speed and efficiency of delivery. Product will be shipped within 48 business hours. Please allow between 5-7 days for standard delivery. You will be emailed a tracking link after your order is shipped. Thank you for your purchase!",
      "FAQ": [{
          "question": "What are Vi-Shift Glasses?",
          "answer": "Vi-Shift Glasses are adjustable eyeglasses with lenses that allow the wearer to change focus or prescription. They provide a customizable vision solution for reading, computer work, or distance viewing without the need for multiple pairs of glasses.",
          "isRequired": true
        },
        {
          "question": "How do Vi-Shift Glasses work?",
          "answer": "Vi-Shift Glasses work using either sliding lenses that change lens power or fluid-filled lenses where the prescription is adjusted by increasing or decreasing fluid inside the lens. This changes the lens curvature and focal length to provide clearer vision at different distances.",
          "isRequired": true
        },
        {
          "question": "Who can benefit from Vi-Shift Glasses?",
          "answer": "Vi-Shift Glasses are especially beneficial for individuals with presbyopia, a common condition in people over 40 that affects close-up focus. They are also useful for people with changing vision throughout the day or those without immediate access to an optometrist.",
          "isRequired": true
        },
        {
          "question": "Can Vi-Shift Glasses replace regular prescription glasses?",
          "answer": "Vi-Shift Glasses serve as a convenient alternative for specific tasks or temporary use. They do not replace custom prescription glasses designed for individual vision needs, especially for astigmatism or high prescription requirements.",
          "isRequired": true
        },
        {
          "question": "How do I adjust the glasses to my preferred setting?",
          "answer": "Adjustment depends on the design of the glasses. Most models include dials, sliders, or knobs on the frame. Start at the lowest setting and gradually adjust until clear vision is achieved.",
          "isRequired": true
        },
        {
          "question": "Are Vi-Shift Glasses durable?",
          "answer": "Vi-Shift Glasses are designed for durability. Proper care and correct handling help ensure long-lasting performance.",
          "isRequired": true
        },
        {
          "question": "How do I care for Vi-Shift Glasses?",
          "answer": "Clean Vi-Shift Glasses regularly with a soft, dry cloth. Avoid harsh chemicals and abrasive materials. Store them in a protective case when not in use and keep them away from extreme temperatures or moisture.",
          "isRequired": true
        },
        {
          "question": "Can Vi-Shift Glasses be used for driving?",
          "answer": "Vi-Shift Glasses are not recommended for driving, as they do not correct astigmatism or provide the precision required for road safety. Consult an optometrist to determine suitable eyewear for driving.",
          "isRequired": true
        },
        {
          "question": "Are there any limitations to using Vi-Shift Glasses?",
          "answer": "Vi-Shift Glasses do not provide the same level of precision as custom prescription eyewear, especially for astigmatism, bifocals, or multifocals. They work best as a supplementary pair rather than a full replacement.",
          "isRequired": true
        },
        {
          "question": "Where can I purchase Vi-Shift Glasses?",
          "answer": "Vi-Shift Glasses are available online, through select optometrists, and from retailers that specialize in eyewear. Purchasing from a reputable seller ensures product quality and performance.",
          "isRequired": true
        }
      ]
    },
    "6": {
      "Id": "112",
      "ProductName": "Fungabeam",
      "Price": "89.99",
      "inUse": true,
      "isOffer": true,
      "offerType": "fungabeam",
      "offerLogo": "images/fungabeam_logo.png",
      "Category": "SkincareEssentials HealthBasics HealthBeauty",
      "ProductVariation": [{
          "Id": "112",
          "ProductName": "1x Fungabeam",
          "Price": "89.99",
          "OrderNo": 1,
          "item_id": "435",
          "itemId": ""
        },
        {
          "Id": "112",
          "ProductName": "2x Fungabeam",
          "Price": "161.98",
          "OrderNo": 2,
          "item_id": "436",
          "itemId": ""
        },
        {
          "Id": "112",
          "ProductName": "3x Fungabeam",
          "Price": "215.98",
          "OrderNo": 3,
          "item_id": "437",
          "itemId": ""
        },
        {
          "Id": "112",
          "ProductName": "4x Fungabeam",
          "Price": "251.97",
          "OrderNo": 4,
          "item_id": "438",
          "itemId": ""
        }
      ],
      "ParentProduct": {
        "Id": "112",
        "ProductName": "Fungabeam",
        "Price": "0.00",
        "OrderNo": 1,
        "item_id": "431",
        "itemId": ""
      },
      "protectionPlan": {
        "Id": "112",
        "ProductName": "Fungabeam - 3 Year Warranty",
        "Price": "9.95",
        "OrderNo": 1,
        "item_id": "440",
        "itemId": ""
      },
      "coveragePlan": {
        "Id": "112",
        "ProductName": "Fungabeam Journey Package Protection",
        "Price": "3.50",
        "OrderNo": 1,
        "item_id": "441",
        "itemId": ""
      },
      "upsellProduct": [{
          "Id": "112",
          "ProductName": "Special 1x EXTRA Fungabeam",
          "Price": "49.99",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "442",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "112",
          "ProductName": "1x USB Quick Charger",
          "Price": "14.96",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "69",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "112",
          "ProductName": "1x Oximeter",
          "Price": "14.99",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "444",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "112",
          "ProductName": "1x Led Guasha Tool",
          "Price": "29.99",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "411",
          "itemId": "",
          "ParentItemId": ""
        }
      ],
      "Image": "images/product-108.jpg",
      "ImageVariation": [

        "images/product-108.jpg",
        "images/product-109.jpg",
        "images/product-110.jpg",
        "images/product-111.jpg",
        "images/product-112.jpg",
        "images/product-113.jpg"
      ],
      "Color": ["Black", "Orange", "Pink", "Navy Blue"],
      "Short_Descript": "This Breakthrough Technology Can Effectively Eliminate Nail Fungus Residing In The Nail Bed, Restoring Nails To Their Natural, Healthy Appearance.",
      "Descriptions": "The Fungabeam is a compact, easy-to-use device that may help target toenail concerns through low-level laser light. Its dual-laser design is intended to reach the nail surface and may support an environment where healthier-looking nails can grow over time. Many people use it as a gentle, drug-free option without creams or medications. With just a few minutes of use each day, it can be a convenient addition to a personal nail-care routine at home or on the go. Fungabeam offers a simple, portable way for users to explore a non-invasive approach to improving the appearance of their nails.",
      "Specifications": {
        "Product Dimensions": "4.02 x 3.9 x 3.39 inches",
        "Product Weight": "3.53 Ounces"
      },
      "Terms": "",
      "HOW_TO_USE": "For best results, use the device for 7 minutes per session, twice daily until the infected nail has completely grown out and been replaced by a healthy nail.",
      "DELIVERY_INFO": "This is an American-owned business that doesn't believe it should take 45 days to receive your product from China. Orders are sent from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers depending on speed and efficiency of delivery. Product will be shipped within 48 business hours. Please allow between 5-7 days for standard delivery. You will be emailed a tracking link after your order is shipped. Thank you for your purchase!",
      "FAQ": [{
          "question": "How long will shipping take?",
          "answer": "Orders are shipped from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers based on delivery speed and efficiency. Products are shipped within 48 business hours. Standard delivery takes 5–7 days. A tracking link is emailed after the order is shipped.",
          "isRequired": true
        },
        {
          "question": "How does the money-back guarantee work?",
          "answer": "Simply return your product within 30 days of purchase to receive a refund.",
          "isRequired": true
        },
        {
          "question": "How does the Fungabeam LLLT device work?",
          "answer": "Fungabeam uses advanced Low-Level Laser Therapy (LLLT) to penetrate the nail bed, targeting fungal infections while supporting healthy nail growth.",
          "isRequired": true
        },
        {
          "question": "How long does it take to see results with Fungabeam?",
          "answer": "Many users report visible improvements within two weeks, with full nail recovery typically occurring within one to two months of consistent use.",
          "isRequired": true
        },
        {
          "question": "Is Fungabeam safe to use?",
          "answer": "Yes, Fungabeam is FDA-cleared, drug-free, and non-invasive. It uses laser technology without harmful side effects, making it a safe alternative to oral antifungal medications.",
          "isRequired": true
        },
        {
          "question": "How often should I use Fungabeam?",
          "answer": "For best results, use Fungabeam for seven minutes per session, twice daily, until the infected nail has fully grown out and is replaced by a healthy nail.",
          "isRequired": true
        },
        {
          "question": "Can Fungabeam be used on fingernails and toenails?",
          "answer": "Yes, Fungabeam is designed for use on both fingernails and toenails and treats fungal infections on any nail location.",
          "isRequired": true
        },
        {
          "question": "Does Fungabeam prevent the fungus from returning?",
          "answer": "Yes, Fungabeam helps eliminate existing infections and supports a stronger nail environment, reducing the likelihood of reinfection.",
          "isRequired": true
        }
      ]
    },
    "7": {
      "Id": "112",
      "ProductName": "BlueEase Optics",
      "Price": "39.99",
      "inUse": true,
      "Category": "HealthBeauty",
      "offerType": "blueeaseoptics",
      "ProductVariation": [{
          "Id": "112",
          "ProductName": "1x BlueEase Optics",
          "Price": "39.99",
          "OrderNo": 1,
          "item_id": "419",
          "itemId": ""
        },
        {
          "Id": "112",
          "ProductName": "2x BlueEase Optics",
          "Price": "75.98",
          "OrderNo": 2,
          "item_id": "420",
          "itemId": ""
        },
        {
          "Id": "112",
          "ProductName": "3x BlueEase Optics",
          "Price": "107.97",
          "OrderNo": 3,
          "item_id": "421",
          "itemId": ""
        },
        {
          "Id": "112",
          "ProductName": "4x BlueEase Optics",
          "Price": "135.96",
          "OrderNo": 4,
          "item_id": "422",
          "itemId": ""
        },
        {
          "Id": "112",
          "ProductName": "5x BlueEase Optics",
          "Price": "159.95",
          "OrderNo": 5,
          "item_id": "423",
          "itemId": ""
        }
      ],
      "ParentProduct": {
        "Id": "112",
        "ProductName": "BlueEase Optics",
        "Price": "0.00",
        "OrderNo": 1,
        "item_id": "417",
        "itemId": ""
      },
      "protectionPlan": {
        "Id": "112",
        "ProductName": "BlueEase Optics - 3 Year Warranty",
        "Price": "9.95",
        "OrderNo": 1,
        "item_id": "719",
        "itemId": ""
      },
      "coveragePlan": {
        "Id": "112",
        "ProductName": "BlueEase Optics Journey Package Protection",
        "Price": "3.50",
        "OrderNo": 1,
        "item_id": "720",
        "itemId": ""
      },
      "upsellProduct": [{
          "Id": "112",
          "ProductName": "Special 1x EXTRA BlueEase Optics",
          "Price": "24.99",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "721",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "112",
          "ProductName": "BlueEase Optics - Case UPGRADE!",
          "Price": "9.95",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "723",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "112",
          "ProductName": "BlueEase Optics - Expedited Shipping",
          "Price": "9.95",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "722",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "112",
          "ProductName": "2x USB Chargers",
          "Price": "26.91",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "70",
          "itemId": "",
          "ParentItemId": ""
        }
      ],
      "Image": "images/featured_img6.png",
      "ImageVariation": [
        "images/featured_img6.png",
        "images/featured_img6-1.jpg",
        "images/featured_img6-2.jpg",
        "images/featured_img6-3.jpg",
        "images/featured_img6-4.jpg"
      ],
      "Color": "",
      "Descriptions": "Experience ultimate visual comfort with Blue Ease Optics, designed for those who spend long hours on screens. These sleek, rimless glasses feature advanced blue light-filtering lenses that reduce digital eye strain, headaches, and fatigue—keeping your vision clear and protected throughout the day. Crafted with a lightweight, minimalist frame, Blue Ease Optics delivers a modern, professional look while ensuring all-day comfort. The reflective blue-tinted lenses not only enhance clarity but also add a stylish touch to any outfit. Perfect for work, gaming, reading, or casual wear, these glasses help you stay focused and comfortable no matter how long your screen time lasts.",
      "Specifications": {
        "Product Dimensions": "Approx. 14 cm x 5 cm x 3 cm",
        "Product Weight": "0.06 lb"
      },
      "Terms": "",
      "HOW_TO_USE": "Wear Blue Ease Optics during screen use to reduce eye strain and enhance visual comfort with blue-light-filtering clarity.",
      "DELIVERY_INFO": "This is an American-owned business that doesn't believe it should take 45 days to receive your product from China. Orders are sent from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers depending on speed and efficiency of delivery. Product will be shipped within 48 business hours. Please allow between 5-7 days for standard delivery. You will be emailed a tracking link after your order is shipped. Thank you for your purchase!",
      "FAQ": [{
          "question": "How long does shipping take?",
          "answer": "Orders are shipped from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers based on delivery speed and efficiency. Products are shipped within 48 business hours. Standard delivery takes 5–7 days. A tracking link is emailed after the order is shipped.",
          "isRequired": true
        },
        {
          "question": "How does the money-back guarantee work?",
          "answer": "Simply return your product within 30 days of purchase to receive a refund.",
          "isRequired": true
        },
        {
          "question": "How do BlueEase Optics reduce eye strain?",
          "answer": "BlueEase Optics use advanced blue light filtering technology that blocks harmful blue light emitted from digital screens. This helps reduce eye strain, dryness, and fatigue, allowing for more comfortable extended screen use.",
          "isRequired": true
        },
        {
          "question": "Will wearing BlueEase Optics improve my sleep quality?",
          "answer": "Yes, BlueEase Optics help improve sleep quality by minimizing blue light exposure, especially during evening screen time. Reduced blue light exposure supports a healthy sleep-wake cycle, making it easier to fall asleep and stay asleep.",
          "isRequired": true
        },
        {
          "question": "Are BlueEase Optics suitable for all types of screens?",
          "answer": "Yes, BlueEase Optics are designed to work with all digital screens, including computers, smartphones, tablets, and TVs. They effectively filter blue light from any device, providing consistent protection and comfort.",
          "isRequired": true
        },
        {
          "question": "Can I wear BlueEase Optics with contact lenses?",
          "answer": "Yes, BlueEase Optics can be comfortably worn with contact lenses. They provide eye protection without interfering with contact lenses, making them suitable for daily screen use.",
          "isRequired": true
        },
        {
          "question": "How should I clean and maintain BlueEase Optics?",
          "answer": "To clean BlueEase Optics, use a microfiber cloth and a lens cleaner designed for optical lenses. Avoid paper towels or rough fabrics, as these can scratch the lenses. Regular cleaning and proper care help maintain clarity and extend product life.",
          "isRequired": true
        }
      ]
    },
    "8": {
      "Id": "112",
      "ProductName": "Cyber Heater",
      "Price": "49.95",
      "inUse": true,
      "Category": "HouseHoldessentials",
      "offerType": "cyberheater",
      "ProductVariation": [{
          "Id": "112",
          "ProductName": "1x Cyber Heater",
          "Price": "49.95",
          "OrderNo": 1,
          "item_id": "682",
          "itemId": ""
        },
        {
          "Id": "112",
          "ProductName": "2x Cyber Heater",
          "Price": "94.91",
          "OrderNo": 2,
          "item_id": "683",
          "itemId": ""
        },
        {
          "Id": "112",
          "ProductName": "3x Cyber Heater",
          "Price": "134.87",
          "OrderNo": 3,
          "item_id": "684",
          "itemId": ""
        },
        {
          "Id": "112",
          "ProductName": "4x Cyber Heater",
          "Price": "169.83",
          "OrderNo": 4,
          "item_id": "685",
          "itemId": ""
        },
        {
          "Id": "112",
          "ProductName": "5x Cyber Heater",
          "Price": "199.80",
          "OrderNo": 5,
          "item_id": "682",
          "itemId": ""
        }
      ],
      "ParentProduct": {
        "Id": "112",
        "ProductName": "Cyber Heater",
        "Price": "0.00",
        "OrderNo": 1,
        "item_id": "682",
        "itemId": ""
      },
      "protectionPlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "687",
        "itemId": ""
      },
      "coveragePlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "688",
        "itemId": ""
      },
      "upsellProduct": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "689",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "1283",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "71",
          "itemId": "",
          "ParentItemId": ""
        }
      ],
      "Image": "images/featured_img7.png",
      "ImageVariation": [
        "images/featured_img7.png",
        "images/featured_img7-1.jpg",
        "images/featured_img7-2.jpg",
        "images/featured_img7-3.jpg",
        "images/featured_img7-4.jpg"
      ],
      "Color": "",
      "Descriptions": "Designed with safe ceramic element interior and cool-touch exterior, Overheat Protection prevents accidents or damages from occurring.  The portable heater allows you to heat up the spaces you are in to reduce energy consumption. You can lower your thermostat and lower your energy bills.  This heater has three operating modes to choose from.  Choose between High (1500W), Low (750W), and fan only modes for flexible heat control. A buit-in thermostat will maintain your desired temperature for optimal efficiency. It is housed with a convenient 180 degree rotating plug with 3-prongs.  Equipped with overheat protection sensors to ensure the heater instantly switches off in high temperature conditions for your complete peace of mind.",
      "Specifications": {
        "Product Dimensions": "4.3' x 2.8' x 6.5' inch",
        "Product Weight": "2.18 lbs"
      },
      "Terms": "",
      "HOW_TO_USE": "Plug in the Cyber Heater, set your desired temperature, and let it instantly warm your space.",
      "DELIVERY_INFO": "This is an American-owned business that doesn't believe it should take 45 days to receive your product from China. Orders are sent from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers depending on speed and efficiency of delivery. Product will be shipped within 48 business hours. Please allow between 5-7 days for standard delivery. You will be emailed a tracking link after your order is shipped. Thank you for your purchase!",
      "FAQ": [{
          "question": "How long does shipping take?",
          "answer": "Orders are shipped from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers based on delivery speed and efficiency. Products are shipped within 48 business hours. Standard delivery takes 5–7 days. A tracking link is emailed after the order is shipped.",
          "isRequired": true
        },
        {
          "question": "How does the money-back guarantee work?",
          "answer": "Simply return your product within 30 days of purchase to receive a refund.",
          "isRequired": true
        },
        {
          "question": "Where should I plug Cyber Heater in?",
          "answer": "Cyber Heater is designed for in-wall outlet use only. To reduce the risk of fire or electric shock, connect it directly to a grounded three-prong wall outlet. Do not use it with an extension cord. Please read all safety instructions before use.",
          "isRequired": true
        },
        {
          "question": "What is the power consumption of Cyber Heater?",
          "answer": "Cyber Heater has a power consumption of 800 watts.",
          "isRequired": true
        },
        {
          "question": "Can I use Cyber Heater indoors and outdoors?",
          "answer": "Cyber Heater is intended for indoor use only.",
          "isRequired": true
        },
        {
          "question": "How do I clean Cyber Heater?",
          "answer": "First, turn off Cyber Heater and unplug it from the outlet. Wipe the exterior with a non-abrasive, damp cloth and use mild soap if needed. Dry with a soft cloth and ensure it is completely dry before the next use.",
          "isRequired": true
        },
        {
          "question": "Can I change the remote battery by myself?",
          "answer": "Yes, the remote battery is easy to replace. The battery lasts more than one year and can be purchased from most retail stores.",
          "isRequired": true
        },
        {
          "question": "Is Cyber Heater ETL listed?",
          "answer": "Yes, Cyber Heater is ETL listed.",
          "isRequired": true
        },
        {
          "question": "What are the safety features of Cyber Heater?",
          "answer": "Cyber Heater includes an anti-tip sensor and an automatic shut-off feature for added safety.",
          "isRequired": true
        }
      ]
    },
    "9": {
      "Id": "",
      "ProductName": "Vital Wrist Ball",
      "Price": "",
      "inUse": true,
      "Category": "HealthBeauty",
      "offerType": "vitalwristball",
      "ProductVariation": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 1,
          "item_id": "746",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 2,
          "item_id": "747",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 3,
          "item_id": "748",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 4,
          "item_id": "749",
          "itemId": ""
        }
      ],
      "ParentProduct": {
        "Id": "",
        "ProductName": "",
        "Price": "0.00",
        "OrderNo": 1,
        "item_id": "745",
        "itemId": ""
      },
      "protectionPlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "751",
        "itemId": ""
      },
      "coveragePlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "752",
        "itemId": ""
      },
      "upsellProduct": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "753",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "1285",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "248",
          "itemId": "",
          "ParentItemId": ""
        }
      ],
      "Image": "images/featured_img8.png",
      "ImageVariation": [
        "images/featured_img8.png",
        "images/featured_img8-1.jpg",
        "images/featured_img8-2.jpg",
        "images/featured_img8-3.jpg",
        "images/featured_img8-4.jpg"
      ],
      "Color": "",
      "Descriptions": "Boost your grip, wrist stability, and forearm strength with the Vital Wrist Ball, a compact gyroscopic trainer designed to deliver powerful resistance through simple motion. Equipped with an internal spinning rotor, this hand-powered device intensifies as you rotate it—giving you a highly effective workout in just minutes. The smooth, transparent shell lets you see the gyro in action, while the non-slip grip band ensures full control during high-speed spins. Perfect for athletes, gamers, musicians, and anyone looking to improve strength, coordination, or recovery from wrist fatigue.",
      "Specifications": {
        "Product Dimensions": "2.8 in (Diameter)",
        "Product Weight": "0.55 lb"
      },
      "Terms": "",
      "HOW_TO_USE": "Hold the Vital Wrist Ball, start the rotor with a quick pull or twist, and rotate your wrist in smooth circles to build resistance and strengthen your hand and forearm.",
      "DELIVERY_INFO": "This is an American-owned business that doesn't believe it should take 45 days to receive your product from China. Orders are sent from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers depending on speed and efficiency of delivery. Product will be shipped within 48 business hours. Please allow between 5-7 days for standard delivery. You will be emailed a tracking link after your order is shipped. Thank you for your purchase!",
      "FAQ": [{
          "question": "How long will shipping take?",
          "answer": "Orders are shipped from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers based on delivery speed and efficiency. Products are shipped within 48 business hours. Standard delivery takes 5–7 days. A tracking link is emailed after the order is shipped.",
          "isRequired": true
        },
        {
          "question": "How does the money-back guarantee work?",
          "answer": "Simply return your product within 30 days of purchase to receive a refund.",
          "isRequired": true
        },
        {
          "question": "How does the Vital Wrist Ball work?",
          "answer": "Vital Wrist Ball uses Progressive Gyroscopic Resistance Technology to help rebuild hand and wrist strength. As the ball spins, it creates resistance that automatically adjusts to your strength level, becoming more challenging as strength improves. Just five minutes of daily use can deliver noticeable results.",
          "isRequired": true
        },
        {
          "question": "Who can benefit from using the Vital Wrist Ball?",
          "answer": "Vital Wrist Ball is ideal for seniors, rehabilitation patients, and anyone looking to improve grip strength, reduce hand tremors, or restore hand mobility. It is also suitable for athletes, musicians, and people who rely on strong hand and wrist function.",
          "isRequired": true
        },
        {
          "question": "How long does it take to see results?",
          "answer": "Most users begin noticing improvements in grip strength and reduced tremors within two to three weeks of daily use. The built-in LCD counter helps track progress in real time.",
          "isRequired": true
        },
        {
          "question": "Is the Vital Wrist Ball easy to use?",
          "answer": "Yes, Vital Wrist Ball is simple and intuitive to use. Start it with a quick spin and rotate your wrist to keep it moving. It is lightweight, portable, and convenient to use during short breaks or while relaxing.",
          "isRequired": true
        },
        {
          "question": "Can I use the Vital Wrist Ball if I have arthritis or joint pain?",
          "answer": "Yes, Vital Wrist Ball is designed with gentle resistance that works with your body. It helps improve circulation and build strength without placing excessive stress on the joints, making it suitable for people with arthritis or joint discomfort.",
          "isRequired": true
        }
      ]
    },
    "10": {
      "Id": "",
      "ProductName": "Waveloop Speaker",
      "Price": "",
      "inUse": true,
      "Category": "SmartTech",
      "offerType": "waveloopspeaker",
      "ProductVariation": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 1,
          "item_id": "355",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 2,
          "item_id": "356",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 3,
          "item_id": "357",
          "itemId": ""
        }
      ],
      "ParentProduct": {
        "Id": "",
        "ProductName": "",
        "Price": "0.00",
        "OrderNo": 1,
        "item_id": "352",
        "itemId": ""
      },
      "protectionPlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "358",
        "itemId": ""
      },
      "coveragePlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "359",
        "itemId": ""
      },
      "upsellProduct": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "360",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "362",
          "itemId": "",
          "ParentItemId": ""
        }
      ],
      "Image": "images/featured_img9.png",
      "ImageVariation": [
        "images/featured_img9.png",
        "images/featured_img9-1.jpg",
        "images/featured_img9-2.jpg",
        "images/featured_img9-3.jpg",
        "images/featured_img9-4.jpg"
      ],
      "Color": "",
      "Descriptions": "Experience music in a whole new dimension with the Waveloop Speaker, a futuristic audio device designed to elevate your space and your sound. Its iconic illuminated loop design creates a mesmerizing 360° glow, transforming any room into an ambient visual experience. Built with premium acoustics, Waveloop delivers crisp highs, rich mids, and deep bass—perfect for relaxing, working, or entertaining. The integrated digital clock display and wireless charging pad add extra convenience, making it an all-in-one bedside or desk essential. Whether you're lighting up your nightstand or setting the vibe in your living room, Waveloop brings elegance, functionality, and immersive audio together in one stunning device.",
      "Specifications": {
        "Product Dimensions": "11.8 x 9.4 x 4.7 inches",
        "Product Weight": "2.4 lb"
      },
      "Terms": "",
      "HOW_TO_USE": "Place the Waveloop Speaker on a flat surface, power it on, connect your device via Bluetooth, and enjoy music while using the wireless pad to charge your phone.",
      "DELIVERY_INFO": "This is an American-owned business that doesn't believe it should take 45 days to receive your product from China. Orders are sent from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers depending on speed and efficiency of delivery. Product will be shipped within 48 business hours. Please allow between 5-7 days for standard delivery. You will be emailed a tracking link after your order is shipped. Thank you for your purchase!",
      "FAQ": [{
          "question": "How long will shipping take?",
          "answer": "Orders are shipped from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers based on delivery speed and efficiency. Products are shipped within 48 business hours. Standard delivery takes 5–7 days. A tracking link is emailed after the order is shipped.",
          "isRequired": true
        },
        {
          "question": "How does the money-back guarantee work?",
          "answer": "Simply return your product within 30 days of purchase to receive a refund.",
          "isRequired": true
        },
        {
          "question": "What is Waveloop Speaker?",
          "answer": "Waveloop Speaker is a multifunctional bedside device that combines a Bluetooth speaker, a 15 W wireless charger, an RGB atmosphere lamp, an alarm clock, and a charging station. All features can be controlled through a downloadable app.",
          "isRequired": true
        },
        {
          "question": "How can I control the features of Waveloop Speaker?",
          "answer": "All features, including light color and brightness, alarm settings, and phone answering, can be managed through the companion app for a fully customizable experience.",
          "isRequired": true
        },
        {
          "question": "What lighting options does Waveloop Speaker offer?",
          "answer": "Waveloop Speaker offers 10 different light color modes with adjustable brightness, allowing you to create various moods and ambient lighting effects.",
          "isRequired": true
        },
        {
          "question": "Can Waveloop Speaker charge my phone wirelessly?",
          "answer": "Yes, Waveloop Speaker supports 15 W fast wireless charging. Simply place a compatible smartphone on the device to start charging.",
          "isRequired": true
        },
        {
          "question": "How do I set the clock and alarm on Waveloop Speaker?",
          "answer": "Double-click the “M” button to enter clock mode. Use the buttons to set hours and minutes. The device returns to Bluetooth mode automatically after about two minutes. Long-pressing allows you to switch between 12-hour and 24-hour time formats.",
          "isRequired": true
        },
        {
          "question": "Does Waveloop Speaker support hands-free calls?",
          "answer": "Yes, Waveloop Speaker includes hands-free calling functionality, allowing you to answer calls directly through the built-in speaker.",
          "isRequired": true
        },
        {
          "question": "What’s included in the package when I buy Waveloop Speaker?",
          "answer": "The package includes the Waveloop Speaker, a user manual, and a USB Type-C quick-charge cable for setup and charging.",
          "isRequired": true
        },
        {
          "question": "Is Waveloop Speaker easy to set up and use?",
          "answer": "Yes, Waveloop Speaker is designed for quick and easy setup. Plug it in, connect your phone via Bluetooth, and place your device on the wireless charging pad. The intuitive app makes adjusting lights, alarms, and other features simple, even for first-time users.",
          "isRequired": true
        }
      ]
    },
    "11": {
      "Id": "",
      "ProductName": "Vita Feet Relieve",
      "Price": "",
      "inUse": true,
      "Category": "HealthBeauty",
      "offerType": "vitafeetrelieve",
      "ProductVariation": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 1,
          "item_id": "778",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 2,
          "item_id": "779",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 4,
          "item_id": "780",
          "itemId": ""
        }
      ],
      "ParentProduct": {
        "Id": "",
        "ProductName": "",
        "Price": "0.00",
        "OrderNo": 1,
        "item_id": "777",
        "itemId": ""
      },
      "protectionPlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "781",
        "itemId": ""
      },
      "coveragePlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "782",
        "itemId": ""
      },
      "upsellProduct": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "784",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "523",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "516",
          "itemId": "",
          "ParentItemId": ""
        }
      ],
      "Image": "images/featured_img10.png",
      "ImageVariation": [
        "images/featured_img10.png",
        "images/featured_img10-1.jpg",
        "images/featured_img10-2.jpg",
        "images/featured_img10-3.jpg",
        "images/featured_img10-4.jpg"
      ],
      "Color": "",
      "Descriptions": "Vita Feet Relieve is a compact, at-home foot wellness device designed to enhance comfort through a combination of heat, compression, and gentle massage. Built around a “Triple Method” approach, the device is engineered to support relaxation, promote circulation, and provide a soothing experience for tired feet. The system delivers controlled warmth (up to 131°F), paired with targeted compression and rhythmic massage patterns to help create a calming and restorative environment. With consistent daily use,such as 15-minute sessions, users may experience improved comfort and a refreshed sensation in their feet after long periods of standing or activity.Designed for convenience and ease of use, Vita Feet Relieve offers a practical solution for individuals seeking to incorporate regular foot care and relaxation into their routine, without the need for frequent clinic visits. Its portable design makes it suitable for use at home or in office settings.This product is intended for general wellness and relaxation purposes and is not intended to diagnose, treat, cure, or prevent any medical condition.",
      "Specifications": {
        "Product Dimensions": "10.2 × 5.5 × 1.8 inches",
        "Product Weight": "0.8 lb"
      },
      "Terms": "",
      "HOW_TO_USE": "Wrap the Vita Feet Relieve around your ankle, secure the strap, power it on, select your preferred massage mode, and relax.",
      "DELIVERY_INFO": "This is an American-owned business that doesn't believe it should take 45 days to receive your product from China. Orders are sent from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers depending on speed and efficiency of delivery. Product will be shipped within 48 business hours. Please allow between 5-7 days for standard delivery. You will be emailed a tracking link after your order is shipped. Thank you for your purchase!",
      "FAQ": [{
          "question": "How long does shipping take?",
          "answer": "Orders are shipped from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers based on delivery speed and efficiency. Products are shipped within 48 business hours. Standard delivery takes 5–7 days. A tracking link is emailed after the order is shipped.",
          "isRequired": true
        },
        {
          "question": "How does the money-back guarantee work?",
          "answer": "Simply return your product within 30 days of purchase to receive a refund.",
          "isRequired": true
        },
        {
          "question": "How long should I use Vita Feet Relieve each day?",
          "answer": "Vita Feet Relieve is recommended for 15 minutes once or twice daily. Most users begin noticing relief within the first week of consistent use.",
          "isRequired": true
        },
        {
          "question": "Can I use Vita Feet Relieve on either foot?",
          "answer": "Yes, Vita Feet Relieve is designed to fit either foot. Many users choose to purchase two units to treat both feet at the same time.",
          "isRequired": true
        },
        {
          "question": "Is Vita Feet Relieve safe for people with diabetes or neuropathy?",
          "answer": "Vita Feet Relieve is designed to support nerve pain relief, including discomfort associated with diabetic neuropathy. It is recommended to consult a healthcare provider before starting any new treatment.",
          "isRequired": true
        },
        {
          "question": "Does the heat get too hot?",
          "answer": "No, the built-in heat function is gentle and adjustable. It is designed to provide soothing warmth without overheating, making it suitable for sensitive feet.",
          "isRequired": true
        },
        {
          "question": "How soon until I feel the results?",
          "answer": "Many users experience relief within the first few sessions, especially from burning or tingling sensations. More noticeable improvements in comfort and mobility often appear with consistent daily use over two to four weeks.",
          "isRequired": true
        },
        {
          "question": "Can I wear Vita Feet Relieve while walking or standing?",
          "answer": "No, Vita Feet Relieve is designed for use while seated or lying down. It is a therapeutic device and not intended for active movement.",
          "isRequired": true
        }
      ]
    },
    "12": {
      "Id": "",
      "ProductName": "Breathe Green Nano Sparkle",
      "Price": "",
      "inUse": true,
      "Category": "Automotive",
      "offerType": "breathegreennanosparkle",
      "ProductVariation": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 1,
          "item_id": "1161",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 2,
          "item_id": "1162",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 3,
          "item_id": "1163",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 4,
          "item_id": "1164",
          "itemId": ""
        }
      ],
      "ParentProduct": {
        "Id": "",
        "ProductName": "",
        "Price": "0.00",
        "OrderNo": 1,
        "item_id": "1161",
        "itemId": ""
      },
      "protectionPlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "1165",
        "itemId": ""
      },
      "coveragePlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "1166",
        "itemId": ""
      },
      "upsellProduct": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "1167",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "1169",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "1173",
          "itemId": "",
          "ParentItemId": ""
        }
      ],
      "Image": "images/featured_img11.png",
      "ImageVariation": [
        "images/featured_img11.png",
        "images/featured_img11-1.jpg",
        "images/featured_img11-2.jpg",
        "images/featured_img11-3.jpg",
        "images/featured_img11-4.jpg"
      ],
      "Color": "",
      "Descriptions": "Breathe Green Nano Sparkle is the ultimate car lover's dream cleaning tool. The cloth is made of nanofiber which is more optimal than microfiber for delicate surfaces such as porcelain, glass, and your car's exterior and interior. The metal powder and mineral oil enhance its ability to pick up fragments of dust, dirt, and grime without creating scratches that cheapen the look of your car over time. Keep your shiny new car sparkling like new for years with Breathe Green Nano Sparkle.",
      "Specifications": {
        "Product Dimensions": "Approx. 14 cm x 5 cm x 3 cm",
        "Product Weight": "0.88 Ounces"
      },
      "Terms": "",
      "HOW_TO_USE": "To use Breathe Green Nano Sparkle, simply wet the cloth with clean water, wring out the excess, and gently wipe the surface you want to clean using straight, smooth strokes. The nanofiber material combined with metal powder and mineral oil will lift dust, dirt, and grime without needing harsh pressure.",
      "DELIVERY_INFO": "This is an American-owned business that doesn't believe it should take 45 days to receive your product from China. Orders are sent from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers depending on speed and efficiency of delivery. Product will be shipped within 48 business hours. Please allow between 5-7 days for standard delivery. You will be emailed a tracking link after your order is shipped. Thank you for your purchase!",
      "FAQ": [{
          "question": "How long will shipping take?",
          "answer": "Orders are shipped from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers based on delivery speed and efficiency. Products are shipped within 48 business hours. Standard delivery takes 5–7 days. A tracking link is emailed after the order is shipped.",
          "isRequired": true
        },
        {
          "question": "How does the money-back guarantee work?",
          "answer": "Simply return your product within 30 days of purchase to receive a refund.",
          "isRequired": true
        },
        {
          "question": "What is Breathe Green Nano Sparkle?",
          "answer": "Breathe Green Nano Sparkle is an advanced cleaning cloth designed with nanotechnology to deliver superior cleaning performance. It contains embedded nanofibers that remove dirt, dust, and smudges from surfaces without the need for chemical cleaners.",
          "isRequired": true
        },
        {
          "question": "How does Breathe Green Nano Sparkle work?",
          "answer": "Breathe Green Nano Sparkle uses microscopic nanofibers to capture and trap dirt particles. When wiping a surface, the fibers lift away debris and leave the surface clean and streak-free.",
          "isRequired": true
        },
        {
          "question": "What surfaces can I use Breathe Green Nano Sparkle on?",
          "answer": "Breathe Green Nano Sparkle works on a wide range of surfaces including glass, mirrors, stainless steel, chrome, plastic, ceramic, eyeglasses, and electronic screens.",
          "isRequired": true
        },
        {
          "question": "Do I need to use any cleaning solutions with Breathe Green Nano Sparkle?",
          "answer": "No, cleaning solutions are not required. Simply dampen Breathe Green Nano Sparkle with water and begin cleaning.",
          "isRequired": true
        },
        {
          "question": "Is Breathe Green Nano Sparkle reusable?",
          "answer": "Yes, Breathe Green Nano Sparkle is fully reusable. After use, rinse it with water, wring it out, and allow it to air dry before the next use.",
          "isRequired": true
        },
        {
          "question": "How long does Breathe Green Nano Sparkle last?",
          "answer": "With proper care and regular maintenance, Breathe Green Nano Sparkle can last for months or even years depending on usage frequency.",
          "isRequired": true
        },
        {
          "question": "Can I wash Breathe Green Nano Sparkle in a washing machine?",
          "answer": "Hand washing with mild soap and warm water is recommended. Avoid bleach and fabric softeners, as they can reduce cleaning effectiveness.",
          "isRequired": true
        },
        {
          "question": "Is Breathe Green Nano Sparkle safe for the environment?",
          "answer": "Yes, Breathe Green Nano Sparkle is eco-friendly because it eliminates the need for chemical cleaners and reduces reliance on disposable cleaning wipes.",
          "isRequired": true
        },
        {
          "question": "Can I use Breathe Green Nano Sparkle for cleaning electronic screens?",
          "answer": "Yes, Breathe Green Nano Sparkle is safe for cleaning electronic screens including smartphones, tablets, laptops, and TVs without scratching or damaging them.",
          "isRequired": true
        },
        {
          "question": "Where can I purchase Breathe Green Nano Sparkle?",
          "answer": "Breathe Green Nano Sparkle is available for purchase online through our website and from select authorized retail stores.",
          "isRequired": true
        }
      ]
    },
    "13": {
      "Id": "",
      "ProductName": "Kizu Cushion",
      "Price": "",
      "inUse": true,
      "Category": "HouseHoldessentials",
      "offerType": "kizucushion",
      "ProductVariation": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 1,
          "item_id": "632",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 2,
          "item_id": "633",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 3,
          "item_id": "634",
          "itemId": ""
        }
      ],
      "ParentProduct": {
        "Id": "",
        "ProductName": "",
        "Price": "0.00",
        "OrderNo": 1,
        "item_id": "631",
        "itemId": ""
      },
      "protectionPlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "637",
        "itemId": ""
      },
      "coveragePlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "638",
        "itemId": ""
      },
      "upsellProduct": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "639",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "23084",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "641",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "523",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "516",
          "itemId": "",
          "ParentItemId": ""
        }
      ],
      "Image": "images/featured_img18.png",
      "ImageVariation": [
        "images/featured_img18.png",
        "images/featured_img18-1.jpg",
        "images/featured_img18-2.jpg",
        "images/featured_img18-3.jpg",
        "images/featured_img18-4.jpg"
      ],
      "Color": "",
      "Descriptions": "The Kizu Cushion is a flexible, honeycomb gel seat cushion designed to provide superior comfort and pressure relief. Its breathable gel structure distributes weight evenly, making it perfect for office chairs, car seats, wheelchairs, and long sitting hours.",
      "Specifications": {
        "Product Dimensions": "Approx. 16 in x 14 in x 1.5 in",
        "Product Weight": "Approx. 28-32 ounces"
      },
      "Terms": "",
      "HOW_TO_USE": "Place the cushion on any chair, car seat, or bench. Sit on the gel side for maximum comfort and airflow. Use the included non-slip cover for added stability and protection.",
      "DELIVERY_INFO": "This is an American-owned business that doesn't believe it should take 45 days to receive your product from China. Orders are sent from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers depending on speed and efficiency of delivery. Product will be shipped within 48 business hours. Please allow between 5-7 days for standard delivery. You will be emailed a tracking link after your order is shipped. Thank you for your purchase!",
      "FAQ": [{
          "question": "How long will shipping take?",
          "answer": "Orders are shipped from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers based on delivery speed and efficiency. Products are shipped within 48 business hours. Standard delivery takes 5–7 days. A tracking link is emailed after the order is shipped.",
          "isRequired": true
        },
        {
          "question": "How does the money-back guarantee work?",
          "answer": "Simply return your product within 30 days of purchase to receive a refund.",
          "isRequired": true
        },
        {
          "question": "What is the Kizu Cushion?",
          "answer": "Kizu Cushion is designed to relieve pressure, support proper spinal alignment, and provide lasting comfort. It works with a wide range of seating options, including office chairs, car seats, and couches.",
          "isRequired": true
        },
        {
          "question": "Is the Kizu Cushion lightweight?",
          "answer": "Yes, Kizu Cushion is lightweight and easy to carry. It weighs less than two pounds, making it convenient for daily use and travel.",
          "isRequired": true
        },
        {
          "question": "Can the Kizu Cushion support my weight?",
          "answer": "Yes, Kizu Cushion is built with a durable design that provides reliable support and maintains its shape even with regular use.",
          "isRequired": true
        },
        {
          "question": "Does the Kizu Cushion help with sciatica or tailbone pain?",
          "answer": "Yes, Kizu Cushion helps reduce pressure on the hips, spine, and tailbone. It is designed to support proper posture and reduce discomfort caused by prolonged sitting.",
          "isRequired": true
        },
        {
          "question": "Can the Kizu Cushion help elderly individuals with sitting discomfort?",
          "answer": "Yes, Kizu Cushion is well suited for seniors who experience discomfort from extended sitting. It provides added comfort and support to help reduce lower back strain.",
          "isRequired": true
        },
        {
          "question": "Is the Kizu Cushion suitable for travel?",
          "answer": "Yes, Kizu Cushion is lightweight, portable, and easy to pack. It folds easily and fits into bags or luggage, making it ideal for travel use.",
          "isRequired": true
        }
      ]
    },
    "1": {
      "Id": "",
      "ProductName": "Magic Kick",
      "Price": "",
      "inUse": true,
      "Category": "ToysKidsBaby",
      "isOffer": true,
      "offerType": "magickickhoversoccerball",
      "offerLogo": "images/logo-white.png",
      "ProductVariation": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 1,
          "item_id": "1463",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 2,
          "item_id": "1464",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 3,
          "item_id": "1465",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 4,
          "item_id": "1466",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 5,
          "item_id": "1467",
          "itemId": ""
        }
      ],
      "ParentProduct": {
        "Id": "",
        "ProductName": "",
        "Price": "0.00",
        "OrderNo": 1,
        "item_id": "555",
        "itemId": ""
      },
      "protectionPlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "1468",
        "itemId": ""
      },
      "coveragePlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "1469",
        "itemId": ""
      },
      "upsellProduct": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "1470",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "1472",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "1595",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "1605",
          "itemId": "",
          "ParentItemId": ""
        }
      ],
      "Image": "images/banner-slide1.png",
      "ImageVariation": [
        "images/banner-slide1.png",
        "images/banner-slide2.png",
        "images/banner-slide3.png",
        "images/banner-slide4.png",
        "images/banner-slide5.png"
      ],
      "Color": "",
      "Short_Descript": "Perfect for kids and adults, this hover soccer ball can turn a dull day mooching around the home into quality fun for the whole family.",
      "Descriptions": "The Magic Kick is a hover-style indoor football toy that glides smoothly on floors, letting kids enjoy soccer play without damaging furniture or walls. Its soft foam bumper and LED airflow design make indoor kicking fun, safe, and exciting.",
      "Specifications": {
        "Product Dimensions": "Approx. 7.1 in x 7.1 in x 2.8 in",
        "Product Weight": "Approx. 6-7 ounces"
      },
      "Terms": "",
      "HOW_TO_USE": "Insert batteries into the bottom compartment. Turn on the switch to activate the hover airflow. Kick or push the ball gently and let it glide across smooth floors. Ideal for indoor soccer, hallway games, and kids' play areas.",
      "DELIVERY_INFO": "This is an American-owned business that doesn't believe it should take 45 days to receive your product from China. Orders are sent from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers depending on speed and efficiency of delivery. Product will be shipped within 48 business hours. Please allow between 5-7 days for standard delivery. You will be emailed a tracking link after your order is shipped. Thank you for your purchase!",
      "FAQ": [{
          "question": "How long will shipping take?",
          "answer": "This is an American-owned business that doesn't believe it should take 45 days to receive your product from China. Orders are sent from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers depending on speed and efficiency of delivery. Product will be shipped within 48 business hours. Please allow between 5-7 days for standard delivery. You will be emailed a tracking link after your order is shipped. Thank you for your purchase!",
          "isRequired": true
        },
        {
          "question": "How does the money-back guarantee work?",
          "answer": "Simply return your product and we'll give you a refund for 30 days.",
          "isRequired": true
        },
        {
          "question": "What is Magic Kick?",
          "answer": "Magic Kick is a unique indoor sports toy that combines soccer and air hockey. It hovers above the ground on a cushion of air and allows you to play soccer-like games indoors without damaging furniture or walls.",
          "isRequired": true
        },
        {
          "question": "How does the Magic Kick work?",
          "answer": "Magic Kick is equipped with a built-in fan that generates a cushion of air, lifting it slightly above the ground. This air cushion allows the ball to glide smoothly on flat surfaces, simulating the experience of playing soccer indoors.",
          "isRequired": true
        },
        {
          "question": "What surfaces can I play the Magic Kick on?",
          "answer": "You can play the Magic Kick on a variety of flat indoor surfaces, such as hardwood floors, tile, low-pile carpets, and even smooth concrete. It may not work as effectively on high-pile carpets or uneven surfaces.",
          "isRequired": true
        },
        {
          "question": "Is it safe to play with the Magic Kick indoors?",
          "answer": "Yes, Magic Kick is designed to be safe for indoor use. It has soft, padded edges to prevent damage to furniture and walls, making it suitable for playing in living rooms, bedrooms, and other indoor spaces.",
          "isRequired": true
        },
        {
          "question": "What age group is Magic Kick suitable for?",
          "answer": "Magic Kick is suitable for kids and adults of all ages. It's a great way to engage in active play and improve coordination, making it fun for both children and adults.",
          "isRequired": true
        },
        {
          "question": "Can I use Magic Kick outdoors?",
          "answer": "Magic Kick is primarily designed for indoor use. Using it outdoors on uneven or rough surfaces may affect its performance, and it's not recommended for use in windy conditions.",
          "isRequired": true
        },
        {
          "question": "Does Magic Kick require batteries?",
          "answer": "Yes, most Magic Kick toys require batteries to power the internal fan. Make sure to check the product specifications to see what type and how many batteries are needed.",
          "isRequired": true
        },
        {
          "question": "Can I adjust the height of Magic Kick above the ground?",
          "answer": "No, the height of Magic Kick is fixed and determined by the built-in fan. It hovers a few inches above the ground, creating a stable and consistent playing experience.",
          "isRequired": true
        },
        {
          "question": "How do I clean Magic Kick?",
          "answer": "You can clean Magic Kick by wiping it with a damp cloth. Avoid submerging it in water or using harsh chemicals that could damage the toy or the fan.",
          "isRequired": true
        },
        {
          "question": "Is Magic Kick suitable for solo play or better with multiple players?",
          "answer": "While you can enjoy solo play with Magic Kick, it is even more fun when played with friends or family. You can set up mini soccer matches, practice dribbling skills, or create your own games with others.",
          "isRequired": true
        },
      ],
      "productFeatures": [{
          "step": 1,
          "title": "Foam Protection",
          "description": "Specially designed with foam-like material, so you can play with it indoors without worrying about damaging furniture, walls, and more.",
          "image": "images/prd-row-img1.png"
        },
        {
          "step": 2,
          "title": "LED Lights",
          "description": "The built-in LED lights add excitement to the game by creating a colorful and visually engaging experience, especially in dimly lit rooms.",
          "image": "images/prd-row-img2.png"
        },
        {
          "step": 3,
          "title": "Smooth & Easy Glide",
          "description": "Its hover technology allows it to glide smoothly over various indoor surfaces, providing a realistic soccer experience without any friction.",
          "image": "images/prd-row-img3.png"
        },
        {
          "step": 4,
          "title": "Long-Lasting Power",
          "description": "A long-lasting power source ensures hours of uninterrupted playtime without the need to replace a battery.",
          "image": "images/prd-row-img4.png"
        },
        {
          "step": 5,
          "title": "Encourages Social Interaction",
          "description": "Magic Kick fosters social interaction and teamwork while promoting bonding through healthy competition among family members and friends.",
          "image": "images/prd-row-img5.png"
        }
      ]
    },
    "15": {
      "Id": "",
      "ProductName": "Aqua Vital Bottle",
      "Price": "",
      "inUse": true,
      "Category": "SportsOutdoors",
      "offerType": "aquavitalbottle",
      "ProductVariation": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 1,
          "item_id": "788",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 2,
          "item_id": "789",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 3,
          "item_id": "790",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 4,
          "item_id": "791",
          "itemId": ""
        }
      ],
      "ParentProduct": {
        "Id": "",
        "ProductName": "",
        "Price": "0.00",
        "OrderNo": 1,
        "item_id": "787",
        "itemId": ""
      },
      "protectionPlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "792",
        "itemId": ""
      },
      "coveragePlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "793",
        "itemId": ""
      },
      "upsellProduct": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "794",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "69",
          "itemId": "",
          "ParentItemId": ""
        }
      ],
      "Image": "images/featured_img16.png",
      "ImageVariation": [
        "images/featured_img16.png",
        "images/featured_img16-1.jpg",
        "images/featured_img16-2.jpg",
        "images/featured_img16-3.jpg",
        "images/featured_img16-4.jpg"
      ],
      "Color": "",
      "Descriptions": "The Aqua Vital is a sleek USB-rechargeable hydrogen water generator designed to enhance your drinking experience. With a 1000mAh battery and advanced electrolysis technology, it helps create cleaner, fresher-tasting water anytime, anywhere.",
      "Specifications": {
        "Product Dimensions": "Approx. 11 in x 4.4 in x 4.4 in",
        "Product Weight": "Approx. 12-14 ounces"
      },
      "Terms": "",
      "HOW_TO_USE": "Fill the bottle with clean drinking water. Press the power button to start the hydrogenation process. Wait a few minutes until the bubbling cycle completes. Enjoy your freshly enhanced water. Recharge using any USB port when battery runs low.",
      "DELIVERY_INFO": "This is an American-owned business that doesn't believe it should take 45 days to receive your product from China. Orders are sent from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers depending on speed and efficiency of delivery. Product will be shipped within 48 business hours. Please allow between 5-7 days for standard delivery. You will be emailed a tracking link after your order is shipped. Thank you for your purchase!",
      "FAQ": [{
          "question": "How long will shipping take?",
          "answer": "Orders are shipped from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers based on delivery speed and efficiency. Products are shipped within 48 business hours. Standard delivery takes 5–7 days. A tracking link is emailed after the order is shipped.",
          "isRequired": true
        },
        {
          "question": "How does the money-back guarantee work?",
          "answer": "Simply return your product within 30 days of purchase to receive a refund.",
          "isRequired": true
        },
        {
          "question": "What is the Aqua Vital Bottle?",
          "answer": "The Aqua Vital Bottle is a hydrogen water bottle designed to infuse drinking water with molecular hydrogen to support hydration and overall wellness.",
          "isRequired": true
        },
        {
          "question": "How does the Aqua Vital Bottle work?",
          "answer": "The Aqua Vital Bottle uses advanced technology to generate and infuse molecular hydrogen into water. Hydrogen is known for its antioxidant properties and wellness benefits.",
          "isRequired": true
        },
        {
          "question": "What are the benefits of drinking hydrogen-infused water?",
          "answer": "Hydrogen-infused water supports improved hydration, increased energy levels, enhanced athletic performance, and antioxidant activity, while also helping support overall well-being.",
          "isRequired": true
        },
        {
          "question": "How do I use the Aqua Vital Bottle?",
          "answer": "Fill the bottle with clean, filtered water, press the button to start the hydrogen infusion process, and wait a few minutes before drinking.",
          "isRequired": true
        },
        {
          "question": "Is the Aqua Vital Bottle safe to use?",
          "answer": "Yes, the Aqua Vital Bottle is safe to use. It is made with high-quality, BPA-free materials and uses controlled hydrogen infusion technology designed for safe consumption.",
          "isRequired": true
        },
        {
          "question": "Can I use the Aqua Vital Bottle with beverages other than water?",
          "answer": "No, the Aqua Vital Bottle is designed for use with water only. Using other beverages can reduce performance and damage the device.",
          "isRequired": true
        },
        {
          "question": "How long does the hydrogen infusion process take?",
          "answer": "The hydrogen infusion process takes only a few minutes. The bottle indicates when the water is ready to drink.",
          "isRequired": true
        },
        {
          "question": "How often should I use the Aqua Vital Bottle?",
          "answer": "The Aqua Vital Bottle can be used multiple times throughout the day and fits easily into a daily hydration routine.",
          "isRequired": true
        },
        {
          "question": "Can I clean the Aqua Vital Bottle in a dishwasher?",
          "answer": "No, the Aqua Vital Bottle should not be placed in a dishwasher. Rinse it with warm water and mild soap, and avoid submerging the electronic components.",
          "isRequired": true
        }
      ]
    },
    "16": {
      "Id": "",
      "ProductName": "Furthrive",
      "Price": "",
      "inUse": true,
      "isOffer": true,
      "offerType": "furthrive",
      "offerLogo": "images/logo-furthrive.png",
      "Category": "Justforkids",
      "offerType": "furthrive",
      "ProductVariation": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 1,
          "item_id": "227",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 2,
          "item_id": "228",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 3,
          "item_id": "229",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 4,
          "item_id": "917",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 5,
          "item_id": "918",
          "itemId": ""
        }
      ],
      "ParentProduct": {
        "Id": "",
        "ProductName": "",
        "Price": "0.00",
        "OrderNo": 1,
        "item_id": "215",
        "itemId": ""
      },
      "protectionPlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "792",
        "itemId": ""
      },
      "coveragePlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "793",
        "itemId": ""
      },
      "upsellProduct": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "794",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "69",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "69",
          "itemId": "",
          "ParentItemId": ""
        }
      ],
      "Image": "images/black-trans2.png",
      "ImageVariation": [
        "images/black-trans2.png",
        "images/featured_img15-1.jpg",
        "images/featured_img15-2.jpg",
        "images/featured_img15-3.jpg",
        "images/featured_img15-4.jpg"
      ],
      "Color": "",
      "Short_Descript": "Unleash Your Dog's Inner Space Cadet with Blast Off Ball",
      "Descriptions": "The Furthrive GPS is a fun transforming bounce toy that shifts from a flat disc into a popping ball during play. Designed with vibrant colors and a durable build, it keeps kids active, entertained, and engaged indoors or outdoors.",
      "Specifications": {
        "Product Dimensions": "Approx. 6.3 inches x 6.3 inches x 6.3 inches",
        "Product Weight": "Approx. 5-6 ounces"
      },
      "Terms": "",
      "HOW_TO_USE": "Press the ball downward to flatten it into disc mode. Throw the disc — it will pop back into ball shape after a short delay. Play catch, toss, or bounce for endless active fun.",
      "DELIVERY_INFO": "This is an American-owned business that doesn't believe it should take 45 days to receive your product from China. Orders are sent from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers depending on speed and efficiency of delivery. Product will be shipped within 48 business hours. Please allow between 5-7 days for standard delivery. You will be emailed a tracking link after your order is shipped. Thank you for your purchase!",
      "FAQ": [{
          "question": "How long will shipping take?",
          "answer": "Orders are shipped from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers based on delivery speed and efficiency. Products are shipped within 48 business hours. Standard delivery takes 5–7 days. A tracking link is emailed after the order is shipped.",
          "isRequired": true
        },
        {
          "question": "How does the money-back guarantee work?",
          "answer": "Simply return your product within 30 days of purchase to receive a refund.",
          "isRequired": true
        },
        {
          "question": "What is the Furthrive?",
          "answer": "Furthrive is a durable, chew-resistant dog toy designed to keep dogs entertained and active while also supporting dental health.",
          "isRequired": true
        },
        {
          "question": "What makes Furthrive different from other dog toys?",
          "answer": "Furthrive is made from pet-safe, non-toxic materials and features a bacon scent that dogs love. It is built to withstand heavy chewing.",
          "isRequired": true
        },
        {
          "question": "Is Furthrive safe for all dog breeds and sizes?",
          "answer": "Yes, Furthrive is designed for dogs of all sizes. Supervision is recommended during playtime, especially for aggressive chewers.",
          "isRequired": true
        },
        {
          "question": "Does Furthrive help with teething or anxiety?",
          "answer": "Yes, the textured surface helps soothe teething discomfort and provides mental stimulation that can reduce boredom and anxiety.",
          "isRequired": true
        },
        {
          "question": "Can Furthrive be used outdoors?",
          "answer": "Yes, Furthrive is suitable for both indoor and outdoor play. It also floats on water, making it ideal for pool or beach use.",
          "isRequired": true
        },
        {
          "question": "How do I clean Furthrive?",
          "answer": "Rinse Furthrive under warm water with mild soap and allow it to air dry. Avoid harsh chemicals and do not place it in the dishwasher.",
          "isRequired": true
        }
      ]
    },
    "17": {
      "Id": "",
      "ProductName": "Alpha Vest",
      "Price": "",
      "inUse": true,
      "Category": "SportsOutdoors",
      "offerType": "alphavest",
      "ProductVariation": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 1,
          "item_id": "1355",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 2,
          "item_id": "1356",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 3,
          "item_id": "1357",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 4,
          "item_id": "1358",
          "itemId": ""
        }
      ],
      "SizeParent": [{
          "Id": "",
          "ProductName": "",
          "Price": "0.00",
          "OrderNo": 1,
          "item_id": "1347",
          "itemId": "",
          "size": "XS"
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "0.00",
          "OrderNo": 1,
          "item_id": "1348",
          "itemId": "",
          "size": "S"
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "0.00",
          "OrderNo": 1,
          "item_id": "1349",
          "itemId": "",
          "size": "M"
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "0.00",
          "OrderNo": 1,
          "item_id": "1350",
          "itemId": "",
          "size": "L"
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "0.00",
          "OrderNo": 1,
          "item_id": "1351",
          "itemId": "",
          "size": "XL"
        }, {
          "Id": "",
          "ProductName": "",
          "Price": "0.00",
          "OrderNo": 1,
          "item_id": "1352",
          "itemId": "",
          "size": "XXL"
        }
      ],
      "ParentProduct": {
        "Id": "",
        "ProductName": "",
        "Price": "0.00",
        "OrderNo": 1,
        "item_id": "1349",
        "itemId": ""
      },
      "protectionPlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "1359",
        "itemId": ""
      },
      "coveragePlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "1360",
        "itemId": ""
      },
      "upsellProduct": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "1361",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "69",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "1365",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "1369",
          "itemId": "",
          "ParentItemId": ""
        }
      ],
      "Image": "images/featured_img14.png",
      "ImageVariation": [
        "images/featured_img14.png",
        "images/featured_img14-1.jpg",
        "images/featured_img14-2.jpg",
        "images/featured_img14-3.jpg",
        "images/featured_img14-4.jpg"
      ],
      "Color": "",
      "Descriptions": "The Alpha Heat Vest is a high-performance heated vest designed to keep you warm in extreme cold with advanced heating technology. Built with multiple heating zones across the chest, back, and shoulders, it delivers fast, consistent warmth exactly where you need it. Made from lightweight, breathable, and water-resistant material, the vest is comfortable for daily wear, outdoor activities, travel, and winter work. It operates using a USB-powered heat system compatible with most power banks, giving you adjustable heat levels for customized comfort throughout the day.",
      "Specifications": {
        "Product Dimensions": "Approx. 14 cm x 5 cm x 3 cm",
        "Product Weight": "0.88 Ounces"
      },
      "Terms": "",
      "HOW_TO_USE": "To use the Alpha Heat Vest, connect a power bank to the USB cable inside the vest pocket, press the power button on the chest to turn it on, and choose your preferred heat level. Wear it normally and enjoy instant, adjustable warmth.",
      "DELIVERY_INFO": "This is an American-owned business that doesn't believe it should take 45 days to receive your product from China. Orders are sent from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers depending on speed and efficiency of delivery. Product will be shipped within 48 business hours. Please allow between 5-7 days for standard delivery. You will be emailed a tracking link after your order is shipped. Thank you for your purchase!",
      "FAQ": [{
          "question": "How long does shipping take?",
          "answer": "Orders are shipped from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers based on delivery speed and efficiency. Products are shipped within 48 business hours. Standard delivery takes 5–7 days. A tracking link is emailed after the order is shipped.",
          "isRequired": true
        },
        {
          "question": "How does the money-back guarantee work?",
          "answer": "Simply return your product within 30 days of purchase to receive a refund.",
          "isRequired": true
        },
        {
          "question": "Does the Alpha Vest package include the battery?",
          "answer": "No, the battery is not included. Alpha Vest works with any 5V power bank. A 10,000mAh lithium-ion power bank is available at a discounted price during checkout or from our store.",
          "isRequired": true
        },
        {
          "question": "How do I turn on my Alpha Vest?",
          "answer": "Ensure your power bank is fully charged and connected to the USB port inside the vest’s inner pocket. Press and hold the power button on the left chest for three seconds. The vest enters a five-minute preheat phase indicated by a flashing red light, then switches to medium heat shown by a solid white light. Press the button briefly to cycle heat levels: red for high, white for medium, and blue for low.",
          "isRequired": true
        },
        {
          "question": "Can I wear my Alpha Vest on an airplane or pack it in my luggage?",
          "answer": "Yes, Alpha Vest is TSA-friendly and suitable for air travel.",
          "isRequired": true
        },
        {
          "question": "How long does the battery last on a full charge?",
          "answer": "Battery life lasts up to eight hours on a full charge, depending on the selected heat level.",
          "isRequired": true
        },
        {
          "question": "Can I wear the Alpha Vest for extended outdoor activities like hiking or camping?",
          "answer": "Yes, Alpha Vest is designed to provide long-lasting warmth and is well suited for extended outdoor activities in cold conditions.",
          "isRequired": true
        },
        {
          "question": "Is Alpha Vest safe to use?",
          "answer": "Yes, Alpha Vest is built with smart overheat protection and durable, weather-resistant materials for safe and reliable performance.",
          "isRequired": true
        },
        {
          "question": "Can I wash my Alpha Vest?",
          "answer": "Yes, remove the power bank before washing. Hand wash or machine wash on a gentle cold cycle, then air dry only. Do not bleach, use fabric softeners, tumble dry, or iron.",
          "isRequired": true
        },
        {
          "question": "How should I wear my Alpha Vest?",
          "answer": "For best heat transfer, wear Alpha Vest with a snug fit. It can be worn over a thin base layer or comfortably under a jacket.",
          "isRequired": true
        }
      ]
    },
    "18": {
      "Id": "",
      "ProductName": "Space Fly Ball",
      "Price": "",
      "inUse": true,
      "Category": "ToysKidsBaby",
      "offerType": "spaceflyball",
      "ProductVariation": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 1,
          "item_id": "1294",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 2,
          "item_id": "1295",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 3,
          "item_id": "1296",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 4,
          "item_id": "1297",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 5,
          "item_id": "1298",
          "itemId": ""
        }
      ],
      "ParentProduct": {
        "Id": "",
        "ProductName": "",
        "Price": "0.00",
        "OrderNo": 1,
        "item_id": "1290",
        "itemId": ""
      },
      "protectionPlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "1299",
        "itemId": ""
      },
      "coveragePlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "1300",
        "itemId": ""
      },
      "upsellProduct": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "1301",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "1303",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "1308",
          "itemId": "",
          "ParentItemId": ""
        }
      ],
      "Image": "images/featured_img13.png",
      "ImageVariation": [
        "images/featured_img13.png",
        "images/featured_img13-1.jpg",
        "images/featured_img13-2.jpg",
        "images/featured_img13-3.jpg",
        "images/featured_img13-4.jpg"
      ],
      "Color": "",
      "Descriptions": "The Space Ball is a fun, gyro-powered flying toy designed to glide, hover, and boomerang through the air with smooth, stable motion. Its lightweight spherical cage protects your hands during play and makes it safe for kids and adults alike. With bright LED lights and a durable build, the Space Ball creates a stunning visual effect as it spins and floats. Rechargeable and easy to control, it's perfect for indoor and outdoor entertainment, tricks, and interactive play.",
      "Specifications": {
        "Product Dimensions": "Approx. 14 cm x 5 cm x 3 cm",
        "Product Weight": "0.88 Ounces"
      },
      "Terms": "",
      "HOW_TO_USE": "To use the Space Ball, charge it with the USB cable, turn it on, and give it a gentle upward toss—the internal motor will activate and make it float or return like a boomerang depending on the angle. Catch it safely by grabbing the sides, then turn it off when done.",
      "DELIVERY_INFO": "This is an American-owned business that doesn't believe it should take 45 days to receive your product from China. Orders are sent from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers depending on speed and efficiency of delivery. Product will be shipped within 48 business hours. Please allow between 5-7 days for standard delivery. You will be emailed a tracking link after your order is shipped. Thank you for your purchase!",
      "FAQ": [{
          "question": "What is it and is it hard to use?",
          "answer": "Space Fly Ball is a flying spinner toy with a hidden drive mechanism that performs aerobatic tricks and stunts. It is easy to learn and can be mastered in just a few minutes. It is fun to play alone or with friends and makes a great gift.",
          "isRequired": true
        },
        {
          "question": "Is it safe?",
          "answer": "Yes, Space Fly Ball features an aerodynamic enclosed wheel design that delivers smooth flight while protecting your hands when launching or catching the ball.",
          "isRequired": true
        },
        {
          "question": "Can kids play with it?",
          "answer": "Yes, Space Fly Ball has been tested for safe use by both children and adults. The enclosed wheel design helps protect hands during play, making it suitable for all ages.",
          "isRequired": true
        },
        {
          "question": "Where can it be used?",
          "answer": "Space Fly Ball can be used both indoors and outdoors without requiring a large space. It works well at home, school, the office, or in the backyard, offering smooth flight and a boomerang-style return.",
          "isRequired": true
        },
        {
          "question": "Does it light up?",
          "answer": "Yes, Space Fly Ball includes built-in LED lights that can be controlled with or without the magic wand. The lights create an eye-catching effect during both day and night play.",
          "isRequired": true
        },
        {
          "question": "Is it durable?",
          "answer": "Space Fly Ball is designed for durability and safety. Its enclosed aerodynamic wheel protects hands and allows for easy catching while performing tricks.",
          "isRequired": true
        },
        {
          "question": "What is the battery life and how do I charge it?",
          "answer": "Space Fly Ball is powered by a 100mAh battery that provides up to 30 minutes of playtime. It charges in approximately 15 minutes using a USB charging interface.",
          "isRequired": true
        }
      ]
    },
    "19": {
      "Id": "",
      "ProductName": "Black Falcon Drone",
      "Price": "",
      "inUse": true,
      "isOffer": true,
      "isAddOn": true,
      "offerType": "blackfalcondrone",
      "isUpsellRelatedProduct": true,
      "offerLogo": "images/blackfalcondrone_logo.png",
      "Category": "ToysKidsBaby",
      "ProductVariation": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 1,
          "item_id": "593",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 2,
          "item_id": "594",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 4,
          "item_id": "595",
          "itemId": ""
        }
      ],
      "ParentProduct": {
        "Id": "",
        "ProductName": "",
        "Price": "0.00",
        "OrderNo": 1,
        "item_id": "587",
        "itemId": ""
      },
      "protectionPlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "773",
        "itemId": ""
      },
      "coveragePlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "774",
        "itemId": ""
      },
      "upsellProduct": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "598",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "775",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "588",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "605",
          "itemId": "",
          "ParentItemId": ""
        }
      ],
      "Image": "images/featured_img12.png",
      "ImageVariation": [
        "images/featured_img12.png",
        "images/featured_img12-1.jpg",
        "images/featured_img12-2.jpg",
        "images/featured_img12-3.jpg",
        "images/featured_img12-4.jpg",
        "images/featured_img12-5.jpg",
        "images/featured_img12-6.jpg",
      ],
      "Color": "",
      "Short_Descript": "A marvel of engineering and design, the most rated drone on the internet.",
      "Descriptions": "The Black Falcon Drone is a sleek, foldable quadcopter designed for high-performance flying and stunning aerial views. Built with a compact, lightweight frame, it features foldable arms for easy portability and quick setup anywhere. Its front-facing HD camera allows you to capture crisp photos and smooth videos from the sky, making it perfect for beginners, travelers, and hobby creators. With stable flight control, responsive joysticks, and LED indicators for orientation, the Black Falcon Drone delivers a smooth, reliable, and fun flying experience every time.",
      "Specifications": {
        "Product Dimensions": "Approx. 14 cm x 5 cm x 3 cm",
        "Product Weight": "0.88 Ounces"
      },
      "Terms": "",
      "HOW_TO_USE": "To use the Black Falcon Drone, unfold the arms, insert and fully charge the battery, then power on both the drone and the remote. Place it on a flat surface, let it pair and stabilize, then use the joysticks to control takeoff, movement, and landing. After flying, power it off, fold the arms, and store it safely.",
      "DELIVERY_INFO": "This is an American-owned business that doesn't believe it should take 45 days to receive your product from China. Orders are sent from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers depending on speed and efficiency of delivery. Product will be shipped within 48 business hours. Please allow between 5-7 days for standard delivery. You will be emailed a tracking link after your order is shipped. Thank you for your purchase!",
      "FAQ": [{
          "question": "How long does it take to charge?",
          "answer": "Charging time takes approximately 60–70 minutes to reach a full charge.",
          "isRequired": true
        },
        {
          "question": "Can you fine tune the balance?",
          "answer": "Yes, you can fine tune the balance by pressing the fine-tuning buttons to correct the drone’s orientation.",
          "isRequired": true
        },
        {
          "question": "Does it have altitude hold?",
          "answer": "Yes, Black Falcon Drone features altitude hold, allowing it to lock its height and position for stable hovering and easier aerial shooting from any angle.",
          "isRequired": true
        },
        {
          "question": "Does it have FPV (First Person View) capability?",
          "answer": "Yes, Black Falcon Drone includes a Wi-Fi real-time FPV system that connects to your smartphone, providing a live view for capturing photos and recording videos.",
          "isRequired": true
        },
        {
          "question": "My drone is not staying on course or is out of control. What should I do?",
          "answer": "Check for strong winds that may affect stability. Keep the drone at least 30 cm above the ground to reduce interference. Use the fine-tuning function to stabilize flight and ensure the remote control stays within 100 meters during operation.",
          "isRequired": true
        },
        {
          "question": "My drone is failing to ascend. What should I check?",
          "answer": "Ensure both the drone and controller batteries are fully charged. Also confirm that the propellers are spinning fast enough to generate lift.",
          "isRequired": true
        },
        {
          "question": "My drone is landing too fast. How can I fix this?",
          "answer": "Slowly pull down the throttle stick manually to reduce altitude gradually and achieve a smoother landing.",
          "isRequired": true
        },
        {
          "question": "My WiFi connection to the drone keeps dropping. How can I improve it?",
          "answer": "When connecting to the drone’s WiFi, allow your phone to stay connected even without internet access. If available, set the drone’s WiFi network as the highest priority on your phone to improve connection stability.",
          "isRequired": true
        },
        {
          "question": "My controller is failing to connect. What should I do?",
          "answer": "Ensure both the controller and drone are powered on and have sufficient battery life. If the issue continues, reset both devices and follow the pairing instructions again.",
          "isRequired": true
        },
        {
          "question": "How do I initiate a backflip?",
          "answer": "Press the 360° button on the top right of the controller until you hear a beep. Push the right joystick forward for a front flip, backward for a backflip, right for a right flip, or left for a left flip.",
          "isRequired": true
        }
      ]
    },
    "20": {
      "Id": "112",
      "ProductName": "3DoodlePro",
      "Price": "49.99",
      "inUse": true,
      "isOffer": true,
      "offerType": "3doodlepro",
      "offerLogo": "images/3doodlepro_logo.png",
      "Category": "Justforkids",
      "ProductVariation": [{
          "Id": "112",
          "ProductName": "1x 3DoodlePro",
          "Price": "49.99",
          "OrderNo": 1,
          "item_id": "203",
          "itemId": ""
        },
        {
          "Id": "112",
          "ProductName": "2x 3DoodlePro",
          "Price": "94.90",
          "OrderNo": 2,
          "item_id": "204",
          "itemId": ""
        },
        {
          "Id": "112",
          "ProductName": "3x 3DoodlePro",
          "Price": "134.88",
          "OrderNo": 3,
          "item_id": "205",
          "itemId": ""
        },
        {
          "Id": "112",
          "ProductName": "4x 3DoodlePro",
          "Price": "169.84",
          "OrderNo": 4,
          "item_id": "206",
          "itemId": ""
        },
        {
          "Id": "112",
          "ProductName": "5x 3DoodlePro",
          "Price": "199.80",
          "OrderNo": 5,
          "item_id": "207",
          "itemId": ""
        }
      ],
      "ParentProduct": {
        "Id": "112",
        "ProductName": "3DoodlePro",
        "Price": "0.00",
        "OrderNo": 1,
        "item_id": "192",
        "itemId": ""
      },
      "protectionPlan": {
        "Id": "112",
        "ProductName": "3DoodlePro - 3-Year Extended Warranty",
        "Price": "9.95",
        "OrderNo": 1,
        "item_id": "539",
        "itemId": ""
      },
      "coveragePlan": {
        "Id": "112",
        "ProductName": "3DoodlePro Journey Package Protection",
        "Price": "3.50",
        "OrderNo": 1,
        "item_id": "540",
        "itemId": ""
      },
      "upsellProduct": [{
          "Id": "112",
          "ProductName": "3DoodlePro Special 1x EXTRA Ionizer",
          "Price": "24.99",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "541",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "112",
          "ProductName": "1x USB Quick Charger",
          "Price": "14.99",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "544",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "112",
          "ProductName": "1x Earbuds",
          "Price": "29.95",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "550",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "112",
          "ProductName": "1x Sports Watch",
          "Price": "29.98",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "556",
          "itemId": "",
          "ParentItemId": ""
        }
      ],
      "Image": "images/featured_img1.webp",
      "ImageVariation": [
        "images/featured_img1.webp",
        "images/featured1-1.webp",
        "images/featured1-2.webp",
        "images/featured1-3.webp",
        "images/featured1-4.webp",
      ],
      "Color": [
        "Black",
        "Orange",
        "Pink",
        "Navy Blue"
      ],
      "Short_Descript": "Why are new parents rushing to buy this DoodlePros? The year's latest toy craze is here!",
      "Descriptions": "The 3DoodlePro is a 3D magic printer pen that brings your art ideas to life. It’s perfect for kids, adults, and creatives alike. It's designed to enhance innovative and spatial thinking, and collaboration skills, making it a fun and educational tool. The pen is easy to use—just plug it in, heat it up, insert the filament, and start drawing. It features an LCD screen for precise temperature control and a speed controller for smooth operation. Compatible with both PLA and ABS filaments, the 3DoodlePro offers a versatile and eco-friendly drawing experience. Dream bigger with the pen of the future at your fingertips today!",
      // "Subheader": [
      //     "bullet1",
      //     "bullet2",
      //     "bullet3",
      //     "bullet4"
      // ],

      "Specifications": {
        "SKU": "BG-106B",
        "Category": "Educational Toy",
        "Tags": "2-5 years",
        "EXP": "N/A",
      },
      "HOW_TO_USE": "Plug in the 3DoodlePro and wait for it to heat up.Insert your chosen PLA or ABS filament into the pen.Use the LCD screen to set the right temperature and adjust the speed.Press the button to start drawing and let the melted filament form your design.Create shapes, models, or art pieces and build them layer by layer.Have fun experimenting with ideas and bring your creations to life.",
      "DELIVERY_INFO": "This is an American-owned business that doesn't believe it should take 45 days to receive your product from China. Orders are sent from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers depending on speed and efficiency of delivery. Product will be shipped within 48 business hours. Please allow between 5-7 days for standard delivery. You will be emailed a tracking link after your order is shipped. Thank you for your purchase!",
      "FAQ": [{
          "question": "How long does shipping take?",
          "answer": "This is an American-owned business that doesn't believe it should take 45 days to receive your product from China. Orders are sent from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers depending on speed and efficiency of delivery. Product will be shipped within 48 business hours. Please allow between 5-7 days for standard delivery. You will be emailed a tracking link after your order is shipped. Thank you for your purchase!",
          "isRequired": true
        },
        {
          "question": "How does the money back guarantee work?",
          "answer": "Simply return your product and we'll give you a refund for 30 days.",
          "isRequired": true
        },
        {
          "question": "What is a 3DoodlePro?",
          "answer": "3DoodlePro is a handheld device that extrudes heated plastic, allowing you to draw and create three-dimensional objects. It's similar to a traditional pen but uses plastic filament instead of ink.",
          "isRequired": true
        },
        {
          "question": "What comes in the box?",
          "answer": "The package includes the pen, a power adapter, a starter pack of filaments, a user manual, and a few drawing templates to help you get started.",
          "isRequired": true
        },
        {
          "question": "What are the main features of the 3DoodlePro?",
          "answer": "Key features include adjustable temperature and speed settings, an ergonomic design for comfortable use, a LED display for easy monitoring of settings, and a quick-heating nozzle.",
          "isRequired": true
        },
        {
          "question": "How do I adjust the temperature and speed?",
          "answer": "The 3DoodlePro has adjustable temperature and speed controls, accessible through the buttons and LED display on the pen. Adjust the settings according to the type of filament you are using and your desired drawing speed.",
          "isRequired": true
        },
        {
          "question": "How do I clean the pen?",
          "answer": "To clean the pen, ensure it is unplugged and cooled down. Remove any remaining filament from the pen by reversing the loading process. Use a cleaning tool or a small brush to remove any debris from the nozzle.",
          "isRequired": true
        },
        {
          "question": "Is the 3DoodlePro safe for children?",
          "answer": "The 3DoodlePro is safe for older children under adult supervision. It has a safety feature that prevents the nozzle from getting too hot to touch. However, it is recommended for ages 8 and above due to the high temperatures involved.",
          "isRequired": true
        }
      ]
    },
    "21": {
      "Id": "112",
      "ProductName": "Tiny Tunes Pro",
      "Price": "39.99",
      "inUse": true,
      "isOffer": true,
      "offerType": "tinytunespro",
      "offerLogo": "images/tinyprologo.png",
      "Category": "ToysKidsBaby",
      "ProductVariation": [{
          "Id": "112",
          "ProductName": "1x Tiny Tunes Pro",
          "Price": "39.99",
          "OrderNo": 1,
          "item_id": "568",
          "itemId": ""
        },
        {
          "Id": "112",
          "ProductName": "2x Tiny Tunes Pro",
          "Price": "75.98",
          "OrderNo": 2,
          "item_id": "569",
          "itemId": ""
        },
        {
          "Id": "112",
          "ProductName": "3x Tiny Tunes Pro",
          "Price": "107.97",
          "OrderNo": 3,
          "item_id": "570",
          "itemId": ""
        },
        {
          "Id": "112",
          "ProductName": "4x Tiny Tunes Pro",
          "Price": "135.96",
          "OrderNo": 4,
          "item_id": "571",
          "itemId": ""
        }, {
          "Id": "112",
          "ProductName": "5x Tiny Tunes Pro",
          "Price": "159.95",
          "OrderNo": 5,
          "item_id": "572",
          "itemId": ""
        }
      ],
      "ParentProduct": {
        "Id": "112",
        "ProductName": "Tiny Tunes Pro",
        "Price": "0.00",
        "OrderNo": 1,
        "item_id": "567",
        "itemId": ""
      },
      "protectionPlan": {
        "Id": "112",
        "ProductName": "Tiny Tunes Pro - 3 Year Warranty",
        "Price": "9.95",
        "OrderNo": 1,
        "item_id": "573",
        "itemId": ""
      },
      "coveragePlan": {
        "Id": "112",
        "ProductName": "Tiny Tunes Pro Journey Package Protection",
        "Price": "3.50",
        "OrderNo": 1,
        "item_id": "574",
        "itemId": ""
      },
      "upsellProduct": [{
          "Id": "112",
          "ProductName": "Special 1x EXTRA Tiny Tunes Pro",
          "Price": "24.99",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "575",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "112",
          "ProductName": "1x Tactical Flashlight",
          "Price": "19.97",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "550",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "112",
          "ProductName": "1x Torch Lighter",
          "Price": "29.99",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "556",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "112",
          "ProductName": "1x Multi-Tool Pencil",
          "Price": "19.99",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "562",
          "itemId": "",
          "ParentItemId": ""
        }
      ],
      "Image": "images/banner-slider1.jpg",
      "ImageVariation": [
        "images/banner-slider1.jpg",
        "images/banner-slider2.jpg",
        "images/banner-slider3.jpg",
        "images/banner-slider4.jpg",
        "images/banner-slider5.jpg",

      ],
      "Color": [],
      "Short_Descript": "Sing! Anytime, anywhere",
      "Descriptions": "The Tiny Tunes Pro combines musical fun and functionality with a wireless microphone and various sound effects to enhance your child's singing experience. Its compact, portable design is easy to carry and supports three ways to play—including Bluetooth, TF card support, and dual microphones. The machine delivers crystal-clear HiFi sound and deep bass, ensuring great audio quality. With up to 8 hours of playtime and an elegant design, it’s the perfect gift for any young music lover. Show off your inner rockstar, support your kid's imagination, and bring the fun to any party or family gathering.",
      // "Specifications": {},
      "Terms": "",
      "HOW_TO_USE": "Turn on the Tiny Tunes Pro and connect your music by Bluetooth or insert a TF card.Pick up the wireless microphone and choose a sound effect that fits your song.Adjust the volume and enjoy clear HiFi sound and strong bass while singing.Use both microphones if you want to sing along with a friend.Carry it easily to parties or family events and let kids explore their imagination and performance skills.Enjoy up to 8 hours of playtime for nonstop fun.",
      "DELIVERY_INFO": "This is an American-owned business that doesn't believe it should take 45 days to receive your product from China. Orders are sent from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers depending on speed and efficiency of delivery. Product will be shipped within 48 business hours. Please allow between 5-7 days for standard delivery. You will be emailed a tracking link after your order is shipped. Thank you for your purchase!",
      "FAQ": [{
          "question": "What is the Tiny Tunes Pro?",
          "answer": "The Tiny Tunes Pro is a handheld karaoke device that combines a microphone and a speaker. It is designed for singing, entertainment, and fun, suitable for both kids and adults.",
          "isRequired": true
        },
        {
          "question": "How do I connect the Tiny Tunes Pro to my device?",
          "answer": "To connect the microphone to your device, turn on the Bluetooth function on both the microphone and your device. Search for available Bluetooth devices and select the microphone from the list. Once connected, you can start playing music and singing along.",
          "isRequired": true
        },
        {
          "question": "Can I use the Tiny Tunes Pro with any device?",
          "answer": "Yes, the microphone is compatible with most Bluetooth-enabled devices, including smartphones, tablets, and computers.",
          "isRequired": true
        },
        {
          "question": "How long does the battery last?",
          "answer": "The Tiny Tunes Pro has a built-in rechargeable battery that provides up to 5-8 hours of continuous use on a full charge, depending on the volume and usage.",
          "isRequired": true
        },
        {
          "question": "How do I charge the Tiny Tunes Pro?",
          "answer": "To charge the microphone and the speaker, use the included USB charging cable. Connect one end to the microphone/speaker and the other end to a USB power source, such as a computer, power bank, or USB wall adapter. The charging time is approximately 2-3 hours.",
          "isRequired": true
        },
        {
          "question": "Does the Tiny Tunes Pro have built-in sound effects?",
          "answer": "Yes, the microphone includes built-in sound effects such as echo and volume control, allowing you to enhance your singing experience.",
          "isRequired": true
        },
        {
          "question": "Can I use the Tiny Tunes Pro as a regular speaker?",
          "answer": "Yes, you can use the microphone as a regular Bluetooth speaker to play music from your device.",
          "isRequired": true
        },
        {
          "question": "Is the Tiny Tunes Pro safe for children?",
          "answer": "Yes, the microphone is designed with safety in mind and is suitable for children. However, adult supervision is recommended for younger children to ensure safe use.",
          "isRequired": true
        }
      ]
    },
    "22": {
      "Id": "",
      "ProductName": "CrabbiCrawler",
      "Price": "",
      "inUse": true,
      "Category": "Justforkids",
      "offerType": "crabbicrawler",
      "ProductVariation": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 1,
          "item_id": "578",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 2,
          "item_id": "579",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 3,
          "item_id": "580",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 4,
          "item_id": "581",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 5,
          "item_id": "582",
          "itemId": ""
        }
      ],
      "ParentProduct": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "577",
        "itemId": ""
      },
      "protectionPlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "583",
        "itemId": ""
      },
      "coveragePlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "584",
        "itemId": ""
      },
      "upsellProduct": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "585",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "112",
          "ProductName": "1x USB Quick Chargers",
          "Price": "14.99",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "544",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "112",
          "ProductName": "Wireless Charger",
          "Price": "39.95",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "550",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "112",
          "ProductName": "Portable Battery Charging Pack",
          "Price": "39.99",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "556",
          "itemId": "",
          "ParentItemId": ""
        }
      ],
      "Image": "images/featured_img3.webp",
      "ImageVariation": [
        "images/featured_img3.webp",
        "images/featured3-1.webp",
        "images/featured3-2.webp",
        "images/featured3-3.webp",
        "images/featured3-4.webp",

      ],
      "Color": [],
      "Descriptions": "The CrabbiCrawler is an engaging and interactive toy perfect for babies, toddlers, and pets too. Its vibrant colors, cheerful music, and scuttling movement captivate attention. The Crab Toy can improve tummy time with your baby or help your littles get their wiggles out with plenty of giggles. It stimulates sensory development in toddlers and engages pets’ natural instincts to chase and play. The toy is designed with safety in mind, featuring obstacle sensors that change direction automatically to avoid hazards. Plus, it's USB rechargeable and offers 20-30 minutes of fun on a full charge, making it an ideal gift for playtime and development.",
      "Specifications": {
        "Type": "Interactive Toy",
        "Material": "Plastic",
        "Features": "Engaging movements, Sounds",
        "Size": "Varies",
        "Package includes": "1 X CrabbiCrawler",

      },
      "Terms": "",
      "HOW_TO_USE": "Charge the CrabbiCrawler and switch it on.Place it on the floor and let kids or pets chase and interact with it.It changes direction on its own to keep play safe and exciting.Use it during tummy time or playtime for fun and sensory development.",
      "DELIVERY_INFO": "This is an American-owned business that doesn't believe it should take 45 days to receive your product from China. Orders are sent from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers depending on speed and efficiency of delivery. Product will be shipped within 48 business hours. Please allow between 5-7 days for standard delivery. You will be emailed a tracking link after your order is shipped. Thank you for your purchase!",
      "FAQ": [{
          "question": "How long does shipping take?",
          "answer": "This is an American-owned business that doesn't believe it should take 45 days to receive your product from China. Orders are sent from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers depending on speed and efficiency of delivery. Product will be shipped within 48 business hours. Please allow between 5-7 days for standard delivery. You will be emailed a tracking link after your order is shipped. Thank you for your purchase!",
          "isRequired": true
        },
        {
          "question": "How does the money back guarantee work?",
          "answer": "Simply return your product and we'll give you a refund for 30 days.",
          "isRequired": true
        },
        {
          "question": "What is a CrabbiCrawler?",
          "answer": "CrabbiCrawler is a fun and interactive toy designed to mimic the movements of a real crab. It can walk, change direction, and sometimes make sounds, providing entertainment for children.",
          "isRequired": true
        },
        {
          "question": "Is CrabbiCrawler safe for indoor use?",
          "answer": "Yes, CrabbiCrawler is designed for indoor use on smooth surfaces such as hardwood floors, tiles, and low-pile carpets. It typically has non-marking wheels or legs to prevent damage to floors.",
          "isRequired": true
        },
        {
          "question": "Can CrabbiCrawler move on uneven surfaces?",
          "answer": "CrabbiCrawler is best used on flat and even surfaces to ensure optimal movement. It may struggle on highly uneven or thick carpeted surfaces due to its specific movement mechanism.",
          "isRequired": true
        },
        {
          "question": "How does a CrabbiCrawler work?",
          "answer": "CrabbiCrawler uses a motorized mechanism that drives the legs or wheels in a sideways motion, allowing the toy to move across flat surfaces like a crab.",
          "isRequired": true
        },
        {
          "question": "Does it come with the charging cable?",
          "answer": "Yes. The CrabbiCrawler comes with a charging cable, but you’ll need a USB charging block to plug into the wall.",
          "isRequired": true
        }
      ]
    },
    "23": {
      "Id": "",
      "ProductName": "Flying Glow Disc",
      "Price": "",
      "inUse": true,
      "Category": "MovePlay",
      "offerType": "flyingglowdisc",
      "ProductVariation": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 1,
          "item_id": "550",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 2,
          "item_id": "551",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 3,
          "item_id": "552",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 4,
          "item_id": "553",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 5,
          "item_id": "554",
          "itemId": ""
        },
      ],
      "ParentProduct": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "549",
        "itemId": ""
      },
      "protectionPlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "615",
        "itemId": ""
      },
      "coveragePlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "616",
        "itemId": ""
      },
      "upsellProduct": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "544",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "620",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "626",
          "itemId": "",
          "ParentItemId": ""
        }
      ],
      "Image": "images/featured_img5.webp",
      "ImageVariation": [
        "images/featured_img5.webp",
        "images/featured5-1.webp",
        "images/featured5-2.webp",
        "images/featured5-3.webp",
        "images/featured5-4.webp"
      ],
      "Color": [],
      "Descriptions": "The Flying Glow Disc is every parent's sure-fire rescue for rainy days. The foam-protected disc with hover technology encourages soccer-like play time that’s safe for the indoors. Let them kick, giggle and play without worrying about damage to your walls, doors and furniture. The sleek design glide across any smooth surface and simulates a realistic soccer experience. The long-lasting battery and whimsical LED light display is ideal for hours of uninterrupted social play, suitable for kids of all ages.",
      // "Specifications": {},
      "Terms": "",
      "HOW_TO_USE": "Switch on the Flying Glow Disc and let it hover over any smooth floor.Kids can kick and pass it just like a soccer ball without damaging furniture.Enjoy the LED lights and foam edges that make indoor play safe and fun.Let them play for hours thanks to the long-lasting battery.Perfect for keeping kids active and entertained on rainy days.",
      "DELIVERY_INFO": "This is an American-owned business that doesn't believe it should take 45 days to receive your product from China. Orders are sent from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers depending on speed and efficiency of delivery. Product will be shipped within 48 business hours. Please allow between 5-7 days for standard delivery. You will be emailed a tracking link after your order is shipped. Thank you for your purchase!",
      "FAQ": [{
          "question": "How long will shipping take?",
          "answer": "This is an American-owned business that doesn't believe it should take 45 days to receive your product from China. Orders are sent from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers depending on speed and efficiency of delivery. Product will be shipped within 48 business hours. Please allow between 5-7 days for standard delivery. You will be emailed a tracking link after your order is shipped. Thank you for your purchase!",
          "isRequired": true
        },
        {
          "question": "How does the money back guarantee work?",
          "answer": "Simply return your product and we'll give you a refund for 30 days.",
          "isRequired": true
        },
        {
          "question": "How does the Flying Glow Disc work?",
          "answer": "The Flying Glow Disc is equipped with LED lights that illuminate when activated. This allows players to see the Frisbee clearly in low-light conditions or during nighttime play.",
          "isRequired": true
        },
        {
          "question": "How do I activate the lights on the Flying Glow Disc?",
          "answer": "Simply press the button located on the underside of the Flying Glow Disc. Once pressed, the LED lights will turn on. Press the button again to turn them off.",
          "isRequired": true
        },
        {
          "question": "How long does the battery last?",
          "answer": "On a full charge, the battery can last up to 6 hours of continuous play. Battery life may vary based on usage and environmental factors.",
          "isRequired": true
        },
        {
          "question": "Is the Flying Glow Disc waterproof?",
          "answer": "Yes, the Flying Glow Disc is water-resistant, making it suitable for play near water bodies. However, it's recommended not to submerge it for extended periods.",
          "isRequired": true
        },
        {
          "question": "How do I charge the Flying Glow Disc?",
          "answer": "The Frisbee comes with a USB charging cable. Connect the cable to the Flying Glow Disc and plug the other end into a USB charging port. A full charge only takes 30 minutes and can last for a thousand throws. Refer to the user manual for charging instructions.",
          "isRequired": true
        },
        {
          "question": "Is the Flying Glow Disc safe to use for children?",
          "answer": "Absolutely! The Flying Glow Disc is designed with safety in mind. The edges are smooth to ensure safe catching and throwing. However, it's recommended for children above the age of 5.",
          "isRequired": true
        },
        {
          "question": "Can the LED lights be replaced?",
          "answer": "The LED lights are designed to last a long time and are not replaceable. However, if you experience any issues, please contact our customer service for assistance.",
          "isRequired": true
        },
        {
          "question": "Are there different light modes available?",
          "answer": "Yes, the Flying Glow Disc has multiple light modes – steady, blinking, and pulsating. You can cycle through the modes using the activation button.",
          "isRequired": true
        },
        {
          "question": "How durable is the Flying Glow Disc?",
          "answer": "The Flying Glow Disc is made of high-quality materials that can withstand regular play. However, like all sports equipment, it's essential to handle it with care to extend its lifespan.",
          "isRequired": true
        },
        {
          "question": "Can I use the Flying Glow Disc during the day?",
          "answer": "Of course! The Flying Glow Disc functions just like a regular one during the day. You can choose to activate the lights or keep them off.",
          "isRequired": true
        },
        {
          "question": "What should I do if my Flying Glow Disc isn't lighting up?",
          "answer": "Ensure that the battery is fully charged. If the issue persists, please refer to the troubleshooting section in the user manual or contact our customer support.",
          "isRequired": true
        },
        {
          "question": "How do I clean the Flying Glow Disc?",
          "answer": "Wipe the Flying Glow Disc with a damp cloth. Avoid using harsh chemicals or abrasive materials as they may damage the surface and the lights.",
          "isRequired": true
        },
        {
          "question": "How do I turn off the lights to save battery when not in use?",
          "answer": "Simply press the activation button until the lights turn off. Always ensure to turn off the lights after play to conserve battery life.",
          "isRequired": true
        }
      ]
    },
    "24": {
      "Id": "",
      "ProductName": "Drone Propeller Blade Set",
      "Price": "",
      "inUse": true,
      "isOffer": true,
      "isUpsellRelatedProduct": true,
      "offerType": "dronepropellerbladeset",
      "offerLogo": "images/blackfalcondrone_logo.png",
      "Category": "ToysKidsBaby",
      "relatedParentId": "19",
      "ProductVariation": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 1,
          "item_id": "610",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 2,
          "item_id": "611",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 3,
          "item_id": "612",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 4,
          "item_id": "613",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 5,
          "item_id": "614",
          "itemId": ""
        }
      ],
      "ParentProduct": {
        "Id": "",
        "ProductName": "",
        "Price": "0.00",
        "OrderNo": 1,
        "item_id": "591",
        "itemId": ""
      },
      "protectionPlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "773",
        "itemId": ""
      },
      "coveragePlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "774",
        "itemId": ""
      },
      "upsellProduct": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "598",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "775",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "588",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "605",
          "itemId": "",
          "ParentItemId": ""
        }
      ],
      "Image": "images/productpropeller.png",
      "ImageVariation": [
        "images/productpropeller.png",
        "images/featured_img12-1.jpg",
        "images/featured_img12-2.jpg",
        "images/featured_img12-3.jpg",
        "images/featured_img12-4.jpg",
        "images/featured_img12-5.jpg",
        "images/featured_img12-6.jpg",
      ],
      "Color": "",
      "Short_Descript": "Made specifically for optimal performance with your drone model.",
      "Descriptions": "Made specifically to deliver optimal performance with your drone model, these propellers ensure smooth, stable, and efficient flight every time. If your propellers are lost or broken during flight, there’s no need to worry—this reliable replacement set gets you back in the air quickly. Designed for quick and easy installation, they can be swapped out in seconds without any hassle. Built with durable, impact-resistant materials, these propellers are made to withstand bumps, rough landings, and unexpected crashes while maintaining consistent performance.",
      // "Specifications": {
      //   "Product Dimensions": "Approx. 14 cm x 5 cm x 3 cm",
      //   "Product Weight": "0.88 Ounces"
      // },
      "Terms": "",
      "HOW_TO_USE": " Replacement blades for the Black Falcon Drone, pack of 8. Refer to the product manual for instructions.",
      "DELIVERY_INFO": "This is an American-owned business that doesn't believe it should take 45 days to receive your product from China. Orders are sent from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers depending on speed and efficiency of delivery. Product will be shipped within 48 business hours. Please allow between 5-7 days for standard delivery. You will be emailed a tracking link after your order is shipped. Thank you for your purchase!",
      "FAQ": [{
          "question": "How long does it take to charge?",
          "answer": "Charging time takes approximately 60–70 minutes to reach a full charge.",
          "isRequired": true
        },
        {
          "question": "Can you fine tune the balance?",
          "answer": "Yes, you can fine tune the balance by pressing the fine-tuning buttons to correct the drone’s orientation.",
          "isRequired": true
        },
        {
          "question": "Does it have altitude hold?",
          "answer": "Yes, Black Falcon Drone features altitude hold, allowing it to lock its height and position for stable hovering and easier aerial shooting from any angle.",
          "isRequired": true
        },
        {
          "question": "Does it have FPV (First Person View) capability?",
          "answer": "Yes, Black Falcon Drone includes a Wi-Fi real-time FPV system that connects to your smartphone, providing a live view for capturing photos and recording videos.",
          "isRequired": true
        },
        {
          "question": "My drone is not staying on course or is out of control. What should I do?",
          "answer": "Check for strong winds that may affect stability. Keep the drone at least 30 cm above the ground to reduce interference. Use the fine-tuning function to stabilize flight and ensure the remote control stays within 100 meters during operation.",
          "isRequired": true
        },
        {
          "question": "My drone is failing to ascend. What should I check?",
          "answer": "Ensure both the drone and controller batteries are fully charged. Also confirm that the propellers are spinning fast enough to generate lift.",
          "isRequired": true
        },
        {
          "question": "My drone is landing too fast. How can I fix this?",
          "answer": "Slowly pull down the throttle stick manually to reduce altitude gradually and achieve a smoother landing.",
          "isRequired": true
        },
        {
          "question": "My WiFi connection to the drone keeps dropping. How can I improve it?",
          "answer": "When connecting to the drone’s WiFi, allow your phone to stay connected even without internet access. If available, set the drone’s WiFi network as the highest priority on your phone to improve connection stability.",
          "isRequired": true
        },
        {
          "question": "My controller is failing to connect. What should I do?",
          "answer": "Ensure both the controller and drone are powered on and have sufficient battery life. If the issue continues, reset both devices and follow the pairing instructions again.",
          "isRequired": true
        },
        {
          "question": "How do I initiate a backflip?",
          "answer": "Press the 360° button on the top right of the controller until you hear a beep. Push the right joystick forward for a front flip, backward for a backflip, right for a right flip, or left for a left flip.",
          "isRequired": true
        }
      ]
    },
    "25": {
      "Id": "",
      "ProductName": "Drone Battery Pack Replacement",
      "Price": "",
      "inUse": true,
      "isOffer": true,
      "isUpsellRelatedProduct": true,
      "offerType": "dronebattery",
      "offerLogo": "images/blackfalcondrone_logo.png",
      "Category": "ToysKidsBaby",
      "relatedParentId": "19",
      "ProductVariation": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 1,
          "item_id": "605",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 2,
          "item_id": "606",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 3,
          "item_id": "607",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 4,
          "item_id": "608",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 5,
          "item_id": "609",
          "itemId": ""
        }
      ],
      "ParentProduct": {
        "Id": "",
        "ProductName": "",
        "Price": "0.00",
        "OrderNo": 1,
        "item_id": "589",
        "itemId": ""
      },
      "protectionPlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "773",
        "itemId": ""
      },
      "coveragePlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "774",
        "itemId": ""
      },
      "upsellProduct": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "598",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "775",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "588",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "605",
          "itemId": "",
          "ParentItemId": ""
        }
      ],
      "Image": "images/productbattery.png",
      "ImageVariation": [
        "images/productbattery.png",
        "images/featured_img12-1.jpg",
        "images/featured_img12-2.jpg",
        "images/featured_img12-3.jpg",
        "images/featured_img12-4.jpg",
        "images/featured_img12-5.jpg",
        "images/featured_img12-6.jpg",
      ],
      "Color": "",
      "Short_Descript": "Made specifically for optimal performance with your drone model.",
      "Descriptions": "Made specifically to deliver optimal charge for your Black Falcon drone model, this battery ensures reliable and consistent power for every flight. With each additional battery, you can easily double your flight time and enjoy longer aerial sessions without interruption. Featuring a 3.7V 500mAh LiPo capacity, it provides efficient energy output while maintaining stable performance. Compact, lightweight, and easy to install, this battery is designed for seamless use and dependable durability.",
      // "Specifications": {
      //   "Product Dimensions": "Approx. 14 cm x 5 cm x 3 cm",
      //   "Product Weight": "0.88 Ounces"
      // },
      "Terms": "",
      "HOW_TO_USE": "Replacement Batteries for Black Falcon Drone. Refer to the product manual for instructions.",
      "DELIVERY_INFO": "This is an American-owned business that doesn't believe it should take 45 days to receive your product from China. Orders are sent from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers depending on speed and efficiency of delivery. Product will be shipped within 48 business hours. Please allow between 5-7 days for standard delivery. You will be emailed a tracking link after your order is shipped. Thank you for your purchase!",
      "FAQ": [{
          "question": "How long does it take to charge?",
          "answer": "Charging time takes approximately 60–70 minutes to reach a full charge.",
          "isRequired": true
        },
        {
          "question": "Can you fine tune the balance?",
          "answer": "Yes, you can fine tune the balance by pressing the fine-tuning buttons to correct the drone’s orientation.",
          "isRequired": true
        },
        {
          "question": "Does it have altitude hold?",
          "answer": "Yes, Black Falcon Drone features altitude hold, allowing it to lock its height and position for stable hovering and easier aerial shooting from any angle.",
          "isRequired": true
        },
        {
          "question": "Does it have FPV (First Person View) capability?",
          "answer": "Yes, Black Falcon Drone includes a Wi-Fi real-time FPV system that connects to your smartphone, providing a live view for capturing photos and recording videos.",
          "isRequired": true
        },
        {
          "question": "My drone is not staying on course or is out of control. What should I do?",
          "answer": "Check for strong winds that may affect stability. Keep the drone at least 30 cm above the ground to reduce interference. Use the fine-tuning function to stabilize flight and ensure the remote control stays within 100 meters during operation.",
          "isRequired": true
        },
        {
          "question": "My drone is failing to ascend. What should I check?",
          "answer": "Ensure both the drone and controller batteries are fully charged. Also confirm that the propellers are spinning fast enough to generate lift.",
          "isRequired": true
        },
        {
          "question": "My drone is landing too fast. How can I fix this?",
          "answer": "Slowly pull down the throttle stick manually to reduce altitude gradually and achieve a smoother landing.",
          "isRequired": true
        },
        {
          "question": "My WiFi connection to the drone keeps dropping. How can I improve it?",
          "answer": "When connecting to the drone’s WiFi, allow your phone to stay connected even without internet access. If available, set the drone’s WiFi network as the highest priority on your phone to improve connection stability.",
          "isRequired": true
        },
        {
          "question": "My controller is failing to connect. What should I do?",
          "answer": "Ensure both the controller and drone are powered on and have sufficient battery life. If the issue continues, reset both devices and follow the pairing instructions again.",
          "isRequired": true
        },
        {
          "question": "How do I initiate a backflip?",
          "answer": "Press the 360° button on the top right of the controller until you hear a beep. Push the right joystick forward for a front flip, backward for a backflip, right for a right flip, or left for a left flip.",
          "isRequired": true
        }
      ]
    },
    "26": {
      "Id": "",
      "ProductName": "Drone Refill Bundles",
      "Price": "",
      "inUse": true,
      "isOffer": true,
      "isUpsellRelatedProduct": true,
      "offerType": "dronerefillbundles",
      "isDifferentParent": true,
      "offerLogo": "images/blackfalcondrone_logo.png",
      "Category": "ToysKidsBaby",
      "relatedParentId": "19",
      "ProductVariation": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 1,
          "item_id": "598",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 2,
          "item_id": "599",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 4,
          "item_id": "600",
          "itemId": ""
        },

      ],
      "SubProduct": {
        "pro1": [{
            "Id": "",
            "ProductName": "",
            "Price": "0.00",
            "OrderNo": 2,
            "item_id": "591",
            "itemId": ""
          },
          {
            "Id": "",
            "ProductName": "",
            "Price": "0.00",
            "OrderNo": 2,
            "item_id": "589",
            "itemId": ""
          },
        ],
        "pro2": [{
            "Id": "",
            "ProductName": "",
            "Price": "0.00",
            "OrderNo": 4,
            "item_id": "591",
            "itemId": ""
          },
          {
            "Id": "",
            "ProductName": "",
            "Price": "0.00",
            "OrderNo": 4,
            "item_id": "589",
            "itemId": ""
          },
        ],
        "pro4": [{
            "Id": "",
            "ProductName": "",
            "Price": "0.00",
            "OrderNo": 8,
            "item_id": "591",
            "itemId": ""
          },
          {
            "Id": "",
            "ProductName": "",
            "Price": "0.00",
            "OrderNo": 8,
            "item_id": "589",
            "itemId": ""
          },
        ]
      },
      "ParentProduct": {
        "Id": "",
        "ProductName": "",
        "Price": "0.00",
        "OrderNo": 1,
        "item_id": "587",
        "itemId": ""
      },
      "protectionPlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "773",
        "itemId": ""
      },
      "coveragePlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "774",
        "itemId": ""
      },
      "upsellProduct": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "598",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "775",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "588",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "605",
          "itemId": "",
          "ParentItemId": ""
        }
      ],
      "Image": "images/dronrefilbundle.jpg",
      "ImageVariation": [
        "images/dronrefilbundle.jpg",
        "images/featured_img12-1.jpg",
        "images/featured_img12-2.jpg",
        "images/featured_img12-3.jpg",
        "images/featured_img12-4.jpg",
        "images/featured_img12-5.jpg",
        "images/featured_img12-6.jpg",
      ],
      "Color": "",
      "Short_Descript": "Made specifically for optimal performance with your drone model.",
      "Descriptions": "Made specifically for optimal charge and performance with the Black Falcon Drone model, this combo pack is designed to keep you flying longer and worry-free. It includes X spare batteries to extend your flight time, ensuring uninterrupted aerial sessions whenever you need them. Along with that, you get X propeller sets, providing quick replacements for damaged or lost parts. In total, the pack includes X blades, built for smooth, stable, and efficient flight performance. Durable, reliable, and easy to use, this combo is the perfect upgrade for enhancing your drone experience.",
      // "Specifications": {
      //   "Product Dimensions": "Approx. 14 cm x 5 cm x 3 cm",
      //   "Product Weight": "0.88 Ounces"
      // },
      "Terms": "",
      "HOW_TO_USE": "Replacement Batteries and Propeller Blades for Black Falcon Drone. Refer to the product manual for instructions.",
      "DELIVERY_INFO": "This is an American-owned business that doesn't believe it should take 45 days to receive your product from China. Orders are sent from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers depending on speed and efficiency of delivery. Product will be shipped within 48 business hours. Please allow between 5-7 days for standard delivery. You will be emailed a tracking link after your order is shipped. Thank you for your purchase!",
      "FAQ": [{
          "question": "How long does it take to charge?",
          "answer": "Charging time takes approximately 60–70 minutes to reach a full charge.",
          "isRequired": true
        },
        {
          "question": "Can you fine tune the balance?",
          "answer": "Yes, you can fine tune the balance by pressing the fine-tuning buttons to correct the drone’s orientation.",
          "isRequired": true
        },
        {
          "question": "Does it have altitude hold?",
          "answer": "Yes, Black Falcon Drone features altitude hold, allowing it to lock its height and position for stable hovering and easier aerial shooting from any angle.",
          "isRequired": true
        },
        {
          "question": "Does it have FPV (First Person View) capability?",
          "answer": "Yes, Black Falcon Drone includes a Wi-Fi real-time FPV system that connects to your smartphone, providing a live view for capturing photos and recording videos.",
          "isRequired": true
        },
        {
          "question": "My drone is not staying on course or is out of control. What should I do?",
          "answer": "Check for strong winds that may affect stability. Keep the drone at least 30 cm above the ground to reduce interference. Use the fine-tuning function to stabilize flight and ensure the remote control stays within 100 meters during operation.",
          "isRequired": true
        },
        {
          "question": "My drone is failing to ascend. What should I check?",
          "answer": "Ensure both the drone and controller batteries are fully charged. Also confirm that the propellers are spinning fast enough to generate lift.",
          "isRequired": true
        },
        {
          "question": "My drone is landing too fast. How can I fix this?",
          "answer": "Slowly pull down the throttle stick manually to reduce altitude gradually and achieve a smoother landing.",
          "isRequired": true
        },
        {
          "question": "My WiFi connection to the drone keeps dropping. How can I improve it?",
          "answer": "When connecting to the drone’s WiFi, allow your phone to stay connected even without internet access. If available, set the drone’s WiFi network as the highest priority on your phone to improve connection stability.",
          "isRequired": true
        },
        {
          "question": "My controller is failing to connect. What should I do?",
          "answer": "Ensure both the controller and drone are powered on and have sufficient battery life. If the issue continues, reset both devices and follow the pairing instructions again.",
          "isRequired": true
        },
        {
          "question": "How do I initiate a backflip?",
          "answer": "Press the 360° button on the top right of the controller until you hear a beep. Push the right joystick forward for a front flip, backward for a backflip, right for a right flip, or left for a left flip.",
          "isRequired": true
        }
      ]
    },
    "27": {
      "Id": "",
      "ProductName": "Drone Travel Case",
      "Price": "",
      "inUse": true,
      "isOffer": true,
      "isUpsellRelatedProduct": true,
      "isSingleProduct": true,
      "offerType": "dronetravelcase",
      "offerLogo": "images/blackfalcondrone_logo.png",
      "Category": "ToysKidsBaby",
      "relatedParentId": "19",
      "ProductVariation": [{
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "592",
        "itemId": ""
      }],
      "ParentProduct": {
        "Id": "",
        "ProductName": "",
        "Price": "0.00",
        "OrderNo": 1,
        "item_id": "592",
        "itemId": ""
      },
      "protectionPlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "773",
        "itemId": ""
      },
      "coveragePlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "774",
        "itemId": ""
      },
      "upsellProduct": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "598",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "775",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "588",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "605",
          "itemId": "",
          "ParentItemId": ""
        }
      ],
      "Image": "images/productcase.png",
      "ImageVariation": [
        "images/productcase.png",
        "images/featured_img12-1.jpg",
        "images/featured_img12-2.jpg",
        "images/featured_img12-3.jpg",
        "images/featured_img12-4.jpg",
        "images/featured_img12-5.jpg",
        "images/featured_img12-6.jpg",
      ],
      "Color": "",
      "Short_Descript": "Carry your Black Falcon Drone with maximum protection all the time",
      "Descriptions": "Carry your Black Falcon Drone with complete confidence using this professionally designed carrying case built for maximum protection. Crafted with highly durable materials, it safeguards your drone against everyday wear, bumps, and impacts during travel or storage. The splash-proof and water-resistant exterior adds an extra layer of protection, keeping your device safe from light rain and moisture. Designed in a compact and travel-friendly size, this case makes it easy to carry your drone anywhere without added bulk, ensuring convenience and security on the go.",
      // "Specifications": {
      //   "Product Dimensions": "Approx. 14 cm x 5 cm x 3 cm",
      //   "Product Weight": "0.88 Ounces"
      // },
      "Terms": "",
      "HOW_TO_USE": "Replacement carrying case for Black Falcon Drone. Refer to the product manual for instructions.",
      "DELIVERY_INFO": "This is an American-owned business that doesn't believe it should take 45 days to receive your product from China. Orders are sent from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers depending on speed and efficiency of delivery. Product will be shipped within 48 business hours. Please allow between 5-7 days for standard delivery. You will be emailed a tracking link after your order is shipped. Thank you for your purchase!",
      "FAQ": [{
          "question": "How long does it take to charge?",
          "answer": "Charging time takes approximately 60–70 minutes to reach a full charge.",
          "isRequired": true
        },
        {
          "question": "Can you fine tune the balance?",
          "answer": "Yes, you can fine tune the balance by pressing the fine-tuning buttons to correct the drone’s orientation.",
          "isRequired": true
        },
        {
          "question": "Does it have altitude hold?",
          "answer": "Yes, Black Falcon Drone features altitude hold, allowing it to lock its height and position for stable hovering and easier aerial shooting from any angle.",
          "isRequired": true
        },
        {
          "question": "Does it have FPV (First Person View) capability?",
          "answer": "Yes, Black Falcon Drone includes a Wi-Fi real-time FPV system that connects to your smartphone, providing a live view for capturing photos and recording videos.",
          "isRequired": true
        },
        {
          "question": "My drone is not staying on course or is out of control. What should I do?",
          "answer": "Check for strong winds that may affect stability. Keep the drone at least 30 cm above the ground to reduce interference. Use the fine-tuning function to stabilize flight and ensure the remote control stays within 100 meters during operation.",
          "isRequired": true
        },
        {
          "question": "My drone is failing to ascend. What should I check?",
          "answer": "Ensure both the drone and controller batteries are fully charged. Also confirm that the propellers are spinning fast enough to generate lift.",
          "isRequired": true
        },
        {
          "question": "My drone is landing too fast. How can I fix this?",
          "answer": "Slowly pull down the throttle stick manually to reduce altitude gradually and achieve a smoother landing.",
          "isRequired": true
        },
        {
          "question": "My WiFi connection to the drone keeps dropping. How can I improve it?",
          "answer": "When connecting to the drone’s WiFi, allow your phone to stay connected even without internet access. If available, set the drone’s WiFi network as the highest priority on your phone to improve connection stability.",
          "isRequired": true
        },
        {
          "question": "My controller is failing to connect. What should I do?",
          "answer": "Ensure both the controller and drone are powered on and have sufficient battery life. If the issue continues, reset both devices and follow the pairing instructions again.",
          "isRequired": true
        },
        {
          "question": "How do I initiate a backflip?",
          "answer": "Press the 360° button on the top right of the controller until you hear a beep. Push the right joystick forward for a front flip, backward for a backflip, right for a right flip, or left for a left flip.",
          "isRequired": true
        }
      ]
    },
    "28": {
      "Id": "",
      "ProductName": "Black Falcon Drone Dual Camera Upgrade",
      "Price": "",
      "inUse": true,
      "isOffer": true,
      "isUpsellRelatedProduct": true,
      "isSingleProduct": true,
      "offerType": "blackfalcondronedualcameraupgrade",
      "offerLogo": "images/blackfalcondrone_logo.png",
      "Category": "ToysKidsBaby",
      "relatedParentId": "19",
      "ProductVariation": [{
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "588",
        "itemId": ""
      }],
      "ParentProduct": {
        "Id": "",
        "ProductName": "",
        "Price": "0.00",
        "OrderNo": 1,
        "item_id": "588",
        "itemId": ""
      },
      "protectionPlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "773",
        "itemId": ""
      },
      "coveragePlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "774",
        "itemId": ""
      },
      "upsellProduct": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "598",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "775",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "588",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "605",
          "itemId": "",
          "ParentItemId": ""
        }
      ],
      "Image": "images/drone.png",
      "ImageVariation": [
        "images/drone.png",
        "images/featured_img12-1.jpg",
        "images/featured_img12-2.jpg",
        "images/featured_img12-3.jpg",
        "images/featured_img12-4.jpg",
        "images/featured_img12-5.jpg",
        "images/featured_img12-6.jpg",
      ],
      "Color": "",
      "Short_Descript": "UPGRADE TO DUAL-CAMERA DRONES",
      "Descriptions": "Capture every moment with stunning clarity using the advanced camera system designed for the Black Falcon Drone. Equipped with a powerful 4K dynamic camera, it delivers sharp, high-resolution visuals with impressive detail. The dual HD 1080p cameras, positioned at the front and bottom, provide versatile shooting angles for both aerial views and ground tracking. With an integrated zoom lens, you can get closer to your subject without compromising quality. The 110° vertical camera tilt allows flexible adjustments, making it easy to capture the perfect shot from different perspectives.",
      // "Specifications": {
      //   "Product Dimensions": "Approx. 14 cm x 5 cm x 3 cm",
      //   "Product Weight": "0.88 Ounces"
      // },
      "Terms": "",
      "HOW_TO_USE": "Replacement camera for Black Falcon Drone. Refer to the product manual for instructions.",
      "DELIVERY_INFO": "This is an American-owned business that doesn't believe it should take 45 days to receive your product from China. Orders are sent from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers depending on speed and efficiency of delivery. Product will be shipped within 48 business hours. Please allow between 5-7 days for standard delivery. You will be emailed a tracking link after your order is shipped. Thank you for your purchase!",
      "FAQ": [{
          "question": "How long does it take to charge?",
          "answer": "Charging time takes approximately 60–70 minutes to reach a full charge.",
          "isRequired": true
        },
        {
          "question": "Can you fine tune the balance?",
          "answer": "Yes, you can fine tune the balance by pressing the fine-tuning buttons to correct the drone’s orientation.",
          "isRequired": true
        },
        {
          "question": "Does it have altitude hold?",
          "answer": "Yes, Black Falcon Drone features altitude hold, allowing it to lock its height and position for stable hovering and easier aerial shooting from any angle.",
          "isRequired": true
        },
        {
          "question": "Does it have FPV (First Person View) capability?",
          "answer": "Yes, Black Falcon Drone includes a Wi-Fi real-time FPV system that connects to your smartphone, providing a live view for capturing photos and recording videos.",
          "isRequired": true
        },
        {
          "question": "My drone is not staying on course or is out of control. What should I do?",
          "answer": "Check for strong winds that may affect stability. Keep the drone at least 30 cm above the ground to reduce interference. Use the fine-tuning function to stabilize flight and ensure the remote control stays within 100 meters during operation.",
          "isRequired": true
        },
        {
          "question": "My drone is failing to ascend. What should I check?",
          "answer": "Ensure both the drone and controller batteries are fully charged. Also confirm that the propellers are spinning fast enough to generate lift.",
          "isRequired": true
        },
        {
          "question": "My drone is landing too fast. How can I fix this?",
          "answer": "Slowly pull down the throttle stick manually to reduce altitude gradually and achieve a smoother landing.",
          "isRequired": true
        },
        {
          "question": "My WiFi connection to the drone keeps dropping. How can I improve it?",
          "answer": "When connecting to the drone’s WiFi, allow your phone to stay connected even without internet access. If available, set the drone’s WiFi network as the highest priority on your phone to improve connection stability.",
          "isRequired": true
        },
        {
          "question": "My controller is failing to connect. What should I do?",
          "answer": "Ensure both the controller and drone are powered on and have sufficient battery life. If the issue continues, reset both devices and follow the pairing instructions again.",
          "isRequired": true
        },
        {
          "question": "How do I initiate a backflip?",
          "answer": "Press the 360° button on the top right of the controller until you hear a beep. Push the right joystick forward for a front flip, backward for a backflip, right for a right flip, or left for a left flip.",
          "isRequired": true
        }
      ]
    },
    "29": {
      "Id": "",
      "ProductName": "Tinker Train",
      "Price": "",
      "inUse": true,
      "isOffer": true,
      "offerType": "tinkertrain",
      "offerLogo": "images/tinkertrain_logo.png",
      "Category": "ToysKidsBaby",
      "ProductVariation": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 1,
          "item_id": "182",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 2,
          "item_id": "183",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 3,
          "item_id": "184",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 4,
          "item_id": "185",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 5,
          "item_id": "186",
          "itemId": ""
        }
      ],
      "ParentProduct": {
        "Id": "",
        "ProductName": "",
        "Price": "0.00",
        "OrderNo": 1,
        "item_id": "181",
        "itemId": ""
      },
      "protectionPlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "187",
        "itemId": ""
      },
      "coveragePlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "188",
        "itemId": ""
      },
      "upsellProduct": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "189",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "775",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "588",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "605",
          "itemId": "",
          "ParentItemId": ""
        }
      ],
      "Image": "images/tinkertrain1.png",
      "ImageVariation": [
        "images/tinkertrain1.png",
        "images/tinkertrain2.png",
        "images/tinkertrain3.png",
        "images/tinkertrain4.png",
        "images/tinkertrain5.png",
      ],
      "Color": "",
      "Short_Descript": "Where Curiosity Meets Creativity—One Track at a Time!",
      "Descriptions": "The Tinker Train is a vibrant and versatile play-set that combines the thrill of track-building with puzzle-solving fun. Designed for children ages 3+, it includes themed pieces—like dinosaurs, outer space, the ocean, and the forest—and comes in either 15 or 25 piece configurations so the tracks can be rearranged into new and exciting layouts. Each piece is made from durable ABS plastic with smooth edges to keep playtime safe and worry-free. Tinker Train encourages creativity, logical thinking, and problem-solving as kids mix and match tracks, loops, ramps, and even electric trolley sections. Whether constructing race circuits or designing scenic routes, this set makes an ideal gift that engages young minds for hours of joyful play.",
      // "Specifications": {
      //   "Product Dimensions": "Approx. 14 cm x 5 cm x 3 cm",
      //   "Product Weight": "0.88 Ounces"
      // },
      "Terms": "",
      "HOW_TO_USE": "Unbox the pieces and connect them to build your own track design. Place the car or trolley on the track and start moving it. Add themed elements to create fun stories and adventures. Rebuild and rearrange anytime for new and creative play.",
      "DELIVERY_INFO": "This is an American-owned business that doesn't believe it should take 45 days to receive your product from China. Orders are sent from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers depending on speed and efficiency of delivery. Product will be shipped within 48 business hours. Please allow between 5-7 days for standard delivery. You will be emailed a tracking link after your order is shipped. Thank you for your purchase!",
      "FAQ": [{
          "question": "How long will shipping take?",
          "answer": "This is an American-owned business that doesn't believe it should take 45 days to receive your product from China. Orders are sent from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers depending on speed and efficiency of delivery. Product will be shipped within 48 business hours. Please allow between 5-7 days for standard delivery. You will be emailed a tracking link after your order is shipped. Thank you for your purchase!",
          "isRequired": true
        },
        {
          "question": "How does the money back guarantee work?",
          "answer": "Simply return your product and we'll give you a refund for 30 days.",
          "isRequired": true
        },
        {
          "question": "What age is this toy suitable for?",
          "answer": "Tinker Train is best suited for children aged 3 to 6 years old. Younger children may enjoy it with adult supervision due to small parts and battery usage.",
          "isRequired": true
        },
        {
          "question": "Are batteries included with the car?",
          "answer": "No, Tinker Train does not include batteries. The motorized car typically requires 1 AAA battery, which must be purchased separately.",
          "isRequired": true
        },
        {
          "question": "Is the material safe for young children?",
          "answer": "Yes! Tinker Train is made from high-quality, non-toxic ABS plastic with rounded edges to ensure a safe play experience.",
          "isRequired": true
        },
        {
          "question": "Does it come with instructions?",
          "answer": "Yes, Tinker Train includes easy-to-follow illustrated instructions to help kids and parents build a variety of track layouts.",
          "isRequired": true
        },
        {
          "question": "Can multiple kids play with it together?",
          "answer": "Definitely! Tinker Train is great for collaborative play, helping kids work together to build tracks and race their vehicles.",
          "isRequired": true
        },
        {
          "question": "Is this toy good for travel?",
          "answer": "Yes, Tinker Train is lightweight and compact enough to take along for playdates, road trips, or vacations.",
          "isRequired": true
        }
      ]
    },
    "30": {
      "Id": "",
      "ProductName": "Lil Looksee",
      "Price": "",
      "inUse": true,
      "isOffer": true,
      "offerType": "lillooksee",
      "offerLogo": "images/LilLookseelogo.png",
      "Category": "ToysKidsBaby",
      "ProductVariation": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 1,
          "item_id": "194",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 2,
          "item_id": "195",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 3,
          "item_id": "196",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 4,
          "item_id": "197",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 5,
          "item_id": "198",
          "itemId": ""
        }
      ],
      "ParentProduct": {
        "Id": "",
        "ProductName": "",
        "Price": "0.00",
        "OrderNo": 1,
        "item_id": "191",
        "itemId": ""
      },
      "protectionPlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "199",
        "itemId": ""
      },
      "coveragePlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "200",
        "itemId": ""
      },
      "upsellProduct": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "201",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "775",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "588",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "605",
          "itemId": "",
          "ParentItemId": ""
        }
      ],
      "Image": "images/lillookse-1.png",
      "ImageVariation": [
        "images/lillookse-1.png",
        "images/lillookse-2.png",
        "images/lillookse-3.png",
        "images/lillookse-4.png",
        "images/lillookse-5.png",
      ],
      "Color": "",
      "Short_Descript": "Real Magnification for Small Scientists",
      "Descriptions": "Turn curiosity into real discovery with Lil Looksee, a compact, handheld science tool made just for young explorers. Featuring a bright 2-inch display and powerful magnification, it reveals the hidden details of leaves, insects, rocks, fabrics, and more with impressive clarity.Designed to be lightweight yet durable, Lil Looksee is built for everyday adventures—whether indoors or outside. It transforms simple moments into exciting learning experiences, helping kids stay curious, confident, and engaged.With its vivid screen, easy controls, and kid-safe construction, it brings real science into little hands without any complexity. From zooming in up to 1000× to exploring comfortably with adjustable lighting, every feature is made to keep kids discovering longer. The portable design makes it easy to carry anywhere, while the rechargeable battery ensures uninterrupted exploration without constant replacements.Lil Looksee isn’t just a gadget—it’s a fun, hands-on way to spark imagination and turn the world into a playground of discovery.",
      // "Specifications": {
      //   "Product Dimensions": "Approx. 14 cm x 5 cm x 3 cm",
      //   "Product Weight": "0.88 Ounces"
      // },
      "Terms": "",
      "HOW_TO_USE": "Turn on the device using the power button and place the lens close to the object you want to explore.Adjust the focus wheel until the image becomes clear on the screen.Use the LED brightness controls if needed for better visibility.Capture photos or videos with a single button if you want to save your discoveries.After use, simply turn it off and recharge when needed for your next adventure.",
      "DELIVERY_INFO": "This is an American-owned business that doesn't believe it should take 45 days to receive your product from China. Orders are sent from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers depending on speed and efficiency of delivery. Product will be shipped within 48 business hours. Please allow between 5-7 days for standard delivery. You will be emailed a tracking link after your order is shipped. Thank you for your purchase!",
      "FAQ": [{
          "question": "What is the magnification level?",
          "answer": "The microscope offers up to 1000× magnification, ideal for viewing fine details such as insect bodies, leaf veins, fabrics, and even skin textures.",
          "isRequired": true
        },
        {
          "question": "How does lighting work?",
          "answer": "It includes 8 adjustable LED lights surrounding the lens. Users can adjust brightness to enhance clarity on different specimens.",
          "isRequired": true
        },
        {
          "question": "Does it have a screen?",
          "answer": "Yes, the microscope features a 2-inch IPS HD display, offering sharp and vivid colors in real-time. The screen is compact and easy for kids to use.",
          "isRequired": true
        },
        {
          "question": "Can kids easily take photos and videos?",
          "answer": "Yes. With a single button, kids can capture photos. It also supports video recording. It has built-in storage for around 400 photos, while video recording requires a TF (microSD) card.",
          "isRequired": true
        },
        {
          "question": "Is it suitable for outdoor adventures?",
          "answer": "Yes, it is portable, lightweight, and comes with a lanyard and decoration kit. It is durable enough for outdoor use.",
          "isRequired": true
        },
        {
          "question": "What ages are recommended?",
          "answer": "It is designed for ages 3 and up. The simple controls and focus wheel make it easy even for young children to use.",
          "isRequired": true
        },
        {
          "question": "What power source does it use?",
          "answer": "It runs on a built-in lithium-ion battery. Simply charge it and it is ready to use.",
          "isRequired": true
        },
        {
          "question": "Can I connect it to a computer?",
          "answer": "Yes, it can be connected via a USB cable to Windows and macOS computers for viewing on a larger screen.",
          "isRequired": true
        },
        {
          "question": "How durable is it?",
          "answer": "It is compact and built to handle regular use, including outdoor activities by kids.",
          "isRequired": true
        },
        {
          "question": "Is it beginner-friendly?",
          "answer": "Yes, it is plug-and-play and very easy to use, even for young children.",
          "isRequired": true
        }
      ]
    },
    "31": {
      "Id": "",
      "ProductName": "Boltz Retro Device",
      "Price": "",
      "inUse": true,
      "isOffer": true,
      "offerType": "boltzretrodevice",
      "offerLogo": "images/boltzretrodevice_logo.png",
      "Category": "ToysKidsBaby",
      "ProductVariation": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 1,
          "item_id": "1632",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 2,
          "item_id": "1633",
          "itemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "OrderNo": 3,
          "item_id": "1634",
          "itemId": ""
        }

      ],
      "ParentProduct": {
        "Id": "",
        "ProductName": "",
        "Price": "0.00",
        "OrderNo": 1,
        "item_id": "305",
        "itemId": ""
      },
      "protectionPlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "311",
        "itemId": ""
      },
      "coveragePlan": {
        "Id": "",
        "ProductName": "",
        "Price": "",
        "OrderNo": 1,
        "item_id": "312",
        "itemId": ""
      },
      "upsellProduct": [{
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "313",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "775",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "588",
          "itemId": "",
          "ParentItemId": ""
        },
        {
          "Id": "",
          "ProductName": "",
          "Price": "",
          "isUpsell": "true",
          "OrderNo": 1,
          "item_id": "605",
          "itemId": "",
          "ParentItemId": ""
        }
      ],
      "Image": "images/boltzretrodevice_img1.png",
      "ImageVariation": [
        "images/boltzretrodevice_img1.png",
        "images/boltzretrodevice_img1-1.jpg",
        "images/boltzretrodevice_img1-2.jpg",
        "images/boltzretrodevice_img1-3.jpg",
        "images/boltzretrodevice_img1-4.jpg",
      ],
      "Color": "",
      "Short_Descript": "Best thing to happen to gaming since the '90s",
      "Descriptions": "Revel in nostalgia with the Retro Console, a handheld gaming system built for endless fun and classic gaming excitement. With over 15,000 preloaded classics from consoles like NES, SNES, Sega, Game Boy, PS1, and more, it’s your portable arcade ready to go anywhere. The vibrant 3.5-inch IPS screen delivers crisp, colorful graphics, while the powerful processor ensures smooth gameplay across 21 different emulators. Designed with portability in mind, this lightweight console features fast USB Type-C charging and a rechargeable battery that lasts up to 6–8 hours on a single charge. Storage is easily expandable with a MicroSD card, giving you room for even more of your favorite titles. Whether you’re reliving childhood favorites or introducing timeless games to the next generation, the Retro Console is the ultimate way to enjoy old classics while creating new memories.",
      // "Specifications": {
      //   "Product Dimensions": "Approx. 14 cm x 5 cm x 3 cm",
      //   "Product Weight": "0.88 Ounces"
      // },
      "Terms": "",
      "HOW_TO_USE": "Turn on the Boltz Retro device by holding the power button for a few seconds. Use the D-pad or joystick to navigate the menu, press A to select a game, and B to go back. Choose a console, pick a game, and start playing using the control buttons. You can pause with Start, save or load progress, adjust settings if needed, and recharge the device using a USB cable.",
      "DELIVERY_INFO": "This is an American-owned business that doesn't believe it should take 45 days to receive your product from China. Orders are sent from our New Jersey warehouse via USPS, FedEx, UPS, or DHL for international customers depending on speed and efficiency of delivery. Product will be shipped within 48 business hours. Please allow between 5-7 days for standard delivery. You will be emailed a tracking link after your order is shipped. Thank you for your purchase!",
      "FAQ": [{
          "question": "How do I turn on the device?",
          "answer": "Press and hold the power button for 2–3 seconds until the screen lights up.",
          "isRequired": true
        },
        {
          "question": "How do I add new games?",
          "answer": "Connect the device to a computer via USB, copy game files into the correct folders, then safely eject it.",
          "isRequired": true
        },
        {
          "question": "Does it support multiple game consoles?",
          "answer": "Yes, it supports various retro consoles like NES, SNES, Genesis, and more.",
          "isRequired": true
        },
        {
          "question": "Can I save my game progress?",
          "answer": "Yes, you can use the save/load state option from the in-game menu.",
          "isRequired": true
        },
        {
          "question": "How long does the battery last?",
          "answer": "Battery life typically lasts a few hours depending on usage and brightness settings.",
          "isRequired": true
        },
        {
          "question": "How do I charge the device?",
          "answer": "Use the provided USB cable and connect it to a charger or computer.",
          "isRequired": true
        },
        {
          "question": "What should I do if a game doesn’t work?",
          "answer": "Make sure the file format is correct and placed in the proper folder.",
          "isRequired": true
        },
        {
          "question": "Can I connect it to a TV?",
          "answer": "Some models support TV output; check your device specifications.",
          "isRequired": true
        }
      ]
    },

  };



  $scope.selectedSize = null;
  $scope.selectedColor = null;
  $scope.sliderInput = false; // Initialize sliderInput
  $scope.slider = false; // Initialize slider


  // $scope.qty = 1;


  $scope.selectedsubImage = null;
  $scope.selectedsubColor = null;
  $scope.selectedSizesShoe = [];
  $scope.filterNameShop = null;
  $scope.showExtras = false;


  $scope.ringArray = [48276, 48277, 48278, 48279, 48280, 48281, 48300, 48283, 48284, 48285, 48286, 48287, 48288, 48289, 48290, 48291, 48292, 48293, 48294, 48295, 48296, 48297, 48298, 48299, 48282, 34100, 34101, 34102, 34103, 34104, 34105, 34106, 34107, 34108, 34109, 34110, 34111, 34112, 34113, 34114, 21503, 21504, 21505, 21506, 21507, 21508, 21509, 21510, 21511, 21512];
  // //console.log("selectedSizesShoe")


  // Card type options for dropdown
  $scope.cardTypes = [{
      name: 'Visa',
      type: 'visa'
    },
    {
      name: 'MasterCard',
      type: 'mastercard'
    },
    {
      name: 'American Express',
      type: 'amex'
    },
    {
      name: 'Discover',
      type: 'discover'
    },
  ];

  // Detect card type based on number
  $scope.detectCardType = function(number) {
    if (!number) return '';

    number = number.replace(/\D/g, ''); // Clean non-digits

    if (number.length < 4) return ''; // Detect only after 4 digits

    if (/^4/.test(number)) return 'visa';
    if (/^5[1-5]/.test(number) || /^2(2[2-9]|[3-6]|7[01]|720)/.test(number)) return 'mastercard';
    if (/^3[47]/.test(number)) return 'amex';
    if (/^6(?:011|5|4[4-9])/.test(number)) return 'discover';
    if (/^35(2[89]|[3-8])/.test(number)) return 'jcb';
    if (/^3(?:0[0-5]|[68])/.test(number)) return 'diners';

    return '';
  };

  // Triggered when card number changes
  $scope.autoDetectCardType = function() {
    const number = $scope.FullFormData.cc_number;

    if (!number || number.trim() === '') {
      $scope.FullFormData.cc_type = ''; // Reset dropdown
      return;
    }

    const cleanedNumber = number.replace(/\D/g, '');

    if (cleanedNumber.length < 4) {
      $scope.FullFormData.cc_type = ''; // Not enough digits
      return;
    }

    const detected = $scope.detectCardType(cleanedNumber);

    if (detected) {
      $scope.FullFormData.cc_type = detected;
    } else {
      $scope.FullFormData.cc_type = ''; // No match
    }
  };


  $scope.removeFromCartALL = function(key, cart) {
    if (key === 'ring') {
      //   //console.log("Ring removal initiated");

      // Loop through cart and remove items based on the searchRing function
      Object.keys(cart).forEach(function(itemKey, item) {
        // var item = cart[itemKey];//console.log("Removed item with productId: " + JSON.stringify(cart[itemKey].productId));
        ////console.log("Removed item with productId: " + JSON.stringify(cart[itemKey].productId));
        let currentItem = {
          "key": itemKey,
          "productId": cart[itemKey].productId
        };
        ////console.log("ajsjssj ", currentItem);
        // Check if the productId matches using searchRing
        if ($scope.searchRing(Number(currentItem.productId))) {
          // If the item matches, delete it from the cart
          $scope.removeFromCart(currentItem.key);
          //  //console.log("Removed item with productId: " + item);
        }
      });

      //  //console.log("Updated cart:", cart);
    }
  };


  $scope.sortCart = function(cart) {
    // Convert cart object to an array of product objects
    const cartItems = Object.values(cart);

    // Filter only those products where searchRing returns true
    const filteredItems = cartItems.filter(item => $scope.searchRing(item.productId));

    // Sort the filtered items by productPrice in ascending order
    filteredItems.sort(function(a, b) {
      // Ensure productPrice is treated as a number for correct comparison
      return parseFloat(b.productPrice) - parseFloat(a.productPrice);
    });

    // Log the sorted filtered items
    //  //console.log("Sorted and filtered cart elements:", filteredItems);

    // Optionally, update the cart with the sorted and filtered items
    // $scope.cart = filteredItems;

    return filteredItems;
  };

  // // Example usage
  // $scope.sortCart($scope.cart);

  $scope.sortProductId = function(item) {
    return Number(item.productId);
  };
  $scope.searchRing = function(element) {
    return $scope.ringArray.includes(Number(element));
  };

  $scope.searchRingCount = function(cart) {
    let c = 0;
    Object.keys(cart).forEach(function(itemKey, item) {

      let currentItem = {
        "key": itemKey,
        "productId": cart[itemKey].productId
      };
      if ($scope.searchRing(Number(currentItem.productId))) {
        c = c + 1;
      }
    });
    //   //console.log("current element in cart ring ",c);
    return c === 0 ? 0 : c - 1;
  };

  $scope.selectSize = function(size) {
    $scope.selectedSize = size;
    // additional logic if needed
  };
  $scope.sortedCheckoutCart = function(cart) {
    if (!cart) return [];

    const shippingItems = [];
    const childItems = [];
    const parentItems = [];
    const otherItems = [];

    // Convert object → array while categorizing
    angular.forEach(cart, function(item, key) {
      if (!item || typeof item !== "object") return;

      // Shipping
      if (key === "ship_only" || item.shp === "y") {
        shippingItems.push(item);
        return;
      }

      // Child product
      if (item.type === "Child") {
        childItems.push(item);
        return;
      }

      // Parent product
      if (item.type === "Parent") {
        parentItems.push(item);
        return;
      }

      // Fallback
      otherItems.push(item);
    });

    /*
      Final Order:
      1️⃣ Shipping
      2️⃣ Child (main product)
      3️⃣ Parent (sizes)
      4️⃣ Anything else
    */
    const sortedCart = [
      ...childItems,
      ...parentItems,
      ...otherItems,
      ...shippingItems
    ];

    //   console.log("Sorted Cart ",sortedCart)

    return sortedCart;
  };
  $scope.toggleSwitch = function() {
    $scope.showExtras = !$scope.showExtras;
  }
  // Initialize band options
  $scope.bandOptions = [{
      name: 'Navy',
      class: 'navy-color',
      quantity: 0,
      parentId: '9'
    },
    {
      name: 'Pink',
      class: 'pnk-color',
      quantity: 0,
      parentId: '10'
    },
    {
      name: 'Orange',
      class: 'orange-color',
      quantity: 0,
      parentId: '12'
    },
    {
      name: 'White',
      class: 'white-color',
      quantity: 0,
      parentId: '11'
    },
    {
      name: 'Red',
      class: 'red-color',
      quantity: 0,
      parentId: '13'
    }
  ];

  // Button handlers
  $scope.increaseQuantity = function(band) {
    if (band.quantity < 5) {
      band.quantity++;
    }
  };

  $scope.decreaseQuantity = function(band) {
    if (band.quantity > 0) {
      band.quantity--;
    }
  };

  // Add to Order handler
  $scope.addBandsToOrder = function() {
    const selectedBands = $scope.bandOptions
      .filter(b => b.quantity > 0)
      .map(b => ({
        name: b.name,
        quantity: b.quantity,
        parentId: b.parentId
      }));

    if (selectedBands.length === 0) {
      alert("Please select at least one band.");
      return;
    }

    //console.log("Selected Bands:", selectedBands);

    selectedBands.forEach(band => {
      $scope.updateCartAddOn(band.parentId, band.quantity);
    });

    // Continue with further logic (e.g., API call, adding to cart, etc.)
  };




  //  $scope.$watch('showExtras', function(newValue) {
  //           //console.log("$newValue ",newValue);
  //         $scope.showExtras = !newValue; // Set slider to true if checked, false if unchecked

  //         //console.log("$scope.showExtras ",$scope.showExtras);
  //     });

  // Watch for changes in sliderInput
  $scope.$watch('sliderInput', function(newValue) {
    //    //console.log("$newValue ",newValue);
    $scope.slider = newValue; // Set slider to true if checked, false if unchecked

    //   //console.log("$scope.slider ",$scope.slider);
  });
  $scope.cleanProductName = function(productName, currentPage) {
    // Check if productName matches specific known cases
    const specialProductNames = [
      '1x Vital Flex Core (Stand-Alone)',
      '2x Vital Flex Core (Stand-Alone)',
      '1x Vital Flex Core (Abs Stimulator System)',
      '2x Vital Flex Core (Abs Stimulator System)'
    ];

    if (specialProductNames.includes(productName)) {
      return productName.trim(); // Return the name without modification
    } else {
      // Remove size information and any content in parentheses
      return productName && productName !== "" ?
        productName.replace(/(\s\d+(\.\d+)?|\s*\(.*\)| (XS|S|M|L|XL|XXL))$/i, '').trim() :
        ""; // If productName is empty, return an empty string
    }
  };

  $scope.cleanShopProductName = function(productName) {

    //  //console.log("productName ",productName);
    //  //console.log("productNameA ",productName.replace(/^(1x|2x)\s*/, '').replace(/(\s\d+(\.\d+)?| (XS|S|M|L|XL|XXL))$/i, '').trim());
    return productName.replace(/^(1x|2x|3x|4x|5x|6x)\s*/, '').replace(/(\s\d+(\.\d+)?| (XS|S|M|L|XL|XXL))$/i, '').trim();
  };





  $scope.combinedName = function(name, qty) {
    // console.log("qty+ +name "+qty+" "+name);
    return qty + " " + name
  }

  $scope.getNewOfferLikeProductVariation = function(productVariation, order) {

    // console.log("Current Product ",$scope.product);
    if ($scope.product != null || $scope.product != undefined || $scope.product != "") {
      if ($scope.product.offerType == "blackfalcondrone") {
        order = [2, 1, 4]
      }
    }

    var sorted = productVariation.slice().sort(function(a, b) {
      return order.indexOf(a.OrderNo) - order.indexOf(b.OrderNo);
    });

    return sorted;
  };

  $scope.productRedirect = function(productId) {
    //  console.log("productId ",productId);
    if (productId == 14 || productId == 'memberreward') {
      window.location.href = 'reward-product?page=118&img=mem-img.jpg';
    } else {
      window.location.href = 'checkout?product=' + productId;
    }

  }

  $scope.categoryRedirect = function(productId) {

    //   //console.log("productId ",productId);
    window.location.href = productId;
  }



  $scope.items_clickbumb = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  // Get productId from URL query parameters
  var urlParams = new URLSearchParams(window.location.search);
  // var productId = urlParams.get('productId');

  // // Fetch product details using productId
  // $scope.product = $scope.allproducts[productId];

  // console.log("Current Product ",$scope.product);
  var productParam = urlParams.get('productId') || urlParams.get('v') || urlParams.get('product');

  // slug → productId map
  var productMap = {
    "magickickhoversoccerball": 1,
    "galaxyflyball": 4,
  };

  // check if number
  // var productId = !isNaN(productParam) 
  // ? productParam 
  // : productMap[productParam];

  $scope.getProductIdByOfferType = function(offerType) {
    //console.log("offer ",offerType);
    for (var key in $scope.allproducts) {
      if ($scope.allproducts.hasOwnProperty(key)) {
        if ($scope.allproducts[key].offerType === offerType) {
          return key; // or return $scope.allproducts[key].Id
        }
      }
    }
    return null;
  }

  var productId = !isNaN(productParam) ?
    productParam :
    $scope.getProductIdByOfferType(productParam);

  //  console.log("productId : ",productId);

  // Fetch product details
  $scope.product = $scope.allproducts[productId];

  // console.log("Current Product", $scope.product);



  $scope.currentProductId = "";
  $scope.mainProductCartCopy = "";
  $scope.upsellProductCartCopy = "";
  $scope.formDataCopy = "";



  // ✅ Function to SET current product ID
  $scope.setCurrentProduct = function(id) {
    localStorage.setItem("currentProductId", id);
    $scope.currentProductId = id;
    //   console.log("Product ID set:", id);
  };
  $scope.copyCurrentCart = function() {
    var id = localStorage.getItem("cart") || "";
    $scope.mainProductCartCopy = id;
    localStorage.setItem("copyCart", $scope.mainProductCartCopy);
    //  console.log("Cart copied:", $scope.mainProductCartCopy);
    return id;
  }
  $scope.setCheckoutDetails = function(formData) {

    // Clone object to avoid mutating original formData
    var safeData = angular.copy(formData);

    // Remove card-related fields
    delete safeData.cc_type;
    delete safeData.cc_number;
    delete safeData.cc_number_formatted;
    delete safeData.expmonth;
    delete safeData.expyear;
    delete safeData.cvv;
    delete safeData.creditCardType;

    $scope.formDataCopy = safeData;

    localStorage.setItem("formDataCheckout", JSON.stringify(safeData));

    //   console.log("Saved Checkout Data (No Card Info):", safeData);
  };

  $scope.getCheckoutDetails = function() {
    return JSON.parse(localStorage.getItem('formDataCheckout')) || {};
    //return {"name":"gdsgs"};
  };

  $scope.getCopyData = function() {
    return JSON.parse(localStorage.getItem('copyCart')) || {};
  };
  $scope.getMainProductOrderId = function() {
    return JSON.parse(localStorage.getItem('mainOrderDetails')) || {};
  };
  $scope.copyData = $scope.getCopyData();
  $scope.copyCurrentCartUpsell = function() {
    var id = localStorage.getItem("cart") || "";
    $scope.upsellProductCartCopy = id;
    localStorage.setItem("copyCartUpsell", $scope.upsellProductCartCopy);
    //   console.log("Cart copied:", id);
    return id;
  }


  // ✅ Function to GET current product ID
  $scope.getCurrentProduct = function() {
    var id = localStorage.getItem("currentProductId") || "";
    $scope.currentProductId = id;
    // console.log("Product ID fetched:", id);
    return id;
  };




  $scope.getAllTotal = function() {
    let total = 0;

    // Parse both localStorage items
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    const copyCart = JSON.parse(localStorage.getItem('copyCart')) || {};

    // Helper function to sum subtotals
    const addTotals = function(obj) {
      angular.forEach(obj, function(item) {
        if (item && item.subTotal !== undefined) {
          total += parseFloat(item.subTotal) || 0;
        }
      });
    };

    // Add totals from both carts
    //addTotals(cart);
    addTotals(copyCart);

    return total.toFixed(2);
  };

  var mainProductId = $scope.getCurrentProduct();
  $scope.mainProduct = $scope.allproducts[mainProductId];


  $scope.changeImage = function(imageSrc, color, currentId) {

    ////console.log("inside change currentId",currentId);
    let current_product = $scope.allproducts[currentId];
    //   //console.log('current_product ',current_product)
    current_product.ImageVariation[0] = imageSrc;
    $scope.selectedColor = color;
  };
  $scope.changeSubImage = function(imageSrc, color) {

    // //console.log("inside change color",color);
    $scope.selectedsubImage = imageSrc;
    $scope.selectedsubColor = color;
  };

  $scope.removeFromCartCustom = function(key, cart, parentId) {

    Object.keys(cart).forEach(function(itemKey, item) {
      if (cart[itemKey].currentProductId == parentId) {
        $scope.removeFromCart(itemKey);
      }

    });

    //  //console.log("Updated cart:", cart);

  };

  $scope.countFromCartCustom = function(cart) {

    let c = 0;
    Object.keys(cart).forEach(function(itemKey, item) {
      if (cart[itemKey].type == 'Child' || cart[itemKey].reward_terms) {
        c = c + 1;
      }

    });

    return c;

    //  //console.log("Updated cart:", cart);

  };

  $scope.shortenDescription = function(desc, limit = 100) {
    if (!desc) return "";
    if (desc.length <= limit) return desc;
    return desc.substring(0, limit) + "...";
  };

  $scope.removeFromCartCustomNew = function(key, cart) {
    let childKey = cart[key].childKey;

    // //console.log("key ",key);  
    // //console.log("childKey ",childKey);

    if (childKey == 'ring' || childKey == 'flex') {

      $scope.removeFromCart(key);
      Object.keys(cart).forEach(function(itemKey, item) {
        if (cart[itemKey].parentKey == key) {
          $scope.removeFromCart(itemKey);
        }

      });
    } else {
      $scope.removeFromCart(key);
      $scope.removeFromCart(childKey);
    }





    // Object.keys(cart).forEach(function(itemKey,item) {

    //      //console.log("key itemKey",itemKey);
    //      //console.log("key key",cart[key]);
    //     if(itemKey == key){
    //          // $scope.removeFromCart(itemKey);
    //          //console.log("key product",key);
    //     }

    //     });
  }

  $scope.getCartQuantityCustom = function(cart) {
    let c = 0;
    Object.keys(cart).forEach(function(itemKey, item) {

      // //console.log("itemKey ",itemKey);
      if (cart[itemKey].type == 'parent') {
        c = c + 1;
      }

    });

    return c;
  };

  // Initialize the object to keep track of displayed options
  $scope.displayedOptions = {};

  $scope.updateCartProduct = function(selectedVariation, currentProductId, selectedSize, clickbumbarray, qty) {
    const product = $scope.allproducts[currentProductId];
    const parentItem = product.ParentProduct;
    let finalProductName = $scope.cleanProductName(selectedVariation.ProductName, currentProductId);

    if (selectedSize) {
      finalProductName = finalProductName.replace(/(\s\d+(\.\d+)?| (XS|S|M|L|XL|XXL))$/i, '').trim() + " " + selectedSize;
    }

    // Helper: Create cart item
    function createCartItem(p, type, key, q = 1) {
      return {
        productName: p.ProductName,
        productVariationName: $scope.cleanProductName(p.ProductName),
        productId: p.Id,
        productPrice: parseFloat(p.Price),
        productImage: $scope.product.Image,
        productQty: q,
        previousPrice: parseFloat(p.Price),
        type: type,
        [type === "Child" ? "childKey" : "parentKey"]: key,
        shippingPrice: "0.00",
        itemId: p.item_id
      };
    }

    // --------------------------
    // HANDLE PRODUCT ID 3 (rings)
    // --------------------------
    if (currentProductId == '3' && Array.isArray(clickbumbarray)) {
      const visitArray = [1, 1, 1, 1, 1, 1];
      clickbumbarray.forEach(item => {
        const index = item - 6;
        const parentProd = $scope.allproducts['3'].ParentProduct[index];
        if (parentProd) {
          const cartItem = createCartItem(parentProd, "Parent", "productChild" + parentProd.Id + selectedVariation.item_id, visitArray[index]);
          visitArray[index]++;
          $scope.updateCart("productParentring" + item, cartItem);
        }
      });
    }

    // --------------------------
    // Create child product cart
    // --------------------------
    const cartItemChild = {
      ...createCartItem(
        selectedVariation || $scope.product,
        "Child",
        currentProductId == '3' ? "ring" : currentProductId == '7' ? "flex" : "productParent" + parentItem.Id + parentItem.item_id
      ),
      productName: finalProductName,
      productVariationName: $scope.cleanProductName(selectedVariation.ProductName, currentProductId),
      productQty: qty || 1
    };

    $scope.updateCart('productChild', cartItemChild);

    // --------------------------
    // Create parent product cart
    // --------------------------
    if (currentProductId != 3 && currentProductId != 7) {
      const cartItemParent = createCartItem(
        parentItem,
        "Parent",
        "productChild" + parentItem.Id + selectedVariation.item_id,
        selectedVariation.Quantity || selectedVariation.OrderNo || 1
      );
      $scope.updateCart('productParent', cartItemParent);
    }

    // --------------------------
    // HANDLE PRODUCT ID 7 (flex)
    // --------------------------
    if (currentProductId == 7) {
      const parentProducts = $scope.allproducts['7'].ParentProduct;
      const updateFlex = (index, qty, suffix) => {
        const prod = parentProducts[index];
        if (prod) {
          const item = createCartItem(prod, "Parent", "productChild" + prod.Id + selectedVariation.item_id, qty);
          $scope.updateCart('productParentflex' + suffix, item);
        }
      };

      switch (selectedVariation.OrderNo) {
        case 1:
          updateFlex(0, 1, 1);
          break;
        case 2:
          updateFlex(0, 2, 2);
          break;
        case 3:
          updateFlex(1, 1, 3);
          updateFlex(2, 1, 4);
          break;
        case 4:
          updateFlex(1, 2, 5);
          updateFlex(2, 2, 6);
          break;
      }
    }
  };



  // $scope.newUpdateCartProduct = function(ProductVariation, productId, quantity) {
  //   if (!ProductVariation || !productId) {
  //     console.error("Missing product variation or product ID");
  //     return;
  //   }
  //  $scope.setCurrentProduct(productId);

  //   const product = $scope.allproducts[productId];
  //   if (!product || !product.ParentProduct) {
  //     console.error("Invalid product or missing parent product for ID:", productId);
  //     return;
  //   }

  //   const parentItem = product.ParentProduct;
  //   const qty = quantity && quantity > 0 ? quantity : (ProductVariation.Quantity || ProductVariation.OrderNo || 1);

  //   // Helper to clean name
  //   const cleanName = (name) => $scope.cleanProductName ? $scope.cleanProductName(name) : name;

  //   const parentCartItem = {
  //     productName: parentItem.ProductName,
  //     productVariationName: cleanName(parentItem.ProductName),
  //     productId: parentItem.Id,
  //     productPrice: "0.00",
  //     productImage: product.Image,
  //     productQty: qty,
  //     jsonId:productId,
  //     previousPrice: "0.00",
  //     type: "Parent",
  //     parentKey: "productChild" + parentItem.Id + ProductVariation.item_id,
  //     shippingPrice: "0.00",
  //     itemId: parentItem.item_id
  //   };

  //  //console.log("inside ProductVariation ",ProductVariation);

  //   const childCartItem = {
  //     productName: ProductVariation.name,
  //     productVariationName: cleanName(ProductVariation.name),
  //     productId: ProductVariation.id,
  //     productPrice: parseFloat(ProductVariation.price).toFixed(2),
  //     productImage: product.Image,
  //     productQty: 1,
  //     jsonId:productId,
  //     previousPrice: parseFloat(ProductVariation.price).toFixed(2),
  //     type: "Child",
  //     childKey: "productParent" + parentItem.Id + parentItem.item_id,
  //     shippingPrice: "0.00",
  //     itemId: ProductVariation.item_id
  //   };


  //   $scope.updateCart("productParent", parentCartItem);
  //   $scope.updateCart("productChild", childCartItem);


  //   //console.log("Parent Item →", parentCartItem);
  //   //console.log("Child Item →", childCartItem);
  //    $scope.copyCurrentCart();
  // };
  $scope.newUpdateCartProduct = function(ProductVariation, productId, quantity) {
    if (!ProductVariation || !productId) {
      console.error("Missing product variation or product ID");
      return;
    }

    //   if(productId == "magickickhoversoccerball"){
    //       productId=1;
    //   }
    //   if(productId == "galaxyflyball"){
    //       productId=4;
    //   }

    productId = !isNaN(productId) ?
      product :
      $scope.getProductIdByOfferType(productId);

    const product = $scope.allproducts[productId];
    if (!product || !product.ParentProduct) {
      console.error("Invalid product or missing parent product for ID:", productId);
      return;
    }

    const cleanName = (name) =>
      $scope.cleanProductName ? $scope.cleanProductName(name) : name;

    const qty = quantity && quantity > 0 ? quantity : 1;
    $scope.selectedQuantity = qty;

    const parentItemBase = product.ParentProduct;

    /* =====================================================
       CASE 1: PRODUCT HAS SIZE PARENT (FIXED – NO OVERLAP)
    ===================================================== */
    if (product.SizeParent && Array.isArray(ProductVariation.sizes)) {
      const selectedSizes = ProductVariation.sizes;
      if (!selectedSizes.length) return;

      selectedSizes.forEach((size, index) => {
        const sizeParent = product.SizeParent.find(
          (sp) => sp.size === size
        );
        if (!sizeParent) return;

        // 🔑 UNIQUE KEY PER SIZE
        const uniqueKey = `${size}-${index}`;

        /* ---------- Parent Item ---------- */
        const parentCartItem = {
          productName: `${sizeParent.ProductName} - ${sizeParent.size}`,
          productVariationName: cleanName(
            `${sizeParent.ProductName} - ${sizeParent.size}`
          ),
          productId: sizeParent.Id,
          productPrice: "0.00",
          productImage: product.Image,
          productQty: 1,
          jsonId: productId,
          previousPrice: "0.00",
          type: "Parent",
          parentKey: `productChild-${sizeParent.Id}-${ProductVariation.item_id}-${uniqueKey}`,
          shippingPrice: "0.00",
          itemId: sizeParent.item_id
        };

        /* ---------- Child Item ---------- */
        const childCartItem = {
          productName: ProductVariation.name,
          productVariationName: cleanName(ProductVariation.name),
          productId: ProductVariation.id,
          productPrice: parseFloat(ProductVariation.price).toFixed(2),
          productImage: product.Image,
          productQty: 1,
          jsonId: productId,
          previousPrice: parseFloat(ProductVariation.price).toFixed(2),
          type: "Child",
          childKey: `productParent-${sizeParent.Id}-${sizeParent.item_id}-${uniqueKey}`,
          shippingPrice: "0.00",
          itemId: ProductVariation.item_id
        };

        $scope.updateCart("productParent" + parentCartItem.itemId, parentCartItem);
        // $scope.updateCart("productChild"+childCartItem.itemId, childCartItem);

        console.log("parentCartItem ", parentCartItem);
        console.log("childCartItem ", childCartItem);
      });

      return;
    }

    /* =====================================================
       CASE 2: PRODUCT WITH NO PARENT SINGLE PRODUCT
    ===================================================== */
    if (product.isSingleProduct) {
      const childCartItem = {
        productName: ProductVariation.name,
        productVariationName: cleanName(ProductVariation.name),
        productId: ProductVariation.id,
        productPrice: parseFloat(ProductVariation.price).toFixed(2),
        productImage: product.Image,
        productQty: 1,
        jsonId: productId,
        previousPrice: parseFloat(ProductVariation.price).toFixed(2),
        type: "Child",
        childKey: `productParent-${parentItemBase.Id}-${parentItemBase.item_id}`,
        shippingPrice: "0.00",
        itemId: ProductVariation.item_id
      };


      $scope.updateCart("productChild", childCartItem);
      return;
    }

    /* =====================================================
     CASE 3: PRODUCT WITH MULTIPLE PARENTS
  ===================================================== */
    if (product.SubProduct && typeof product.SubProduct === "object" && Object.keys(product.SubProduct).length > 0) {

      let isUpgradeBundle = ProductVariation.isUpgradeBundle;

      //   console.log("Inside Sub product");
      //   console.log("ProductVariation ",ProductVariation);
      //   console.log("quantity ",quantity);

      const parentCartItem = {
        productName: ProductVariation.name,
        productVariationName: cleanName(ProductVariation.name),
        productId: ProductVariation.id,
        productPrice: parseFloat(ProductVariation.price).toFixed(2),
        productImage: product.Image,
        productQty: 1,
        jsonId: productId,
        previousPrice: parseFloat(ProductVariation.price).toFixed(2),
        type: "Child",
        childKey: `productChild-${parentItemBase.Id}-${ProductVariation.item_id}`,
        shippingPrice: "0.00",
        itemId: ProductVariation.item_id
      };

      let final_first_sub = {};
      let final_second_sub = {};


      if (quantity == 1) {
        let first_sub_pro = product.SubProduct.pro1[0];
        let second_sub_pro = product.SubProduct.pro1[1];
        //  console.log("first_sub_pro ",first_sub_pro);
        final_first_sub = {
          productName: first_sub_pro.ProductName,
          productVariationName: cleanName(first_sub_pro.ProductName),
          productId: first_sub_pro.Id,
          productPrice: parseFloat(first_sub_pro.Price).toFixed(2),
          productImage: product.Image,
          productQty: first_sub_pro.OrderNo,
          jsonId: productId,
          previousPrice: parseFloat(first_sub_pro.Price).toFixed(2),
          type: "Child",
          childKey: `productParent-${product.Id}-${product.item_id}`,
          shippingPrice: "0.00",
          itemId: first_sub_pro.item_id
        };
        final_second_sub = {
          productName: second_sub_pro.ProductName,
          productVariationName: cleanName(second_sub_pro.ProductName),
          productId: second_sub_pro.Id,
          productPrice: parseFloat(second_sub_pro.Price).toFixed(2),
          productImage: product.Image,
          productQty: second_sub_pro.OrderNo,
          jsonId: productId,
          previousPrice: parseFloat(second_sub_pro.Price).toFixed(2),
          type: "Child",
          childKey: `productParent-${product.Id}-${product.item_id}`,
          shippingPrice: "0.00",
          itemId: second_sub_pro.item_id
        };
      }
      if (quantity == 2) {
        let first_sub_pro = product.SubProduct.pro2[0];
        let second_sub_pro = product.SubProduct.pro2[1];
        //console.log("first_sub_pro ",first_sub_pro);
        final_first_sub = {
          productName: first_sub_pro.ProductName,
          productVariationName: cleanName(first_sub_pro.ProductName),
          productId: first_sub_pro.Id,
          productPrice: parseFloat(first_sub_pro.Price).toFixed(2),
          productImage: product.Image,
          productQty: first_sub_pro.OrderNo,
          jsonId: productId,
          previousPrice: parseFloat(first_sub_pro.Price).toFixed(2),
          type: "Child",
          childKey: `productParent-${product.Id}-${product.item_id}`,
          shippingPrice: "0.00",
          itemId: first_sub_pro.item_id
        };
        final_second_sub = {
          productName: second_sub_pro.ProductName,
          productVariationName: cleanName(second_sub_pro.ProductName),
          productId: second_sub_pro.Id,
          productPrice: parseFloat(second_sub_pro.Price).toFixed(2),
          productImage: product.Image,
          productQty: second_sub_pro.OrderNo,
          jsonId: productId,
          previousPrice: parseFloat(second_sub_pro.Price).toFixed(2),
          type: "Child",
          childKey: `productParent-${product.Id}-${product.item_id}`,
          shippingPrice: "0.00",
          itemId: second_sub_pro.item_id
        };
      }
      if (quantity == 4) {
        let first_sub_pro = product.SubProduct.pro4[0];
        let second_sub_pro = product.SubProduct.pro4[1];
        //console.log("first_sub_pro ",first_sub_pro);
        final_first_sub = {
          productName: first_sub_pro.ProductName,
          productVariationName: cleanName(first_sub_pro.ProductName),
          productId: first_sub_pro.Id,
          productPrice: parseFloat(first_sub_pro.Price).toFixed(2),
          productImage: product.Image,
          productQty: first_sub_pro.OrderNo,
          jsonId: productId,
          previousPrice: parseFloat(first_sub_pro.Price).toFixed(2),
          type: "Child",
          childKey: `productParent-${product.Id}-${product.item_id}`,
          shippingPrice: "0.00",
          itemId: first_sub_pro.item_id
        };
        final_second_sub = {
          productName: second_sub_pro.ProductName,
          productVariationName: cleanName(second_sub_pro.ProductName),
          productId: second_sub_pro.Id,
          productPrice: parseFloat(second_sub_pro.Price).toFixed(2),
          productImage: product.Image,
          productQty: second_sub_pro.OrderNo,
          jsonId: productId,
          previousPrice: parseFloat(second_sub_pro.Price).toFixed(2),
          type: "Child",
          childKey: `productParent-${product.Id}-${product.item_id}`,
          shippingPrice: "0.00",
          itemId: second_sub_pro.item_id
        };
      }

      //   console.log("Parent ",parentCartItem);
      //   console.log("Child 1 ",final_first_sub);
      //   console.log("Child 2 ",final_second_sub);
      if (isUpgradeBundle) {
        $scope.updateCart("add_upgrade", parentCartItem);
      } else {
        $scope.updateCart("productChild", parentCartItem);
      }

      $scope.updateCart("productParent1", final_first_sub);
      $scope.updateCart("productParent2", final_second_sub);


      return;
      // your code here
    }




    /* =====================================================
       CASE 4: PRODUCT WITHOUT SIZE PARENT (UNCHANGED)
    ===================================================== */

    const parentCartItem = {
      productName: parentItemBase.ProductName,
      productVariationName: cleanName(parentItemBase.ProductName),
      productId: parentItemBase.Id,
      productPrice: "0.00",
      productImage: product.Image,
      productQty: qty,
      jsonId: productId,
      previousPrice: "0.00",
      type: "Parent",
      parentKey: `productChild-${parentItemBase.Id}-${ProductVariation.item_id}`,
      shippingPrice: "0.00",
      itemId: parentItemBase.item_id
    };

    const childCartItem = {
      productName: ProductVariation.name,
      productVariationName: cleanName(ProductVariation.name),
      productId: ProductVariation.id,
      productPrice: parseFloat(ProductVariation.price).toFixed(2),
      productImage: product.Image,
      productQty: 1,
      jsonId: productId,
      previousPrice: parseFloat(ProductVariation.price).toFixed(2),
      type: "Child",
      childKey: `productParent-${parentItemBase.Id}-${parentItemBase.item_id}`,
      shippingPrice: "0.00",
      itemId: ProductVariation.item_id
    };

    $scope.updateCart("productParent", parentCartItem);
    $scope.updateCart("productChild", childCartItem);
  };

  $scope.isUpsellDone = false;

  $scope.upsellUpdateCartProduct = function(productId, variantNumber, quantity, memberShip) {
    if (!productId) {
      console.error("Missing product variation or product ID");
      return;
    }

    const product = $scope.allproducts[productId].upsellProduct[variantNumber];
    // console.log("Current Upsell Product ",product);
    if (!product) {
      console.error("Invalid product or missing parent product for ID:", productId);
      return;
    }

    const parentItem = product;

    const qty = 1;


    const cleanName = (name) => $scope.cleanProductName ? $scope.cleanProductName(name) : name;

    const parentCartItem = {
      productName: parentItem.ProductName,
      productVariationName: cleanName(parentItem.ProductName),
      productId: parentItem.Id,
      productPrice: "0.00",
      productImage: product.Image,
      productQty: qty,
      jsonId: productId,
      previousPrice: "0.00",
      type: "Child",
      parentKey: "",
      shippingPrice: "0.00",
      itemId: parentItem.item_id
    };

    $scope.updateCart("productParent", parentCartItem);

    $scope.selectMembership('product141', '146', 24);

    $scope.copyCurrentCartUpsell();
    $scope.isUpsellDone = true;

  };

  $scope.skipUpsell = function() {
    $scope.isUpsellDone = false;
    $scope.clearCart();

    // Get current URL parts
    var path = window.location.pathname;
    var search = window.location.search;

    // Replace last path segment with 'thank-you'
    var newPath = path.replace(/\/[^\/]*$/, '/thank-you');

    // Redirect to the new URL
    window.location.href = newPath + search;
  };


  // $scope.upsellUpdateCartProduct = function(productId,variantNumber, quantity,memberShip) {
  //   if (!productId) {
  //     console.error("Missing product variation or product ID");
  //     return;
  //   }

  //   const product = $scope.allproducts[productId].upsellProduct[variantNumber];
  //   console.log("Current Upsell Product ",product);
  //   if (!product || !product.parentProduct) {
  //     console.error("Invalid product or missing parent product for ID:", productId);
  //     return;
  //   }

  //   const parentItem = product.parentProduct;

  // const qty =1;


  //   const cleanName = (name) => $scope.cleanProductName ? $scope.cleanProductName(name) : name;

  //   const parentCartItem = {
  //     productName: parentItem.ProductName,
  //     productVariationName: cleanName(parentItem.ProductName),
  //     productId: parentItem.Id,
  //     productPrice: "0.00",
  //     productImage: product.Image,
  //     productQty: qty,
  //     jsonId:productId,
  //     previousPrice: "0.00",
  //     type: "Parent",
  //     parentKey: "productChild" + parentItem.Id + product.childProduct.item_id,
  //     shippingPrice: "0.00",
  //     itemId: parentItem.item_id
  //   };



  //   const childCartItem = {
  //     productName: product.childProduct.ProductName,
  //     productVariationName: cleanName(product.childProduct.ProductName),
  //     productId: product.childProduct.Id,
  //     productPrice: parseFloat(product.childProduct.Price),
  //     productImage: product.Image,
  //     productQty: 1,
  //     jsonId:productId,
  //     previousPrice: parseFloat(product.childProduct.Price),
  //     type: "Child",
  //     childKey: "productParent" + parentItem.Id + parentItem.item_id,
  //     shippingPrice: "0.00",
  //     itemId: product.childProduct.item_id
  //   };


  //   $scope.updateCart("productParent", parentCartItem);
  //   $scope.updateCart("productChild", childCartItem);


  //    $scope.copyCurrentCartUpsell();
  // };




  $scope.updateCartAddOn = function(currentProductId, parentQuantity) {

    let selectedVariation = $scope.allproducts[currentProductId].ProductVariation[parentQuantity - 1];

    let parentItem = $scope.allproducts[currentProductId].ParentProduct;
    let cartItem = {
      productName: $scope.cleanProductName(selectedVariation.ProductName, currentProductId),

      productVariationName: $scope.cleanProductName(selectedVariation.ProductName, currentProductId),

      productId: (selectedVariation ? selectedVariation.Id : $scope.product.Id),
      productPrice: selectedVariation ? parseFloat(selectedVariation.Price) : parseFloat($scope.product.Price),
      productImage: $scope.allproducts[currentProductId].Image,
      productQty: 1,
      previousPrice: selectedVariation ? parseFloat(selectedVariation.Price) : parseFloat($scope.product.Price),
      type: "Child",
      childKey: "productParent" + parentItem.Id + parentItem.item_id,
      shippingPrice: "0.00",
      itemId: selectedVariation.item_id

    };
    // //console.log("parentItem Id ",currentProductId);

    //console.log("selectedVariation ",selectedVariation);
    let cartItemParent = {


      productName: parentItem.ProductName,

      productVariationName: $scope.cleanProductName(parentItem.ProductName),

      productId: parentItem.Id,
      productPrice: parentItem.Price,
      productImage: $scope.allproducts[currentProductId].Image,
      productQty: parentQuantity,
      previousPrice: parentItem.Price,
      type: "Parent",
      parentKey: "productChild" + parentItem.Id + selectedVariation.item_id,
      shippingPrice: "0.00",
      itemId: parentItem.item_id
    };




    // //console.log("currentProductindex ",currentProduct);


    $scope.updateCart('productChild' + (selectedVariation ? selectedVariation.Id : currentProductId) + selectedVariation.item_id, cartItem);
    if (currentProductId != 3) {
      $scope.updateCart('productParent' + parentItem.Id + parentItem.item_id, cartItemParent);
    }

    $("#success-alert").stop(true, true).show().css("opacity", 1).slideDown(400, function() {
      // After the alert is fully visible, start fading out
      $(this).fadeTo(4000, 0).slideUp(500);
    });


  };

  // Function to convert the object to an array
  $scope.getProductsArray = function() {
    return Object.values($scope.allproducts);
  };

  $scope.getProductKey = function(product) {
    ////console.log("Product ", product);
    // Find the key corresponding to the product's Id
    const matchingEntry = Object.entries($scope.allproducts).find(([key, productjson]) =>
      productjson.ProductVariation[0].item_id === product.ProductVariation[0].item_id
    );

    // Return the key if a match is found, otherwise return null
    const slug = $scope.allproducts[matchingEntry[0]];
    // console.log("matching Entry ",$scope.getProductIdByOfferType(slug.offerType));

    return matchingEntry ? slug.offerType : null;
  };
  $scope.getProductsArrayByCategory = function(category, currentProductId) {
    //  console.log("currentProduct " ,currentProductId)

    // if(currentProductId=="magickickhoversoccerball"){
    //     currentProductId=1;
    // }
    //  if(currentProductId=="galaxyflyball"){
    //     currentProductId=4;
    // }
    currentProductId = !isNaN(currentProductId) ?
      currentProductId :
      $scope.getProductIdByOfferType(currentProductId);

    let currentProduct = $scope.allproducts[currentProductId];
    //console.log("currentProduct " ,currentProduct)

    //  console.log("category " ,category)
    // Filter products based on category and exclude the current product
    let filteredProducts = Object.values($scope.allproducts).filter(product =>
      product.inUse === true &&
      product.ProductVariation[0].item_id !== currentProduct.ProductVariation[0].item_id &&
      product.Category === category &&
      product.Category !== ""
    );

    ////console.log("filteredProducts ", filteredProducts);
    // Shuffle the filtered products

    return filteredProducts;
    // return $scope.shuffleArray(filteredProducts);
  };

  $scope.getRelatedProduct = function(product) {
    let productJsonId = $scope.getProductIdByOfferType(product.offerType);

    let filteredProducts = Object.values($scope.allproducts).filter(eachProduct =>
      eachProduct.relatedParentId == productJsonId
    );

    return filteredProducts;


  };
  $scope.getProductsArrayByCategoryLength = function(category, currentProductId) {
    let currentProduct = $scope.allproducts[currentProductId];


    //console.log("category " ,category)
    // Filter products based on category and exclude the current product
    let filteredProducts = Object.values($scope.allproducts).filter(product =>
      product.inUse === true &&
      product.Id !== currentProduct.Id &&
      product.Category === category &&
      product.Category !== ""
    );
    //  //console.log("filteredProducts ", filteredProducts);
    // Shuffle the filtered products

    return filteredProducts.length > 0;
    // return $scope.shuffleArray(filteredProducts);
  };
  $scope.shuffleArray = function(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Random index
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  };

  $scope.limitWords = function(input, limit) {
    if (!input) return '';
    var words = input.split(/\s+/);
    return words.slice(0, limit).join(' ') + (words.length > limit ? '...' : '');
  };

  // $rootScope.removeFromCart = function(productId) {
  //     if (!$rootScope.cart.hasOwnProperty(productId)) {
  //         return;
  //     }
  //    //  //console.log("inside cart length",const count = Object.keys(data).length;);
  //      delete $rootScope.cart[productId];
  //      let cartLength = Object.keys($rootScope.cart).length;
  //     // //console.log("inside cart length",cartLength);
  //      if(cartLength == 1){
  //       Object.entries($rootScope.cart).forEach((key,value)=>{
  //         if(cartLength == 1 && key[0] == 'ship_only'){
  //             delete $rootScope.cart['ship_only'];
  //         }
  //       });
  //      }

  //    // delete $rootScope.cart[productId];
  //     $rootScope.saveCartDataToStorage($rootScope.cart);

  //     //console.log("$rootScope.cart ",$rootScope.cart);


  // };

  // //console.log("fullFormData ",$scope.FullFormData)
  var path = window.location.pathname;
  var lastSegment = path.substring(path.lastIndexOf('/') + 1);
  ////console.log('lastSegment '+lastSegment);

  if (lastSegment != 'checkout' && lastSegment != 'thank-you') {
    let cart_array = JSON.parse(localStorage.getItem('cart') || '[]');
    // //console.log("Cart Array:", cart_array);
    Object.entries(cart_array).forEach(function([key, value]) {

      if (key !== 'ship_only' && !['product140', 'product139', 'product1380', 'product141'].includes(key)) {
        //   //console.log("Cart Item:", key, value.productPrice);

        $scope.updateCart(key, {
          productPrice: value.previousPrice
        });
      }

    });

  }
  $scope.checkAndClearCart = function() {
    try {
      // Get current page name
      var path = window.location.pathname;
      var lastSegment = path.substring(path.lastIndexOf('/') + 1).toLowerCase();

      // Allowed checkout pages (you can add more if needed)
      var checkoutPages = [];

      // If NOT a checkout page
      if (checkoutPages.indexOf(lastSegment) === -1) {
        //console.log("🧹 Not checkout page, clearing cart...");

        // Clear Angular cart
        $scope.cart = {};

        // Clear any stored cart in localStorage/sessionStorage
        localStorage.removeItem("cart");
        sessionStorage.removeItem("cart");

        // Trigger digest cycle safely
        if ($scope.$applyAsync) $scope.$applyAsync();
      } else {
        //console.log("✅ Checkout page detected — keeping cart");
      }
    } catch (err) {
      console.error("❌ Error in checkAndClearCart:", err);
    }
  };

  if (lastSegment != 'checkout' && lastSegment != 'thank-you') {
    //$scope.checkAndClearCart();
    $scope.clearCart();
  }

  if (lastSegment != 'cart' && lastSegment != 'checkout') {
    let cart_array = JSON.parse(localStorage.getItem('cart') || '[]');
    //   //console.log("lastSegment333:", lastSegment);
    Object.entries(cart_array).forEach(function([key, value]) {

      if (key == 'ship_only') {
        //   //console.log("Cart Item:", key, value.productPrice);

        $scope.removeFromCart(key);
        return;
      }

    });
  }

  $scope.addDiscountPercentage = function(key, price, discount) {
    if (price > 0 && !['product140', 'product139', 'product1380', 'ship_only', 'product141'].includes(key)) {
      //console.log(discount + "% off applied");
      return discount + "% off applied";
    }
  };

  $scope.roundOff = function(val) {
    return val.toFixed(2)
  }


  // Membership details (static references)
  // Membership details (static references)
  const membershipMap = {
    'product1380': {
      id: 'product1380',
      name: 'Tiny Treasures',
      price: '4.99',
      creditValue: '5'
    },
    'product139': {
      id: 'product139',
      name: 'Toy Box',
      price: '9.99',
      creditValue: '10'
    },
    'product140': {
      id: 'product140',
      name: 'Adventure Set',
      price: '19.99',
      creditValue: '20'
    },
    'product141': {
      id: 'product141',
      name: 'Wonder World',
      price: '24.99',
      creditValue: '25'
    }
  };

  // Initialize scope
  $scope.selectedMembership = null;

  // 🟢 Function called when user clicks a membership card
  $scope.selectMembership = function(productId, itemId, crmId) {
    const membership = membershipMap[productId];
    if (!membership) return;

    //console.log("Selected Membership:", membership);

    // Step 1: Clear existing cart
    // if (typeof $scope.clearCart === 'function') {
    //   //console.log("🧹 Clearing existing cart...");
    //   $scope.clearCart();
    // } else if ($scope.cart && Array.isArray($scope.cart.items)) {
    //   $scope.cart.items = [];
    // }

    // Step 2: Set selected membership
    $scope.selectedMembership = membership;

    // Step 3: Add to cart
    $scope.addMembershipToCart(membership, itemId, crmId);

    // Step 4: Reset checkbox
    $scope.FullFormData.agreeMembershipTerms = false;
  };

  // 🟢 Add membership product to cart
  $scope.addMembershipToCart = function(membership, itemId, productId) {
    try {
      if (typeof $scope.updateCart === 'function') {
        //console.log("🛒 Adding membership to cart using updateCart:", membership);

        let reward_terms = `By placing your monthly recurring order of ${membership.name} Member Rewards Program, you will be charged ${membership.price} now and every 30 days thereafter until you <a href='reward-product?page=118&cancellation=cancellation'>cancel</a> your subscription. You will receive an electronic notification 5 to 7 days prior to your transaction and a receipt after each successful transaction.Every month, a new discount code will be emailed to the address on file that includes up to ${membership.creditValue} in store credit with FREE 2-Day Shipping enabled on checkout. Coupons remain active in our system for 12 months, even if you <a href='reward-product?page=118&cancellation=cancellation'>cancel</a> your membership. Limit of one coupon per online purchase. Coupon codes cannot be combined with other offers. A billing reminder email will be sent 3 days prior to being charged. You can alter or <a href='reward-product?page=118&cancellation=cancellation'>cancel</a> the Member Rewards Program anytime by contacting customer service available 24-7. Your billing descriptor for the Member Rewards Program will appear as <b>buymeridian.co</b> on your credit card statement.`;

        // Prepare cart item object
        const cartItem = {
          productId: productId,
          itemId: itemId,
          productName: membership.name,
          productPrice: parseFloat(membership.price),
          reward_terms: reward_terms,
          qty: 1
        };

        // Use updateCart (assuming it handles array or single object)
        $scope.updateCart("productReward", cartItem);
      } else {
        console.warn("⚠️ updateCart function not found — using fallback method.");
        $scope.cart = $scope.cart || {};
        $scope.cart.items = [{
          productId: 11,
          productName: membership.name + ' Membership',
          productPrice: parseFloat(membership.price),
          qty: 1
        }];
      }

      //console.log("✅ Membership added to cart:", membership);
    } catch (err) {
      console.error("❌ Cart Add Error:", err);
    }
  };







});