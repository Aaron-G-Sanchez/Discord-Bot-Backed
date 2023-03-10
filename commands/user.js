const { SlashCommandBuilder } = require('discord.js')
const axios = require('axios')

const getUsers = async () => {
  const users = await axios.get('http://localhost:3001/users')
  // console.log(users.data.users)
  return users.data.users
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('users')
    .setDescription('Returns all TK offenders'),
  async execute(interaction) {
    let response = await getUsers()
    console.log(response)
    await interaction.reply(response[0].name)
  }
}
