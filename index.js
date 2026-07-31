// template_0wlw1uk
// service_nm6p5wn
// public key:  OQhKSpplbEiabKuWG

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_nm6p5wn",
      "template_0wlw1uk",
      event.target,
      "OQhKSpplbEiabKuWG",
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on email@email.com",
      );
    });
}