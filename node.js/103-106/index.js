
//core module example
// const dns = require('node:dns');

// const options = {
//   family: 6,
//   hints: dns.ADDRCONFIG | dns.V4MAPPED,
// };

// dns.lookup('google.com', options, (err, address, family) => {
//   console.log('address: %j family: IPv%s', address, family)
// });

//local module example; wrote it here, but exported it to the node shell and executed it within the shell
function greeting(name) {
    return `Hello ${name}`;
}
module.exports = greeting;