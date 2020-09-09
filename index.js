console.clear()
console.log("######################")
console.log("# Desk Lamp Debugger #")
console.log("######################")
console.log("")

const Bulb = require("./Bulb")
const DeskLamp = require("./DeskLamp")

const bulb = new Bulb(1600, 120)
const lamp = new DeskLamp(bulb)

console.log("Plugging In")
const pluggedIn = lamp.plugIn(120)
console.log(" * Expect 0  :", pluggedIn)

console.log("\nTurning On")
const turnedOn = lamp.setDimmer(0.5)
console.log(" * Expect 800:", turnedOn)
console.log('')
