const { SlashCommandBuilder, SlashCommandStringOption } = require('@discordjs/builders');
const {  MessageEmbed  } = require('discord.js')
const { color } = require('./config.json');
var fs = require('fs');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('deletenote')
		.setDescription('Delete the note you made. (if there is any)'),
	async execute(interaction) {
        const userId = String(interaction.user.id)
        fs.unlink(userId + '.txt', function(err, data) {
			if (err) { 
				interaction.reply({content : "You don't have any note you can delete. If you think you have a note, try reporting by doing */report*.", ephemeral: true});			
		    } else {    
				const noteDelete = new MessageEmbed()
				.setColor(color)
				.setTitle("Delete Note")
				.setDescription("The note is succesfully deleted.")
				interaction.reply({embeds : [noteDelete]})
			};
		});
    
	},
};