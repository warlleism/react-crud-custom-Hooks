
const Testes = require('../model/table-teste')

const ReadAllData = async (req, res) => {

    try {
        const create = await Testes.findAll()
        return res.send(create);
    } catch (err) {
        res.status(400).send({ error: 'Algo deu errado! ' + err, icon: 'error' });
    }

}

module.exports = ReadAllData;