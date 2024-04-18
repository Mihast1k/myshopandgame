var logP =  localStorage.getItem('loginVhod');
var emailP = localStorage.getItem("EmailVhod");
var passwordP = localStorage.getItem("passwordVhod");
var surnameP = localStorage.getItem("surNameVhod");
var firstnameP = localStorage.getItem("firstNameVhod");
var photoP = localStorage.getItem("photo");

let imageElement = document.getElementById('imagePhotoContainer');

imageElement.src = String(photoP);

document.getElementById("profile-login").innerText = String(logP);
document.getElementById("profile-email").innerText = String(emailP);
document.getElementById("profile-furstname").innerText = String(firstnameP);
document.getElementById("profile-surname").innerText = String(surnameP);



function gamePromo(){
    window.location.href = '/mySpaceGame-main/menu.html';
}