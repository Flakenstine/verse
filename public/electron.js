const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

let mainWindow,
    loadingScreen

function createWindow() {
  mainWindow = new BrowserWindow({ 
        width: 1000, 
        height: 700,
        title: "Palace Connect",
        center: true,
        show: false,
        frame: false,
        autoHideMenuBar: true,
        alwaysOnTop: false,
        icon: '../src/images/AppIcon.icns',
        titleBarStyle: 'hidden'
    })

  mainWindow.loadURL('file://' + __dirname + '/index.html');

  mainWindow.webContents.on('did-finish-load', () => {
        if (loadingScreen) {
            let loadingScreenBounds = loadingScreen.getBounds();
            loadingScreen.setBounds({
                width: 1000, 
                height: 700,
                center: true
            });
            loadingScreen.center();
            setTimeout(() => {
                mainWindow.setBounds({
                    width: 1000, 
                    height: 700,
                    title: "Palace Connect",
                    center: true,
                    show: true,
                    frame: false,
                    autoHideMenuBar: true,
                    alwaysOnTop: false,
                    icon: '../src/images/AppIcon.icns',
                    titleBarStyle: 'hidden'
                });
                loadingScreen.close();
                mainWindow.show();
            }, 1000);
            
        }
    });
  

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  mainWindow.on('maximize', () => {
    mainWindow.setMenuBarVisibility(visible);
  })
}

function createLoadingScreen() {
    loadingScreen = new BrowserWindow(Object.assign({
        width: 300, 
        height: 300,
        title: "Palace Connect",
        center: true,
        show: true,
        frame: false,
        autoHideMenuBar: true,
        alwaysOnTop: false,
        icon: '../src/images/AppIcon.icns'
    }));
    loadingScreen.loadURL('file://' + __dirname + '/loading.html');
    loadingScreen.on('closed', () => loadingScreen = null);
    loadingScreen.webContents.on('did-finish-load', () => {
        loadingScreen.show();
    });
}

app.on('ready', () => {
    createLoadingScreen();
    createWindow();
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})