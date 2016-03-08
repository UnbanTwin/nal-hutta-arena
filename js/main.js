/****************************
Sam Bolton 2016
http://sambolton.me
StarWars Force Duels
******************************/
var char1,char2;

function select(target){
    document.getElementById(target).className="selected";
    char1 = target;


};
function select1(target){
    document.getElementById(target).className="selected1";
    target = target.slice(0,-1);
    char2 = target;

};

function findByName(name) {
    for(i = 0; i<characters.length;i++){
        if(characters[i].name == name) {
            return Object.assign({},characters[i]);
        }
    }
}

function r(n) {
    return Math.random() * n;
};

function strengthFight(char1,char2) {
    console.log("strength fight");
    if (char1.strength > char2.strength) {
        char2.hp -= 5;
    }else {
        char1.hp -= 5;
    }
};
function forceFight(char1,char2) {
    console.log("force fight");
    if (char1.forcePower + r(5) > char2.forcePower +r(5)) {
        char2.hp -= 2;
    }else {
        char1.hp -= 2;
    }
};

function round(char1,char2) {
    if (char1.type == "force" && char2.type == "force") {
        if(r(10) > 9) {
            strengthFight(char1,char2);
        }else if (r(20) > 19) {
            strengthFight(char1,char2);
            forceFight(char1,char2);
        }else {
            forceFight(char1,char2);
        }

    }else{
        strengthFight(char1,char2);
    }
};
function duel() {
    var current1 = findByName(char1);
    var current2 = findByName(char2);
    while(current1.hp > 0 && current2.hp > 0) {
        round(current1,current2);
    };
    var winner;
    if(current1.hp > current2.hp) {
        winner = current1;

    }else {
        winner = current2;
    }
    console.log("health for char1 is:" + current1.hp);
    console.log("health for char2 is:" + current2.hp);

    console.log("The winner is:" + winner.name)


}
