window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.classList.add('hidden');
});

function showLoginPage() {
  document.getElementById('LoginPage').style.display = 'block';
  document.getElementById('signupPage').style.display = 'none';
}