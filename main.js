const API_URL ="https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_QOo8Gam9wOqYmDWOaZQpT5kdt1geYObYYlOTtmgkujX3YR4B0V7IkRBtAOMeENYf";

 /*
 fetch(URL)
 .then(res => res.json())
 .then(data => {
    const img = document.querySelector('img');
    img.src = data[0].url;       
 });*/

/**/
/* async function myCat () {
     const res = await fetch(API_URL);
     const data = await res.json();
     const img = document.querySelector('img');
     img.src = data[0].url;
 }
 
 const myButton = document.querySelector("button");
 myButton.onclick = myCat;*/
 
async function reload(){
    const res = await fetch(API_URL);
    const data = await res.json();
    /*const img = document.querySelector('img');*/
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');

    img1.src = data[0].url;
    img2.src = data[1].url;
    img3.src = data[2].url;

}
//para llamar directo cuando se ejecuta
reload();


