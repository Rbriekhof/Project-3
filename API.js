import axios from "axios";

const API = {
  getJWT() {
    return localStorage.getItem("JWToken");
  },
  setJWT(token) {
    localStorage.setItem("JWToken", token);
  },
  login({ email, password }) {
    return axios.post("/api/login", { email, password })
      .then((response) => {
        if (response.data.token) {
          this.setJWT(response.data.token);
        }
        return Promise.resolve(response);
      });
  },
  logout() {
    localStorage.removeItem("JWToken");
    window.location = "/";
  },
  getUserId() {

  },
  // Gets the user with the given id
  getUser(id) {

    let JWToken = this.getJWT();

    return axios.get("/api/user/" + id,
      {
        headers: {
          Authorization: `Bearer ${JWToken}`
        }
      }
    ).catch(err => {
      if (err.response.status === 401) {
        console.log("Unauthorized");
        this.logout();
      }
      return Promise.reject(err);
    });
  },


  // Deletes the user with the given id
  deleteUser(id) {
    let JWToken = this.getJWT();

    return axios.delete("/api/user/" + id,
      {
        headers: {
          Authorization: `Bearer ${JWToken}`
        }
      }
    ).catch(err => {
      if (err.response.status === 401) {
        console.log("Unauthorized");
        this.logout();
      }
      return Promise.reject(err);
    });
  },


  postJob: function (postedJobs) {
    return axios.post("/api/jobs", postedJobs);
},

  // Saves a user to the database
  saveUser(userData) {
    return axios.post("/api/user", userData);
  },
  // BEGIN MY CODE FOR UPDATING (added comma above also)
  // Updates a taskList in the database
  updateUser(userData) {
    let id = userData._id;
    let userDataNew = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      password: userData.password,
      address: userData.address,
      city: userData.city,
      state: userData.state,
      zip: userData.zip,
      phone: userData.phone,

    };
    let JWToken = this.getJWT();

    return axios.put("/api/user/" + id, userDataNew,
      {
        headers: {
          Authorization: `Bearer ${JWToken}`
        }
      }
    ).catch(err => {
      if (err.response.status === 401) {
        this.logout();
      }
      return Promise.reject(err);
    });
  },

  getTasks() {
    console.log("get tasks entry")
    //let JWToken = this.getJWT();
    //console.log(JWToken)
    return axios.get("/api/tasklist"
    /*,
      {
        headers: {
          Authorization: `Bearer ${JWToken}`
        }
      }*/
    ).catch(err => {
      if (err.response.status === 401) {
        console.log("Unauthorized");
        this.logout();
      }
      return Promise.reject(err);
    });
  },
  // Gets the taskList with the given id
  getTask(id) {
    let JWToken = this.getJWT();

    return axios.get("/api/tasklist/" + id,
      {
        headers: {
          Authorization: `Bearer ${JWToken}`
        }
      }
    ).catch(err => {
      if (err.response.status === 401) {
        console.log("Unauthorized");
        this.logout();
      }
      return Promise.reject(err);
    });
  },

  // Deletes the taskList with the given id
  deleteTask(id) {
    let JWToken = this.getJWT();

    return axios.delete("/api/tasklist/" + id,
      {
        headers: {
          Authorization: `Bearer ${JWToken}`
        }
      }
    ).catch(err => {
      if (err.response.status === 401) {
        console.log("Unauthorized");
        this.logout();
      }
      return Promise.reject(err);
    });
  },
  // Saves a taskList to the database
  saveTask(taskListData) {
    let JWToken = this.getJWT();

    return axios.post("/api/tasklist", taskListData,
      {
        headers: {
          Authorization: `Bearer ${JWToken}`
        }
      }
    ).catch(err => {
      if (err.response.status === 401) {
        console.log("Unauthorized");
        this.logout();
      }
      return Promise.reject(err);
    });
  },


  //saving the specific user to each task
  saveUserTasks: function(taskListData){
    let id = taskListData.id;
    return axios.put("/api/usertasklist/" + id , taskListData);
  },

  getUserTasks: function(id) {
    return axios.get("/api/usertasklist/" + id);
  },


  // BEGIN MY CODE FOR UPDATING (added comma above also)
  // Updates a taskList in the database
  updateTask(taskListDataNew) {
    let JWToken = this.getJWT();

    let id = taskListDataNew._id;

  
  return axios.put("/api/tasklist/" + id, taskListDataNew,
    {
      headers: {
        Authorization: `Bearer ${JWToken}`
      }
    }
  ).catch(err => {
    if (err.response.status === 401) {
      console.log("Unauthorized");
      this.logout();
    }
    return Promise.reject(err);
  });
},


  // END MY CODE FOR UPDATING
};

export default API;