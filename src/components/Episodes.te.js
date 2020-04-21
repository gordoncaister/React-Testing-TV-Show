import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import Episodes from "./Episodes";

test ("episodes renders", () => {
    render (<Episodes />)
})