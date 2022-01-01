// Required Classes
const { Client, Intents, MessageEmbed, Collection} = require('discord.js')
const { token } = require('./config.json')
const fs = require('fs');


// Creating a new client
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })
client.commands = new Collection();

// Collection
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}


// Telling if client is ready
client.once("ready", () => {
	console.log("Client has logged to Discord!");
});


// Error
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content : "An error accured, please try again or contact the developers by using */report*.", ephemeral : true });
	}
});

// Login with bot token
client.login(token);
