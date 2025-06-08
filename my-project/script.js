// script.js for Chat Application

document.addEventListener('DOMContentLoaded', () => {
    const chatHistory = document.getElementById('chat-history');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const errorMessage = document.getElementById('error-message');

    // Load chat history from localStorage
    function loadChatHistory() {
        const history = JSON.parse(localStorage.getItem('chatHistory') || '[]');
        chatHistory.innerHTML = '';
        history.forEach(msg => {
            appendMessage(msg.text, msg.sender);
        });
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }

    // Save chat history to localStorage
    function saveChatHistory() {
        const messages = Array.from(chatHistory.children).map(node => ({
            text: node.getAttribute('data-raw'),
            sender: node.classList.contains('user') ? 'user' : 'api',
        }));
        localStorage.setItem('chatHistory', JSON.stringify(messages));
    }

    // Append message to chat history
    function appendMessage(text, sender) {
        const div = document.createElement('div');
        div.className = 'message ' + sender;
        div.setAttribute('data-raw', text);
        div.innerHTML = marked.parse(text);
        chatHistory.appendChild(div);
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }

    // Send message to API (mock endpoint for demo)
    async function sendMessage(text) {
        // Replace with your actual API endpoint
        const endpoint = 'https://api.example.com/chat';
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: text })
            });
            if (!response.ok) throw new Error('API error');
            const data = await response.json();
            return data.reply || 'No response';
        } catch (err) {
            throw new Error('Failed to contact API.');
        }
    }

    // Handle send button click
    sendButton.addEventListener('click', async () => {
        errorMessage.textContent = '';
        const text = userInput.value.trim();
        if (!text) {
            errorMessage.textContent = 'Please enter a message.';
            return;
        }
        appendMessage(text, 'user');
        saveChatHistory();
        userInput.value = '';
        try {
            const reply = await sendMessage(text);
            appendMessage(reply, 'api');
            saveChatHistory();
        } catch (err) {
            errorMessage.textContent = err.message;
        }
    });

    // Allow Enter key to send
    userInput.addEventListener('keydown', e => {
        if (e.key === 'Enter') sendButton.click();
    });

    loadChatHistory();
});
