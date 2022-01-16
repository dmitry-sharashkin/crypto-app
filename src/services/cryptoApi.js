import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const baseUrl = "https://financialmodelingprep.com/api/v3/"

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
    endpoints: (builder) => ({
        getShares: builder.query({
            query: () => 'stock/list?apikey=4d1255154b11183450dca74fb6df030a',
        }),
        getNews: builder.query({
            query: () => 'fmp/articles?page=0&size=5&apikey=4d1255154b11183450dca74fb6df030a',
        }),
        getStats: builder.query({
            query: () => 'sectors-performance?apikey=4d1255154b11183450dca74fb6df030a',
        }),
        getProfile: builder.query({
            query: (ticker) => `profile/${ticker}?apikey=4d1255154b11183450dca74fb6df030a`,
        }),
    }),
})
//
// export const pokemonApi = createApi({
//     reducerPath: 'pokemonApi',
//     baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
//     endpoints: (builder) => ({
//         getPokemonByName: builder.query<Pokemon, string>({
//             query: (name) => `pokemon/${name}`,
//         }),
//     }),
// })


export const {useGetSharesQuery, useGetNewsQuery, useGetStatsQuery, useGetProfileQuery} = cryptoApi;
