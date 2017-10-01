( function() {
  'use strict';

  var $pageFirstChild = document.body;

  const $$elementsToShow = document.querySelectorAll( '#pageContentContainer img:not( [src*="loading"] ), #pageContentContainer table' );

  for ( let i = 0, l = $$elementsToShow.length; i < l; i++ ) {
    const $$elementToWhitelist = $$elementsToShow[ i ].closest( '.a-section' );

    if ( $$elementToWhitelist ) {
      $$elementToWhitelist.classList.add( 'pwmExtensionWhitelisted' );
    }
  }

  // Append the Toggle to the page
  $pageFirstChild.appendChild( $toggle );

  $toggle.onclick = function() {
    $pageFirstChild.classList.toggle( strActiveClass );
  };
} )();
