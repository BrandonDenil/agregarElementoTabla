var contador=0;

function agregarTarea(){
	var texto=document.getElementById('txt_tarea').value;
	document.getElementById('txt_tarea').value="";
	var div=document.createElement("div"); 
	var btn=document.createElement("button");
	var txt = document.createTextNode("Eliminar");
	btn.appendChild(txt);
	div.insertBefore(btn,div.childNodes[0]);
	btn.setAttribute("class","btnEliminar");
	btn.setAttribute("onclick","eliminarTarea(this)");
	btn.setAttribute("id",String(contador));
	var textnode = document.createTextNode(texto);
  	div.appendChild(textnode);
  	div.setAttribute("id","div"+String(contador));
	var lista= document.getElementById('contenido'); 
	lista.insertBefore(div,lista.childNodes[0]); 
	contador++;
}
	
function eliminarTarea(comp)
{	
	var element= document.getElementById("div"+String(comp.id));	
	padre = element.parentNode;
	padre.removeChild(element);
}