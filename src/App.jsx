import Coin from "./components/Coin";
import Button from "./components/Button";
import { useState } from "react";

const App = () => {
  const [flipCount, setFlipCount] = useState(0);
  const [headCount, setHeadCount] = useState(0);
  const [tailCount, setTailCount] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [site, setSite] = useState(0);

  const flipCoin = () => {
    if (animating) return; // Prevent flipping if already animating

    setAnimating(true);
  
    setTimeout(() => {
      setSite(prevSite => {
        const newSite = Math.round(Math.random());
        setFlipCount(prevCount => prevCount + 1);
        if (newSite === 0) {
          setHeadCount(prevCount => prevCount + 1);
        } else {
          setTailCount(prevCount => prevCount + 1);
        }
        return newSite;
      });
      
      setAnimating(false);
    }, 5000);
  };

  return (
    <main className="flex flex-col items-center gap-10">
      <h1 className="text-4xl font-bold mb-20">Let's flip a coin</h1>
      <Coin animating={animating} site={site} />
      <Button disabled={animating} flipCoin={flipCoin} />
      <p className="font-bold text-2xl text-center">
        Out of {flipCount} {flipCount !== 1 ? "flips" : "flip"}, there have been {headCount} {headCount !== 1 ? "heads" : "head" } and {tailCount} {tailCount !== 1 ? "tails" : "tail"}
      </p>
    </main>
  );
};

export default App;
