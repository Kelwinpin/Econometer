import DiscountRequest from '../../src/model/discountRequest.js';

export async function up(queryInterface, Sequelize) {
  await DiscountRequest.bulkCreate([
    { id: 1, validity: "2024-12-31", purchase_value: 120.00, status: "Aprovado", validation_date: "2024-06-01", user_id: "12345678901", establishment_id: 1, discount_pattern_id: 1 },
    { id: 2, validity: "2024-12-31", purchase_value: 250.00, status: "Aprovado", validation_date: "2024-06-02", user_id: "23456789012", establishment_id: 2, discount_pattern_id: 2 },
    { id: 3, validity: "2024-12-31", purchase_value: 80.00, status: "Pendente", validation_date: null, user_id: "34567890123", establishment_id: 3, discount_pattern_id: 3 },
    { id: 4, validity: "2024-12-31", purchase_value: 15.00, status: "Aprovado", validation_date: "2024-06-03", user_id: "45678901234", establishment_id: 4, discount_pattern_id: 4 },
    { id: 5, validity: "2024-12-31", purchase_value: 60.00, status: "Rejeitado", validation_date: "2024-06-04", user_id: "56789012345", establishment_id: 5, discount_pattern_id: 5 },
    { id: 6, validity: "2024-12-31", purchase_value: 110.00, status: "Aprovado", validation_date: "2024-06-05", user_id: "67890123456", establishment_id: 6, discount_pattern_id: 6 },
    { id: 7, validity: "2024-12-31", purchase_value: 30.00, status: "Pendente", validation_date: null, user_id: "78901234567", establishment_id: 7, discount_pattern_id: 7 },
    { id: 8, validity: "2024-12-31", purchase_value: 20.00, status: "Aprovado", validation_date: "2024-06-06", user_id: "89012345678", establishment_id: 8, discount_pattern_id: 8 },
    { id: 9, validity: "2024-12-31", purchase_value: 170.00, status: "Rejeitado", validation_date: "2024-06-07", user_id: "90123456789", establishment_id: 9, discount_pattern_id: 9 },
    { id: 10, validity: "2024-12-31", purchase_value: 10.00, status: "Aprovado", validation_date: "2024-06-08", user_id: "01234567890", establishment_id: 10, discount_pattern_id: 10 }
  ], {});
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('DiscountRequests', null, {});
}
