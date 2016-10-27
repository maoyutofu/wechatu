const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow
let lockWindow

function createWindow() {
  mainWindow = new BrowserWindow({width:1000, height: 800})
  mainWindow.loadURL(`file://${__dirname}/index.html`)
  mainWindow.setMenuBarVisibility(false);
  const globalShortcut = electron.globalShortcut
  const ret = globalShortcut.register('Shift+Control+F12', () => {
      console.log('Shift+Control+F12 is pressed')
      mainWindow.webContents.openDevTools();
  })
  if (!ret) {
      console.log('Shift+Control+F12 registration failed')
  }
}

app.on('ready', createWindow);

app.on('window-all-closed', function(){
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', function() {
  if (mainWindow === null) {
    createWindow()
  }
});
