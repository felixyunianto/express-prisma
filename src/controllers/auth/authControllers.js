const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const form = require("../../helpers/form");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const checkEmail = (dataCheck) => {
  return prisma.users
    .findFirst({
      where: {
        OR: [
          {
            email: {
              contains: dataCheck[0],
            },
          },
          {
            username: {
              contains: dataCheck[1],
            },
          },
        ],
      },
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return false;
    });
};

module.exports = {
  signUp: (req, res) => {
    const { body } = req;
    const emailUsername = [req.body.email, req.body.username];
    if (req.body.password !== req.body.confirm_password) {
      form.formError(res, "Password is not same", 403);
    } else {
      checkEmail(emailUsername).then((data) => {
        if (!data) {
          const saltRounds = Math.floor(Math.random() * 10) + 1;
          bcrypt.hash(body.password, saltRounds, (err, hashPassword) => {
            delete body.confirm_password;
            const newBody = {
              ...body,
              password: hashPassword,
            };

            prisma.users
              .create({
                data: newBody,
              })
              .then((data) => {
                form.formSuccess(res, data, 200);
              })
              .catch((error) => {
                form.formError(res, error, 500);
              });
          });
        } else {
          form.formError(res, "Username or Email is already used", 403);
        }
      });
    }
  },

  signIn: (req, res) => {
    const { body } = req;
    const emailUsername = [body.email, body.username];
    checkEmail(emailUsername)
      .then((data) => {
        if (!data) {
            form.formError(res, "Users are not available on our records", 404);
        } else {
          const isValid = bcrypt.compareSync(body.password, data.password);
          if (!isValid) {
            form.formError(res, "Password is word", 401);
          } else {
            const payload = {
              id: data.id,
              name: data.name,
              username: data.username,
              email: data.email,
            };

            const token = jwt.sign(payload, process.env.SECRET_KEY, {
              expiresIn: 86400,
            });

            delete data.password;

            const newData = {
              ...data,
              token: token,
            };

            form.formSuccess(res, newData, 200);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
