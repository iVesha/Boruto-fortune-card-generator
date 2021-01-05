//@ts-check

let blessing = [
        ["Great Curse", "a2a2a2"],
        ["Curse", "cc9ddf"],
        ["Small Blessing", "bccb6c"],
        ["Blessing", "f3d166"],
        ["Middle Blessing", "eca259"],
        ["Great Blessing", "f19acf"],
        ["Future Blessing", "7ecce3"]
    ],
    stat = [
        ["Very Bad", "f8d7da"],
        ["Bad", "d6d8d9"],
        ["Average", "fff3cd"],
        ["Good", "d1ecf1"],
        ["Very Good", "d4edda"]
    ];

function rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//
//
function generate() {

    let el = (elem) => document.getElementsByTagName(elem)[0];
    let card = cards[rng(0, cards.length - 1)];

    el("name").innerHTML = card.name
    el("description").innerHTML = card.description
    el("blessing-type").innerHTML = card.blessingType
    el("lucky-item").innerHTML = `Lucky item: ${card.luckyItem}`

    for (let i in blessing) {
        let bless = el("blessing-type").innerText
        if (bless === blessing[i][0]) {
            document.body.style.backgroundColor = `#${blessing[i][1]}`
            el("button").style.backgroundColor = `#${blessing[i][1]}`
        }
    }

    let statyStats = (jsPart, targetId_html) => {
        let val = [];
        for (let x = 0; x <= 4; x++) {
            if (jsPart === stat[x][0]) {
                val[0] = x + 1
                val[1] = stat[x][1]
            }
        }
        let l = document.getElementById(targetId_html)
        l.setAttribute("value", `${val[0]}`)
    }
    statyStats(card.stats.competitions, "competitions")
    statyStats(card.stats.love, "love")
    statyStats(card.stats.health, "health")
    statyStats(card.stats.studies, "studies")
    statyStats(card.stats.money, "money")

}