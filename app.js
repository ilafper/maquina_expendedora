$(document).ready(function () {
    // Funcionalidad del teclado en pantalla
    $('.tecla').on('click', function () {
        const valor = $(this).text();

        if ($(this).hasClass('borrar')) {
            let actual = $('#pantalla').val();
            $('#pantalla').val(actual.slice(0, -1));
        } else if ($(this).hasClass('limpiar')) {
            $('#pantalla').val('');
        } else {
            $('#pantalla').val($('#pantalla').val() + valor);
        }
    });
    //tablero de los productos.
    

});


