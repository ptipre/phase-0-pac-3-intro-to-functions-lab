

function shout(something) {
    return something.toUpperCase();
} 

function whisper(something) {
    return something.toLowerCase();
}

function logShout(something) {
    console.log(shout(something));
}

function logWhisper(something) {
    console.log(whisper(something));
}

function sayHiToGrandma(something){
    if (something === something.toLowerCase()) {
        return `I can't hear you!`
    } else if (something === something.toUpperCase()) {
        return 'YES INDEED!'
    } else if (something === 'I love you, Grandma.') {
        return 'I love you, too.'
    }
}
