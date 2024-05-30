CREATE TABLE discount_pattern (
    id INT PRIMARY KEY AUTO_INCREMENT,
    rule VARCHAR(255) NOT NULL,
    discount_type VARCHAR(50) NOT NULL,
    discount_value DECIMAL(10, 2) NOT NULL,
    discount_percentage INTEGER NOT NULL,
    establishment_id INT NOT NULL,
    FOREIGN KEY (establishment_id) REFERENCES establishment(id)
);