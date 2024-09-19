function login(): void {
    const username: string = (document.getElementById("username") as HTMLInputElement).value;
    const passwordInput = document.getElementById("password") as HTMLInputElement;
    const password: string = passwordInput.value;

    const storedUsername: string | null = localStorage.getItem("username");
    const storedPassword: string | null = localStorage.getItem("password");

    if (storedUsername && storedPassword) {
        if (username === storedUsername && password === storedPassword) {
            alert(`Login bem sucedido!`);
            window.location.href = '../pages/index.html'
        } else {
            alert(`ERRO: Usário ou senha inválidos!`);
            passwordInput.value = "";
        }
    } else {
        alert(`Nenhum usuário cadastrado`);
    }

    document.getElementById("loginForm")?.addEventListener("submit", function (e: Event) {
        e.preventDefault();
        login();
});