const { SlashCommandBuilder } = require('discord.js')
const wait = require('node:timers/promises').setTimeout

let rollResult = 0

const rollDice = () => {
  const roll = Math.floor(Math.random() * 5) + 1
  rollResult = roll
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('roll')
    .setDescription('Rolls a dice!'),
  async execute(interaction) {
    rollDice()
    await interaction.reply('rolling')
    await wait(2000)
    await interaction.editReply(rollResult.toString())
  }
}
