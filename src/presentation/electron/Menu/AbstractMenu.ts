import { injectable } from 'inversify';
import { IMenu } from '@presentation/electron/Menu/contracts/IMenu';

@injectable()
abstract class AbstractMenu implements IMenu {
  abstract createMainMenu(): void;
}

export default AbstractMenu;
