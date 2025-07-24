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
    let productos = [
        [
            { valor: "A1", nombre: "tartaA1", precio: 1 },
            { valor: "A1", nombre: "tartaA1", precio: 1 },
            { valor: "A1", nombre: "tartaA1", precio: 1 },
            { valor: "A1", nombre: "tartaA1", precio: 1 },
        ],
        [
            { valor: "A2", nombre: "tartaA2", precio: 2 },
            { valor: "A2", nombre: "tartaA2", precio: 2 },
            { valor: "A2", nombre: "tartaA2", precio: 2 }
        ],
        [
            { valor: "A3", nombre: "tartaA3", precio: 3 },
            { valor: "A3", nombre: "tartaA3", precio: 3 },
            { valor: "A3", nombre: "tartaA3", precio: 3 }
        ],
        [
            { valor: "B1", nombre: "tartaB1", precio: 4 },
            { valor: "B1", nombre: "tartaB1", precio: 4 },
            { valor: "B1", nombre: "tartaB1", precio: 4 }
        ],
        [
            { valor: "B2", nombre: "tartaB2", precio: 5 },
            { valor: "B2", nombre: "tartaB2", precio: 5 },
            { valor: "B2", nombre: "tartaB2", precio: 5 }
        ],
        [
            { valor: "B3", nombre: "tartaB3", precio: 6 },
            { valor: "B3", nombre: "tartaB3", precio: 6 },
            { valor: "B3", nombre: "tartaB3", precio: 6 }
        ],
        [
            { valor: "C1", nombre: "tartaC1", precio: 7 },
            { valor: "C1", nombre: "tartaC1", precio: 7 },
            { valor: "C1", nombre: "tartaC1", precio: 7 }
        ],
        [
            { valor: "C2", nombre: "tartaC2", precio: 8 },
            { valor: "C2", nombre: "tartaC2", precio: 8 },
            { valor: "C2", nombre: "tartaC2", precio: 8 }
        ],
        [
            { valor: "C3", nombre: "tartaC3", precio: 9 },
            { valor: "C3", nombre: "tartaC3", precio: 9 },
            { valor: "C3", nombre: "tartaC3", precio: 9 }
        ],
        [
            { valor: "D1", nombre: "tartaD1", precio: 10 },
            { valor: "D1", nombre: "tartaD1", precio: 10 },
            { valor: "D1", nombre: "tartaD1", precio: 10 }
        ],
        [
            { valor: "D2", nombre: "tartaD2", precio: 11 },
            { valor: "D2", nombre: "tartaD2", precio: 11 },
            { valor: "D2", nombre: "tartaD2", precio: 11 }
        ],
        [
            { valor: "D3", nombre: "tartaD3", precio: 12 },
            { valor: "D3", nombre: "tartaD3", precio: 12 },
            { valor: "D3", nombre: "tartaD3", precio: 12 }
        ],
        [
            { valor: "E1", nombre: "tartaE1", precio: 13 },
            { valor: "E1", nombre: "tartaE1", precio: 13 },
            { valor: "E1", nombre: "tartaE1", precio: 13 }
        ],
        [
            { valor: "E2", nombre: "tartaE2", precio: 14 },
            { valor: "E2", nombre: "tartaE2", precio: 14 },
            { valor: "E2", nombre: "tartaE2", precio: 14 }
        ],
        [
            { valor: "E3", nombre: "tartaE3", precio: 15 },
            { valor: "E3", nombre: "tartaE3", precio: 15 },
            { valor: "E3", nombre: "tartaE3", precio: 15 }
        ]
    ];
    let totalStock = 0;
    for (let i = 0; i < productos.length; i++) {
       totalStock+=productos[i].length;
        
    }
    console.log("totalStock"+totalStock);
    let totalGanado=0;

    $(".total").html(totalGanado);

    $('.ver').on('click', function () {
        let valorBuscar = $('#pantalla').val().toUpperCase();
        let encontrado = false;
        let mensaje = "";
        for (let i = 0; i < productos.length; i++) {
            for (let index = 0; index < productos[i].length; index++) {
                if (valorBuscar == productos[i][index].valor) {
                    encontrado = true;
                    mensaje = `Precio: ${productos[i][index].precio} €`;
                    $(".titi").html(mensaje);
                }
            }
            if (encontrado) break;
        }

        if (!encontrado) {
            console.log("Producto no encontrado.");
            $(".titi").html(mensaje)
        }
    });

    $('.pagar').on('click', function () {
        let dineroMetido = $('.cash').val(); // convierto a número
        let valorBuscar = $('#pantalla').val().toUpperCase();
        let mensaje = "";
        let mensaje2;
        let encontrado = false;

        for (let i = 0; i < productos.length; i++) {
            for (let index = 0; index < productos[i].length; index++) {
                if (valorBuscar == productos[i][index].valor) {
                    encontrado = true;
                    
                    let precio = productos[i][index].precio;
                    let resultado = dineroMetido - precio;
                    totalGanado+=productos[i][index].precio;
                    console.log("Recaudado"+totalGanado);
                    $(".recaudado").html(totalGanado);
                    if (resultado < 0) {

                        mensaje = `Por favor introduce mas cantidad`;
                        $(".titi").html(mensaje);
                    } else {
                        mensaje = `Cambio: ${resultado}    `;
                        productos[i].splice(index, 1);
                        stock = `Stock: ${productos[i].length}`;

                        if (productos[i].length === 0) {
                            mensaje2 = `Sin existencias`;
                            $(".titi").text(mensaje2);
                            
                        } else {
                            mensaje2 = `${stock}`;
                            $(".titi").text(mensaje+mensaje2);
                        }

                    }
                    break;
                }
            }
            if (encontrado) break;
        }

        if (!encontrado) {
            console.log("Producto no encontrado.");
            $(".titi").html(mensaje)
        }
    });


});


