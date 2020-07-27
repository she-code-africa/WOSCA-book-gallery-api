/* eslint-disable consistent-return */
exports.signupValidator = (req, res, next) => {
  req.check('username', 'name is required').notEmpty();
  req.check('password', 'password cannot be empty').notEmpty();
  req
    .check('email', 'email must be between 3 to 32 characters')
    .matches(/.+@.+\..+/)
    .withMessage('Emailmust contain @')
    .isLength({
      min: 3,
      max: 32,
    });
  req
    .check('password')
    .isLength({
      min: 8,
    })
    .withMessage('password must contain 8 characters')
    .matches(/\d/)
    .withMessage('password must contain a number');
  const errors = req.validationErrors();
  // show errors as they appear
  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({
      error: firstError,
    });
  }
  next();
};
