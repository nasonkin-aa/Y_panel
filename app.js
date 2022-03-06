import { strictEqual } from 'assert';
import net from 'net';
 
const server = net.createServer();
const connectedClients = [];

server.listen({
    host: 'localhost',
    port: 9090,
});

server.on('connection', (client) => {
    console.log('Client connected');
    client.write('Welcome'); 
    connectedClients.push(client);

    client.on('data', (res) => {
        const data = JSON.parse(res.toString());

        console.log(data.method);
    })
});



// setInterval(() => {
//     const now = new Date().toISOString();
//     connectedClients.forEach(client =>  {
//         client.write(now)
//     });
// },2000)

 
