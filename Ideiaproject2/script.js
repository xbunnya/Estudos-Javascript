function verificar () {
var cor = window.document.getElementById ('cor')
var nome = window.document.getElementById ('nome')

var res = document.getElementById ('res')
if (cor.value == 0 || nome.value ==0) {
    window.alert('[ERRO] Verifique os dados novamente')
} else {
    var fsex = document.getElementsByName('sex')
    var genero = " "
    if (fsex[0].checked) {
     res.innerHTML = ` Sua gata se chama ${nome}! :3 ` 
    } else if (fsex[1].checked) {
        res.innerHTML = `Seu gato se chama ${nome}! :3`

    }

}
} 



