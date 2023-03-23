 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";

 import {
   getDatabase,
   set,
   ref,
 } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
 import {
   getAuth,
   GoogleAuthProvider,
   signInWithRedirect,
   getRedirectResult,
   createUserWithEmailAndPassword
 } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyDzmzhnUd83S2kV1vbnham-1s-7E1e249A",
   authDomain: "keeper-app-fa6d4.firebaseapp.com",
   databaseURL: "https://keeper-app-fa6d4-default-rtdb.firebaseio.com",
   projectId: "keeper-app-fa6d4",
   storageBucket: "keeper-app-fa6d4.appspot.com",
   messagingSenderId: "769417999643",
   appId: "1:769417999643:web:06ed08f1812ee5e9abcfbe",
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const provider = new GoogleAuthProvider(app);
 const database = getDatabase(app);
 const auth = getAuth(app);

 googleId.addEventListener("click", (e) => {
   e.preventDefault();
   signInWithRedirect(auth, provider);

   getRedirectResult(auth)
     .then((result) => {
       // This gives you a Google Access Token. You can use it to access Google APIs.
       const credential = GoogleAuthProvider.credentialFromResult(result);
       const token = credential.accessToken;

       // The signed-in user info.
       const user = result.user;
       
       //redirect to /home 

       
   
       alert('user signed in');
       console.log(user);
       // IdP data available using getAdditionalUserInfo(result)
       // ...
     })
     .catch((error) => {
       // Handle Errors here.
       const errorCode = error.code;
       const errorMessage = error.message;
       // The email of the user's account used.
       const email = error.customData.email;
       // The AuthCredential type that was used.
       const credential = GoogleAuthProvider.credentialFromError(error);
       alert(errorMessage);
       // ...
     });
 });

 signup.addEventListener("click", (e) => {
   e.preventDefault();
   var email = document.getElementById("email").value;
   var password = document.getElementById("password").value;
   var username = document.getElementById("username").value;

   createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
       // Signed in
       const user = userCredential.user;

       set(ref(database, "users/" + user.uid), {
         email: email,
         username: username,
       });
       alert("user created");
       window.location.href = "/home";
       console.log(user);
     })

     // ...

     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       alert(errorMessage);
       // console.log(errorMessage);
       // ..
     });
 });
 

export { database, auth };
 export default firebase;