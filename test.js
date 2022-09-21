// "Authorization": "Bearer api_live.4UDet5+nRsTRfFM1KcLjsIZ/SqPruNUZURZqrveR/TdGyzIrUfAvyetjkgMh9DZt"

"api_live.4UDet5+nRsTRfFM1KcLjsIZ/SqPruNUZURZqrveR/TdGyzIrUfAvyetjkgMh9DZt"

const token = "api_live.tJGJOsM+zIgXyuZyMp3CJcb/3hR8/k+clF/U6pU0J4gIRpXQ1ueh9tcWB8//biZF";
const bearer = `Bearer ${token}`;
const stringBearer = JSON.stringify(bearer);
console.log(stringBearer);

content = {"Content-Type": "application/json"};
authorization = {"Authorization": stringBearer};

//const withoutQuotes = str.replaceAll('"', '');

//const withoutQuotes = str.split('"').join('');

const withoutQuotes = token.split('"').join('');


//const finalBearer = stringBearer.replaceAll('"', '');


const headers = {
  "Content-Type": "application/json",
  //"Authorization": "Bearer api_live.4UDet5+nRsTRfFM1KcLjsIZ/SqPruNUZURZqrveR/TdGyzIrUfAvyetjkgMh9DZt"
 //"Authorization": String(stringBearer)
 //"Authorization": finalBearer
}

console.log(withoutQuotes);
console.log(headers);