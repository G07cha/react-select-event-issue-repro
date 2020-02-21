import { render } from "@testing-library/react";
import React from "react";
import selectEvent from "react-select-event";
import App from "./App";

it("handles selection, clear, selection", async () => {
  const { getByLabelText, getByText } = render(<App />);
  const select = getByLabelText("Selection");
  // select option 1
  await selectEvent.select(select, "Option 1");
  getByText("You selected option 1.");
});
