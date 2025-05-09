function openChatWindow(name) {
  document.getElementById("chatUser").innerText = name;
  document.getElementById("chatWindow").style.display = "flex";
}

function sendChatMessage() {
  const input = document.getElementById("chatInput");
  const message = input.value.trim();
  const chatBox = document.getElementById("chatMessages");

  if (message !== "") {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message", "sent");
    msgDiv.innerText = message;
    chatBox.appendChild(msgDiv);
    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(() => {
      const reply = document.createElement("div");
      reply.classList.add("message", "received");
      reply.innerText = "Thanks for reaching out! 😊";
      chatBox.appendChild(reply);
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 800);
  }
}
