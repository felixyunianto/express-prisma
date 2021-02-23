module.exports = {
    formSuccess: (res, data, status) => {
        res.status(status).send({
            msg : 'Success',
            status: status,
            data: data
        })
    },

    formError: (res, error, status) => {
        res.status(status).send({
            msg : "Error",
            status: status,
            error: error
        })
    }
}