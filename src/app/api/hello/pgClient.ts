import { Client } from "pg";

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    password: 'ljm158220',
    port: 5432,
    database: 'Learn'
})
client.connect()

export default client;