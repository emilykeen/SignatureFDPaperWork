var React = require("react");
var ReactDOM = require("react-dom");

var routes = require("./config/routes");

ReactDOM.render(routes, document.getElementById("app"));

$(document).ready(function() {


// loads materialize functions
    (function($){
        $(function(){
            $('.button-collapse').sideNav();
            $('.parallax').parallax();
            $('.scrollspy').scrollSpy();
        }); // end of document ready
    })(jQuery); // end of jQuery name space

// global vars
    var navId = 1;
    var nextLink = 0;
    var thisLink = 0;
    var fileName;

// turns buttons off if on welcome page
welcome();
 function welcome() {

    if (navId === 1){
        $('.saveBTN').text('continue');
        $('.list-group-item').hide();
    }else{
        $('.saveBTN').text('submit');
        $('.list-group-item').show();
    }
}

// submit button triggers next page button in side nav
    $('.saveBTN').on("click", function() {
        document.getElementById(navId).click();
        // console.log("clicked");

    });

// side nav button highlight
    $('.sideNavBtn').on("click", function() {

        var self = this;
        $('.sideNavBtn').removeClass("active");
        $(self).addClass("active");
        navId = 1 + parseInt($(self).attr('data'));
        nextLink = $('#'+ navId).attr('href');
        thisLink = $('#'+ (navId - 1)).attr('href')
        // console.log(navId);
        // console.log(nextLink);
        fileName = " " + thisLink.substr(11) + ".pdf";
        $('.saveBTN').attr('href',nextLink);
        $('#downBtn').text(fileName);
        $('html, body').animate({ scrollTop: 0 }, 'fast');
        welcome();
    });

    // highlight location on reload
    reload();
    function reload() {
        // $('#'+ navId).parent().addClass("active");
        var currentPage = window.location.href;
        var pos = currentPage.indexOf("#");
        var searchLink = currentPage.substr(pos);
        var active = document.querySelectorAll("a[href='" + searchLink + "']");
        $(active).parent().addClass("active");
        console.log(searchLink);
        console.log(active);
        navId = parseInt($(active).attr('id'));
    }

});






