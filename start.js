
export function  uyariVer(){
	
let cvp=prompt("Cevabınız Ne ?","Cevap Yok");
	
	 if(cvp)alert(cvp);
	 else {
		 
		 (confirm("Cevap Vermeyecek Misiniz ?")?alert("Yeniden Bekleriz"):uyarıVer());
		
	
	 }
	
}


export function say(){return ""}