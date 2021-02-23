import * as actionCreators from '../actions/actions'

const initialState = {
    returnedMessage: 'empty msg - bow bow',
    seedsList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionCreators.GET_ALL_SEEDS:
            let listOfSeeds = action.data
            console.log('List of Seeds')
            console.log(listOfSeeds)
            return {
                returnedMessage: 'recieved all seed details !! ching!',
                seedsList: listOfSeeds
            }

        case actionCreators.DELETE_SEED:
            let messageAfterDeletion = action.data.message
            let listAfterDeletion = action.data.seed
            console.log('Deletion of seed')
            console.log(listAfterDeletion)
            console.log(messageAfterDeletion)
            return {
                returnedMessage: messageAfterDeletion,
                seedsList: listAfterDeletion
            }

        case actionCreators.ADD_SEED:
            let messageAfterAddition = action.data.message
            let listAfterAddition = action.data.seed
            console.log('Addition of seed')
            console.log(listAfterAddition)
            console.log(messageAfterAddition)
            return {
                returnedMessage: messageAfterAddition,
                seedsList: listAfterAddition
            }

        case actionCreators.UPDATE_SEED:
            let messageAfterUpdation = action.data.message
            let listAfterUpdation = action.data.seed
            console.log('Updating Seed')
            console.log(listAfterUpdation)
            console.log(messageAfterUpdation)
            return {
                returnedMessage: messageAfterUpdation,
                seedsList: listAfterUpdation
            }

        case actionCreators.GET_SEEDS_BY_COMMON_NAME:
            let listOfSeedsByCommonName = action.data
            return {
                seedsList: listOfSeedsByCommonName
            }

        case actionCreators.CLEAR_STATE:
            return {
                returnedMessage: '',
                seedsList: []
            }

        case actionCreators.GET_SEEDS_BY_ID:
            let listOfSeedsById = action.data
            console.log(action.data)
            return {
                seedsList: listOfSeedsById
            }

        default:
            return state
    }
}

export default reducer;