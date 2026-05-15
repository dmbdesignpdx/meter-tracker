"use client";

import { useAtom, useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { Checkbox } from "@/components/checkbox";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";
import { FieldGroup } from "@/components/shadcn/field";
import { TimeAllotted } from "@/constants/atoms";
import { INIT_OPTIONS, type OptionProp } from "@/constants/options";
import { Alert, Heading, OPTIONS } from "@/data/content";
import { bestAtom, countAtom, runningAtom, timeAtom } from "@/hooks/atoms";
import { setTimeStorage } from "@/lib/storage";

export function Checklist() {
  // Atoms
  const setCount = useSetAtom(countAtom);
  const [totalTime, setTotalTime] = useAtom(timeAtom);
  const [running, setRunning] = useAtom(runningAtom);
  const [bestTime, setBestTime] = useAtom(bestAtom);

  // Local States
  const [checked, setChecked] = useState(INIT_OPTIONS);
  const completed = Object.values(checked).every(Boolean);

  useEffect(() => {
    if (completed) {
      const timeTaken = TimeAllotted.MAX - totalTime;

      setRunning(false);

      toast.success(Alert.COMPLETED, {
        invert: true,
        duration: 3000,
        position: "top-center",
      });

      setTimeout(() => {
        if (timeTaken < bestTime) {
          setBestTime(timeTaken);
          setTimeStorage(timeTaken);
        }

        setChecked(INIT_OPTIONS);
        setTotalTime(TimeAllotted.MAX);
        setCount((prev) => prev + 1);
      }, 1000);
    }
  }, [completed]);

  const handleChange = (key: OptionProp) => {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Card className="w-full sm:max-w-md mt-10">
      <CardHeader>
        <CardTitle>{Heading.CHECKLIST}</CardTitle>
      </CardHeader>
      <CardContent>
        <FieldGroup className="gap-4">
          {OPTIONS.map((option) => (
            <Checkbox
              key={option.id}
              option={option}
              checked={checked[option.id]}
              onCheckedChange={() => handleChange(option.id)}
              disabled={!running}
            />
          ))}
        </FieldGroup>
      </CardContent>
    </Card>
  );
}
