const { SlashCommandBuilder } = require('@discordjs/builders');
const {  MessageEmbed  } = require('discord.js')
const { color } = require('./config.json')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('userinfo')
		.setDescription('Replies with your user info!'),
	async execute(interaction) {
		const userInfo = new MessageEmbed()
		.setColor(color)
		.setTitle("User Info")
		.addFields(
			{ name: 'Username', value: String(interaction.user.username), inline: true },
			{ name: 'User ID', value:  String(interaction.user.id), inline: true },
			{ name: 'User Tag', value:  String(interaction.user.tag), inline: true },
			{ name: 'User Created At', value:  String(interaction.user.createdAt)},
			{ name: 'User Avatar URL', value:  "https://cdn.discordapp.com/avatars/"+interaction.user.id+"/"+interaction.user.avatar+".jpeg"},
		)
		await interaction.reply({ embeds: [userInfo] })
	},
};