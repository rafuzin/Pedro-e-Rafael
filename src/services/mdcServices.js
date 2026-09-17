import { pool } from '../database/db.js'

class MaterialServices {
    async listarMateriais() {
        const res = await pool.query('SELECT * FROM material');
        return res.rows;
    }
    async buscarMateriaisPorId(id) {
    const res = await pool.query('SELECT * FROM material WHERE id = ?', [id]);
        return res.rows[0];
    }
    async criarMaterial(material) {
        const { nome, tipo, disponibilidade, preco_kg } = material;
        const res = await pool.query(
            'INSERT INTO material (nome, tipo, disponibilidade, preco_kg) VALUES ($1, $2, $3, $4) RETURNING *',
            [nome, tipo, disponibilidade, preco_kg]
        );
        return res.rows[0];
    }
    async indisponivel(id_material, disponibilidade) {
        const res = await pool.query(
            'UPDATE material SET disponibilidade = "indisponivél" WHERE id = ? RETURNING *',
            [disponibilidade, id_material]
        );
        return res.rows[0];
    } 
    async disponivel(id_material, disponibilidade) {
        const res = await pool.query(
            'UPDATE material SET disponibilidade = "disponivél" WHERE id = ? RETURNING *',
            [disponibilidade, id_material]
        );
        return res.rows[0];
    } 

}

export const materialServices = new MaterialServices();