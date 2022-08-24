// Add any custom JavaScript here.
function showMap() {
  $('#tab-mapview').click();
}
setTimeout(showMap, 300);

var $installCard = $('#app-install-card').closest('.card').parent(),
    $supportedInstructions = $installCard.find('#app-install-button'),
    $nonsupportedInstructions = $installCard.find('#installation-instructions-button');

$installCard.hide();
$installCard.addClass('hide-after-install');
$supportedInstructions.hide();
$nonsupportedInstructions.hide();


if ('onbeforeinstallprompt' in window) {

  let deferredPrompt;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    console.log('Caught the beforeinstallprompt event');
  });

  document.getElementById('app-install-button').addEventListener('click', (e) => {
    console.log('Triggering the event...');
    deferredPrompt.prompt();
  });

  $installCard.show();
  $supportedInstructions.show();
}
else {
  $installCard.show();
  $nonsupportedInstructions.show();
}
