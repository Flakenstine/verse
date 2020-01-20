const electron = require('electron')

const { app } = electron
const { BrowserWindow } = electron

const path = require('path')
const url = require('url')

const Store = require('./storage/store.js')

const store = new Store({
  configName: 'settings',
  defaults: {
    windowBounds: { x: 0, y: 0, width: 1435, height: 850 }
  }
});

let mainWindow
let loadingScreen

let willQuitApp = false;


function createWindow() {
    let { x, y, width, height } = store.get('windowBounds');
  mainWindow = new BrowserWindow({
    x,
    y,
    width,
    height,
    minHeight: 500,
    minWidth: 1200,
    title: 'Palace Connect',
    center: true,
    show: false,
    frame: false,
    autoHideMenuBar: true,
    alwaysOnTop: false,
    icon: '../src/images/AppIcon.icns',
    titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: true,
    },
  })

  if (process.platform == 'darwin') {
    mainWindow.setWindowButtonVisibility(false);
  }

  mainWindow.loadURL(
    process.env.ELECTRON_START_URL
      || url.format({
        pathname: path.join(__dirname, '/../public/index.html'),
        protocol: 'file:',
        slashes: true,
      }),
  )

  mainWindow.webContents.on('did-finish-load', () => {
    if (!loadingScreen.isDestroyed()) {
      loadingScreen.setResizable(true);
      loadingScreen.setBounds({
        x,
        y,
        width,
        height,
        center: true
      })
      setTimeout(() => {
        mainWindow.setBounds({
          width,
          height,
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

app.on('before-quit', () => {
  willQuitApp = true;
  
  let { width, height } = mainWindow.getBounds();
  let pos = mainWindow.getPosition();
  store.set('windowBounds', { x: pos[0], y: pos[1], width, height });
});
