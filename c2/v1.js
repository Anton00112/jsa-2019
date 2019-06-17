// function everyThird(c) {
//     var i = 0;
//     var b = 0;
//     while(i < 100){
//         i++;

//         if(i % 2 == 0){
//             b++;
//         }

//         if(i % 2 == 0 && b == c){
//             console.log(i);
//             b = 0;
//         }

//     }

// }

// everyThird(4);
    function arrSum(a) {
        var c = 0;
        for(var i = 0; i < a.length; i++){
            if(a[i].toString().length > 1) {
                c++;
                a[i] = a[i].toString().split('').reduce((a, b) => parseInt(a) = parseInt(b));
            }
           

        }
    }
    if(c > 0){
        return arrSum(a);
        } else {
        return a.reduce((a. b) => a + b);
        }

    }
    var r = arrSum([248, 21, 95, 239, 46]);
    console.log(r);