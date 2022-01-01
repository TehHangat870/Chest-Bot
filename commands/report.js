const { SlashCommandBuilder, SlashCommandStringOption } = require('@discordjs/builders');
const {  MessageEmbed  } = require('discord.js')
const { color } = require('./config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('report')
		.setDescription('Replies with where to report problems in the bot!'),
	async execute(interaction) {
		const report = new MessageEmbed()
		.setColor(color)
		.setTitle("Report")
		.setDescription("Please Gmail **problemneo@gmail.com** to report bugs or problems in the bot.")
		await interaction.reply({embeds : [report]})
	},
};