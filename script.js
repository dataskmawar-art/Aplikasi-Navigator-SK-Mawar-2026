// ===============================
// NAVIGATOR SK MAWAR
// ===============================

const mapImage = document.getElementById("mapImage");
const locationTitle = document.getElementById("locationTitle");
const searchInput = document.getElementById("searchInput");

let zoom = false;


// ===============================
// PAPARKAN PETA
// ===============================

function showMap(image, title){

    locationTitle.innerHTML = "📍 " + title;

    mapImage.src = image;

    mapImage.style.display = "block";

    mapImage.style.transform = "scale(1)";

    zoom = false;

    // Scroll terus ke peta

    document.getElementById("viewer").scrollIntoView({

        behavior:"smooth"

    });

}



// ===============================
// ZOOM PETA
// ===============================

mapImage.addEventListener("click",function(){

    if(!zoom){

        mapImage.style.transform="scale(1.8)";

        mapImage.style.cursor="zoom-out";

        zoom=true;

    }

    else{

        mapImage.style.transform="scale(1)";

        mapImage.style.cursor="zoom-in";

        zoom=false;

    }

});




// ===============================
// CARI LOKASI
// ===============================

function searchLocation(){

    let input = searchInput.value.toLowerCase();

    let categories = document.querySelectorAll(".category");

    categories.forEach(function(card){

        let buttons = card.querySelectorAll("button");

        let adaButton = false;

        buttons.forEach(function(button){

            if(button.innerText.toLowerCase().includes(input)){

                button.style.display="block";

                adaButton=true;

            }

            else{

                button.style.display="none";

            }

        });

        if(adaButton){

            card.style.display="block";

        }

        else{

            card.style.display="none";

        }

    });

}




// ===============================
// ENTER UNTUK PILIH LOKASI PERTAMA
// ===============================

searchInput.addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        let first=document.querySelector(".category button:not([style*='display: none'])");

        if(first){

            first.click();

        }

    }

});




// ===============================
// PAPAR MESEJ PERMULAAN
// ===============================

window.onload=function(){

    locationTitle.innerHTML="📍 Sila pilih lokasi di atas";

};




// ===============================
// DOUBLE CLICK FULLSCREEN
// ===============================

mapImage.addEventListener("dblclick",function(){

    if(mapImage.requestFullscreen){

        mapImage.requestFullscreen();

    }

});
