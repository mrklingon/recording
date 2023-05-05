input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        # . . . .
        # . # . .
        # # . . .
        . # # # .
        `)
    record.startRecording()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # # .
        . # . . .
        # . # # #
        . # . . .
        . . # # .
        `)
    record.playAudio()
})
for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
}
basic.forever(function () {
	
})
