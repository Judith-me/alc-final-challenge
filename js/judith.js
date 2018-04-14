window.onload = function() {
    document.getElementById("active").onclick = function myName() {
    	}
    }
// document.getElementById("active").onclick = function myName()

function myName() {
    var fname = document.getElementById("fname").value;
    var mname = document.getElementById("mname").value;
    var lname = document.getElementById("lname").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;

    document.getElementById("tname").innerHTML = fname + ' ' + mname + ' ' + lname;
    document.getElementById("temail").innerHTML = email;
    document.getElementById("tphone").innerHTML = phone;
    document.getElementById("taddress").innerHTML = address; 
}
