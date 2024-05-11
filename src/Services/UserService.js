export function getUsers() {
  const users = localStorage.getItem('users');
  if (!users) {
    setDefaultValues();
    return JSON.parse(localStorage.getItem('users'));
  } else {
    return JSON.parse(users);
  }
}

function setDefaultValues() {
  localStorage.setItem('users', JSON.stringify([
    {
      "id": 1,
      "name": "John Doe",
      "rollno": "A12345",
      "branch": "Computer Science",
      "phone": "123-456-7890",
      "email": "john.doe@example.com",
      "date_of_issue": "2024-04-19",
      "date_of_return": "2024-05-19",
    },
    {
      "id": 2,
      "name": "Alice Smith",
      "rollno": "B54321",
      "branch": "Electrical Engineering",
      "phone": "987-654-3210",
      "email": "alice.smith@example.com",
      "date_of_issue": "2024-04-20",
      "date_of_return": "2024-05-20",
    },
    {
      "id": 3,
      "name": "Bob Johnson",
      "rollno": "C98765",
      "branch": "Mechanical Engineering",
      "phone": "456-789-0123",
      "email": "bob.johnson@example.com",
      "date_of_issue": "2024-04-21",
      "date_of_return": "2024-05-21",
    },
    {
      "id": 4,
      "name": "Emma Brown",
      "rollno": "D24680",
      "branch": "Civil Engineering",
      "phone": "321-654-9870",
      "email": "emma.brown@example.com",
      "date_of_issue": "2024-04-22",
      "date_of_return": "2024-05-22",
    },
    {
      "id": 5,
      "name": "Michael Garcia",
      "rollno": "E13579",
      "branch": "Chemical Engineering",
      "phone": "789-012-3456",
      "email": "michael.garcia@example.com",
      "date_of_issue": "2024-04-23",
      "date_of_return": "2024-05-23",
    },
    {
      "id": 6,
      "name": "Olivia Taylor",
      "rollno": "F97531",
      "branch": "Biomedical Engineering",
      "phone": "012-345-6789",
      "email": "olivia.taylor@example.com",
      "date_of_issue": "2024-04-24",
      "date_of_return": "2024-05-24",
    },
    {
      "id": 7,
      "name": "William Lee",
      "rollno": "G86420",
      "branch": "Aerospace Engineering",
      "phone": "654-321-0987",
      "email": "william.lee@example.com",
      "date_of_issue": "2024-04-25",
      "date_of_return": "2024-05-25",
    },
    {
      "id": 8,
      "name": "Sophia Martinez",
      "rollno": "H75309",
      "branch": "Industrial Engineering",
      "phone": "234-567-8901",
      "email": "sophia.martinez@example.com",
      "date_of_issue": "2024-04-26",
      "date_of_return": "2024-05-26",
    },
    {
      "id": 9,
      "name": "James Brown",
      "rollno": "I86420",
      "branch": "Environmental Engineering",
      "phone": "543-210-9876",
      "email": "james.brown@example.com",
      "date_of_issue": "2024-04-27",
      "date_of_return": "2024-05-27",
    },
    {
      "id": 10,
      "name": "Sophia Garcia",
      "rollno": "J24680",
      "branch": "Petroleum Engineering",
      "phone": "876-543-2109",
      "email": "sophia.garcia@example.com",
      "date_of_issue": "2024-04-28",
      "date_of_return": "2024-05-28",
    },

  ]));
}

export function getUserById(id) {
  return getUsers().find(User => User.id == id);
}

export function addUser(newUser) {
  let users = getUsers();
  users.push({ ...newUser, id: users.sort()[users.length - 1].id + 1 });
  localStorage.setItem('users', JSON.stringify(users));
}

export function updateUser(updatedUser) {
  let users = getUsers().map(User =>
    users.id == updatedUser.id ? updatedUser : User
  );
  localStorage.setItem('users', JSON.stringify(users));
}

export function deleteUserById(id) {
  let users = getUsers().filter(User => User.id != id);
  localStorage.setItem('users', JSON.stringify(users));
}