// var fs = require('fs');

// fs.writeFile('test.txt', 'Node.js is the best!', (err) => {
//     if(err){
//         console.error(err);
//     }
// })

// var pero = (cb) => {
//     var sum = 0;
//     for(var i = 0; i < 100; i++){
//         sum += i;
//     }
//     cb(sum);
// }

// // pero((s) => {
// //     console.log(s);
// // });

// var log = (num) => {
//     console.log(num);
// }

// pero(log);

fs.readFile('test.txt', (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(err);
    console.log(data);
})