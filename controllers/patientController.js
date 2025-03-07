// controllers/patientController.js - Controlador de Pacientes
const Patient = require('../models/Patient');

exports.createPatient = async (_, { cpf, nome, telefone, endereco }) => {
    try {
      // Verifica se o CPF já existe
      const existingPatient = await Patient.findOne({ cpf });
      if (existingPatient) {
        throw new Error(`Já existe um paciente cadastrado com o CPF ${cpf}`);
      }
  
      // Criando novo paciente
      const newPatient = new Patient({ cpf, nome, telefone, endereco });
      await newPatient.save();
      return newPatient;
  
    } catch (error) {
      throw new Error(`Erro ao criar paciente: ${error.message}`);
    }
  };


exports.getPatientByCPF = async (cpf ) => {
        try {
        const paciente = await Patient.findOne({ cpf });
        if (!paciente) return res.status(404).json({ msg: 'Paciente não encontrado' });
        res.json(paciente);
    } catch (err) {
        res.status(500).json({ msg: 'Erro no servidor', erro: err });
    }
};

exports.deletePatient = async (_, { cpf }) => {
    try {
      const deletedPatient = await Patient.findOneAndDelete({ cpf });
  
      if (!deletedPatient) {
        throw new Error(`Paciente com CPF ${cpf} não encontrado.`);
      }
  
      return `Paciente com CPF ${cpf} foi removido com sucesso.`;
  
    } catch (error) {
      throw new Error(`Erro ao deletar paciente: ${error.message}`);
    }
  };

exports.updatePatient = async (_, { cpf, nome, telefone, endereco }) => {
    try {
      const updatedPatient = await Patient.findOneAndUpdate(
        { cpf }, // Busca pelo CPF
        { nome, telefone, endereco }, // Atualiza os dados
        { new: true } // Retorna o novo objeto atualizado
      );
  
      if (!updatedPatient) {
        throw new Error(`Paciente com CPF ${cpf} não encontrado.`);
      }
  
      return updatedPatient;
  
    } catch (error) {
      throw new Error(`Erro ao atualizar paciente: ${error.message}`);
    }
  };

  exports.getAllPatients = async () => {
    try {
      return await Patient.find();
    } catch (error) {
      throw new Error(`Erro ao buscar pacientes: ${error.message}`);
    }
  };