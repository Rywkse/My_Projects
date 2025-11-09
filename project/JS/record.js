function updateRecords(record, id, prop, value) {
    if (value == "") {
        delete record[id][prop];
        return record;
    } else if (prop !== "tracks" && value !== "") {
        record[id][prop] = value;
    } else if (prop == "tracks" && value !== "" && record[id].hasOwnProperty("tracks") == false) {
        record[id][prop] = [value];
    } else {
        record[id][prop].push(value);
    }
    return record;
}

const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};


