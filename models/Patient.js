const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    cpf: { type: String, unique: true, required: true },
    nome: { type: String, required: true },
    telefone: { type: String, required: true },
    endereco: { type: String, required: true },
    remedios: { type: [String], default: [] },
    sintomas: { type: [String], default: [] },
   
});

module.exports = mongoose.model('Patient', PatientSchema);
