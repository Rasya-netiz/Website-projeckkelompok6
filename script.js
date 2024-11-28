// Menambahkan interaksi di form pembelian (contoh menggunakan alert)
const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Terima kasih telah memesan! Kami akan segera menghubungi Anda.");
    });
}