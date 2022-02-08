//Problem 1: ana to vori
function anaToVori(ana){
    if (typeof ana != 'number'){
        return 'Please insert number'
    }
    let result = (ana / 16);
    return result;
}

//Problem 2: PandaCost

function pandaCost(singara, somuca, jilapi){
    if (typeof (singara, somuca, jilapi) != 'number'){
        return 'Please insert an amount'
 
    }
    const perSingaraPrice = 7;
    const perSomucaPrice = 10;
    const perJilapiPrice = 15;
    const singaraTotalPrice = singara * perSingaraPrice;
    const somucaTotalPrice = somuca * perSomucaPrice;
    const jilapiTotalPrice = jilapi * perJilapiPrice;
    const totalPandaCost = singaraTotalPrice + somucaTotalPrice + jilapiTotalPrice;
    return totalPandaCost;
}






//Problem 3: PicnicBudget

function picnicBudget(persons){
    const budgetForFirst100P =5000;
    const budgetForSecond100P =4000;
    const budgetForRest100P =3000;
    if (typeof persons != 'number'){
        return ('please give a number');
    }
    
    else if(persons <= 100){
        const budgetTotal = persons * budgetForFirst100P;
        return budgetTotal;
    }
    else if(persons <= 200 ){
        const first100 = 100 * budgetForFirst100P;
        const restPersons = persons - 100;
        const second100 = restPersons * budgetForSecond100P;
        const budgetTotal = first100 + second100;
        return budgetTotal;
    }
    else{
        const first100 = 100 * budgetForFirst100P;
        const second100 = 100 * budgetForSecond100P;
        const restPersons = persons - 200;
        const restBudgetTotal = restPersons * budgetForRest100P;
        const budgetTotal = first100 + second100 + restBudgetTotal;
        return budgetTotal;
    }
}







//Problem 4: Oddfriend

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

