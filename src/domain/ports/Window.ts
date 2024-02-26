import { IWindow } from '@domain/models/interfaces/IWindow';

abstract class WindowPort implements IWindow {
  abstract createMainWindow(): void;
  abstract createMainMenu(): void;
}

export default WindowPort;
