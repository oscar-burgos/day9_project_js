// New User 'click' event listener
var btn1 = document.getElementsByTagName('button')[0].addEventListener('click', function(event) {
  notHidden(event);
})
// Function to remove 'hidden' attribute
function notHidden() {
  document.getElementsByTagName('form')[0].removeAttribute('class');
}

// Prevent Default
document.getElementById('submit-button').addEventListener('click', function(e) {
	e.preventDefault();

// declare variables for each input
var value1 = document.getElementById('input1').value,
    value2 = document.getElementById('input2').value,
    value3 = document.getElementById('input3').value;

// User Constructor
function User(firstName, lastName, userName){
  this.firstName = firstName,
  this.lastName = lastName,
  this.userName = userName;
  this.userInfo = function() {
    return this.firstName + "\n" +
    this.lastName + "\n" +
    this.userName + "\n";
  };
}

// New user object
var getUser = new User(value1, value2, value3);
console.log(getUser.userInfo());

// Append to 'userProfiles' in HTML
var userProfiles = document.getElementById('userProfiles');
userProfiles.append(getUser.userInfo());

});
