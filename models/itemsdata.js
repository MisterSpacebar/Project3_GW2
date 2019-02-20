/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('itemsdata', {
      data_id: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      restriction_level: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      img: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      price_last_changed: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      previous_unit_price: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      current_unit_price: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      min_sale_unit_price: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      offer_availability: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      sale_availability: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      sale_price_change_last_hour: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      offer_price_change_last_hour: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      net_change: {
        type: DataTypes.DECIMAL,
        allowNull: true
      }
    }, {
      tableName: 'itemsdata'
    });
  };
  