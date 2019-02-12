//создание переменной   require это команда обращения к модулю  в данном случае brain.js
var brain = require('brain.js');
//создание новой переменной для хранения и тренировки нейросети 
var net = new brain.NeuralNetwork();

//массив с входящими/выходящими значениями 0 и 1 
net.train([{input: [0, 0] , output: [0]},
           {input: [0, 1] , output: [1]},
           {input: [1, 0] , output: [1]},
           {input: [1, 1] , output: [0]}]);

var output = net.run([1 , 0]); // [0.987]
console.log(output);
