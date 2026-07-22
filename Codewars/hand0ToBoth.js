// Hand = [ NONE, LEFT, RIGHT, BOTH ] in Preloaded

function whichHand(word) {
    LEFT=['qwertasdfgzxcvb']
    RIGHT=['yuiophjklnm']
    for(const c of word){
        if(LEFT.includes(c)){
        return 'LEFT';
        }
        else if(RIGHT.includes(c)){
        return 'RIGHT';
        }
        else if(LEFT.includes(c) && RIGHT.includes(c)){
        return 'BOTH';
        }
        else{
        return 'NONE';
        }
    }
}
console.log(whichHand('gaffe'));
