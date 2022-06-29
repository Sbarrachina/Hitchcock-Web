var images = [
    "images/encadenados.jpeg", 
    "images/rebeca-0.jpeg", 
    "images/talones.jpeg",
    "images/vertigo.jpeg",
  "images/Psyco.jpeg",
    "images/ventana.jpeg",
    "images/39escalones.jpeg",
    "images/elHombreque.jpeg",
    "images/laSombradeunaduda.jpeg",
    "images/sospecha.webp"
  ];
    var num = 0;
  
  function next() {
    var slider = document.getElementById("slider");
    num++;
    if(num >= images.length) {
      num = 0;
    }
    slider.src = images[num];
    }
  
  function prev() {
    var slider = document.getElementById("slider");
    num--;
    if(num < 0) {
      num = images.length-1;
    }
    slider.src = images[num];
  }