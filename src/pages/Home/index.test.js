import { render, screen, within } from "@testing-library/react";
import Page from "./index";
import { useData } from "../../contexts/DataContext";

jest.mock("../../contexts/DataContext", () => ({
  useData: jest.fn(),
}));

const mockData = {
  events: [
    {
      id: 1,
      title: "Événement A",
      date: "2025-01-01",
      cover: "/images/eventA.png",
      type: "Conférence",
    },
    {
      id: 2,
      title: "Événement B",
      date: "2024-12-01",
      cover: "/images/eventB.png",
      type: "Atelier",
    },
  ],
  focus: [
    {
      id: 1,
      title: "Événement A",
      date: "2025-01-01",
      cover: "/images/eventA.png",
      type: "Conférence",
    },
    {
      id: 2,
      title: "Événement B",
      date: "2024-12-01",
      cover: "/images/eventB.png",
      type: "Atelier",
    },
  ],
};

describe("When a page is created", () => {
  beforeEach(() => {
    useData.mockReturnValue({
      data: mockData,
      error: null,
    });
    render(<Page />);
  });

  it("a list of events is displayed", () => {
    const eventsContainer = screen.getByTestId("EventsContainer");
    const eventCards = within(eventsContainer).getAllByTestId("card-testid");
    expect(eventCards).toHaveLength(2);
  });
  it("a list a people is displayed", () => {
    const teamContainer = screen.getByTestId("PeoplesContainer");
    const teamMembers = within(teamContainer).getAllByAltText("teamMembers");
    expect(teamMembers).toHaveLength(6);
  });
  it("a footer is displayed", () => {
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });
  it("an event card, with the last event, is displayed", () => {
    const footer = screen.getByRole("contentinfo");
    const event = within(footer).getByTestId("card-testid");
    expect(event).toBeInTheDocument();
  });
});
