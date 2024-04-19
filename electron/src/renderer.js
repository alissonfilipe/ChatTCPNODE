const net = require('net');

// Conecte-se ao servidor na porta e endereço IP especificados
const PORT = 3000;
const HOST = '127.0.0.1';
const client = net.createConnection({ port: PORT, host: HOST }, () => {
    console.log(`Conectado ao servidor ${HOST}:${PORT}`);
});

// Lógica para lidar com mensagens recebidas do servidor
client.on('data', data => {
    console.log('Mensagem recebida do servidor:', data.toString());
});

// Lógica para lidar com a desconexão do servidor
client.on('end', () => {
    console.log('Conexão com o servidor encerrada');
});
