import { Menu } from 'electron';
import { injectable } from 'inversify';

import MenuPort from '@domain/ports/Menu';
import { isDev, isMac } from '@electron/utils';

import type { AppMenuItems } from '@infrastructure/adapters/Menu/types';

@injectable()
class MenuAdapter extends MenuPort {
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

export default MenuAdapter;
