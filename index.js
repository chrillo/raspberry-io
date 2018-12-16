const Gpio = require('onoff').Gpio;
const led = new Gpio(18, 'out');
const button = new Gpio(22, 'in', 'both');

//led.writeSync(1)


button.watch((err, value) => {
  if (err) {
    throw err;
  }
  console.log('button change', value)
  led.writeSync(value);
});


//button.watch((err, value) => led.writeSync(value));
process.on('SIGINT', () => {
    led.unexport();
    button.unexport();
});
  