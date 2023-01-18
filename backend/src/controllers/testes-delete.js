
const Testes = require('../model/table-teste')

const deleteData = async (req, res) => {

    const { id } = req.body

    try {
        const deletar = await Testes.destroy({ where: { id: id } })
        return res.status(200).send({ status: 200, sucess: 'Sucess' });
    } catch (err) {
        res.status(400).send({ error: 'Algo deu errado! ' + err, icon: 'error' });
    }

}

module.exports = deleteData;