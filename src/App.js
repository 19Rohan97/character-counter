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
  const [density, setDensity] = useState({});

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

  useEffect(() => {
    if (!text.trim()) {
      setDensity({});
      return;
    }

    const cleanedStr = excludeSpaces ? text.replace(/\s/g, "") : text;
    const totalChars = cleanedStr.length;
    const charMap = {};

    for (let char of cleanedStr) {
      charMap[char] = (charMap[char] || 0) + 1;
    }

    const densityMap = {};
    for (let char in charMap) {
      densityMap[char] = {
        count: charMap[char],
        percentage: ((charMap[char] / totalChars) * 100).toFixed(2),
      };
    }

    setDensity(densityMap);
  }, [text, excludeSpaces]);

  useEffect(() => {
    console.log(density);
  }, [density]);

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
          ? `url('${process.env.PUBLIC_URL}/assets/images/bg-dark-theme.png')`
          : `url('${process.env.PUBLIC_URL}/assets/images/bg-light-theme.png')`,
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

      <section className="max-w-990 mx-auto w-full mt-6 flex flex-col gap-3">
        {Object.keys(density).length > 0 && (
          <h2 className="text-preset-2 text-neutral-900 dark:text-neutral-200 mb-2">
            Letter Density
          </h2>
        )}
        {density &&
          Object.entries(density)
            .sort((a, b) => b[1].percentage - a[1].percentage)
            .map(([char, { count, percentage }]) => (
              <DensityCard
                key={char}
                char={char}
                count={count}
                percentage={percentage}
              />
            ))}
      </section>
    </main>
  );
}

function DensityCard({ char, count, percentage }) {
  return (
    <div className={`density-card flex justify-between items-center gap-4`}>
      <span className="letter w-full max-w-[20px] text-neutral-900 dark:text-neutral-200 uppercase">
        {char}
      </span>
      <div className="density-graph w-full h-[12px] bg-neutral-800 rounded-full relative overflow-hidden">
        <div
          className="absolute h-full bg-purple-400 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className="density w-full max-w-[100px] text-neutral-900 dark:text-neutral-200">
        {count} ({percentage}%)
      </span>
    </div>
  );
}
