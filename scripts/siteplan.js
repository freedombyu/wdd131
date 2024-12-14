const services = [
    { name: "Web Development", description: "Building responsive websites", icon: "fas fa-code" },
    { name: "IT Consulting", description: "Providing expert IT advice", icon: "fas fa-laptop" },
    { name: "Cloud Services", description: "Deploying scalable cloud solutions", icon: "fas fa-cloud" },
];

const servicesSection = document.querySelector("#services");

services.forEach(service => {
    const serviceCard = `
        <div class="service-card">
            <i class="${service.icon}"></i>
            <h3>${service.name}</h3>
            <p>${service.description}</p>
        </div>
    `;
    servicesSection.innerHTML += serviceCard;
});
