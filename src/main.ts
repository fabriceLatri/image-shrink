import 'reflect-metadata';

import { app } from 'electron';

import { DIContainer } from '@infrastructure/DI/inversify.config';
import { TYPES } from '@infrastructure/DI/types';
import ElectronApp from '@infrastructure/app/App';

try {
  const mainApplication = DIContainer.get<ElectronApp>(TYPES.ElectronApp);

  // Handle creating/removing shortcuts on Windows when installing/uninstalling.
  if (require('electron-squirrel-startup')) {
    mainApplication.quit();
  }

  // Set env
  process.env.NODE_ENV = 'development';

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', () => {
    mainApplication.run();
  });

  // Quit when all windows are closed, except on macOS. There, it's common
  // for applications and their menu bar to stay active until the user quits
  // explicitly with Cmd + Q.
  app.on('window-all-closed', () => {
    mainApplication.quit();
  });

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    mainApplication.reactivate();
  });
  // In this file you can include the rest of your app's specific main process
  // code. You can also put them in separate files and import them here.
} catch (error) {
  if (error instanceof Error)
    console.error(`!!! MAIN PROCESS ERROR: ${error.message} !!!`);
  process.exit(1);
}
