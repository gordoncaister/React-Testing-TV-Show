import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import App from "./App";
import { act } from 'react-dom/test-utils';

import {showsData} from "./testData"

import userEvent from "@testing-library/user-event"

import {fetchShow as mockFetchShow} from "./api/fetchShow"



jest.mock("./api/fetchShow")




// test ("app renders", () => {
//     render (<App/>)
// })

test("renders shows when page is loaded", async () => {


     
    act(()=> {
        mockFetchShow.mockResolvedValueOnce(showsData)
    })
    
    
    // console.log("mockfetshow:",mockFetchShow.mockResolvedValueOnce)
    
    const {getByText} = render(<App/>)
    
    await wait(()=> {
        const dropdown = getByText(/Select a season/i)
        dropdown.value = "Season 1"
        expect(dropdown).toHaveValue("Season 1")
    })
    
   

    // await waitFor(()=> )
    
})

