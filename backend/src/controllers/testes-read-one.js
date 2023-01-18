
const Testes = require('../model/table-teste')

const ReadOneData = async (req, res) => {

    const { id } = req.body

    try {
        const readOne = await Testes.findOne({ where: { id: id } })
        return res.status(200).send(readOne);
    }catch (err) {
        res.status(400).send({ error: 'Algo deu errado! ' + err, icon: 'error' });
    }
    

}

module.exports = ReadOneData;