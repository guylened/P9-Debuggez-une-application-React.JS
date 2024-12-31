import { render, screen } from "@testing-library/react";
import Home from "./index";

describe("When a page is created", () => {
  it("a list of events is displayed", async () => {
    render(<Home />);
    await screen.findByText("Nom");
    // to implement
  });
  it("a list a people is displayed", () => {
    // to implement
  });
  it("a footer is displayed", () => {
    // to implement
  });
  it("an event card, with the last event, is displayed", () => {
    // to implement
  });
});
