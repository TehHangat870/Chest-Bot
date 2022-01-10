const { SlashCommandBuilder, SlashCommandStringOption } = require('@discordjs/builders');
const { MessageActionRow, MessageEmbed, MessageSelectMenu } = require('discord.js');
const { color } = require('./config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Replies with the list of commands!')
		.addStringOption(option =>
			option.setName('commandname')
				.setDescription('The command you want to get more info on (commandname must be lower case)')
				.setRequired(false)),
	async execute(interaction) {
		const commandname = interaction.options.getString("commandname")
        console.log(commandname);
        if (commandname === "calculator"){
            const helpMessage = new MessageEmbed()
            .setTitle("calculator")
		    .setColor(color)
            .addFields(
                { name: 'Description', value: "Replies with the result of your math question!", inline: false },
                { name: 'Usage', value:  "`/calculator <required question>`", inline: false }
            )
            await interaction.reply({embeds : [helpMessage]})
        } else if (commandname === "deletenote"){
            const helpMessage = new MessageEmbed()
            .setTitle("deletenote")
		    .setColor(color)
            .addFields(
                { name: 'Description', value: "Delete the note you made. (if there is any)", inline: false },
                { name: 'Usage', value:  "`/deletenote`", inline: false }
            )
            await interaction.reply({embeds : [helpMessage]})
        } else if (commandname === "echo"){
            const helpMessage = new MessageEmbed()
            .setTitle("echo")
		    .setColor(color)
            .addFields(
                { name: 'Description', value: "Replies with your input!", inline: false },
                { name: 'Usage', value:  "`/echo <required input>`", inline: false }
            )
            await interaction.reply({embeds : [helpMessage]})
        } else if (commandname === "help"){
            const helpMessage = new MessageEmbed()
            .setTitle("help")
		    .setColor(color)
            .addFields(
                { name: 'Description', value: "Replies with the list of commands!", inline: false },
                { name: 'Usage', value:  "`/help <optional commandname>`", inline: false }
            )
            await interaction.reply({embeds : [helpMessage]})
        }  else if (commandname === "note"){
            const helpMessage = new MessageEmbed()
            .setTitle("note")
		    .setColor(color)
            .addFields(
                { name: 'Description', value: "Makes a note that you can access any time the bot is online.", inline: false },
                { name: 'Usage', value:  "`/note <required text>`", inline: false }
            )
            await interaction.reply({embeds : [helpMessage]})
        } else if (commandname === "ping"){
            const helpMessage = new MessageEmbed()
            .setTitle("ping")
		    .setColor(color)
            .addFields(
                { name: 'Description', value: "Replies with Pong!", inline: false },
                { name: 'Usage', value:  "`/ping`", inline: false }
            )
            await interaction.reply({embeds : [helpMessage]})
        } else if (commandname === "randominteger"){
            const helpMessage = new MessageEmbed()
            .setTitle("randominteger")
		    .setColor(color)
            .addFields(
                { name: 'Description', value: "Replies with a value that is no lower than(or equal to) minimal and is less than (not equal to) max.", inline: false },
                { name: 'Usage', value:  "`/randominteger <required minimal> <required maximal>`", inline: false }
            ) 
            await interaction.reply({embeds : [helpMessage]})
        } else if (commandname === "readnote"){
            const helpMessage = new MessageEmbed()
            .setTitle("readnote")
		    .setColor(color)
            .addFields(
                { name: 'Description', value: "Access the note that you made. (if there is any)", inline: false },
                { name: 'Usage', value:  "`/readnote`", inline: false }
            ) 
            await interaction.reply({embeds : [helpMessage]})
        } else if (commandname === "serverinfo"){
            const helpMessage = new MessageEmbed()
            .setTitle("serverinfo")
		    .setColor(color)
            .addFields(
                { name: 'Description', value: "Replies with the info of the current server your in!", inline: false },
                { name: 'Usage', value:  "`/serverinfo`", inline: false }
            ) 
            await interaction.reply({embeds : [helpMessage]})
        } else if (commandname === "userinfo"){
            const helpMessage = new MessageEmbed()
            .setTitle("userinfo")
		    .setColor(color)
            .addFields(
                { name: 'Description', value: "Replies with the userinfo of the target!", inline: false },
                { name: 'Usage', value:  "`/userinfo <required target>`", inline: false }
            ) 
            await interaction.reply({embeds : [helpMessage]})
        } else if (commandname === "report"){
            const helpMessage = new MessageEmbed()
            .setTitle("randominteger")
		    .setColor(color)
            .addFields(
                { name: 'Description', value: "Replies with a where to report problems in the bot!", inline: false },
                { name: 'Usage', value:  "`/report`", inline: false }
            ) 
            await interaction.reply({embeds : [helpMessage]})
        } else {
            const helpMessage = new MessageEmbed()
            .setTitle("Command List")
		    .setColor(color)
	    	.setDescription("Use `/help <commandname>` for more info on a command!")
            .addFields(
                { name: 'Note Commands', value: "`/note <note>`\n`/readnote`\n`/deletenote`", inline: false },
                { name: 'Information Commands', value:  "`/report`\n`/serverinfo`\n`/userinfo <target>`", inline: false },
                { name: 'Fun Commands', value:  "`/echo <input>`\n`/randominteger <minimal> <maximal>`\n`/calculator <question>`", inline: false }
            )
	    	await interaction.reply({embeds : [helpMessage]})
        }
	},
};