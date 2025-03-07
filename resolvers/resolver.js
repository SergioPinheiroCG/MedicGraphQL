const patientController = require('../controllers/patientController'); 
const Patient = require('../models/Patient');

const resolvers = {
  Query: {
    // Consultar todos os pacientes
    patients: async () => await patientController.getAllPatients(),
  },

   Mutation: {
    createPatient: async (_, args) => await patientController.createPatient(_, args),
    updatePatient: async (_, args) => await patientController.updatePatient(_, args),
    deletePatient: async (_, args) => await patientController.deletePatient(_, args),
  }
};


module.exports = resolvers; 
