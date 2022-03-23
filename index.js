const inquirer = require("inquirer");
const { prompt } = require("inquirer");
const { values } = require("lodash");
require("dotenv").config();
const db = require("./db/connection");


// questions that we will ask user - enter information about team members
const main = async () => {
  const answer = await inquirer.prompt([
    {
      type: "list",
      message: "What would you like to do?",
      name: "nav",
      choices: [
        "View All Employees",
        "Add Employee",
        "Update Employee Role", // how
        "View All Roles",
        "Add Role",
        "View all Departments",
        "Add Department",
      ],
    },
  ]);

  switch (answer.nav) {
    case "View All Employees":
      showAllEmployees();
      break;
    case "Add Employee":
      addEmployee();
      break;
    case "Update Employee Role":
      updateRole();
      break;
    case "View All Roles":
      showAllRoles();
      break;
    case "Add Role":
      addRole();
      break;
    case "View all Departments":
      showAllDepartments();
      break;
    case "Add Department":
      addDepartment();
      break;
  }
};

const showAllEmployees = async () => {
  db.query("SELECT * FROM employee", function (err, results) {
    console.table(results);
    main();
  });
};

const addEmployee = async () => {
  const response = await prompt([
  {
    name: "first_name",
    message: "What is the employee's first name?"
  },
  {
    name: "last_name",
    message: "What is the employee's last name?"
  },
  
])
  console.log(response.first_name);

  let roles = []

  db.query("SELECT title FROM role", async function (err, results) {
    console.log(results);
    roles = results.map((role, index) => {
      return {
        name: role.title,
        value: index,
      }
    })
    console.log(roles);
    const response = await prompt ([
      {
        type: "list",
        name: "roleID",
        message: "What is the employee's role?",
        choices: roles
      }
    ])
    console.log(response);
  })
  // .then(([roles]) => {
  //   console.log(roles);
  // })
  

}

// const addEmployee = async () => {
//   console.log(1);
//   const answer = inquirer.prompt([
//     {
//       type: "input",
//       message: "What is the employee's first name?",
//       name: "firstName",
//       validate(answer) {
//         if (!answer) {
//           return "Please add a valid name.";
//         }
//         return true;
//       },
//     },
//     {
//       type: "input",
//       message: "What is the employee's last name?",
//       name: "lastName",
//       validate(answer) {
//         if (!answer) {
//           return "Please add a valid name.";
//         }
//         return true;
//       },
//     },
//     {
//       type: "list",
//       message: "What is the employee's role?",
//       roleValues: values,
//       name: "employeeRole", // sql show list 
//       choices: ["DISPLAY ALL THE VALUES FOR ROLE??"],
//     }, // const that goes through all available values
//     // map something
//     // query select title from role
//     // 
//     {
//       type: "list",
//       message: "Who is the employee's manager?",
//       name: "employeeManager",
//       choices: ["DISPLAY ALL THE VALUES FOR Manager and NONE?"],
//     }, // console log added to database\
//     // {
//     //   type: "list",
//     //   message: "Select an employee to update.",
//     //   name: "updateEmployee",
//     //   choices: ["DISPLAY ALL THE VALUES FOR Employeessss"],
//     //   when: (answers) => answers.nav === "Update Employee Role",
//     // }, // console log added to database\
//   ])

//   db.query("INSERT INTO employee (first_name)", function (err, results) {
//     console.table(results);
//     main();
//   });
// };

const updateRole = async () => {
  db.query("UPDATE from employee", function (err, results) {
    
    main();
  });
};



const showAllRoles = async () => {
  db.query("SELECT * FROM role", function (err, results) {
    console.table(results);
    main();
  });
};

const showAllDepartments = async () => {
  db.query("SELECT * FROM department", function (err, results) {
    console.table(results);
    main();
  });
};

// const addDepartment = async () => {
//   const answer = inquirer.prompt([
//     {
//             type: "input",
//             message: "What is the name of the department?",
//             name: "newDepartment",
//             validate(answer) {
//               if (!answer) {
//                 return "Please add a valid department.";
//               }
//               return true;
//             },
//           }
//   )]
  
//   db.query("INSERT INTO ", function (err, results) {
//     console.table(results);
//     main();
//   });
// };
// const sql = `INSERT INTO movies (movie_name)
//     VALUES (?)`;
//   const params = [body.movie_name];
  
//   db.query(sql, params, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: 'success',
//       data: body
//     });
main();
//   const showEmplyees
//     
//     {
//       type: "input",
//       message: "What is the name of the role?",
//       name: "newRole",
//       when: (answers) => answers.nav === "Add Role",
//       validate(answer) {
//         if (!answer) {
//           return "Please add a valid role.";
//         }
//         return true;
//       },
//     },
//     {
//       type: "input",
//       message: "What is the salary of the role?",
//       name: "salaryRole",
//       when: (answers) => answers.nav === "Add Role",
//       validate(answer) {
//         if (isNaN(answer)) {
//           return "Please enter a valid salary.";
//         }
//         return true;
//       },
//     },
//     {
//       type: "list",
//       message: "What department does the role belong to?",
//       name: "depRole",
//       choices: ["DISPLAY ALL THE VALUES FOR DEPARTMENT??"],
//       when: (answers) => answers.nav === "Add Role",
//     },

//     {
//       type: "input",
//       message: "What is the employee's new role?",
//       name: "updateRole",
//       choices: ["DISPLAY ALL THE VALUES FOR ROLESSSSS"],
//       when: (answers) => answers.nav === "Update Employee Role",
//       validate(answer) {
//         if (!answer) {
//           return "Please add a valid name.";
//         }
//         return true;
//       },
//     },
//   ]);
// };

// const employees = []; // empty array for adding new employees
