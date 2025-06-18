/* window.addEventListener("scroll", function () {
    let robot = document.querySelector(".robot-inicio");
    let scrollY = window.scrollY;

    if (scrollY > 5000) { 
        robot.style.backgroundAttachment = "scroll"; // La imagen se mueve con el contenido
    } else { 
        robot.style.backgroundAttachment = "fixed"; // La imagen se mantiene fija
    }
});



window.addEventListener("scroll", function () {
    let img = document.querySelector(".robot-inicio img");
    let scroll = window.scrollY;

    if (scroll > 500) {
        img.style.cssText = "position: fixed; width: 65%; top: 50%; left: 51%; translate: -50% -50%;";
    } else {
        img.style.cssText = "position: relative; width: 100%; top: ; left: ; translate: ;";
    }
})
    */

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

document.addEventListener("scroll", () => {
    const img = document.querySelector(".slogan-robot__robot > img");
    const scrollY = window.scrollY; 
    const startReveal = 90; // Altura en la que aparece la imagen

    if (scrollY >= startReveal) {
        img.style.opacity = "1"; // Hace que se haga visible
        img.style.transform = "translateY(0)"; // La imagen sube hasta su posición
    }
});

document.addEventListener("scroll", () => {
    const img = document.querySelector(".inicio__counter-container");
    const scrollY = window.scrollY; 
    const startReveal = 600; // Altura en la que aparece la imagen

    if (scrollY >= startReveal) {
        img.style.opacity = "1"; // Hace que se haga visible
        img.style.transform = "translateY(0)"; // La imagen sube hasta su posición
    }
});

/*
document.addEventListener("scroll", () => {
    const img = document.querySelector(".img-description__img > img");
    const contenedor = document.querySelector(".shows__img-description-container");
    const scroll = window.scrollY;
    const startScroll = 
})
*/


document.addEventListener("scroll", () => {
    const img = document.querySelector(".img-description__img > img");
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

    img.style.transform = `scale(${escala})`;
});

document.addEventListener("scroll", () => {
    const img = document.querySelector(".img-description__img > img");
    const texto = document.querySelector(".img-description__text > h3");
    const contenedor = document.querySelector(".shows__img-description-container");

    const rect = contenedor.getBoundingClientRect();
    const start = 30; // margen superior desde donde empieza el efecto
    const end = 200; // margen inferior donde termina el efecto
    const scrollPos = Math.max(0, Math.min((rect.top - start) * -1, end - start));
    const progress = scrollPos / (end - start); // entre 0 y 1

    // Aplicar opacidades basadas en el progreso
    texto.style.opacity = Math.max(0, 1 - progress); // de 1 a 0
    img.style.opacity = 0.6 + 0.4 * progress; // de 0.8 a 1
});








/* Texto verde de seccion "Testimonios". Agrega la clase "visible" que contiene animación CSS. */

window.addEventListener('scroll', () => {
    const texto = document.querySelector('.text-green');
    const rect = texto.getBoundingClientRect();

    if (rect.top < 600) {
        texto.classList.add('visible');
    }
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
const btnHamburgerEmprende = document.getElementById("btnHamburgerEmprende")
const btnHamburgerGaleria = document.getElementById("btnHamburgerGaleria")
const btnHamburgerCotiza = document.getElementById("btnHamburgerCotiza")
// Redireccion a...
const sectionInicio = document.getElementById("inicio")
const sectionShows = document.getElementById("shows")
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
            video.currentTime = 0;
        }
    });
}, {
    root: null,
    threshold: 0.8
});
testimoniosVideos.forEach(vid => { videosObserver.observe(vid) });


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








