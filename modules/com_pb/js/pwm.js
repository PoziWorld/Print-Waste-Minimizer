// Do not run for frames
if ( document.activeElement.nodeName == 'FRAMESET' ) {
  // Append the Toggle to the page
  document.firstChild.appendChild( $toggle );

  $toggle.onclick = function() {
    if ( ! $topFrameDoc || ! $extraFrameDoc ) {
      var
          $topFrameDoc    = topFrame.document.body
        , $extraFrameDoc  = extraFrame.document.body
        ;
    }

    $topFrameDoc.classList.toggle( strActiveClass );
    $extraFrameDoc.classList.toggle( strActiveClass );
  };
}
