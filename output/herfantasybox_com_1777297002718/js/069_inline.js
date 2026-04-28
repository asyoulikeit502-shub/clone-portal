var otArrayTwitterPixelWithType = '[{"pixel_id":"tw-oi0zk-oi4a2","ads_account_id":"209"}]'.trim().split(",");
var otTwitterPixelEventType = 'capi_Add to cart'.trim().split("_")[1];
listTwitterPixelConversionByType[otTwitterPixelEventType] = [{
  "pixel_id": "tw-oi0zk-oi4a2",
  "ads_account_id": "209"
}];