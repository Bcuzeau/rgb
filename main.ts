let strip = neopixel.create(DigitalPin.P2, 3, NeoPixelMode.RGB)
let color = 0
basic.forever(function () {
    color += 1
    strip.showRainbow(color, color + 270)
    basic.pause(20)
})
