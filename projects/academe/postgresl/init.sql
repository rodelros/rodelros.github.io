CREATE DATABASE academe;

\c academe

CREATE TYPE Gender AS ENUM ('male', 'female', 'other');

CREATE TABLE accounts(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    middle_name VARCHAR(50),
    last_name VARCHAR(50) NOT NULL,
    dob DATE NOT NULL,
    email VARCHAR(256),
    gender Gender,
    is_active BOOLEAN,
	password VARCHAR(50)
);

CREATE TABLE roles(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(256)
);

INSERT INTO roles (name, description)
VALUES ('master', 'Manages the system.');


CREATE TABLE account_role_map(
    account BIGINT NOT NULL REFERENCES accounts(id),
    role BIGINT NOT NULL REFERENCES roles(id)
);

/**********
Ex. code
  MODIFY_ROLES
  READ_ROLES
  READ_REPORT_CARDS
  MODIFY_REPORT_CARDS
**********/
CREATE TABLE functionalities(
	id BIGSERIAL NOT NULL PRIMARY KEY,
	description VARCHAR(256),
	code VARCHAR(50)
);

CREATE TABLE role_functionality_map(
	functionality BIGINT NOT NULL REFERENCES functionalities(id),
	role BIGINT NOT NULL REFERENCES roles(id)
);

CREATE TABLE classes(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    credits SMALLINT NOT NULL,
    name VARCHAR(256),
    code VARCHAR(25),
    lecturer BIGINT REFERENCES accounts(id)
);

CREATE TABLE class_enrollments(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    class BIGINT NOT NULL REFERENCES classes(id),
    student BIGINT NOT NULL REFERENCES accounts(id) 
);

/**********
Sample tags: DROPPPED, FAILED, PASSED
**********/
CREATE TABLE class_enrollment_tags(
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL    
);

CREATE TABLE class_enrollment_tag_map(
    tag SMALLINT NOT NULL REFERENCES class_enrollment_tags(id),
    class_enrollment BIGINT NOT NULL REFERENCES class_enrollments(id)    
);

/**********
Sample tags: Cancelled, No Lecturer
**********/
CREATE TABLE class_schedule_tags(
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL 
);

CREATE TABLE class_schedules(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    date DATE NOT NULL,
    class BIGINT NOT NULL REFERENCES classes(id)
);

CREATE TABLE class_schedule_tag_map(
    tag SMALLINT NOT NULL REFERENCES class_schedule_tags(id),
    schedule BIGINT NOT NULL REFERENCES class_schedules(id) 
);

CREATE TABLE class_attendance(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    class BIGINT NOT NULL REFERENCES classes(id),
    student BIGINT NOT NULL REFERENCES accounts(id)
);

CREATE TYPE Grade AS ENUM ('1.0', '1.25', '1.5', '1.75', '2.0', '2.25', '2.5', '2.75', '3.0', '5.0', 'inc');

CREATE TABLE report_cards(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    class BIGINT NOT NULL REFERENCES classes(id),
    student BIGINT NOT NULL REFERENCES accounts(id),
    grade Grade NOT NULL
);

/**********
Prelim Test, MidTerm Test, Final Test, Laboratory, Thesis
**********/
CREATE TABLE class_activity_types(
    id SERIAL NOT NULL PRIMARY KEY,  
    name VARCHAR(256)
);

CREATE TABLE class_activities(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    type SMALLINT NOT NULL REFERENCES class_activity_types(id),
    class BIGINT NOT NULL REFERENCES classes(id)
);

CREATE TABLE class_activity_results(
   id BIGSERIAL NOT NULL PRIMARY KEY,
   activity BIGINT NOT NULL REFERENCES class_activities(id),
   student BIGINT NOT NULL REFERENCES accounts(id),
   grade SMALLINT NOT NULL 
);

/**********
Ticketing system
**********/
CREATE TABLE ticket_statuses(
	id SERIAL NOT NULL PRIMARY KEY,
	value VARCHAR(25) NOT NULL
);

CREATE TABLE flows(
	id SERIAL NOT NULL PRIMARY KEY,
	value VARCHAR(50) NOT NULL
);

CREATE TABLE ticket_status_map(
	flow SMALLINT NOT NULL REFERENCES flows(id),
	status SMALLINT NOT NULL REFERENCES ticket_statuses(id),
	next_status SMALLINT NOT NULL REFERENCES ticket_statuses(id)
);

CREATE TABLE tickets(
	id BIGSERIAL NOT NULL PRIMARY KEY,
	status SMALLINT NOT NULL REFERENCES ticket_statuses(id)
);

/**********
note: prevent circular reference in code
**********/
CREATE TABLE ticket_map(
	ticket BIGINT NOT NULL REFERENCES tickets(id),
	sub_ticket BIGINT NOT NULL REFERENCES tickets(id)
);




