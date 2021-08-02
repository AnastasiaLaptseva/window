//меню бургер

document.querySelector('.menu-icon').addEventListener('click', function(){
    document.querySelector('.menu-icon span').classList.toggle('active');
    document.querySelector('.nav__menu').classList.toggle("animate");
    document.body.classList.toggle("_lock"); 
  });

  // кнопка наверх
  $(document).ready(function() { 
    var button = $('.button-up');	
    $(window).scroll (function () {
      if ($(this).scrollTop () > 300) {
        button.fadeIn();
      } else {
        button.fadeOut();
      }
  });	 
  button.on('click', function(){
  $('body, html').animate({
  scrollTop: 0
  }, 800);
  return false;
  });		 
  });

// модальное окно для галереи 
  $('[data-fancybox="images"]').fancybox({
afterLoad : function(instance, current) {
var pixelRatio = window.devicePixelRatio || 1;

if ( pixelRatio > 1.5 ) {
current.width  = current.width  / pixelRatio;
current.height = current.height / pixelRatio;
}
}
});

// таб меню для страницы продукция
let tab = function() {
  let tabNav = document.querySelectorAll(".tabs-nav__item"),
  tabContent = document.querySelectorAll(".tab"),
  tabName;

  tabNav.forEach(item=> {
      item.addEventListener( "click", selectTabNav)
  })
  function selectTabNav() {
      tabNav.forEach( item=> {
          item.classList.remove("is-activ");
      });
      this.classList.add("is-activ");
      tabName = this.getAttribute("data-tab-name");
      selectTabContent(tabName);
  }
  function selectTabContent(tabName){
      tabContent.forEach(item=>{
          item.classList.contains(tabName) ? item.classList.add("is-activ") : item.classList.remove("is-activ");
      })
  }
};

tab();
