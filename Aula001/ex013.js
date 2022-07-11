var Agora = new Date()
var hr = Agora.getHours()
console.log (`Agora são ${hr} horas`)

if (hr <= 12 && hr >=5) { 
    console.log ('Bom dia')
    
} else if (hr <= 18 && hr > 12 ) {
    console.log ('Boa tarde!')
} else if( hr > 18) {
    console.log ('Boa noite')
} else if (hr >= 1 && hr> 0 )  {
    console.log('Boa madrugada')
}
