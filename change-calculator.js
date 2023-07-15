/* We will be given two numbers, the total of a transaction, and the amount of cash given to the cashier. Both of these numbers will be represented as whole numbers in cents. Therefore $10 will be represented as 1000.

Our function calculateChange should return an object which describes the total amount of change for the cashier to give back. Although pennies are not used in circulation, we will still calculate the amount of pennies to give back.

Valid denominations are as follows:

    Twenty dollars
    Ten dollars
    Five dollars
    Two dollars
    One dollar
    Quarter (25¢)
    Dime (10¢)
    Nickel (5¢)
    Penny (1¢) */

    const calculateChange = function(total, cash) {
      // Your code here
      let changeNotes = {};
      let change = cash - total;
      while(change >= 2000){
        if (changeNotes.hasOwnProperty('twentyDollar')){
          changeNotes.twentyDollar += 1;
        }
        else {
          changeNotes.twentyDollar = 1;

        }
        change -= 2000;
      }

      while(change >= 1000){
        if (changeNotes.hasOwnProperty('tenDollar')){
          changeNotes.tenDollar += 1;
        }
        else {
          changeNotes.tenDollar = 1;
        }
        change -= 1000;
      }

      while(change >= 500){
        if (changeNotes.hasOwnProperty('fiveDollar')){
          changeNotes.fiveDollar += 1;
        }
        else {
          changeNotes.fiveDollar = 1;
        }
        change -= 500;
      }

      while(change >= 200){
        if (changeNotes.hasOwnProperty('twoDollar')){
          changeNotes.twoDollar += 1;
        }
        else {
          changeNotes.twoDollar = 1;
        }
        change -= 200;
      }

      while(change >= 100){
        if (changeNotes.hasOwnProperty('oneDollar')){
          changeNotes.oneDollar += 1;
        }
        else {
          changeNotes.oneDollar = 1;
        }
        change -= 100;
      }

      while(change >= 25){
        if (changeNotes.hasOwnProperty('quarter')){
          changeNotes.quarter += 1;
        }
        else {
          changeNotes.quarter = 1;
        }
        change -= 25;
      }

      while(change >= 10){
        if (changeNotes.hasOwnProperty('dime')){
          changeNotes.dime += 1;
        }
        else {
          changeNotes.dime = 1;
        }
        change -= 10;
      }

      while(change >= 5){
        if (changeNotes.hasOwnProperty('nickel')){
          changeNotes.nickel += 1;
        }
        else {
          changeNotes.nickel = 1;
        }
        change -= 5;
      }

      while(change >= 1){
        if (changeNotes.hasOwnProperty('penny')){
          changeNotes.penny += 1;
        }
        else {
          changeNotes.penny = 1;
        }
        change -= 1;
      }

      return changeNotes;
    };
    
    console.log(calculateChange(1787, 2000));
    console.log(calculateChange(2623, 4000));
    console.log(calculateChange(501, 1000));

    //simpler version 
    // const calculateChange = function(total, cash) {
    //   const denominations = [
    //     { name: "twentyDollar", value: 2000 },
    //     { name: "tenDollar", value: 1000 },
    //     { name: "fiveDollar", value: 500 },
    //     { name: "twoDollar", value: 200 },
    //     { name: "oneDollar", value: 100 },
    //     { name: "quarter", value: 25 },
    //     { name: "dime", value: 10 },
    //     { name: "nickel", value: 5 },
    //     { name: "penny", value: 1 }
    //   ];
    
    //   const change = {};
    
    //   let remainingChange = cash - total;
    
    //   for (const denomination of denominations) {
    //     const count = Math.floor(remainingChange / denomination.value);
    //     if (count > 0) {
    //       change[denomination.name] = count;
    //       remainingChange -= count * denomination.value;
    //     }
    //   }
    
    //   return change;
    // };
    