// Function untuk menampilkan dialog konfirmasi
function showConfirmationDialog() {
    // Menyimpan menu yang aktif sebelum dialog muncul
    previousActiveMenu = document.querySelector('.topnav a.active');
    document.getElementById("confirmationDialog").style.display = "flex";
}

// Function untuk membatalkan dialog dan mengatur kembali menu yang aktif sebelumnya
function cancelConfirmation() {
    hideConfirmationDialog();
    // Mengatur kembali menu yang aktif ke menu "Tema"
    var temaMenu = document.querySelector('.topnav a[href="javascript:void(0);"]');
    setActive(temaMenu);
}

// Function untuk menyembunyikan dialog konfirmasi
function hideConfirmationDialog() {
    document.getElementById("confirmationDialog").style.display = "none";
}

// Function untuk mengarahkan pengguna ke halaman blog
function redirectToBlog() {
    window.location.href = "https://games.haxorai.com";
}
