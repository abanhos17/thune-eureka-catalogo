window.onload = function() {
  var links = document.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(event) {
      event.preventDefault();
      var url = this.getAttribute("href");
      document.body.classList.add("fade-out");
      setTimeout(function() {
        window.location = url;
      }, 300);
    });
  }
}

