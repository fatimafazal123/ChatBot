const botResponses = {
    "hi": "Hello! How can I help you today?",
    "hello": "Hi there! What can I assist you with?",
    "how are you?": "I'm just a bot, but thanks for asking! How about you?",
    "how was the day":"Today is good day",
    "bye": "Goodbye! Have a great day!",
};

function sendMessage() {
    const userInput = document.getElementById("user-input");
    const message = userInput.value.trim();

    if (message) {
        displayMessage(message, "user");
        getBotResponse(message);
        userInput.value = '';
    }
}

function displayMessage(message, sender) {
    const chatWindow = document.getElementById("chat-window");
    const messageDiv = document.createElement("div");
    messageDiv.className = "message " + sender;
    messageDiv.textContent = message;
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to bottom
}

function getBotResponse(userMessage) {
    const response = botResponses[userMessage.toLowerCase()] || "I'm sorry, I didn't understand that.";
    displayMessage(response, "bot");
}
