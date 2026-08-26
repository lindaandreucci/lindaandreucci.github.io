document.addEventListener("DOMContentLoaded", () => {

    const serviceItems = document.querySelectorAll(".service-item");

    serviceItems.forEach(item => {

        const button = item.querySelector(".service-button");

        button.addEventListener("click", () => {

            // Chiude gli altri riquadri
            serviceItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove("open");
                }
            });

            // Apre/chiude quello cliccato
            item.classList.toggle("open");

        });

    });

});
