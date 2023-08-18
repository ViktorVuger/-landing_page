const button = document.querySelector("button")

function signUp() {
    const name = prompt("First name");
    const lastName = prompt("Last name");
    const userName = prompt("User name");
    alert(`Hello ${userName}, welcome`);
}

window.addEventListener("click",signUp)