const conn = require('./conn');
const { STRING, UUID, UUIDV4, DECIMAL } = conn.Sequelize;

const Product = conn.define('product', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  author: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  title: {
    type: STRING,
    allowNull: false,
    Validate: {
      notEmpty: true
    },
    description: {
      type: TEXT,
      allowNull: false,
      Validate: {
        notEmpty: true
      }
    },
    price: {
      type: DECIMAL,
      allowNull: false,
      Validate: {
        notEmpty: true
      }
    }
  }
});

module.exports = Product;
