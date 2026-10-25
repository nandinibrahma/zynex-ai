function sendMessage()  {
   const input =
document.getElementById("userinput");
  const chat =
document.getElementById("chat");

 const text =
input.value.trim();

 if (text === "") {
  return;
 }

 // Add user's message
 const userMessage =
document.createElement("div");
  userMessage.className =
"message user";
   userMessage.textcontent =
  text;
   chat.appendChild(userMessage);

// Clear input
input.value = "";

// Temporary ZYNEX response
setTimeout(() => {
  const botMessage =
document.createElement("div");
   botMessage.className =
"message bot";
   botMessage. textContent =
     "I'm ZYNEX AI. I received
  your message: " + text;

  chat.appendChild(botMessage);

      chat.scrollTop =
    chat.scrollheight;
}, 500);
}
