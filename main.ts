let i = 0
input.onButtonPressed(Button.A, function () {
    i = randint(1, 10)
    for (let index = 0; index < i; index++) {
        basic.showNumber(i)
        i += -1
        basic.clearScreen()
    }
})
