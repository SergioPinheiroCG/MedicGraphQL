const { gql } = require('apollo-server');

const typeDefs = gql`

  # Tipo para Paciente
  type Patient {
    id: ID!
    cpf: String!
    nome: String!
    telefone: String!
    endereco: String!
  }

  # Queries
  type Query {
  patients: [Patient]  # Consulta para todos os pacientes
    
  }

  # Mutations
  type Mutation {
    createPatient(cpf: String!, nome: String!, telefone: String!, endereco: String!): Patient
    updatePatient(cpf: String!, nome: String, telefone: String, endereco: String): Patient
    deletePatient(cpf: String!): String
  }
`;

module.exports = { typeDefs };
