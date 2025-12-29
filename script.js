
document.addEventListener("DOMContentLoaded", () => {
    const logo = document.getElementById("logoInicio");
    const robot = document.getElementById("robotInicio");

    window.addEventListener("scroll", () => {
        const logoTop = logo.getBoundingClientRect().top;

        if (logoTop <= 120) {
            robot.classList.add("visible");
        }
    });
})

















/*===========================================================
ANIMACION FADE-IN/SLIDE-UP (Aparicion de elementos desde abajo)
============================================================*/

document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelectorAll(".anim-fade-up");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                if (entry.boundingClientRect.bottom > window.innerHeight) {
                    entry.target.classList.remove("visible");
                }
            }
        })
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -60px 0px'
    });

    element.forEach(elem => {
        observer.observe(elem);
    })
})
/*==================== FIN FADE-IN/SLIDE-UP ===================*/









document.addEventListener("scroll", actualizarRecorte);
window.addEventListener("resize", actualizarRecorte);

function actualizarRecorte() {
    const img = document.querySelector(".slogan-robot__robot > img");
    const scrollY = window.scrollY;
    const startScroll = 260; // Cuándo empieza el efecto

    // Tamaño dinámico basado en la pantalla
    let baseDerecha = window.innerWidth * 0.325;  // 12% del ancho
    let baseIzquierda = window.innerWidth * 0.325; // 10% del ancho

    if (scrollY > startScroll) {
        let progress = scrollY - startScroll;
        let recorteDerecha = Math.max(baseDerecha - progress / 2, 0);
        let recorteIzquierda = Math.max(baseIzquierda - progress / 2, 0);
        img.style.clipPath = `inset(0 ${recorteDerecha}px 0 ${recorteIzquierda}px round 30px)`;
    } else {
        img.style.clipPath = `inset(0 ${baseDerecha}px 0 ${baseIzquierda}px round 30px)`;
    }
};




/*=================================================================
CONTADOR AUTOMATICO DE NUM SHOWS Y PUBLICO TOTAL (SECCION "INICIO")
==================================================================*/

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter-item__number');

  // Creo el observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contarHasta(entry.target);        // cuando entra en pantalla, cuenta
                observer.unobserve(entry.target); // deja de observarlo (para que no vuelva a contar)
            }
        });
    }, {
    threshold: 0.5 // cuando el 50% del elemento está visible
    });

  // Observar cada número
    counters.forEach(counter => {
        observer.observe(counter);
    });

  // Conteo animado
    function contarHasta(elemento) {
        const numeroFinal = parseInt(elemento.dataset.numero);
        let actual = 0;
        const duracion = 1400; // en milisegundos
        const intervalito = 10; // cada cuánto se actualiza
        const totalPasos = duracion / intervalito;
        let pasoActual = 0;

        const intervalo = setInterval(() => {
            pasoActual++;
            // easing cúbico suave: arranca rápido, frena al final
            const progreso = pasoActual / totalPasos;
            const easing = 1 - Math.pow(1 - progreso, 3.5); // Modificar el ultimo num para cambiar lentitud al final
            actual = Math.floor(numeroFinal * easing);

            if (actual >= numeroFinal || pasoActual >= totalPasos) {
                actual = numeroFinal;
                clearInterval(intervalo);
            }
            elemento.textContent = `+${actual.toLocaleString('es-AR')}`;
        }, intervalito);
    }
})

/* =========================== FIN CONTADOR =========================== */











document.addEventListener("scroll", () => {
    const contenedorAnimado = document.querySelector(".img-video-animation-container");
    const contenedor = document.querySelector(".shows__img-description-container");

    const rect = contenedor.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    // Desde 0 hasta -105vh (que es -1.05 * viewportHeight)
    const start = 0;
    const end = -1 * viewportHeight;
    const total = start - end;
    // Calculamos el progreso (cuánto bajó el top del contenedor)
    const progreso = (start - rect.top) / total;
    const clamped = Math.max(0, Math.min(1, progreso));
    // Escala interpolada de 3.2 a 1
    const escala = 3.7 - (3.7 - 1) * clamped;

    contenedorAnimado.style.transform = `scale(${escala})`;
});

document.addEventListener("scroll", () => {
    const img = document.querySelector(".img-description__img img");
    const texto = document.querySelector(".img-description__text > h3");
    const contenedor = document.querySelector(".shows__img-description-container");

    const rect = contenedor.getBoundingClientRect();
    const start = 30; // margen superior desde donde empieza el efecto
    const end = 200; // margen inferior donde termina el efecto
    const scrollPos = Math.max(0, Math.min((rect.top - start) * -1, end - start));
    const progress = scrollPos / (end - start); // entre 0 y 1

    // Aplicar opacidades basadas en el progreso
    texto.style.opacity = Math.max(0, 1 - progress);
    img.style.opacity = 0.6 + 0.4 * progress;
});







document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector('.video-show-animation');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play().catch(err => {
                    console.log("Error al reproducir video:", err);
                });
            } else {
                video.pause();
            }
        });
    },
    {
        threshold: 0.1
    });

    observer.observe(video);
});









/* Texto verde de Testimonios ("espectáculo"). Agrega la clase "visible" que contiene animación CSS. */



document.addEventListener('DOMContentLoaded', () => {
    const texto = document.querySelector('.text-green');
    const observador = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            texto.classList.add('visible');
        };
    }, {
        threshold: 0,
    });

    observador.observe(texto);
});


















/* BOTONES SHOW/EMPRENDER DEL FORMULARIO PRESUPUESTO 
    Hacen visible una seccion y ocultan otra. */

const btnShow = document.getElementById("btnShow")
const btnEmprender = document.getElementById("btnEmprender")
const formShow = document.getElementById("formShow")
const formEmprender = document.getElementById("formEmprender")

btnShow.addEventListener("click", () => {
    btnShow.classList.add("activo");
    btnEmprender.classList.remove("activo");

    formShow.classList.remove("oculto");
    formEmprender.classList.add("oculto");
})

btnEmprender.addEventListener("click", () => {
    btnEmprender.classList.add("activo");
    btnShow.classList.remove("activo");

    formEmprender.classList.remove("oculto");
    formShow.classList.add("oculto");
})






/*============================================================
    BOTONES COTIZA(Todos) / QUIERO EMPRENDER(de "emprender")
=============================================================*/

const presupuestoBox = document.getElementById("presupuesto__box")
// CAMBIAR A "SHOW" DE FORMULARIO AL TOCAR CUALQUIERO BOTON DE "Cotizá tu presupuesto".
const buttonBudget = document.querySelectorAll(".button-budget, #btnHamburgerCotiza")

buttonBudget.forEach((boton) => {
    boton.addEventListener("click", () => {
        btnShow.click();
        presupuestoBox.scrollIntoView({ behavior: "smooth" });
    });
});


/* BOTON "QUIERO EMPRENDER" DE SECCION "EMPRENDE" */
const btnIrAEmprender = document.getElementById("btnIrAEmprender")

btnIrAEmprender.addEventListener("click", () => {
    btnEmprender.click();
    presupuestoBox.scrollIntoView({ behavior: "smooth" });
});






/* Menú hamburguesa del NAV. Efectos del boton, opacidad del menu y el logo */
const btnHamburger = document.getElementById("btnHamburger");
const menuHamburger = document.getElementById("menuHamburger");
const logoNav = document.getElementById("logoNav")

btnHamburger.addEventListener("click", () => {
    btnHamburger.classList.toggle("open");
    menuHamburger.classList.toggle("activo");
    logoNav.classList.toggle("opacar");
    document.body.classList.toggle("noScroll")
});



/*============================================================
    BOTONES DEL MENÚ HAMBURGUESA
=============================================================*/

// Seleccion de botones
const btnHamburgerInicio = document.getElementById("btnHamburgerInicio")
const btnHamburgerShows = document.getElementById("btnHamburgerShows")
const btnHamburgerTestimonos = document.getElementById("btnHamburgertestimonios")
const btnHamburgerEmprende = document.getElementById("btnHamburgerEmprende")
const btnHamburgerGaleria = document.getElementById("btnHamburgerGaleria")
const btnHamburgerCotiza = document.getElementById("btnHamburgerCotiza")
// Redireccion a...
const sectionInicio = document.getElementById("inicio")
const sectionShows = document.getElementById("shows")
const sectionTestimonios = document.getElementById("testimonios")
const sectionEmprende = document.getElementById("emprende")
const sectionGaleria = document.getElementById("") //Falta galeria
const sectionCotiza = document.getElementById("presupuesto__box")
// Funcion de cerrar el menu y redirigir
function irASeccion(seccion) {
    seccion.scrollIntoView({ behavior: "smooth"});
    btnHamburger.click();
}
//Eventos de clicks
btnHamburgerInicio.addEventListener("click", () => { irASeccion(sectionInicio) })
btnHamburgerShows.addEventListener("click", () => { irASeccion(sectionShows) })
btnHamburgerTestimonios.addEventListener("click", () => { irASeccion(sectionTestimonios) })
btnHamburgerEmprende.addEventListener("click", () => { irASeccion(sectionEmprende) })

btnHamburgerCotiza.addEventListener("click", () => { irASeccion(sectionCotiza) })





/*============================================================
==============================================================
    SECCION TESTIMONIOS
==============================================================



============================================================
    VIDEOS TESTIMONIOS (ACTIVACION CUANDO ENTRAN EN PANTALLA)
=============================================================*/

const testimoniosVideos = document.querySelectorAll(".video-box__video > video");
const videosObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) {
            video.play();
        } else {
            video.pause();
            
        }
    });
}, {
    root: null,
    threshold: 0.8
});
testimoniosVideos.forEach(vid => { videosObserver.observe(vid) });


testimoniosVideos.forEach(video => {
    const poster = video
        .closest(".video-box__video")
        .querySelector(".video-poster");

    const checkTime = () => {
        if (video.currentTime >= 0.3) {
            poster.style.opacity = "0";
            setTimeout(() => poster.remove(), 300);
            video.removeEventListener("timeupdate", checkTime);
        }
    };

    video.addEventListener("timeupdate", checkTime);
});


/*============================================================
    BOTON SONIDO/SILENCIO
=============================================================*/
document.addEventListener("DOMContentLoaded", () => {
    const videoBoxes = document.querySelectorAll(".video-box__video");
    
    videoBoxes.forEach(videoBox => {
        const video = videoBox.querySelector("video");
        const btnMuteVolume = videoBox.querySelector(".btn-sonido");
        const svgMute = btnMuteVolume.querySelector(".svg-mute");
        const svgVolume = btnMuteVolume.querySelector(".svg-volume");
/* El icono inicial depende de la condicion inicial de sonido o muted del video, declarado en el HTML */
        svgMute.classList.toggle("oculto", !video.muted);
        svgVolume.classList.toggle("oculto", video.muted);
/* Agrego la funcion de mutear o desmutear al boton */
        btnMuteVolume.addEventListener("click", () => {
            if(video.muted) {
                video.muted = false;
                svgMute.classList.add("oculto");
                svgVolume.classList.remove("oculto");
            } else {
                video.muted = true;
                svgMute.classList.remove("oculto");
                svgVolume.classList.add("oculto");
            };
        });
    });
})













/* ================================================
FORMULARIO => SUMA DE SERVICIOS => PRECIO ESTIMADO
===================================================*/

document.addEventListener("DOMContentLoaded", () => {
    const totalPrice = document.getElementById("totalPrice");

    function calcularPrecio() { //"presupuestoBox es la caja de todo el formulario, declarado antes."
        const inputsSelect = presupuestoBox.querySelectorAll('input[type="radio"][data-price]:checked, input[type="checkbox"][data-price]:checked');
        let total = 0;
        inputsSelect.forEach(input => {
            const precioInputSelect = input.dataset.price;
            const precioInputSelectNum = parseFloat(precioInputSelect);
            if (!isNaN(precioInputSelectNum)) {
                total += precioInputSelectNum;
            };
        });
        return total;
    };

    //Agrego change a todos los inputs que pueden seleccionarse, para cambiar el precio total cada vez q un boton se selecciona
    const inputsAll = presupuestoBox.querySelectorAll('input[type="checkbox"][data-price], input[type="radio"][data-price]');
    
    inputsAll.forEach(input => {
        input.addEventListener('change', () => {
            const nuevoTotal = calcularPrecio();
            totalPrice.textContent = "$" + nuevoTotal.toLocaleString('es-AR');
        });
    });

    totalPrice.textContent = "$" + calcularPrecio().toLocaleString('es-AR');
});







/* ================================================
FORMULARIO => OPACIDAD EN OPCIONES AL AVANZAR
===================================================*/

document.addEventListener("DOMContentLoaded", () => {
    const box1 = document.getElementById("presupuesto__box-opacity-1");
    const box2 = document.getElementById("presupuesto__box-opacity-2")
    const checksEvento = document.querySelectorAll('input[name="tipo-evento"]');
    const checksRobots = document.querySelectorAll('input[name="cantidad-robots"]');

    checksEvento.forEach(check => {
        check.addEventListener('change', () => {
            Array.from(checksEvento).some(check => {
                if (check.checked) {
                    box1.classList.remove("box-opacar");
                }
            });
        })
    });
    checksRobots.forEach(check => {
        check.addEventListener('change', () => {
            Array.from(checksRobots).some(check => {
                if (check.checked) {
                    box2.classList.remove("box-opacar");
                };
            });
        });
    });
    
});







document.getElementById("btnEnviarWsp").addEventListener("click", function () {
    const numero = "5491135152227";

    // ───────── CONFIG WEB ─────────
    const DESCUENTO_WEB = 0.10; // 10%
    const codigoWeb = "WEB-ASL-2026";
    // ──────────────────────────────

    // Evento
    const eventoSeleccionado = document.querySelector('input[name="tipo-evento"]:checked');
    let tipoEvento = eventoSeleccionado?.value || "";
    if (tipoEvento.toLowerCase() === "otro") {
        const otroInput = document.querySelector(".otro-evento__input");
        tipoEvento = otroInput?.value?.trim() || "Otro (sin especificar)";
    }

    // Robots + incluye
    const robotsSeleccionados = Array.from(
        document.querySelectorAll('input[name="cantidad-robots"]:checked')
    )
        .map(el => el.value)
        .join(", ") +
        "\nIncluye:\n- Cuadro LED\n- Limbo LED\n- Alas LED\n- Pechera LED";

    // Adicionales
    const adicionalesSeleccionados = Array.from(
        document.querySelectorAll('input[name="servicios-adicionales"]:checked')
    )
        .map(el => `• ${el.value.replace("-", " ")}`)
        .join("\n");

    // Fecha
    const rawFecha = document.getElementById("presupuesto__fecha").value;
    let fechaFormateada = "";

    if (rawFecha) {
        const fechaObj = new Date(rawFecha + "T00:00:00");
        const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        const diaSemana = diasSemana[fechaObj.getDay()];

        const dia = String(fechaObj.getDate()).padStart(2, "0");
        const mes = String(fechaObj.getMonth() + 1).padStart(2, "0");
        const año = fechaObj.getFullYear();

        fechaFormateada = `${diaSemana} ${dia}/${mes}/${año}`;
    }

    // Idea
    const idea = document.getElementById("presupuesto__textarea").value.trim();

    // Precio
    const precioTexto = document.getElementById("totalPrice").textContent.trim();
    const precioNumerico = Number(precioTexto.replace(/[^\d]/g, ""));
    const descuentoAplicado = Math.round(precioNumerico * DESCUENTO_WEB);
    const precioFinal = precioNumerico - descuentoAplicado;

    // ───────── MENSAJE ─────────
    let mensaje = `*¡Hola Seba! Generé este presupuesto desde tu página web para un show LED:*\n\n`;

    mensaje += `\u{1F4C5} *Evento:* ${tipoEvento || "No especificado"}\n`;
    mensaje += `───────────────\n`;

    mensaje += `\u{1F916} *Robots:* ${robotsSeleccionados}\n`;
    mensaje += `───────────────\n`;

    mensaje += `\u2728 *Adicionales:*\n${adicionalesSeleccionados || "• Ninguno"}\n`;
    mensaje += `───────────────\n`;

    if (fechaFormateada) {
        mensaje += `\u{1F4C6} *Fecha:* ${fechaFormateada}\n`;
        mensaje += `───────────────\n`;
    }

    if (idea) {
        mensaje += `\u{1F4DD} *Mi idea:*\n"${idea}"\n`;
        mensaje += `───────────────\n`;
    }
/*
    // 🎁 DESCUENTO WEB
    mensaje += `\u{1F381} *Beneficio por reserva desde la web*\n`;
    mensaje += `Descuento aplicado: 10%\n`;
    mensaje += `Código: ${codigoWeb}\n`;
    mensaje += `───────────────\n`;
*/
    // 💰 PRECIOS
    mensaje += `\u{1F4B0} *PRECIO ESTIMADO:`; 
    /*
    mensaje += `Precio base: ${precioTexto}\n`;
    mensaje += `Descuento web (-10%): $${descuentoAplicado}\n`;
    mensaje += `*Total con descuento web: $${precioFinal}*\n`;
    */
    mensaje += ` $${precioFinal.toLocaleString('es-AR')}*\n`;
    mensaje += `(Debido a traslados de equipos, el precio puede variar según lugar y logística del evento)\n\n`;

    mensaje += `\u{1F64F} ¡Gracias! Espero tu respuesta para confirmar disponibilidad.`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
});



document.querySelector("#formEmprender button").addEventListener("click", function () {
    const numero = "5491135152227";  

    // Productos seleccionados
    const productos = Array.from(document.querySelectorAll('input[name="producto"]:checked'))
        .map(el => `\u2022 *${el.nextElementSibling.textContent.trim()}*`) // •
        .join("\n");  

    // Idea
    const idea = document.getElementById("presupuesto__textarea").value.trim(); 

    // Mensaje final
    let mensaje = `*¡Hola Seba! Vengo de tu página web y estoy interesado en productos LED para emprender:*\n\n`;   

    mensaje += `\u{1F9E9} *Productos seleccionados:*\n${productos || "\u2022 *Ninguno seleccionado*"}\n`;
    mensaje += `─────────────────\n`;   

    if (idea) {
        mensaje += `\u{1F4A1} *Mi idea o necesidad:*\n"${idea}"\n`;
        mensaje += `─────────────────\n`;
    }   

    mensaje += `\n\u{1F4E6} ¿Podrías pasarme más info y precios?\n\u{1F64F} ¡Gracias!`;   

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
});
