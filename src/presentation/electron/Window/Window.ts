import path from 'path';

import { BrowserWindow, globalShortcut } from 'electron';
import { inject, injectable } from 'inversify';

import AbstractWindow from '@presentation/electron/Window/AbstractWindow';
import { TYPES } from '@infrastructure/config/DI/types';
import { IMenu } from '@presentation/electron/Menu/contracts/IMenu';

@injectable()
class Window extends AbstractWindow {
  private _mainWindow: BrowserWindow;

  @inject(TYPES.IMenu) private readonly _menu: IMenu;

  constructor() {
    super();
    this.createMainWindow = this.createMainWindow.bind(this);
    this.createMainMenu = this.createMainMenu.bind(this);
  }

  createMainWindow() {
    const mainWindow = new BrowserWindow({
      width: 500,
      height: 600,
      title: 'Image Shrink',
      icon: `${__dirname}/assets/icons/Icon_256x256.png`,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
      },
    });

    // and load the index.html of the app.
    if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
      mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
    } else {
      mainWindow.loadFile(
        path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`)
      );
    }

    this._mainWindow = mainWindow;
    this.registerShortcuts();
  }

  createMainMenu() {
    this._menu.createMainMenu();
  }

  registerShortcuts(): void {
    globalShortcut.register('CmdOrCtrl+L', () =>
      this._mainWindow?.webContents.toggleDevTools()
    );
  }
}

export default Window;
