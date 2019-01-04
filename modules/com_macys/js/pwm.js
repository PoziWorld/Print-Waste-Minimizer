( function () {
  'use strict';

  init();

  /**
   * Initialize content script logic.
   */

  function init() {
    injectModifiedPushState();
  }

  /**
   * Content scripts are unable to access any variables or functions created by a page.
   * Override native window.history.pushState to allow for detection of URL changes for extension needs.
   */

  function injectModifiedPushState() {
    const headElement = document.getElementsByTagName( 'head' )[ 0 ];
    const scriptElementToInject = document.createElement( 'script' );

    scriptElementToInject.src = chrome.extension.getURL( 'modules/com_macys/js/push-state.js' );
    headElement.appendChild( scriptElementToInject );
  }
} )();
