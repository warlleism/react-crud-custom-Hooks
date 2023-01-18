
const Testes = require('../model/table-teste')

const CreateNewData = async (req, res) => {

    const { name } = req.body

    if (!name) {
        return res.status(400).send({ error: 'name dont exists' });
    }

    try {
        const create = await Testes.create({ name })
        return res.status(200).send({ status: 200, sucess: 'Sucess' });
    } catch (err) {
        res.status(400).send({ error: 'Algo deu errado! ' + err, icon: 'error' });
    }

}

module.exports = CreateNewData;