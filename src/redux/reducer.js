const initialState = {
    counters: [
        {name: 1, id: 111},
        {name: 10, id: 112},
        {name: 100, id: 113},
    ],
    modals:
        {
            createModal: false,
        }
}

const counter = (state = initialState, action) => {
    switch (action.type) {

        case 'CHANGE':
            const newCounters = state.counters.map(el => {
                if (el.id === action.payload.id) {
                    const newValue = el.name + action.payload.value;
                    return {
                        ...el, name: newValue
                    }
                } else {
                    return el;
                }
            })
            return {
                ...state, counters: [...newCounters]
            }


        case 'CHANGE_CREATE_MODAL':

            return {
                ...state, modals: {...state.modals, createModal: action.payload.value}
            }

        case 'ADD_COUNTER':

            return {
                ...state, counters: [...state.counters, {name: action.payload.name, id: action.payload.id}],
                modals: {...state.modals, createModal: false}
            }

        case 'DELETE_COUNTER':

            const filteredCounters = state.counters.filter(el =>
                el.id !== action.payload.id
            )
            return {
                ...state, counters: [...filteredCounters],
            }

        default:
            return state
    }
}

export default counter