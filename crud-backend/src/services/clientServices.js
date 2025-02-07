import { query } from "../db.js";

export const getClients = async () => {
    const{rows} = await Query('SELECT * FROM clients_tb');
    return rows;
};