/* PirSensorsWithRelay */
// By Duane Degn
// October 31, 2015

// Based on Arduino example code "Button".

// constants won't change. They're used here to
// set pin numbers and active state:
const int TOP_SENSOR = 2;     // the number of the PIR pin
const int BOTTOM_SENSOR = 3;  // the number of the PIR pin
const int ACTIVE = HIGH;     
const int RELAY_PIN =  13;      // the number of the LED (or relay) pin

// variables will change:
int topSensorState = 0;         // variable for reading the top PIR sensor
int bottomSensorState = 0;      // variable for reading the bottom PIR sensor

void setup() 
{
  // initialize the relay pin as an output:
  pinMode(RELAY_PIN, OUTPUT);
  // initialize the PIR sensor pins as inputs:
  pinMode(TOP_SENSOR, INPUT);
  pinMode(BOTTOM_SENSOR, INPUT);
}

void loop()
{
  // read the state of the PIR sensors:
  topSensorState = digitalRead(TOP_SENSOR);
  bottomSensorState = digitalRead(BOTTOM_SENSOR);

  // check if either of the PIR sensors are active.
 
  if ((topSensorState == ACTIVE) or (bottomSensorState == ACTIVE))
  {
    // turn relay on:
    digitalWrite(RELAY_PIN, HIGH);
  }
  else 
  {
    // turn relay off:
    digitalWrite(RELAY_PIN, LOW);
  }
}





/*
I assumed the PIR sensors are active high, but if they're active low, change this line:
const int ACTIVE = HIGH;
To:
const int ACTIVE = LOW;
*/
