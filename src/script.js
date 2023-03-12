"use strict";
import { chatData } from "./data";

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
const sendButton = documement.getElementById("send-button");

sendButton.addEventListener("click", function () {
  console.log(chatInput.value);
});
