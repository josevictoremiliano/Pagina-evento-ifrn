//Verificação JS  ativo no navegado
var root = document.documentElement;
root.className += ' js';
//Animação do botão subir
$(document).ready(function(){
  $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
          $('a[href="#top"]').fadeIn();
      } else {
          $('a[href="#top"]').fadeOut();
      }
  });

  $('a[href="#top"]').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
  });
});
//Animação do scroll
$(document).ready(function(){
  $(window).scroll(function(){
    hash = 0;
      if ($(this).scrollTop() > 100) {
          $('body').animate({
            scrollTop: $(hash).offset()
          }
          ,800,  function(){
            window.location.hash = hash;
          }
          );
      } else {
          $('body').animate(false);
      }
  });
    $("#navbar a").on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
    
          var hash = this.hash;
    
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
       
            window.location.hash = hash;
          });
        }  // End if
      });
});
//Animação dos textos de cada seção

function boxTop(idBox) {
	var boxOffset = $(idBox).offset().top;
	return boxOffset;
}

$(document).ready(function() {
	var $target = $('.animation'),
			animationClass = 'animation-init',
			windowHeight = $(window).height(),
			offset = windowHeight - (windowHeight / 4);

	function animeScroll() {
		var documentTop = $(document).scrollTop();
		$target.each(function() {
			if (documentTop > boxTop(this) - offset) {
        $(this).addClass(animationClass);
//remover else para fazer a animação apenas uma vez!
			} else {
				$(this).removeClass(animationClass);
			}
		});
	}
	animeScroll();

	$(document).scroll(function() {
		setTimeout(function() {animeScroll()}, 150);
	});
});

