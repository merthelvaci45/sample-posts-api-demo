import { render, screen } from "@testing-library/react";

import Spinner from "./Spinner";

describe("Spinner component", () => {
  it("should return a <div> element with className of 'LargeSpinner'", () => {
    //Arrange
    render(<Spinner isLargeSpinner={true} />);

    //Act

    //Assert
    const divElement = screen.getByRole("none");
    expect(divElement).toHaveClass("LargeSpinner");
  });

  it("should return a <div> element with className of 'SmallSpinner'", () => {
    //Arrange
    render(<Spinner isLargeSpinner={false} />);

    //Act

    //Assert
    const divElement = screen.getByRole("none");
    expect(divElement).toHaveClass("SmallSpinner");
  });
});
