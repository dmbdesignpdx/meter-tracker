"use client";

import type { OPTIONS } from "@/data/content";

interface Props {
  option: (typeof OPTIONS)[number];
  disabled: boolean;
  onCheckedChange: () => void;
  checked: boolean;
}

import { Checkbox as ShadcnCheckbox } from "@/components/shadcn/checkbox";
import {
  Field,
  FieldContent,
  FieldLabel,
  FieldTitle,
} from "@/components/shadcn/field";

export function Checkbox({
  option,
  disabled,
  onCheckedChange,
  checked,
}: Props) {
  return (
    <FieldLabel>
      <Field orientation="horizontal">
        <ShadcnCheckbox
          id={option.id}
          name={option.id}
          checked={checked}
          onCheckedChange={onCheckedChange}
          disabled={disabled}
        />
        <FieldContent>
          <FieldTitle>{option.name}</FieldTitle>
        </FieldContent>
      </Field>
    </FieldLabel>
  );
}
