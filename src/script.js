"use strict";
import { chatData } from "./chatdata";

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

sendButton.addEventListener("click", function () {
  console.log(chatInput.value);
});

// Get Chat Html content
function getChatHtml() {
  let chatHtml = ``;

  chatData.forEach(function (chat) {
    chatHtml += `
    <div class="message">
      <div class="message-sender">${chat.handle}</div>
      <div class="message-content">${chat.text}</div>
      <div class="message-timestamp">${chat.time}</div>
    </div>
    `;
  });
  return chatHtml;
}

// Render Chat content

function render() {
  document.getElementById("chat-messages").innerHTML = getChatHtml();
}

render();
