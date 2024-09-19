function cadastrar(): void {
    const newUsername: string = (document.getElementById("newUsername") as HTMLInputElement).value;
    const newPassword: string = (document.getElementById("newPassword") as HTMLInputElement).value;

    if (newUsername && newPassword) {
        localStorage.setItem("usename", newUsername);
        localStorage.setItem("passwod", newPassword);
        alert(`Novo usuário cadastrado com sucesso!`);
        window.location.href = 'login.html';
    } else {
        alert(`ERRO! Preencha os campos corretamente.`)
    }
}

document.getElementById("signupForm")?.addEventListener("submit", function (e: Event) {
    e.preventDefault();
    cadastrar();
});