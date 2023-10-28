let fileInput = document.getElementById("fileUpload");

fileInput.addEventListener("change", (event)=>{
    const selectedFile = event.target.files[0];

    const maxFileLength = 10 * 1024 ;
    if (selectedFile.size > maxFileLength){
        alert("aba gandu choti file upload karna, mare pas server ka paise nai hei ")
        fileInput.value = "";
    }

})
