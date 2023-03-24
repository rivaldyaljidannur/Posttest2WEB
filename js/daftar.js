// Fungsi simpan data pada session storage
function simpan(){
    // clearing session storage
    sessionStorage.clear()
    
    const userInputNama = document.getElementById('nama');
    const userInputEmail = document.getElementById('email');
    const userInputCheckbox = document.getElementsByName('checkbox');
    const userInputAlamat = document.getElementById('alamat');
    const userInputRadio = document.querySelector('input[name="radio"]:checked');  
    
    
    
    const nama = JSON.parse(sessionStorage.getItem("nama")) || [];
    const email = JSON.parse(sessionStorage.getItem("email")) || [];
    const checkbox = JSON.parse(sessionStorage.getItem("checkbox")) || [];
    const alamat = JSON.parse(sessionStorage.getItem("alamat")) || [];
    const radio = JSON.parse(sessionStorage.getItem("radio")) || [];

   

      // push 
      nama.push(userInputNama.value);
      sessionStorage.setItem("nama", JSON.stringify(nama))
      
     
      email.push(userInputEmail.value);
      sessionStorage.setItem("email", JSON.stringify(email))
      
     
      alamat.push(userInputAlamat.value);
      sessionStorage.setItem("alamat", JSON.stringify(alamat))
      
      
    
      radio.push(userInputRadio.value);
      sessionStorage.setItem("radio", JSON.stringify(radio))
      
        
      for (var i=0; i<userInputCheckbox.length; i++) {
          if (userInputCheckbox[i].checked) {
              checkbox.push(userInputCheckbox[i].value);
          }
      }
      sessionStorage.setItem("checkbox", JSON.stringify(checkbox));
}