import { Establishment } from '../../src/model/establishment.js';

export async function up(queryInterface, Sequelize) {
  await Establishment.bulkCreate([
    { id: 1, name: "Restaurante Saboroso", cnpj: "12345678000199", address: "Rua das Flores, 123, Centro, São Paulo, SP" },
    { id: 2, name: "Padaria Pão Quente", cnpj: "23456789000188", address: "Avenida Brasil, 456, Vila Nova, Rio de Janeiro, RJ" },
    { id: 3, name: "Supermercado Preço Bom", cnpj: "34567890000177", address: "Rua da Independência, 789, Liberdade, Salvador, BA" },
    { id: 4, name: "Café Expresso", cnpj: "45678901000166", address: "Avenida Paulista, 1010, Bela Vista, São Paulo, SP" },
    { id: 5, name: "Pizzaria Massa Fina", cnpj: "56789012000155", address: "Rua das Palmeiras, 2020, Jardim Botânico, Curitiba, PR" },
    { id: 6, name: "Livraria Saber", cnpj: "67890123000144", address: "Rua do Conhecimento, 3030, Centro, Porto Alegre, RS" },
    { id: 7, name: "Farmácia Saúde", cnpj: "78901234000133", address: "Avenida da Saúde, 4040, Bela Vista, Belo Horizonte, MG" },
    { id: 8, name: "Lanchonete Rápida", cnpj: "89012345000122", address: "Rua das Laranjeiras, 5050, Flamengo, Rio de Janeiro, RJ" },
    { id: 9, name: "Mercado Econômico", cnpj: "90123456000111", address: "Avenida das Américas, 6060, Barra da Tijuca, Rio de Janeiro, RJ" },
    { id: 10, name: "Sorveteria Gelato", cnpj: "01234567000100", address: "Rua do Sol, 7070, Praia de Iracema, Fortaleza, CE" }
  ], {});
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Establishments', null, {});
}
