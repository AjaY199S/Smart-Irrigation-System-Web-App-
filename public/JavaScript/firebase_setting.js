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

	info_load=()=>{
		
	    rootRef.on('value',gotData,gotErr);
	 }

	 // Firebase Data Extract to user home page and give information
	function gotData(data)
	{
		
		var esp8266 = data.val();
		document.getElementById("humidity_info").innerHTML = esp8266.Humidity;
		document.getElementById("soil_info").innerHTML = esp8266.Soil_moisture;
		document.getElementById("temp_info").innerHTML = esp8266.Temp;
		document.getElementById("host_name").innerHTML = esp8266.Wifi_Setup.Wifi_Name;

		if(esp8266.Motor_state==0)
		{
			document.getElementById("motor_info").innerHTML = "MANUALLY MOTOR OFF";
			document.getElementById("local_motor_info").innerHTML = "";
		}
		else if(esp8266.Motor_state==1)
		{
			document.getElementById("motor_info").innerHTML = "MANUALLY MOTOR ON";
			document.getElementById("local_motor_info").innerHTML = "";
		}
		else if(esp8266.Motor_state==2)
		{
			document.getElementById("motor_info").innerHTML = "AUTO MODE : ";
			if(esp8266.Local_Motor_Status == 0)
			{
				document.getElementById("local_motor_info").innerHTML = "MOTOR OFF";
			}
			else if(esp8266.Local_Motor_Status == 1)
			{
				document.getElementById("local_motor_info").innerHTML = "MOTOR ON";
			}
		}

	}
	 
	function gotErr(err)
	{
		alert("Error : "+err);
		console.log("error !");
		console.log(err);
		
	}


	// Motor State ON, OFF and AUTO give a function and data send on firebase
	
	function Motor_Off()
	{
		var data = 0;
		var data_set = firebase.database().ref("ESP8266/Motor_state");
		data_set.set(data);
		
	}
	function Motor_On()
	{
		var data = 1;
		var data_set = firebase.database().ref("ESP8266/Motor_state");
		data_set.set(data);
		
	}
	function Motor_Auto()
	{
		var data = 2;
		var data_set = firebase.database().ref("ESP8266/Motor_state");
		data_set.set(data);
		
	}

	// Project wifi setup host name and password
	function Wifi_Setup()
	{
		var wifi_name = document.getElementById("wifi_name").value
    	var wifi_password = document.getElementById("wifi_password").value

		var wifi_name_set = firebase.database().ref("ESP8266/Wifi_Setup/Wifi_Name");
		wifi_name_set.set(wifi_name);
		var wifi_password_set = firebase.database().ref("ESP8266/Wifi_Setup/Wifi_Password");
		wifi_password_set.set(wifi_password);

		alert(" Wifi Setup Is submitted successfully !!");

		document.getElementById("wifi_name").value = "";
		document.getElementById("wifi_password").value = "";

	} 


	// User Authantication Login 
	function login()
	{
		
		var user_email = document.getElementById("User_Id").value;
    	var user_pwd = document.getElementById("User_Password").value;
    	
		firebase.auth().signInWithEmailAndPassword(user_email, user_pwd).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			alert(errorMessage);
			// ...
		  });
	}

	// User Profile information extract on firebse
	function profile_info()
	{
		var user = firebase.auth().currentUser;
		if(user!=null)
		{
			document.getElementById("User_Email_Id").innerHTML = user.email;
		}
	}

	// Authanticate User SignOut 
	function logout()
	{
		firebase.auth().signOut().then(function() {
			console.log("Signed Out")
		  }).catch(function(error) {
			console.log("Couldn't Signout")
		  });
	}

