def show_paper():
    basic.show_icon(IconNames.SQUARE)

def show_rock():
    basic.show_icon(IconNames.SMALL_SQUARE)

def show_scissors():
    basic.show_icon(IconNames.SCISSORS)

def show_random_object():
    rNumber = randint(1, 3)
    if rNumber == 1:
        show_paper()
    if rNumber == 2:
        show_rock()
    if rNumber == 3:
        show_scissors()

input.on_button_pressed(Button.A, show_rock)
input.on_button_pressed(Button.B, show_paper)
input.on_button_pressed(Button.AB, show_scissors)
input.on_gesture(Gesture.SHAKE, show_random_object)