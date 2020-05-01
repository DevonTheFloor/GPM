
function forumPost(method,url){

    let postForum = {
        titre: "test de requete 1",
        auteur: "Oim",
        message: "message depuis le xhr dans le code, c'est pas ce qu'on cherche, mais si ça avance un peu..."
    }
    
    let newPost = JSON.stringify(postForum);
        console.log("newpost = ",newPost);
        let request = new XMLHttpRequest();
      request.onload = function () {
        if (this.readyState == 4 && this.status == 201) {
          console.log("connection serveur ok");
          };
        }
      request.open(method,url);
      request.setRequestHeader("Content-Type", "application/json");
      request.send(newPost);
    };
    
    