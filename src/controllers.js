const saveVoteController = (req, res) => {
    const data = req.body; // Asegúrate de que el middleware para JSON
    console.log('Received data:', data);

    if (data.count < 100) {
        res.status(400).send({
            message: 'DATOS ERRONEOS',
            status: 400,
            ok:false
        });
        return
    }

    res.status(200).send({
        message: 'Data received successfully',
        data: data,
        status: 200,
        ok:true
    });
}

module.exports = {
    saveVoteController
};
