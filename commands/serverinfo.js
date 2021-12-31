const { SlashCommandBuilder } = require('@discordjs/builders');
const {  MessageEmbed  } = require('discord.js')
const color = process.env.COLOR

module.exports = {
	data: new SlashCommandBuilder()
		.setName('serverinfo')
		.setDescription('Replies with the info of the current server your in!'),
	async execute(interaction) {
		const serverInfo = new MessageEmbed()
		.setColor(color)
		.setTitle("Server Info")
		.addFields(
			{ name: 'Server Name', value: String(interaction.guild.name), inline: true },
			{ name: 'Server Members', value:  String(interaction.guild.memberCount), inline: true },
			{ name: 'Server ID', value:  String(interaction.guild.id), inline: true },
			{ name: 'Server Verification Level', value:  String(interaction.guild.verificationLevel), inline: true },
			{ name: 'Server Created At', value:  String(interaction.guild.createdAt)},
		)
		await interaction.reply({ embeds: [serverInfo] })
	},
};