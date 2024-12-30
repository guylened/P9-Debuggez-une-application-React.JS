import { fireEvent, render, screen } from "@testing-library/react";
import Menu from "./index";

describe("When Menu is created", () => {
  it("a list of mandatories links and the logo are displayed", async () => {
    render(<Menu />);
    const servicesLink = await screen.findByText("Nos services");
    const realisationsLink = await screen.findByText("Nos réalisations");
    const teamLink = await screen.findByText("Notre équipe");
    const contactLink = await screen.findByText("Contact");
    /* ajout vérification de la présence des liens dans le menu */
    expect(servicesLink).toBeInTheDocument();
    expect(realisationsLink).toBeInTheDocument();
    expect(teamLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    /* ajout vérification présence logo à revoir */
    const logo = screen.findByText("724");
    expect(logo).toBeInTheDocument();
  });
  it("all mandatory links have correct href attributes", async () => {
    render(<Menu />);

    // Vérifiez les href des liens
    expect(screen.getByText("Nos services").closest("a")).toHaveAttribute(
      "href",
      "#nos-services"
    );
    expect(screen.getByText("Nos réalisations").closest("a")).toHaveAttribute(
      "href",
      "#nos-realisations"
    );
    expect(screen.getByText("Notre équipe").closest("a")).toHaveAttribute(
      "href",
      "#notre-equipe"
    );
  });

  describe("and a click is triggered on contact button", () => {
    it("document location  href change", async () => {
      render(<Menu />);
      fireEvent(
        await screen.findByText("Contact"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      expect(window.document.location.hash).toEqual("#contact");
    });
  });
});
