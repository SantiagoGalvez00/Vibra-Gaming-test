const csv = require('csv-parser');
const fs = require('fs');
const {finished} = require('stream/promises');

async function getDataCSV(file, query){
    let data = [];

    const parse = fs.createReadStream(file)
        .pipe(csv())
        .on('data', (row) => {
            if(filterData(row, query)){
                if(data.length < query.quantity){
                    data = [...data, row];
                }
            }
        })
        .on('end', () => {
            return data;
        });

    await finished(parse);
    return data;
}

function filterData(data, query){
    const name = (data.firstName + data.lastName).toLowerCase();
    
    if(query.name && !query.city){
        if(name == query.name.toLowerCase()){
            return true;
        }
    }

    if(!query.name && query.city){
        if(data.city.toLowerCase() == query.city.toLowerCase()){
            return true;
        }
    }

    if(query.name && query.city){
        if(name == query.name.toLowerCase() && data.city.toLowerCase() == query.city.toLowerCase()){
            return true;
        }
    }

    return false;
}

module.exports.getDataCSV = getDataCSV;