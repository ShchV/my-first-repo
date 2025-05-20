// @ts-check

import { readFileSync } from 'fs';

var body = readFileSync('../l_7/responseGET', 'utf8');
const data = JSON.parse(body);

//console.log(data.lists[0].id); 

for(var i = 0; i<data.lists.length; i++){
    console.log(data.lists[i].name)
    console.log(data.lists[i].id)
}

