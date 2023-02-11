import { REST, Routes } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const token = process.env.TOKEN
const clientID = process.env.CLIENT_ID

const commands = [
  {
    name: 'ping',
    description: 'Replies with pong!'
  }
]

const rest = new REST({ version: '10' }).setToken(token)

const test = async () => {
  try {
    console.log('Started refreshing application (/) commands.')

    await rest.put(Routes.applicationCommands(clientID), {
      body: commands
    })

    console.log('Successfully reloaded application (/) commands.')
  } catch (error) {
    console.log(error)
  }
}

test()
