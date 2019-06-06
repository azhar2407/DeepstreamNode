const ds = require('deepstream.io-client-js');

const client = ds('wss://ws.rupeek.com', {
  subscriptionTimeout: 500000,
}).login();

client.on('error', (msg, event, topic) => {
  console.error(`[${event}][${topic}]  Deepstream Error: ${msg}`);
});

// Client A
client.event.subscribe('beta/pci_ops', data => {
  // handle published data
console.log(data);
})

// Client B
//client.event.emit('dev/pci_ops', { some: 'data1' });
//client.event.emit('dev/pci_ops', { some: 'data2' });
//client.event.emit('dev/pci_ops', { some: 'data3' });
module.exports = client;
