if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function(searchElement, fromIndex) {

      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);
      var len = o.length >>> 0;
      if (len === 0) {
        return false;
      }
      var n = fromIndex | 0;
      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
      }

      while (k < len) {

        if (sameValueZero(o[k], searchElement)) {
          return true;
        }
        k++;
      }
      return false;
    }
  });
}

var SACMP_app_data = JSON.parse('{"lang_arr":{"spcmp_default":{"shop_dlang":"1","langify_id":"spcmp_default","id":"2580","shop":"headphone-zone.myshopify.com","t_compare_btn_txt":"COMPARE","t_compare_tab_txt":"COMPARE","t_compare_msg":"Upto 4 products","t_remove_btn_txt":"REMOVE ALL","compare_added_txt":"Added to Compare","compare_add_txt":"Add to Compare","page_title":"Product Compare","f_image":"Image","f_title":"Title","f_price":"Price","f_sku":"SKU","f_barcode":"Barcode","f_description":"Description","f_vendor":"Vendor","f_available":"Available","f_pro_type":"Type","add_new_product":"Add a Product","choose_collection":"Choose a Collection","choose_product":"Choose a Product","choose_variant":"Choose a Variant","loading_product":"Loading Products...","loading_variant":"Loading Variants...","pro_available_txt":"Yes","pro_not_available_txt":"No","validation_msg_txt":"You can compare maximum 4 products","page_nopro_incmp":"There are no products added into compare list","page_comparing_txt":"Comparing Products...","addtocart_btn_text":"Add to Cart","soldout_btn_text":"Sold Out","created_at":"2022-11-18 06:47:05","updated_at":"2022-11-18 06:47:05","f_var_title":"Variant Title"}},"setting_arr":{"snippet_update":"1","is_similar":"0","coll_filter":"sennheiser-iems,1custom,64-audio,7hz,abyss,adidas,aftershokz-bone-conduction-headphones,aiaiai,airpulse,akg,alo-audio,altiat,asi-audio,astell-kern,audeze,audio-technica,audioquest,aune-audio,austrian-audio,azla,bang-olufsen,beyerdynamic-headphones,blon,bowers-wilkins-headphones-and-earphones,burson-audio,cambridge-audio,campfire-audio,cayin,cca,chord-electronics-ltd,comply,dali,dan-clark-audio,darkvoice,denafrips,earmen,edifier,eikon,empire-ears,epos,etymotic-research,fearless-audio,fiio,final-audio,flare-audio,focal,gold-planar,grado,gustard,harman-kardon,harmonicdyne,hedd-audio,hiby,hidizs,hifiman,ibasso,ifi-audio,ikko,jabra,jamo,jays,jbl-headphones,jhaudio-earphones,jvc,kef,kinera,klipsch,koss,kz-acoustics,lake-people,letshuoer,little-dot,lotoo,lypertek,magaosi,mangird,marshall-speakers-headphones,master-dynamic-headphones-and-earphones,matrix-audio,mee-audio,meters,meze-audio,monoprice,moondrop,naim,noble-audio,nura,obravo,philips,raal-requisite,raptgo,razer-gaming-headphones,rme,s-m-s-l,schiit,sennheiser,shanling,shuoer,shure,singxer,sonos,sony-headphones,soundmagic-earphones,spinfit,stax,steelseries-professional-gaming-headphones,steven-slate-audio,tanchjim,technics,tempotec,tfz,thieaudio,thrustmaster,tin-hifi,topping,tripowin,unique-melody,v-moda,venture-electronics,violectric,vision-ears,westone-audio,whizzer,woo-audio,xduoo","id":"120","shop":"headphone-zone.myshopify.com","tab_position":"right","c_image":"0","c_title":"1","c_price":"1","c_sku":"0","c_barcode":"0","c_ptype":"0","c_desc":"0","c_vendor":"1","c_available":"0","c_cmp_price":"1","c_discount":"0","c_pro_selection":"0","c_meta_field":"1","meta_key":"","meta_namespace":"","c_add_to_cart":"1","cm_add_to_cart":"1","no_pro_cmp":"4","c_var_title":"0","ind_meta_key":"subtitle","ind_meta_namespace":"hpz-comparisons","meta_filter_type":"include"},"coll_filter_arr":["sennheiser-iems","1custom","64-audio","7hz","abyss","adidas","aftershokz-bone-conduction-headphones","aiaiai","airpulse","akg","alo-audio","altiat","asi-audio","astell-kern","audeze","audio-technica","audioquest","aune-audio","austrian-audio","azla","bang-olufsen","beyerdynamic-headphones","blon","bowers-wilkins-headphones-and-earphones","burson-audio","cambridge-audio","campfire-audio","cayin","cca","chord-electronics-ltd","comply","dali","dan-clark-audio","darkvoice","denafrips","earmen","edifier","eikon","empire-ears","epos","etymotic-research","fearless-audio","fiio","final-audio","flare-audio","focal","gold-planar","grado","gustard","harman-kardon","harmonicdyne","hedd-audio","hiby","hidizs","hifiman","ibasso","ifi-audio","ikko","jabra","jamo","jays","jbl-headphones","jhaudio-earphones","jvc","kef","kinera","klipsch","koss","kz-acoustics","lake-people","letshuoer","little-dot","lotoo","lypertek","magaosi","mangird","marshall-speakers-headphones","master-dynamic-headphones-and-earphones","matrix-audio","mee-audio","meters","meze-audio","monoprice","moondrop","naim","noble-audio","nura","obravo","philips","raal-requisite","raptgo","razer-gaming-headphones","rme","s-m-s-l","schiit","sennheiser","shanling","shuoer","shure","singxer","sonos","sony-headphones","soundmagic-earphones","spinfit","stax","steelseries-professional-gaming-headphones","steven-slate-audio","tanchjim","technics","tempotec","tfz","thieaudio","thrustmaster","tin-hifi","topping","tripowin","unique-melody","v-moda","venture-electronics","violectric","vision-ears","westone-audio","whizzer","woo-audio","xduoo"]}');
var SACMP_limit = SACMP_app_data['setting_arr']['no_pro_cmp'];
var c_pro_selection = SACMP_app_data['setting_arr']['c_pro_selection'];
var c_meta_field = SACMP_app_data['setting_arr']['c_meta_field'];
var SACMP_isSimilar = (SACMP_app_data['setting_arr']['is_similar'] == '1') ? true : false;
var SACMP_isUpdated = (SACMP_app_data['setting_arr']['snippet_update'] == '1') ? true : false;
var SACMP_Coll_Filter = SACMP_app_data['coll_filter_arr'];

var SACMP_shop_name = 'headphone-zone.myshopify.com';
var SACMP_coll_ajax = "";
var SACMP_jQueryScriptOutputted = false;
var metafields = [];

var comparePageTitle = 'Compare';
var productTitle = [];
//Add sp_cmp_style.css
var SACMP_CSS = document.createElement("link");
SACMP_CSS.rel = "stylesheet";
SACMP_CSS.type = "text/css";
SACMP_CSS.href = "//shopiapps.in/compare_product/cmp_widget/sp_cmp_css.php?shop=" + SACMP_shop_name;
document.getElementsByTagName("head")[0].appendChild(SACMP_CSS);
var APP_SITE_URL = "https://shopiapps.in/compare_product";
if (typeof langify == 'undefined') {
  SACMP_app_data['lang_arr'] = SACMP_app_data['lang_arr'][getDefaultLanguage(SACMP_app_data['lang_arr'])];
} else {
  var langifyISOCode = (langify.locale) ? langify.locale.iso_code : null;
  // var langifySelectedLang = langify.helper.getSelectedLanguage();

  var langifyID = null;
  if (langifyISOCode != null) {
    if (langify.locale.language_id != undefined && langify.locale.language_id != null) {
      langifyID = langify.locale.language_id;
    } else if (langify.locale.languages != undefined && langify.locale.languages.length) {
      $.each(langify.locale.languages, function(index, language) {
        if (language.iso_code == langifyISOCode) {
          langifyID = language.language_id;
          return false;
        }
      });
    }
  }

  if (langifyID != null && langifyID != '') {
    if (SACMP_app_data['lang_arr'][langifyID] === undefined)
      SACMP_app_data['lang_arr'] = SACMP_app_data['lang_arr'][getDefaultLanguage(SACMP_app_data['lang_arr'])];
    else
      SACMP_app_data['lang_arr'] = SACMP_app_data['lang_arr'][langifyID];
  } else {
    SACMP_app_data['lang_arr'] = SACMP_app_data['lang_arr'][getDefaultLanguage(SACMP_app_data['lang_arr'])];
  }
}

/* Similar Product Process Check */
if (SACMP_isUpdated && SACMP_isSimilar) {
  /*checkIsSimilarProcess();*/
}

if (document.location.pathname.indexOf('/pages/product-compare') > -1)
  document.getElementById("SP_CmpHtml").innerHTML = `<div style='text-align:center'><img class='SA_load_img' src='${APP_SITE_URL}/cmp_widget/compare-page-loader.gif'><p class='SP_Cmploadingtxt' style='color: #333;display: block;font-size: 16px;font-weight: bold;line-height: 20px;'>${SACMP_app_data['lang_arr']['page_comparing_txt']}</p></div>`;

function initSACMPJQuery() {
  if (window.location.href.indexOf("/thank_you") > -1 || window.location.href.indexOf("/orders/") > -1)
    return false;

  SACMP_included = true;
  if (typeof(jQuery) == 'undefined') {
    if (!SACMP_jQueryScriptOutputted) {
      SACMP_jQueryScriptOutputted = true;
      var SACMP_JS = document.createElement("script");
      SACMP_JS.type = "text/javascript";
      SACMP_JS.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js";
      document.getElementsByTagName("head")[0].appendChild(SACMP_JS);
    }
    setTimeout("initSACMPJQuery()", 50);
  } else {

    if (typeof($) == 'undefined')
      $ = jQuery;

    if (document.location.pathname.indexOf('/pages/product-compare') > -1) {
      getCollectionList(SACMP_shop_name, 1, function(collectionResponse) {
        $.each(collectionResponse, function(i, v) {
          if ((v.products_count > 0 && SACMP_Coll_Filter.length == 0) || (v.products_count > 0 && $.inArray(v.handle, SACMP_Coll_Filter) !== -1)) {
            if ((v.products_count > 0 && !SACMP_isUpdated) || (v.products_count > 0 && !SACMP_isSimilar) || (v.products_count > 0 && SACMP_isSimilar && checkSimilarProduct(v.id))) {
              SACMP_coll_ajax += "<option value='" + v.handle + "' cid='" + v.id + "'>" + v.title + "</option>";
            }
          }
        });
      });
    }

    //Add div to body
    var SACMP_find_div = document.getElementById("sa_ca_wrapper");
    if (!SACMP_find_div) {
      var SACMP_createDiv = document.createElement('div');
      SACMP_createDiv.setAttribute("id", "sa_ca_wrapper");
      document.body.appendChild(SACMP_createDiv);
    }

    var SACMP_money_format = "₹ {{amount_no_decimals}}";
    var SACMP_formatMoney = function(cents, format) {
      var SACMP_value = '';
      var SACMP_patt = /\{\{\s*(\w+)\s*\}\}/;
      var SACMP_formatString = (format || this.money_format);
      switch (SACMP_formatString.match(SACMP_patt)[1]) {
        case 'amount':
          SACMP_value = SPCMP_floatToString(cents / 100.0, 2).replace(/(\d+)(\d{3}[\.,]?)/, '$1,$2');
          break;
        case 'amount_no_decimals':
          SACMP_value = SPCMP_floatToString(cents / 100.0, 0).replace(/(\d+)(\d{3}[\.,]?)/, '$1,$2');
          break;
        case 'amount_with_comma_separator':
          SACMP_value = SPCMP_floatToString(cents / 100.0, 2).replace(/\./, ',').replace(/(\d+)(\d{3}[\.,]?)/, '$1.$2');
          break;
        case 'amount_no_decimals_with_comma_separator':
          SACMP_value = SPCMP_floatToString(cents / 100.0, 0).replace(/\./, ',').replace(/(\d+)(\d{3}[\.,]?)/, '$1.$2');
          break;
      }
      return SACMP_formatString.replace(SACMP_patt, SACMP_value);
    };
    $(document).ready(function() {

      $('.inner_list h6').on('click', function() {
        $(this).toggleClass('active');
      });

      var spcmpD_pid = $("form[action$='/cart/add']").find(".SPCMP_Add").attr('spcmp_pid');
      var spcmpD_vid = $("form[action$='/cart/add']").find('[name=id]').val();
      if (spcmpD_vid == null) {
        var urlParams = new URLSearchParams(window.location.search);
        spcmpD_vid = urlParams.get('variant');
      }
      var sp_checkAganId = isInCMPStorage(spcmpD_pid, spcmpD_vid);
      if (sp_checkAganId) {
        $('.SPCMP_Add').val(SACMP_app_data['lang_arr']['compare_added_txt']);
        $('.SPCMP_Add_span').text(SACMP_app_data['lang_arr']['compare_added_txt']);
      } else {
        $('.SPCMP_Add').val(SACMP_app_data['lang_arr']['compare_add_txt']);
        $('.SPCMP_Add_span').text(SACMP_app_data['lang_arr']['compare_add_txt']);
      }

      setTimeout(function() {
        $('.SPCMP_Add,.SPCMP_chk_lbl').show();
      }, 800);

      if (document.location.pathname.indexOf('/pages/product-compare') > -1) {

        var spcmp_params = {};
        if (location.search && SACMP_shop_name != 'generation-yes.myshopify.com' && SACMP_shop_name != 'targus-us.myshopify.com') { // 2-3-19 piyush
          var spcmp_parts = location.search.substring(1).split(',');
          for (var i = 0; i < spcmp_parts.length; i++) {
            var spcmp_nv = atob(decodeURIComponent(spcmp_parts[i])).split(':');
            if (!spcmp_nv[0])
              continue;
            var spcmp_pid = spcmp_nv[0];
            var spcmp_vid = spcmp_nv[1];
            if (typeof(spcmp_params[spcmp_pid]) === "undefined") {
              spcmp_params[spcmp_pid] = [];
            }
            spcmp_params[spcmp_pid].push(spcmp_vid);
          }
          SPCMP_setCookie("SP_CompareStorage", JSON.stringify(spcmp_params), 7);
        }


        SPLoadCMP('GET', '', '', 'page', SACMP_limit, ''); //Get CMP product

        $(document).on('change', '.SACMP_get_coll', function(e) { //Call on chnage Collection to select product
          e.preventDefault();
          e.stopImmediatePropagation();
          e.stopPropagation();
          var SACMP_coll_val = $(this).find("option:selected").attr('value');
          var SACMP_ele = $(this);
          if (SACMP_ele.find('option:selected').attr('value') == '0') {
            SACMP_ele.parents("li").find('.SACMP_get_pro').prop('disabled', true).html('<option value="0">' + SACMP_app_data['lang_arr']['choose_product'] + '</option>');
            SACMP_ele.parents("li").find('.SACMP_get_pro_var').hide().prop('disabled', true).html('<option value="0">' + SACMP_app_data['lang_arr']['choose_variant'] + '</option>');
            return false;
          }
          $.ajax({
            type: 'GET',
            url: '//' + SACMP_shop_name + '/collections/' + SACMP_coll_val + '/products.json?limit=250',
            beforeSend: function(data) {
              SACMP_ele.parents("li").find('.SACMP_get_pro').prop('disabled', true).html('<option value="0">' + SACMP_app_data['lang_arr']['loading_product'] + '</option>');
            },
            success: function(data) {
              var coll_pro = '';
              coll_pro += "<option value='0'>" + SACMP_app_data['lang_arr']['choose_product'] + "</option>";
              $.each(data.products, function(i, v) {

                var is_added_cmp = false;
                var is_default = false;
                if (v['variants'].length == 1) {
                  var CMP_Storage = JSON.parse(SPCMP_getCookie('SP_CompareStorage'));
                  var v_ary = [];
                  $.each(CMP_Storage, function(index, obj) {
                    CMP_Storage[index] = jQuery.grep(CMP_Storage[index], function(n, i) {
                      return (n !== "" && n != null);
                    });
                    if (CMP_Storage[index].length) {
                      $.each(CMP_Storage[index], function(Vindex, Vobj) {
                        if ($.inArray(Vobj.toString(), v_ary) == -1) {
                          v_ary.push(Vobj.toString());
                        }
                      });
                    }
                  });

                  if ($.inArray((v['variants'][0]['id']).toString(), v_ary) != -1) {
                    is_added_cmp = true;
                  } else {
                    is_default = true;
                  }
                }
                if (is_added_cmp == false) {
                  coll_pro += "<option handle=" + v['handle'] + " pid=" + v['id'] + " is_default=" + is_default + " vid=" + v['variants'][0]['id'] + ">" + v['title'] + "</option>";
                }
              });
              SACMP_ele.parents("li").find('.SACMP_get_pro').prop('disabled', false).html(coll_pro);
            },
            dataType: "json",
          });
        });

        $(document).on('change', '.SACMP_get_pro', function() { //Call on change product to select varient

          var SACMP_pro_handle = $(this).find('option:selected').attr('handle');
          var SACMP_ele = $(this);
          if (SACMP_ele.find('option:selected').attr('value') == '0') {
            SACMP_ele.parents("li").find('.SACMP_get_pro_var').hide().prop('disabled', true).html('<option value="0">' + SACMP_app_data['lang_arr']['choose_variant'] + '</option>');
            return false;
          }

          if (SACMP_ele.find('option:selected').attr("is_default") == 'true') {
            var spcmp_vid = SACMP_ele.find('option:selected').attr("vid");
            var spcmp_pid = SACMP_ele.find('option:selected').attr("pid");

            SPLoadCMP('POST', spcmp_vid, spcmp_pid, 'single_pro', SACMP_limit, $(SACMP_ele));
            return false;
          } else {
            SACMP_ele.parents("li").find('.SACMP_get_pro_var').show().prop('disabled', true).html('<option value="0">' + SACMP_app_data['lang_arr']['loading_variant'] + '</option>');
            SPCMP_heightsEqualizer();
          }

          $.ajax({
            type: 'GET',
            url: '//' + SACMP_shop_name + '/products/' + SACMP_pro_handle + '.json',
            success: function(data) {
              var CMP_Storage = JSON.parse(SPCMP_getCookie('SP_CompareStorage'));
              var v_ary = [];
              $.each(CMP_Storage, function(index, obj) {
                CMP_Storage[index] = jQuery.grep(CMP_Storage[index], function(n, i) {
                  return (n !== "" && n != null);
                });
                if (CMP_Storage[index].length) {
                  $.each(CMP_Storage[index], function(Vindex, Vobj) {
                    if ($.inArray(Vobj.toString(), v_ary) == -1) {
                      v_ary.push(Vobj.toString());
                    }
                  });
                }
              });
              if (data.product['variants'].length == 1) {
                if ($.inArray((data.product['variants'][0]['id']).toString(), v_ary) == -1) {
                  var spcmp_vid = data.product['variants'][0]['id'];
                  var spcmp_pid = data.product['id'];
                  SPLoadCMP('POST', spcmp_vid.toString(), spcmp_pid.toString(), 'single_pro', SACMP_limit, $(SACMP_ele));
                }
              } else {
                var coll_pro_var = '';
                $.each(data.product['variants'], function(i, v) {
                  if ($.inArray((v['id']).toString(), v_ary) == -1) {
                    coll_pro_var += "<option pid=" + v['product_id'] + " vid=" + v['id'] + ">" + v['title'] + "</option>";
                  }
                });
                var disabled = false;
                if (coll_pro_var != "") {
                  coll_pro_var = "<option value='0'>" + SACMP_app_data['lang_arr']['choose_variant'] + "</option>" + coll_pro_var;
                } else {
                  coll_pro_var = "<option value='0'>All Variants Added</option>";
                  disabled = true;
                }
                SACMP_ele.parents("li").find('.SACMP_get_pro_var').show().prop('disabled', disabled).html(coll_pro_var);
              }
            },
            dataType: "json",
          });
        });
        $(document).on('change', '.SACMP_get_pro_var', function() { //get detail of variant (of Product)

          var SACMP_ele = $(this);
          if (SACMP_ele.find('option:selected').attr('value') == '0') {
            return false;
          }
          var spcmp_pid = SACMP_ele.find('option:selected').attr('pid');
          var spcmp_vid = SACMP_ele.find('option:selected').attr('vid');
          SPLoadCMP('POST', spcmp_vid, spcmp_pid, 'single_pro', SACMP_limit, $(this)); //Get CMP product(at CMP page)
        });

        $(document).on("click", ".sp_desc", function() {
          SPCMP_heightsEqualizer();
        });

      } else {

        if (SACMP_shop_name != 'systemsdirect-com.myshopify.com' || document.location.pathname.indexOf('/cart') == -1) {
          SPLoadCMP('GET', '', '', 'sticky', SACMP_limit, '');
        }
      }

      $(document).on('click', '.SPCMP_Add', function() { //Add product to CMP

        if (!$(this).hasClass('SPCMP_Added')) {

          if (SACMP_isUpdated && SACMP_isSimilar) {

            var isSimilarProducct = true;
            var compareProID = $(this).attr('spcmp_pid');
            var compareCollID = $(this).attr('spcmp_collids');
            var compareProdcts = SPCMP_getCookie('SP_CheckCompareStorage');

            if (compareProdcts == '') {
              compareProdcts = '{}';
            }

            compareProdcts = JSON.parse(compareProdcts);
            if (Object.keys(compareProdcts).length) {
              isSimilarProducct = checkSimilarProduct(compareCollID);
            }

            if (isSimilarProducct) {

              compareProdcts[compareProID.toString()] = compareCollID;
              SPCMP_setCookie("SP_CheckCompareStorage", JSON.stringify(compareProdcts), 7);
            } else {

              alert('You can only compare similar products.');
              return false;
            }
          } else {

            SPCMP_setCookie("SP_CheckCompareStorage", "", -1);
          }

          var spcmp_pid = $(this).attr('spcmp_pid');
          var spcmp_vid = "";
          if ($(this).attr("type") == "checkbox") {
            if ($(this).is(":checked")) {
              var track_page = 'collection';
              spcmp_vid = $(this).attr("spcmp_vid");
              var CMP_Storage_ck = SPCMP_getCookie('SP_CompareStorage');
              var total_cmp_item = 0;
              if (CMP_Storage_ck != "") {
                CMP_Storage = JSON.parse(CMP_Storage_ck);
                $.each(CMP_Storage, function(index, obj) {
                  CMP_Storage[index] = jQuery.grep(CMP_Storage[index], function(n, i) {
                    return (n !== "" && n != null);
                  });
                  total_cmp_item += CMP_Storage[index].length;
                });
              }

              if (total_cmp_item < SACMP_limit) {
                $(this).parent().find("span").text(SACMP_app_data['lang_arr']['compare_added_txt']);
              }

              //$(this).addClass('SPCMP_Added');
            }
          } else {
            var track_page = 'product';
            spcmp_vid = $(this).parents("form").find('[name=id]').val();
            if (spcmp_vid == undefined || spcmp_vid == '' || spcmp_vid == null) {
              // spcmp_vid = $(this).attr('spcmp_vid');
              var urlParams = new URLSearchParams(window.location.search);
              spcmp_vid = urlParams.get('variant');
            }
            if (spcmp_vid == undefined || spcmp_vid == '' || spcmp_vid == null) {
              spcmp_vid = $(this).attr('spcmp_vid');
            }

            $(this).attr({
              "value": SACMP_app_data['lang_arr']['compare_added_txt'],
              "disabled": false
            });
            /*03-06*/
          }

          $.ajax({ //track
            type: 'POST',
            url: '//shopiapps.in/compare_product/cmp_track.php?shop=' + Shopify.shop,
            data: {
              action: 'add_track',
              track_page: track_page,
              spcmp_pid: spcmp_pid,
              spcmp_vid: spcmp_vid
            },
            dataType: 'json',
            success: function(data) {}
          });

          //6-7
          var sp_chek = SPLoadCMP('POST', spcmp_vid, spcmp_pid, 'sticky', SACMP_limit, '');
          if (sp_chek == false) {} else {
            $(this).addClass('SPCMP_Added');
          }
        }
      });

      $(document).on('click', '.SPCMP_Added', function(event) { //6-7

        if ($(this).attr("type") == "checkbox") {
          var spadded_pid = $(this).attr('spcmp_pid');
          var spadded_vid = $(this).attr('spcmp_vid');
          $(".sa_ca_idelete[spcmp_pid=" + spadded_pid + "][spcmp_vid=" + spadded_vid + "]").trigger('click');
          $(this).removeClass('SPCMP_Added');
        } else {
          var spadded_pid = $("form[action$='/cart/add']").find(".SPCMP_Add").attr('spcmp_pid');
          var spadded_vid = $("form[action$='/cart/add']").find('[name=id]').val();
          $(".sa_ca_idelete[spcmp_pid=" + spadded_pid + "][spcmp_vid=" + spadded_vid + "]").trigger('click');
          $(this).removeClass('SPCMP_Added');
          $(this).attr({
            "value": SACMP_app_data['lang_arr']['compare_add_txt']
          });
        }
      });

      $("form[action$='/cart/add']").delegate("select,radio", "change", function() {
        var _this = $(this);
        if (Shopify.shop == 'vitasave.myshopify.com') {
          setTimeout(function() {
            var spcmp_pid = _this.parents("form").find(".SPCMP_Add").attr('spcmp_pid');
            var spcmp_vid = _this.parents("form").find('[name=id]').val();
            if (spcmp_vid == null) {
              var urlParams = new URLSearchParams(window.location.search);
              spcmp_vid = urlParams.get('variant');
            }
            var checkAganId = isInCMPStorage(spcmp_pid, spcmp_vid);
            if (checkAganId) {
              _this.parents("form").find('.SPCMP_Add').attr({
                "value": SACMP_app_data['lang_arr']['compare_added_txt'],
                "disabled": false
              });
              _this.parents("form").find('.SPCMP_Add').addClass('SPCMP_Added')
            } else {
              _this.parents("form").find('.SPCMP_Add').attr({
                "value": SACMP_app_data['lang_arr']['compare_add_txt'],
                "disabled": false
              });
              _this.parents("form").find('.SPCMP_Add').removeClass('SPCMP_Added')
            }
          }, 500);
        } else {
          var spcmp_pid = $(this).parents("form").find(".SPCMP_Add").attr('spcmp_pid');
          var spcmp_vid = $(this).parents("form").find('[name=id]').val();
          if (spcmp_vid == null) {
            var urlParams = new URLSearchParams(window.location.search);
            spcmp_vid = urlParams.get('variant');
          }
          var checkAganId = isInCMPStorage(spcmp_pid, spcmp_vid);
          if (checkAganId) {
            $(this).parents("form").find('.SPCMP_Add').attr({
              "value": SACMP_app_data['lang_arr']['compare_added_txt'],
              "disabled": false
            });
            /**03-06*/
            $(this).parents("form").find('.SPCMP_Add').addClass('SPCMP_Added')
          } else {
            $(this).parents("form").find('.SPCMP_Add').attr({
              "value": SACMP_app_data['lang_arr']['compare_add_txt'],
              "disabled": false
            });
            /**03-06*/
            $(this).parents("form").find('.SPCMP_Add').removeClass('SPCMP_Added')
          }
        }
      });
      /*** Hide and show Compare **/

      $(document).on("click", "#sa_ca_wrapper .sa_ca_content .close", function() {
        $(".ca_flap").show();
        $(".sa_ca_content").removeClass("sa_ca_open").addClass("sa_ca_close");
      });
      $(document).on("click", ".ca_flap", function() {
        $(".ca_flap").hide();
        $(".sa_ca_content").addClass("sa_ca_open").removeClass("sa_ca_close");
      });

    });

    function SPLoadCMP(type, v_id, p_id, dType, limit, element) {

      var CMP_Storage_ck = SPCMP_getCookie('SP_CompareStorage');
      if (type == "GET") {
        if (CMP_Storage_ck == "") {
          if (dType == 'page') {
            $("#SP_CmpHtml").html("<div class='SP_CMPNoProduct'><pre>" + SACMP_app_data['lang_arr']['page_nopro_incmp'] + "</pre></div>");
          }
          return false;
        }
      }
      var total_cmp_item = 0;
      var url_param = [];
      if (CMP_Storage_ck != "") {
        CMP_Storage = JSON.parse(CMP_Storage_ck);
        $.each(CMP_Storage, function(index, obj) {
          CMP_Storage[index] = jQuery.grep(CMP_Storage[index], function(n, i) {
            return (n !== "" && n != null);
          });
          total_cmp_item += CMP_Storage[index].length;
          if (CMP_Storage[index].length) {

            $.each(CMP_Storage[index], function(Vindex, Vobj) {
              if ($.inArray(index + ":" + Vobj, url_param) == -1) {
                url_param.push(btoa(index + ":" + Vobj));
              }

              if ($(".SPCMP_Add[spcmp_pid='" + index + "']").length && $(".SPCMP_Add[spcmp_pid='" + index + "']").parents("form[action$='/cart/add']").find('[name=id]').val() == Vobj) {
                $(".SPCMP_Add[spcmp_pid='" + index + "']").attr({
                  "value": SACMP_app_data['lang_arr']['compare_added_txt']
                });
                /**03-06*/
                $(".SPCMP_Add[spcmp_pid='" + index + "']").addClass('SPCMP_Added')
              }

              if ($("input[type='checkbox'][name='SPCMP_chk'][spcmp_vid='" + Vobj + "']").length) {
                $("input[type='checkbox'][name='SPCMP_chk'][spcmp_vid='" + Vobj + "']").addClass('SPCMP_Added').prop({
                  "checked": true
                }).parent().find("span").text(SACMP_app_data['lang_arr']['compare_added_txt']);
              }
            });
          }
        });
      } else {
        CMP_Storage = {};
      }

      if (type == 'POST') {
        if (p_id != "" && v_id != "") {

          if (total_cmp_item >= limit) {
            $(".SPCMP_Add[spcmp_pid='" + p_id + "']").attr({
              "value": SACMP_app_data['lang_arr']['compare_add_txt'],
              "disabled": false
            });
            $("input[type='checkbox'][name='SPCMP_chk'][spcmp_vid='" + v_id + "']").prop("checked", false);
            alert(SACMP_app_data['lang_arr']['validation_msg_txt']);
            return false;
          }

          if (typeof(CMP_Storage[p_id]) === "undefined") {
            CMP_Storage[p_id] = [];
          }

          if (CMP_Storage[p_id] != "") {
            if ($.inArray(v_id, CMP_Storage[p_id]) == -1) {
              CMP_Storage[p_id].push(v_id);
            }
          } else {
            CMP_Storage[p_id].push(v_id);
          }
          if ($.inArray(p_id + ":" + v_id, url_param) == -1) {
            url_param.push(btoa(p_id + ":" + v_id));
          }


          SPCMP_setCookie("SP_CompareStorage", JSON.stringify(CMP_Storage), 7);
          if (dType == 'single_pro') {
            var CMP_Storage = {};
            CMP_Storage[p_id] = [];
            CMP_Storage[p_id].push(v_id);
          }
        } else {
          return false;
        }
      }
      if (url_param.length > 0) {
        url_param = "?" + url_param.join(",");
      } else {
        url_param = "";
      }

      if (typeof spcmp_coll == 'undefined') {
        var spcmp_coll = "";
      }

      $.ajax({
        'url': '//shopiapps.in/compare_product/getProJson.php?shop=' + Shopify.shop,
        'type': 'POST',
        'data': {
          'CMP_Storage': JSON.stringify(CMP_Storage)
        },
        'dataType': 'json',
        beforeSend: function() {
          $(element).parents('li').find('.li_overlay').css('display', 'block');
        },
        'success': function(data) {

          $(element).parents('li').find('.li_overlay').hide();
          var SPCMP_html = "";
          var d_add_to_cart = '1';
          if (SACMP_app_data['setting_arr']['cm_add_to_cart'] == '0' && $(window).width() < 767) {
            d_add_to_cart = '0';
          }
          if (data['products'] != 'empty') {
            meta_li_html = meta_creator(data['products']);
          }
          if (dType == 'page') {
            if (data['status'] == 'true') {
              if (data['products'] == 'empty') {
                SPCMP_html += "<div class='SP_CMPNoProduct'><pre>" + SACMP_app_data['lang_arr']['page_nopro_incmp'] + "</pre></div>";
              } else {
                var SPCMP_Phtml = "";
                $.each(data['products'], function(i, SPv) {
                  meta_html = metafield_value(SPv);

                  if (SACMP_shop_name == 'rookiedeck.myshopify.com') {

                    SPCMP_Phtml += "<ul class='sp_product_con fill_cmp'>" +
                      "<li class='sp_image'>" +
                      "<div class='sp_image_block'>" +
                      "<a spcmp_vid='" + SPv.variant.id + "' spcmp_pid='" + SPv.id + "'  dtype='page' href='javascript:void(0);'class='sp_close' onclick='SPCMP_Remove(this,event);'>&#x2715;</a>" +
                      "<a target='_blank' href='/products/" + SPv.handle + "?variant=" + SPv.variant.id + "' class='sp_img'>" +
                      "<img src='" + SPv.variant.image + "' alt='' />" +
                      "</a>" +
                      "</div>" +
                      "</li>" +
                      ((SACMP_app_data['setting_arr']['c_title']) == '1' ? "<li class='sp_title'>" + SPv.title + "</li>" : "") +
                      ((SACMP_app_data['setting_arr']['c_var_title']) == '1' ? "<li class='sp_var_title'>" + (SPv.variant.is_default == false ? SPv.variant.title : "") + "</li>" : "") +
                      ((SACMP_app_data['setting_arr']['c_price']) == '1' ? "<li class='sp_price'><span class='money'>" + SACMP_formatMoney(SPv.variant.price, SACMP_money_format) + "</span> &nbsp;&nbsp;" + ((SPv.variant.display_cmp == '1' && SACMP_app_data['setting_arr']['c_cmp_price'] == '1') ? "<strike>" + SACMP_formatMoney(SPv.variant.compare_at_price, SACMP_money_format) + "</strike>" : "") + (SPv.variant.display_discount == '1' && SACMP_app_data['setting_arr']['c_discount'] == '1' ? "&nbsp;&nbsp;<span class='sa_cmp_discount'>( " + SPv.variant.discount + " )</span>" : "") + "</li>" : "") +
                      ((SACMP_app_data['setting_arr']['c_sku']) == '1' ? "<li class='sp_sku'>" + SPv.variant.sku + "</li>" : "") +
                      ((SACMP_app_data['setting_arr']['c_barcode']) == '1' ? "<li class='sp_barcode'>" + SPv.variant.barcode + "</li>" : "") +
                      ((SACMP_app_data['setting_arr']['c_ptype']) == '1' ? "<li class='sp_ptype'>" + SPv.ptype + "</li>" : "") +
                      ((SACMP_app_data['setting_arr']['c_vendor']) == '1' ? "<li class='sp_vendor'>" + SPv.vendor + "</li>" : "") +
                      ((SACMP_app_data['setting_arr']['c_desc']) == '1' ? "<li class='sp_desc'><ul>" + SPv.body_html + "</ul></li>" : "") +
                      ((SACMP_app_data['setting_arr']['c_available']) == '1' ? "<li class='sp_avilable'>" + SPv.variant.available + "</li>" : "") +
                      meta_html +
                      "<li class='sp_add_to_cart'><a href='/products/" + SPv.handle + "' class='sa_cmp_addcart'>" + SACMP_app_data['lang_arr']['addtocart_btn_text'] + "</a></li>" +
                      "</ul>";
                  } else {
                    productTitle.push(SPv.title);
                    SPCMP_Phtml += "<ul class='sp_product_con fill_cmp'>" +
                      "<li class='sp_image'>" +
                      "<div class='sp_image_block'>" +
                      "<a spcmp_vid='" + SPv.variant.id + "' spcmp_pid='" + SPv.id + "'  dtype='page' href='javascript:void(0);'class='sp_close' onclick='SPCMP_Remove(this,event);'>&#x2715;</a>" +
                      "<a target='_blank' href='/products/" + SPv.handle + "?variant=" + SPv.variant.id + "' class='sp_img'>" +
                      "<img src='" + SPv.variant.image + "' alt='' />" +
                      "</a>" +
                      "</div>" +
                      "</li>" +
                      ((SACMP_app_data['setting_arr']['c_title']) == '1' ? "<li class='sp_title'>" + SPv.title + "</li>" : "") +
                      ((SACMP_app_data['setting_arr']['c_var_title']) == '1' ? "<li class='sp_var_title'>" + (SPv.variant.is_default == false ? SPv.variant.title : "") + "</li>" : "") +
                      ((SACMP_app_data['setting_arr']['c_price']) == '1' ? "<li class='sp_price'><span class='money'>" + SACMP_formatMoney(SPv.variant.price, SACMP_money_format) + "</span> &nbsp;&nbsp;" + ((SPv.variant.display_cmp == '1' && SACMP_app_data['setting_arr']['c_cmp_price'] == '1') ? "<strike>" + SACMP_formatMoney(SPv.variant.compare_at_price, SACMP_money_format) + "</strike>" : "") + (SPv.variant.display_discount == '1' && SACMP_app_data['setting_arr']['c_discount'] == '1' ? "&nbsp;&nbsp;<span class='sa_cmp_discount'>( " + SPv.variant.discount + " )</span>" : "") + "</li>" : "") +
                      ((SACMP_app_data['setting_arr']['c_sku']) == '1' ? "<li class='sp_sku'>" + SPv.variant.sku + "</li>" : "") +
                      ((SACMP_app_data['setting_arr']['c_barcode']) == '1' ? "<li class='sp_barcode'>" + SPv.variant.barcode + "</li>" : "") +
                      ((SACMP_app_data['setting_arr']['c_ptype']) == '1' ? "<li class='sp_ptype'>" + SPv.ptype + "</li>" : "") +
                      ((SACMP_app_data['setting_arr']['c_vendor']) == '1' ? "<li class='sp_vendor'>" + SPv.vendor + "</li>" : "") +
                      ((SACMP_app_data['setting_arr']['c_desc']) == '1' ? "<li class='sp_desc'><ul>" + SPv.body_html + "</ul></li>" : "") +
                      ((SACMP_app_data['setting_arr']['c_available']) == '1' ? "<li class='sp_avilable'>" + SPv.variant.available + "</li>" : "") +
                      meta_html +
                      ((SACMP_app_data['setting_arr']['c_add_to_cart']) == '1' && d_add_to_cart == '1' ? "<li class='sp_add_to_cart'>" + ((SPv.variant.avail_or_sold) == '1' ? " <form action='/cart/add' method='post' enctype='multipart/form-data'><input type='hidden' name='id' value='" + SPv.variant.id + "'><input type='hidden' name='quantity' value='1'><input class='sa_cmp_addcart' name='button' value='" + SACMP_app_data['lang_arr']['addtocart_btn_text'] + "' type='submit'></form>" : "<input disabled='' class='sa_cmp_soldout' name='button' value='" + SACMP_app_data['lang_arr']['soldout_btn_text'] + "' type='submit'>") + "</li>" : "") +
                      "</ul>";
                  }
                });
                if (productTitle.length) {
                  $.each(productTitle, function(a, b) {
                    comparePageTitle += ` ${b} vs`
                  })
                  comparePageTitle = $.trim(comparePageTitle);
                  comparePageTitle = comparePageTitle.replace(/^vs+|vs+$/g, '');

                  if (Shopify.shop == 'products-compare-demo.myshopify.com') {
                    document.title = comparePageTitle;
                  }
                }

                if (c_pro_selection == '1') {
                  var meta_blank = '';
                  var blank_count = limit - (data['products'].length);
                  if (blank_count > 0) {

                    $.each(metafields, function(meta_field, mec) {
                      meta_blank += '<li class="sp_' + mec.replace(/[^0-9a-z]/gi, '') + ' same_cl"></li>';
                    });

                    for (var i = 1; i <= blank_count; i++) {
                      SPCMP_Phtml += "<ul class='sp_product_con'>" +
                        "<li class='sp_image'>" +
                        "<p class='sp_add_title'>" + SACMP_app_data['lang_arr']['add_new_product'] + "</p><div class='li_overlay'></div>" +
                        "<select class='sp_form_control SACMP_get_coll'>" +
                        "<option value='0'>" + SACMP_app_data['lang_arr']['choose_collection'] + "</option>" +
                        SACMP_coll_ajax +
                        "</select>" +
                        "<select class='sp_form_control SACMP_get_pro' disabled>" +
                        "<option vlaue='0'>" + SACMP_app_data['lang_arr']['choose_product'] + "</option>" +
                        "</select>" +
                        "<select class='sp_form_control SACMP_get_pro_var' disabled style='display:none;'>" +
                        "<option value='0'>" + SACMP_app_data['lang_arr']['choose_variant'] + "</option>" +
                        "</select>" +
                        "</li>" +
                        ((SACMP_app_data['setting_arr']['c_title']) == '1' ? "<li class='sp_title'></li>" : "") +
                        ((SACMP_app_data['setting_arr']['c_var_title']) == '1' ? "<li class='sp_var_title'></li>" : "") +
                        ((SACMP_app_data['setting_arr']['c_price']) == '1' ? "<li class='sp_price'></li>" : "") +
                        ((SACMP_app_data['setting_arr']['c_sku']) == '1' ? "<li class='sp_sku'></li>" : "") +
                        ((SACMP_app_data['setting_arr']['c_barcode']) == '1' ? "<li class='sp_barcode'></li>" : "") +
                        ((SACMP_app_data['setting_arr']['c_ptype']) == '1' ? "<li class='sp_ptype'></li>" : "") +
                        ((SACMP_app_data['setting_arr']['c_vendor']) == '1' ? "<li class='sp_vendor'></li>" : "") +
                        ((SACMP_app_data['setting_arr']['c_desc']) == '1' ? "<li class='sp_desc'></li>" : "") +
                        ((SACMP_app_data['setting_arr']['c_available']) == '1' ? "<li class='sp_avilable'></li>" : "") +
                        meta_blank +
                        ((SACMP_app_data['setting_arr']['c_add_to_cart']) == '1' && d_add_to_cart == '1' ? "<li class='sp_add_to_cart'></li>" : "") +
                        "</ul>";
                    }
                  }
                }
                SPCMP_html += "<div class='container-fulid'>" +
                  "<div class='sp_compare_tbl'><div class='sa_cmp_title'>" + SACMP_app_data['lang_arr']['page_title'] + "</div>" +
                  "<div class='sa_button'>" +
                  "<input class='sa_prev' disabled type='button' name='Prev' id='sp_prev' onclick='SPCMP_plusDivs(-1)' value='&#10094;'>" +
                  "<input class='sa_next' type='button' name='Next' id='sp_next' onclick='SPCMP_plusDivs(+1)' value='&#10095;'>" +
                  "</div>" +
                  "<div class='sa_border'>" +
                  "<ul class='sp_product_heading'>" +
                  "<li class='sp_image'>" + SACMP_app_data['lang_arr']['f_image'] + "</li>" +
                  ((SACMP_app_data['setting_arr']['c_title']) == '1' ? "<li class='sp_title'>" + SACMP_app_data['lang_arr']['f_title'] + "</li>" : "") +
                  ((SACMP_app_data['setting_arr']['c_var_title']) == '1' ? "<li class='sp_var_title'>" + SACMP_app_data['lang_arr']['f_var_title'] + "</li>" : "") +
                  ((SACMP_app_data['setting_arr']['c_price']) == '1' ? "<li class='sp_price'>" + SACMP_app_data['lang_arr']['f_price'] + "</li>" : "") +
                  ((SACMP_app_data['setting_arr']['c_sku']) == '1' ? "<li class='sp_sku'>" + SACMP_app_data['lang_arr']['f_sku'] + "</li>" : "") +
                  ((SACMP_app_data['setting_arr']['c_barcode']) == '1' ? "<li class='sp_barcode'>" + SACMP_app_data['lang_arr']['f_barcode'] + "</li>" : "") +
                  ((SACMP_app_data['setting_arr']['c_ptype']) == '1' ? "<li class='sp_ptype'>" + SACMP_app_data['lang_arr']['f_pro_type'] + "</li>" : "") +
                  ((SACMP_app_data['setting_arr']['c_vendor']) == '1' ? "<li class='sp_vendor'>" + SACMP_app_data['lang_arr']['f_vendor'] + "</li>" : "") +
                  ((SACMP_app_data['setting_arr']['c_desc']) == '1' ? "<li class='sp_desc'>" + SACMP_app_data['lang_arr']['f_description'] + "</li>" : "") +
                  ((SACMP_app_data['setting_arr']['c_available']) == '1' ? "<li class='sp_avilable'>" + SACMP_app_data['lang_arr']['f_available'] + "</li>" : "") +
                  meta_li_html +
                  ((SACMP_app_data['setting_arr']['c_add_to_cart']) == '1' && d_add_to_cart == '1' ? "<li class='sp_add_to_cart'></li>" : "") +
                  "</ul>" +
                  "<div class='sp_product' id='sp_product'>" +
                  SPCMP_Phtml +
                  "</div></div></div></div>";
              }
            } else {
              SPCMP_html += "<div class='SP_CMPNoProduct'><pre>" + data['msg'] + "</pre></div>";
            }
            window.history.pushState('', '', url_param);
            $("#SP_CmpHtml").html(SPCMP_html);

            if (window.compareHtmlloaded != undefined && $.isFunction(window.compareHtmlloaded))
              compareHtmlloaded();

            SPCMP_heightsEqualizer('first');
          } else if (dType == 'sticky') {
            if (data['status'] == 'true' && data['products'] != 'empty' && data['products'] != null) { //2-3-19 piyush

              var SPCMP_ctrl_cls = ((data['products']).length == 1 ? "sp_ctrl_inherit" : "");
              SPCMP_html += "<div class='sa_ca_container ca_" + SACMP_app_data['setting_arr']['tab_position'] + "' style='display: block;'>" +
                "<div class='sa_ca_content sa_ca_close'>" +
                "<div class='sa_ca_icontainer'>";
              $.each(data['products'], function(i, SPv) {
                SPCMP_html += "<div class='sa_ca_item'>" +
                  "<a class='sa_ca_pimg' href='/products/" + SPv.handle + "?variant=" + SPv.variant.id + "'>" +
                  "<img alt='' src='" + SPv.variant.image + "' />" +
                  "<span class='sa_ca_idelete' spcmp_pid='" + SPv.id + "' spcmp_vid='" + SPv.variant.id + "' dtype='sticky' onclick='SPCMP_Remove(this,event);'>✕</span>" +
                  "</a>" +
                  "<div class='sa_ca_summary'>" +
                  ((SACMP_app_data['setting_arr']['c_title']) == '1' ? "<a href='/products/" + SPv.handle + "?variant=" + SPv.variant.id + "' class='sa_ca_ptitle'>" + SPv.title + ((SACMP_app_data['setting_arr']['c_var_title']) == '1' ? (SPv.variant.is_default == false ? SPv.variant.title : "") : "") + "</a>" : "") +
                  ((SACMP_app_data['setting_arr']['c_price']) == '1' ? "<a class='money'>" + SACMP_formatMoney(SPv.variant.price, SACMP_money_format) + "</a>" : "") +
                  "</div>" +
                  "</div>";
              });
              SPCMP_html += "</div>" +
                "<div class='compare-controls " + SPCMP_ctrl_cls + "'>" +
                "<a " + (SACMP_shop_name === 'headphone-zone.myshopify.com' ? "target='_blank'" : "") + " class='compare-button com-page-btn btn' title='Compare Product' href='/pages/product-compare" + url_param + "'>" + SACMP_app_data['lang_arr']['t_compare_btn_txt'] + "</a>" +
                "<a href='javascript:void(0);' title='Remove All Product' class='ca_Rmvall' onclick='SPCMP_Remove_All(this);'>" + SACMP_app_data['lang_arr']['t_remove_btn_txt'] + "</a>" +
                "<p class='ca_com_text'>" + SACMP_app_data['lang_arr']['t_compare_msg'] + "</p>" +
                "</div>" +
                "<span class='close ca_tab' title='Hide'>" +
                "<span class='SP_triangle'></span>" +
                "</span>" +
                "</div>" +
                "<div class='ca_flap ca_tab' title='Compare Tab'>" +
                "<span class='SP_triangle'></span>" +
                "<span>" + SACMP_app_data['lang_arr']['t_compare_tab_txt'] + "</span>" +
                "<span class='SP_CA_Count'>" + (data['products']).length + "</span>" +
                "</div>" +
                "</div>";
              $('#sa_ca_wrapper').html(SPCMP_html);
            }

          } else if (dType == 'single_pro') {
            if (data['status'] == 'true' && data['products'] != 'empty') {
              var SPCMP_Phtml = "";
              $('.sp_product_heading').find('[data="sp_id_capital"]').remove();
              meta_li_html = meta_creator(data['products']);

              if ($('.sp_product_heading').find('.sp_add_to_cart').length > 0) {
                $(meta_li_html).insertBefore('.sp_product_heading .sp_add_to_cart');
              } else {
                $('.sp_product_heading').append(meta_li_html);
              }

              $.each(data['products'], function(i, SPv) {
                meta_html = metafield_value(SPv);
                /*if(c_meta_field =='1' && $('.sp_product_heading').find('#sp_id_capital').length <= 0){
                	location.reload();
                }*/

                SPCMP_Phtml += "<ul style='display:table-cell;' class='sp_product_con fill_cmp'>" +
                  "<li class='sp_image'>" +
                  "<div class='sp_image_block'>" +
                  "<a spcmp_vid='" + SPv.variant.id + "' spcmp_pid='" + SPv.id + "'  dtype='page' href='javascript:void(0);'class='sp_close' onclick='SPCMP_Remove(this,event);'>&#x2715;</a>" +
                  "<a target='_blank' href='/products/" + SPv.handle + "?variant=" + SPv.variant.id + "' class='sp_img'>" +
                  "<img src='" + SPv.variant.image + "' alt='' />" +
                  "</a>" +
                  "</div>" +
                  "</li>" +
                  ((SACMP_app_data['setting_arr']['c_title']) == '1' ? "<li class='sp_title'>" + SPv.title + "</li>" : "") +
                  ((SACMP_app_data['setting_arr']['c_var_title']) == '1' ? "<li class='sp_var_title'>" + (SPv.variant.is_default == false ? SPv.variant.title : "") + "</li>" : "") +
                  ((SACMP_app_data['setting_arr']['c_price']) == '1' ? "<li class='sp_price'><span class='money'>" + SACMP_formatMoney(SPv.variant.price, SACMP_money_format) + "</span> &nbsp;&nbsp;" + ((SPv.variant.display_cmp == '1' && SACMP_app_data['setting_arr']['c_cmp_price'] == '1') ? "<strike>" + SACMP_formatMoney(SPv.variant.compare_at_price, SACMP_money_format) + "</strike>" : "") + (SPv.variant.display_discount == '1' && SACMP_app_data['setting_arr']['c_discount'] == '1' ? "&nbsp;&nbsp;<span class='sa_cmp_discount'>( " + SPv.variant.discount + " )</span>" : "") + "</li>" : "") +
                  ((SACMP_app_data['setting_arr']['c_sku']) == '1' ? "<li class='sp_ptype'>" + SPv.variant.sku + "</li>" : "") +
                  ((SACMP_app_data['setting_arr']['c_barcode']) == '1' ? "<li class='sp_ptype'>" + SPv.variant.barcode + "</li>" : "") +
                  ((SACMP_app_data['setting_arr']['c_ptype']) == '1' ? "<li class='sp_ptype'>" + SPv.ptype + "</li>" : "") +
                  ((SACMP_app_data['setting_arr']['c_vendor']) == '1' ? "<li class='sp_vendor'>" + SPv.vendor + "</li>" : "") +
                  ((SACMP_app_data['setting_arr']['c_desc']) == '1' ? "<li class='sp_desc'><ul>" + SPv.body_html + "</ul></li>" : "") +
                  ((SACMP_app_data['setting_arr']['c_available']) == '1' ? "<li class='sp_avilable'>" + SPv.variant.available + "</li>" : "") +
                  meta_html +
                  ((SACMP_app_data['setting_arr']['c_add_to_cart']) == '1' && d_add_to_cart == '1' ? "<li class='sp_add_to_cart'>" + ((SPv.variant.avail_or_sold) == '1' ? " <form action='/cart/add' method='post' enctype='multipart/form-data'><input type='hidden' name='id' value='" + SPv.variant.id + "'><input type='hidden' name='quantity' value='1'><input class='sa_cmp_addcart' name='button' value='" + SACMP_app_data['lang_arr']['addtocart_btn_text'] + "' type='submit'></form>" : "<input disabled='' class='sa_cmp_soldout' name='button' value='" + SACMP_app_data['lang_arr']['soldout_btn_text'] + "' type='submit'>") + "</li>" : "") +
                  "</ul>";
              });

              if (c_meta_field == '1') {
                var meta_div = $('.sp_product_heading').find('[data="sp_id_capital"]').length;
                $.each($('.sp_product_con'), function(i, v) {
                  for (var i = 0; i < meta_div; i++) {
                    var cmp_desh = ($(v).hasClass('fill_cmp') ? "-" : "");
                    if ($(v).find('.sp_add_to_cart').length > 0 && $(v).find('.same_cl').length < meta_div) {
                      var in_befor = $(v).find('.sp_add_to_cart');
                      $("<li class='same_cl'>" + cmp_desh + "</li>").insertBefore($(in_befor));
                    } else if ($(v).find('.same_cl').length < meta_div) {
                      $(v).append("<li class='same_cl'>" + cmp_desh + "</li>");
                    }
                  }
                })

                $.each($('[data="sp_id_capital"]'), function(p, q) {
                  var ind = $(this).index();
                  $.each($('.sp_product_con'), function(pp, qq) {
                    var m_class = $(q).attr('class');
                    $(this).find('LI').eq(ind).addClass(m_class);
                  });
                })
              }

              window.history.pushState('', '', url_param);
              $(element).parents("ul.sp_product_con").replaceWith(SPCMP_Phtml);
              if (window.compareHtmlloaded != undefined && $.isFunction(window.compareHtmlloaded)) {
                console.log("----");
                compareHtmlloaded();
              }
              SPCMP_heightsEqualizer();
            }
          }
          if ($.isFunction(window.SPCMPHtml_loaded)) {
            SPCMPHtml_loaded();
            SPCMP_heightsEqualizer();
          }
        },
        'error': function() {
          $("#SP_CmpHtml").html("<div class='SP_CMPNoProduct'><pre>" + SACMP_app_data['lang_arr']['page_nopro_incmp'] + "</pre></div>");
        }
      });
    }


    if (document.addEventListener) {
      document.addEventListener('DOMContentLoaded', function() {
        SPCMP_heightsEqualizer();
      });
      window.addEventListener('resize', function() {
        SPCMP_heightsEqualizer();
        if ($(window).width() > 767 && document.location.pathname.indexOf('/pages/product-compare') > -1) {
          //document.getElementsByClassName("sp_product_con").style.display = "block";
          $('.sp_product_con').removeAttr('style');
        }
      });
    }


  } //end else
} // End initSACMPJQuery
if (SACMP_included == undefined) {
  var SACMP_included = false;
  if (SACMP_included == false) {
    initSACMPJQuery();
  }
}

//Display metafield value
function metafield_value(SPv) { //change brijesh
  var meta_html = '';
  if (c_meta_field == '1') {
    var ind_metafields_key = SACMP_app_data['setting_arr']['ind_meta_key'].toLowerCase() || '';
    ind_metafields_key = ind_metafields_key.split(',').map(Function.prototype.call, String.prototype.trim);

    var ind_metafields_namespaces = SACMP_app_data['setting_arr']['ind_meta_namespace'].toLowerCase() || '';
    ind_metafields_namespaces = ind_metafields_namespaces.split(',').map(Function.prototype.call, String.prototype.trim);

    if (SACMP_shop_name == 'targus-us.myshopify.com') { // 5-3-19 piyush
      $.each(metafields, function(meta_field, mec) {
        var is_metafield = false;
        $.each(JSON.parse(SPv['metafields']), function(nmc, new_metafield) {
          if (new_metafield['namespace'] == meta_field.split("|||")[0] && new_metafield['key'] == mec) {
            meta_html += "<li class='sp_" + mec.replace(/[^0-9a-z]/gi, '') + " same_cl'>" + new_metafield['value'] + "</li>"; //new_field(new_metafield, nmc);
            is_metafield = true;

          }
        });

        if (!is_metafield) {
          meta_html += "<li class='sp_" + mec.replace(/[^0-9a-z]/gi, '') + " same_cl'>-</li>";
        }
      });
    } else if (SACMP_shop_name == 'gyc-mower-depot.myshopify.com') {
      $.each(metafields, function(meta_field, mec) {
        var is_metafield = false;
        $.each(JSON.parse(SPv['metafields']), function(nmc, new_metafield) {
          if (new_metafield['key'] == mec) {
            meta_html += "<li class='sp_" + mec.replace(/[^0-9a-z]/gi, '') + " same_cl'>" + new_metafield['value'] + "</li>"; //new_field(new_metafield, nmc);
            is_metafield = true;
          }
        });

        if (!is_metafield) {
          meta_html += "<li class='sp_" + mec.replace(/[^0-9a-z]/gi, '') + " same_cl'>-</li>";
        }
      });
    } else {
      $.each(metafields, function(meta_field, mec) {
        var is_metafield = false;
        $.each(JSON.parse(SPv['metafields']), function(nmc, new_metafield) {

          if (new_metafield['type'] === 'list.single_line_text_field') {
            if (new_metafield['key'] == mec && (ind_metafields_key.includes(new_metafield['key'].toLowerCase()) || ind_metafields_namespaces.includes(new_metafield['namespace'].toLowerCase()))) {
              var metaParse = JSON.parse(new_metafield['value']);
              var newLi = '<ul style="list-style:none">';
              for (var [i, k] of Object.entries(metaParse)) {
                newLi += `<li data='sp_id_capital'>${k}</li>`;
              }
              newLi += '</ul>';

              meta_html += `<li class='sp_${mec.replace(/[^0-9a-z]/gi, '')} same_cl'>${newLi}</li>`;
              is_metafield = true;
            }
          } else {
            var metafield_value = typeof new_metafield['value'] == 'boolean' && new_metafield['value'] === true ? 'Yes' : typeof new_metafield['value'] == 'boolean' && new_metafield['value'] === false ? "No" : new_metafield['value'];
            if (new_metafield['key'] == mec && (ind_metafields_key.includes(new_metafield['key'].toLowerCase()) || ind_metafields_namespaces.includes(new_metafield['namespace'].toLowerCase()))) {
              meta_html += "<li class='sp_" + mec.replace(/[^0-9a-z]/gi, '') + " same_cl'>" + metafield_value + "</li>"; //new_field(new_metafield, nmc);
              is_metafield = true;
            }

          }


        });

        if (!is_metafield && mec != undefined) {
          meta_html += "<li class='sp_" + mec.replace(/[^0-9a-z]/gi, '') + " same_cl'>-</li>";
        }
      });
    }
  }
  return meta_html;
}

//Metafield creator
function meta_creator(product) { //change brijesh
  var meta_li_html = '';
  if (c_meta_field == '1') {
    var metafields_key = SACMP_app_data['setting_arr']['meta_key'].toLowerCase() || '';
    metafields_key = metafields_key.split(',').map(Function.prototype.call, String.prototype.trim);
    //change this
    var metafields_namespaces = SACMP_app_data['setting_arr']['meta_namespace'].toLowerCase() || '';
    metafields_namespaces = metafields_namespaces.split(',').map(Function.prototype.call, String.prototype.trim);

    if (SACMP_app_data['setting_arr']['ind_meta_key'] === null) {
      SACMP_app_data['setting_arr']['ind_meta_key'] = '';
    }
    if (SACMP_app_data['setting_arr']['ind_meta_namespace'] == null) {
      SACMP_app_data['setting_arr']['ind_meta_namespace'] = '';
    }
    var ind_metafields_key = SACMP_app_data['setting_arr']['ind_meta_key'].toLowerCase() || '';
    ind_metafields_key = ind_metafields_key.split(',').map(Function.prototype.call, String.prototype.trim);

    var ind_metafields_namespaces = SACMP_app_data['setting_arr']['ind_meta_namespace'].toLowerCase() || '';
    ind_metafields_namespaces = ind_metafields_namespaces.split(',').map(Function.prototype.call, String.prototype.trim);

    if (SACMP_shop_name == 'targus-us.myshopify.com') { // 5-3-19 piyush
      metafields = {};
      $.each(product, function(prc, pr) {
        $.each(JSON.parse(pr['metafields']), function(mec, me) {
          if (SACMP_app_data['setting_arr']['meta_filter_type'] == 'exclude') {
            if (!metafields_key.includes(me['key'].toLowerCase()) && !metafields_namespaces.includes(me['namespace'].toLowerCase())) {
              metafields[me['namespace'] + "|||" + me['key']] = me['key'];
            }
          } else {
            if (ind_metafields_key.includes(me['key'].toLowerCase()) || ind_metafields_namespaces.includes(me['namespace'].toLowerCase())) {
              metafields[me['namespace'] + "|||" + me['key']] = me['key'];
            }
          }
        });
      });
    } else {
      $.each(product, function(prc, pr) {
        $.each(JSON.parse(pr['metafields']), function(mec, me) {
          if (SACMP_app_data['setting_arr']['meta_filter_type'] == 'exclude') {

            if (!metafields_key.includes(me['key'].toLowerCase()) && !metafields_namespaces.includes(me['namespace'].toLowerCase())) {
              metafields.push(me['key']);
            }
          } else {
            if (ind_metafields_key.includes(me['key'].toLowerCase()) || ind_metafields_namespaces.includes(me['namespace'].toLowerCase())) {
              metafields.push(me['key']);
            }
          }
        });
      });
    }

    if (SACMP_shop_name != 'targus-us.myshopify.com') { // 5-3-19 piyush
      metafields = make_diff_meta(metafields);
    }

    $.each(metafields, function(meta_field, mec) {
      if (mec != undefined)
        meta_li_html += "<li data='sp_id_capital' class='sp_" + mec.replace(/[^0-9a-z]/gi, '') + "'>" + mec.replace(/_/g, ' ') + "</li>";

    });
  }
  return meta_li_html;
}

function SPCMP_heightsEqualizer(spc_txt) { //Set Heigh in responsive
  if (spc_txt == undefined)
    spc_txt = null;
  if (spc_txt == '') { //change brijesh
    var selector = "";
  } else { //change brijesh
    var selector = 'li.sp_image,li.sp_title,sp_var_title,li.sp_price,li.sp_desc,li.sp_vendor,li.sp_avilable,li.sp_ptype,li.sp_add_to_cart';
  }
  $.each($('.sp_product_heading li'), function(q, p) { //change brijesh
    selector = (q == '0' ? '' : selector);
    selector += (q != '0' ? "," : "") + "li." + $(p).attr('class');
  })
  var elem_arr = selector.split(",");
  $.each(elem_arr, function(key, value) {
    var elements = document.querySelectorAll(value),
      max_height = 0,
      len = 0,
      i;
    if ((elements) && (elements.length > 0)) {
      len = elements.length;
      for (i = 0; i < len; i++) { //get max height
        elements[i].style.height = ''; //reset height attr
        if (elements[i].clientHeight > max_height) {
          max_height = elements[i].clientHeight;
        }
      }
      for (i = 0; i < len; i++) { //set max height to all elements
        elements[i].style.height = max_height + 'px';
      }
    }

  });
}


function SPCMP_floatToString(numeric, decimals) {
  var amount = numeric.toFixed(decimals).toString();
  if (amount.match(/^\.\d+/)) {
    return "0" + amount;
  } else {
    return amount;
  }
}

function isInCMPStorage(pId, vId) {
  var CMP_Storage_ck = SPCMP_getCookie('SP_CompareStorage');
  if (CMP_Storage_ck != "") {
    var CMP_Storage = JSON.parse(CMP_Storage_ck);
    if (typeof CMP_Storage[pId] === 'undefined') {
      return false;
    } else {
      if (CMP_Storage[pId].indexOf(vId) >= 0) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
}

function getCollectionList(SACMP_shop_name, pageNo, callback, collectionHandle = []) {
  $.ajax({
    type: 'GET',
    url: '//' + SACMP_shop_name + '/collections.json?limit=250&page=' + parseInt(pageNo),
    async: false,
    dataType: "json",
    success: function(collectionResponse) {
      if (!collectionResponse.collections.length) {
        callback(collectionHandle);
        return false;
      }

      if (collectionResponse.collections.length) {
        var collections = collectionResponse.collections;
        collections.forEach(function(collection, index) {
          if (collection.products_count > 0) {
            collectionHandle.push({
              id: collection.id,
              handle: collection.handle,
              title: collection.title,
              products_count: collection.products_count
            });
          }
        });
        pageNo = parseInt(pageNo) + 1;

        if (Shopify.shop != 'racquetguys1.myshopify.com')
          getCollectionList(SACMP_shop_name, pageNo, callback, collectionHandle);
      } else {
        callback(collectionHandle);
      }
    }
  });
}

function SPCMP_getCookie(cname) { //Get Cookie from browzer
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function SPCMP_setCookie(cname, cvalue, exdays) { //Set Cookie
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

var slideIndex = 1;

function SPCMP_plusDivs(n) {
  SPCMP_showDivs(slideIndex += n);
}

function SPCMP_showDivs(n) {
  var i;
  var x = document.getElementsByClassName("sp_product_con");
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  $('.sa_next,.sa_prev').prop('disabled', false);
  var div_limit = SACMP_limit;
  if (c_pro_selection != '1') {
    div_limit = $("#SP_CmpHtml .sp_product").find("ul.fill_cmp").length;
  }

  if ((slideIndex - 1) == (div_limit - 1)) {
    $('.sa_next').prop('disabled', true);
  } else if ((slideIndex - 1) == 0) {
    $('.sa_prev').prop('disabled', true);
  }
  x[slideIndex - 1].style.display = "block";
  SPCMP_heightsEqualizer();
}

function SPCMP_Remove(obj, e) { //Remove Product

  if ($(e.target).is('.sa_ca_idelete')) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
  }
  var pId = $(obj).attr("spcmp_pid");
  var vId = $(obj).attr("spcmp_vid");
  var dType = $(obj).attr("dtype");
  var CMP_Storage = JSON.parse(SPCMP_getCookie('SP_CompareStorage'));
  var SPCMP_Vids = CMP_Storage[pId];
  var total_cmp_item = 0;
  if (SPCMP_Vids != "") {
    var checkAganId = isInCMPStorage(pId, vId);
    if (checkAganId) { //Check Product in cookie or not for remove
      SPCMP_Vids = jQuery.grep(SPCMP_Vids, function(value) {
        return value != vId;
      });

      SPCMP_Vids = SPCMP_Vids.filter(function(v) {
        return v !== ''
      });

      if (SPCMP_Vids.length <= 0) {
        delete CMP_Storage[pId];
      } else {
        CMP_Storage[pId] = SPCMP_Vids;
        total_cmp_item += SPCMP_Vids.length;
      }
    }
    if ($(".SPCMP_Add[spcmp_pid='" + pId + "']").length && $(".SPCMP_Add[spcmp_pid='" + pId + "']").parents("form[action$='/cart/add']").find('[name=id]').val() == vId) {
      $(".SPCMP_Add[spcmp_pid='" + pId + "']").attr({
        "value": SACMP_app_data['lang_arr']['compare_add_txt'],
        "disabled": false
      });
      $(".SPCMP_Add[spcmp_pid='" + pId + "']").removeClass('SPCMP_Added'); //6-7
    }

    if ($("input[type='checkbox'][name='SPCMP_chk'][spcmp_vid='" + vId + "']").length) {
      $("input[type='checkbox'][name='SPCMP_chk'][spcmp_vid='" + vId + "']").prop({
        "checked": false,
        "disabled": false
      }).parent().find("span").text(SACMP_app_data['lang_arr']['compare_add_txt']);
      $("input[type='checkbox'][name='SPCMP_chk'][spcmp_vid='" + vId + "']").removeClass('SPCMP_Added'); //6-7
    }

    SPCMP_setCookie("SP_CompareStorage", JSON.stringify(CMP_Storage), 7);
    var url_param = [];
    $.each(CMP_Storage, function(index, obj) {
      CMP_Storage[index] = jQuery.grep(CMP_Storage[index], function(n, i) {
        return (n !== "" && n != null);
      });
      if (CMP_Storage[index].length) {
        $.each(CMP_Storage[index], function(Vindex, Vobj) {
          if ($.inArray(index + ":" + Vobj, url_param) == -1) {
            url_param.push(btoa(index + ":" + Vobj));
          }
        });
      }
    });
    if (url_param.length >= 0) {
      url_param = "?" + url_param.join(",");
    } else {
      url_param = "";
    }

  }

  if (dType == "page") {
    if (c_pro_selection == '1') {
      var meta_blank_rem = ''; //change brijesh
      $.each(metafields, function(meta_field, mec) { //change brijesh
        if (mec != undefined)
          meta_blank_rem += '<li class="sp_' + mec.replace(/[^0-9a-z]/gi, '') + ' same_cl"></li>';
      });

      var SPCMP_Pempty = "<ul style='display:table-cell;' class='sp_product_con'>" +
        "<li class='sp_image'>" +
        "<p class='sp_add_title'>" + SACMP_app_data['lang_arr']['add_new_product'] + "</p><div class='li_overlay'></div>" +
        "<select class='sp_form_control SACMP_get_coll'>" +
        "<option value='0'>" + SACMP_app_data['lang_arr']['choose_collection'] + "</option>" +
        SACMP_coll_ajax +
        "</select>" +
        "<select class='sp_form_control SACMP_get_pro' disabled>" +
        "<option vlaue='0'>" + SACMP_app_data['lang_arr']['choose_product'] + "</option>" +
        "</select>" +
        "<select class='sp_form_control SACMP_get_pro_var' disabled style='display:none;'>" +
        "<option value='0'>" + SACMP_app_data['lang_arr']['choose_variant'] + "</option>" +
        "</select>" +
        "</li>" +
        ((SACMP_app_data['setting_arr']['c_title']) == '1' ? "<li class='sp_title'></li>" : "") +
        ((SACMP_app_data['setting_arr']['c_var_title']) == '1' ? "<li class='sp_var_title'></li>" : "") +
        ((SACMP_app_data['setting_arr']['c_price']) == '1' ? "<li class='sp_price'></li>" : "") +
        ((SACMP_app_data['setting_arr']['c_sku']) == '1' ? "<li class='sp_sku'></li>" : "") +
        ((SACMP_app_data['setting_arr']['c_barcode']) == '1' ? "<li class='sp_barcode'></li>" : "") +
        ((SACMP_app_data['setting_arr']['c_ptype']) == '1' ? "<li class='sp_ptype'></li>" : "") +
        ((SACMP_app_data['setting_arr']['c_vendor']) == '1' ? "<li class='sp_vendor'></li>" : "") +
        ((SACMP_app_data['setting_arr']['c_desc']) == '1' ? "<li class='sp_desc'></li>" : "") +
        ((SACMP_app_data['setting_arr']['c_available']) == '1' ? "<li class='sp_avilable'></li>" : "") +
        meta_blank_rem +
        ((SACMP_app_data['setting_arr']['c_add_to_cart']) == '1' ? "<li class='sp_add_to_cart'></li>" : "") +
        "</ul>";
      $(obj).parents("ul.sp_product_con").replaceWith(SPCMP_Pempty);
    } else {
      $(obj).parents("ul.sp_product_con").remove();

    }

    SPCMP_heightsEqualizer();
    if ($("#SP_CmpHtml .sp_product").find("ul.fill_cmp").length <= 0) {
      $("#SP_CmpHtml").html("<div class='SP_CMPNoProduct'><pre>" + SACMP_app_data['lang_arr']['page_nopro_incmp'] + "</pre></div>");
    } else if (c_pro_selection != '1' && $(window).width() < 767) {
      $("#SP_CmpHtml .sa_button input[type='button']:not(:disabled)").first().trigger("click");
    }
    window.history.pushState('', '', url_param);
    SPCMP_heightsEqualizer();
  } else {
    $(obj).parents("div.sa_ca_item").remove();
    if ($("#sa_ca_wrapper .sa_ca_item").length <= 0) {
      $("#sa_ca_wrapper").html("");
    } else {
      var numDiv = $('#sa_ca_wrapper .sa_ca_item').length;
      $("#sa_ca_wrapper .SP_CA_Count").text(numDiv);
    }

    if ($("#sa_ca_wrapper .sa_ca_item").length == 1) {
      $("#sa_ca_wrapper .compare-controls").addClass("sp_ctrl_inherit");
    }
    $("#sa_ca_wrapper .compare-controls .compare-button").attr("href", "/pages/product-compare" + url_param);
  }

  /* Similar Products Process */
  if (SACMP_isUpdated && SACMP_isSimilar) {

    var getCompColl = JSON.parse(SPCMP_getCookie("SP_CheckCompareStorage"));
    delete getCompColl[pId.toString()];
    SPCMP_setCookie("SP_CheckCompareStorage", JSON.stringify(getCompColl), 7);
  }
}

function SPCMP_Remove_All(obj) { //Remove All Product from
  SPCMP_setCookie("SP_CompareStorage", "", -1);
  SPCMP_setCookie("SP_CheckCompareStorage", "", -1);
  if ($(".SPCMP_Add").length) {
    $(".SPCMP_Add").attr({
      "value": SACMP_app_data['lang_arr']['compare_add_txt'],
      "disabled": false
    });
    $("form[action$='/cart/add']").find(".SPCMP_Add").removeClass('SPCMP_Added'); //6-7
  }

  if ($("input[type='checkbox'][name='SPCMP_chk']").length) {
    $("input[type='checkbox'][name='SPCMP_chk']").prop({
      "checked": false,
      "disabled": false
    }).parent().find("span").text(SACMP_app_data['lang_arr']['compare_add_txt']);
    $("input[type='checkbox'][name='SPCMP_chk']").removeClass('SPCMP_Added'); //6-7
  }
  $("#sa_ca_wrapper").html("");
}

function make_diff_meta(list) { //change brijesh
  var result = [];
  $.each(list, function(i, e) {
    if ($.inArray(e, result) == -1) {
      result.push(e);
    }
  });
  return result;
}

function getDefaultLanguage_old(langArr) {
  var defLanguage = '';
  if (langArr['spcmp_default']) {
    defLanguage = 'spcmp_default';
  } else {
    $.each(langArr, function(index, value) {
      if (value.shop_dlang == '1') {
        defLanguage = index;
        return true;
      }
    });
  }
  return defLanguage;
}

function getDefaultLanguage(langArr) {
  var defLanguage = '';
  if (langArr['spcmp_default']) {
    defLanguage = 'spcmp_default';
  } else {
    for (var [index, value] of Object.entries(langArr)) {
      if (value.shop_dlang == '1') {
        defLanguage = index;
      }
    }
  }
  return defLanguage;
}

/* Check Add Compare Product is Similar */
function checkSimilarProduct(checkIDs) {

  var getCompColl = SPCMP_getCookie("SP_CheckCompareStorage");

  if (getCompColl == '') {
    getCompColl = '{}';
  }

  getCompColl = JSON.parse(getCompColl);

  if (getCompColl)

    var allCollIds = [];
  $.each(getCompColl, function(proID, collIDs) {
    $.each(collIDs.split(','), function(ind, collID) {
      allCollIds.push(collID);
    });
  });

  allCollIds = jQuery.unique(allCollIds);

  var isSimilar = false;
  checkIDs = checkIDs.toString();
  $.each(checkIDs.split(','), function(ind, collID) {

    if ($.inArray(collID.toString(), allCollIds) !== -1) {

      isSimilar = true;
      return false;
    }
  });
  return isSimilar;
}

/* Check Similar Old or New */
function checkIsSimilarProcess() {

  var getCompColl = SPCMP_getCookie("SP_CheckCompareStorage");
  var getCompCollPro = SPCMP_getCookie('SP_CompareStorage');

  if (getCompColl == '') {
    getCompColl = '{}';
  }

  if (getCompCollPro == '') {
    getCompCollPro = '{}';
  }

  getCompColl = JSON.parse(getCompColl);
  getCompCollPro = JSON.parse(getCompCollPro);

  var currentPageURL = window.location.toString();
  var isComparePage = document.location.pathname.indexOf('/pages/product-compare');
  if ((Object.keys(getCompCollPro).length && !Object.keys(getCompColl).length) || (!Object.keys(getCompCollPro).length && currentPageURL.indexOf("?") > 0)) {

    SPCMP_Remove_All();
    if (isComparePage > -1) {

      var cleanURL = currentPageURL.substring(0, currentPageURL.indexOf("?"));
      window.history.replaceState({}, document.title, cleanURL);
    }
  }
}