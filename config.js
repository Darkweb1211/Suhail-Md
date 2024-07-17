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


global.SESSION_ID = process.env.SESSION_ID |SUHAIL_18_05_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA0OSxcbiAgICAgICAgNixcbiAgICAgICAgNTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDUxLFxuICAgICAgICA3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDgxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTI1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTc2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzksXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI3LFxuICAgICAgICA2NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTU1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTgyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTg5LFxuICAgICAgICA3NixcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDQ4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDcyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTEzLFxuICAgICAgICA4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDAsXG4gICAgICAgIDExMixcbiAgICAgICAgNzEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDMzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDg1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzksXG4gICAgICAgIDcwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDQsXG4gICAgICAgIDExLFxuICAgICAgICAxNixcbiAgICAgICAgMjEwLFxuICAgICAgICA5NCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2LFxuICAgICAgICAxODEsXG4gICAgICAgIDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzUsXG4gICAgICAgIDMwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDQyLFxuICAgICAgICA4NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM3LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjEwLFxuICAgICAgICA4MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzAsXG4gICAgICAgIDEzLFxuICAgICAgICA2MixcbiAgICAgICAgMjI0LFxuICAgICAgICA3MixcbiAgICAgICAgODQsXG4gICAgICAgIDE3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzcsXG4gICAgICAgIDczLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQzLFxuICAgICAgICA1OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODksXG4gICAgICAgIDIwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAyLFxuICAgICAgICA1NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyLFxuICAgICAgICA2OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJxK3dlbTdWazRZT002M2NoRXIwV0FwMEFYMWhwajBJVGthOGlXeXZJeThzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQ0NzUxOTc3MzU3NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDRFN0MyODdDRkRDNzFGQURBQjVBQTRENzZGQjFENzFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMjM5NTQ4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk1FQ1RDcjJ1UWNxMVNabklaWEZRNHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjJmM2I0MDctNDhhOC00NTE0LWFjZWUtYmEwNjdiYThjNjFlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OSxcbiAgICAgIDEyLFxuICAgICAgMTc4LFxuICAgICAgMTU4LFxuICAgICAgODYsXG4gICAgICAyMDQsXG4gICAgICAyMjIsXG4gICAgICA2OSxcbiAgICAgIDY5LFxuICAgICAgMTEwLFxuICAgICAgNSxcbiAgICAgIDI0NSxcbiAgICAgIDI0NCxcbiAgICAgIDE5NyxcbiAgICAgIDE4NSxcbiAgICAgIDIxMSxcbiAgICAgIDEzNixcbiAgICAgIDQ1LFxuICAgICAgMjM1LFxuICAgICAgMTIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNyxcbiAgICAgIDQ2LFxuICAgICAgMTkxLFxuICAgICAgMTQyLFxuICAgICAgMTU2LFxuICAgICAgNjIsXG4gICAgICA4NSxcbiAgICAgIDIxNixcbiAgICAgIDIyOCxcbiAgICAgIDEwMyxcbiAgICAgIDU0LFxuICAgICAgMTM0LFxuICAgICAgMjU1LFxuICAgICAgODYsXG4gICAgICAzOSxcbiAgICAgIDIxOSxcbiAgICAgIDY3LFxuICAgICAgMjExLFxuICAgICAgMTkyLFxuICAgICAgNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNVkzTTU0TTVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjQ0NzUxOTc3MzU3NDoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTAwNjAxNDU1MjM1Mjk1OjE4QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCflbggU3DDrcSRZXIgTcOjxYgg8J+VuFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tERjBiOEZFUFdQNExRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaWNwaTZPWXRPMU96NE85OWJNajM2M09HKzkxcXpQSXlVOVJNa3JrbkJqbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJYWStkMzF1cEY2WG1Ocms3a0l6MHI1RWRETmdwaE5VUWEwTVFTVFllY09obnk3QkhROHZJWDRkTGRJN3dEOE93b2c4YmhoeEhhZVFwSVVBMEl6UlFBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIycUNsN24yYk81SHZmNmxRYjBVbmpITFZ3MGtRT1VPQ04wdG1uQklZYSt1OW9DYlBrYW9GaWpobi9BVUgyY3UrY3pIcGxaWTU4Vk1MR3o2RlFiZUNodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI0NDc1MTk3NzM1NzQ6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNixcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMjM5NTQ1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRWFYXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFYVguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJEUFR3MjhwZXhSVkpUejBWNUZqbWlwM0V6RnVGaWpITTBGV3BqeHZCZFlNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NzU2MzM4MjQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTIzOTU0OTAyNFwifSIKfQ==|  ""  // PUT your SESSION_ID 


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
