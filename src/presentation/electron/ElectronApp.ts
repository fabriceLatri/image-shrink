import { BrowserWindow, app } from 'electron';
import { inject, injectable } from 'inversify';
import { TYPES } from '@infrastructure/config/DI/types';
import { IWindow } from '@presentation/electron/Window/contracts/IWindow';

@injectable()
class ElectronApp {
  constructor(@inject(TYPES.IWindow) private _win: IWindow) {
    this.run = this.run.bind(this);
    this.quit = this.quit.bind(this);
    this.reactivate = this.reactivate.bind(this);
  }

  public run() {
    this._win.createMainWindow();
    this._win.createMainMenu();
  }

  public quit() {
    if (process.platform !== 'darwin') app.quit();
  }

  public reactivate() {
    if (BrowserWindow.getAllWindows().length === 0) this.run();
  }
}

export default ElectronApp;
