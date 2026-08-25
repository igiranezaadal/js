// ## Challenge 1 — runGraph(graph, concurrency)

// Build a scheduler that runs a graph of tasks where each task needs its dependencies' results.

// ```jsx
// function runGraph(graph, concurrency) {
// // returns a Promise
// }
// ```

// Input shape:

// ```jsx

// const  graph = {
// a: { deps: [],         run: function (inputs) { /* returns a Promise */ } },
// b: { deps: ['a'],      run: function (inputs) { /* inputs.a available */ } },
// c: { deps: ['a'],      run: function (inputs) { } },
// d: { deps: ['b','c'],  run: function (inputs) { } }
// };

// //runGraph(graph, 2) resolves to { a: ..., b: ..., c: ..., d: ... }.
// ```

// *Constraints:*

// // 1. Only new Promise, .then, .catch, resolve, reject. No async / await.
// // 2. A task starts the moment all its deps have resolved *and* a slot is free. No waves or levels.
// // 3. run receives an object holding *only* its declared deps' values.
// // 4. Detect cycles *before* running anything. Reject with a message naming the path, e.g. Cycle detected: b -> d -> b.
// // 5. Detect a dep that isn't a key in the graph, before running anything.
// // 6. If a task rejects: every transitive dependent is *skipped* (its run never called), but unrelated tasks already running must finish. Then reject with the failed id and the list of skipped ids.
// // 7. Each run is called exactly once.
// // 8. No polling — no setInterval, no while loop with setTimeout(0). Scheduling must be driven by .then callbacks.

// const  graph = {
// a: { deps: [],         /*run: function (inputs) {  returns a Promise  }*/ },
// b: { deps: ['a'],      /*run: function (inputs) { /* inputs.a available }*/  },
// c: { deps: ['a'],      /*run: function (inputs) { }*/ },
// d: { deps: ['b','c'],  /*run: function (inputs) { }*/ }
// };

// function runGraph(graph, concurrency) {
// return new Promise((resolve, reject) => {
//     resolve(concurrency)
//     graph.a=concurrency
//     console.log(graph)
// });
// }
// runGraph(graph, 2)
//     .then((value)=>{
//         console.log(value)
//     });







const graph = {
a:{deps:[]},
b:{deps:['a']},
c:{deps:['a']},
d:{deps:['b','c']}
}


function runGraph(graph, concurrency) {
    return new Promise((resolve,reject)=>{
        resolve(concurrency);
        graph.a = concurrency;
        console.log(`assiged concurrency of a ${graph.a}`);
        graph.b = graph.a;
        console.log(`assiged concurrency of b ${graph.a}`);
        graph.c = graph.a;
        console.log(`assiged concurrency of c ${graph.a}`);
        graph.d = [graph.b];
        graph.d.push(graph.c)
        console.log(typeof graph.d);
        console.log(Array.isArray(graph.d));
        console.log(`assiged concurrency of d ${graph.d}`);
    })
}

runGraph(graph,2).then((data)=>{
                    console.log(data);
                    return data;
                })