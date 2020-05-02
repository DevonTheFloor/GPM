/**
 * requête ajax demande tous les articles du market, affichage dynamique
 * @param {string} url 
 */
function seemarket(method,url){
	let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.responseText);
	  console.log(response);
	  let affiMarket = document.getElementById('affiMarket');
	  affiMarket.innerHTML="";
	  response.forEach(market => {
		let div = document.createElement('div');
		div.setAttribute("class","listForum");
		affiMarket.appendChild(div);
		let alink = document.createElement('a');
		alink.setAttribute("href","/api/market/post/:id");
		div.appendChild(alink);
		let titre = document.createElement('h4');
		titre.textContent= market.titre;
		alink.appendChild(titre);
		let annonce = document.createElement('p');
		annonce.textContent= market.annonce;
        div.appendChild(annonce);
        let picmarket = document.createElement('img');
        picmarket.setAttribute("class","picmarket")
		picmarket.setAttribute("src",market.urlimg);
		div.appendChild(picmarket);
	  });
    }
  };
  request.open(method,url);
  request.send();
};
seemarket("get","/api/market/all");



let addAnnonce = document.getElementById("addAnnonce");
let affiMarket = document.getElementById('affiMarket');
addAnnonce.addEventListener("click", function(){ 
    affiMarket.innerHTML=" "; 
    affiMarket.insertAdjacentHTML('afterbegin','<form action="/api/market/post" method="post" enctype="multipart/form-data"><label> Titre : <input type="text" id="titre" name="titre"></label><label> Catégorie : <select id="categorie" name="categorie"><option value"auto ">Auto</option><option value="maison" >Maison</option><option value="infor" >Informatique</option><option value="autre" >Autre</option></select> </label> Annonce: <textarea id="annonce" name="annonce"></textarea></label><label> Photo: <input type="file" id="file" name="file"></label><button type="submit">Annoncer !</button></form>');
});