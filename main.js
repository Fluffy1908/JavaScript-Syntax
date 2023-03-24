const phrase = ["we cannot solve problems with the kind of thinking we employed when we came up with them.", "learn as if you will live forever, live like you will die tomorrow.", "when you change your thoughts, remember to also change your world.", "success is not final; failure is not fatal: It is the courage to continue that counts.", "It is better to fail in originality than to succeed in imitation."];


let yourName = (name) => {
    if (typeof name === 'string') {
        return name.toUpperCase();
    } else {
        return ('Invalid name');
    }
}

let getName = () => {
    return yourName('Jim');
}

let randomVariable = () => {
    return Math.floor(Math.random() * 5);
}


let randomPhrase = () => {
    return (phrase[randomVariable()]);
}


let result = () => {
    console.log(`${getName()}, ${randomPhrase()}`);
}

result();

console.log('Testing add skills')