import { describe, expect, test } from "bun:test";
import { act, render, screen } from "@testing-library/react";
import { createStore, Provider } from "jotai";
import { ServiceCount } from "@/components/count";
import { Copy } from "@/data/content";
import { countAtom } from "@/hooks/atoms";

const text = new RegExp(Copy.TOTAL);

describe("Count", () => {
  test("renders it content", () => {
    const store = createStore();

    render(
      <Provider store={store}>
        <ServiceCount />
      </Provider>,
    );

    const copy = screen.queryByText(text);

    expect(copy).toBeInTheDocument();
    expect(copy).toHaveTextContent("0");

    act(() => {
      store.set(countAtom, 1);
    });

    expect(copy).toHaveTextContent("1");
  });
});
