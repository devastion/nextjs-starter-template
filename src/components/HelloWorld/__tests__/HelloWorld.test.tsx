import React from "react";
import { render, screen } from "@testing-library/react";
import { HelloWorld } from "components/HelloWorld";

describe("HelloWorld", () => {
  it("should render hello world", () => {
    render(<HelloWorld />);

    const title = screen.getByTestId("title");

    expect(title).toBeInTheDocument();
  });
});
