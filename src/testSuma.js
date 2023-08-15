const user = 'coderUser';
const password = 123;

if (password === undefined || password === null || password === '') {
  console.log('No se ha proporcionado un password');
}

if (user === undefined || user === null || user === '') {
  console.log('No se ha proporcionado un usuario');
}

if (password !== 123) {
  console.log('Contraseña incorrecta');
}

if (user === 'coderUser') {
  console.log('Credenciales incorrectas');
}

if (user === 'coderUser' && password === 123) {
  console.log('logueado');
}