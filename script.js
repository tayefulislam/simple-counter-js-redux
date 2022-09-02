const initialState = {
    value: 0,
    properties: {
        a: 5,
        b: 3,
    }
}

const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");


// action indentifiers

const INCREMENT = 'increment';
const DECREMENT = 'decrement';



// action creators
const increment = (value) => {
    return {
        type: INCREMENT,
        payload: value,
    }
}

const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: value,
    }
}



// create reducer funtion
function createReducer(state = initialState, action) {
    console.log(action)
    if (action.type === INCREMENT) {

        return {
            ...state,
            value: state.value + action.payload,
        }

    }

    else if (action.type === DECREMENT) {
        return {
            ...state,
            value: state.value - action.payload,
        }
    }

    else if (action.type === ITEST) {
        const updateCopied = {
            ...state,
            properties: {
                ...state.properties,
                b: state.properties.b + 1,

            }

        }

        return updateCopied;
    }
    else { return state }
}


//  create store 

const store = Redux.createStore(createReducer);


const render = () => {

    const state = store.getState()
    counterEl.innerText = state.value.toString()
}

render()


// subscibe
store.subscribe(render)


incrementEl.addEventListener("click", () => {
    store.dispatch(increment(3));
});

decrementEl.addEventListener("click", () => {
    store.dispatch(decrement(1));
});



