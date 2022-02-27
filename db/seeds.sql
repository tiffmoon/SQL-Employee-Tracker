INSERT INTO department (name)
VALUES ("Sales"),
       ("Legal"),
       ("HR"),
       ("Finance"),
       ("Marketing");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 60000, 1),
       ("Junior Lawyer", 90000, 2),
       ("Paralegal", 50000, 2),
       ("Marketing Analyst", 70000, 5),
       ("HR Manager", 75000, 3),
       ("Accountant", 87000, 4),
       ("Digital Marketing Manager", 73000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Gary", "Gregson", 1, 1),
       ("Missy", "Higgins", 2, 2),
       ("Polly", "Pocket", 3, NULL),
       ("Jade", "Ruby", 4, NULL),
       ("Mike", "Wazawski", 5, 1),
       ("Sully", "Sullivan", 6, NULL),
       ("Ken", "Dun", 7, NULL);