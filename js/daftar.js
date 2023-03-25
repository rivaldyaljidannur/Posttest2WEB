// Fungsi simpan data pada session storage
function simpan(){
    // clearing session storage
    sessionStorage.clear()
    
    const userInputNama = document.getElementById('nama');
    const userInputEmail = document.getElementById('email');
    const userInputCheckbox = document.getElementsByName('checkbox');
    const userInputAlamat = document.getElementById('alamat');
    const userInputRadio = document.querySelector('input[name="radio"]:checked');  
    
    
    
    let nama = sessionStorage.getItem("nama");
    let email = sessionStorage.getItem("email");
    let checkbox = sessionStorage.getItem("checkbox") || [];
    let alamat = sessionStorage.getItem("alamat");
    let radio = sessionStorage.getItem("radio");

      // push 
      nama = userInputNama.value || nama;
      
     
      email = userInputEmail.value || email;
      
     
      alamat = userInputAlamat.value || alamat;
      
      
    
      radio = userInputRadio.value || radio;
      
        
      for (var i=0; i<userInputCheckbox.length; i++) {
          if (userInputCheckbox[i].checked) {
              checkbox.push(userInputCheckbox[i].value);
          }
      }

      let data ={
        'Nama': nama,
        'Email': email,
        'Pilih Bidang' : checkbox,
        'Alamat' : alamat,
        'Pendidikan Terakhir' : radio
       }

       sessionStorage.setItem("data", JSON.stringify(data));
}