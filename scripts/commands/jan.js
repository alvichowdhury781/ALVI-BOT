const axios = require("axios");

module.exports.config = {
    name: "Jan",
    version: "1",
    permission: 0,
	premium: false,
    prefix: true,
    credits: "ALVI",
    description: "Simsimi",
    usages: "Message",
    category: "...",
    cooldowns: 0
};

module.exports.run = async ({ api, event, args }) => {
    try {
        let message = args.join(" ");
        if (!message) {
            return api.sendMessage(`Hey ,I am mesenger bot  😎 \n\n আমাকে ব্যাবহার করতে [Jan]লিখে কিছু জিগ্গেস করুন 🤗 \n\n [𝐎𝐖𝐍𝐄𝐑:☞𝐌𝐑.𝐁𝐎𝐒𝐒 𝐀𝐋𝐕𝐈 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘☜ 😼`, event.threadID, event.messageID);
        }

        const response = await axios.get(`https://x2-api.onrender.com/sim?type=ask&ask=${message}`);
        const respond = response.data.answer;
        api.sendMessage(respond, event.threadID, event.messageID);
    } catch (error) {
        console.error("An error occurred:", error);
        api.sendMessage("Oops! Something went wrong.", event.threadID, event.messageID);
    }
};
