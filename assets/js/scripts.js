function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function filterTransactions() {
    // Thực hiện logic lọc lịch sử giao dịch
    alert("Đang lọc lịch sử giao dịch...");
}

function resetFilters() {
    document.getElementById("searchPhone").value = "";
    document.getElementById("searchDate").value = "";
    filterTransactions();
}

function processTopUp() {
    const phoneNumber = document.getElementById("phoneNumber").value;
    const amount = document.getElementById("amount").value;
    
    if (phoneNumber && amount) {
        alert(`Đã nạp ${amount} VNĐ vào số điện thoại ${phoneNumber}`);
        // Thêm logic xử lý nạp tiền
    } else {
        alert("Vui lòng nhập đầy đủ thông tin!");
    }
}

function logout() {
    // Logic đăng xuất
    alert("Đăng xuất thành công.");
}
