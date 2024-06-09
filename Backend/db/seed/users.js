import { Users } from '../../src/model/users.js';

export async function up(queryInterface, Sequelize) {
  await Users.bulkCreate([
    { cpf: "12345678901", name: "João Silva", birthday: "1990-01-15" },
    { cpf: "23456789012", name: "Maria Oliveira", birthday: "1985-02-20" },
    { cpf: "34567890123", name: "Carlos Souza", birthday: "1975-03-10" },
    { cpf: "45678901234", name: "Ana Pereira", birthday: "1992-04-25" },
    { cpf: "56789012345", name: "Fernando Lima", birthday: "1988-05-30" },
    { cpf: "67890123456", name: "Clara Santos", birthday: "1995-06-15" },
    { cpf: "78901234567", name: "Roberto Costa", birthday: "1978-07-05" },
    { cpf: "89012345678", name: "Patrícia Almeida", birthday: "1983-08-10" },
    { cpf: "90123456789", name: "Rafael Ferreira", birthday: "1999-09-20" },
    { cpf: "01234567890", name: "Juliana Moreira", birthday: "1980-10-15" }
  ], {});
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Users', null, {});
}
