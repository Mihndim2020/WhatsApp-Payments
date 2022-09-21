

const test = 'Test to test';
const amount = 1000;
const number = 677332241;
const reference = 'XZCVD';
const messageBody = `You have recieved a payment of ${amount} from ${number}, reference ${reference}`;

const body = {
    firstname: 'Mih Julius',
    lastname: 'Ndim',
    testMessage: messageBody,
    to: `whatsapp:+${number}`

}

//const bearerToken = token.split('"').join('');

const testNumber = "123456987";
const removeString = testNumber.split('"').join('');



console.log(body);
console.log(removeString);