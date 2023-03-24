const login = document.querySelector('.login'); 
login.onclick = (e) => {
  e.preventDefault();
  const emailAddress = document.getElementById("emailAddress").value;
  const passWord = document.getElementById("passWord").value;

  // ngambil nilai array dari localstorage
  const users = JSON.parse(localStorage.getItem("users"));

  //Periksa apakah array users ada dan tidak kosong
  if (users && users.length) {
    // Melakukan perulangan pada array 
    for (let i = 0; i < users.length; i++) {
      if (emailAddress == users[i].email && passWord == users[i].password) {
        localStorage.setItem("username-logged-in", users[i].firstName)
        window.location.href="Beranda.html";
        alert("Berhasil Login");
        return; 
      }
    }
  }
  

  // jika salah penginputan
  alert("Masukkan email dan password dengan benar");
}
