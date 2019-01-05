/**
 * Content scripts are unable to access any variables or functions created by a page.
 * Override native window.history.pushState to allow for detection of URL changes for extension needs.
 * Based on https://stackoverflow.com/a/9651737
 */

window.history.pushState = ( function ( nativePushState ) {
    return function ( state, title, url ) {
        document.body.classList.toggle( 'pwmTargetUrl', url.includes( '/my-orders/returns/confirmation' ) );

        nativePushState.apply( this, arguments );
    };
} )( window.history.pushState );
