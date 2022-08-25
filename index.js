// const counterEl = document.getElementById("counter");
// const incrementEl = document.getElementById("increment");
// const decrementEl = document.getElementById("decrement");


// // initial state (step -1)

// const initialState = {
//     value: 0,
// }

// // create reducer Fuction  (step -2)

// function counterReducer(state = initialState, action) {
//     if (action.type === 'increment') {
//         return {
//             ...state,
//             value: state.value + 1,
//         }
//     }
//     else if (action.type === 'decrement') {
//         return {
//             ...state,
//             value: state.value - 1,
//         }
//     }

//     else {
//         return state
//     }
// }

// // create store (step -5)
// const store = Redux.createStore(counterReducer)



// // render to update ui (step -7)
// const render = () => {
//     const state = store.getState();
//     counterEl.innerText = state.value.toString();
// }
// // render initail udpate the ui (step -8)
// render()

// // subscribe (step -6)
// store.subscribe(render)

// // onclick dispatch (step -4)

// incrementEl.addEventListener("click", () => {

//     store.dispatch({
//         type: "increment",
//     });
// });
// decrementEl.addEventListener("click", () => {

//     store.dispatch({
//         type: "decrement",
//     });
// });



const initialState = {
    value: 0
}
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// create reducer fucntion

function createReducer(state = initialState, action) {

    if (action.type === 'increment') {
        return {
            ...state,
            value: state.value + 1,
        }

    }
    else if (action.type === 'decrement') {
        return {
            ...state,
            value: state.value - 1,
        }
    }

    else {
        return state
    }

}
// create redux store 


const store = Redux.createStore(createReducer)

const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value.toString();
}

render()

store.subscribe(render);



// onclick dispactch


incrementEl.addEventListener("click", () => {
    store.dispatch({
        type: "increment",
    })

});

decrementEl.addEventListener("click", () => {
    store.dispatch({ type: "decrement" })
});



