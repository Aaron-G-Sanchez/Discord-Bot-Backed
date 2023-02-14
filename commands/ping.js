const { SlashCommandBuilder } = require('discord.js')

const reply = 'pong bih'

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with pong!'),
  async execute(interaction) {
    await interaction.reply(reply)
  }
}
