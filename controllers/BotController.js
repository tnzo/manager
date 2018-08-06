'use strict';

exports.processRequest = function(req, res) {
    //if (req.body.result.action == "localizacaoPedido") {
      getLocalizacaoPedido(req,res)
    //} else if (req.body.result.action == "tell.about") {
    //    getTeamInfo(req,res)
    //}
};

function getLocalizacaoPedido(req,res) {
  
  //return res.json({
  //      speech: 'Seu pedido está em trânsito',
  //      displayText: 'Seu pedido está em trânsito',
  //      source: 'localizacaoPedido' });

  return res.json({"fulfillmentMessages": [
      {
        "text": {
          "text": [
            "Seu pedido está em trânsito"
          ]
        }
      }
    ]
  });

}