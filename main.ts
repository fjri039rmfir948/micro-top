input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C5 C5 G G G G G C5 ", 120), music.PlaybackMode.UntilDone)
})
basic.showString("Hello!")
for (let index = 0; index < 4; index++) {
    music.play(music.stringPlayable("B C5 B B C C E C ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # . # . #
        # . # . #
        # . # . #
        # . # . #
        # # # # #
        `)
}
basic.showString("Godbay")
