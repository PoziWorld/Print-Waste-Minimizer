// Loop through titles to check if there is a Hazmat Label
var
    $titles           = document.getElementsByTagName( 'h3' )
  , intL              = $titles.length
  , boolFound         = false
  , strFoundClass     = 'pwmExtensionHazmatLabelFound'
  , strNotFoundClass  = 'pwmExtensionHazmatLabelNotFound'
  , strClass          = strNotFoundClass
  ;

for ( var intI = intL - 1; intI >= 0; intI-- ) {
  if ( $titles[ intI ].innerText === 'Hazmat Label' ) {
    boolFound = true;
    break;
  }
}

if ( boolFound ) {
  strClass = strFoundClass
}

document.body.classList.add( strActiveClass, strClass );
