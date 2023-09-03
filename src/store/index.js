import { configureStore } from "@reduxjs/toolkit";

import menuSlice from "./slices/menu.slice";
import projectSlice from "./slices/infoProject.slice"

export default configureStore({
    reducer: {
        menuSlice,
        projectSlice
    }
})