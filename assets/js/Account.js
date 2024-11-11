document.getElementById('register-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login-box').style.display = 'none';
    document.getElementById('register-box').style.display = 'block';
});

document.getElementById('login-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('register-box').style.display = 'none';
    document.getElementById('login-box').style.display = 'block';
});

