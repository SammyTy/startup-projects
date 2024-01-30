let navOpen = document.querySelector('.navIcons');
let  isNavOpen = document.querySelector('.navbar');
let closeNav = document.querySelector('.close')
navOpen?.addEventListener('click',  () => {
    console.log('hello world ');
    isNavOpen.style.left = 0;
});
//sideBar Close Navbar when click on the "x" icon or outside of it
closeNav?.addEventListener("click", function() {
    isNavOpen.style.left = "-100%";
    hideLay()
});
// /////////// overlay fuctionallity //
let overlay = document.querySelector('.overlays');
const showLay = () => {
    overlay.classList.add('fadeIn')
    overlay.style.display ='block'
}
const hideLay = () => {
    overlay.style.display ='none'
}
    overlay?.addEventListener('click', function () {
        isNavTop.style.top = "-300px"
        hideLay()
    }) 

// 