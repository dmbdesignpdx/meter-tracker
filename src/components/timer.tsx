"use client";

// Theirs
import { useAtom } from "jotai";
import { useEffect } from "react";

// Ours
import { Button } from "@/components/shadcn/button";
import { TimeAllotted } from "@/constants/atoms";
import { Label } from "@/data/content";
import { runningAtom, timeAtom } from "@/hooks/atoms";
import { cn } from "@/lib/utils";

export function CountdownTimer() {
  const [time, setTime] = useAtom(timeAtom);
  const [isRunning, setIsRunning] = useAtom(runningAtom);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev > 0) return prev - 1;
        return prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const minutesDisplay = String(minutes).padStart(2, "0");
  const secondsDisplay = String(seconds).padStart(2, "0");

  function handleClick() {
    if (isRunning) {
      setIsRunning(false);
      setTime(TimeAllotted.MAX);
    } else {
      setIsRunning(true);
    }
  }

  function setStatusColor() {
    switch (true) {
      case time > TimeAllotted.WARN:
        return "text-good";
      case time > TimeAllotted.LATE:
        return "text-warning";
      default:
        return "text-destructive";
    }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <output
        className={cn(
          setStatusColor(),
          "font-mono text-7xl font-semibold tabular-nums",
        )}
      >
        <span>{minutesDisplay}</span>
        <span className="opacity-50">:</span>
        <span>{secondsDisplay}</span>
      </output>

      <div className="flex flex-col w-full gap-3">
        <Button onClick={handleClick} size="lg">
          {isRunning ? Label.RESET : Label.START}
        </Button>
      </div>
    </div>
  );
}
