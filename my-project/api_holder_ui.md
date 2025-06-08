# Chat Application with Markdown Support

## Overview

This document outlines the implementation of a chat application that stores chat history in the browser, interacts with an external API, and supports Markdown formatting for messages.

## Requirements

### User Interface Components
- **Title**: A header displaying the name of the chat application.
- **Chat History**: A scrollable area that displays the conversation history, including both user messages and responses from the external API.
- **Input Field**: A text input for users to type their messages.
- **Send Button**: A button to send the typed message.
- **Error Handling**: Display error messages if the API call fails or if the input is invalid.

### Functionality
- **Store Chat History**: Use the browser's local storage to save chat messages so that they persist even after the page is refreshed.
- **Load Chat History**: Retrieve and display the chat history from local storage when the application loads.
- **API Interaction**: Send user messages to an external API and display the responses in the chat history.
- **Input Validation**: Ensure that the input field is not empty before sending a message.

### External API
- **Endpoint**: Define the API endpoint that will handle chat messages.
- **Request Format**: Specify the format of the request (e.g., JSON) and the expected response format.
- **Error Handling**: Handle potential errors from the API, such as network issues or invalid responses.

### User Experience
- **Responsive Design**: Ensure the UI is responsive and works well on different screen sizes.
- **User Feedback**: Provide visual feedback when messages are sent or when there is an error.

## Implementation Steps

### Step 1: HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat Application</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script> <!-- Include marked.js -->
</head>
<body>
    <div class="chat-container">
        <h1 id="chat-title">Chat Application</h1>
        <div id="chat-history" class="chat-history"></div>
        <input type="text" id="user-input" placeholder="Type your message..." />
        <button id="send-button">Send</button>
        <div id="error-message" class="error-message"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
