import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'c4cb59fad1mshbf9a6aec398f84bp10882ejsnf417ab1af47d'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/'

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('stats'),
        }),
        getCoins: builder.query({
            query: () => createRequest('coins')
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


export const {useGetCryptosQuery, useGetCoinsQuery} = cryptoApi;
