document.getElementById("leadForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = {
    nome: formData.get('nome'),
    email: formData.get('email'),
    empresa: formData.get('empresa')
  };

  console.log("Lead capturado:", data);
  alert("Recebido! Vamos entrar em contato.");
  e.target.reset(); // Limpa o formulário após envio
});
