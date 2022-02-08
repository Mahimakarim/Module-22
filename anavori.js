// function anaToVori(ana){
//     if (typeof ana != 'number' && ana >= 0){
//         return 'Please insert number'
//     }
//     let result = (ana / 16);
//     return result;
// }
// const our = anaToVori(-3);
// console.log(our);


// for (let i = 1; i <= 50; i++){

// }

const friends = ['gita','mitul', 'bobita','sobita','kobita', 'nobita','moumita'];

function oddFriend(allfriend) {
    for (let i = 0; i < allfriend.length; i++){
        if (allfriend[i].length % 2 != 0) {
            return allfriend[i];
        }
    }

}
    

const unique = oddFriend(friends);
console.log(unique);