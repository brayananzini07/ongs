const form = document.querySelector("form");

// Lista simulada de CPFs já cadastrados
const cpfsCadastrados = ["12345678900", "11122233344"];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const cpf = document.getElementById("cpf").value.trim();
  const idade = parseInt(document.getElementById("idade").value);
  const cidade = document.getElementById("cidade").value.trim();
  const moradia = document.getElementById("moradia").value;
  const quintal = document.getElementById("quintal").value;
  const pet = document.getElementById("pet").value;
  const horas = parseInt(document.getElementById("horas").value);
  const motivo = document.getElementById("motivo").value.trim().toLowerCase();
  const termo = document.getElementById("termo").checked;

  
  if (idade < 18) {
    alert("Você precisa ter 18 anos ou mais.");
    return;
  }

 
  if (cpfsCadastrados.includes(cpf)) {
    alert("CPF já cadastrado.");
    return;
  }

  
  if (!termo) {
    alert("Você precisa aceitar o termo de responsabilidade.");
    return;
  }

 
  const telefoneRegex = /^[0-9]{10,11}$/;
  if (!telefoneRegex.test(telefone)) {
    alert("Telefone inválido. Digite apenas números com DDD.");
    return;
  }

  const motivosInvalidos = ["quero", "porque sim"];
  if (motivosInvalidos.includes(motivo)) {
    alert("O motivo da adoção é muito genérico.");
    return;
  }

  
  if (moradia === "apartamento") {
    alert("Verifique se o local permite animais.");
  }

  
  if (moradia === "casa" && quintal === "nao") {
    alert("Certifique-se de que o quintal é seguro.");
  }

  
  if (moradia === "apartamento" && quintal === "sim") {
    alert("Erro: apartamento não pode ter quintal.");
    return;
  }

  
  if (quintal === "nao") {
    alert("Você não possui espaço externo.");
  }

  
  if (horas > 8) {
    alert("O animal ficará mais de 8 horas sozinho.");
    const justificativa = prompt("Explique como pretende lidar com isso:");
    if (!justificativa || justificativa.trim() === "") {
      alert("Justificativa obrigatória.");
      return;
    }
  }

  
  if (pet === "nao") {
    alert("A ONG poderá acompanhar sua adaptação.");
  }


  if (motivo.includes("hoje") || motivo.includes("agora")) {
    alert("Atenção: decisão pode ser impulsiva.");
  }

 
  if (
    motivo.includes("sem dinheiro") ||
    motivo.includes("não tenho condições")
  ) {
    alert("Você indicou falta de condições financeiras.");
    return;
  }

  alert("Formulário enviado com sucesso!");
});