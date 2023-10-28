let fileInput = document.getElementById("fileUpload");

fileInput.addEventListener("change", (event)=>{
    const selectedFile = event.target.files[0];

    const maxFileLength = 10 * 1024 ;
    if (selectedFile.size > maxFileLength){
        alert("The file is tooo large for our server, please select small one")
        fileInput.value = "";
    }

})
