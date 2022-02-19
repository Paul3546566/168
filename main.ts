input.onButtonPressed(Button.A, function () {
    led.plot(input.compassHeading(), input.temperature())
})
input.onButtonPressed(Button.B, function () {
    led.plot(input.lightLevel(), input.soundLevel())
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    radio.setGroup(1)
    basic.pause(100)
    radio.sendString("hello")
})
basic.showString("Hello!")
basic.forever(function () {
    basic.showIcon(IconNames.StickFigure)
    basic.pause(100)
    basic.showIcon(IconNames.Umbrella)
})
