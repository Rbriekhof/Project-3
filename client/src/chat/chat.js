import React from "react";



const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyBSlVnwMk5kaOT-q9jsqIx6B7kV4KkXXvI",
    authDomain: "project3message.firebaseapp.com",
    databaseURL: "https://project3message.firebaseio.com",
    projectId: "project3message",
    storageBucket: "project3message.appspot.com",
    messagingSenderId: "965192004402",
    appId: "1:965192004402:web:705bb442d0491e98855d2b",
    measurementId: "G-R0LS8X4W5L"
});

class ChatComponent extends React.Component {

    render(){
        return(<div>Hello World from Chat</div>)
    }

}

export default ChatComponent;