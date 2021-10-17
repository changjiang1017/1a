def human_detect():
    global hdc, hmd
    huskylens.init_mode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
    hdc = 0
    hmd = False
    while True:
        if huskylens.is_appear(1, HUSKYLENSResultType_t.HUSKYLENS_RESULT_BLOCK):
            pass
        else:
            while hmd == False and hdc < 200:
                if pins.analog_read_pin(AnalogPin.P0) > 200:
                    hmd = True
                hdc += 1
                basic.pause(20)
            if hmd == True:
                basic.show_icon(IconNames.STICK_FIGURE)
            else:
                basic.show_icon(IconNames.HOUSE)
hmd = False
hdc = 0
ds = DS1302.create(DigitalPin.P13, DigitalPin.P14, DigitalPin.P15)
huskylens.init_i2c()
OLED.init(128, 64)
Speech.Wait_XFS_Status(Speech.ChipStatus_Type.CHIPSTATUS_INITSUCCESSFUL)
basic.show_icon(IconNames.SMALL_DIAMOND)
human_detect()

def on_forever():
    pass
basic.forever(on_forever)
