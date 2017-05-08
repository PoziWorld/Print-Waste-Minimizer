( function () {
  'use strict';

  // The Gift Returns form and its fields
  var $giftReturnForm = document.querySelector( '#ir-gift-returns' );
  var arrGiftReturnFormClassList = $giftReturnForm.classList;
  var strGiftReturnFormShownClass = 'pwmExtensionGiftReturnsFormShown';
  var $checkboxes = $giftReturnForm.querySelectorAll( 'input[type="checkbox"]' );
  var intCheckboxesCount = $checkboxes.length;
  var $textInputs = $giftReturnForm.querySelectorAll( 'input:not([type="checkbox"]), textarea' );
  var intTextInputsCount = $textInputs.length;
  var $selects = $giftReturnForm.querySelectorAll( 'select' );
  var intSelectsCount = $selects.length;

  $toggle.addEventListener( 'click', handleClick );

  /**
   * The Toggle click handler (apply styles).
   *
   * @param {Event} objEvent - The event object.
   */

  function handleClick( objEvent ) {
    // Check whether any of the Gift Returns form fields have been changed
    var i;
    var l;

    for ( i = 0, l = intCheckboxesCount; i < l; i++ ) {
      if ( $checkboxes[ i ].checked ) {
        toggleGiftReturnsForm( true );

        return;
      }
    }

    for ( i = 0, l = intTextInputsCount; i < l; i++ ) {
      if ( $textInputs[ i ].value !== '' ) {
        toggleGiftReturnsForm( true );

        return;
      }
    }

    for ( i = 0, l = intSelectsCount; i < l; i++ ) {
      if ( $selects[ i ].value !== '-1' ) {
        toggleGiftReturnsForm( true );

        return;
      }
    }

    toggleGiftReturnsForm( false );
  }

  /**
   * If the Gift Returns form is not used, no need to print it.
   *
   * @param {Boolean} boolShow - Whether the form should be shown.
   */

  function toggleGiftReturnsForm( boolShow ) {
    arrGiftReturnFormClassList.toggle( strGiftReturnFormShownClass, boolShow );
  }
} )();
