const loginForm = document.querySelector('.login-form');

const predefinedUsers = [
  { username: 'andy01', password: 'an1234', role: 'buyer' },
  { username: 'andy02', password: 'an1235', role: 'seller' },
  { username: 'andy03', password: 'an1236', role: 'visitor' },
  { username: 'andy04', password: 'an1237', role: 'buyer' },
];

const validateInput = (inputObj) => {
  const { username, password, role } = inputObj;

  const user = predefinedUsers.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) {
    alert('Invalid username or password');
    return false;
  }

  // เข้าสู่ระบบเมื่อผ่านการตรวจสอบเงื่อนไขทั้งหมด
  alert(`Login Successful as ${user.role}`);
  window.location.href = 'https://example.com/';
  return true;
};

const hdlLogin = (e) => {
  e.preventDefault();
  const inputObj = {};
  for (const el of loginForm.elements) {
    inputObj[el.id] = el.value;
  }
  validateInput(inputObj);
};

loginForm.addEventListener('submit', hdlLogin);
