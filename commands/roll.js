const { SlashCommandBuilder } = require('discord.js')
// const wait = require('node:timers/promises').setTimeout

const dice = [1, 2, 3, 4, 5, 6]
let rollResult = 0

const rollDice = () => {
  const roll = Math.floor(Math.random() * dice.length) + 1
  rollResult = roll
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('roll')
    .setDescription('Rolls a dice!'),
  async execute(interaction) {
    rollDice()
    await interaction.reply(rollResult.toString())
    // await wait(1000)
    // await interaction.editReply(rollResult)
  }
}
