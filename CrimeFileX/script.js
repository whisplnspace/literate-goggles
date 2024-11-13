function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === "") return;

    // Display user message
    const chatBody = document.getElementById('chatbox-body');
    const userMessage = document.createElement('div');
    userMessage.classList.add('chat-message', 'user-message');
    userMessage.textContent = userInput;
    chatBody.appendChild(userMessage);

    // Clear input field
    document.getElementById('user-input').value = "";

    // Scroll to bottom
    chatBody.scrollTop = chatBody.scrollHeight;

    // Bot response logic
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.classList.add('chat-message', 'bot-message');
        
        // Simple bot responses based on input
        if (userInput.toLowerCase().includes("crime")) {
            botMessage.textContent = "I can help with crime records. Please provide the case details.";
        } else if (userInput.toLowerCase().includes("help")) {
            botMessage.textContent = "Sure! What do you need help with?";
        } else if (userInput.toLowerCase().includes("record")) {
            botMessage.textContent = "Would you like to search for a specific record?";
        } else {
            botMessage.textContent = "Sorry, I didn't understand that. Can you please rephrase?";
        }

        chatBody.appendChild(botMessage);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);
}
