import { query } from "../db.js";

export const getClients = async () => {
    const{rows} = await query('SELECT * FROM clients_tb');
    return rows;
};

export const createClient = async (clientData) => {

    const {name, email, job, rate, isActive} = clientData;

    const{rows} = await query(`
        INSERT INTO clients_tb (name, email, job, rate, isActive)
        VALUES ($1, $2, $3, $4, $5) RETURNING *`,
         [name, email, job, rate, isActive]);

    return rows[0];
};