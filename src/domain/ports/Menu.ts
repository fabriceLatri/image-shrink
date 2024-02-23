import { IMenu } from '@domain/models/interfaces/IMenu';
import { injectable } from 'inversify';

@injectable()
abstract class MenuPort implements IMenu {
  abstract createMainMenu(): void;
}

export default MenuPort;
