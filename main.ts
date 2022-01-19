input.onButtonPressed(Button.A, function () {
    radio.sendString("Hola, probando")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
basic.forever(function () {
	
})
