const { SlashCommandBuilder, SlashCommandStringOption } = require('@discordjs/builders');
const {  MessageEmbed  } = require('discord.js')
const { color } = require('./config.json')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('echo')
		.setDescription('Replies with your input!')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('The input to echo back')
				.setRequired(true)),
	async execute(interaction) {
		const input = interaction.options.getString("input")
		const echoMessage = new MessageEmbed()
		.setColor(color)
		.setDescription(input)
		await interaction.reply({embeds : [echoMessage]})
	},
};