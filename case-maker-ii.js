const makeCase = function(input, cases) {
  let modifiedInput = input;
  let output = '';
  //camel
  const camel = function(input){
    let splitedString = input.split(' ');
    let output = '';
    output += splitedString.shift();
    for(let index = 0; index < splitedString.length; index++){
      output += splitedString[index].charAt(0).toUpperCase() + splitedString[index].slice(1); //slice will return empty value if out of bound
    }
    modifiedInput = output;
    return output;
  };

  //pascel
  const pascal = function(input){
    let splitedString = input.split(' ');
    let output = '';
    for(let index = 0; index < splitedString.length; index++){
      output += splitedString[index].charAt(0).toUpperCase() + splitedString[index].slice(1); //slice will return empty value if out of bound
    }
    modifiedInput = output;
    return output;
  };

  //snake
  const snake = function(input){
    let output = input.replace(/\s/g, '_');
    modifiedInput = output;
    return output;
  }

  //kebab
  const kebab = function(input){
    let output = input.replace(/\s/g, '-');
    modifiedInput = output;
    return output;
  }

  //title
  const title = function(input){
    let splittedString = input.split(/\s/);
    for(let index = 0; index < splittedString.length; index++){
      splittedString[index] = splittedString[index].charAt(0).toUpperCase() + splittedString[index].slice(1);
    }
    let output = splittedString.join(' ');
    modifiedInput = output;
    return output;
  }

  const vowel = function(input){
    let output = '';
    for (let index = 0; index < input.length; index++){
      if ((/a|e|i|o|u/).test(input.charAt(index))){
        output += input.charAt(index).toUpperCase();
      }
      else {
        output += input.charAt(index);
      }
    }
    modifiedInput = output;
    return output;
  }

  const consonant = function(input){
    let output = '';
    for (let index = 0; index < input.length; index++){
      if ((/a|e|i|o|u/).test(input.charAt(index))){
        output += input.charAt(index);
      }
      else {
        output += input.charAt(index).toUpperCase();
      }
    }
    modifiedInput = output;
    return output;
  }

  const upper = function(input){
    let output = input.toUpperCase();
    modifiedInput = output;
    return output;
  }

  const lower = function(input){
    let output = input.toLowerCase();
    modifiedInput = output;
    return output;
  }

  //turn string into array
  let caseOrder = [];
  if ((typeof cases === 'string')){
    caseOrder.push(cases);
  }
  else {
    caseOrder = cases.slice();
  }

  //sort the array
  const sortOrder = ['camel', 'pascal', 'snake', 'kebab', 'title', 'vowel', 'consonant', 'upper', 'lower'];

  const customCompareOrder = (a, b) => {
    let indexA = sortOrder.indexOf(a);
    let indexB = sortOrder.indexOf(b);
    if (indexA < indexB){
      return -1;
    }
    else if (indexA > indexB){
      return 1;
    }
    else if (indexA === indexB){
      return 0;
    }
  }
  caseOrder.sort(customCompareOrder);

  console.log(caseOrder);
  
  caseOrder.forEach(element => {
    switch(element){
      case 'camel':
        output = camel(modifiedInput);
        break;
      case 'pascal':
        output = pascal(modifiedInput);
        break;
      case 'snake':
        output = snake(modifiedInput);
        break;
      case 'kebab':
        output = kebab(modifiedInput);
        break;
      case 'title':
        output = title(modifiedInput);
        break;
      case 'vowel':
        output = vowel(modifiedInput);
        break;
      case 'consonant':
        output = consonant(modifiedInput);
        break;
      case 'upper':
        output = upper(modifiedInput);
        break;
      case 'lower':
        output = lower(modifiedInput);
        break;
    }
  });
  
  return output;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
