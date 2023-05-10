function reproducirSonido() {
    var audio = new Audio('657948__matrixxx__family-friendly-inspect-sound-ui-or-in-game-notification.wav'); // Reemplaza 'ruta_del_sonido.mp3' con la ruta real de tu archivo de sonido
    audio.play();
    audio.preload = 'auto';

  }
  
  function reproducirSonidoAndRedirect(url) {
    var audio = new Audio('523763__matrixxx__select_granted_06.wav'); // Reemplaza 'ruta_del_sonido.mp3' con la ruta real de tu archivo de sonido
    audio.play();
  
    setTimeout(function() {
      window.location.href = url;
    }, 500); // Espera 1 segundo (1000 milisegundos) antes de redirigir a la nueva página
  }
  