const n = parseFloat(prompt("ingresa tu numero"))
let p = document.getElementsByTagName("p")

function factorial(n) {
    let resul = 1
    for (let i = 1; i <= n; i++) {
        resul *= i
    }
    return resul
}


 if (isNaN(n)) {
    alert("ingresa un numero valido")
    location.reload()
}else {
    p[0].innerHTML = "el factorial de "+ n+ " es "+ factorial(n)
}
function again(){
    location.reload()
}

// console.log(factorial(n))



