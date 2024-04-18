
var users = [
    {   
        id: 1, 
        login: 'Mihast1k', 
        password: '1234', 
        email: 'mbogacev49@gmail.com', 
        firstname: 'Михаил', 
        surname: 'Богачев', 
        photo: 'https://otkritkis.com/wp-content/uploads/2022/01/6b7884418cfc30cfd18272d71b10e8f1ed50a862751afa8e492daf3cd39732ae.jpg',
    },
        
    {   
        id: 0, 
        login: 'admin', 
        password: 'admin',
        firstname: 'Админ', 
        surname: 'Админов', 
        email: 'admin@mail.ru',
        photo: 'https://vsserver.ru/files/news_imgs/1686336659.jpg',
    },
]

var login;
var password;


function inSign(){
    
    var login = document.querySelector('#login').value;
    var password = document.querySelector('#password').value;

    var user = users.find(function(user){

        localStorage.setItem("loginVhod", login);
        localStorage.setItem("passwordVhod", password);
        localStorage.setItem("EmailVhod", user.email);
        localStorage.setItem("firstNameVhod", user.firstname);
        localStorage.setItem("surNameVhod", user.surname);
        localStorage.setItem("photo", user.photo);

        return user.login === login && user.password === password;
    });
   
  
    if(user){
        localStorage.setItem('authenticated', 'true');
        alert('Вход выполнен успешно');
        window.location.href = 'mainShop.html';
    } 
    else{
        alert('Неверный логин или пароль');
    }
}

function exitProfile(){
    localStorage.setItem('authenticated', 'false');
    window.location.href = 'mainShop.html'
}

function mainShop(){
    window.location.href = 'mainShop.html';
}

function signProfile(){
    
    if(localStorage.getItem('authenticated') === 'true'){
        window.location.href = 'profile.html';
        return;
    }
    else if (localStorage.getItem('authenticated') === 'false'){
        window.location.href = 'vhod.html';
        return;
    }

    localStorage.setItem('authenticated','false');
    signProfile(); 
    
}