const { SlashCommandBuilder } = require('@discordjs/builders');
const {  MessageEmbed  } = require('discord.js')
const { color } = required('/config.json')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with the info of the latency!'),
	async execute(interaction) {
		const serverInfo = new MessageEmbed()
		.setColor(color)
		.setTitle("Pong! 🏓")
		.setDescription("Latency is " + Date.now() - message.createdTimestamp + " ms.\n API Latency is "+ Math.round(client.ws.ping) +" ms.")
		await interaction.reply({ embeds: [serverInfo] })
	},
};
