<script>
function procurarElemento() {
  var iframe = document.querySelector('iframe[style*="background: rgba(0, 0, 0, 0.3)"]');
  if (iframe) {
    var elemento = iframe.contentWindow.document.querySelector('span[style*="animation: 6s linear 0s 1 normal forwards running showButtonTimerText"]');
    if (elemento) {
      var tempo = Math.floor(Math.random() * 1500) + 500;
      setTimeout(function() {
        elemento.click();
      }, tempo);
    } else {
      var tempo = Math.floor(Math.random() * 500) + 500;
      setTimeout(procurarElemento, tempo);
    }
  } else {
    setTimeout(procurarElemento, 1500);
  }
}
procurarElemento();
</script>