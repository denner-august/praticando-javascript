function horario(){
    var msg = window.document.getElementById('msg');
    var foto = window.document.getElementById('foto');
    var image = window.document.getElementById('imagem');
    var hora = new Date();
    var horatual = hora.getHours();
    msg.innerHTML = `Agora são ${horatual} horas`
    if (horatual >= 0 &&  horatual <= 12){
        image.src = 'images/1.png'
        document.body.style.background = '#1d2d50'

    }
    else if (horatual > 12 && horatual < 18){
        image.src = 'images/2.png'
        document.body.style.background = '#133b5c'
    }
    else {
        image.src ='images/3.png'
        document.body.style.background = '#1e5f74'
    }
}
