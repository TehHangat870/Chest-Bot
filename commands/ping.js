const { SlashCommandBuilder } = require('@discordjs/builders');
const {  MessageEmbed, Message  } = require('discord.js')
const { color } = require('./config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with the info of the latency!'),
	async execute(interaction) {
		const serverInfo = new MessageEmbed()
		.setColor(color)
		.setTitle("Pong! 🏓")
		.setDescription("API Latency is "+ Math.round(client.ws.ping) +" ms.")
		await interaction.reply({ embeds: [serverInfo] })
	},
};
