-- Create the 'hw11' database
CREATE DATABASE hw11;

-- Connect to the 'hw11' database
\c hw11;

-- Create the 'todolist' table
CREATE TABLE todolist (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

-- Insert data into the 'todolist' table
INSERT INTO todolist (name) VALUES
  ('makan'),
  ('minum'),
  ('duduk'),
  ('pusing'),
  ('minum obat');
