import { render, screen, fireEvent, act } from "@testing-library/react";
import Slider from "./index";
import { api, DataProvider } from "../../contexts/DataContext";

const slideData = {
  focus: [
    {
      id: 1,
      title: "World economic forum",
      description:
        "Oeuvre à la coopération entre le secteur public et le privé.",
      date: "2022-01-29T20:28:45.744Z",
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
    {
      id: 2,
      title: "Nordic design week",
      description: "Conférences sur le design de demain dans le digital",
      date: "2022-03-29T20:28:45.744Z",
      cover: "/images/teemu-paananen-bzdhc5b3Bxs-unsplash1.png",
    },
    {
      id: 3,
      title: "Sneakercraze market",
      description: "Rencontres de spécialistes des Sneakers Européens.",
      date: "2022-05-29T20:28:45.744Z",
      cover: "/images/jakob-dalbjorn-cuKJre3nyYc-unsplash 1.png",
    },
  ],
};

describe("Slider component", () => {
  beforeEach(() => {
    api.loadData = jest.fn().mockReturnValue(slideData);
  });

  it("renders radio buttons for each SlideCard", async () => {
    await act(async () => {
      render(
        <DataProvider>
          <Slider />
        </DataProvider>
      );
    });

    const radioButtons = screen.getAllByRole("radio");
    expect(radioButtons).toHaveLength(slideData.focus.length);
  });

  it("changes slides automatically after 5 seconds", async () => {
    jest.useFakeTimers();

    await act(async () => {
      render(
        <DataProvider>
          <Slider />
        </DataProvider>
      );
    });

    const firstSlide = screen.getByTestId("slide-1");
    expect(firstSlide).toBeVisible();

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    const secondSlide = screen.getByTestId("slide-2");
    expect(secondSlide).toBeVisible();

    jest.useRealTimers();
  });

  it("switches to a specific slide when a radio button is clicked", async () => {
    await act(async () => {
      render(
        <DataProvider>
          <Slider />
        </DataProvider>
      );
    });

    const radioButtons = screen.getAllByRole("radio");
    fireEvent.click(radioButtons[2]);

    const thirdSlide = screen.getByTestId("slide-3");
    expect(thirdSlide).toBeVisible();
  });
});
