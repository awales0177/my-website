---
sidebar_position: 1
---

# Car Database Schema

This document describes the schema for a car database table. The table stores information about various car models, their specifications, and pricing details.

## Table Structure

| Column Name | Data Type | Description | Constraints |
|------------|-----------|-------------|-------------|
| id | INTEGER | Unique identifier for each car | PRIMARY KEY, AUTO_INCREMENT |
| make | VARCHAR(50) | Manufacturer of the car | NOT NULL |
| model | VARCHAR(100) | Model name of the car | NOT NULL |
| year | INTEGER | Manufacturing year | NOT NULL, CHECK (year >= 1886) |
| color | VARCHAR(30) | Exterior color of the car | NOT NULL |
| price | DECIMAL(10,2) | Current market price in USD | NOT NULL, CHECK (price > 0) |
| mileage | INTEGER | Current mileage in miles | NOT NULL, CHECK (mileage >= 0) |
| transmission | VARCHAR(20) | Type of transmission | NOT NULL, CHECK (transmission IN ('Automatic', 'Manual', 'Semi-Automatic')) |
| fuel_type | VARCHAR(20) | Type of fuel used | NOT NULL, CHECK (fuel_type IN ('Gasoline', 'Diesel', 'Electric', 'Hybrid', 'Plug-in Hybrid')) |
| engine_size | DECIMAL(3,1) | Engine displacement in liters | NULL |
| horsepower | INTEGER | Engine power in horsepower | NULL |
| mpg_city | DECIMAL(4,1) | Miles per gallon in city driving | NULL |
| mpg_highway | DECIMAL(4,1) | Miles per gallon in highway driving | NULL |
| vin | VARCHAR(17) | Vehicle Identification Number | UNIQUE |
| registration_date | DATE | Date of first registration | NOT NULL |
| last_service_date | DATE | Date of last maintenance service | NULL |
| features | TEXT | JSON string of additional features | NULL |
| created_at | TIMESTAMP | Record creation timestamp | NOT NULL, DEFAULT CURRENT_TIMESTAMP |
| updated_at | TIMESTAMP | Record last update timestamp | NOT NULL, DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP |

## Example Data

```sql
INSERT INTO cars (make, model, year, color, price, mileage, transmission, fuel_type, engine_size, horsepower, mpg_city, mpg_highway, vin, registration_date, last_service_date, features)
VALUES 
('Toyota', 'Camry', 2022, 'Silver', 25000.00, 15000, 'Automatic', 'Gasoline', 2.5, 203, 28.0, 39.0, '1HGCM82633A123456', '2022-01-15', '2023-01-20', '{"air_conditioning": true, "navigation": true, "sunroof": true}'),
('Tesla', 'Model 3', 2023, 'Red', 45000.00, 5000, 'Automatic', 'Electric', NULL, 283, NULL, NULL, '5YJSA1E21HF123456', '2023-03-10', '2023-06-15', '{"autopilot": true, "premium_sound": true, "wireless_charging": true}'),
('Ford', 'F-150', 2021, 'Black', 35000.00, 25000, 'Automatic', 'Gasoline', 3.5, 375, 19.0, 24.0, '1FTFW1ET0MFA12345', '2021-05-20', '2022-11-30', '{"tow_package": true, "bed_liner": true, "running_boards": true}');
```

## Indexes

```sql
CREATE INDEX idx_make_model ON cars(make, model);
CREATE INDEX idx_year ON cars(year);
CREATE INDEX idx_price ON cars(price);
CREATE INDEX idx_mileage ON cars(mileage);
```

## Notes

- The `id` column serves as the primary key and auto-increments for each new record
- The `vin` column must be unique for each car
- The `price` and `mileage` columns cannot be negative
- The `year` column has a minimum value of 1886 (year of the first automobile)
- The `transmission` and `fuel_type` columns are restricted to specific values
- The `features` column stores additional car features as a JSON string
- Timestamps are automatically managed for record creation and updates