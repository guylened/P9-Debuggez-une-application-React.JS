import { render, screen, within, waitFor } from "@testing-library/react";
import Page from "./index";
import { useData } from "../../contexts/DataContext";

jest.mock("useData", () => [300, 200, () => {}]);

describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    const nosRealisations = screen.getByText("nos-realisations");
    const selectTitle = screen.getByText("SelectTitle");
    const eventCards = within(nosRealisations).getAllByText("EventCard");
    expect(eventCards).not.toHaveLength(0);
    expect(selectTitle).toBeInTheDocument();
  });
  it("a list a people is displayed", () => {
    const notreEquipe = screen.getByText("notre-equipe");
    const peopleCard = screen.getAllByText("PeopleCard");
    expect(notreEquipe).toBeInTheDocument();
    expect(peopleCard).toHaveLength(6);
  });
  it("a footer is displayed", () => {
    const footer = screen.getByText("footer");
    expect(footer).toBeInTheDocument();
  });
  it("an event card, with the last event, is displayed", () => {
    // to implement
  });
});

describe("When the web page is loaded", () => {
  beforeAll(async () => {
    render(<Page />);
    await waitFor(() =>
      expect(screen.queryByText(/chargement/i)).not.toBeInTheDocument()
    );
  });

  it("displays a menu", () => {
    const menu = screen.getByRole("navigation");
    expect(menu).toBeInTheDocument();
  });

  /* it("displays an auto-scroll slider", () => {
    const sliderContainer = screen.getByTestId("SliderContainer");
    const slides = within(sliderContainer).getAllByRole("img");
    expect(sliderContainer).toBeInTheDocument();
    expect(slides).not.toHaveLength(0);
  });

  it("displays a 'Nos services' section with 3 services", () => {
    const nosServices = screen.getByRole("region", { name: /nos services/i });
    const serviceCards = within(nosServices).getAllByRole("h3");
    expect(nosServices).toBeInTheDocument();
    expect(serviceCards).toHaveLength(3);
  });

  it("displays a 'Nos réalisations' section with events and a selection list", () => {
    const nosRealisations = screen.getByRole("region", {
      name: /nos réalisations/i,
    });
    const eventCards = within(nosRealisations).getAllByTestId("card-testid");
    const selectList = screen.getByRole("combobox");
    expect(eventCards).not.toHaveLength(0);
    expect(selectList).toBeInTheDocument();
  });

  it("displays a 'Notre équipe' section with 6 people cards", () => {
    const notreEquipe = screen.getByRole("region", { name: /notre équipe/i });
    const peopleCards = within(notreEquipe).getAllByText("imageSrc");
    expect(notreEquipe).toBeInTheDocument();
    expect(peopleCards).toHaveLength(6);
  });

  it("displays a contact form", () => {
    const contactSection = screen.getByRole("region", { name: /contact/i });
    const contactForm = within(contactSection).getByRole("form");
    expect(contactSection).toBeInTheDocument();
    expect(contactForm).toBeInTheDocument();
  });

  it("displays a footer", () => {
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  }); */
});

/*
describe("When the web page is loaded", () => {
  beforeAll(async () => {
    render(<Page />);
    await waitFor(() =>
      expect(screen.queryByText("Chargement")).not.toBeInTheDocument()
    );
  });

  it("a menu is displayed", () => {
    const menu = screen.getByText("nav");
    expect(menu).toBeInTheDocument();
  });

  it("a auto scroll slider is displayed", () => {
    const sliderContainer = screen.getByText("SliderContainer");
    const slideCard = screen.getAllByText("SlideCard");
    expect(sliderContainer).toBeInTheDocument();
    expect(slideCard).toHaveLength(3);
  });
  it("a section 'Nos services' with a list of services is displayed", () => {
    const nosServices = screen.getByText("nos-services");
    const serviceCard = screen.getAllByText("ServiceCard");
    expect(nosServices).toBeInTheDocument();
    expect(serviceCard).toHaveLength(3);
  });

  it("a section 'Nos réalisations' with a list of event and a selection list is displayed ", () => {
    const nosRealisations = screen.getByText("nos-realisations");
    const selectTitle = screen.getByText("SelectTitle");
    const eventCards = within(nosRealisations).getAllByText("EventCard");
    expect(eventCards).not.toHaveLength(0);
    expect(selectTitle).toBeInTheDocument();
  });

  it("a section 'Notre équipe'  with a list of people is displayed", () => {
    const notreEquipe = screen.getByText("notre-equipe");
    const peopleCard = screen.getAllByText("PeopleCard");
    expect(notreEquipe).toBeInTheDocument();
    expect(peopleCard).toHaveLength(6);
  });

  it("a contact form is displayed", () => {
    const contact = screen.getByText("contact");
    const contactForm = screen.getByRole("form");
    expect(contact).toBeInTheDocument();
    expect(contactForm).toBeInTheDocument();
  });
  it("a footer is displayed", () => {
    const footer = screen.getByText("footer");
    expect(footer).toBeInTheDocument();
  });
});
*/
