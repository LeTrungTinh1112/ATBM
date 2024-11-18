function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

function filterTransactions() {
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
    } else {
        alert("Vui lòng nhập đầy đủ thông tin!");
    }
}

function logout() {
    alert("Đăng xuất thành công.");
}
function addNewCustomer(idForm) {
    showPopup(idForm);
}
function showPopup(idForm) {
    const form = document.getElementById(idForm);
    form.style.display = "flex";

    window.onclick = function(event) {
        if (event.target === form) {
            closePopup(idForm);
        }
    };
}

function closePopup(idForm) {
    document.getElementById(idForm).style.display = "none";
    window.onclick = null; 
}
