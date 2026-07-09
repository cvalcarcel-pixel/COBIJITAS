// ==========================
// COBIJITAS
// script.js
// ==========================

// Efecto de la barra de navegación

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 40) {

        navbar.classList.add("shadow");

    } else {

        navbar.classList.remove("shadow");

    }

});


// Botón volver arriba

const boton = document.createElement("button");

boton.innerHTML = "↑";

boton.id = "volverArriba";

document.body.appendChild(boton);

boton.style.cssText = `
position:fixed;
bottom:25px;
right:25px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#222;
color:white;
font-size:22px;
cursor:pointer;
display:none;
z-index:9999;
transition:.3s;
box-shadow:0 8px 20px rgba(0,0,0,.2);
`;

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        boton.style.display="block";

    }else{

        boton.style.display="none";

    }

});

boton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// Hover del botón

boton.addEventListener("mouseenter",()=>{

    boton.style.background="#b89b5e";

});

boton.addEventListener("mouseleave",()=>{

    boton.style.background="#222";

});


// Año automático del footer (si luego agregamos un elemento con id="year")

const year = document.getElementById("year");

if(year){

    year.textContent = new Date().getFullYear();

}

console.log("Cobijitas iniciado correctamente.");