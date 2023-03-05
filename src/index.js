const decisionTree = require("node-decision-tree");

let training = require("./data.json");

const prediction = [{
    "reachedGoal": "yes",
    "metDeadline": "yes",
    "initiative": "no"
}];

const input = ["reachedGoal", "metDeadline", "initiative"];

const output = ["increase"];

const tree = new decisionTree.Tree();

tree.fit(training, input, output);

const result = tree.predict(prediction);

console.log(`o funcionário terá aumento? - ${result}`);
