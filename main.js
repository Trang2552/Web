function getInfo() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let info = JSON.parse(this.responseText);
            document.getElementById("info-link").innerText = info.link;
        }
    };
    xhttp.open("GET", "https://trang-a8db6-default-rtdb.firebaseio.com/info.json", true);
    xhttp.send();
}
getInfo();

const firebaseConfig = {
    apiKey: "AIzaSyAarLgYciGwjXdvgaojVsDDhQVaGzYHEAc",
    authDomain: "trang-a8db6.firebaseapp.com",
    databaseURL: "https://trang-a8db6-default-rtdb.firebaseio.com",
    projectId: "trang-a8db6",
    storageBucket: "trang-a8db6.appspot.com",
    messagingSenderId: "979911565481",
    appId: "1:979911565481:web:78783e08678946de8249b8",
    measurementId: "G-T1GKZMMLSH"
  };  

  firebase.initializeApp(firebaseConfig);
 
  var messagesRef = firebase.database()
      .ref('Collected Data');
   
  document.getElementById('registerForm')
      .addEventListener('submit', submitForm);

  function submitForm(e) {
    e.preventDefault();

    // Get values
    var firstname= getInputVal('firstname');
    var lastname= getInputVal('lastname');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var gender = document.getElementById('gender').value;
    var age = getInputVal('age');
    var request = getInputVal('request');
    saveMessage(firstname, lastname, email, phone, gender, age, request);
    document.getElementById('registerForm').reset();
  }

  // Function to get form values
  function getInputVal(id) {
    return document.getElementById(id).value;
  }

  // Save message to firebase
  function saveMessage(firstname, lastname, email, phone, gender, age, request) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        gender: gender,
        age: age,
        request: request,
    });
  }