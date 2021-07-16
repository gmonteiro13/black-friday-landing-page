let countdownDate = new Date("Jul 31, 2021 19:00:00").getTime();
let x = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countdownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("time-days").innerHTML = days + " dias";
  document.getElementById("time-hours").innerHTML = hours + " horas";
  document.getElementById("time-minutes").innerHTML = minutes + " minutos";
  document.getElementById("time-seconds").innerHTML = seconds + " segundos";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

function submitEmail() {
  let email = ("" + document.getElementById("user-email").value);
  const emailFormat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const p = document.querySelector("#validation");

  if (email.match(emailFormat)) {
    p.classList.remove("validation-error");
    p.classList.add("validation-ok");
    document.getElementById("validation").innerHTML =
      "Cadastro realizado com sucesso!";
    localStorage.setItem("email", email);
  } else {
    p.classList.remove("validation-ok");
    p.classList.add("validation-error");
    document.getElementById("validation").innerHTML =
      "E-mail inválido! Tente novamente";
  }
}
