function slowDown(velocity, printer) {
    let desaleration = 20
    while(velocity > 0) {
        printer(velocity)
        velocity -= desaleration
    }
    alert('Nave parada, as comportas podem ser abertas')
}

let velocitySpace = 150

slowDown(velocitySpace, function (velocity) {
    console.log('Velocidade atual: ' + velocity)
})