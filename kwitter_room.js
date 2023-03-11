const firebaseConfig = {
    apiKey: "AIzaSyCH5uO-PchWvHMavpfAcVx5hvkHlw2o6Vc",
    authDomain: "kwitter-3125f.firebaseapp.com",
    databaseURL: "https://kwitter-3125f-default-rtdb.firebaseio.com",
    projectId: "kwitter-3125f",
    storageBucket: "kwitter-3125f.appspot.com",
    messagingSenderId: "770685614560",
    appId: "1:770685614560:web:78fb1a3a98d405f8d59385"
  };

  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   userName = localStorage.getItem("userName");
   document.getElementById("userName").innerHTML = "bem-vindo(a)" + userName + "!";

function logout(){
    localStorage.removeItem("userName")
    localStorage.removeItem("room_name")

    window.location = "index.html"
}


function addRoom(){
     room_name=document.getElementById("room_name").value;

     firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
     });

     localStorage.setItem("room_name", room_name);
     //window.location = "./Kwitter_page.html"
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Nome da Sala - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
 });
});

}

getData()




    function redirectToRoomName(name){
        console.log(name);
        localStorage.setItem("room_name",name);
        window.location = "kwitter_page.html"
    }
