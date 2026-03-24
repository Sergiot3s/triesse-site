document.getElementById("leadForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    nome: e.target[0].value,
    email: e.target[1].value,
    empresa: e.target[2].value
  };

  console.log("Lead:", data);

  alert("Recebido! Vamos entrar em contato.");
});
