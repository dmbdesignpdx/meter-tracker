"use client";

// Theirs
import { useAtomValue } from "jotai";

// Ours
import { Copy } from "@/data/content";
import { countAtom } from "@/hooks/atoms";

export function ServiceCount() {
  const count = useAtomValue(countAtom);

  return (
    <p className="text-xl text-muted-foreground mt-10">
      {Copy.TOTAL} {count}
    </p>
  );
}
