// Establecer la fecha de finalización (en este ejemplo, 1 de enero de 2024)
const countDownDate = new Date("Nov 29, 2023 17:00:00").getTime();

// Actualizar el contador cada segundo
const countdown = setInterval(function() {
  // Obtener la fecha y hora actual
  const now = new Date().getTime();

  // Calcular la diferencia entre la fecha de finalización y la fecha actual
  const distance = countDownDate - now;

  // Cálculos para los días, horas, minutos y segundos restantes
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Actualizar los elementos HTML con los valores calculados
  document.getElementById("days").innerText = days.toString().padStart(2, "0");
  document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");

  // Si la cuenta regresiva termina, mostrar un mensaje
  if (distance < 0) {
    clearInterval(countdown);
    document.querySelector(".countdown").innerHTML = "<h1>¡EL SERVER YA ESTA LISTO, VE A SERVERS PARA AGREGARLO!</h1>";
  }
}, 1000);
