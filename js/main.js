//Botao codificar ou decodificar.
const btnCode = document.getElementById('btnCode')

//inputs encode ou code.
const encode = document.getElementById('encode')
const decode = document.getElementById('decode')

// Muda o status do button de acordo com o Input Radio selecionado.
encode.addEventListener('click', () => {
  btnCode.innerText = 'Codificar'
})

decode.addEventListener('click', () => {
  btnCode.innerText = 'Decodificar'
})


// Pegando o ID do Seletct e campo de incremento para cifra de cesar.
const selecionaCodigo = document.getElementById('selecionaCodigo')
const novoCampo = document.getElementById('novoCampo')


//Faz com que o campo adicional só apareça quando a cifra de cesar for a selecionada.
selecionaCodigo.addEventListener('click', () => {

  if (selecionaCodigo.value == 'cesar') {
    novoCampo.style.display = "flex";
    novoCampo.classList.add('adiciona')
  }
  else {
    novoCampo.style.display = "none";
  }
})

// Incremento caso o codigo escolhido seja cifra de césar.
const incremento = document.getElementById('incremento')
// Texto digitado pelo usuario
const mensagem = document.getElementById('texto')
// Textarea que recebe o texto codificado ou decodificado.
const resultado = document.getElementById('resultado')

//Função para codificar usando cifra de césar.
const cifraDeCesar = (mensagem, deslocamento) => {
  let codifica = '';
  let resultado;

  for (let i = 0; i < mensagem.length; i++) {
    if (mensagem.charCodeAt(i) >= 65 && mensagem.charCodeAt(i) <= 90) {
      resultado = (((mensagem.charCodeAt(i) - 65) + deslocamento) % 26) + 65;
    }
    else if (mensagem.charCodeAt(i) >= 97 && mensagem.charCodeAt(i) <= 122) {
      resultado = (((mensagem.charCodeAt(i) - 97) + deslocamento) % 26) + 97;
    }
    else if (mensagem.charCodeAt(i) === 32) {
      resultado = 32;
    }
    codifica += String.fromCharCode(resultado);
  }
  return codifica.toLowerCase();
}

//Função para Decodificar a cifra de césar.
const decifraDeCesar = (mensagem, deslocamento) => {
  let decodifica = '';
  let resultado;

  for (let i = 0; i < mensagem.length; i++) {
    if (mensagem.charCodeAt(i) >= 65 && mensagem.charCodeAt(i) <= 90) {
      resultado = (((mensagem.charCodeAt(i) - 90) - deslocamento) % 26) + 90;
    }
    else if (mensagem.charCodeAt(i) >= 97 && mensagem.charCodeAt(i) <= 122) {
      resultado = (((mensagem.charCodeAt(i) - 122) - deslocamento) % 26) + 122;
    }
    else if (mensagem.charCodeAt(i) === 32) {
      resultado = 32;
    }
    decodifica += String.fromCharCode(resultado);
  }
  return decodifica.toLowerCase();
}

//Evento de clique no botão de codificar ou decodificar a mensagem.
btnCode.addEventListener('click', (e) => {

  //Previne o recarregamento padrão que o botão faz por padrão.
  e.preventDefault()

  //se a codificação selecionada seja cifra de cesar.
  if (selecionaCodigo.value == 'cesar') {
    if (encode.checked == true) {
      resultado.innerText = cifraDeCesar(mensagem.value, Number(incremento.value))
    } else if (decode.checked == true) {
      resultado.innerText = decifraDeCesar(mensagem.value, Number(incremento.value))
    } else {
      alert(`Escolha se você quer codificar ou decodificar`)
    }
  }
  //se a codificação selecionada seja base64.
  else if (selecionaCodigo.value == 'base64') {
    if (encode.checked == true) {
      resultado.innerText = btoa(mensagem.value)
    } else if (decode.checked == true) {
      resultado.innerText = atob(mensagem.value)
    } else {
      alert(`Escolha se você quer codificar ou decodificar`)
    }
  }
  //se nenhuma codificação seja selecionada.
  else return alert(`Escolha a codificação`)
})

