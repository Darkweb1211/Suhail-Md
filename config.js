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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID |SUHAIL_13_22_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDMzLFxuICAgICAgICA5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDg3LFxuICAgICAgICA5NixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxLFxuICAgICAgICA4MCxcbiAgICAgICAgMCxcbiAgICAgICAgNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDExMixcbiAgICAgICAgODQsXG4gICAgICAgIDM0LFxuICAgICAgICAxODksXG4gICAgICAgIDc4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUxLFxuICAgICAgICA1LFxuICAgICAgICAzLFxuICAgICAgICAxODUsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTkyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc2LFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA5MixcbiAgICAgICAgMTgsXG4gICAgICAgIDg3LFxuICAgICAgICA3MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjksXG4gICAgICAgIDY1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDkzLFxuICAgICAgICAzNyxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDc0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDgwLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDMyLFxuICAgICAgICA0MixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTkzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTEzLFxuICAgICAgICA2MSxcbiAgICAgICAgODIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDk2LFxuICAgICAgICA2MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDg2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTk1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDc4LFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTczLFxuICAgICAgICA3NixcbiAgICAgICAgMjM1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNixcbiAgICAgICAgNzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM0LFxuICAgICAgICA2NCxcbiAgICAgICAgODMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc5LFxuICAgICAgICA3NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjAwLFxuICAgICAgICA1MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDksXG4gICAgICAgIDczLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDg1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWUo4NDNTWUdwNWwzWWNZd09MMm9mRitXSXBRSXVTUzZDWmlVaXFjUzRsMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0NDc1MTk3NzM1NzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkNCNkQ0RERDNUNFQjQ2QUJBNDZFQjk3NjQxRjFFMTE0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTIyMjUxOVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQ0NzUxOTc3MzU3NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzhCNDJGMkNBNTBGNjVFOEYxOTM0MTc4REU2QzFCQUNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMjIyNTE5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjFLMjFPUEZJUjBtMVlJc09aY1JYYmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjJlZDFlNzItYWYzOS00YzQxLThjOGItODI1MThiZjFhODgyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MSxcbiAgICAgIDE0NCxcbiAgICAgIDE2MSxcbiAgICAgIDIyNCxcbiAgICAgIDkyLFxuICAgICAgMTkzLFxuICAgICAgMjIxLFxuICAgICAgOTMsXG4gICAgICA0NixcbiAgICAgIDEwNSxcbiAgICAgIDIxLFxuICAgICAgNjAsXG4gICAgICAxNDIsXG4gICAgICAxNTQsXG4gICAgICA2OCxcbiAgICAgIDExMCxcbiAgICAgIDE5NSxcbiAgICAgIDE5NyxcbiAgICAgIDY5LFxuICAgICAgMjQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzLFxuICAgICAgMjE0LFxuICAgICAgMTQ5LFxuICAgICAgMTQwLFxuICAgICAgMjI0LFxuICAgICAgMjQsXG4gICAgICAyMCxcbiAgICAgIDE0MixcbiAgICAgIDE3NSxcbiAgICAgIDE5MyxcbiAgICAgIDQ3LFxuICAgICAgMjAzLFxuICAgICAgNDUsXG4gICAgICAyNDMsXG4gICAgICAxMzksXG4gICAgICAyMzIsXG4gICAgICAxMDUsXG4gICAgICAyMTksXG4gICAgICAzLFxuICAgICAgMTc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJCTDZITVMxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI0NDc1MTk3NzM1NzQ6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwMDYwMTQ1NTIzNTI5NToxMUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwn5W4IFNww63EkWVyIE3Do8WIIPCflbhcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKbkYwYjhGRVBHSzM3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImljcGk2T1l0TzFPejRPOTliTWozNjNPRys5MXF6UEl5VTlSTWtya25Cam89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwid1dyMG5Ib0xrcWp1WmtzaDBxb0hTclB5VGFpYXRXaStYWnBrMzIyNXZQN1o1eHFIVDUwNmsvRFIwek9RNFQ0MG4wckpnSFBsaTBuTXZKQVRDUzBFQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVG5hVmNzYVRnMkFrOWhNWHlPblk2TkNYd2pwb1BhNGY5TnN3K1R2MWdJdHhmempxTVVzckhob3JrOFFYZW9uTmovdFQxMHRYU0R1NnJPalRXTUU2aVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNDQ3NTE5NzczNTc0OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTIyMjUxNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUp4Q1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSnhDLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMUE0c3NmZ1B1UWgwUzNQZWRKemEvck9XQ0J1R1dyNTR5elFySjFyVDhzQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDc1NjMzODE3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEyMjI1MTk0NThcIn0iCn0=|  ""  // PUT your SESSION_ID 


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
