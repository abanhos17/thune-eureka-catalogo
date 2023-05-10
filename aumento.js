window.addEventListener('resize', function() {
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    var contentElement = document.getElementById('content');
  
    // Calcula el nuevo tamaño de fuente en función del ancho de pantalla
    var fontSize = screenWidth * 10.02; // Ajusta este valor según tus necesidades
    
    // Establece el nuevo tamaño de fuente
    contentElement.style.fontSize = fontSize + 'px';
});
