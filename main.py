def show_paper():
    basic.show_icon(IconNames.SQUARE)

def show_rock():
    basic.show_icon(IconNames.SMALL_SQUARE)

def show_scissors:
    basic.show_icon(IconNames.SCISSORS)

def show_random_object():
    objects = [show_rock, show_paper, show_scissors]
    objects[0]()

input.on_button_pressed(Button.A, show_rock)
input.on_button_pressed(Button.B, show_paper)
input.on_button_pressed(Button.AB, show_scissors)

input.on_gesture(Gesture.SHAKE, show_random_object)