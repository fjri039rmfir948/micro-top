basic.showString("Hello!")
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        # . # . #
        # . # . #
        # . # . #
        # . # . #
        # # # # #
        `)
}
basic.forever(function () {
    music.play(music.stringPlayable("B C5 B B C C E C ", 120), music.PlaybackMode.UntilDone)
})
