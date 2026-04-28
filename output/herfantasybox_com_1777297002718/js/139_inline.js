function addonsAndBundles_addons_and_bundles_EbAyzU() {
  const $tabs = document.querySelectorAll('#addons-and-bundles-addons_and_bundles_EbAyzU .addons-and-bundles-title h3');
  $tabs.forEach(($tab) => {
    $tab.addEventListener('click', ($e) => {
      $e.preventDefault();
      const $targetPanel = $e.target.dataset.targetPanel;
      document.querySelector('#addons-and-bundles-addons_and_bundles_EbAyzU .addons-and-bundles-title h3.active').classList.remove('active');
      document.querySelector('#addons-and-bundles-panels-addons_and_bundles_EbAyzU .addons-and-bundles-panel.active').classList.remove('active');
      $e.target.classList.add('active');
      document.querySelector(`#${$targetPanel}`).classList.add('active');
    });
  });
}
addonsAndBundles_addons_and_bundles_EbAyzU();