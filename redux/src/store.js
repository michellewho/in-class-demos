// where our redux store lives
import { createStore } from 'redux';

// in order to interact with object, we never interact with it directly. Instead we create actions (things we want redux to do to modify state)
// Actions
const ADD_COOKIE = 'add_cookie';
const EAT_COOKIE = 'eat_cookie';

//Action creators: helper function to make object {type: ...}
export function createBakeAction(flavor) {
    let action = { type: ADD_COOKIE, flavor: flavor };
    return action;
}

export function createEatAction(cookieId) {
    return { type: EAT_COOKIE, cookieId: cookieId }
}

// redux store: take existing data we have, take in new action, and based on action generate new state (new version)
function cookieReducer(state, action) {
    switch (action.type) {
        case ADD_COOKIE:
            let allCookies = state.cookies.concat({ // new array!
                cookieId: state.baked,
                flavor: action.flavor
            });

            return { cookies: allCookies, baked: state.baked + 1 }; // return new state

        case EAT_COOKIE:
            let remainingCookies = state.cookies.filter((c) => c.cookieId !== action.cookieId);

            // concatenate 
            return Object.assign({}, state, { cookies: remainingCookies });

        default:
            return state; // make no changes!
    }
}

// want to associate reducer with store
// actual redux store
const initialState = { cookies: [], baked: 0 };
export const store = createStore(cookieReducer, initialState);