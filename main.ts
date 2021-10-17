function human_detect () {
    huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
    hdc = 0
    hd = false
    basic.showIcon(IconNames.House)
    while (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock) || hd == true) {
        if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            basic.showIcon(IconNames.StickFigure)
        } else {
            while (hd == false && hdc < 200) {
                if (pins.analogReadPin(AnalogPin.P0) > 200) {
                    hd = true
                }
                hdc += 1
                basic.pause(20)
            }
            if (hd == true) {
                basic.showIcon(IconNames.StickFigure)
            } else {
                basic.showIcon(IconNames.House)
            }
        }
    }
}
function flame_detect () {
	
}
let hd = false
let hdc = 0
let ds = DS1302.create(DigitalPin.P13, DigitalPin.P14, DigitalPin.P15)
huskylens.initI2c()
OLED.init(128, 64)
Speech.Wait_XFS_Status(Speech.ChipStatus_Type.ChipStatus_InitSuccessful)
human_detect()
basic.forever(function () {
	
})
