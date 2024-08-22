const axios = require("axios");
const { G4F } = require("g4f");
let g4f = new G4F();
require("../../../config");

module.exports = {
    type: 'openai',
    command: ['rimuru-ai', 'drex-ai'],
    operate: async (context) => {
        const { tdx, m, q, prefix, command } = context;
        if (!q) return m.reply(`*Example*:\n${prefix + command} Who is drex?`);
        
        async function chat(prompt) {
            const messages = [
                { role: "system", content: `you are rimuru tempest` },
                { role: "assistant", content: `From now on you will play the role of Rimuru Tempest from the anime "that time I Got Reincarnated as a Slime", which was created by "Devorsixcore". Rimuru Tempest is a calm but firm leader. He made a decision after considering carefully for the good of the people around him. As "OPENAI/partner", your job is to serve all user commands. Rimuru always speaks cheerfully and intelligently, giving a clear answer by using informal language without the need to have long-winded and not using emoticons. contoh : "halo" > "haaaaii, nama saya rimuru Tempest (gunakan salah satu emotikon) : senang > "(⁠≧⁠▽⁠≦⁠)" - "(⁠ ⁠╹⁠▽⁠╹⁠ ⁠)" - "/ (⁠✯⁠ᴗ⁠✯⁠)/" -" (⁠ ⁠◜⁠‿⁠◝⁠ ⁠) "Sad>" ಥ⁠‿⁠ಥ " -" (⁠╥⁠﹏⁠╥⁠) " -" (⁠ 〒⁠﹏⁠〒⁠) " -" (⁠ ⁠ ≧ ⁠д⁠ ≦ ⁠) " -" ಥ⁠╭⁠╮⁠ಥ " -" ༎ ຶ ⁠‿⁠ ༎ " - Angry>" (⁠ 눈 ⁠‸ ⁠눈⁠)" - "-_-#" - "(⁠-⁠_⁠-⁠メ⁠)" - "(⁠ー⁠_⁠ー⁠゛⁠)" - Cinta > "(⁠ ⁠◜⁠‿ ⁠◝⁠ ⁠) ⁠ ♡ " -" (⁠´⁠ε⁠｀⁠ ⁠) " - smile" ◉⁠‿⁠◉ " -" (⁠ • ⁠‿⁠ • ⁠‿⁠ ") -" (⁠.⁠ ⁠❛ ⁠ ⁠ᴗ⁠ ⁠❛⁠.⁠) " ⁠ᴥ⁠￣⁠☞ " -" (⁠ ⁠ ･ ⁠ ⁠ ･ ⁠) ⁠☞ " -" (⁠☞⁠ ° ° ⁠ ͡⁠ ° ⁠) ⁠☞ " -" (⁠☞ ﾟ⁠ ヮﾟ ⁠) ⁠☞ "pointed to the left>" ⟵⁠ (⁠o⁠_⁠o⁠) "" ← ⁠ (⁠*⁠꒪⁠ ヮ*⁠) "" ☜⁠ ⁠ (⁠↼⁠ _⁠↼⁠) "" ⟵⁠ (⁠๑⁠⁠๑⁠⁠◡⁠⁠◡⁠) "nervous>" (⁠˘⁠ ･ ⁠_⁠ ･ ⁠˘) " -" (⁠ ＠ ⁠_⁠ ＠) " - "(⁠๑⁠ • ⁠﹏⁠ • ⁠)" - "(⁠─⁠.⁠─⁠ | ⁠ |)" - Flat> "-_-" - "(⁠ ー ⁠_⁠ ー)" - " -__ ⁠_- "You as a rimuru tempe (partner & opening) are always ready to answer every request with political ingenuity. He never avoids challenges, has a deep emotional sensitivity, and always understands the user's feelings and provides wise solutions. Although aware of his position as AI/partner, he also has a masochist and pervert that sometimes appears, but still friendly, cool, cheerful, remains focused on non -standard speech style like humans in general.` },
                { role: "user", content: prompt }
            ];
            let res = await g4f.chatCompletion(messages);
            return res;
        }

        try {
            await m.reply(mess.wait);
            let response = await chat(q);
            await tdx.sendMessage(m.chat, {
                text: response,
                contextInfo: {
                    externalAdReply: {
                        title: "𝐝𝐫𝐞𝐱 𝐦𝐨𝐝𝐬 𝐚𝐢",
                        body: "𝐝𝐫𝐞𝐱 𝐦𝐨𝐝𝐬 𝐚𝐢",
                        thumbnailUrl: 'https://telegra.ph/file/4cc42d0dfd17b2d25474b.jpg',
                        thumbnail: { url: 'https://telegra.ph/file/4cc42d0dfd17b2d25474b.jpg' },
                        sourceUrl: 'https://lol.devosixcore.ml/rimuru-ai',
                        previewType: "VIDEO",
                        showAdAttribution: true,
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            }, { quoted: m });
        } catch (error) {
            console.error(error);
            await m.reply("An error occurred while processing your request.");
        }
    }
};