import { Container, decorate, injectable } from 'inversify';

// Domain Inmports
import { IMenu } from '@domain/models/interfaces/IMenu';
import MenuPort from '@domain/ports/Menu';
import WindowPort from '@domain/ports/Window';

// Infrastructure Imports
import { TYPES } from '@infrastructure/DI/types';
import MenuAdapter from '@infrastructure/adapters/Menu/Menu';
import WindowApdater from '@infrastructure/adapters/Window/Window';
import { IWindow } from '@domain/models/interfaces/IWindow';
import ElectronApp from '@infrastructure/app/App';

const DIContainer = new Container();
decorate(injectable(), MenuPort);
decorate(injectable(), WindowPort);
DIContainer.bind<IMenu>(TYPES.IMenu).to(MenuAdapter);
DIContainer.bind<IWindow>(TYPES.IWindow).to(WindowApdater);

// Instanciate App
DIContainer.bind<ElectronApp>(TYPES.ElectronApp)
  .to(ElectronApp)
  .inSingletonScope();

export { DIContainer };
