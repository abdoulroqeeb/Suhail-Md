const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349034527131";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_39_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTcwLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDMsXG4gICAgICAgIDM5LFxuICAgICAgICAzNixcbiAgICAgICAgMjQ5LFxuICAgICAgICA4NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDc5LFxuICAgICAgICAyOCxcbiAgICAgICAgODMsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY0LFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIwLFxuICAgICAgICA2NixcbiAgICAgICAgMTAxLFxuICAgICAgICA3OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAwLFxuICAgICAgICA5NyxcbiAgICAgICAgMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTY2LFxuICAgICAgICA2NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUwLFxuICAgICAgICA1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDM2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjA2LFxuICAgICAgICA2MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDc1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNixcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTEzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDMzLFxuICAgICAgICA3NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDg3LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTE4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzksXG4gICAgICAgIDk5LFxuICAgICAgICAxNzksXG4gICAgICAgIDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDg3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTksXG4gICAgICAgIDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQzLFxuICAgICAgICA3OSxcbiAgICAgICAgNixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTksXG4gICAgICAgIDY4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDksXG4gICAgICAgIDg2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQwLFxuICAgICAgICA1MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJBZDNHVmdLek9DZi9VMnNTVHZUWkpEdHI3Z2pNcjJlbG1xbDBKL1dSSzg0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJCbThuUDZzWlRKLU4zTXNUYVpZWkFRXCIsXG4gIFwicGhvbmVJZFwiOiBcImJkMjA5NzBlLTY1ZTktNDllYi05YjJmLWYyOWFkY2RmYTQ1N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NyxcbiAgICAgIDEyLFxuICAgICAgMTMyLFxuICAgICAgMTczLFxuICAgICAgODMsXG4gICAgICAxNTksXG4gICAgICAxNDgsXG4gICAgICAxMDcsXG4gICAgICAxNzIsXG4gICAgICAyMTksXG4gICAgICAxMTIsXG4gICAgICAzMCxcbiAgICAgIDIzMCxcbiAgICAgIDE3NixcbiAgICAgIDE2LFxuICAgICAgMjAzLFxuICAgICAgMTQ5LFxuICAgICAgODcsXG4gICAgICAyNTEsXG4gICAgICAxNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkzLFxuICAgICAgMTU0LFxuICAgICAgMjIsXG4gICAgICA0OSxcbiAgICAgIDEzOSxcbiAgICAgIDE1MixcbiAgICAgIDQyLFxuICAgICAgMjUsXG4gICAgICAxODQsXG4gICAgICAyNTIsXG4gICAgICAyMTUsXG4gICAgICAxMDEsXG4gICAgICA1MSxcbiAgICAgIDIxMixcbiAgICAgIDI0NyxcbiAgICAgIDU5LFxuICAgICAgNDAsXG4gICAgICAyMjcsXG4gICAgICA2NixcbiAgICAgIDQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkFGN1dWWjk3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDM0NTI3MTMxOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3NjEzMjUxNTIxNzQ2NzozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lDeW1LVUhFSTNpZ2JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWGkxdlA1OFBUazdsNE1HN3ZZeDlMQllsQkNGTk5QVGU2bjJ1bEdlZ2RSRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJyQ1hTbSsycHl2YU9nR1plODFTRW5ScmROb3MyV1dMNmpJMngzdmRmVWcxcjRrRDNwZEE4NkJ6cnpOeEsrL1BCNDNCbmxSYXQvN3BCYkEzL1NTWUNEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIrZEk4WmhoWUZuYjZFUXdhYVR1WnNDc042L1BIM1RQMTJyb3VsQUZraHYrRzFWNjRhMmpBbzRTWEsvNnIzWUpFRWY4QXdIT3pmdjdWSXZhQlFCQndCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDM0NTI3MTMxOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk2OTM1ODRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
