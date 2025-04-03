export function Error({ charLimit }) {
  return (
    <p className="text-orange-500 text-preset-4 flex items-center gap-3 w-full">
      <img src="/assets/images/icon-info.svg" alt="Info" />
      <span>Limit reached! Your text exceeds {charLimit} characters.</span>
    </p>
  );
}
