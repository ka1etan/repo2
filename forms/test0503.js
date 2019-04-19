var nodesInfo = {};
var name = "abc";
var name2 = "DIV";

nodesInfo[name] = 1;
var o = {count: 0, nodes: []};
nodesInfo[name2] = o;

/////
/// {"abc": 1, "DIV": o}
/// o = {count: 0, nodes: []}
// nodesInfo[name2] = o;

nodesInfo[name2].count += 1;







