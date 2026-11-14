radio.onReceivedNumber(function (receivedNumber) {
    basic.clearScreen()
    datalogger.log(datalogger.createCV("temp", receivedNumber))
    serial.writeLine("Temp:" + receivedNumber)
    basic.showNumber(receivedNumber)
})
datalogger.onLogFull(function () {
    basic.showIcon(IconNames.Sad)
})
let temp = 0
let input2 = 0
basic.showIcon(IconNames.Happy)
radio.setGroup(117)
led.setBrightness(255)
serial.setBaudRate(BaudRate.BaudRate1200)
serial.writeLine("Temp sensor 0.1.1")
basic.pause(1000)
basic.showIcon(IconNames.Heart)
music.play(music.stringPlayable("A - C5 - A - C5 A ", 240), music.PlaybackMode.InBackground)
pauseUntil(() => input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))
basic.clearScreen()
if (input.buttonIsPressed(Button.A)) {
    input2 = 0
    basic.pause(500)
    basic.showString("RX")
    basic.pause(500)
} else if (input.buttonIsPressed(Button.B)) {
    input2 = 1
    basic.pause(500)
    basic.showString("TX")
    basic.pause(500)
} else {
	
}
basic.forever(function () {
    if (input2 == 1) {
        basic.showString("" + (input2))
        temp = input.temperature()
        radio.sendNumber(temp)
        basic.pause(10000)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
})
