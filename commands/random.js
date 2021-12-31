const { SlashCommandBuilder, SlashCommandStringOption } = require('@discordjs/builders');
const {  MessageEmbed  } = require('discord.js')
const { color } = required('/config.json')


module.exports = {
	data: new SlashCommandBuilder()
		.setName('randominteger')
		.setDescription('Replies with a value that is no lower than(or equal to) minimal and is less than (not equal to) max')
		.addIntegerOption(option =>
			option.setName('minimal')
				.setDescription('The minimal integer for the random integer')
				.setRequired(true))
		.addIntegerOption(option =>
			option.setName('maximal')
				.setDescription('The maximal integer for the random integer')
				.setRequired(true)),
	async execute(interaction) {
		var minimal = interaction.options.getInteger("minimal")
		var maximal = interaction.options.getInteger("maximal")
		minimal = Math.ceil(minimal)
		maximal = Math.floor(maximal)
		const randomNumber = Math.floor(Math.random() * (maximal - minimal) + minimal);

		const random = new MessageEmbed()
		.setColor(color)
		.setTitle("Random Number")
		.setDescription(String(randomNumber))
		.setFooter(String(minimal) + " - " + String(maximal))
		await interaction.reply({embeds : [random]})
	},
};