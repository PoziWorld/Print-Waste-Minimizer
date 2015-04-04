// General
var strActiveClass = 'pwmExtensionActive';

// Create a Toggle
var $toggle = document.createElement( 'button' );

$toggle.id = 'pwmExtensionToggleCta';
$toggle.title = chrome.i18n.getMessage( 'toggleTitle' );
$toggle.onclick = function() {
  document.body.classList.toggle( strActiveClass )
};

// Append the Toggle to the page
document.body.appendChild( $toggle );
