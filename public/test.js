/// Firebase data fectching temprature, humidity and soil moisture
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBFgIU0F_3ajcKXp2AmZPwELMVCDKq2qqE",
    authDomain: "smart-irrigation-system-3483d.firebaseapp.com",
    databaseURL: "https://smart-irrigation-system-3483d.firebaseio.com",
    projectId: "smart-irrigation-system-3483d",
    storageBucket: "smart-irrigation-system-3483d.appspot.com",
    messagingSenderId: "160889855164",
    appId: "1:160889855164:web:d1325308889bb912"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var rootRef = firebase.database().ref("ESP8266");





  registerUser=()=>{
    user_email = document.getElementById("email").value
    user_pwd = document.getElementById("pwd").value
    firebase.auth().createUserWithEmailAndPassword(user_email,user_pwd).then(function(resp){
        console.log(resp)
        alert("user created succrssfully")
    }).catch(function(err){
        console.log(err)
        console.log(err.message)
    })
  }

  login=()=>{
    user_email = document.getElementById("lemail").value
    user_pwd = document.getElementById("lpwd").value
    firebase.auth().signInWithEmailAndPassword(user_email,user_pwd).then(function(resp){
        console.log(resp)
        
        window.open("user_home.html","_Parent");
        alert("User successfully login !!! ")
    }).catch(function(err){
        console.log(err)
        console.log(err.message)
    })
  }

  load_btn=()=>{
    rootRef.on('value',gotdata,goterr);
  }
function gotdata(data)
{
	var esp = data.val();
	document.getElementById("kya").innerHTML = esp.Temp;
}
function goterr(err)
{
	console.log("error !");
	console.log(err);
}