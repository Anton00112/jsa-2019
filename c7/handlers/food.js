var fs = require('fs');

var GetAllFood = () => {
    fs.readFile('.food_list.json', 'utf8', (err, data) =>{
    if(err){
        res.send('Could not read file');
        return;
    }
    jData = JSON.parse(data);
    res.send(jData);
    });
};

module.exports = {
    GetAllFood
};

var GetSingleFood = (req, res) => {
    fs.readFile("./food/:id", "utf8", (err, data) => {
        if(err){
            res.send("Could not read file");
            return;
        }
        jData = JSON.parse(data);
        res.send(jData);
    })
}

var CreateNewFood = (req, res) => {
    fs.readFile("./food/:id", "utf8", (err, data) => {
        if(err){
            res.send("Could not read file");
            return;
        }
        jData = JSON.parse(data);
        res.send(jData);
    })
}

var UpdateFood = (req, res) => {
    fs.readFile("./food/:id", "utf8", (err, data) => {
        if(err){
            res.send("Could not read file");
            return;
        }
        jData = JSON.parse(data);
        res.send(jData);
    })
}
//samoova e tocno od site...
var PartialUpdateFood = (req, res) => {
    fs.readFile("./food/:id", "utf8", (err, data) => {
        if(err){
            res.send("Could not read file");
            return;
        }
        jData = JSON.parse(data);
        out =jData.filter((o) =>{
            return o.id == req.params.id;
        });
        if(out.length == 0){
            return res.status(404).send('Not Found');
        }
    })
}

var DeleteFood = (req, res) => {
    fs.readFile("./food/:id", "utf8", (err, data) => {
        if(err){
            res.send("Could not read file");
            return;
        }
        jData = JSON.parse(data);
        var index = null;
        for(let i = 0; i < jData.length; i++){
            if(jData[i].id == req.params.id){
                index = i;
                break;
            }
        }
        jData.splice(index, 1);
        fs.writeFile('./food_list.json', JSON.stringify(jData), (err) => {
            if(err){
                return res.status(500).send('Could not save file');
            }
            return res.status(200).send('OK');
        });
    });
}

module.exports = {
    GetAllFood,
    GetSingleFood,
    CreateNewFood,
    UpdateFood,
    PartialUpdateFood,
    DeleteFood
};