function onLogin() {
  // Memeriksa apakah kedua input telah diisi
  if (!usernameInput.value || !passwordInput.value) {
    alert("Silakan isi kedua field username dan password.");
    return; // Menghentikan eksekusi jika salah satu input kosong
  }

  localStorage.setItem("username", usernameInput.value);
  logoutButton.style.display = "block"; // Menampilkan tombol logout setelah login berhasil
  if (usernameInput.value == "admin" && passwordInput.value == "admin123") {
    localStorage.setItem("role", "admin");
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    loginButton.style.display = "none";
    basicText.style.display = "none";
    adminText.style.display = "block"; // Menampilkan teks untuk admin setelah login berhasil
  } else if (
    usernameInput.value == "manager" &&
    passwordInput.value == "manager123"
  ) {
    localStorage.setItem("role", "manager");
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    loginButton.style.display = "none";
    basicText.style.display = "none";
    managerText.style.display = "block"; // Menampilkan teks untuk manager setelah login berhasil
  } else if (
    usernameInput.value == "operator" &&
    passwordInput.value == "operator123"
  ) {
    localStorage.setItem("role", "operator");
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    loginButton.style.display = "none";
    basicText.style.display = "none";
    operatorText.style.display = "block"; // Menampilkan teks untuk operator setelah login berhasil
  } else {
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    loginButton.style.display = "none";
    localStorage.setItem("role", "basic");
    adminText.style.display = "none";
    managerText.style.display = "none";
    operatorText.style.display = "none";
    basicText.innerText = "LOGIN SEBAGAI " + usernameInput.value; // Menampilkan teks untuk user biasa setelah login berhasil
    basicText.style.display = "block";
  }
}
function onLogout() {
  localStorage.removeItem("username");
  localStorage.removeItem("role");
  usernameInput.value = ""; // Mengosongkan nilai input username
  passwordInput.value = ""; // Mengosongkan nilai input password
  logoutButton.style.display = "none"; // Menyembunyikan tombol logout setelah logout berhasil
  usernameInput.style.display = "block"; // Menampilkan kembali input username
  passwordInput.style.display = "block"; // Menampilkan kembali input password
  loginButton.style.display = "block"; // Menampilkan kembali tombol login
  adminText.style.display = "none"; // Menyembunyikan teks admin
  managerText.style.display = "none"; // Menyembunyikan teks manager
  operatorText.style.display = "none"; // Menyembunyikan teks operator
  basicText.style.display = "none"; // Menyembunyikan teks user biasa
}
