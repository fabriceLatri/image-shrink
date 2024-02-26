import { Container } from 'inversify';

// Domain Inmports
import { IMenu } from '@presentation/electron/Menu/contracts/IMenu';

// Infrastructure Imports
import { TYPES } from '@infrastructure/config/DI/types';
import MenuApp from '@presentation/electron/Menu/Menu';
import Window from '@presentation/electron/Window/Window';
import { IWindow } from '@presentation/electron/Window/contracts/IWindow';
import ElectronApp from '@presentation/electron/ElectronApp';

const DIContainer = new Container();
DIContainer.bind<IMenu>(TYPES.IMenu).to(MenuApp);
DIContainer.bind<IWindow>(TYPES.IWindow).to(Window);

// Instanciate App
DIContainer.bind<ElectronApp>(TYPES.ElectronApp)
  .to(ElectronApp)
  .inSingletonScope();

export { DIContainer };
