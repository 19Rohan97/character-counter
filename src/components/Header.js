import { DarkLight } from "./DarkLight";
import { Logo } from "./Logo";

export function Header({ dark, onDarkMode }) {
  return (
    <header className="max-w-990 mx-auto flex w-full justify-between items-center">
      <Logo dark={dark} />

      <DarkLight dark={dark} onDarkMode={onDarkMode} />
    </header>
  );
}
