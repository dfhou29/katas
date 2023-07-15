/* To safely send data in a URL, the data first has to be encoded to convert any special characters to URL safe characters. For this assignment we will only focus on the following URL encoding rules:

    %20 represents a space character.
    Key-value pairs are represented using an = character: key=value
    Multiple key-value pairs are separated using a & character: key1=value1&key2=value2 */

const urlDecode = function(text) {
  let data = text.split(/\&/g);
  let decodedObject = {};
  data.forEach(element => {
    let captured = element.match(/(?<key>\w+)\=(?<value>[\w\d\%]*)/); //capture key and value
    let key = captured.groups.key;
    let value = captured.groups.value.replace(/\%20/g,' '); //replace %20 with whitespace
    decodedObject[key] = value; //store key and value pair into object
  });
  return decodedObject;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
    