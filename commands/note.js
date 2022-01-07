const { SlashCommandBuilder, SlashCommandStringOption } = require('@discordjs/builders');
const {  MessageEmbed  } = require('discord.js')
const { color } = require('./config.json');
var fs = require('fs');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('note')
		.setDescription('Makes a note that you can access any time the bot is online.')
		.addStringOption(option =>
			option.setName('text')
				.setDescription('The text you want to note!')
				.setRequired(true)),
	async execute(interaction) {
		const text = interaction.options.getString("text")
        const userId = String(interaction.user.id)
        fs.writeFile(userId + '.txt', text, function(err) {     
            if (err) throw err;
            const noteConfirm = new MessageEmbed()
            .setColor(color)
            .setTitle("Text Noted!")
            .setDescription("The text you inputted has been noted. You can access and delete this note anytime.")
            interaction.reply({embeds : [noteConfirm]})
    });

	},
};