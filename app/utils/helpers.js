var axios = require("axios");

var helpers = {

  authenticateUser: function(credentials) {
    return axios.post("/auth/login", credentials).then(function(status) {
      if (status.data.success) {
        if (status.data.auth_lvl === "employee" && status.data.isNew === true) {
          return "/employee/update/password";
        } else if (status.data.auth_lvl === "employee" && status.data.isNew === false) {
          return "/employee/welcome";
        } else {
          return "/admin";
        }
      } else {
        console.log(status.data.message);
      }
    });
  },

  updatePassword: function(update) {
    return axios.post("/employee/update/password", update).then(function(status) {
      if (status.data.success) {
        return "/employee/welcome";
      }
    });
  },

  getEmployeeData: function() {
    return axios.get("/employee/data").then(function(data) {
      return data;
    });
  },

  postEmployeeData: function(data) {
    return axios.post("/employee/data", data).then(function(status) {
      if (status.data.success) {
        return "Update success.";
      }
    });
  },

  logout: function() {
    return axios.get("/auth/logout").then(function(status) {
      if (status.data.success) {
        return "/";
      }
    });
  }
};

module.exports = helpers;