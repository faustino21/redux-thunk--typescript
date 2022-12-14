import { Dispatch } from "redux";
import {PokemonDispatchTypes, POKEMON_FAIL, POKEMON_SUCCESS, POKEMON_LOADING} from './pokemonActionTypes'
import axios from "axios";

export const GetPokemon = (pokemon: string) => async ( dispatch: Dispatch<PokemonDispatchTypes>) => {
    try {
        dispatch({
            type: POKEMON_LOADING
        })
        
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        
        dispatch({
            type: POKEMON_SUCCESS,
            payload: await res.data
        })

    } catch (error) {
        dispatch({
            type: POKEMON_FAIL
        })
    }

}