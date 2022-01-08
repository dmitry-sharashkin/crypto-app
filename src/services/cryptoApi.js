import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
//
// params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//         timePeriod: '24h',
//         symbols: 'BTC',
//         uuids: 'Qwsogvtv82FCd',
//         tiers: '1',
//         tags: 'defi',
//         orderBy: 'marketCap',
//         search: 'Bitco',
//         orderDirection: 'desc',
//         limit: '50',
//         offset: '0'
// },
// headers: {
//     'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//         'x-rapidapi-key': '6e724b7e4dmshc4e1bea49167596p13e1e4jsn8f01477a342d'
// }

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'c4cb59fad1mshbf9a6aec398f84bp10882ejsnf417ab1af47d'
}
// const cryptoApiParams = {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     symbols: 'BTC',
//     uuids: 'Qwsogvtv82FCd',
//     tiers: '1',
//     tags: 'defi',
//     orderBy: 'marketCap',
//     search: 'Bitco',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0'
// }
const baseUrl = 'https://coinranking1.p.rapidapi.com/'

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://coinranking1.p.rapidapi.com/'}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('stats')
        })

    })
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


export const {useGetCryptosQuery} = cryptoApi;
