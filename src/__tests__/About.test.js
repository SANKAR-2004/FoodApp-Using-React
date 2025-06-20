import AboutUs from "../AboutUs";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
 
test("Testing the About Us Component", () => {
    render(<AboutUs />);
    const heading = screen.getAllByRole("heading");
     
    //Assertion   
    expect(heading.length).not.toBe(3);
})

 
 