
const Testes = require('../model/table-teste')

const UpdateData = async (req, res) => {

    const { id, name } = req.body

    try {
        const update = await Testes.update({ name }, {
            where: {
                id: id
            }
        })
        return res.status(200).send({ status: 200, sucess: 'Sucess' });
    } catch (err) {
        res.status(400).send({ error: 'Algo deu errado! ' + err, icon: 'error' });
    }

}

module.exports = UpdateData;