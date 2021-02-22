const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const form = require("../helpers/form");

module.exports = {
  getCategories: (req, res) => {
    prisma.categories
      .findMany({
        include: {
          products: true,
        },
      })
      .then((data) => {
        form.formSuccess(res, data, 200);
      })
      .catch((error) => {
        form.formError(res, error, 500);
      });
  },

  postCategory: (req, res) => {
    const { body } = req;
    prisma.categories
      .create({
        data: body,
      })
      .then((data) => {
        form.formSuccess(res, data, 200);
      })
      .catch((error) => {
        form.formError(res, error, 500);
      });
  },

  updateCategory: (req, res) => {
    const { id } = req.params;
    const { body } = req;
    prisma.categories
      .update({
        data: body,
        where : {
          id: parseInt(id)
        }
      })
      .then((data) => {
        form.formSuccess(res, data, 200);
      })
      .catch((error) => {
        form.formError(res, error, 500);
      });
  },

  deleteCategory: (req, res) => {
    const { id } = req.params;
    prisma.categories.delete({
      where: {
        id : parseInt(id)
      }
    })
    .then((data) => {
      form.formSuccess(res, data, 200);
    })
    .catch((error) => {
      form.formError(res, error, 500);
    })
  }
};
