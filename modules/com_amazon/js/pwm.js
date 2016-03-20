( function() {
  'use strict';

  // Loop through titles to check if there is a Hazmat Label
  var $titles = document.getElementsByTagName( 'h3' )
    , intL = $titles.length

      // Hazmat
    , boolHazmatFound = false
    , strHazmatFoundClass = 'pwmExtHazmatLabelFound'
    , strHazmatNotFoundClass = 'pwmExtHazmatLabelNotFound'
    , strHazmatClass = strHazmatNotFoundClass

      // Snail mail
    , strSnailMailSectionId = 'postSendSnailMailSection'
    , strSnailMailFoundClass = 'pwmExtSnailMailSectionFound'
    , strSnailMailNotFoundClass = 'pwmExtSnailMailSectionNotFound'
    , strSnailMailClass = strSnailMailFoundClass

      // Multiple packages
    , strMultiplePackagesClass = 'pwmExtMultiplePackagesNotFound'
    , strMultiplePackagesFoundClass = 'pwmExtMultiplePackagesFound'
    , strMultiplePackagesIndicator = 'Package (1/'
    ;

  for ( var intI = intL - 1; intI >= 0; intI-- ) {
    if ( $titles[ intI ].innerText === 'Hazmat Label' ) {
      boolHazmatFound = true;
      break;
    }
  }

  if ( boolHazmatFound ) {
    strHazmatClass = strHazmatFoundClass
  }

  // Check snail mail section presence
  if ( ! document.contains( document.getElementById( strSnailMailSectionId ) ) ) {
    strSnailMailClass = strSnailMailNotFoundClass;
  }

  // Check multiple packages presence
  if ( ~ document.documentElement.textContent.indexOf( strMultiplePackagesIndicator ) ) {
    strMultiplePackagesClass = strMultiplePackagesFoundClass;
  }

  var $pageFirstChild = document.body;

  $pageFirstChild.classList.add(
      strActiveClass
    , strHazmatClass
    , strSnailMailClass
    , strMultiplePackagesClass
  );

  // Append the Toggle to the page
  $pageFirstChild.appendChild( $toggle );

  $toggle.onclick = function() {
    $pageFirstChild.classList.toggle( strActiveClass );
  };
} )();
