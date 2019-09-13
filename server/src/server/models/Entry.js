const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  const Entry = sequelize.define('Entry', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    contestId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        key: 'id',
        model: 'Contest',
      },
    },
    media: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue:null,
    },
    prospectiveText: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue:null,
    },
  });
  Entry.associate = function (models) {
    Entry.belongsTo(models.Contest, {foreignKey: 'contestId',targetKey: 'id',})
  };
  return Entry;
};
