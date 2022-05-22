var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };

function compare() {
    if (Object.keys(obj1).length == Object.keys(obj2).length) {
        for (const key in obj1) {
            if (obj1[key] == obj2[key]) {
                 continue;
            } else {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

console.log(compare());