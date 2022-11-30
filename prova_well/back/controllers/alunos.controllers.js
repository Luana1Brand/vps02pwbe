const alunos = require('../models/alunos.models');
const con = require('../dao/dao');

const create = (req, res) => {
    con.query(alunos.toCreate(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}


const readAll = (req, res) => {
    con.query(alunos.toReadAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const del = (req, res) => {
    con.query(alunos.toDelete(req.body), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).json(err).end();
    });
}


module.exports = {
    create,
    readAll,
    del

}