const Gpio = require('onoff').Gpio;

let led;

if (Gpio.accessible) {
  led = new Gpio(18, 'out');
  // more real code here
} else {
  led = {
    writeSync: (value) => {
      console.log('virtual led now uses value: ' + value);
    }
  };
}

//const button = new Gpio(4, 'in', 'both');
led.writeSync(1)
//button.watch((err, value) => led.writeSync(value));
process.on('SIGINT', () => {
    led.unexport();
    //button.unexport();
});
  