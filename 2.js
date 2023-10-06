function fil(){
    const filtragem = document.getElementById("filtragem").value.toLowerCase();
    const lista = document.getElementsByTagName("li");

    for (const li of lista) {
      if(filtragem == ""){
          li.style.font = 'normal';
          li.style.display = 'block';
      }
       else if(li.innerText.toLowerCase().startsWith(filtragem)){
        li.style.fontWeight = 'bold';
      }else{
        li.style.display = `none`;
      }
    }
  }