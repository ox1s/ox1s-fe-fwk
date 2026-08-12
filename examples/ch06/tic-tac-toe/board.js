import {createApp, h, hFragment, hString} from "https://unpkg.com/ox1s-fe-fwk@1.0.2";

const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const state = {
    grid: Array(9).fill(null),
    currentPlayer: 'X',
    winner: null,
    isGameOver: false,
}
// actions:
// - setCell

const reducers = {
    'set-cell': (state, idx, currentPlayer) => {
        const cells = [...state.grid] // get current grid
        if (cells[idx] != null) return {...state} // if cell not null do nothing
        cells[idx] = currentPlayer
        const isWin = checkWin()
        if (isWin) {
            state.grid = Array(9).fill(null)
        }
        return {
            ...state,
            currentPlayer: 'X' ? 'Y' : 'X'
        }
    }
}

function checkWin() {
    // check if combinations of near cells are winning combination
    WINNING_COMBINATIONS.forEach((row, index) => {
        const el0 = state.grid[row[0]];
        const el1 = state.grid[row[1]];
        const el2 = state.grid[row[2]];

        if (el0 != null && (el0 === el1 === el2)) {
            alert(`You win ${state.currentPlayer}`)
            return true
        }
    })
    return false
}

function App(state, emit) {
    return hFragment([
        CreateBoard(state, emit)
    ])
}

function CreateBoard({grid}, emit) {
    return h('table', {}, [
        h('tr', {}, [
            h('td', {}, [
                h('button', {on: {click: () => emit('set-cell', 0)}}, [hString(state.grid[0])])
            ]),
            h('td', {}, [
                h('button', {on: {click: () => emit('set-cell', 1)}}, [hString(state.grid[1])])
            ]),
            h('td', {}, [
                h('button', {on: {click: () => emit('set-cell', 2)}}, [hString(state.grid[2])])
            ]),
        ]),
        h('tr', {}, [
            h('td', {}, [
                h('button', {on: {click: () => emit('set-cell', 3)}}, [hString(state.grid[3])])
            ]),
            h('td', {}, [
                h('button', {on: {click: () => emit('set-cell', 4)}}, [hString(state.grid[4])])
            ]),
            h('td', {}, [
                h('button', {on: {click: () => emit('set-cell', 5)}}, [hString(state.grid[5])])
            ]),
        ]),
        h('tr', {}, [
            h('td', {}, [
                h('button', {on: {click: () => emit('set-cell', 6)}}, [hString(state.grid[6])])
            ]),
            h('td', {}, [
                h('button', {on: {click: () => emit('set-cell', 7)}}, [hString(state.grid[7])])
            ]),
            h('td', {}, [
                h('button', {on: {click: () => emit('set-cell', 8)}}, [hString(state.grid[8])])
            ]),
        ]),
    ])
}

createApp({state, view: App, reducers}).mount(document.body)