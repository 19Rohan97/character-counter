import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Textarea } from "./components/Textarea";
import { Checkbox } from "./components/Checkbox";
import { CharLimitInput } from "./components/CharLimitInput";
import { Card } from "./components/Card";

export default function App() {
  const [dark, setDark] = useState(true);
  const [text, setText] = useState("");
  const [excludeSpaces, setExcludeSpaces] = useState(false);
  const [charLimitCheck, setCharLimitCheck] = useState(false);
  const [charLimit, setCharLimit] = useState(200);

  const [readingTime, setReadingTime] = useState(0);

  const [error, setError] = useState(false);

  useEffect(
    function () {
      const words = text.trim().split(/\s+/).filter(Boolean);
      setReadingTime(words.length / 100);
    },
    [text]
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  useEffect(() => {
    function handleCharLimit() {
      // if (charLimitCheck) {
      //   if (text.length > charLimit) {
      //     console.log(`Character Limit of ${charLimit} Exceeded`);
      //     setError((error) => !error);
      //   }
      // }

      setError(charLimitCheck && text.length > charLimit);
    }

    handleCharLimit();
  }, [charLimitCheck, charLimit, text]);

  function handleDarkMode() {
    setDark((dark) => !dark);
  }

  function handleExcludeSpaces(id) {
    if (id !== "character-limit") {
      console.log("Clicked " + id);
    }
  }

  function handleCharLimit(id) {
    if (id === "character-limit") {
      console.log("Clicked " + id);
    }
  }

  return (
    <main
      className="w-full min-h-screen pt-6 pb-16 px-3 bg-neutral-100 dark:bg-neutral-900"
      style={{
        backgroundImage: dark
          ? "url('/assets/images/bg-dark-theme.png')"
          : "url('/assets/images/bg-light-theme.png')",
      }}
    >
      <Header dark={dark} onDarkMode={handleDarkMode} />

      <section className="max-w-990 mx-auto flex w-full justify-center items-center my-12">
        <h1 className="w-full max-w-520 text-preset-1 text-neutral-900 dark:text-neutral-100 text-center">
          Analyze your text in real-time.
        </h1>
      </section>

      <section className="max-w-990 mx-auto w-full my-12 flex flex-wrap flex-col md:flex-row justify-between md:items-center gap-4">
        <Textarea
          text={text}
          setText={setText}
          error={error}
          charLimit={charLimit}
        />
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <Checkbox
            name="exclude-spaces"
            id="exclude-spaces"
            value={excludeSpaces}
            setValue={setExcludeSpaces}
            onClick={handleExcludeSpaces}
          >
            Exclude Spaces
          </Checkbox>

          <div className="flex items-center gap-4">
            <Checkbox
              name="character-limit"
              id="character-limit"
              value={charLimitCheck}
              setValue={setCharLimitCheck}
              onClick={handleCharLimit}
            >
              Set Character Limit
            </Checkbox>

            {charLimitCheck && (
              <CharLimitInput
                charLimit={charLimit}
                setCharLimit={setCharLimit}
              />
            )}
          </div>
        </div>
        <p className="text-preset-4 text-neutral-950 dark:text-neutral-200">
          Approx. reading time:
          {readingTime === 0 && " 0 minute"}
          {readingTime < 1 &&
            readingTime !== 0 &&
            ` <${Math.ceil(readingTime)} minute`}
          {readingTime > 1 && " >1 minute"}
        </p>
      </section>

      <section className="max-w-990 mx-auto w-full mt-22 grid md:grid-cols-3 gap-4">
        <Card bgColor="bg-purple-400" bgImage="pattern-character-count.svg">
          <h2 className="text-preset-1 mb-2">
            {excludeSpaces ? text.replace(/\s/g, "").length : text.length}
          </h2>
          <p className="text-preset-3">Total Characters (no space)</p>
        </Card>
        <Card bgColor="bg-yellow-500" bgImage="pattern-word-count.svg">
          <h2 className="text-preset-1 mb-2">
            {text.trim().split(/\s+/).filter(Boolean).length}
          </h2>
          <p className="text-preset-3">Word Count</p>
        </Card>
        <Card bgColor="bg-orange-500" bgImage="pattern-sentence-count.svg">
          <h2 className="text-preset-1 mb-2">
            {(text.match(/[^.!?]+[.!?]+/g) || []).length}
          </h2>
          <p className="text-preset-3">Sentence Count</p>
        </Card>
      </section>
    </main>
  );
}
