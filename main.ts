controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 100, 100)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.pewPew.play()
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f f . . . . . 
        . . . . . . f f f f f f f . . . 
        . . . . . . . f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 200, 0)
    projectile.startEffect(effects.fire)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    music.powerUp.play()
    otherSprite.destroy(effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false, effects.splatter)
})
let mySprite2: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
info.setScore(0)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . f f f f f f f f f f . . . . 
    . . . . . . f f . . . . . . . . 
    f f 6 8 8 8 8 8 8 f f f . . . . 
    f f 6 8 8 8 8 8 8 f f f f . . . 
    . . . . . 8 8 8 8 8 8 8 8 8 8 . 
    . . . . . . 8 8 8 8 8 8 8 8 8 . 
    . . . . . f . f . . . . f . f . 
    . . . . . . f f f f f f f f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
game.onUpdateInterval(5000, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . f . . . . 
        . . . . . . . . . . f f . . . . 
        . . d d . . . . . f f f . . . . 
        . f d d f f f f f f f f 2 . . . 
        f f f f f f f f f f f f 2 4 5 . 
        . f f f f f f f f f f f 2 4 5 . 
        . . . . f f f . . f f f 2 . . . 
        . . . . . f f . . . f f . . . . 
        . . . . . . f . . . . f . . . . 
        `, SpriteKind.Enemy)
    mySprite2.x = scene.screenWidth()
    mySprite2.y = randint(0, 10)
    mySprite2.follow(mySprite, 50)
})
