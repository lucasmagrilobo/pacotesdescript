<script>
function procurarElemento() {
  // Seleciona o iframe correto usando o ID do iframe
  var iframe = document.querySelector('iframe[style*="background: rgba(0, 0, 0, 0.3)"]');

  // Verifica se o iframe foi encontrado
  if (iframe) {
    // Seleciona o elemento dentro do iframe
    var elemento = iframe.contentWindow.document.querySelector('span[style*="animation: 6s linear 0s 1 normal forwards running showButtonTimerText"]');

    if (elemento) {
      // Espera um tempo aleatório de 0,5 a 2 segundos antes de clicar no elemento
      var tempo = Math.floor(Math.random() * 1500) + 500; // intervalo aleatório entre 500ms e 2000ms
      setTimeout(function() {
        elemento.click();
      }, tempo);
    } else {
      // Se o elemento não foi encontrado, chama a função novamente após um intervalo de tempo aleatório entre 500ms e 2000ms
      var tempo = Math.floor(Math.random() * 500) + 500; // intervalo aleatório entre 500ms e 2000ms
      setTimeout(procurarElemento, tempo);
    }
  } else {
    // Se o iframe não foi encontrado, chama a função novamente após 500ms
    setTimeout(procurarElemento, 1500);
  }
}

// Inicia a busca pelo elemento imediatamente
procurarElemento();
</script>