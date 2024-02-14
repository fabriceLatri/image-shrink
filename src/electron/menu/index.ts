import { Menu, app } from 'electron';
import { isMac } from '@electron/utils';

export default function createMainMenu() {
  const menu: (Electron.MenuItemConstructorOptions | Electron.MenuItem)[] = [
    {
      label: 'Fichier',
      submenu: [
        {
          label: 'Quitter',
          accelerator: 'CmdOrCtrl+W',
          click: () => app.quit(),
        },
      ],
    },
  ];

  if (isMac())
    menu.unshift({
      role: 'appMenu',
    });

  const mainMenu = Menu.buildFromTemplate(menu);

  Menu.setApplicationMenu(mainMenu);
}
