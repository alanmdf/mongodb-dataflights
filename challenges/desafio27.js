// db.voos.find({ $and: [{ "empresa.nome": "PASSAREDO" }, { natureza: "Doméstica" }] }).count();

db.resumoVoos.insertOne({ empresa: "PASSAREDO", totalVoosDomesticos: 4187 });

db.resumoVoos.findOne({ empresa: "PASSAREDO" }, { _id: false });