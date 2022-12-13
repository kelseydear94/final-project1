def on_button_pressed_a():
    global y, x
    snake.change(LedSpriteProperty.X, -1)
    y = 0
    x = -1
    snake_2.change(LedSpriteProperty.X, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global x, y
    snake.change(LedSpriteProperty.X, 1)
    x = -1
    y = 0
    snake_2.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global y, x
    snake.change(LedSpriteProperty.Y, -1)
    y = 1
    x = 0
    snake_2.change(LedSpriteProperty.Y, -1)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_pressed():
    global x, y
    snake.change(LedSpriteProperty.Y, 1)
    x = 0
    y = -1
    snake_2.change(LedSpriteProperty.Y, 1)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

sbhvdakjlf = 0
x = 0
y = 0
snake_2: game.LedSprite = None
snake: game.LedSprite = None
snake = game.create_sprite(2, 2)
snake_2 = game.create_sprite(2, 2)
apple = game.create_sprite(1, 1)
game.set_score(0)
y = 0
x = 0

def on_forever():
    global apple, snake_2
    if apple.is_touching(snake):
        apple.delete()
        apple = game.create_sprite(randint(0, 4), randint(1, 3))
        game.add_score(1)
        snake_2 = game.create_sprite(snake.get(LedSpriteProperty.X) - x,
            snake.get(LedSpriteProperty.Y) - y)
basic.forever(on_forever)

def on_forever2():
    global sbhvdakjlf
    if snake.get(LedSpriteProperty.X) == 0:
        sbhvdakjlf = 0
        if snake.get(LedSpriteProperty.Y) == 0:
            game.game_over()
    if snake.get(LedSpriteProperty.X) == 1:
        sbhvdakjlf = 0
        if snake.get(LedSpriteProperty.Y) == 0:
            game.game_over()
    if snake.get(LedSpriteProperty.X) == 2:
        sbhvdakjlf = 0
        if snake.get(LedSpriteProperty.Y) == 0:
            game.game_over()
    if snake.get(LedSpriteProperty.X) == 3:
        sbhvdakjlf = 0
        if snake.get(LedSpriteProperty.Y) == 0:
            game.game_over()
    if snake.get(LedSpriteProperty.X) == 4:
        sbhvdakjlf = 0
        if snake.get(LedSpriteProperty.Y) == 0:
            game.game_over()
basic.forever(on_forever2)

def on_forever3():
    global sbhvdakjlf
    if snake.get(LedSpriteProperty.X) == 0:
        sbhvdakjlf = 0
        if snake.get(LedSpriteProperty.Y) == 4:
            game.game_over()
    if snake.get(LedSpriteProperty.X) == 1:
        sbhvdakjlf = 0
        if snake.get(LedSpriteProperty.Y) == 4:
            game.game_over()
    if snake.get(LedSpriteProperty.X) == 2:
        sbhvdakjlf = 0
        if snake.get(LedSpriteProperty.Y) == 4:
            game.game_over()
    if snake.get(LedSpriteProperty.X) == 3:
        sbhvdakjlf = 0
        if snake.get(LedSpriteProperty.Y) == 4:
            game.game_over()
    if snake.get(LedSpriteProperty.X) == 4:
        sbhvdakjlf = 0
        if snake.get(LedSpriteProperty.Y) == 4:
            game.game_over()
basic.forever(on_forever3)

def on_forever4():
    global sbhvdakjlf
    if snake.get(LedSpriteProperty.X) == 0:
        sbhvdakjlf = 0
        if snake.get(LedSpriteProperty.Y) == 1:
            snake.change(LedSpriteProperty.X, 4)
    if snake.get(LedSpriteProperty.X) == 0:
        sbhvdakjlf = 0
        if snake.get(LedSpriteProperty.Y) == 1:
            snake.change(LedSpriteProperty.X, 4)
    if snake.get(LedSpriteProperty.X) == 0:
        sbhvdakjlf = 0
        if snake.get(LedSpriteProperty.Y) == 2:
            snake.change(LedSpriteProperty.X, 4)
    if snake.get(LedSpriteProperty.X) == 0:
        sbhvdakjlf = 0
        if snake.get(LedSpriteProperty.Y) == 3:
            snake.change(LedSpriteProperty.X, 4)
    if snake.get(LedSpriteProperty.X) == 0:
        sbhvdakjlf = 0
        if snake.get(LedSpriteProperty.Y) == 4:
            snake.change(LedSpriteProperty.X, 4)
basic.forever(on_forever4)
