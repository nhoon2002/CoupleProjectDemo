
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD7LM-C250G8THaI3w7BV-9Zn1WVBBf7-k",
    authDomain: "testingupload-22761.firebaseapp.com",
    databaseURL: "https://testingupload-22761.firebaseio.com",
    projectId: "testingupload-22761",
    storageBucket: "testingupload-22761.appspot.com",
    messagingSenderId: "422317099707"
  };
  firebase.initializeApp(config);


var password = 1205;
// var guess = prompt('Enter Password: XXXX');
// while (guess != password) {
//     guess = prompt('Try Again! Enter Password: XXXX')
// }

document.addEventListener('mousemove', function(e) {
   if(e.pageX < 10) {
      console.log('Opened');
      openNav();
   }
});
document.addEventListener('mousemove', function(e) {
   if(e.pageX > 250) {
      console.log('Closed');
      closeNav();
   }
});
// document.addEventListener('mouseenter', onMouseHitLeft, false);




/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {

    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = '#ffefef';
}
