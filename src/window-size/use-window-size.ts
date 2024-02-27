import { useEffect, useState } from "react";

interface WindowSize {
  innerWidth: number;
  innerHeight: number;
}

export function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({ innerWidth: window.innerWidth, innerHeight: window.innerHeight });

  useEffect(() => {
      window.addEventListener("resize", () => {
        setWindowSize({ innerWidth: window.innerWidth, innerHeight: window.innerHeight })
      });
      return () => {
          window.removeEventListener("resize", () => {
            setWindowSize({ innerWidth: window.innerWidth, innerHeight: window.innerHeight })
          })
      }
  }, []);
  
  return windowSize;
}