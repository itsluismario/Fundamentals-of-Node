const { app, BrowserWindow } = require('electron');

let mainWindow;

// -- Open it when app is ready
app.on('ready', createWindow);

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
    })

    mainWindow.loadFile('index.html')
}

