
var file;
// Create a root reference
var storageRef = firebase.storage().ref();
updateImg1();
updateImg2();
function updateImg1() {
  storageRef.child('images/mainAvatar/main1.JPG').getDownloadURL().then(function(url) {
  // `url` is the download URL for 'images/stars.jpg'

  // This can be downloaded directly:
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = function(event) {
    var blob = xhr.response;
  };
  xhr.open('GET', url);
  xhr.send();

  // Or inserted into an <img> element:
  var img = document.getElementById("main_IMG1");
  img.src = url;
}).catch(function(error) {
  console.log(error);
});
}
function updateImg2() {


  storageRef.child('images/mainAvatar/main2.JPG').getDownloadURL().then(function(url) {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function(event) {
      var blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();

    // Or inserted into an <img> element:
    var img = document.getElementById("main_IMG2");
    img.src = url;
  }).catch(function(error) {
    console.log(error);
  });
}


document.getElementById("inputImg1").addEventListener("change", function(event) {

  console.log(event.target.files[0]);
  file = event.target.files[0];

  // Create the file metadata
  var metadata = {
    contentType: 'image/jpeg'
  };
  var uploadTask = storageRef.child('images/mainAvatar/main1.JPG');
  firebaseUploadImg(file, metadata, 'main_IMG1', uploadTask);



})
document.getElementById("inputImg2").addEventListener("change", function(event) {

  console.log(event.target.files[0]);
  file = event.target.files[0];

  // Create the file metadata
  var metadata = {
    contentType: 'image/jpeg'
  };
  var uploadTask = storageRef.child('images/mainAvatar/main2.JPG');
  firebaseUploadImg(file, metadata, 'main_IMG2', uploadTask);



})
function firebaseUploadImg(file, metadata, inputimg, uploadTask) {
// Upload file and metadata to the object 'images/mountains.jpg'
var uploadTask = uploadTask.put(file, metadata);

// Listen for state changes, errors, and completion of the upload.
uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
  function(snapshot) {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, function(error) {

  // A full list of error codes is available at
  // https://firebase.google.com/docs/storage/web/handle-errors
  switch (error.code) {
    case 'storage/unauthorized':
      // User doesn't have permission to access the object
      break;

    case 'storage/canceled':
      // User canceled the upload
      break;



    case 'storage/unknown':
      // Unknown error occurred, inspect error.serverResponse
      break;
  }
}, function() {
  // Upload completed successfully, now we can get the download URL
  var downloadSnap = uploadTask.snapshot;
  var downloadURL = uploadTask.snapshot.downloadURL;
  document.getElementById(inputimg).url=downloadURL
  updateImg1();
  updateImg2();
  console.log(downloadSnap);
});
};

var date1 = new Date('December 5, 2015');
var date2 = new Date();
console.log(new Date());
console.log(date1, date2);
console.log(days_between(date1, date2));
function days_between(date1, date2) {

    // The number of milliseconds in one day
    var ONE_DAY = 1000 * 60 * 60 * 24

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime()
    var date2_ms = date2.getTime()

    // Calculate the difference in milliseconds
    var difference_ms = Math.abs(date1_ms - date2_ms)

    // Convert back to days and return
    return Math.round(difference_ms/ONE_DAY)+1

}

document.getElementById('counter').innerHTML = days_between(date1,date2);
document.getElementById('todayDate').innerHTML = `${date2.toDateString()}`
