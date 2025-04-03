import { Error } from "./Error";

export function Textarea({ text, setText, error, charLimit }) {
  return (
    <>
      <textarea
        placeholder="Start typing here… (or paste your text)"
        className={`block w-full min-h-52 text-preset-3 bg-neutral-100 dark:bg-neutral-800 border-2 ${
          error
            ? "border-orange-500"
            : "border-neutral-200 dark:border-neutral-700 focus-visible:border-neutral-400 dark:focus-visible:border-neutral-700"
        }  text-neutral-700 dark:text-neutral-200 outline-none p-5 rounded-xl resize-none`}
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      {error && <Error charLimit={charLimit} />}
    </>
  );
}
