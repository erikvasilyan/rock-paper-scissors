function show_paper() {
    basic.showIcon(IconNames.Square)
}

function show_rock() {
    basic.showIcon(IconNames.SmallSquare)
}

function show_scissors() {
    basic.showIcon(IconNames.Scissors)
}

input.onButtonPressed(Button.A, show_rock)
input.onButtonPressed(Button.B, show_paper)
input.onButtonPressed(Button.AB, show_scissors)
input.onGesture(Gesture.Shake, function show_random_object() {
    let rNumber = randint(1, 3)
    if (rNumber == 1) {
        show_paper()
    }
    
    if (rNumber == 2) {
        show_rock()
    }
    
    if (rNumber == 3) {
        show_scissors()
    }
    
})
