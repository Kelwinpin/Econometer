CREATE TABLE discount_request (
    id INT PRIMARY KEY AUTO_INCREMENT,
    validity DATE NOT NULL,
    purchase_value DECIMAL(10, 2) NOT NULL,
    status VARCHAR(50) NOT NULL,
    validation_date DATE,
    user_id CHAR(11) NOT NULL,
    establishment_id INT NOT NULL,
    discount_pattern_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(cpf),
    FOREIGN KEY (establishment_id) REFERENCES establishment(id)
    FOREIGN KEY (discount_pattern_id) REFERENCES  discount_pattern(id)
);