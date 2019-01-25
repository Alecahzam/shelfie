CREATE TABLE IF NOT EXISTS simdata (
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    price INTEGER,
    image_url TEXT
  );
--   INSERT INTO simdata ( name, price, image_url ) 
-- VALUES ( 'hat', 20, 'https://images-na.ssl-images-amazon.com/images/I/81j1ocgpEcL._UX385_.jpg');