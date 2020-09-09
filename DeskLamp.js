class DeskLamp {

  voltageReceived = 0
  dimmerPosition = 0

  constructor(bulb) {
    this.bulb = bulb
  }

  plugIn(voltage) {
    this.voltageReceived = voltage
    return this.lumenOutput()
  }

  unPlug() {
    this.voltageReceived = 0
    return this.lumenOutput()
  }

  setDimmer(position) {
    this.dimmerPosition = position
    return this.lumenOutput()
  }

  voltageToBulb() {
    return this.voltageReceived * this.dimmerPosition
  }

  lumenOutput() {
    const voltageToBulb = this.voltageToBulb()
    return this.bulb.applyVoltage(voltageToBulb)
  }
}

module.exports = DeskLamp
