export function DarkLight({ dark, onDarkMode }) {
  return (
    <button
      onClick={onDarkMode}
      className="dark:bg-neutral-700 bg-neutral-100 rounded-lg p-3"
    >
      {!dark ? (
        <img src="/assets/images/icon-moon.svg" alt="Dark Mode" />
      ) : (
        <img src="/assets/images/icon-sun.svg" alt="Light Mode" />
      )}
    </button>
  );
}
