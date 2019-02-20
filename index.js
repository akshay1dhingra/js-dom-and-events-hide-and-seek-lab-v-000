function getFirstSelector(selector) {
    return document.querySelector(selector)
}

function nestedTarget() {
    return document.querySelector( '#nested .target' )
}

// function increaseRankBy(n) {
//     const rankedLists = document.querySelectorAll( `.ranked-list` )

//     for (let i = 0; i < rankedLists.length; i++) {
//         let children = rankedLists[i].children

//         for (let j = 0; j < children.length; j++) {
//             children[j].innerHTML = parseInt(children[j].innerHTML) + n
//         }
//     }
// }

function increaseRankBy(n) {
    const rankedLists = document.querySelectorAll( `.ranked-list li` )

    for (let i = 0; i < rankedLists.length; i++) {
        rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML) + n
    }
}

function deepestChild() {
    let nodes = document.querySelectorAll(`#grand-node div`)
    return nodes[nodes.length-1] // nodes.length = 4 so 4-1=3 
}