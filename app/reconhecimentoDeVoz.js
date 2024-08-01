const elementoChute =document.getElementById ('chute');

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;//got from mozilla

  const recognition = new SpeechRecognition();
  recognition.lang='pt-Br';
  recognition.start();

  recognition.addEventListener('result', onSpeach)

  function onSpeach(e){
    chute =(e.results[0][0].transcript);
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiValorValido(chute)
  }
  function exibeChuteNaTela(chute){
    elementoChute.innerHTML=`
        <div> voce disse </div>
        <span class = "box">${chute}</span>
    `
  }

  recognition.addEventListener('end',()=> recognition.start())