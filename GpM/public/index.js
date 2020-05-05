

/*let connexionUser = (method, url)=>{

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
});*/


let creer = document.getElementById("signup");
console.log("ctreate!!!!");
creer.addEventListener("click", function(){
    
    let create = document.getElementById('create');
    create.innerHTML=" ";
    let form = document.createElement('form');
    form.setAttribute("action","/api/auth/signup");
    form.setAttribute("method","post");
    create.appendChild(form);
    let label = document.createElement('label');
    label.textContent = "email : ";
    form.appendChild(label);
    let input = document.createElement('input');
    input.id= "email";
    input.name="email";
    input.type="email";
    label.appendChild(input);
    let label1 = document.createElement('label');
    label1.textContent = "Mot de passe : ";
    form.append(label1);
    let input1 = document.createElement('input');
    input1.id= "mdp";
    input1.name="mdp";
    input1.type="password";
    form.appendChild(input1);
    let button = document.createElement('button');
    button.setAttribute("type","submit");
    button.textContent="Créer un compte";
    form.appendChild(button);

});

let loguer = document.getElementById("login");
loguer.addEventListener("click", function(){
    let create = document.getElementById('create');
    create.innerHTML=" ";
    let form = document.createElement('form');
    form.setAttribute("action","/api/auth/login");
    form.setAttribute("method","post");
    create.appendChild(form);
    let label = document.createElement('label');
    label.textContent = "email : ";
    form.appendChild(label);
    let input = document.createElement('input');
    input.id= "email";
    input.name="email";
    input.type="email";
    label.appendChild(input);
    let label1 = document.createElement('label');
    label1.textContent = "Mot de passe : ";
    form.append(label1);
    let input1 = document.createElement('input');
    input1.id= "mdp";
    input1.name="mdp";
    input1.type="password";
    form.appendChild(input1);
    let button = document.createElement('button');
    button.setAttribute("type","submit");
    button.textContent="Se connecter";
    form.appendChild(button);

});

let redirect = ()=>{
    const promise = fetch();
    promise
    .then(console.log("token :",token));

};
/* 

*/