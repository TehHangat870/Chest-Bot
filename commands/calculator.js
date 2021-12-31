const { SlashCommandBuilder } = require('@discordjs/builders');
const {  MessageEmbed  } = require('discord.js')
const color = process.env.COLOR

module.exports = {
	data: new SlashCommandBuilder()
		.setName('calculator')
		.setDescription('Replies with the result of your math question!')
		.addStringOption(option =>
			option.setName('question')
				.setDescription('The math question you are asking the bot')
				.setRequired(true)),
	async execute(interaction) {
		const question = interaction.options.getString("question")
		const answer = new MessageEmbed()
		.setColor(color)
		.setTitle("Calculator")
		.addFields(
			{ name: 'Question', value: String(question), inline: false },
			{ name: 'Answer', value: String(eval(question)), inline: false}
		)
		await interaction.reply({ embeds: [answer] })
	},
};