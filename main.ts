let Hand = 0
input.onGesture(Gesture.Shake, function () {
    Hand = randint(1, 3)
    if (Hand == 1) {
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # . #
            # . # . #
            # # # # #
            `)
        music.playSoundEffect(music.createSoundEffect(
        WaveShape.Sine,
        4224,
        5000,
        255,
        0,
        9999,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), SoundExpressionPlayMode.UntilDone)
    } else if (Hand == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
        music.playSoundEffect(music.createSoundEffect(
        WaveShape.Sine,
        5000,
        0,
        255,
        0,
        500,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), SoundExpressionPlayMode.UntilDone)
    }
})
