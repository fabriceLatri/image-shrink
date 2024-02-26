import { IMenu } from '@domain/models/interfaces/IMenu';

abstract class MenuPort implements IMenu {
  abstract createMainMenu(): void;
}

export default MenuPort;
