const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db/sequelize')

class Word extends Model {}



const attributes = {
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    word: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phonetic: {
        type: DataTypes.STRING,
        allowNull: true
    },
    chinese: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    createTime: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'create_time'
    },
    updateTime: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'update_time'
    }
}

const options = {
    sequelize,
    modelName: 'Word',
    tableName: 'word',
    
    createdAt: 'createTime',
    updatedAt: 'updateTime'
}

Word.init(attributes, options)

module.exports = Word