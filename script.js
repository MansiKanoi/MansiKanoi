function closeMenu() {
    document.getElementById("navbar-container").style.height="0%"   
}
function openMenu() {
    document.getElementById("navbar-container").style.height="100%"   
}
$(document).ready(function (){
    $(this).yoggleClass('open');
    $('.navbar').yoggleClass('open');

})