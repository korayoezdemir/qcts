#!/bin/bash

# Set the connection details
DB_USER=<> # Enter the username
DB_PASSWORD=<> # Enter the password
DB_NAME=<> # Enter the database name
DB_CONTAINER_NAME="my-postgres"

# Copy the init-db.sql script to the container
docker cp init-db.sql $DB_CONTAINER_NAME:/init-db.sql

# Execute the SQL script inside the container
docker exec -it $DB_CONTAINER_NAME bash -c "PGPASSWORD=$DB_PASSWORD psql -U $DB_USER -d $DB_NAME -a -f /init-db.sql"
