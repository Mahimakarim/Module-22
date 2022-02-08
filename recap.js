// function smallestElement(numbers) {
//     let min = numbers[0];
//     for (let i = 0; i< numbers.length; i++){
//         const element = numbers[i];
//         if(element<min){
//             min = element;
//         }
//     }
// // }

// // function largestNumber(numbers) {
// //     let max = numbers[0];
// //     for(let i = 0; i> numbers.length; i++){
// //         const element = numbers[i];
// //         if(element
// //             )
// //     }
    
// // }

// // let sum = 0;
// // for (let i = 0;i<=3; i++){
// // const element = sum[i];
// // sum = sum+element;
// // }
// // console.log(sum);

// function picnicBudget(persons){
//     const budgetForFirst100P =5000;
//     const budgetForSecond100P =4000;
//     const budgetForRest100P =3000;
//     if (typeof persons != 'number'){
//         return 'please give a number';
//     }
    
//     else if(persons <= 100){
//         const budgetTotal = persons * budgetForFirst100P;
//         return budgetTotal;
//     }
//     else if(persons <= 200 ){
//         const first100 = 100 * budgetForFirst100P;
//         const restPersons = persons - 100;
//         const second100 = restPersons * budgetForSecond100P;
//         const budgetTotal = first100 + second100;
//         return budgetTotal;
//     }
//     else{
//         const first100 = 100 * budgetForFirst100P;
//         const second100 = 100 * budgetForSecond100P;
//         const restPersons = persons - 200;
//         const restBudgetTotal = restPersons * budgetForRest100P;
//         const budgetTotal = first100 + second100 + restBudgetTotal;
//         return budgetTotal;
//     }
// }
// const budget = picnicBudget(0);
// console.log(budget);

function pandaCost(singara, somuca, jilapi){
    if (typeof (singara, somuca, jilapi) != 'number'){
        return 'Please insert number'
 
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
const kinbo = pandaCost(0,-1,-1);
console.log(kinbo);
