document.getElementById("htmlCode").value="<div>\n\n</div>";
document.getElementById("cssCode").value="<style>\n\n</style>";
document.getElementById("jsCode").value="<script>\n\n</script>";

function showPreview(){
    var htmlCode = document.getElementById("htmlCode").value;
    var cssCode = ""+document.getElementById("cssCode").value+"";
    var jsCode = ""+document.getElementById("jsCode").value+"";
    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode+cssCode+jsCode);
    frame.close();
}

function show(x){
    document.getElementById("html").style.display="none";
    document.getElementById("css").style.display="none";
    document.getElementById("js").style.display="none";
    document.getElementById("result").style.display="none";
    document.getElementById(x).style.display="block";
}

function show_all(){
    if(window.innerWidth>=992)
    {
        document.getElementById("html").style.display="block";
        document.getElementById("css").style.display="block";
        document.getElementById("js").style.display="block";
        document.getElementById("result").style.display="block";
    }
    if(window.innerWidth<992 && document.getElementById("html").style.display=="block")
    {
        document.getElementById("css").style.display="none";
        document.getElementById("js").style.display="none";
        document.getElementById("result").style.display="none";
    }
}

let htmlCode = document.querySelector("#htmlCode");
let cssCode = document.querySelector("#cssCode");
let jsCode = document.querySelector("#jsCode");

htmlCode.value = localStorage.getItem("notes");
cssCode.value = localStorage.getItem("input");
jsCode.value = localStorage.getItem("data");

let cancel
htmlCode.addEventListener("keyup", event =>{
if (cancel) clearTimeout(cancel)
cancel = setTimeout(() =>{
}, 1000)
localStorage.setItem("notes", event.target.value)
})
cssCode.addEventListener("keyup", e =>{
if (cancel) clearTimeout(cancel)
cancel = setTimeout(() =>{
}, 1000)
localStorage.setItem("input", cssCode.value)
})

jsCode.addEventListener("keyup", event =>{
if (cancel) clearTimeout(cancel)
cancel = setTimeout(() =>{
}, 1000)
localStorage.setItem("data", event.target.value)
})



const htmlCode1 = document.getElementById('htmlCode');
const statusText = document.getElementById('status');
const saveButton = document.getElementById('save-button');

let savedText = localStorage.getItem('text');
if (savedText) {
  htmlCode1.value = savedText;
}

function save() { 
// Save the contents of the textarea using an API call
  console.log(htmlCode1.value);
  localStorage.setItem('text', htmlCode1.value);
  statusText.textContent = 'Saved';
}

let timeout; htmlCode1.addEventListener('input', () => {
  statusText.textContent = 'Unsaved changes';
  clearTimeout(timeout);
  timeout = setTimeout(save, 1000);
});

saveButton.addEventListener('click', save);