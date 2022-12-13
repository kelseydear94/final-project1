input.onButtonPressed(Button.A, function () {
    move = 0
    snake.move(0)
    snake_2.move(0)
    snake.change(LedSpriteProperty.X, -1)
    snake_2.change(LedSpriteProperty.X, -1)
    while (move == 0) {
        basic.pause(diff)
        snake.change(LedSpriteProperty.X, -1)
        snake_2.change(LedSpriteProperty.X, -1)
        basic.pause(diff)
    }
    x = -1
    y = 0
})
input.onButtonPressed(Button.AB, function () {
    snake.move(0)
    snake_2.move(0)
    snake.change(LedSpriteProperty.Y, 1)
    snake_2.change(LedSpriteProperty.Y, 1)
    x = 0
    y = -1
})
input.onButtonPressed(Button.B, function () {
    move = 1
    snake.move(0)
    snake_2.move(0)
    snake.change(LedSpriteProperty.X, 1)
    snake_2.change(LedSpriteProperty.X, 1)
    while (move == 1) {
        basic.pause(diff)
        snake_2.change(LedSpriteProperty.X, 1)
        snake.change(LedSpriteProperty.X, 1)
        basic.pause(diff)
    }
    x = -1
    y = 0
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    snake.move(0)
    snake_2.move(0)
    snake.change(LedSpriteProperty.Y, -1)
    snake_2.change(LedSpriteProperty.Y, -1)
    x = 0
    y = 1
})
let sbhvdakjlf = 0
let move = 0
let snake_2: game.LedSprite = null
let x = 0
let y = 0
let snake: game.LedSprite = null
let diff = 0
diff = 800
snake = game.createSprite(2, 2)
let apple = game.createSprite(1, 1)
game.setScore(0)
y = 0
x = 0
let turn = 0
snake_2 = game.createSprite(2, 2)
basic.forever(function () {
    if (apple.isTouching(snake)) {
        apple.delete()
        snake_2.delete()
        apple = game.createSprite(randint(0, 4), randint(1, 3))
        snake_2 = game.createSprite(snake.get(LedSpriteProperty.X) - x, snake.get(LedSpriteProperty.Y) - y)
    }
})
basic.forever(function () {
    if (snake.get(LedSpriteProperty.X) == 0) {
        sbhvdakjlf = 0
        if (snake.get(LedSpriteProperty.Y) == 0) {
            game.gameOver()
        }
    }
    if (snake.get(LedSpriteProperty.X) == 1) {
        sbhvdakjlf = 0
        if (snake.get(LedSpriteProperty.Y) == 0) {
            game.gameOver()
        }
    }
    if (snake.get(LedSpriteProperty.X) == 2) {
        sbhvdakjlf = 0
        if (snake.get(LedSpriteProperty.Y) == 0) {
            game.gameOver()
        }
    }
    if (snake.get(LedSpriteProperty.X) == 3) {
        sbhvdakjlf = 0
        if (snake.get(LedSpriteProperty.Y) == 0) {
            game.gameOver()
        }
    }
    if (snake.get(LedSpriteProperty.X) == 4) {
        sbhvdakjlf = 0
        if (snake.get(LedSpriteProperty.Y) == 0) {
            game.gameOver()
        }
    }
})
basic.forever(function () {
    if (snake.get(LedSpriteProperty.X) == 0) {
        sbhvdakjlf = 0
        if (snake.get(LedSpriteProperty.Y) == 4) {
            game.gameOver()
        }
    }
    if (snake.get(LedSpriteProperty.X) == 1) {
        sbhvdakjlf = 0
        if (snake.get(LedSpriteProperty.Y) == 4) {
            game.gameOver()
        }
    }
    if (snake.get(LedSpriteProperty.X) == 2) {
        sbhvdakjlf = 0
        if (snake.get(LedSpriteProperty.Y) == 4) {
            game.gameOver()
        }
    }
    if (snake.get(LedSpriteProperty.X) == 3) {
        sbhvdakjlf = 0
        if (snake.get(LedSpriteProperty.Y) == 4) {
            game.gameOver()
        }
    }
    if (snake.get(LedSpriteProperty.X) == 4) {
        sbhvdakjlf = 0
        if (snake.get(LedSpriteProperty.Y) == 4) {
            game.gameOver()
        }
    }
})
basic.forever(function () {
    if (snake.get(LedSpriteProperty.X) == 0) {
        sbhvdakjlf = 0
        if (snake.get(LedSpriteProperty.Y) == 1) {
            snake.change(LedSpriteProperty.X, 4)
        }
    }
    if (snake.get(LedSpriteProperty.X) == 0) {
        sbhvdakjlf = 0
        if (snake.get(LedSpriteProperty.Y) == 1) {
            snake.change(LedSpriteProperty.X, 4)
        }
    }
    if (snake.get(LedSpriteProperty.X) == 0) {
        sbhvdakjlf = 0
        if (snake.get(LedSpriteProperty.Y) == 2) {
            snake.change(LedSpriteProperty.X, 4)
        }
    }
    if (snake.get(LedSpriteProperty.X) == 0) {
        sbhvdakjlf = 0
        if (snake.get(LedSpriteProperty.Y) == 3) {
            snake.change(LedSpriteProperty.X, 4)
        }
    }
    if (snake.get(LedSpriteProperty.X) == 0) {
        sbhvdakjlf = 0
        if (snake.get(LedSpriteProperty.Y) == 4) {
            snake.change(LedSpriteProperty.X, 4)
        }
    }
})
basic.forever(function () {
    if (snake_2.get(LedSpriteProperty.X) == 0) {
        sbhvdakjlf = 0
        if (snake_2.get(LedSpriteProperty.Y) == 1) {
            snake_2.change(LedSpriteProperty.X, 4)
        }
    }
    if (snake_2.get(LedSpriteProperty.X) == 0) {
        sbhvdakjlf = 0
        if (snake_2.get(LedSpriteProperty.Y) == 1) {
            snake_2.change(LedSpriteProperty.X, 4)
        }
    }
    if (snake_2.get(LedSpriteProperty.X) == 0) {
        sbhvdakjlf = 0
        if (snake_2.get(LedSpriteProperty.Y) == 2) {
            snake_2.change(LedSpriteProperty.X, 4)
        }
    }
    if (snake_2.get(LedSpriteProperty.X) == 0) {
        sbhvdakjlf = 0
        if (snake_2.get(LedSpriteProperty.Y) == 3) {
            snake_2.change(LedSpriteProperty.X, 4)
        }
    }
    if (snake_2.get(LedSpriteProperty.X) == 0) {
        sbhvdakjlf = 0
        if (snake_2.get(LedSpriteProperty.Y) == 4) {
            snake_2.change(LedSpriteProperty.X, 4)
        }
    }
})
