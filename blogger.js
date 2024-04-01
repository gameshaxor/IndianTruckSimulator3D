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

// Membuat elemen <style> baru
let styleElement = document.createElement('style');

// Menambahkan aturan gaya ke dalam elemen <style>
styleElement.textContent = '.dialog-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);display:flex;justify-content:center;align-items:center;z-index:9999}.dialog-box{background-color:#fff;padding:20px;border-radius:8px;box-shadow:0 0 10px rgba(0,0,0,.3);text-align:center;max-width:345px}.dialog-buttons button{margin:0 10px;padding:8px 20px;border:none;border-radius:4px;cursor:pointer}.dialog-buttons button.ok{background-color:#4caf50;color:#fff}.dialog-buttons button.cancel{background-color:#f44336;color:#fff}.notification-image{max-width:300px;border-radius:10px;margin-bottom:10px}';

// Menambahkan elemen <style> ke dalam elemen <head> di dalam dokumen
document.head.appendChild(styleElement);
