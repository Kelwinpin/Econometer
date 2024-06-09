import DiscountPattern from '../../src/model/discountPattern.js';

export async function up(queryInterface, Sequelize) {
  await DiscountPattern.bulkCreate([
    { id: 1, rule: "Desconto de 10% para compras acima de R$ 100,00", discount_type: "Porcentagem", discount_value: 0.00, discount_percentage: 10, establishment_id: 1 },
    { id: 2, rule: "Desconto de R$ 20,00 em compras acima de R$ 200,00", discount_type: "Valor Fixo", discount_value: 20.00, discount_percentage: 0, establishment_id: 2 },
    { id: 3, rule: "Desconto de 5% em todas as compras de frutas", discount_type: "Porcentagem", discount_value: 0.00, discount_percentage: 5, establishment_id: 3 },
    { id: 4, rule: "Desconto de R$ 5,00 no café expresso", discount_type: "Valor Fixo", discount_value: 5.00, discount_percentage: 0, establishment_id: 4 },
    { id: 5, rule: "Desconto de 15% para compras acima de R$ 50,00", discount_type: "Porcentagem", discount_value: 0.00, discount_percentage: 15, establishment_id: 5 },
    { id: 6, rule: "Desconto de R$ 10,00 em livros didáticos", discount_type: "Valor Fixo", discount_value: 10.00, discount_percentage: 0, establishment_id: 6 },
    { id: 7, rule: "Desconto de 20% em medicamentos genéricos", discount_type: "Porcentagem", discount_value: 0.00, discount_percentage: 20, establishment_id: 7 },
    { id: 8, rule: "Desconto de R$ 3,00 em qualquer lanche", discount_type: "Valor Fixo", discount_value: 3.00, discount_percentage: 0, establishment_id: 8 },
    { id: 9, rule: "Desconto de 10% em todas as compras acima de R$ 150,00", discount_type: "Porcentagem", discount_value: 0.00, discount_percentage: 10, establishment_id: 9 },
    { id: 10, rule: "Desconto de R$ 2,00 em qualquer sorvete", discount_type: "Valor Fixo", discount_value: 2.00, discount_percentage: 0, establishment_id: 10 }
  ], {});
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('DiscountPatterns', null, {});
}
