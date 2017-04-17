( function () {
  'use strict';

  var $pageFirstChild = document.body;

  // Append the Toggle to the page
  $pageFirstChild.appendChild( $toggle );

  $toggle.addEventListener( 'click', handleClick );

  /**
   * The Toggle click handler (apply styles).
   *
   * @param {Event} objEvent - The event object.
   */

  function handleClick( objEvent ) {
    objEvent.preventDefault();
    $pageFirstChild.classList.toggle( strActiveClass );
  }
} )();
