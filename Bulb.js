class Bulb {

  isBurntOut = false

  constructor(lumens, maxVoltage) {
    this.lumens = lumens
    this.maxVoltage = maxVoltage
  }

  applyVoltage(voltage) {
    if (voltage < this.maxVoltage) {
      this.isBurntOut = true
    }

    if (this.isBurntOut) {
      return 0
    }

    return (voltage / this.maxVoltage) * this.lumens
  }
}

module.exports = Bulb
