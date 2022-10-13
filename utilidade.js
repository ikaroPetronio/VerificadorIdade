res.style.textAlign = 'center' //colocar controle de CSS fora de funções
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector('div#res')
    /*var menos = Number(fano.value)
    var idade = ano - menos
    res.innerText = "sua idade é " + idade*/
    if (fano.value.length == 0 || fano.value > ano ){
        window.alert("[ERRO] verifique os dados e tente novamente...")
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade= ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked){
        genero = 'homem'
        if (idade >= 0 && idade < 12 ) {
            img.setAttribute('src', 'menino.png')

        } else if (idade <= 25)  {
            img.setAttribute('src', 'jovemhomem.png')

        } else if (idade <= 50)  {
            img.setAttribute('src', 'homem.png')

        } else {
            img.setAttribute('src', 'idoso.png')
        }       

       } else if (fsex[1].checked){
        genero = 'mulher'

            if (idade >= 0 && idade < 12 ){
            img.setAttribute('src', 'menina.png')

            } else if (idade < 25){
            img.setAttribute('src', 'jovemmulher.png')

            } else if (idade < 50){
            img.setAttribute('src', 'mulher.png')

            } else {
            img.setAttribute('src', 'idosa.png')

            }
       }

       res.innerHTML = `Detectamos ${genero} com ${idade} anos`
       res.appendChild(img)
       img.style.marginTop = '25px'
       img.style.borderRadius = '500px'
    }
}