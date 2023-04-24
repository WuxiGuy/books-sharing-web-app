import { render, screen } from "@testing-library/react";
import NotFound from "../components/NotFound";
import React from "react";

test("renders Not Found copy", () => {
  render(<NotFound />);
  expect(screen.getByText("NotFound")).toBeInTheDocument();
});
