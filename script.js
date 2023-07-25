
var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}

// ----------------------------------------------------------------------------------------
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
    tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


var chatbox = document.getElementById('fb-customer-chat');
 chatbox.setAttribute("page_id", "101465626374786");
chatbox.setAttribute("attribution", "biz_inbox");



window.fbAsyncInit = function() {
    FB.init({
        xfbml            : true,
        version          : 'v17.0'
        });
};

(function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
