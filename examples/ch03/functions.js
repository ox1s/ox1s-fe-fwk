// <h1 className="title">My counter</h1>
// <div className="container">
//     <button>decrement</button>
//     <span>0</span>
//     <button>increment</button>
// </div>
hFragment([
    h('h1', {class: 'title'}, ['My counter']),
    h('div', {class: 'container'}, [
        h('button'), ['decrement'],
        h('span', ['0']),
        h('button', ['increment'])
    ])
])


import {h, hFragment} from "ox1s-fe-fwk/src/h";

export function lipsum(numberOfParagraphs = 1) {
    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
    ut aliquip ex ea commodo consequat.`

    return hFragment(Array(numberOfParagraphs).fill(h('p', {}, [text])))
}



export function MessageComponent({level, message}) {
    return h('div', {class: `message--${level}`}, [
        h('p', {}, [message])])
}