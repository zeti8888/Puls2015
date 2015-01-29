var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$button = $('#mostrar-form'),
	$list = $('#contenido'),
	$post = $('.item').first();

function mostrarFormulario(){
	$form.slideToggle();
	$list.slideToggle();
	return false;
}

function agregarPost(){
	var url = $url.val(),
		titulo = $titulo.val(),
		$clone = $post.clone();

	$clone.find('.titulo_item a')
		.text(titulo)
		.attr('href', url);

	$clone.hide();

	$list.prepend($clone);

	$clone.fadeIn();

	$('#titulo').val("");
	$('#url').val("");
	$list.slideToggle();
	$form.slideToggle();
	return false;
}
// Eventos
$button.click( function(){
	if(!$('#publicar_nav a').hasClass('disabled'))
	{
		mostrarFormulario();
	};
});
$form.on('submit', agregarPost );