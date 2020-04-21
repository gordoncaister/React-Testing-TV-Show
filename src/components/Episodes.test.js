import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import Episodes from "./Episodes";

import { act } from 'react-dom/test-utils';
import {showsData} from "../testData"

test ("Season 1 data displays (only first 2 episodes)", async()=>{
    const {getByText} = render(<Episodes episodes={showsData._embedded.episodes}/> )

    getByText("Chapter Two: The Weirdo on Maple Street");

    
})