const randomString = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}


const encryptInBase64 = (str) => {
    return Buffer.from(str).toString('base64')
}

const decryptInBase64 = (str) => {
    return Buffer.from(str, 'base64').toString('ascii')
}


const randomNumber = (length) => {
    var text = "";
    var possible = "0123456789";
    for (var i = 0; i < length; i++) {
        var sup = Math.floor(Math.random() * possible.length);
        text += i > 0 && sup == i ? "0" : possible.charAt(sup);
    }
    return Number(text);
}

const getRawData = (data) => {
    return JSON.parse(JSON.stringify(data))
}


const groupByKey = (array, key) => {
    return array.reduce((hash, obj) => obj[key] === undefined ? hash : Object.assign(hash, { [obj[key]]: (hash[obj[key]] || []).concat(obj) }), {})
}

const groupByKeyOfKey = (array, key1, key2) => {
    return array.reduce((hash, obj) => obj[key1][key2] === undefined ? hash : Object.assign(hash, { [obj[key1][key2]]: (hash[obj[key1][key2]] || []).concat(obj) }), {})
}


const sumInArrayOfObject = (array, key) => {
    return array.reduce((a, b) => a + (b[key] || 0), 0);
}

const sumInArrayOfObjectOfObject = (array, key1, key2) => {
    return array.reduce((a, b) => a + (b[key1][key2] || 0), 0);
}

const getUniqueArray = (array) => [...new Set(array)];

const getUniqueArrayOfObject = (array,key) => [...new Map(array.map(item =>
    [item[key], item])).values()];

const getOrderedArrayFromProp = (array,prop) => array.sort((a, b) => b[prop] - a[prop]);


module.exports = {
    randomString,
    encryptInBase64,
    decryptInBase64,
    randomNumber,
    getRawData,
    sumInArrayOfObject,
    sumInArrayOfObjectOfObject,
    groupByKey,
    groupByKeyOfKey,
    getUniqueArray,
    getOrderedArrayFromProp,
    getUniqueArrayOfObject
}