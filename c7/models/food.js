const foodFile = './food_list.json';

var fs = require('fs');

var GetAll = () => {
    return new Promise((success, fail) => {
        fs.readFile(foodFile, 'utf8', (err, data) => {
            if(err){
                return fail(err);

            }
            return success(JSON.parse(data));
        });
    });
};

var GetSingle = (id) => {
    return new Promise((success, fail) => {
        
    });
}

module.exports = { 
    GetAll
}