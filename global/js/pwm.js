var extensionApisNamespace;
var strActiveClass = 'pwmExtensionActive';
var $toggle = document.createElement( 'button' );

/**
 * https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Chrome_incompatibilities
 */

if ( typeof browser !== 'undefined' ) {
  extensionApisNamespace = browser;
}
else {
  extensionApisNamespace = chrome;
}

$toggle.id = 'pwmExtensionToggleCta';
$toggle.title = extensionApisNamespace.i18n.getMessage( 'toggleTitle' );
$toggle.setAttribute( 'style', 'background-image: url(' + extensionApisNamespace.runtime.getURL( 'global/img/pwm-icon-16.png' ) + ') !important' );
