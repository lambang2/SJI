document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdownMenu = dropdownToggle.nextElementSibling;
    const dropdownParent = dropdownToggle.parentElement;

    dropdownToggle.addEventListener("click", function (event) {
        event.preventDefault();
        
        // Tutup dropdown lain jika ada yang terbuka
        document.querySelectorAll(".dropdown").forEach((dropdown) => {
            if (dropdown !== dropdownParent) {
                dropdown.classList.remove("active");
            }
        });

        // Toggle menu yang diklik
        dropdownParent.classList.toggle("active");
    });

    // Klik di luar dropdown untuk menutupnya
    document.addEventListener("click", function (event) {
        if (!dropdownParent.contains(event.target)) {
            dropdownParent.classList.remove("active");
        }
    });
});
