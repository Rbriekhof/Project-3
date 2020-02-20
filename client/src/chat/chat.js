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

    render() {
        return (
            <div className="container">

                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#"> Task Grab </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-item nav-link active" href="#"> Tasks <span class="sr-only">(current)</span></a>
                            <a class="nav-item nav-link" href="#"> Sign Out </a>
                        </div>
                    </div>
                </nav>

                <div className="row rounded-lg overflow-hidden shadow">
                    <div className="col-md-3">
                        <div className="bg-white">

                            <div className="bg-gray px-4 py-2 bg-light">
                                <p className="h5 mb-0 py-1">Recent</p>
                            </div>

                            <div className="messages-box">
                                <div className="list-group rounded-0">
                                    <a className="list-group-item list-group-item-action active text-white rounded-0">
                                        <div className="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" className="rounded-circle" />
                                            <div className="media-body ml-4">
                                                <div className="d-flex align-items-center justify-content-between mb-1">
                                                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">25 Dec</small>
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                        <div className="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" className="rounded-circle" />
                                            <div className="media-body ml-4">
                                                <div className="d-flex align-items-center justify-content-between mb-1">
                                                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">14 Dec</small>
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                        <div className="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" className="rounded-circle" />
                                            <div className="media-body ml-4">
                                                <div className="d-flex align-items-center justify-content-between mb-1">
                                                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">9 Nov</small>
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                        <div className="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" className="rounded-circle" />
                                            <div className="media-body ml-4">
                                                <div className="d-flex align-items-center justify-content-between mb-1">
                                                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">18 Oct</small>
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                        <div className="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" className="rounded-circle" />
                                            <div className="media-body ml-4">
                                                <div className="d-flex align-items-center justify-content-between mb-1">
                                                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">17 Oct</small>
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                        <div className="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" className="rounded-circle" />
                                            <div className="media-body ml-4">
                                                <div className="d-flex align-items-center justify-content-between mb-1">
                                                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">2 Sep</small>
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                        <div className="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" className="rounded-circle" />
                                            <div className="media-body ml-4">
                                                <div className="d-flex align-items-center justify-content-between mb-1">
                                                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">30 Aug</small>
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                        <div className="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" className="rounded-circle" />
                                            <div className="media-body ml-4">
                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">21 Aug</small>
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <div className="px-4 py-5 chat-box bg-white">

                            <div className="media w-50 mb-3"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" className="rounded-circle" />
                                <div className="media-body ml-3">
                                    <div className="bg-light rounded py-2 px-3 mb-2">
                                        <p className="text-small mb-0 text-muted">Test which is a new approach all solutions</p>
                                    </div>
                                    <p className="small text-muted">12:00 PM | Aug 13</p>
                                </div>
                            </div>


                            <div className="media w-50 ml-auto mb-3">
                                <div className="media-body">
                                    <div className="bg-primary rounded py-2 px-3 mb-2">
                                        <p className="text-small mb-0 text-white">Test which is a new approach to have all solutions</p>
                                    </div>
                                    <p className="small text-muted">12:00 PM | Aug 13</p>
                                </div>
                            </div>


                            <div className="media w-50 mb-3"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" className="rounded-circle" />
                                <div className="media-body ml-3">
                                    <div className="bg-light rounded py-2 px-3 mb-2">
                                        <p className="text-small mb-0 text-muted">Test, which is a new approach to have</p>
                                    </div>
                                    <p className="small text-muted">12:00 PM | Aug 13</p>
                                </div>
                            </div>


                            <div className="media w-50 ml-auto mb-3">
                                <div className="media-body">
                                    <div className="bg-primary rounded py-2 px-3 mb-2">
                                        <p className="text-small mb-0 text-white">Apollo University, Delhi, India Test</p>
                                    </div>
                                    <p className="small text-muted">12:00 PM | Aug 13</p>
                                </div>
                            </div>


                            <div className="media w-50 mb-3"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" className="rounded-circle" />
                                <div className="media-body ml-3">
                                    <div className="bg-light rounded py-2 px-3 mb-2">
                                        <p className="text-small mb-0 text-muted">Test, which is a new approach</p>
                                    </div>
                                    <p className="small text-muted">12:00 PM | Aug 13</p>
                                </div>
                            </div>


                            <div className="media w-50 ml-auto mb-3">
                                <div className="media-body">
                                    <div className="bg-primary rounded py-2 px-3 mb-2">
                                        <p className="text-small mb-0 text-white">Apollo University, Delhi, India Test</p>
                                    </div>
                                    <p className="small text-muted">12:00 PM | Aug 13</p>
                                </div>
                            </div>

                        </div>


                        <form action="#" className="bg-light">
                            <div className="input-group">
                                <input type="text" placeholder="Type a message" aria-describedby="button-addon2" className="form-control rounded-0 border-0 py-4 bg-light" />
                                <div className="input-group-append">
                                    <button id="button-addon2" type="submit" className="btn btn-link"> <i className="fa fa-paper-plane"></i></button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>



        )
    }

}

export default ChatComponent;