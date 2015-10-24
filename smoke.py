#! smoke.py
# from http://www.learningaboutelectronics.com/Articles/MQ-2-smoke-sensor-circuit-with-raspberry-pi.php
import time
# import botbook_mcp3002 as mcp #
import random

smokeLevel= 0

def readSmokeLevel():
    global smokeLevel
    # smokeLevel= mcp.readAnalog()

def readSmokeLevelDummy():
    global smokeLevel
    smokeLevel= random.randint(0,1024)

def main():
        # readSmokeLevel() #
        readSmokeLevelDummy()
        print smokeLevel #

        # pass

main()
