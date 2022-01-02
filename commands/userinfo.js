const { SlashCommandBuilder } = require('@discordjs/builders');
const {  MessageEmbed  } = require('discord.js')
const { color } = require('./config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('userinfo')
		.setDescription('Replies with the user info of the target!')
		.addUserOption(option =>
			option.setName('target')
				.setDescription('The user you want to get the info of.')
				.setRequired(true)),
	async execute(interaction) {
		const target = interaction.options.getUser('target');

		const userInfo = new MessageEmbed()
		.setColor(color)
		.setTitle("User Info")
		.addFields(
			{ name: 'Username', value: String(target.user.username), inline: true },
			{ name: 'User ID', value:  String(target.user.id), inline: true },
			{ name: 'User Tag', value:  String(target.user.tag), inline: true },
			{ name: 'User Created At', value:  String(target.user.createdAt)},
			{ name: 'User Avatar URL', value:  "https://cdn.discordapp.com/avatars/"+target.user.id+"/"+target.user.avatar+".jpeg"},
		)
		await interaction.reply({ embeds: [userInfo] })
	},
};