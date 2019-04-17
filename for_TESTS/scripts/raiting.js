let raitingButton = document.getElementById('button-list');
let list = document.getElementById('trackList');
let showMore = document.getElementById('trackList_btn');

function creatTracklistArray() {
    let inputJSON = getFromServer('musicDataBase');
    let dataBase = JSON.parse(inputJSON);
    let trackList = [];
    let index = 0;
    for (let personName in dataBase) {
        for (let song in dataBase[personName].audio) {
            trackList[index] = new GetSong(personName, song);
            ++index;
        }
    }
    function GetSong(personName,song) {
        this.personName = personName;
        this.song = song;
        this.count = dataBase[personName].audio[song].counter;
    }
    return trackList;
}

function sortTracklist(tracklist) {
    let templateRes = [];
    function compareNumeric(a, b) {
        return a.count - b.count;
    }
    let sortArray = tracklist.sort(compareNumeric);
    for (let i=0; i<=sortArray.length-1; i++) {
        let template = `<li>${sortArray[i].personName} - ${sortArray[i].song}</li>`;
        templateRes.push(template);
    }
    return templateRes;
}
let listArray = sortTracklist(creatTracklistArray());

raitingButton.addEventListener('click', (e) => {
    let click = e.target;
    const interval = 10;
    let top10 = 10;
    let top25 = 25;
    let top50 = 50;
    let top100 = 100;
    let result = "";
    let res;
    let counter = top50;
    switch (click.dataset.index) {
        case '10':
                res = listArray.slice(0, top10);
            break;
        case '25':
                res = listArray.slice(0, top25);
            break;
        case '50':
                res = listArray.slice(0, top50);
            break;
        case '100':
                res = listArray.slice(0, top50);
            showMore.style.display = "block";
    }
    for (let i=0; i<=res.length-1; i++) {
        result += res[i];
    }
    list.innerHTML = result;
    showMore.addEventListener('click', function(){
        counter += interval;
        result = "";
        if (counter <= top100) {
            res = listArray.slice(0,counter);
            for (let i=0; i<=res.length-1; i++) {
                result += res[i];
            }
            list.innerHTML = result;
        }
        else {
            showMore.style.display = "none";
        }
    });
});



