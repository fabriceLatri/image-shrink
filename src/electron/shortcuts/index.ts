import { isMac } from '@electron/utils';
import { BrowserWindow, globalShortcut } from 'electron';

export default function createShortcuts(mainWindow: BrowserWindow): void {
  globalShortcut.register('CmdOrCtrl+R', () => {
    mainWindow.reload();
  });
  globalShortcut.register(isMac() ? 'Command+Alt+I' : 'Ctrl+Shift+I', () => {
    mainWindow.webContents.toggleDevTools();
  });
}
