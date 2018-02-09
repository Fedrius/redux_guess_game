import types from '../actions/types'

const DEFAULT_STATE = {
    randomNumber: null,
    userGuess: '',
    numberOfGuesses: 0,
    message: ''
}

export default function(state=DEFAULT_STATE, action){
    switch(action.type){
        case types.GET_RAN_NUMBER:
            return {...state, randomNumber: action.payload};
        case types.USER_INPUT:
            return {...state, userGuess: action.payload};
        case types.MAKE_GUESS:
            let message = 'YA GOT IT!!!';

            if(state.randomNumber > state.userGuess){
                message = 'TOO LOW';
            } else if(state.randomNumber < state.userGuess){
                message = 'tooooo high';
            }

            return {...state, userGuess: '', message, numberOfGuesses: state.numberOfGuesses + 1};
        default:
            return state;
    }
}