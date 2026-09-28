/* =========================================================
   BRENDA & ALEJANDRO — INVITACIÓN
   JAVASCRIPT COMPLETO
   ========================================================= */


/* =========================================================
   ELEMENTOS
   ========================================================= */

const boton =
    document.getElementById("abrirBtn");

const inicio =
    document.getElementById("inicio");

const transicion =
    document.getElementById("transicion");

const invitacion =
    document.getElementById("invitacion");

const estrellas =
    document.getElementById("estrellas");


/* =========================================================
   CONFIGURACIÓN
   ========================================================= */


/*
   DURACIÓN DE LA TRANSICIÓN

   5500 = 5,5 segundos
   4000 = 4 segundos
   7000 = 7 segundos
*/

const DURACION_TRANSICION =
    5500;


/*
   CANTIDAD DE ESTRELLAS INICIALES
*/

const ESTRELLAS_INICIALES =
    120;


/*
   FRECUENCIA DE NUEVAS ESTRELLAS
*/

const INTERVALO_ESTRELLAS =
    100;


/*
   =========================================================
   FECHA REAL DE LA BODA
   =========================================================

   19 de octubre de 2026
   11:10 AM
*/

const FECHA_BODA =
    new Date("2026-10-19T11:10:00");


/* =========================================================
   VARIABLES
   ========================================================= */

let intervaloEstrellas =
    null;

let invitacionAbierta =
    false;


/* =========================================================
   BLOQUEAR SCROLL
   ========================================================= */

document.body.style.overflow =
    "hidden";


/* =========================================================
   CREAR ESTRELLA
   ========================================================= */

function crearEstrella() {

    if (!estrellas) {
        return;
    }


    const estrella =
        document.createElement("span");


    estrella.classList.add(
        "estrella"
    );


    /*
       Algunas estrellas serán más grandes.
    */

    if (Math.random() > 0.88) {

        estrella.classList.add(
            "grande"
        );

    }


    /*
       POSICIÓN HORIZONTAL
    */

    estrella.style.left =
        Math.random() * 100 + "%";


    /*
       POSICIÓN VERTICAL INICIAL
    */

    estrella.style.top =
        (-Math.random() * 20) + "%";


    /*
       TAMAÑO
    */

    const tamano =
        Math.random() * 2 + 2;


    estrella.style.width =
        tamano + "px";


    estrella.style.height =
        tamano + "px";


    /*
       VELOCIDAD DE CAÍDA
    */

    const duracionCaida =
        Math.random() * 3 + 3;


    /*
       VELOCIDAD DEL BRILLO
    */

    const duracionBrillo =
        Math.random() * 2 + 1.5;


    estrella.style.animationDuration =
        duracionCaida + "s, " +
        duracionBrillo + "s";


    /*
       RETRASO
    */

    const retraso =
        Math.random() * 2;


    estrella.style.animationDelay =
        retraso + "s, " +
        Math.random() * 2 + "s";


    /*
       AGREGAR AL CONTENEDOR
    */

    estrellas.appendChild(
        estrella
    );


    /*
       ELIMINAR CUANDO TERMINA
    */

    setTimeout(() => {

        if (estrella.parentNode) {

            estrella.remove();

        }

    }, (duracionCaida + retraso + 1) * 1000);

}


/* =========================================================
   LIMPIAR ESTRELLAS
   ========================================================= */

function limpiarEstrellas() {

    if (!estrellas) {
        return;
    }


    estrellas.innerHTML =
        "";


    if (intervaloEstrellas) {

        clearInterval(
            intervaloEstrellas
        );

        intervaloEstrellas =
            null;
    }

}


/* =========================================================
   INICIAR LLUVIA DE ESTRELLAS
   ========================================================= */

function iniciarLluvia() {

    limpiarEstrellas();


    /*
       CREAR ESTRELLAS INICIALES
    */

    for (
        let i = 0;
        i < ESTRELLAS_INICIALES;
        i++
    ) {

        setTimeout(
            () => crearEstrella(),
            i * 35
        );

    }


    /*
       CREAR NUEVAS ESTRELLAS
    */

    intervaloEstrellas =
        setInterval(
            () => crearEstrella(),
            INTERVALO_ESTRELLAS
        );

}


/* =========================================================
   MOSTRAR TRANSICIÓN
   ========================================================= */

function mostrarTransicion() {

    if (!transicion) {
        return;
    }


    transicion.classList.add(
        "visible"
    );


    transicion.classList.add(
        "activa"
    );

}


/* =========================================================
   OCULTAR TRANSICIÓN
   ========================================================= */

function ocultarTransicion() {

    if (!transicion) {
        return;
    }


    transicion.classList.remove(
        "visible"
    );


    transicion.classList.remove(
        "activa"
    );

}


/* =========================================================
   MOSTRAR INVITACIÓN
   ========================================================= */

function mostrarInvitacion() {

    if (!invitacion) {
        return;
    }


    /*
       MOSTRAR INVITACIÓN
    */

    invitacion.classList.add(
        "visible"
    );


    /*
       PERMITIR SCROLL
    */

    document.body.style.overflow =
        "auto";


    /*
       DETENER ESTRELLAS
    */

    limpiarEstrellas();


    /*
       OCULTAR PORTADA
    */

    if (inicio) {

        inicio.classList.add(
            "oculta"
        );

    }

}


/* =========================================================
   ABRIR INVITACIÓN
   ========================================================= */

function abrirInvitacion() {

    /*
       EVITAR DOBLE EJECUCIÓN
    */

    if (invitacionAbierta) {
        return;
    }


    invitacionAbierta =
        true;


    /*
       DESACTIVAR BOTÓN
    */

    if (boton) {

        boton.disabled =
            true;

    }


    /*
       OCULTAR PORTADA
    */

    if (inicio) {

        inicio.classList.add(
            "oculta"
        );

    }


    /*
       MOSTRAR TRANSICIÓN
    */

    mostrarTransicion();


    /*
       INICIAR ESTRELLAS
    */

    iniciarLluvia();


    /*
       DESPUÉS DE LA TRANSICIÓN,
       MOSTRAR LA INVITACIÓN
    */

    setTimeout(() => {

        ocultarTransicion();

        mostrarInvitacion();

    }, DURACION_TRANSICION);

}


/* =========================================================
   EVENTO BOTÓN
   ========================================================= */

if (boton) {

    boton.addEventListener(
        "click",
        abrirInvitacion
    );

}


/* =========================================================
   CUENTA REGRESIVA
   ========================================================= */

function actualizarCuentaRegresiva() {

    const daysElement =
        document.getElementById("days");


    const hoursElement =
        document.getElementById("hours");


    const minutesElement =
        document.getElementById("minutes");


    const secondsElement =
        document.getElementById("seconds");


    const mensaje =
        document.getElementById(
            "countdown-message"
        );


    /*
       VERIFICAR ELEMENTOS
    */

    if (
        !daysElement ||
        !hoursElement ||
        !minutesElement ||
        !secondsElement
    ) {

        return;

    }


    /*
       FECHA ACTUAL
    */

    const ahora =
        new Date();


    /*
       DIFERENCIA
    */

    const diferencia =
        FECHA_BODA.getTime() -
        ahora.getTime();


    /* =====================================================
       SI YA LLEGÓ EL DÍA
       ===================================================== */

    if (diferencia <= 0) {

        daysElement.textContent =
            "00";


        hoursElement.textContent =
            "00";


        minutesElement.textContent =
            "00";


        secondsElement.textContent =
            "00";


        if (mensaje) {

            mensaje.textContent =
                "¡Hoy comienza nuestra historia! ♡";

        }


        return;

    }


    /* =====================================================
       DÍAS
       ===================================================== */

    const dias =
        Math.floor(
            diferencia /
            (1000 * 60 * 60 * 24)
        );


    /* =====================================================
       HORAS
       ===================================================== */

    const horas =
        Math.floor(
            (
                diferencia /
                (1000 * 60 * 60)
            ) % 24
        );


    /* =====================================================
       MINUTOS
       ===================================================== */

    const minutos =
        Math.floor(
            (
                diferencia /
                (1000 * 60)
            ) % 60
        );


    /* =====================================================
       SEGUNDOS
       ===================================================== */

    const segundos =
        Math.floor(
            (
                diferencia /
                1000
            ) % 60
        );


    /* =====================================================
       MOSTRAR RESULTADOS
       ===================================================== */

    daysElement.textContent =
        String(dias).padStart(
            2,
            "0"
        );


    hoursElement.textContent =
        String(horas).padStart(
            2,
            "0"
        );


    minutesElement.textContent =
        String(minutos).padStart(
            2,
            "0"
        );


    secondsElement.textContent =
        String(segundos).padStart(
            2,
            "0"
        );


    /* =====================================================
       MENSAJE
       ===================================================== */

    if (mensaje) {

        mensaje.textContent =
            "¡Cada vez falta menos para celebrar juntos! ♡";

    }

}


/* =========================================================
   INICIAR CUENTA REGRESIVA
   ========================================================= */

actualizarCuentaRegresiva();


setInterval(
    actualizarCuentaRegresiva,
    1000
);


/* =========================================================
   ENLACES INTERNOS
   ========================================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(enlace => {

        enlace.addEventListener(
            "click",
            function(evento) {

                const destino =
                    this.getAttribute(
                        "href"
                    );


                /*
                   IGNORAR #
                */

                if (
                    !destino ||
                    destino === "#"
                ) {

                    return;

                }


                /*
                   BUSCAR DESTINO
                */

                const elemento =
                    document.querySelector(
                        destino
                    );


                if (!elemento) {

                    return;

                }


                /*
                   EVITAR SALTO BRUSCO
                */

                evento.preventDefault();


                /*
                   SCROLL SUAVE
                */

                elemento.scrollIntoView({

                    behavior:
                        "smooth",

                    block:
                        "start"

                });

            }
        );

    });


/* =========================================================
   REDUCIR MOVIMIENTO
   ========================================================= */

const reducirMovimiento =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );


if (reducirMovimiento.matches) {

    document.documentElement.style
        .scrollBehavior =
        "auto";

}