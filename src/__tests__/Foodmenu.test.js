import data from "../__mocks__/HotelData.js";
import { act } from "react";
import { render, screen, fireEvent} from "@testing-library/react";
import FoodMenu from "../FoodMenu.js";
import { SearchBar } from "../FoodMenu.js";
import "@testing-library/jest-dom";
import FoodCard from "../FoodCard.js";
import { foodcardmock } from "../__mocks__/FoodCardMock.js";
import Body from "../Body.js";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(data);
    },
  });
});
it("Should Test Food Menu Component", async () => {
  await act(async () => {
      render(
          <>
              <SearchBar/>
              <FoodMenu />  
              <FoodCard {...foodcardmock.data.cards[2].card.card.info} />
        </>
      );
  });
    
//   const inputBox = screen.getByTestId("TextBox");
//   //Assertion
//     expect(inputBox).toBeInTheDocument();
    
    const countdivs = screen.getByText("Domino's Pizza");

    expect(countdivs).toBeInTheDocument();
});


it("Search Button",async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body/>
          </BrowserRouter>
        );
    });
    
    const count = await screen.findAllByTestId("resCard");
     expect(count.length).toBe(20);
    
})