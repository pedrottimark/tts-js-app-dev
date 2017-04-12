var superHeroes = [["Batman", "Bruce Wayne"],
["Spiderman", "Peter Parker"],
["The Flash", "Barry Allen"]];

var ravealArray = [
    "Batman",
    "Spiderman"
]

var name = "The Flash";

function getIdentity(superName2) {
    // Gets a hero
    var hero = superHeroes.find(function (hero) {
        var superName = hero[0];
        return superName === superName2;
    })

    return hero.join(" is ")
}

console.log(ravealArray.map(getIdentity))
