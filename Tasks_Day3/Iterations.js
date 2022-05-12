let json1 = [1,2,3,4,5];

//for loop
for (let i=0; i<json1.length; i++){
    console.log(json1[i]);
};

//forEach loop
var function1 = function(currentVal, index){
    console.log("key:"+index+" value:"+currentVal);
};
json1.forEach(function1);

let json2 = {
    jsonData : {
        name : ["Tom", "Dik", "Harry"],
        subject : ["maths", "physics"],
        games : ["football", "cricket", "badminton"]
    }
};

//for..in
for(let key in json2.jsonData){
    for(let key1 in json2.jsonData[key]){
        console.log(json2.jsonData[key][key1]);
    }
}

//for..of
for(let key in json2.jsonData){
    for(let value of json2.jsonData[key]){
        console.log(value);
    }
}
