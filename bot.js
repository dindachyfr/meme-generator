import { Client } from 'discord.js';
const client = new Client();
import fetch from "node-fetch";
import { config } from "dotenv";

config();

client.login(process.env.DISCORD_BOT_TOKEN);

client.on("ready" , () => {
    console.log(`Logged in as ${client.user.tag} !`);
});

client.on("message", async(msg) => {

    if(msg.content === "!roast"){

        const url = `https://tenor.googleapis.com/v2/search?q=nerd&key=${process.env.TENOR_KEY}&random=true&client_key=nerdo_bot`;

        const response = await fetch(url);
        const result = await response.json();
        const index = Math.floor(Math.random() * result.results.length);
        msg.channel.send(result.results[index].media_formats.tinygif.url);
        msg.delete();

    }
});