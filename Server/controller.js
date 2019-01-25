module.exports = {

getInv: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .get_inventory()
      .then(simdata => res.status(200).send(simdata))
      .catch(err => {
        res.status(500).send({
          errorMessage:
            "get inv err"
        });
        console.log(err);
      });
    },
      addProd: (req, res) => {
        const dbInstance = req.app.get("db");
        const { name, price, image_url } = req.body;
        dbInstance.create_product([name, price, image_url]).then(() =>
          res.sendStatus(200).catch(error => {
            res.status(500).send({ errorMessage: "create prod error" });
            console.log(error);
          })
        );
      },
      removeProd: ( req, res ) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
              dbInstance.delete_product([ params.id ])
          .then( () => res.sendStatus(200) )
          .catch( errorMessage => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(errorMessage)
          } );
  }
}