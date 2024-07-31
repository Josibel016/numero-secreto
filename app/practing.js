
const teste= document.getElementById ('teste')
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

  const reconhecimento = new SpeechRecognition()
  reconhecimento.start();

    

  reconhecimento.addEventListener('result',speakUp)

  function speakUp(e){
    fala=(e.results[0][0].transcript)
    exibeNaTela(fala)
  }

  function exibeNaTela(fala){
    teste.innerHTML=`
    <div>You've consumed:</div>
    <span class="box">${fala}</span>
    `
  }