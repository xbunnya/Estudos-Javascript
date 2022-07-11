function carregar () {
var msg = window.document.getElementById ('msg')
var img = document.getElementById ('imagem')
var data = new Date
var hora = data.getHours()



msg.innerHTML = `Agora são ${hora} horas. `
if (hora>= 0 && hora <= 12) {
    
    img.src = 'manha.png'
    document.body.style.background = '#edd4bd'
} else if (hora > 12 && hora <= 18 ) {
    // BOA TARDE! 
    img.src = 'tarde.png'
    document.body.style.background = '#c37b54'
} else {
    // BOA NOITE!
   
   
    img.src = 'noite.png'
    document.body.style.background = '#033536'
}


}