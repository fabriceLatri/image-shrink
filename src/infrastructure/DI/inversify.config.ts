import { Container } from 'inversify';
import { IMenu } from '@domain/models/interfaces/IMenu';
import { TYPES } from '@infrastructure/DI/types';
import MenuAdapter from '@infrastructure/adapters/Menu/MenuAdapter';

const DIContainer = new Container();
DIContainer.bind<IMenu>(TYPES.IMenu).to(MenuAdapter);

export { DIContainer };
