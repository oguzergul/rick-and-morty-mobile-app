export const combineReducer = (state,newState) => ({
    ...state,
    ...newState
})