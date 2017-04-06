const {app, BrowserWindow, globalShortcut, dialog} = require('electron')
const path = require('path')
const url = require('url')

let win
let choice = -1

function createWindow() {
  win = new BrowserWindow({width:1000, height: 800})

  win.on('close', (e) => {
    if (choice === -1) {
      choice = dialog.showMessageBox({type:'question', title:'温馨提示', message: '确定要退出应用吗？', buttons:['退出', '最小化到系统托盘']})
    }
    if (choice === 0) {
      win = null
    } else {
      e.preventDefault()
      win.hide()
    }
  })

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file',
    slashes: true
  }))

  win.setMenuBarVisibility(false)

  const ret = globalShortcut.register('CommandOrControl+F12', () => {
      console.log('CommandOrControl+F12 is pressed')
      win.webContents.openDevTools()
  })

  if (!ret) {
      console.log('CommandOrControl+F12 registration failed')
  }
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
