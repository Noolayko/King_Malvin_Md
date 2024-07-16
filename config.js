//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "malvink003@gmail.com";
global.location = "lganga, Uganda";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Kampala";
global.github = process.env.GITHUB || "https://github.com/malvinking/King_Malvin_Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vac8SosLY6d7CAFndv3Z";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vac8SosLY6d7CAFndv3Z";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/user-attachments/assets/57623eb5-613c-4eff-aa7b-5048bfd270cb";
global.devs = "263780166288";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "256704376077";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFB2Q2tIUlp5WWFQYW9jSzBWSjZJV2tML1BSRjZLVzNVZFZsS0paeEVucz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNGs0bFlnYXpNSitGMFBjb3dmMXZKTmJxR0RtMnJGdWdXeDUzbVJJMS9Hbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrSGhwSFVBQlNQWmJDRWptelVUYmlrNUNHeEg4VmlHTmIxTS9EMVI4TWw0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIraFp1cE1vMFF3YXpuWmN0NFhxajArL1lTU0U0SFppcnhMaXR1dEJnQVNvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFKdURxU0ZXeTlKUXNFcUlNaGZTc1lwRGJ1RjFBVG5jcFQ0NTMwS3FKMGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJ2RDZ4Vk5jVy9RazNXVlBpbzZwQ3BGeFU3QWNCZThBN0Z0THR1NWdvM2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0QzRGtBQWgrNzBSTFBpMlFvZjMvNE5xUmdZYllXQjFHdnFnMUdqVW0xND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWnRsdTc4WVZFSnIydG1YVzNLMlk4UmJHWDJlSUdrWWpjK1pzM2k5T2lXWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im01QzVMYUdib044d2dnSzhZL3NjZGpTZUdhUnZjUlhDanRpUlpvRmVKSUFjdGZQMVpxaVBBeWdCenh1b01yRTNPNVVxS0RKWkV5K0J4aVZFRDA3MWdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTQsImFkdlNlY3JldEtleSI6ImVXdHMyWHV1QlV4MmV1RzIzNEZkUFBqWjV0SnJPbGt6a3l3RGNjajE0ZVE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im9lQ3VRMlhDUlNPZ05FOE82VUdUeWciLCJwaG9uZUlkIjoiNjk5NDhiOWYtMTQwNy00OGEyLWI4YmMtZWZhZTc5NWM5NWNlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9uVWJZcnhpK3FDb0xRTFg0eFp4bFRTaytsYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3U1Q5MElBcE5jbTFwR0tUOThFNWhhbEd0NU09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMVRBWFNUQ0IiLCJtZSI6eyJpZCI6IjI1NjcwNDM3NjA3NzoyMUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTVg0M1hFUTNiYlp0QVlZQWlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVlZybjBmYmUrTkVsOVdETWU1dkladCtRb3Z6Yk9pb0RVMnpZTGdxNS9oaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiT3pwVVpOd3dvcUF1aVUvMktRSFlGN2FMaWNIZnAydHlzYmxwc01hWjdlUEwxUVZCd1N6RVZmb2pQbEUxZVZheFVCNmJXbVVxM2pEZEJZSXpuR1I3RHc9PSIsImRldmljZVNpZ25hdHVyZSI6ImE2RWFZOFl1WldaYmhtZ2hWdUwraXkvYTNpVFUwd0FZUVZEMHRSUHZvSUZFZ2Y0bnRlamVyVStzdFZ4QitzYjB1eERRQlNsUHpncHpLd1VRYmJveWlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU2NzA0Mzc2MDc3OjIxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZWYTU5SDIzdmpSSmZWZ3pIdWJ5R2Jma0tMODJ6b3FBMU5zMkM0S3VmNFoifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjExMjk4MzQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSDhoIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`ACCOUNT_2POR_UG™`",
  author: process.env.PACK_AUTHER || "ACCOUNT2_por",
  packname: process.env.PACK_NAME || "𝐌𝐀𝐋𝐕𝐈𝐍",
  botname: process.env.BOT_NAME || "ACCOUNT_MD_BOT_UG🇺🇬",
  ownername: process.env.OWNER_NAME || "ACCOUNT_UG-MD_BOT🇺🇬",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "𝐌𝐀𝐋𝐕𝐈𝐍").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
