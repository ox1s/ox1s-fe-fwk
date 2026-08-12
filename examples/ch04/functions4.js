import {hString} from "ox1s-fe-fwk/src/h";
import {mountDOM} from "ox1s-fe-fwk/src/mount-dom"

const node = hString('OMG, so interesting!')

mountDOM(node, $0)



const node_1=h('title', {}, ['LLALLAL'])
const node_2=h('p', {}, ['Paragraph'])
const node_3=h('a', {href:'https://en.wikipedia.org/wiki/Doge_(meme)'}, ['Doge'])
const fragment= hFragment([node_1, node_2, node_3])
