export function CharLimitInput({ charLimit, setCharLimit }) {
  return (
    <input
      type="text"
      className="bg-transparent border border-neutral-700 dark:border-neutral-600 outline-none px-3 py-2 rounded-md w-full max-w-14 text-neutral-900 dark:text-neutral-000 text-preset-4"
      value={charLimit}
      onChange={(e) => setCharLimit(Number(e.target.value))}
    />
  );
}
