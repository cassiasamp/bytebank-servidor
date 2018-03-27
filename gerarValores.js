const linhas = [
    {"c": [
    { "v": "João Antônio Marques", "f": null},
    { "v": 25110, "f": null},
    { "v": "R$25.110", "f": null}
    ]
    },

    {"c": [
        { "v": "Ana Siqueira", "f": null},
        { "v": 10020, "f": null},
        { "v": "R$10.020", "f": null}
        ]
    },

    {"c": [
        { "v": "Alcides V. de Oliveira", "f": null},
        { "v": 30240, "f": null},
        { "v": "R$30.240", "f": null}
        ]
    },

    {"c": [
        { "v": "Rafael Antunes", "f": null},
        { "v": 2310, "f": null},
        { "v": "R$2.310", "f": null}
        ]
    },

    {"c": [
        { "v": "Bianca M. Sampaio", "f": null},
        { "v": 8542, "f": null},
        { "v": "R$8.542", "f": null}
        ]
    },

    {"c": [
        { "v": "Victor Barbosa", "f": null},
        { "v": 6521, "f": null},
        { "v": "R$6.521", "f": null}
        ]
    },

    {"c": [
        { "v": "Maria do Carmo Prado", "f": null},
        { "v": 12327, "f": null},
        { "v": "R$12.327", "f": null}
        ]
    },

    {"c": [
        { "v": "Maria Heloisa de Almeida", "f": null},
        { "v": 9764, "f": null},
        { "v": "R$9.764", "f": null}
        ]
    },

    {"c": [
        { "v": "Rita de Cássia Cuaron", "f": null},
        { "v": 20174, "f": null},
        { "v": "R$20.174", "f": null}
        ]
    }];

module.exports = function gerarValores(){
    return { 
	"cols":[
				{	
					"label": "Nome",
					"type":"string",
				},

				{	
					"label": "Valor",
					"type":"number"
				},

				{
					"type": "string", 
					"role": "annotation",
				}
			],

	"rows": linhas.map(function(item){
        const numero = parseFloat((Math.random()*10).toFixed(2));
        item.c[1].v += numero;
        //item.c[1].v = parseFloat(item.c[1].v.toFixed(2));
        item.c[1].v = item.c[1].v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
        //item.c[2].v = 'R$ '+item.c[1].v;
        item.c[2].v =  item.c[1].v
        return item; 
    })
}
	};
