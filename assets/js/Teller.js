// Hiển thị form chuyển tiền khi nhấn nút "Chuyển tiền" bên ngoài form
document.getElementById('transfer-button').addEventListener('click', function() {
    document.getElementById('transfer-form').style.display = 'block';
    document.getElementById('history-panel').style.display = 'none';
    document.querySelector('.sidebar-right').style.display = 'block';
});

// Đóng form chuyển tiền khi nhấn nút "<<<"
document.getElementById('close-transfer-form').addEventListener('click', function() {
    document.getElementById('transfer-form').style.display = 'none';
    document.querySelector('.sidebar-right').style.display = 'none';
});

// Hiển thị popup nhập mật khẩu khi nhấn nút "Chuyển tiền" trong form chuyển tiền
document.getElementById('submit-transfer').addEventListener('click', function() {
    document.getElementById('popup').classList.add('active');
});

// Đóng popup nhập mật khẩu khi nhấn nút "×"
document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('popup').classList.remove('active');
});

// Xử lý sự kiện nhập mật khẩu
const passwordInputs = document.querySelectorAll('.password-input .circle');
passwordInputs.forEach((input, index) => {
    input.addEventListener('input', function() {
        if (input.value.length === 1 && index < passwordInputs.length - 1) {
            passwordInputs[index + 1].focus();
        }
    });
});

// Xác nhận mật khẩu khi nhấn nút "Xác nhận"
document.getElementById('confirm-password').addEventListener('click', function() {
    let password = '';
    passwordInputs.forEach(input => {
        password += input.value;
    });
    if (password.length === 6) {
        setTimeout(function() {
            document.getElementById('otp-popup').classList.add('active');
        }, 100); // Đảm bảo popup mật khẩu đóng trước khi mở popup OTP
    } else {
        alert('Please enter a 6-digit password.');
    }
});

// Đóng popup OTP khi nhấn nút "×"
document.getElementById('close-otp-popup').addEventListener('click', function() {
    document.getElementById('otp-popup').classList.remove('active');
});

// Xác nhận OTP khi nhấn nút "Xác nhận"
document.getElementById('confirm-otp').addEventListener('click', function() {
    const otp = document.getElementById('otp').value;
    if (otp.length === 6) {
        alert('OTP confirmed!');
        document.getElementById('otp-popup').classList.remove('active');
    } else {
        alert('Please enter a valid 6-digit OTP.');
    }
});

//Từ ngày đến ngày trong lịch sử tìm kiếm
document.getElementById('filter-history').addEventListener('click', function() {
    const fromDate = document.getElementById('from-date').value;
    const toDate = document.getElementById('to-date').value;
    
    // Assuming you have a function to fetch and display the history
    filterHistory(fromDate, toDate);
});

function filterHistory(fromDate, toDate) {
    // Implement your logic to filter the history based on the dates
    console.log(`Filtering history from ${fromDate} to ${toDate}`);
    // Example: Fetch and display filtered history
}