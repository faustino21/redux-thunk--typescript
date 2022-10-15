
export const POKEMON_LOADING = 'POKEMON_LOADING'
export const POKEMON_SUCCESS = 'POKEMON_SUCCESS'
export const POKEMON_FAIL = 'POEKMON_FAIL'

export type PokemonType = {
    abilities : PokemonAbility[],
    sprites : PokemonSprites, 
    stats : PokemonStats[]  
}

export type PokemonAbility =  {
    ability : {
        name: string
        url : string
    }
}

export type PokemonSprites = {
    front_default : string
}

export type PokemonStats = {
    base_stat : number
    stat: {
        name: string
    }
}

interface PokemonLoading {
    type : typeof POKEMON_LOADING
}

interface PokemonSuccess {
    type : typeof POKEMON_SUCCESS
    payload: PokemonType
}

interface PokemonFail {
    type : typeof POKEMON_FAIL
}

export type PokemonDispatchTypes = PokemonLoading | PokemonFail | PokemonSuccess