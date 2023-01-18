const { Model, DataTypes } = require('sequelize')

class Testes extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING
        }, {
            sequelize
        })
    }
}

module.exports = Testes;