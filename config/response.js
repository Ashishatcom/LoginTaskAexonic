const response = (res, statusCode, code, data, message) => {
    return res.status(statusCode).json({
        code: code,
        data: data,
        message: message
    });
}
module.exports =response