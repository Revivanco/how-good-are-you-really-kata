const recordScore = [80, 60, 70, 90]
const reginaScore = 100

const betterThanAverage =(classPoint, yourPoints) => {
    let sumaNumeros = 0;
    let media = classPoint.length;
    for (let i = 0; i < classPoint.length; i++) {
        sumaNumeros = classPoint[i] + sumaNumeros
    }
    let resultado = sumaNumeros / media
    console.log(resultado)
    console.log(yourPoints)
    console.log(resultado > yourPoints)
    if (resultado >= yourPoints) {
        console.log("El promedio mas alta de la clase no fue Regina :(")
        return false
    } else {
        console.log("el promedio de Regina es mayor, felicidades!")
        return true
    }

}

betterThanAverage([80, 60, 70, 90], 100)