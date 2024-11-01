bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
    keyboard.startKeyboardService()
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.A, function () {
    keyboard.sendString("w")
})
basic.forever(function () {
	
})
