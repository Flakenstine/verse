const electron = require('electron')

const { app } = electron
const { BrowserWindow } = electron

const path = require('path')
const url = require('url')

let mainWindow
let loadingScreen

let willQuitApp = false;


function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1435,
    height: 850,
    minHeight: 500,
    minWidth: 950,
    title: 'Connect',
    center: true,
    show: false,
    // frame: false, REDUNDENT DUE TO titleBarStyle set to hidden
    autoHideMenuBar: true,
    alwaysOnTop: false,
    icon: '../src/images/AppIcon.icns',
    titleBarStyle: 'none',
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadURL(
    process.env.ELECTRON_START_URL
      || url.format({
        pathname: path.join(__dirname, '/../public/index.html'),
        protocol: 'file:',
        slashes: true,
      }),
  )

  mainWindow.openDevTools()

  mainWindow.webContents.on('did-finish-load', () => {
    if (loadingScreen) {
      loadingScreen.setResizable(true);
      loadingScreen.setBounds({
        width: 1435,
        height: 850,
        center: true
      })
      loadingScreen.center()
      setTimeout(() => {
        mainWindow.setBounds({
          width: 1435,
          height: 850,
          title: 'Connect',
          center: true,
          show: true,
          frame: false,
          autoHideMenuBar: true,
          alwaysOnTop: false,
          icon: '../src/images/AppIcon.icns',
          titleBarStyle: 'hidden'
        })
        loadingScreen.close()
        mainWindow.show()
      }, 1000)
    }
  })



  mainWindow.on('maximize', () => {
    mainWindow.setMenuBarVisibility(visible)
  })

  mainWindow.on('close', (event) => {
    if (willQuitApp) {
      mainWindow = null;
      app.quit();
    } else {
      mainWindow.hide();
      event.preventDefault();
    }
  })
}

function createLoadingScreen() {
  loadingScreen = new BrowserWindow({
    width: 300,
    height: 300,
    title: 'Palace Connect',
    center: true,
    show: true,
    frame: false,
    autoHideMenuBar: true,
    alwaysOnTop: false,
    icon: '../src/images/AppIcon.icns',
    webPreferences: {
      nodeIntegration: true
    }
  })
  loadingScreen.setResizable(false);
  loadingScreen.loadURL(`file://${__dirname}/../public/loading.html`)
  loadingScreen.on('closed', () => loadingScreen)
  loadingScreen.webContents.on('did-finish-load', () => {
    loadingScreen.show()
  })
}


app.on('ready', () => {
  createLoadingScreen()
  createWindow()
})

app.on('toggle-popwindow', () => {
  mainWindow.show();
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  } else {
    mainWindow.show();
  }
})

app.on('before-quit', () => willQuitApp = true);
