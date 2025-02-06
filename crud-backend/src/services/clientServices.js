import { Query } from "../db";

export const getClients = async () => {
    const{rows} = await Query('SELECT * FROM clients_tb');
    return rows;
};