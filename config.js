const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_01_10_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTM1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDk1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTYwLFxuICAgICAgICA4MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzksXG4gICAgICAgIDkzLFxuICAgICAgICAyNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1MixcbiAgICAgICAgNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDcxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjA1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI0LFxuICAgICAgICA3MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxODcsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMwLFxuICAgICAgICA5OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEwLFxuICAgICAgICA3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAzLFxuICAgICAgICA1NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDg1LFxuICAgICAgICA4OSxcbiAgICAgICAgODcsXG4gICAgICAgIDI1LFxuICAgICAgICAzMixcbiAgICAgICAgMTA3LFxuICAgICAgICA2MixcbiAgICAgICAgODIsXG4gICAgICAgIDExNixcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDU1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA1NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI4LFxuICAgICAgICA4NCxcbiAgICAgICAgODQsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODYsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI0LFxuICAgICAgICA1MixcbiAgICAgICAgMTIzLFxuICAgICAgICA3NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQzLFxuICAgICAgICA4OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk4LFxuICAgICAgICA3MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAzOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMSxcbiAgICAgICAgMyxcbiAgICAgICAgMixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM2LFxuICAgICAgICA5MyxcbiAgICAgICAgMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTMwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDg3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExNixcbiAgICAgICAgODksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDkwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDExMixcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE3LFxuICAgICAgICA2NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieXNmWlpRdnVEc0VoeGduTWRPckpDNUptSXdWOFd5dFAwTG9hbXUwQXR4cz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3MDQwMjQ1NDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjU5OUJDM0RCOEIzNDIwNkMyMkU4NDcyOEUyNjY0RDdFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyODY1ODg2MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJjWUotR0JBSlRpcWwwRlVoeWRGbGJRXCIsXG4gIFwicGhvbmVJZFwiOiBcImM4MmYzNTYwLTZlZDEtNDQ5Mi1hMmQ3LTY1Y2U5ZWExMTA5Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzksXG4gICAgICAyMjMsXG4gICAgICAyMzYsXG4gICAgICAyMDQsXG4gICAgICAyMTEsXG4gICAgICAxOTksXG4gICAgICAyMzEsXG4gICAgICAyMTYsXG4gICAgICAzNyxcbiAgICAgIDE4MixcbiAgICAgIDk5LFxuICAgICAgMTg4LFxuICAgICAgMTgzLFxuICAgICAgNDAsXG4gICAgICAxNDIsXG4gICAgICAxMTEsXG4gICAgICA0MixcbiAgICAgIDEzLFxuICAgICAgOTIsXG4gICAgICA3NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA4LFxuICAgICAgNzAsXG4gICAgICAzMixcbiAgICAgIDEyMCxcbiAgICAgIDE0OCxcbiAgICAgIDQxLFxuICAgICAgODQsXG4gICAgICA3OCxcbiAgICAgIDM0LFxuICAgICAgMTk2LFxuICAgICAgMTc4LFxuICAgICAgNDMsXG4gICAgICAyNSxcbiAgICAgIDUxLFxuICAgICAgNTYsXG4gICAgICAyMzIsXG4gICAgICA2MCxcbiAgICAgIDExMixcbiAgICAgIDIzMSxcbiAgICAgIDE1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0l5enNJNERFS1g3cExnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieHRMcSs4Y1VlWkpCZ2NZQkM2aFU0YzhxcWpHWnZoUVFIR3dVamNHcG9sTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJEREJHdkxidlBDQXpmVFE3R3o3TjR5UWFBVEk3bXp0VVNoUEdjSy9vQ3NCdjFnSFExNGxjYUtXcjE0UEw2Y2JIUTZ2Uml6aFBqTTViR200SDIrK2dBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSVjJCRWhnbWhmZ0JGMHVPcWdJV01yRnoxNmtPUThUQ25QSVc5RFFhOE1oVHlHdHU2MGNPR0xnbHVTZzVMT1pIQkh3MlJmaDFFQWY1andMTWE4NzVndz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcwNDAyNDU0OTo2NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzY4MjEwMzk5MDI5NDM6NjZAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MDQwMjQ1NDk6NjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODY1ODg1NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtvWlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS29aLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSUZ5d3YrQlhiTG5lT01xS1RNZEM0VWhqSmtuUStVa09xMlEzdFRsYVZQOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4MzU0NTk0NjgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyODY1ODg2MTU5OFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "CHRIS-XMD",
  ownername:process.env.OWNER_NAME|| "CHRIS-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
