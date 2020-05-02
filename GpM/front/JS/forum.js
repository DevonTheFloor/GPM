/**
 * requête ajax demande tous les messages du forum affichage dynamique
 * @param {string} url 
 */
function seeforums(method,url){
	let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.responseText);
	  console.log(response);
	  let message = document.getElementById('message');
	  message.innerHTML="";
	  response.forEach(forum => {
		let div = document.createElement('div');
		div.setAttribute("class","listForum");
		message.appendChild(div);
		let alink = document.createElement('a');
		alink.setAttribute("href","/api/forum/post/:id");
		div.appendChild(alink);
		let titre = document.createElement('h4');
		titre.textContent= "titre: "+forum.titre;
		alink.appendChild(titre);
		let auteur = document.createElement('p');
		auteur.textContent= "posté par : "+forum.auteur;
		div.appendChild(auteur);
	  });
    }
  };
  request.open(method,url);
  request.send();
};
seeforums("get","/api/forum/posts");

/**
 * affiche le formulaire pour poster un message
 */
let poster = document.getElementById('postforum');

poster.addEventListener("click", function(){
	let ancre = document.getElementById('message');
	ancre.innerHTML= "";

	let formulaire = document.createElement('form');
	formulaire.setAttribute("class","formForum");
	formulaire.setAttribute("action","/api/forum/post");
	formulaire.setAttribute("method","post");
	ancre.appendChild(formulaire);
	let libele = document.createElement('label');
	libele.textContent = "Titre : ";
	formulaire.appendChild(libele);
	let titre = document.createElement('input');
	titre.id = "titre";
	titre.name= "titre";
	libele.appendChild(titre);
	let sujet = document.createElement('textarea');
	sujet.id ="message";
	sujet.name = "message";
	formulaire.appendChild(sujet);
	let envoi = document.createElement('button');
	envoi.id ="envoyer";
	envoi.setAttribute("type","submit");
	envoi.textContent = "Poster";
	formulaire.appendChild(envoi);
	
});
