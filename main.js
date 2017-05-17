const { app, BrowserWindow } = require('electron');

let window = null;

app.on('ready', function () {

    window = new BrowserWindow({ width: 800, height: 800 });

    window.loadURL('http://localhost:4200');

    // Chrome Developer Toolsを有効にしたい場合はコメントアウトを外す
    // window.webContents.openDevTools();

    window.on('closed', function () {
        window = null;
    });

});

app.on('activate', () => {
    if (window === null) {
        createWindow()
    }
});

app.on('window-all-closed', function () {
    if (process.platform != 'darwin') {
        app.quit();
    }
});