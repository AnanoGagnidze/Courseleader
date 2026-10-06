window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader.classList.add('hidden');
  }, 2000);
});

function showLoginPage() {
  document.getElementById('loginPage').style.display = 'flex';
  document.getElementById('signupPage').style.display = 'none';
}

function showSignUpPage() {
  document.getElementById('signupPage').style.display = 'flex';
  document.getElementById('loginPage').style.display = 'none';
}