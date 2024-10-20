window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("abajo",this.window.scrollY>0);
})

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");

})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})
