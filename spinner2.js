let time = 100
let spinArr = ['\r|   ', '\r/   ', '\r-   ', '\r\\  ', '\r|  ', '\r/ ', '\r-  ', '\r\\  ']
const spin = arr => {
  arr.forEach((frame, index) => {
    setTimeout(() => {
      process.stdout.write(frame);
    }, time)
    time += 200
  })
}
spin(spinArr)

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\  ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|  ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/ ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-  ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\  ');
// }, 1500);