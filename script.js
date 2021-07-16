function submitEmail() {
    let email = document.getElementById("user-email").value;

    localStorage.setItem("email", email);
}