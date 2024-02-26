import { injectable } from 'inversify';
import { IWindow } from '@presentation/electron/Window/contracts/IWindow';

@injectable()
abstract class AbstractWindow implements IWindow {
  abstract createMainWindow(): void;
  abstract createMainMenu(): void;
}

export default AbstractWindow;
