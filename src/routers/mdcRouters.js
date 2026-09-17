import  { Router } from 'express'
import MaterialServices from '../services/mdcServices.js'

export const materialRouters = Router();

class materialRouters{
    async listarTodos() {
        const resultado = await pool.query(
            'SELECT * FROM material ORDER BY id'
        )

        return resultado.rows
}
}

export const materiralservices = new 