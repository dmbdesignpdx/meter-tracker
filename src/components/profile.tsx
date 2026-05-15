"use client";

import { useAtom } from "jotai";
import { UserIcon } from "lucide-react";
import { useEffect } from "react";

import { Button } from "@/components/shadcn/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/shadcn/drawer";
import { TimeAllotted } from "@/constants/atoms";
import { BEST_SCORE } from "@/constants/storage";
import { Copy, Heading, Label } from "@/data/content";
import { bestAtom } from "@/hooks/atoms";
import { setTimeStorage } from "@/lib/storage";

export function UserProfile() {
  const [bestTime, setBestTime] = useAtom(bestAtom);
  const noBestTime = bestTime === TimeAllotted.MAX;

  useEffect(() => {
    const localBest = window.localStorage.getItem(BEST_SCORE);

    if (localBest) setBestTime(Number(localBest));
  }, []);

  function handleReset() {
    setBestTime(TimeAllotted.MAX);
    setTimeStorage(TimeAllotted.MAX);
  }

  return (
    <Drawer autoFocus={true}>
      <DrawerTrigger asChild>
        <Button
          className="absolute top-4 right-4"
          variant="ghost"
          size="icon-lg"
        >
          <UserIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>{Heading.USER}</DrawerTitle>
            <DrawerDescription className="sr-only">
              {Copy.USER}
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <h4>{Heading.BEST}</h4>
            {noBestTime ? (
              <p className="text-3xl text-muted-foreground">{Copy.NO_RECORD}</p>
            ) : (
              <p className="text-3xl text-good">
                {bestTime} {Label.SECONDS}
              </p>
            )}
          </div>
          <DrawerFooter>
            <Button
              variant="outline"
              onClick={handleReset}
              disabled={noBestTime}
            >
              {Label.RESET}
            </Button>
            <DrawerClose asChild>
              <Button variant="ghost">{Label.CLOSE}</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
