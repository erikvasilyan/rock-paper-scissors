input.onButtonPressed(Button.A, function show_rock() {
    basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
})
input.onButtonPressed(Button.B, function show_paper() {
    basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    `)
})
input.onButtonPressed(Button.AB, function show_scissors() {
    basic.showLeds(`
    # # . . #
    # # . # .
    . . # . .
    # # . # .
    # # . . #
    `)
})
input.onGesture(Gesture.Shake, function show_random_output() {
    
})
