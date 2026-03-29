function gerar() {
  pNome.innerText = nome.value;
  pCargo.innerText = cargo.value;
  pEmail.innerText = email.value;
  pResumo.innerText = resumo.value;
  pExp.innerText = exp.value;
}


// 🌙 Tema
function toggleTema() {
  document.body.classList.toggle("dark");
}


// 🧠 IA
async function usarIA(tipo) {

  const campo = tipo === "resumo" ? resumo : exp;

  const res = await fetch("/api/ia", {
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify({
      texto: campo.value,
      tipo: tipo
    })
  });

  const data = await res.json();

  campo.value = data.resposta;
}


// 📄 PDF
function baixarPDF() {
  window.print();
}