/* eslint-disable consistent-return */
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import model from '../models/index';

exports.signup = async (req, res, next) => {
  const {
    username, email, confirmPassword,
  } = req.body;

  let { password } = req.body;

  if (password !== confirmPassword) {
    return res.status(401).json({ message: "passwords don't match" });
  }

  await model.User.findOne({
    where: {
      email,

    },

  }).then((user) => {
    if (user) {
      return res.status(403).json({
        error: 'email is already taken!',
      });
    }
  });

  bcrypt.hash(password, 10, (err, hash) => {
    password = hash;

    model.User.create({
      username,
      email,
      password,

    }).then((user) => {
      const { id } = user;
      const token = jwt.sign({ id, username }, process.env.secret);
      return res.status(201).json({
        token,

      });
    })

      .catch((error) => next(error));
  });
};
