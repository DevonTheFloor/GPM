

/*function afficherforums(messages){
  let ancre = document.getElementById('message');
	ancre.innerHTML="";
	messages.forEach(message => {
		let ol = document.createElement('ol');
    /*let link = document.createElement('a');
    link.href="/api/forum/post/:id";
	  let li = document.createElement('li');
	  li.textContent = message[1];
	});
  ancre.appendChild(ol);
  ol.appendChild(li);
};*/

function seeforums(url){
	const promise = fetch(url);
	promise.then((forums)=>console.log(forums))
	.catch(console.log("probleme connecxion serveur"));
};

window.onload('load',seeforums("/api/forum/posts"));


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
	libele.appendChild(titre);
	let sujet = document.createElement('textarea');
	sujet.id ="message";
	formulaire.appendChild(sujet);
	let envoi = document.createElement('button');
	envoi.id ="envoyer";
	envoi.textContent = "Poster";
	envoi.setAttribute("type","submit");
	formulaire.appendChild(envoi);
	
});





