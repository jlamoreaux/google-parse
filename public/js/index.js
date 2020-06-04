const $ = (elem) => {
  return document.querySelector(elem);
};

const fileUpload = $("#file__upload");
const fileUploadLabel = fileUpload.nextElementSibling;
console.log(fileUploadLabel);

const handleFile = (file) => {
    console.log(file.name);
    console.log(fileUpload);
    const allowedExtensions = /(\.json|\.JSON)$/i;
    if (!file.name.toLowerCase().endsWith('.json')) {
      alert("Invalid file type");
      fileUpload.value = "";
      return false;
    }
  
  fileUploadLabel.innerHTML = file.name;
};

const onUploadFile = () => handleFile(fileUpload.files[0]);


fileUpload.addEventListener("change", onUploadFile);