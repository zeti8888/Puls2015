var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$button = $('#mostrar-form'),
	$list = $('#contenido'),
	$post = $('.item').first();

if (localStorage.getItem('autosave'))
{
	$titulo.val(sessionStorage.getItem('titulo'));
	$url.val(sessionStorage.getItem('url'));
}

var id = setInterval(function(){
	sessionStorage.setItem('titulo', $titulo.val());
	sessionStorage.setItem('url', $url.val());
}, 1000);

function mostrarOcultarFormulario(){
	$form.slideToggle();
	$list.slideToggle();
}

function agregarPost(evento){
	console.log(evento);
	var url = $url.val(),
		titulo = $titulo.val(),
		clone = $post.clone();

	clone.find('.titulo_item a')
		.text(titulo)
		.attr('href', url);

	clone.hide();

	$list.prepend($clone);
	mostrarOcultarFormulario();
	$titulo.val('');
	$url.val('');
	clone.slideDown();
}
// Eventos
$button.click( function(evento){
	evento.preventDefault();
	console.log(evento);
	if(!$('#publicar_nav a').hasClass('disabled'))
	{
		mostrarOcultarFormulario();
	};
});
$form.on('submit', agregarPost );