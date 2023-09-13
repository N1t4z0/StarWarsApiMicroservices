module.exports = {
    success: (res, status, data) => {
        res.status(status).json({ data });
    },
    error: (res, status, message) => {
        res.status(status).json({ error: message });
    }
}