var $pageFirstChild = document.body;

// Append the Toggle to the page
$pageFirstChild.appendChild( $toggle );

$toggle.onclick = function() {
  $pageFirstChild.classList.toggle( strActiveClass );
};
