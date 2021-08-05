// P2P Server configuration

const { PeerServer } = require('peer');
const p2pPort = process.env.PORT || 9000;
let peerServer;

try {
    peerServer = PeerServer({ port: p2pPort, path: '/' });
    console.log(`[INFO] P2P server started on port ${p2pPort}`);
} catch (error) {
    console.log(error);
}

peerServer.on('connection', (client) => {
    console.log(`[INFO] New peer with ID = [${client.id}] joined the network.`);
});