const chatInput = document.querySelector('.chat-input input');
const chatButton = document.querySelector('.chat-input button');
const chatMessages = document.querySelector('.chat-messages');

function sendMessage() {
  const message = chatInput.value;
  if (message.trim() === '') return;
  
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', 'sent');
  messageElement.innerHTML = `<p>${message}</p>`;
  
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  
  chatInput.value = '';
}

chatButton.addEventListener('click', sendMessage);
chatInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') sendMessage();
});