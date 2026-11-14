radio.onReceivedNumber(function (receivedNumber) {
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
music.play(music.stringPlayable("A - C5 - A - C5 A ", 240), music.PlaybackMode.UntilDone)
while (input.buttonIsPressed(Button.A)) {
    input2 = 0
}
while (input.buttonIsPressed(Button.B)) {
    input2 = 1
}
basic.showString("" + (input2))
basic.forever(function () {
    if (input2 == 1) {
        temp = input.temperature()
        radio.sendNumber(temp)
        basic.pause(5000)
    }
})
