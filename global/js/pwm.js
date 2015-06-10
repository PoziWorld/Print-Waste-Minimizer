var
    // Will be used later
    strActiveClass  = 'pwmExtensionActive'
    // Create a Toggle
  , $toggle         = document.createElement( 'button' )
  ;

$toggle.id          = 'pwmExtensionToggleCta';
$toggle.title       = chrome.i18n.getMessage( 'toggleTitle' );
