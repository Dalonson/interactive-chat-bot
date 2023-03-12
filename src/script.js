"use strict";
import { chatData } from "./data.js";

// timestamp variables
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();
const amOrPm = hours >= 12 ? "PM" : "AM";
const twelveHourFormat = hours % 12 || 12;
const formattedTime = `${twelveHourFormat}:${minutes} ${amOrPm}`;
const formattedDate = `${month}-${day}-${year}`;

const timestamp = `${formattedDate} ${formattedTime}`;

//

const chatInput = document.getElementById("chat-input");
const sendButton = document.getElementById("send-button");

// let newMessage = document.getElementById("new-message");
// newMessage = [];

sendButton.addEventListener("click", function () {
  // console.log(chatInput.value);
  const newChat = {
    handle: "Me",
    chatText: chatInput.value,
    time: timestamp,
  };
  chatData.push(newChat);
  render();
  chatInput.value = "";
});

function getChatsHtml() {
  let chatHtml = ``;

  chatData.forEach(function (chat) {
    chatHtml += ` 
    <div class="message">
      <div class="message-sender">${chat.handle}</div>
      <div class="message-content">${chat.chatText}</div>
      <div class="message-timestamp">${chat.time}</div>
    </div>`;
  });
  return chatHtml;
}

function render() {
  document.getElementById("chat-messages").innerHTML = getChatsHtml();
  const chatMessages = document.getElementById("chat-messages");
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

render();
