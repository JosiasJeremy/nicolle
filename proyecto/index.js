document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("loveSong");
    const message = document.querySelector(".message");
    const letter = document.getElementById("loveLetter");
    const yesButton = document.querySelector(".btn-music");
    const noButton = document.getElementById("noButton");

    function startSurprise() {
        audio.play().catch(error => console.error("No se pudo reproducir el audio:", error));

        // Mostrar mensaje con animación
        message.style.opacity = "1";
        message.style.transform = "translateY(0)";

        // Mostrar carta con efecto
        setTimeout(() => {
            letter.style.opacity = "1";
            letter.style.transform = "translate(-50%, -50%) scale(1)";
        }, 1500);

        // Iniciar animaciones
        setInterval(createHeart, 500);
        setInterval(createFirework, 1000);

        // Mostrar cartas sorpresa
        createSurpriseCards();
    }

    // Evento para botón "Sí"
    yesButton.addEventListener("click", startSurprise);

    // Movimiento del botón "No"
    function moveNoButton() {
        if (window.innerWidth < 600) return; // En móviles, no se moverá

        const maxX = window.innerWidth - noButton.offsetWidth;
        const maxY = window.innerHeight - noButton.offsetHeight;
        let newX, newY;

        do {
            newX = Math.random() * maxX;
            newY = Math.random() * maxY;
        } while (
            Math.abs(newX - yesButton.offsetLeft) < 120 &&
            Math.abs(newY - yesButton.offsetTop) < 120
        );

        noButton.style.left = `${newX}px`;
        noButton.style.top = `${newY}px`;
    }

    // Evento del botón "No"
    noButton.addEventListener("mouseover", moveNoButton);
    noButton.addEventListener("click", function () {
        alert("¡No puedes decir que no! 😆❤️");
    });

    // Función para crear corazones flotantes
    function createHeart() {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        document.body.appendChild(heart);

        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";

        setTimeout(() => heart.remove(), 5000);
    }

    // Función para crear fuegos artificiales
    function createFirework() {
        let fireworkContainer = document.createElement("div");
        fireworkContainer.classList.add("firework-container");

        let x = Math.random() * window.innerWidth;
        let y = Math.random() * (window.innerHeight / 2);

        fireworkContainer.style.left = `${x}px`;
        fireworkContainer.style.top = `${y}px`;

        document.body.appendChild(fireworkContainer);

        for (let i = 0; i < 8; i++) { // Reducido a 8 partículas para mejor rendimiento
            let firework = document.createElement("div");
            firework.classList.add("firework");

            let colors = ["yellow", "red", "blue", "green", "purple"];
            firework.style.background = `radial-gradient(circle, ${colors[Math.floor(Math.random() * colors.length)]}, transparent)`;

            let angle = Math.random() * 360;
            let distance = Math.random() * 40;
            let offsetX = Math.cos(angle) * distance;
            let offsetY = Math.sin(angle) * distance;

            firework.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
            fireworkContainer.appendChild(firework);
        }

        setTimeout(() => fireworkContainer.remove(), 1500);
    }

    // Función para crear cartas sorpresa
    function createSurpriseCards() {
        let messages = [
            "Te amo 💖", "Eres mi todo 💕", "Siempre juntos 💞",
            "Eres lo mejor que me ha pasado 😘", "Mi persona favorita 💓",
            "Te adoro con todo mi corazón ❤️","Aquí estoy para ti siempre💘",
            "Contigo, cada día tiene magia y cada momento se siente eterno🤗",
            "Gracias por estar a mi lado apesar de todo🥺","Mi niña💫","Mi princesa👰",
            "Por si alguna vez lo olvidas tontamente: nunca dejo de pensar en ti😽",
            "Eres mi Valentín para siempre😉","Nos amábamos con un amor que era más que amor🫦",
            "Todo lo que quiero para San Valentín eres tú💗","Te tengo, nena😌"
        ];

        for (let i = 0; i < 8; i++) { // Reducido a 8 cartas para mejor experiencia en móviles
            let card = document.createElement("div");
            card.classList.add("surprise-card");

            let x = Math.random() * (window.innerWidth - 120);
            let y = Math.random() * (window.innerHeight - 120);

            card.style.left = `${x}px`;
            card.style.top = `${y}px`;
            card.innerText = messages[Math.floor(Math.random() * messages.length)];

            document.body.appendChild(card);
            setTimeout(() => card.remove(), 5000);
        }
    }
});

