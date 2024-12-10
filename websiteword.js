

document.getElementById('button').addEventListener('click', ()=>{
    const name = document.getElementById('websitewordo').value;
    const place = document.getElementById('country').value;
    if (name!=''){
        alert('Hello '+name+' from '+place);
    }
    else{
        alert("IS BRO NAMELESS?");
    }
});