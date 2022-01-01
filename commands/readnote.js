const { SlashCommandBuilder, SlashCommandStringOption } = require('@discordjs/builders');
const {  MessageEmbed  } = require('discord.js')
const { color } = require('./config.json');
var fs = require('fs');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('readnote')
		.setDescription('Access the note you made.'),
	async execute(interaction) {
        const userId = String(interaction.user.id)
        fs.readFile(userId + '.txt', function(err, data) {
			if (err) throw err;
			const theNote = (data.toString('utf8'))
    
			const noteAccess = new MessageEmbed()
			.setColor(color)
			.setTitle("Note")
			.setDescription(String(theNote))
			interaction.reply({embeds : [noteAccess]})
		});
    
	},
};