export default (sequelize, DataTypes) => {
  
  const User = sequelize.define('User', {
    username: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
  });

  User.associate = (models) => {
    // associations can be defined here
  };

  return User;
};
