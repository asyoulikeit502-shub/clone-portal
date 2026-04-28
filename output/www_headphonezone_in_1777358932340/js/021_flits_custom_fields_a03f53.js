(function(Flits2) {
  var customFieldsRegisterPage = Flits2.customFieldsRegisterPage = function() {
      Flits2.customFieldsRegisterPage.settings = {};
      var settings = {};
      settings = Flits2.extend(Flits2.customFieldsRegisterPage.settings, settings), Flits2.dispatchEvent("Flits:customFields:registerPage:settings:Loaded", {
        settings
      }), Flits2.fileFieldReset = function(fileFieldSelector, errorMessage) {
        flitsSnackbar.show({
          text: errorMessage,
          pos: "bottom-center",
          showAction: !1,
          customClass: "flits-alert-error"
        }), fileFieldSelector.val(null);
        var $customerCustomFieldRow = fileFieldSelector.closest(".customer-custom-field-row"),
          noFileLabel = $customerCustomFieldRow.find(".file-name-label").attr("data-file-label");
        $customerCustomFieldRow.find(".file-name-label").html(noFileLabel), Flits2.customFields.settings.buttonElement.prop("disabled", !1), $customerCustomFieldRow.find(".file-upload-spinner").addClass("flits-hide")
      }, Flits2.registerPageFileUploadChangeEvent = function(selector) {
        var uploadedFile = selector[0].files[0];
        if (typeof uploadedFile > "u") return !1;
        Flits2.customFields.settings.buttonElement.prop("disabled", !0);
        var $customerCustomFieldRow = selector.closest(".customer-custom-field-row");
        if ($customerCustomFieldRow.find(".file-upload-spinner").removeClass("flits-hide"), $customerCustomFieldRow.find(".file-uploaded").addClass("flits-hide"), uploadedFile.name == "") return Flits2.fileFieldReset(selector, Flits2.customFields.settings.fileTypeInvalidErrorMessage), !1;
        var validFileTypes = selector.attr("accept").split(",");
        if (Flits2.inArray(uploadedFile.type, validFileTypes) == -1) return Flits2.fileFieldReset(selector, Flits2.customFields.settings.fileTypeInvalidErrorMessage), !1;
        if (uploadedFile.size > Flits2.customFields.settings.fileUploadMaxSize) return Flits2.fileFieldReset(selector, Flits2.customFields.settings.fileSizeExceedErrorMessage), !1;
        var fileName = uploadedFile.name;
        fileName.length > 30 && (fileName = fileName.substring(0, 15) + ".." + fileName.substr(fileName.lastIndexOf(".") - 3)), selector.closest(".customer-custom-field-row").find(".file-name-label").html(fileName);
        var fileInputName = selector.attr("name"),
          formData = new FormData;
        formData.append("token", Flits2.token), formData.append("request_id", Flits2.generateRequestId()), formData.append("field_unique_id", fileInputName), formData.append(fileInputName, uploadedFile), typeof selector.attr("data-val") < "u" && formData.append("field_prev_temp_file_name", JSON.parse(selector.attr("data-val")).new_value), Flits2.ajax({
          method: "POST",
          url: Flits2.customFields.settings.tempFileUploadURL,
          data: formData,
          contentType: !1,
          processData: !1,
          success: resp => {
            if (Flits2.customFields.settings.buttonElement.prop("disabled", !1), resp.status) {
              var fileHistory = selector.attr("name") + "_history",
                fileData = JSON.stringify(resp[fileHistory]);
              selector.attr("data-val", fileData), $customerCustomFieldRow.find(".file-upload-spinner").addClass("flits-hide"), $customerCustomFieldRow.find(".file-uploaded").removeClass("flits-hide")
            } else return Flits2.fileFieldReset(selector, resp.error), !1
          },
          error: function(resp) {
            return Flits2.fileFieldReset(selector, resp.responseJSON.message), !1
          }
        })
      }, Flits2(document).on("click", Flits2.customFields.settings.buttonElement, (function(event) {
        var custom_fields_data = {};
        (Flits2.getLocalStorage(Flits2.customFields.settings.localStorageKeyName) == null || Flits2.getLocalStorage(Flits2.customFields.settings.localStorageKeyName) == null) && Flits2.setLocalStorage(Flits2.customFields.settings.localStorageKeyName, {}), custom_fields_data = Flits2.getLocalStorage(Flits2.customFields.settings.localStorageKeyName), custom_fields_data.visited_path_history = [location.pathname];
        var userCustomFields = Flits2.customFields.settings.userCustomFields;
        Flits2.each(userCustomFields, (function(index, customField) {
          var fieldValue = "",
            parentDiv = Flits2("form[action='/account']").find('[data-field-unique-id="' + customField.unique_id + '"]'),
            fieldType = parentDiv.attr("data-field-type");
          switch (fieldType) {
            case "file":
              var selector = parentDiv.find(".customer-custom-field-value-input"),
                selectorName = selector.attr("name");
              fieldValue = selector.attr("data-val"), custom_fields_data[selectorName] = fieldValue;
              break;
            case "date":
            case "time":
              parentDiv.find(".customer-custom-field-value-input").each((function(index2) {
                var selector2 = Flits2(this),
                  selectorName2 = Flits2(this).attr("name");
                fieldValue = selector2.val() != null ? selector2.val() : "", custom_fields_data[selectorName2] = fieldValue
              }));
              break;
            default:
              var selector = parentDiv.find(".customer-custom-field-value-input"),
                selectorName = selector.attr("name");
              fieldValue = selector.val(), custom_fields_data[selectorName] = fieldValue;
              break
          }
        })), Flits2.setLocalStorage(Flits2.customFields.settings.localStorageKeyName, custom_fields_data)
      })), Flits2(document).on("input", '.customer-custom-field-value-input[type="text"]', (function(event) {
        Flits2.regexValidateInputTextbox(Flits2(this))
      })), Flits2(document).on("change", '.customer-custom-field-value-input[type="file"]', (function(event) {
        event.preventDefault(), Flits2.registerPageFileUploadChangeEvent(Flits2(this))
      })), Flits2.getFieldAjax()
    },
    customFieldsAccountPage = Flits2.customFieldsAccountPage = function() {
      Flits2.customFieldsAccountPage.settings = {};
      var settings = {};
      settings = Flits2.extend(Flits2.customFieldsAccountPage.settings, settings), Flits2.dispatchEvent("Flits:customFields:accountPage:settings:Loaded", {
        settings
      }), Flits2.getCustomerCustomFieldsValue = function() {
        var currentPage = window.location.pathname.split("/").pop(),
          lastProfileUpdated = Flits2.getLocalStorage("lastProfileUpdatedAt");
        (typeof lastProfileUpdated > "u" || lastProfileUpdated == "") && (lastProfileUpdated = Date.now(), Flits2.setLocalStorage("lastProfileUpdatedAt", lastProfileUpdated)), Flits2.ajax({
          method: "GET",
          url: Flits2.customFields.settings.getCustomFieldsWithValuesURL.replace("{{ customer_id }}", Flits2.customer_id),
          data: {
            currentPage,
            token: Flits2.token,
            customer_hash: Flits2.customerHash,
            lastProfileUpdated
          }
        }).done((function(resp) {
          resp.status && (Flits2.customFields.settings.userCustomFields = resp.userCustomFields, Flits2.customFields.settings.customerCustomFieldsValues = resp.customerCustomFieldsValues, Flits2.IsModuleLoaded.Customer.CustomFields.Ajax = !0, Flits2.loadCustomFields())
        }))
      }, Flits2.setCustomerCustomFieldsValue = function() {
        Flits2(".customer-custom-field-row").each((function(index) {
          var $customerCustomFieldRow = Flits2(this),
            customerCustomFieldUniqueId = $customerCustomFieldRow.attr("data-field-unique-id"),
            customerCustomFieldValue = "";
          $customerCustomFieldRow.find(".customer-custom-field-description").addClass("flits-hide"), $customerCustomFieldRow.find(".customer-custom-field-required-error-message").addClass("flits-hide");
          var customerCustomFieldsValues = Flits2.customFields.settings.customerCustomFieldsValues;
          switch (typeof customerCustomFieldsValues[customerCustomFieldUniqueId] < "u" && (customerCustomFieldValue = customerCustomFieldsValues[customerCustomFieldUniqueId]), $customerCustomFieldRow.attr("data-field-type")) {
            case "date":
              customerCustomFieldValue == "" && (customerCustomFieldValue = "--");
              var date = customerCustomFieldValue.split("-");
              $customerCustomFieldRow.find('.customer-custom-field-value-input.year option[value="' + date[0] + '"]').prop("selected", !0), $customerCustomFieldRow.find('.customer-custom-field-value-input.year option[value="' + date[0] + '"]').attr("selected", !0), $customerCustomFieldRow.find(".customer-custom-field-value-input.year").val(date[0]), $customerCustomFieldRow.find('.customer-custom-field-value-input.month option[value="' + date[1] + '"]').prop("selected", !0), $customerCustomFieldRow.find('.customer-custom-field-value-input.month option[value="' + date[1] + '"]').attr("selected", !0), $customerCustomFieldRow.find(".customer-custom-field-value-input.month").val(date[1]), $customerCustomFieldRow.find('.customer-custom-field-value-input.day option[value="' + date[2] + '"]').prop("selected", !0), $customerCustomFieldRow.find('.customer-custom-field-value-input.day option[value="' + date[2] + '"]').attr("selected", !0), $customerCustomFieldRow.find(".customer-custom-field-value-input.day").val(date[2]);
              break;
            case "time":
              customerCustomFieldValue == "" && (customerCustomFieldValue = ":");
              var time = customerCustomFieldValue.split(":");
              $customerCustomFieldRow.find('.customer-custom-field-value-input.hour option[value="' + time[0] + '"]').prop("selected", !0), $customerCustomFieldRow.find('.customer-custom-field-value-input.hour option[value="' + time[0] + '"]').attr("selected", !0), $customerCustomFieldRow.find(".customer-custom-field-value-input.hour").val(time[0]), $customerCustomFieldRow.find('.customer-custom-field-value-input.minute option[value="' + time[1] + '"]').prop("selected", !0), $customerCustomFieldRow.find('.customer-custom-field-value-input.minute option[value="' + time[1] + '"]').attr("selected", !0), $customerCustomFieldRow.find(".customer-custom-field-value-input.minute").val(time[1]);
              break;
            case "file":
              var noFileLabel = $customerCustomFieldRow.find(".file-name-label").attr("data-file-label");
              if ($customerCustomFieldRow.find(".file-name-label").attr("data-file-name", noFileLabel), $customerCustomFieldRow.find(".file-name-label").html(noFileLabel), $customerCustomFieldRow.find(".customer-custom-field-file-view").attr("data-file-path", ""), $customerCustomFieldRow.find(".customer-custom-field-file-delete").addClass("flits-hide"), $customerCustomFieldRow.find(".customer-custom-field-file-undo").addClass("flits-hide"), customerCustomFieldValue == "") $customerCustomFieldRow.find(".customer-custom-field-file-view").addClass("flits-hide");
              else {
                var historyVariable = customerCustomFieldUniqueId + "_history";
                if (typeof customerCustomFieldsValues[historyVariable] < "u") {
                  var historyData = customerCustomFieldsValues[historyVariable];
                  if (typeof historyData[0] < "u" && typeof historyData[0].original_file_name < "u") {
                    var originalFileName = historyData[0].original_file_name;
                    $customerCustomFieldRow.find(".file-name-label").html(originalFileName), $customerCustomFieldRow.find(".file-name-label").attr("data-file-name", originalFileName), $customerCustomFieldRow.find(".customer-custom-field-file-view").attr("data-file-path", customerCustomFieldValue)
                  }
                }
                $customerCustomFieldRow.find(".customer-custom-field-file-view").removeClass("flits-hide"), $customerCustomFieldRow.find('.customer-custom-field-value-input[type="hidden"]').val("uploaded")
              }
              $customerCustomFieldRow.find(".customer-custom-field-value-input").val(null), $customerCustomFieldRow.find(".custom-file-input .file-upload-button").addClass("flits-hide");
              break;
            default:
              $customerCustomFieldRow.find(".customer-custom-field-value-input").val(customerCustomFieldValue);
              break
          }
        }))
      }, Flits2.loadCustomFields = function() {
        Flits2.IsModuleLoaded.Profile && Flits2.IsModuleLoaded.Customer.Ajax && Flits2.IsModuleLoaded.Customer.CustomFields.Ajax && Flits2.setCustomerCustomFieldsDeatils(!0)
      }, Flits2(document).on("Flits:myProfile:Loaded", (function() {
        Flits2.IsModuleLoaded.Profile = !0, Flits2.loadCustomFields()
      })), Flits2(document).on("Flits:customer:AjaxSuccessful", (function() {
        Flits2.IsModuleLoaded.Customer.Ajax = !0, Flits2.loadCustomFields()
      })), Flits2(document).on("Flits:myProfile:EditButtonClicked", (function() {
        Flits2(".customer-custom-field-row").find("input, textarea, select").removeAttr("disabled"), Flits2(".customer-custom-field-row").find("input, textarea, select").removeAttr("readonly"), Flits2.editButtonClickEvent()
      })), Flits2(document).on("Flits:myProfile:EditCancelButtonClicked", (function() {
        Flits2(".customer-custom-field-row").find('input[type="file"]').attr("disabled", !0), Flits2.afterSaveOrEditCancelButtonClickEvent(), Flits2.setCustomFieldRowHeightForMobile()
      })), Flits2.editButtonClickEvent = function() {
        Flits2.onEditSetCustomerCustomFieldsValue(), Flits2.setCustomFieldRowHeightForMobile()
      }, Flits2.onEditSetCustomerCustomFieldsValue = function() {
        Flits2(".customer-custom-field-row").each((function(index) {
          var $customerCustomFieldRow = Flits2(this),
            customerCustomFieldUniqueId = $customerCustomFieldRow.attr("data-field-unique-id"),
            customerCustomFieldValue = "",
            customerCustomFieldsValues = Flits2.customFields.settings.customerCustomFieldsValues;
          typeof customerCustomFieldsValues[customerCustomFieldUniqueId] < "u" && (customerCustomFieldValue = customerCustomFieldsValues[customerCustomFieldUniqueId]), $customerCustomFieldRow.find(".customer-custom-field-description-text").html() != "" ? $customerCustomFieldRow.find(".customer-custom-field-description").removeClass("flits-hide") : $customerCustomFieldRow.find(".customer-custom-field-description").addClass("flits-hide"), $customerCustomFieldRow.attr("data-field-type") === "file" && (customerCustomFieldValue != "" ? ($customerCustomFieldRow.find(".customer-custom-field-file-delete").removeClass("flits-hide"), $customerCustomFieldRow.attr("data-field-required") == "required" && $customerCustomFieldRow.find('input[type!="hidden"]').removeAttr("required"), $customerCustomFieldRow.find('.customer-custom-field-value-input[type="hidden"]').val("uploaded"), $customerCustomFieldRow.find(".customer-custom-field-description").addClass("flits-hide"), $customerCustomFieldRow.find(".file-upload-button").addClass("flits-hide")) : $customerCustomFieldRow.find(".file-upload-button").removeClass("flits-hide"))
        }))
      }, Flits2.setCustomFieldRowHeightForMobile = function() {
        Flits2.customFields.settings.accountPageTemplate == 2 && Flits2(".flits-mobile-view .customer-custom-field-row .flits-input-wrap").each((function(index) {
          var flitsInputWrapActualHeight;
          Flits2(this).attr("data-actual-height") ? flitsInputWrapActualHeight = parseFloat(Flits2(this).attr("data-actual-height")) : (flitsInputWrapActualHeight = parseFloat(Flits2(this).height()), Flits2(this).attr("data-actual-height", parseFloat(flitsInputWrapActualHeight)));
          var flitsInputWrapNewHeight = flitsInputWrapActualHeight;
          Flits2(this).find(".customer-custom-field-required-error-message").hasClass("flits-hide") || (flitsInputWrapNewHeight = flitsInputWrapNewHeight + parseFloat(Flits2(this).find(".customer-custom-field-required-error-message").height())), Flits2(this).find(".customer-custom-field-description").hasClass("flits-hide") || (flitsInputWrapNewHeight = flitsInputWrapNewHeight + parseFloat(Flits2(this).find(".customer-custom-field-description").height())), flitsInputWrapNewHeight >= flitsInputWrapActualHeight && Flits2(this).height(flitsInputWrapNewHeight)
        }))
      }, Flits2.afterSaveOrEditCancelButtonClickEvent = function() {
        Flits2.setCustomerCustomFieldsValue()
      }, Flits2(document).on("click", ".customer-custom-field-file-delete", (function() {
        var $customerCustomFieldRow = Flits2(this).closest(".customer-custom-field-row");
        Flits2.setFileField($customerCustomFieldRow, "delete")
      })), Flits2(document).on("click", ".customer-custom-field-file-undo", (function() {
        var $customerCustomFieldRow = Flits2(this).closest(".customer-custom-field-row");
        Flits2.setFileField($customerCustomFieldRow, "undo")
      })), Flits2(document).on("click", ".customer-custom-field-file-view", (function() {
        var loader = '<style>.file-url-loader{height:20px;animation:.6s linear infinite spinner;cursor:pointer;text-align:center}</style><svg class="file-url-loader" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>';
        Flits2(".customer-custom-field-file-view svg").addClass("flits-hide"), Flits2(loader).insertBefore(".customer-custom-field-file-view svg");
        var filePath = Flits2(this).attr("data-file-path");
        Flits2.ajax({
          type: "GET",
          url: Flits2.customFields.settings.viewFileURL,
          data: {
            filePath,
            token: Flits2.token
          },
          success: function(resp) {
            Flits2(".customer-custom-field-file-view .file-url-loader").remove(), Flits2(".customer-custom-field-file-view svg").removeClass("flits-hide"), resp.status ? window.open(resp.fileUrl, "_blank") : alert(resp.error)
          }
        })
      })), Flits2.setFileField = function($customerCustomFieldRow, action) {
        var affectedElements = [".customer-custom-field-file-delete, .customer-custom-field-file-view", ".customer-custom-field-file-undo, .custom-file-input .file-upload-button"],
          elementsShow = 0,
          elementsHide = 1,
          fileLabel = "";
        switch (action) {
          case "delete":
            elementsShow = 1, elementsHide = 0, $customerCustomFieldRow.attr("data-field-required") == "required" && $customerCustomFieldRow.find('input[type!="hidden"]').attr("required", "required"), $customerCustomFieldRow.find('.customer-custom-field-value-input[type="hidden"]').val("delete"), $customerCustomFieldRow.find(".customer-custom-field-description-text").html() != "" && $customerCustomFieldRow.find(".customer-custom-field-description").removeClass("flits-hide"), fileLabel = $customerCustomFieldRow.find(".file-name-label").attr("data-file-label");
            break;
          case "undo":
            $customerCustomFieldRow.attr("data-field-required") == "required" && $customerCustomFieldRow.find('input[type!="hidden"]').removeAttr("required"), $customerCustomFieldRow.find('.customer-custom-field-value-input[type="hidden"]').val("uploaded"), $customerCustomFieldRow.find(".customer-custom-field-description-text").html() != "" && $customerCustomFieldRow.find(".customer-custom-field-description").addClass("flits-hide"), $customerCustomFieldRow.find('.customer-custom-field-value-input[type!="hidden"]').val(null);
            var noFileLabel = $customerCustomFieldRow.find(".file-name-label").attr("data-file-label");
            $customerCustomFieldRow.find(".file-name-label").html(noFileLabel), fileLabel = $customerCustomFieldRow.find(".file-name-label").attr("data-file-name");
            break;
          default:
            break
        }
        $customerCustomFieldRow.find(".file-name-label").html(fileLabel), $customerCustomFieldRow.find(affectedElements[elementsShow]).removeClass("flits-hide"), $customerCustomFieldRow.find(affectedElements[elementsHide]).addClass("flits-hide")
      }, Flits2.profilePageFileUploadChangeEvent = function(selector) {
        var $customerCustomFieldRow = selector.closest(".customer-custom-field-row"),
          uploadedFile = selector[0].files[0];
        if (uploadedFile.name == "") {
          flitsSnackbar.show({
            text: Flits2.customFields.settings.fileTypeInvalidErrorMessage,
            pos: "bottom-center",
            showAction: !1,
            customClass: "flits-alert-error"
          }), selector.val(null);
          var noFileLabel = $customerCustomFieldRow.find(".file-name-label").attr("data-file-label");
          return $customerCustomFieldRow.find(".file-name-label").html(noFileLabel), !1
        } else {
          var validFileTypes = selector.attr("accept").split(",");
          if (Flits2.inArray(uploadedFile.type, validFileTypes) == -1) {
            flitsSnackbar.show({
              text: Flits2.customFields.settings.fileTypeInvalidErrorMessage,
              pos: "bottom-center",
              showAction: !1,
              customClass: "flits-alert-error"
            }), selector.val(null);
            var noFileLabel = $customerCustomFieldRow.find(".file-name-label").attr("data-file-label");
            return $customerCustomFieldRow.find(".file-name-label").html(noFileLabel), !1
          }
          if (uploadedFile.size > Flits2.customFields.settings.fileUploadMaxSize) {
            flitsSnackbar.show({
              text: Flits2.customFields.settings.fileSizeExceedErrorMessage,
              pos: "bottom-center",
              showAction: !1,
              customClass: "flits-alert-error"
            }), selector.val(null);
            var noFileLabel = $customerCustomFieldRow.find(".file-name-label").attr("data-file-label");
            return $customerCustomFieldRow.find(".file-name-label").html(noFileLabel), !1
          }
          selector.val() == "" && selector.attr("required") == "required" ? selector.closest(".customer-custom-field-row").find(".customer-custom-field-required-error-message").removeClass("flits-hide") : selector.closest(".customer-custom-field-row").find(".customer-custom-field-required-error-message").addClass("flits-hide");
          var fileName = uploadedFile.name;
          fileName.length > 13 && (fileName = fileName.substring(0, 4) + ".." + fileName.substr(fileName.lastIndexOf(".") - 3)), selector.closest(".customer-custom-field-row").find(".file-name-label").html(fileName)
        }
      }, Flits2(document).on("Flits:myProfile:Validate", (function() {
        Flits2('.customer-custom-field-value-input[required="required"]').each((function(index) {
          if (Flits2(this).is(":visible")) {
            var $customerCustomFieldRow = Flits2(this).closest(".customer-custom-field-row");
            if (Flits2(this).val() == "" || Flits2(this).val() == null || typeof Flits2(this).val() > "u") {
              $customerCustomFieldRow.find(".customer-custom-field-required-error-message").removeClass("flits-hide"), Flits2.myProfile.settings.isValidRequest = !1;
              return
            } else $customerCustomFieldRow.find(".customer-custom-field-required-error-message").addClass("flits-hide")
          }
        })), Flits2.setCustomFieldRowHeightForMobile(), Flits2.dispatchEvent("Flits:customFields:CustomValidate")
      })), Flits2(document).on("Flits:myProfile:ChangeCustomFieldsAjaxSettings", (function(event) {
        Flits2.myProfile.settings.formData = new FormData;
        var formParams = event.detail.params;
        Flits2.each(formParams, (function(key, input) {
          Flits2.myProfile.settings.formData.append(input.name, input.value)
        })), Flits2.myProfile.settings.formData.append("from_page", "account");
        var formSelector = event.detail.formSelector;
        formSelector.find('.customer-custom-field-value-input[type="file"]').each((function(index) {
          var selector = Flits2(this),
            uploadedFile = selector[0].files[0];
          typeof uploadedFile < "u" && Flits2.myProfile.settings.formData.append(selector.attr("name"), uploadedFile)
        }));
        var ajaxSettings = event.detail.ajaxSettings;
        ajaxSettings.contentType = !1, ajaxSettings.processData = !1, ajaxSettings.data = Flits2.myProfile.settings.formData
      })), Flits2(document).on("Flits:myProfile:Updated", (function(event) {
        var resp = event.detail.resp;
        typeof resp.customerCustomFieldsValues < "u" && (Flits2.customFields.settings.customerCustomFieldsValues = resp.customerCustomFieldsValues), Flits2.setLocalStorage("lastProfileUpdatedAt", Date.now()), Flits2.afterSaveOrEditCancelButtonClickEvent()
      })), Flits2(document).on("input", '.customer-custom-field-value-input[type="text"]', (function(event) {
        Flits2.regexValidateInputTextbox(Flits2(this))
      })), Flits2(document).on("change", '.customer-custom-field-value-input[type="file"]', (function(event) {
        Flits2.profilePageFileUploadChangeEvent(Flits2(this))
      })), Flits2.getCustomerCustomFieldsValue()
    };
  if (Flits2.extend({
      customFields: {
        settings: {
          asset: null,
          userCustomFields: null,
          customerCustomFieldsValues: null,
          themeStoreId: null,
          accountPageTemplate: null,
          htmlStructure: null,
          buttonElement: null,
          loadingHtml: '<style>.custom-fields-loading{height:20px;animation:.6s linear infinite spinner;cursor:pointer;margin:10px;text-align:center}@keyframes spinner{to{transform:rotate(360deg)}}</style><div class="custom-fields-loading"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg></div>',
          getAssetURL: Flits2.base_url + "/custom-fields/get-asset",
          getCustomFieldsURL: Flits2.base_url + "/custom-fields/get",
          tempFileUploadURL: Flits2.base_url + "/custom-fields/upload-file",
          saveCustomFieldsValuesURL: Flits2.base_url + "/{{ customer_id }}/custom-fields/save",
          getCustomFieldsWithValuesURL: Flits2.base_url + "/{{ customer_id }}/custom-fields/get",
          viewFileURL: Flits2.base_url + "/custom-fields/generate-file-url",
          fileUploadMaxSize: 1 * 1e6,
          fileTypeInvalidErrorMessage: Flits2.t("Flits.locals.custom_fields.file_type_invalid_error_message", "Please check file type and try again"),
          fileSizeExceedErrorMessage: Flits2.t("Flits.locals.custom_fields.file_size_exceed_error_message", "File size exceeds 1MB, please resize and upload"),
          localStorageKeyName: "custom_fields_data"
        }
      },
      uuidv4: function() {
        "use strict";
        var t, e = new Uint8Array(16);

        function o() {
          if (!t && !(t = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
          return t(e)
        }
        var n = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

        function r(t2) {
          return typeof t2 == "string" && n.test(t2)
        }
        for (var i2 = [], u = 0; u < 256; ++u) i2.push((u + 256).toString(16).substr(1));

        function generateUUIDv4(t2, e2, n2) {
          var u2 = (t2 = t2 || {}).random || (t2.rng || o)();
          if (u2[6] = 15 & u2[6] | 64, u2[8] = 63 & u2[8] | 128, e2) {
            n2 = n2 || 0;
            for (var f = 0; f < 16; ++f) e2[n2 + f] = u2[f];
            return e2
          }
          return (function(t3) {
            var e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
              o2 = (i2[t3[e3 + 0]] + i2[t3[e3 + 1]] + i2[t3[e3 + 2]] + i2[t3[e3 + 3]] + "-" + i2[t3[e3 + 4]] + i2[t3[e3 + 5]] + "-" + i2[t3[e3 + 6]] + i2[t3[e3 + 7]] + "-" + i2[t3[e3 + 8]] + i2[t3[e3 + 9]] + "-" + i2[t3[e3 + 10]] + i2[t3[e3 + 11]] + i2[t3[e3 + 12]] + i2[t3[e3 + 13]] + i2[t3[e3 + 14]] + i2[t3[e3 + 15]]).toLowerCase();
            if (!r(o2)) throw TypeError("Stringified UUID is invalid");
            return o2
          })(u2)
        }
        return generateUUIDv4()
      },
      generateRequestId: function() {
        return Flits2.uuidv4()
      },
      getcustomFieldsAsset: function() {
        var getAssetAjaxData = {
          token: Flits2.token
        };
        location.pathname == "/account/register" ? getAssetAjaxData.from_page = "register" : getAssetAjaxData.from_page = "account", typeof Shopify.theme < "u" && typeof Shopify.theme.theme_store_id < "u" && Shopify.theme.theme_store_id != null ? Flits2.customFields.settings.themeStoreId = Shopify.theme.theme_store_id : typeof Flits2.accountSettings < "u" && typeof Flits2.accountSettings.themeStoreId < "u" && Flits2.accountSettings.themeStoreId != null && (Flits2.customFields.settings.themeStoreId = Flits2.accountSettings.themeStoreId), typeof Flits2.accountSettings < "u" && typeof Flits2.accountSettings.template < "u" && Flits2.accountSettings.template != null && (Flits2.customFields.settings.accountPageTemplate = Flits2.accountSettings.template), Flits2.dispatchEvent("Flits:customFields:BeforeGetAssetAjax"), getAssetAjaxData.theme_store_id = Flits2.customFields.settings.themeStoreId, getAssetAjaxData.account_page_template = Flits2.customFields.settings.accountPageTemplate, Flits2.ajax({
          method: "GET",
          url: Flits2.customFields.settings.getAssetURL,
          data: getAssetAjaxData
        }).done((function(resp) {
          resp.status && (Flits2.customFields.settings.asset = resp.asset, Flits2.dispatchEvent("Flits:customFields:GetAsset:AjaxSuccessful"), typeof Flits2.customFields.settings.asset < "u" && Flits2.customFields.settings.asset != null && Flits2.getScript(Flits2.customFields.settings.asset).done((function(script, textStatus) {
            Flits2.dispatchEvent("Flits:customFields:AssetLoaded")
          })).fail((function(jqxhr, settings, exception) {})))
        }))
      },
      regexValidateInputTextbox: function(selector) {
        var value = selector.val();
        if (typeof selector.attr("data-type") < "u") switch (selector.attr("data-type")) {
          case "letters":
            var letters = value.replace(/[^a-zA-Z ]/g, "");
            selector.val(letters);
            break;
          case "numbers":
            var numbers = value.replace(/[^0-9 ]/g, "");
            selector.val(numbers);
            break;
          default:
            break
        }
      },
      setCustomFieldValueAjax: function() {
        var custom_fields_data = Flits2.getLocalStorage(Flits2.customFields.settings.localStorageKeyName);
        if (typeof custom_fields_data < "u" && custom_fields_data != null) {
          var visited_path_history = custom_fields_data.visited_path_history;
          if (typeof visited_path_history < "u" && Flits2.inArray("/account/register", visited_path_history) != -1) {
            if (location.pathname == "/challenge") return visited_path_history.push(location.pathname), custom_fields_data.visited_path_history = visited_path_history, Flits2.setLocalStorage(Flits2.customFields.settings.localStorageKeyName, custom_fields_data), !0;
            custom_fields_data.token = Flits2.token, custom_fields_data.customer_hash = Flits2.customerHash, custom_fields_data.from_page = "register", Flits2.customer_id != -1 && (Flits2.removeItemLocalStorage(Flits2.customFields.settings.localStorageKeyName), Flits2.ajax({
              method: "POST",
              url: Flits2.customFields.settings.saveCustomFieldsValuesURL.replace("{{ customer_id }}", Flits2.customer_id),
              data: custom_fields_data
            }).done((function(resp) {
              resp.status
            })))
          }
        }
      },
      dateTimeOptionGenerate: function(start, end, elem) {
        for (i = start; i <= end; i++) {
          let opt = Flits2("<option/>"),
            val = i < 10 ? "0" + i : i;
          opt.attr("value", val), opt.html(val), elem.append(opt)
        }
      },
      setCustomFieldsList: function(userCustomField, index) {
        if (!(Flits2('.customer-custom-field-row[data-field-unique-id="' + userCustomField.unique_id + '"]').length >= 1)) {
          var fieldType = userCustomField.type;
          if (!(typeof Flits2.customFields.settings.htmlStructure[fieldType] > "u")) {
            Flits2.dispatchEvent("Flits:customFields:BeforeFieldAppend", {
              index
            }), userCustomField = Flits2.customFields.settings.userCustomFields[index];
            var singleFieldHtmlData = Flits2.customFields.settings.htmlStructure[fieldType].fieldHTML;
            Flits2(singleFieldHtmlData).insertBefore(Flits2.customFields.settings.buttonElement);
            var $customerCustomFieldRow = Flits2(".customer-custom-field-row-clone").attr("data-field-unique-id", userCustomField.unique_id).attr("data-field-type", userCustomField.type);
            switch ($customerCustomFieldRow.addClass("flits-hide"), $customerCustomFieldRow.find("input, textarea, select").addClass("customer-custom-field-value-input"), location.pathname == "/account" && (Flits2.accountSettings.template == 1 ? ($customerCustomFieldRow.find("input, textarea, select").prop("readonly", !0), $customerCustomFieldRow.find('input[type="file"]').prop("disabled", !0), $customerCustomFieldRow.find("select").prop("disabled", !0)) : $customerCustomFieldRow.find("input, textarea, select").prop("disabled", !0)), $customerCustomFieldRow.find(".customer-custom-field-title").html(userCustomField.title), fieldType) {
              case "date":
                var $daySelector = $customerCustomFieldRow.find(".customer-custom-field-value-input.day");
                $daySelector.attr("name", userCustomField.unique_id + "[day]"), Flits2.dateTimeOptionGenerate(1, 31, $daySelector);
                var $monthSelector = $customerCustomFieldRow.find(".customer-custom-field-value-input.month");
                $monthSelector.attr("name", userCustomField.unique_id + "[month]"), Flits2.dateTimeOptionGenerate(1, 12, $monthSelector);
                var $yearSelector = $customerCustomFieldRow.find(".customer-custom-field-value-input.year");
                $yearSelector.attr("name", userCustomField.unique_id + "[year]"), Flits2.dateTimeOptionGenerate(1920, new Date().getFullYear(), $yearSelector), $customerCustomFieldRow.find('select.customer-custom-field-value-input option[value=""]').prop("selected", !0), $customerCustomFieldRow.find('select.customer-custom-field-value-input option[value=""]').attr("selected", !0), $customerCustomFieldRow.find("select.customer-custom-field-value-input").val("");
                break;
              case "time":
                var $hourSelector = $customerCustomFieldRow.find(".customer-custom-field-value-input.hour");
                $hourSelector.attr("name", userCustomField.unique_id + "[hour]"), Flits2.dateTimeOptionGenerate(0, 23, $hourSelector);
                var $minuteSelector = $customerCustomFieldRow.find(".customer-custom-field-value-input.minute");
                $minuteSelector.attr("name", userCustomField.unique_id + "[minute]"), Flits2.dateTimeOptionGenerate(0, 59, $minuteSelector), $customerCustomFieldRow.find('select.customer-custom-field-value-input option[value=""]').prop("selected", !0), $customerCustomFieldRow.find('select.customer-custom-field-value-input option[value=""]').attr("selected", !0), $customerCustomFieldRow.find("select.customer-custom-field-value-input").val("");
                break;
              case "file":
                typeof userCustomField.file_extensions < "u" && $customerCustomFieldRow.find('.customer-custom-field-value-input[type="file"]').attr("accept", userCustomField.file_extensions.toString()), typeof userCustomField.upload_button_text < "u" && $customerCustomFieldRow.find(".file-upload-button").html(userCustomField.upload_button_text), typeof userCustomField.placeholder < "u" && $customerCustomFieldRow.find(".file-name-label").html(userCustomField.placeholder).attr("data-file-label", userCustomField.placeholder), $customerCustomFieldRow.find('.customer-custom-field-value-input[type!="hidden"]').attr("name", userCustomField.unique_id), $customerCustomFieldRow.find('.customer-custom-field-value-input[type="hidden"]').attr("name", userCustomField.unique_id + "_file_status");
                break;
              default:
                typeof userCustomField.placeholder < "u" && userCustomField.placeholder != null && userCustomField.placeholder != "" ? $customerCustomFieldRow.find(".customer-custom-field-value-input").attr("placeholder", userCustomField.placeholder) : location.pathname == "/account/register" && $customerCustomFieldRow.find(".customer-custom-field-value-input").attr("placeholder", userCustomField.title), $customerCustomFieldRow.find(".customer-custom-field-value-input").attr("name", userCustomField.unique_id);
                break
            }
            typeof userCustomField.description < "u" && userCustomField.description != null ? $customerCustomFieldRow.find(".customer-custom-field-description-text").html(userCustomField.description) : $customerCustomFieldRow.find(".customer-custom-field-description").addClass("flits-hide"), typeof userCustomField.is_required < "u" && userCustomField.is_required ? (Flits2("form[action='/account']").removeAttr("novalidate"), $customerCustomFieldRow.find('input[type!="hidden"],textarea, select').attr("required", "required"), $customerCustomFieldRow.attr("data-field-required", "required"), typeof userCustomField.required_error_message < "u" && $customerCustomFieldRow.find(".customer-custom-field-required-error-message").html(userCustomField.required_error_message)) : $customerCustomFieldRow.find(".customer-custom-field-required-error-message").addClass("flits-hide"), $customerCustomFieldRow.find(".customer-custom-field-title").html(userCustomField.title), $customerCustomFieldRow.removeClass("customer-custom-field-row-clone"), Flits2.dispatchEvent("Flits:customFields:AfterFieldAppend", {
              customerCustomFieldRow: $customerCustomFieldRow,
              index
            })
          }
        }
      },
      setCustomerCustomFieldsDeatils: function(setCustomerCustomFieldsValue) {
        var userCustomFields = Flits2.customFields.settings.userCustomFields;
        userCustomFields.length > 0 && (Flits2.customFields.settings.buttonElement = Flits2.customFieldsTemplate.buttonElement(), Flits2(Flits2.customFields.settings.loadingHtml).insertBefore(Flits2.customFields.settings.buttonElement), Flits2.dispatchEvent("Flits:customFields:BeforeAllFieldsAppend"), userCustomFields.forEach((function(userCustomField, index) {
          Flits2.setCustomFieldsList(userCustomField, index)
        })), Flits2(".custom-fields-loading").addClass("flits-hide"), Flits2(".customer-custom-field-row").removeClass("flits-hide"), Flits2.dispatchEvent("Flits:customFields:AfterAllFieldsAppend"), setCustomerCustomFieldsValue && (Flits2.setCustomerCustomFieldsValue(), Flits2.dispatchEvent("Flits:customFields:CustomerAllFieldsValuesSet")))
      },
      getFieldAjax: function() {
        var currentPage = window.location.pathname.split("/").pop();
        Flits2.ajax({
          method: "GET",
          url: Flits2.customFields.settings.getCustomFieldsURL,
          data: {
            currentPage,
            token: Flits2.token
          }
        }).done((function(resp) {
          resp.status && (Flits2.customFields.settings.userCustomFields = resp.userCustomFields, Flits2.setCustomerCustomFieldsDeatils(!1))
        }))
      },
      removeItemLocalStorage: function(key) {
        if (localStorage.getItem(Flits2.localStorageVar) != null) {
          var existing = JSON.parse(localStorage.getItem(Flits2.localStorageVar));
          return typeof existing[key] < "u" && delete existing[key], localStorage.setItem(Flits2.localStorageVar, JSON.stringify(existing))
        }
      }
    }), Flits2.Metafields.IS_CUSTOM_FIELDS_ENABLE && Flits2.Metafields.IS_CUSTOM_FIELDS_ENABLE == 1) {
    switch (location.pathname) {
      case "/account/register":
        Flits2.removeItemLocalStorage(Flits2.customFields.settings.localStorageKeyName), Flits2.getcustomFieldsAsset();
        break;
      case "/account":
        Flits2.getcustomFieldsAsset(), Flits2.setCustomFieldValueAjax();
        break;
      default:
        Flits2.setCustomFieldValueAjax();
        break
    }
    Flits2(document).on("Flits:customFields:AssetLoaded", (function(event) {
      Flits2(Flits2.customFieldsTemplate.cssStyle).appendTo("head"), Flits2.customFields.settings.htmlStructure = Flits2.customFieldsTemplate.htmlStructure, location.pathname == "/account/register" ? Flits2.customFieldsRegisterPage() : Flits2.customFieldsAccountPage()
    }))
  }
})(Flits);
//# sourceMappingURL=/cdn/shop/t/516/assets/flits_custom_fields.js.map?v=37086095402425291401776948164