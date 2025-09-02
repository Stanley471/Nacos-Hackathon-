const eventDate = new Date("Oct 12, 2025 09:00:00").getTime();

    const timer = setInterval(() => {

      let now = new Date().getTime();

      let distance = eventDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));

      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").innerText = days;

      document.getElementById("hours").innerText = hours;

      document.getElementById("minutes").innerText = minutes;

      document.getElementById("seconds").innerText = seconds;

      if (distance < 0) {

        clearInterval(timer);

        document.querySelector(".countdown").innerHTML = "🚀 The Hackathon has started!";

      }

    }, 1000);

    const toggleBtn = document.getElementById("toggle-mode");

    toggleBtn.addEventListener("click", () => {

      document.body.classList.toggle("dark-mode");

      toggleBtn.innerText = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";

    });
