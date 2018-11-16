( function() {
  'use strict';

  const PAGE_CONTENT_CONTAINER_ID = 'pageContentContainer';
  const ELEMENTS_TO_PRINT_SELECTOR = '#' + PAGE_CONTENT_CONTAINER_ID + ' img:not( [src*="loading"] ), #' + PAGE_CONTENT_CONTAINER_ID + ' table';
  const CONTENT_SECTION_CONTAINER_SELECTOR = '.a-section';
  const ELEMENTS_TO_PRINT_CLASS = 'pwmExtensionWhitelisted';
  const $$pageFirstChild = document.body;
  const $$toggle = window.$toggle;

  init();

  /**
   * Initialize the page logic.
   */

  function init() {
    whitelistElements();
    showToggle();
  }

  /**
   * Find the elements that need to be printed and make sure they don't get hidden when everything else does.
   */

  function whitelistElements() {
    const $$elementsToPrint = document.querySelectorAll( ELEMENTS_TO_PRINT_SELECTOR );

    for ( let i = 0, l = $$elementsToPrint.length; i < l; i++ ) {
      const $$elementToShow = $$elementsToPrint[ i ];
      let $$elementToWhitelist = $$elementToShow.closest( CONTENT_SECTION_CONTAINER_SELECTOR );

      whitelistElement( $$elementToShow );

      while ( $$elementToWhitelist ) {
        const $$parent = $$elementToWhitelist.parentElement;

        if ( didReachRootNode( $$elementToWhitelist ) || didReachRootNode( $$parent ) ) {
          break;
        }

        whitelistElement( $$elementToWhitelist );
        $$elementToWhitelist = $$parent;
      }
    }
  }

  /**
   * Make sure an element that needs to be printed doesn't get hidden when everything else does.
   *
   * @param {Element} $$element
   */

  function whitelistElement( $$element ) {
    $$element.classList.add( ELEMENTS_TO_PRINT_CLASS );
  }

  /**
   * When looping through the parents of the elements that need to be printed, stop when the main page content container is reached.
   *
   * @param {Element} $$element
   * @return {boolean}
   */

  function didReachRootNode( $$element ) {
    return $$element && $$element.id === PAGE_CONTENT_CONTAINER_ID;
  }
  
  /**
   * Add the Print Waste Minimizer toggle to the page.
   */

  function showToggle() {
    $$toggle.addEventListener( 'click', togglePrintWasteMinimization );
    $$pageFirstChild.appendChild( $$toggle );
  }

  /**
   * Show/hide print junk (something that would get printed even though it's not required).
   */

  function togglePrintWasteMinimization() {
    $$pageFirstChild.classList.toggle( strActiveClass );
  }
} )();
