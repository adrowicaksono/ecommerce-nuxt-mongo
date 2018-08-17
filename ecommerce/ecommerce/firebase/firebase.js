import * as firebase from "firebase"

var config = {
    apiKey: "AIzaSyBJ4tQN0yPkeXeOax3wWBqfOEQZ5OKxHEY",
    authDomain: "ecommerce-81bca.firebaseapp.com",
    databaseURL: "https://ecommerce-81bca.firebaseio.com",
    projectId: "ecommerce-81bca",
    storageBucket: "ecommerce-81bca.appspot.com",
    messagingSenderId: "815327269595"
  };
firebase.initializeApp(config);

var db = firebase.database()

export default db