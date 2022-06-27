CREATE TABLE IF NOT EXISTS ama_questions(
  id BIGSERIAL NOT NULL,
  question VARCHAR(255) NOT NULL,
  created_at timestamptz NOT NULL DEFAULT current_timestamp,
  PRIMARY KEY(id)
);