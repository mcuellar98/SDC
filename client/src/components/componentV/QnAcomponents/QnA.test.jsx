import { render , fireEvent, screen} from "@testing-library/react"
import React from "react"
import Report from "./report.jsx"
import Helpful from "./helpful.jsx"

describe(Report, () => {
  it("should change to reported when clicked once", () => {
    render(<Report />);
      const loaded = screen.getByText("report")
      expect(loaded).toHaveTextContent("report")
      fireEvent.click(loaded);
      expect(screen.getByText("Reported")).toHaveTextContent("Reported")
  })
  it("should not change back to report when clicked once", () => {
    render(<Report />);
    const loaded = screen.getByText("report");
    expect(loaded).toHaveTextContent("report");
    fireEvent.click(loaded);
    expect(screen.getByText("Reported")).toHaveTextContent("Reported");
    fireEvent.click(loaded);
    expect(screen.getByText("Reported")).not.toHaveTextContent("reported");
  })
})

describe(Helpful, () => {
  it("should increment helpfulness only once", () => {
    const {getByAltText} = render(<Helpful helpfulness={25} type="questions"/>);
    const pValue = getByTestId("test-span")
    expect(pValue).toHaveTextContent("Helpful? Yes (25)")
    fireEvent.click(getByTestId("test-span"));
    expect(getByTestId("test-span")).toHaveTextContent("Helpful? Yes (26)")
    fireEvent.click(getByTestId("test-span"));
    expect(getByTestId("test-span")).not.toHaveTextContent("Helpful? Yes (27)")

  })
})