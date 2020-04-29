/*let conexion = (method,url,inscription)=>{
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          let response = JSON.parse(this.responseText);
          console.log(response);
        }
    }
request.open(method,url);
request.setRequestHeader("Content-Type", "application/json");
request.send(inscription);

}

let signup = document.getElementById('signup');
signup.addEventListener("click", function(e){
    e.preventDefault();
    conexion("post","http://localhost:3030/api/auth/signup",{
        email: "email@ajax.fr",
        mdp: "xmlhttprequest"
    })
});
*/
let requser = () =>{

    return newuser;
} 

let connexionUser = (method, url)=>{

    let emailpost = document.getElementById('email');
    let mdppost = document.getElementById('mdp');

    let email = emailpost.value;
    let mdp = mdppost.value;
    let adduser = {
        email: email,
        mdp: mdp
    };
    let newuser = JSON.stringify(adduser);

    console.log("adduser = ", adduser);
    let request = new XMLHttpRequest();
    request.onload = function () {
        if (this.readyState == 4) {
          console.log("connexion a la bdd");
        }
    }
request.open(method,url);
request.setRequestHeader("Content-Type", "application/json");
request.send(newuser);
}

let signup = document.getElementById('signup');
signup.addEventListener("click", function(e){
    e.preventDefault();
    connexionUser("post","http://localhost:3030/api/auth/signup");
});