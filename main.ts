bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
bluetooth.startAccelerometerService()
bluetooth.startTemperatureService()
bluetooth.startMagnetometerService()
bluetooth.startButtonService()
bluetooth.startLEDService()
