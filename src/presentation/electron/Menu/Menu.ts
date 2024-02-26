import { Menu } from 'electron';
import { injectable } from 'inversify';

import AbstractMenu from '@presentation/electron/Menu/AbstractMenu';
import { isDev, isMac } from '@presentation/electron/utils';

import type { AppMenuItems } from '@presentation/electron/Menu/types';

@injectable()
class MenuApp extends AbstractMenu {
  private readonly fileMenu: AppMenuItems = isMac ? [{ role: 'appMenu' }] : [];

  private readonly developerMenu: AppMenuItems = isDev
    ? [
        {
          label: 'Developer',
          submenu: [
            { role: 'reload' },
            { role: 'forceReload' },
            { type: 'separator' },
            { role: 'toggleDevTools' },
          ],
        },
      ]
    : [];

  createMainMenu(): void {
    const template: AppMenuItems = [
      ...this.fileMenu,
      { role: 'fileMenu' },
      ...this.developerMenu,
    ];

    const menu = Menu.buildFromTemplate(template);

    Menu.setApplicationMenu(menu);
  }
}

export default MenuApp;
