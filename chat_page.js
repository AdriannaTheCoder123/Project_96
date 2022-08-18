var firebaseConfig = {
    apiKey: "AIzaSyDMUKjZ0K-q4Da3xF7hI9BvUvu1YcACq_g",
    authDomain: "let-s-chat-e45e3.firebaseapp.com",
    databaseURL: "https://let-s-chat-e45e3-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-e45e3",
    storageBucket: "let-s-chat-e45e3.appspot.com",
    messagingSenderId: "366541036870",
    appId: "1:366541036870:web:b250b3267b437f3bf1d947"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send() {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name: user_name,
                message: msg,
                like: 0
          });
          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function updateLike(message_id) {
 console.log("clicked on like button - " + message_id);
 button_id = message_id;
 likes = document.getElementById(button_id).value;
 updated_likes = Number(likes) + 1;
 console.log(updated_likes);
}


function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "chat.html";
  }