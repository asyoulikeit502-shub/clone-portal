var otArrayTwitterPixelWithType = '[{"pixel_id":"tw-oi0zk-oi4ab","ads_account_id":"209"}]'.trim().split(",");
var otTwitterPixelEventType = 'capi_Checkout Initiated'.trim().split("_")[1];
listTwitterPixelConversionByType[otTwitterPixelEventType] = [{
  "pixel_id": "tw-oi0zk-oi4ab",
  "ads_account_id": "209"
}];