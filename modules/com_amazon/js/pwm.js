// Loop through titles to check if there is a Hazmat Label
var
    $titles                   = document.getElementsByTagName( 'h3' )
  , intL                      = $titles.length
  , boolHazmatFound           = false
  , strHazmatFoundClass       = 'pwmExtHazmatLabelFound'
  , strHazmatNotFoundClass    = 'pwmExtHazmatLabelNotFound'
  , strHazmatClass            = strHazmatNotFoundClass
  , strSnailMailSectionId     = 'postSendSnailMailSection'
  , strSnailMailFoundClass    = 'pwmExtSnailMailSectionFound'
  , strSnailMailNotFoundClass = 'pwmExtSnailMailSectionNotFound'
  , strSnailMailClass         = strSnailMailFoundClass
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

if ( ! document.contains( document.getElementById( strSnailMailSectionId ) ) ) {
  strSnailMailClass = strSnailMailNotFoundClass;
}

var $pageFirstChild = document.body;

$pageFirstChild.classList.add(
    strActiveClass
  , strHazmatClass
  , strSnailMailClass
);

// Append the Toggle to the page
$pageFirstChild.appendChild( $toggle );

$toggle.onclick = function() {
  $pageFirstChild.classList.toggle( strActiveClass );
};
