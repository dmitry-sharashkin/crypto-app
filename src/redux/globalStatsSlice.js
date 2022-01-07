import {createSlice} from "@reduxjs/toolkit";



export const globalStatsSlice = createSlice({
        name: 'globalStats',
        initialState: {
            total24hVolume: null,
            totalCoins: "23",
            totalExchanges: 155,
            totalMarketCap: null,
            totalMarkets: null,
        },
        reducers: {
            change: (state) => {
                state.total24hVolume = "165613519345"
                state.totalCoins = 13033
                state.totalExchanges = 175
                state.totalMarketCap = "2043456439592"
                state.totalMarkets = 25755
            },
            addOne: state => {
                state.totalCoins = 1000
            }
        }
    }
)

export const {change,addOne} = globalStatsSlice.actions

export default globalStatsSlice.reducer