const { app, BrowserWindow, Tray, Menu, globalShortcut } = require('electron');
const path = require('path');

let win;
let tray;

function createWindow() {
  win = new BrowserWindow({
    width: 400,
    height: 300,
    frame: false,
    alwaysOnTop: true,
    resizable: true,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadURL('https://board.mile.app');

  // Minimize → hide to tray
  win.on('minimize', e => { e.preventDefault(); win.hide(); });

  createTray();
}

function createTray() {
  tray = new Tray(path.join(__dirname, 'icon.ico'));
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Restore', click: () => win.show() },
    { label: 'Quit', click: () => app.quit() }
  ]);
  tray.setToolTip('Mile Board Mini PRO');
  tray.setContextMenu(contextMenu);
  tray.on('click', () => win.isVisible() ? win.hide() : win.show());
}

app.whenReady().then(() => {
  createWindow();
  globalShortcut.register('Control+M', () => {
    win.isVisible() ? win.hide() : win.show();
  });
});
