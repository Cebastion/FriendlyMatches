const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const fileInput = document.getElementById('file-input');
const imageInput = document.getElementById('image-input');
const uploadButton = document.getElementById('upload-button');
const uploadImageButton = document.getElementById('upload-image-button');
const chatUsers = document.querySelectorAll('.user__block');

let activeChatUser = null;

// Set the initial active chat
if (chatUsers.length > 0) {
    activeChatUser = chatUsers[0];
    activeChatUser.classList.add('active');
}

chatUsers.forEach(user => {
    user.addEventListener('click', () => {
        // Remove the 'active' class from the previously active chat
        if (activeChatUser) {
            activeChatUser.classList.remove('active');
        }

        // Set the new active chat
        activeChatUser = user;
        activeChatUser.classList.add('active');
    });
});

sendButton.addEventListener('click', () => {
    sendMessage();
});

messageInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
});

uploadButton.addEventListener('click', () => {
    fileInput.click();
});

uploadImageButton.addEventListener('click', () => {
    imageInput.click();
});

fileInput.addEventListener('change', () => {
    const selectedFile = fileInput.files[0];
    if (selectedFile) {
        const messageElement = createFileMessageElement(selectedFile);
        chatBox.appendChild(messageElement);
        fileInput.value = '';

        const botResponse = "Thank you for the file!";
        setTimeout(() => {
            const botMessageElement = createMessageElement(botResponse, 'bot');
            chatBox.appendChild(botMessageElement);
        }, 500);
    }
});

imageInput.addEventListener('change', () => {
    const selectedImage = imageInput.files[0];
    if (selectedImage && selectedImage.type.startsWith('image/')) {
        const imageElement = createImageElement(selectedImage);
        chatBox.appendChild(imageElement);
        imageInput.value = '';

        const botResponse = "Nice picture! Thanks for sharing.";
        setTimeout(() => {
            const botMessageElement = createMessageElement(botResponse, 'bot');
            chatBox.appendChild(botMessageElement);
        }, 500);
    }
});

function getRandomResponse() {
    const responses = [
        "Hello! How can I help?",
        "Hi there! What's your question?",
        "Good day! How can I be of assistance?",
        "Hello! How may I assist you?",
    ];
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}

function sendMessage() {
    const message = messageInput.value;
    if (message.trim() !== '') {
        const userMessageElement = createMessageElement(message, 'user');
        chatBox.appendChild(userMessageElement);
        messageInput.value = '';

        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const timeElement = document.createElement('span');
        timeElement.classList.add('message-time');
        timeElement.textContent = currentTime;
        userMessageElement.querySelector('.message-content').appendChild(timeElement);

        const response = getRandomResponse();
        const botMessageElement = createMessageElement(response, 'bot');
        chatBox.appendChild(botMessageElement);
        
        const botTimeElement = document.createElement('span');
        botTimeElement.classList.add('message-time');
        botTimeElement.textContent = currentTime;
        botMessageElement.querySelector('.message-content').appendChild(botTimeElement);
    }
}

function createMessageElement(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);

    const avatarElement = document.createElement('div');
    avatarElement.classList.add('avatar');
    // Replace with actual avatar paths
    const avatarSrc = sender === 'user' ? './IMG/WEBP/coach-logo.webp' : './IMG/WEBP/facitily-logo.webp';
    avatarElement.innerHTML = `<img src="${avatarSrc}" alt="Avatar">`;
    messageElement.appendChild(avatarElement);

    const messageContentElement = document.createElement('div');
    messageContentElement.classList.add('message-content');
    messageElement.appendChild(messageContentElement);

    const messageTextElement = document.createElement('span');
    messageTextElement.classList.add('message-text');
    messageTextElement.textContent = message;
    messageContentElement.appendChild(messageTextElement);

    return messageElement;
}

function createFileMessageElement(file) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'user'); // Assuming files are sent by the user

    const avatarElement = document.createElement('div');
    avatarElement.classList.add('avatar');
    // Replace with actual user avatar path
    avatarElement.innerHTML = '<img src="./IMG/WEBP/coach-logo.webp" alt="Avatar">';
    messageElement.appendChild(avatarElement);

    const messageContentElement = document.createElement('div');
    messageContentElement.classList.add('message-content');
    messageElement.appendChild(messageContentElement);

    const fileLink = document.createElement('a');
    fileLink.href = URL.createObjectURL(file);
    fileLink.classList.add('file-link');
    fileLink.textContent = `Download File: ${file.name}`;
    messageContentElement.appendChild(fileLink);

    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const timeElement = document.createElement('span');
    timeElement.classList.add('message-time');
    timeElement.textContent = currentTime;
    messageContentElement.appendChild(timeElement);

    return messageElement;
}

function createImageElement(image) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'user'); // Assuming images are sent by the user

    const avatarElement = document.createElement('div');
    avatarElement.classList.add('avatar');
    // Replace with actual user avatar path
    avatarElement.innerHTML = '<img src="./IMG/WEBP/coach-logo.webp" alt="Avatar">';
    messageElement.appendChild(avatarElement);

    const imageElement = document.createElement('img');
    imageElement.src = URL.createObjectURL(image);
    imageElement.classList.add('message-image');

    const messageContentElement = document.createElement('div');
    messageContentElement.classList.add('message-content');
    messageContentElement.appendChild(imageElement);
    messageElement.appendChild(messageContentElement);

    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const timeElement = document.createElement('span');
    timeElement.classList.add('message-time');
    timeElement.textContent = currentTime;
    messageContentElement.appendChild(timeElement);

    return messageElement;
}
