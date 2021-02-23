const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const form = require("../helpers/form");

module.exports = {
  getProducts: (req, res) => {
    const { body } = req;
    prisma.products
      .findMany()
      .then((data) => {
        form.formSuccess(res, data, 200);
      })
      .catch((error) => {
        form.formError(res, error, 500);
      });
  },

  postProduct: (req, res) => {
    const { body } = req;
    const categoryId = parseInt(body.categoryId)
    prisma.products
      .create({
        data: {
          ...body,
          categoryId : categoryId
        },
      })
      .then((data) => {
        form.formSuccess(res, data, 200);
      })
      .catch((error) => {
        form.formError(res, error, 500);
      });
  },

  updateProduct: (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const categoryId = parseInt(body.categoryId)

    prisma.products
      .update({
        data: {
          ...body,
          categoryId: parseInt(categoryId)
        },
        where: {
          id: parseInt(id),
        },
      })
      .then((data) => {
        form.formSuccess(res, data, 200);
      })
      .catch((error) => {
        form.formError(res, error, 500);
      });
  },

  deleteProduct: (req, res) => {
    const { id } = req.params;
    prisma.products
      .delete({
        where: {
          id: parseInt(id),
        },
      })
      .then((data) => {
        form.formSuccess(res, data, 200);
      })
      .catch((error) => {
        form.formError(res, error, 500);
      });
  },
};
