let userInput: unknown;
let useName: string;

userInput = 5;
userInput = 'JaeYong';
if(typeof userInput === 'string'){
    useName = userInput;
}

function generateError(message: string, code: number): never{
    throw{ message : message, errorCode : code };
    // while(true) {}
}

const result = generateError('An error ocuured!',500);
console.log(result);