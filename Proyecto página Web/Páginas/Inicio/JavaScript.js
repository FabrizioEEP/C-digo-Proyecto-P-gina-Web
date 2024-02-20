// PARA QUE SE MUEVA LAS DOS IMAGENES

document.addEventListener("DOMContentLoaded", function() {
  var imagen1 = document.getElementById("imagen1");
  var imagen2 = document.getElementById("imagen2");

  imagen1.style.display = "block";
  imagen2.style.display = "none";

  // Alternar entre las imágenes cada 3 segundos
  setInterval(function() {
    if (imagen1.style.display === "block") {
      imagen1.style.display = "none";
      imagen2.style.display = "block";
    } else {
      imagen1.style.display = "block";
      imagen2.style.display = "none";
    }
  }, 500);
});

document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('.square img');
    const viewer = document.querySelector('.gallery-viewer');
    const image = document.querySelector('.gallery-image img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const closeButton = document.querySelector('.close');

    squares.forEach(square => {
        square.addEventListener('click', function() {
            viewer.style.display = 'block';
            image.src = this.src;
        });
    });

    closeButton.addEventListener('click', function() {
        viewer.style.display = 'none';
    });

    prevButton.addEventListener('click', function() {
        const currentSrc = image.src;
        let index;
        squares.forEach((square, i) => {
            if (square.src === currentSrc) {
                index = i;
            }
        });
        if (index > 0) {
            image.src = squares[index - 1].src;
        }
    });

    nextButton.addEventListener('click', function() {
        const currentSrc = image.src;
        let index;
        squares.forEach((square, i) => {
            if (square.src === currentSrc) {
                index = i;
            }
        });
        if (index < squares.length - 1) {
            image.src = squares[index + 1].src;
        }
    });
});