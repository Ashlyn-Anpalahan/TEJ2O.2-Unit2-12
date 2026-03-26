/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ashlyn
 * Created on: Mar 2026
 * This program will allow the sonar to change colors (red and green) based on its distance. 
*/

// variables
let distance = 0
const strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

strip.clear()
strip.show()

// button a
input.onButtonPressed(Button.A, function () {

    distance = sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.Centimeters)

    if (distance < 10) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    strip.show()
})
