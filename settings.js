// Created by Ednut
// Thanks bro for using Arch-Md

require("./all/module.js")

global.owner = "2348131084833" //change
global.botname = "😑"  //change
global.ownername = "😑" //change
global.simbol = "♘"
global.footer = "`😑`" //Don't touch others

global.ytchannel = ""

global.idchannel = "120363297279563825@newsletter"
global.linkgc = ''

global.packname = "Arch Development"
global.author = "WhatsApp Bot"

global.anticall = false

// if you have a image url input//

global.image = "https://tinyurl.com/5f7ajm2e"
global.image2 = 'https://tinyurl.com/5f7ajm2e'

// message settings don't edit ‼️//

global.msg = {
"arch": "𝑾𝒉𝒂𝒕 𝒈𝒐𝒐𝒅 ?️",
"error": "Error !!",
"done": "Success Getting Data ✅", 
"wait": "🕧 Proccess, Please Wait", 
"group": "Group only❗", 
"private": "Feature can only be used in Private Chat❗", 
"admin": "what ? are you an administrator !!", 
"adminbot": "Bot must be admin first❗", 
"owner": "Owner only❗", 
"developer": "command for developer Developer❗"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
