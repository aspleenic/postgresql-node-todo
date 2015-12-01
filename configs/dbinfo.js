var connectionString = process.env.DATABASE_URL || 'tcp://postgres:5432@localhost/todo';
module.exports = connectionString;