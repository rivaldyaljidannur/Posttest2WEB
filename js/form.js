form()
function form(){
    const nama = JSON.parse(sessionStorage.getItem("nama")) || [];
    const email = JSON.parse(sessionStorage.getItem("email")) || [];
    const checkbox = JSON.parse(sessionStorage.getItem("checkbox")) || [];
    const alamat = JSON.parse(sessionStorage.getItem("alamat")) || [];
    const radio = JSON.parse(sessionStorage.getItem("radio")) || [];
    
    const userInputNama = document.getElementById('nama_form');
    const userInputEmail = document.getElementById('email_form');
    const userInputCheckbox = document.getElementById('checkbox_form');
    const userInputAlamat = document.getElementById('alamat_form');
    const userInputRadio = document.getElementById('radio_form');  

    userInputNama.innerHTML =     "Nama Lengkap                             : " + nama;
    userInputEmail.innerHTML =    "Email                                    : " + email;
    userInputCheckbox.innerHTML = "Pilih Bidang                             : " + checkbox;
    userInputAlamat.innerHTML =   "Alamat                                   : " + alamat;
    userInputRadio.innerHTML =    "Pendidikan Terakhir                      : " + radio;

}
  
