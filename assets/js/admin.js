function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    showSection('customer');
});
const transactions = [
    {
        id: "GD001",
        senderPhone: "0123456789",
        senderName: "Nguyen Van A",
        receiverPhone: "0987654321",
        receiverName: "Le Thi B",
        amount: 1000000,
        feeType: "Free",
        date: "2024-10-29"
    },
    {
        id: "GD002",
        senderPhone: "0123456789",
        senderName: "Nguyen Van A",
        receiverPhone: "0912345678",
        receiverName: "Tran Van C",
        amount: 500000,
        feeType: "Free",
        date: "2024-10-30"
    },
];

function displayTransactions(data) {
    const tbody = document.getElementById("transactionTableBody");
    tbody.innerHTML = "";
    data.forEach(transaction => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${transaction.id}</td>
            <td>${transaction.senderPhone}</td>
            <td>${transaction.senderName}</td>
            <td>${transaction.receiverPhone}</td>
            <td>${transaction.receiverName}</td>
            <td>${transaction.amount}</td>
            <td>${transaction.feeType}</td>
            <td>${transaction.date}</td>
        `;
        tbody.appendChild(row);
    });
}

function filterTransactions() {
    const senderPhone = document.getElementById("senderPhone").value;
    const transactionDate = document.getElementById("transactionDate").value;
    const filteredTransactions = transactions.filter(transaction => {
        const matchesPhone = senderPhone ? transaction.senderPhone.includes(senderPhone) : true;
        const matchesDate = transactionDate ? transaction.date === transactionDate : true;
        return matchesPhone && matchesDate;
    });
    displayTransactions(filteredTransactions);
}

function resetFilters() {
    document.getElementById("senderPhone").value = "";
    document.getElementById("transactionDate").value = "";
    displayTransactions(transactions);
}

document.addEventListener('DOMContentLoaded', () => {
    displayTransactions(transactions);
});
function logout() {
    alert("Bạn đã đăng xuất thành công!");
    window.location.href = "login.html";
}

function editPassword() {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    const changePasswordSection = document.getElementById('change-password-section');
    changePasswordSection.style.display = 'block';
}
function handleUserDetailsHover(userDetails) {
    const userDetailsContainer = document.querySelector('.user-details-container'); 
    userDetailsContainer.addEventListener('mouseenter', () => {
        userDetails.classList.add('hovered');
    });
    userDetailsContainer.addEventListener('mouseleave', () => {
        userDetails.classList.remove('hovered');
    });
    document.addEventListener('click', (event) => {
        if (!userDetailsContainer.contains(event.target)) {
            userDetails.classList.remove('hovered');
        }
    });
}

function initUserDetails() {
    const userDetails = document.getElementById('userDetails');
    handleUserDetailsHover(userDetails);
}
document.addEventListener('DOMContentLoaded', initUserDetails);

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

function addNewCustomer(idForm) {
    showPopup(idForm);
}
