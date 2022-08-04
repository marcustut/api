CREATE TABLE IF NOT EXISTS ama_users(
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  last_login_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT current_timestamp,
  PRIMARY KEY(username)
);