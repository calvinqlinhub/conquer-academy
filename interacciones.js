document.documentElement.classList.add("js-ready");

const main = document.querySelector("main");
const header = document.querySelector("body > header");
const navigation = header?.querySelector("nav");

if (main) {
    main.id = "contenido";

    const skipLink = document.createElement("a");
    skipLink.className = "skip-link";
    skipLink.href = "#contenido";
    skipLink.textContent = "Saltar al contenido";
    document.body.prepend(skipLink);
}

if (header && navigation) {
    navigation.id = "navegacion-principal";

    const menuButton = document.createElement("button");
    menuButton.className = "menu-toggle";
    menuButton.type = "button";
    menuButton.setAttribute("aria-controls", navigation.id);
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menú de navegación");
    header.insertBefore(menuButton, navigation);

    menuButton.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("is-open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute("aria-label", isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación");
    });

    navigation.addEventListener("click", (event) => {
        if (event.target.closest("a")) {
            navigation.classList.remove("is-open");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Abrir menú de navegación");
        }
    });
}

document.querySelectorAll('form[action="#"]').forEach((form) => {
    const status = document.createElement("p");
    status.className = "form-status";
    status.setAttribute("role", "status");
    status.hidden = true;
    form.append(status);

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        status.textContent = "¡Perfecto! Esta demostración ha validado los datos correctamente; no se ha enviado información real.";
        status.hidden = false;
        status.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });

    form.addEventListener("reset", () => {
        status.hidden = true;
    });
});
