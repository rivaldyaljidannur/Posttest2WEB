form()
function form(){
    let data = sessionStorage.getItem("data");
    data = JSON.parse(data);
    const nama = data['Nama'];
    const email = data['Email'];
    const checkbox = data['Pilih Bidang'];
    const alamat = data['Alamat'];
    const radio = data['Pendidikan Terakhir'];
    
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
  
