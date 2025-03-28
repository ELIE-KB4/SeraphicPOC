// Collect inputs and store in sessionStorage (simulating local collection)
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  sessionStorage.setItem('collected_username', username);
  sessionStorage.setItem('collected_password', password);

  alert('Credentials captured (benign simulation).');
});
