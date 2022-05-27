const TelegramBot = require("node-telegram-bot-api");
const fs = require("fs");
const path = require("path");
const Sheets = require("google-sheets-api").Sheets;
const serecKey = fs.readFileSync(path.resolve(__dirname, "../file/sheet.pem"));
const sheets = new Sheets({ email: process.env.EMAIL_SHEETS, key: serecKey });
const token = process.env.TELE_TOKEN;
const type = require("../contants/type");
const { html } = require("telegram-format");
const { markdownv2 } = require("telegram-format");

const bot = new TelegramBot(token, {
  polling: true,
});
const documentId = process.env.GOOGLE_SHEETS_ID;

function teleController() {
  bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1];
    bot.sendMessage(chatId, resp);
  });

  bot.on("message", async function (msg) {
    console.log(msg.text);
    const chatId = msg.chat.id;
    const chatContent = msg.text.toLocaleUpperCase();
    const sheets = 0;
    switch (chatContent) {
      case type.SWITCH_CHAT.DOC:
        teleSendMesasge(msg, type.SHEETS.DEFINE, type.TYPE_CHAT.DEFINE);
        break;
      case type.SWITCH_CHAT.FLOW:
        teleSendMesasge(msg, type.SHEETS.FLOW, type.TYPE_CHAT.DEFINE);
        break;
      case type.SWITCH_CHAT.DOMAIN:
        teleSendMesasge(msg, type.SHEETS.DOMAIN, type.TYPE_CHAT.DEFINE);
        break;
      case type.SWITCH_CHAT.USER:
        teleSendMesasge(msg, type.SHEETS.MOBILE, type.TYPE_CHAT.MODEL);
        break;
      case type.SWITCH_CHAT.BOOKING:
        teleSendMesasge(msg, type.SHEETS.MOBILE, type.TYPE_CHAT.MODEL);
        break;
      case type.SWITCH_CHAT.PUBLIC:
        teleSendMesasge(msg, type.SHEETS.MOBILE, type.TYPE_CHAT.MODEL);
        break;
      case type.SWITCH_CHAT.AGENT:
        teleSendMesasge(msg, type.SHEETS.WEB_HOST, type.TYPE_CHAT.MODEL);
        break;
      case type.SWITCH_CHAT.STORE:
        teleSendMesasge(msg, type.SHEETS.WEB_HOST, type.TYPE_CHAT.MODEL);
        break;
      default:
        // console.log("ERROR");
    }
  });

  bot.on("polling_error", (err) => {
    console.log("Polling error", err);
  });
}

async function teleSendMesasge(chat, positionSheet, types) {
  console.log(chat);
  const chatId = chat.chat.id;
  const message = chat.text.toLocaleUpperCase();
  const author = chat.chat.first_name + " " + chat.chat.last_name;
  console.log("Types module", types);
  console.log("Position sheets", positionSheet);
  console.log("Chat message", message);

  let messageSend = "";
  if (types == type.TYPE_CHAT.DEFINE) {
    messageSend = await getDocumentDefine(positionSheet, author);
  }
  if (types == type.TYPE_CHAT.MODEL) {
    messageSend = await getModel(positionSheet, chat);
  }
  if (types == type.TYPE_CHAT.FILED) {
  }

  if (messageSend) bot.sendMessage(chatId, JSON.stringify(messageSend));
}

// get value define
async function getDocumentDefine(positionSheet, author) {
  const data = await sheets.getSheet(documentId, positionSheet);
  console.log("DOC", data);
  const sheetData = await sheets.getRange(documentId, data.id, "A:B");
  if (!sheetData) {
    return "Chưa có Dữ Liệu bạn ơi 🥹🥹";
  }
  // console.log(sheetData.toString().valueOf(), "\n");
  return template(sheetData, author);
}

// get value with model
async function getModel(positionSheet, chat) {
  const message = chat.text.toUpperCase();
  const author = chat.chat.first_name + chat.chat.last_name;
  let row = "";
  if (message == type.SWITCH_CHAT.USER || message == type.SWITCH_CHAT.STORE) {
    row += "A:C";
    console.log("row", row);
  }
  if (message == type.SWITCH_CHAT.AGENT) {
    row += "E:G";
  }
  if (message == type.SWITCH_CHAT.BOOKING) {
    row += "M:O";
  }
  console.log("GET MODEL");
  const data = await sheets.getSheets(documentId, positionSheet);
  console.log("Row", row);
  const sheetsData = await sheets.getRange(
    documentId,
    data[positionSheet].id,
    row
  );
  console.log(JSON.stringify(sheetsData));
  console.log(sheetsData);
  return template(sheetsData, author);
}

// get value mobile
async function getValueWithFiled(key, positionSheet) {
  const data = await sheets.getSheets(documentId);
  const sheetData = await sheets.getRange(
    documentId,
    data[positionSheet].id,
    "A:B"
  );
  console.log(sheetData[0][1]);
  for (let i = 0; i < sheetData.length; i++) {
    if (sheetData[i][0] === key) {
      console.log("Key compare ", key + " with " + sheetData[i][0]);
      return sheetData[i][1];
    }
  }
  return "Chưa có Dữ Liệu bạn ơi 🥹🥹";
}

function template(data, author) {
  let message = "";
  let value = "";
  const reply = "Reply: " + author;
  for (let i = 0; i < data.length; i++) {
    if (data[i][1] == undefined) value = "null";
    if (data[i][1] != undefined) value = data[i][1];
    message += "Key:" + data[i][0] + "  Value:" + " " + value + " ,";
  }
  const result = reply + "/ " + message;
  console.log(html.escape(result));
  return result;
}

teleController();
