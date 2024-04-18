var scoreGame =  localStorage.getItem('gameScore');
var promoKod = 'PEOPLE30H2'
document.getElementById("gameOverScore").innerText = String(scoreGame);

    if(scoreGame >= 2000){
        document.getElementById("promo").innerText = String(promoKod);
    }
    else{
        document.getElementById("promo").innerText = String('Для полчуния промо нужно больше\n2000 очков ');
    }

