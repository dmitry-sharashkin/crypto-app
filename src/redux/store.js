import {configureStore} from "@reduxjs/toolkit";
import globalStatsReducer from "./globalStatsSlice";


export default configureStore({
    reducer: {
        stats:  globalStatsReducer
    }
})