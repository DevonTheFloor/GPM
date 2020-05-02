
/** 
* requête ajax demande tous les message du trhead, affichage dynamique
* @param {string} url 
*/
function rezoThread(method,url){
   let request = new XMLHttpRequest();
 request.onreadystatechange = function () {
   if (this.readyState == 4 && this.status == 200) {
     let response = JSON.parse(this.responseText);
     console.log(response);
     let message = document.getElementById('message');;
     message.innerHTML="";
     response.forEach(rezo => {
       message.insertAdjacentHTML("afterbegin","<p>"+rezo.auteur+"<br>"+rezo.quand+"<br>"+rezo.message+"</p><br>");
     });
   }
 };
 request.open(method,url);
 request.send();
};
rezoThread("get","/api/rezo/posts");
