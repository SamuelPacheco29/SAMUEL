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

/*
//JavaScript para Servicios
document.addEventListener("DOMContentLoaded", function () {
    const services = [
        {
            title: "Menús Digitales Interactivos",
            description: "Transforma la experiencia de tus clientes con menús digitales atractivos y fáciles de actualizar.",
            features: ["• Diseño personalizado", "• Actualizaciones en tiempo real", "• Imágenes de alta calidad", "• Categorías y filtros intuitivos"]
        },
        {
            title: "Análisis y Reportes",
            description: "Obtén insights valiosos sobre el comportamiento de tus clientes y el rendimiento de tu menú.",
            features: ["• Estadísticas de ventas", "• Análisis de popularidad de platos", "• Patrones de pedidos", "• Informes personalizados"]
        },
        {
            title: "Diseño y Branding",
            description: "Crea una identidad visual única para tu restaurante con nuestro servicio de diseño profesional.",
            features: ["• Diseño de logotipo", "• Paleta de colores personalizada", "• Tipografía única", "• Elementos gráficos a medida"]
        },
        {
            title: "Integración con Sistemas Existentes",
            description: "Conecta nuestros menús digitales con tu sistema de gestión de restaurantes actual.",
            features: ["• Sincronización con POS", "• Integración con sistemas de inventario", "• Compatibilidad con múltiples plataformas", "• Actualizaciones automáticas"]
        },
        {
            title: "Soporte Multilingüe",
            description: "Amplía tu alcance con menús en múltiples idiomas para atender a una clientela diversa.",
            features: ["• Traducción profesional", "• Cambio de idioma con un clic", "• Detección automática de idioma", "• Soporte para caracteres especiales"]
        },
        {
            title: "Soporte y Mantenimiento",
            description: "Obtén asistencia continua y actualizaciones regulares para mantener tu menú digital siempre funcional.",
            features: ["• Soporte técnico 24/7", "• Actualizaciones de seguridad", "• Copias de seguridad automáticas", "• Formación para el personal"]
        }
    ];

    const servicesGrid = document.getElementById('servicesGrid');

    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.classList.add('card');

        serviceCard.innerHTML = `
            <h3 class="card-title">${service.title}</h3>
            <p class="card-description">${service.description}</p>
            <ul class="card-features">
                ${service.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        `;

        servicesGrid.appendChild(serviceCard);
    });
});*/