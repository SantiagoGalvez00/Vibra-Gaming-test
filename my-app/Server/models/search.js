const csv = require('csv-parser');
const fs = require('fs');

function getDataCSV(file, query){
    let data = [];

    fs.createReadStream(file)
        .pipe(csv())
        .on('data', (row) => {
            data = [...data, filterData(row, query)];
        })
        .on('end', () => {
            console.log('CSV file successfully processed');
            return data;
        });
}

function filterData(data, query){
    const name = data.firstName + data.lastName;
    
    if(query.name && !query.city){
        if(name == query.name){
            return data;
        }
    }

    if(!query.name && query.city){
        if(data.city == query.city){
            return data;
        }
    }

    if(query.name && query.city){
        if(name == query.name && data.city == query.city){
            return data;
        }
    }

    return;
}

module.exports.getDataCSV = getDataCSV;