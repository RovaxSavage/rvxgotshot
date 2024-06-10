document.addEventListener("DOMContentLoaded", function () {
    const cardsContainer = document.getElementById('cards-container');
    
    const numberOfImages = 9;

    for (let i = 1; i <= numberOfImages; i++) {
        let imageNumber = String(i).padStart(3, '0');
        let imagePath = `img/pics/${imageNumber}.jpeg`;

        let card = document.createElement('div');
        card.className = 'card';
        
        let img = document.createElement('img');
        img.className = 'img';
        img.src = imagePath;
        img.alt = `${imageNumber}`;

        card.appendChild(img);
        cardsContainer.appendChild(card);
    }

    var modal = document.getElementById("preview-modal");
    var modalImg = document.getElementById("modal-image");

    var downloadLink = document.createElement('a');
    downloadLink.className = "download-link";

    var iconImg = document.createElement('img');
    iconImg.src = "img/icons/application.png";
    iconImg.alt = "Download";
    iconImg.className = "download-icon";

    downloadLink.appendChild(iconImg);
    modal.appendChild(downloadLink);

    var cards = document.getElementsByClassName("card");

    for (var i = 0; i < cards.length; i++) {
        cards[i].onclick = function() {
            var img = this.getElementsByTagName("img")[0];
            modal.style.display = "flex";
            modalImg.src = img.src;
            downloadLink.setAttribute('href', img.src);
            downloadLink.setAttribute('download', img.alt + '.jpeg');
        }
    }

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() { 
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

