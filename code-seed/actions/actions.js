import axios from 'axios'

export const ADD_SEED = 'ADD_SEED'
export const GET_ALL_SEEDS = 'GET_ALL_SEEDS'
export const DELETE_SEED = 'DELETE_SEED'
export const UPDATE_SEED = 'UPDATE_SEED'
export const GET_SEEDS_BY_COMMON_NAME = 'GET_SEEDS_BY_COMMON_NAME'
export const CLEAR_STATE = 'CLEAR_STATE'
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE'
export const GET_SEEDS_BY_ID = 'GET_SEEDS_BY_ID'

const BASE_URL = 'http://localhost:9191/api/'

const getAllSeedsAction = (data) => {
    return {
        type: GET_ALL_SEEDS,
        data
    }
}

export const getAllSeeds = () => {
    return (dispatch) => {
        axios.get(BASE_URL+"getAllSeeds")
            .then((response) => {
                dispatch(getAllSeedsAction(response.data))
            })
    }
}

const addSeedAction = (data) => {
    return {
        type: ADD_SEED,
        data
    }
}

export const addSeed = (newSeed) => {
    return (dispatch) => {
        axios.post(BASE_URL, newSeed)
            .then((response) => {
                dispatch(addSeedAction(response.data))
            })
    }
}


const deleteSeedAction = (data) => {
    return {
        type: DELETE_SEED,
        data
    }
}

export const deleteSeed = (id) => {
    return (dispatch) => {
        axios.delete(BASE_URL + id)
            .then((response) => {
                dispatch(deleteSeedAction(response.data))
            })
    }
}

const updateSeedAction = (data) => {
    return {
        type: UPDATE_SEED,
        data
    }
}

export const updateSeed = (id, newSeedDetails) => {
    return (dispatch) => {
        axios.put(BASE_URL + id, newSeedDetails)
            .then((response) => {
                dispatch(updateSeedAction(response.data))
            })
    }
}

//search by names action
const getSeedsByCommonNameAction = (data) => {
    return {
        type: GET_SEEDS_BY_COMMON_NAME,
        data
    }
}

//search by names function
export const getSeedsByCommonName = (commonName) => {
    return (dispatch) => {
        let URL = BASE_URL+"getSeedByName/"+commonName
        axios.get(URL)
            .then((response) => {
                dispatch(getSeedsByCommonNameAction(response.data))
            })
    }
}

//action to clear state
const clearStateAction = (data) => {
    return {
        type: CLEAR_STATE,
        data
    }
}

//clear state function
export const clearState = () => {
    return (dispatch) => {
        dispatch(clearStateAction())
    }
}

//action to get Seed by ID
const getSeedsByIdAction = (data) => {
    return {
        type: GET_SEEDS_BY_ID,
        data
    }
}
//function to get Seed by ID
export const getSeedsById = (id) => {
    return (dispatch) => {
        let URL = BASE_URL+"getSeed/"+id
            axios.get(URL)
            .then((response) => {
                dispatch(getSeedsByIdAction(response.data))
            })
    }
}