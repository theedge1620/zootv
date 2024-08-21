const messages = [
    "OFF the record and onto the tour",
    "FOUR JERKS and a police escort",
    "MEDIA MANIPULATION and the global information network",
    "NEVER TRUST a man smoking a cigar I tell you",
    "THIS IS ALL VERY REALISTIC",
    "ACHTUNG baby",
    "KICKING AND SCREAMING",
    "into the world",
    "ICH BIN EIN TRABANT",
    "Beware Of The Bull",
    "Be Gentle With Me",
    "This Is Not A Rehearsal",
    "Enjoy The Surface",
    "Everything You Know Is Wrong",
    "It Could Never Happen Here",
    "Taste Is The Enemy Of Art",
    "Believe Everything",
    "Watch More TV",
    "Smell The Flowers While You Can",
    "Art is manipulation",
    "Religion is a Club",
    "You are a victim of your parents",
    "Try more often",
    "Contradiction is balance",
    "I'd like to teach the world to sing",
    "Call your mom",
    "Rock and roll is entertainment",
    "It's your world you can change it",
    "bloody kids",
    "What Did The First Punk Rock Girl Wear To Your School?",
    "Death Is A Career Move",
    "mock the devil and he will flee from you",
    "Off with the horns, on with the show",
    "LIE",
    "beLIEve",
    "Nobody move and Nobody gets hurt",
    "Work is the blackmail of survival",
    "WATCH MORE TV"
];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createMessage() {
    const container = document.getElementById('message-container');
    const message = messages[getRandomInt(0, messages.length - 1)];
    const messageElement = document.createElement('div');

    messageElement.textContent = message;
    messageElement.style.position = 'absolute';
    messageElement.style.top = `${getRandomInt(0, window.innerHeight - 500)}px`;
    messageElement.style.left = `${getRandomInt(0, window.innerWidth - 200)}px`;
    messageElement.style.fontSize = `${getRandomInt(24, 48)}px`;
    messageElement.style.opacity = 1;
    messageElement.style.width=200;

    container.appendChild(messageElement);

    // Animate the message
    const animationDuration = 200; // Duration of one animation cycle in ms

    function glitch() {
        messageElement.style.opacity = (Math.random() > 0.5) ? 0 : 1;
        messageElement.style.transform = `translate(${getRandomInt(-5, 5)}px, ${getRandomInt(-5, 5)}px)`;
    }

    // Flash and glitch effect
    const glitchInterval = setInterval(glitch, animationDuration);
    setTimeout(() => {
        clearInterval(glitchInterval);
        container.removeChild(messageElement);
    }, 2000); // Message visibility duration
}

function startGlitchEffect() {
    setInterval(createMessage, 1000); // Create a new message every second
}

startGlitchEffect();
