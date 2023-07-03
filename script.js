const idImagine = [16858 ,13914, 51719 ]; //, 78503
const imageArt = document.getElementById("imageArt");
const portarit = document.getElementById("portrait");

fetch(`https://api.artic.edu/api/v1/artworks/${78503}`)
    .then(response => response.json())
    .then(result => {
                     
        const divImg = document.createElement("figure");
        divImg.className = "imagebuttom";
        const imgPortrait = document.createElement("img");
        imgPortrait.className = "imgbuttom";
        imgPortrait.src = `https://www.artic.edu/iiif/2/${result.data.image_id}/full/843,/0/default.jpg`;

        const titoloimgPortrait = document.createElement("h3");
        titoloimgPortrait.textContent = result.data.title;

        const nameimgPortrait = document.createElement("p");
        nameimgPortrait.textContent = result.data.artist_title;

        divImg.appendChild(imgPortrait);
        divImg.appendChild(titoloimgPortrait);
        divImg.appendChild(nameimgPortrait);
        portarit.appendChild(divImg);
    })
    .catch(error => {
        console.log(error);
    });



idImagine.forEach(imagine => {
    fetch(`https://api.artic.edu/api/v1/artworks/${imagine}`)
        .then(response => response.json())
        .then(result => {
            const listImg = document.createElement("li");
            listImg.className = "imageList";
            const img = document.createElement("img");
            img.className="imageTop"
            img.src = "https://www.artic.edu/iiif/2/"+result.data.image_id+"/full/300,/0/default.jpg" ;

            const titoloImg = document.createElement("h3");
            titoloImg.textContent = result.data.title;

            const nameImg = document.createElement("p");
            nameImg.textContent = result.data.artist_title;

            listImg.appendChild(img);
            listImg.appendChild(titoloImg);
            listImg.appendChild(nameImg);
            imageArt.appendChild(listImg);
        })
        .catch(error => {
            console.log(error);
        });
});
