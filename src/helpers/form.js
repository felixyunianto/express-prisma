module.exports = {
    formSuccess: (res, data, status) => {
        res.send({
            msg : 'Success',
            status: status,
            data: data
        })
    },

    formError: (res, error, status) => {
        res.send({
            msg : "Error",
            status: status,
            error: error
        })
    }
}