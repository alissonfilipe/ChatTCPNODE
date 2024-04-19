const { app, BrowserWindow } = require('electron');
const net = require('net');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadFile('index.html');


    // Inicie o servidor TCP quando a janela principal estiver pronta
    startTCPServer();
}

function startTCPServer() {
    const server = net.createServer(socket => {
        console.log('Novo cliente conectado');

        // Lógica para lidar com mensagens recebidas do cliente
        socket.on('data', data => {
            console.log('Mensagem recebida do cliente:', data.toString());
            // Adicione sua lógica para processar a mensagem recebida aqui
        });

        // Lógica para lidar com a desconexão do cliente
        socket.on('end', () => {
            console.log('Cliente desconectado');
        });
    });

    const PORT = 3000;
    server.listen(PORT, () => {
        console.log(`Servidor TCP iniciado na porta ${PORT}`);
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
