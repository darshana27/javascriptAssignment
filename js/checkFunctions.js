fname=document.getElementById("fname").value;
lname=document.getElementById("lname").value;
	function isName(){
	console.log("is name");
	fname=document.getElementById("fname").value;
	// document.getElementById("ErrFname").style.display="none";
	if(fname.length<1){
		document.getElementById("ErrFname").style.display="block";
		document.getElementById("ErrFname").innerHTML="First Name should not be empty";
		// alert("Please fill in your first name.");
    }
    else{
		document.getElementById("ErrFname").style.display="none";
	}
	if(fname.match(/[0-9]/g)){
		document.getElementById("ErrFname").style.display="block";
		document.getElementById("ErrFname").innerHTML="First Name must not contain numbers";
    }
    else{
		document.getElementById("ErrFname").style.display="none";
	}
    if(lname.length<1){
		document.getElementById("ErrLname").style.display="block";
		document.getElementById("ErrLname").innerHTML="Last Name should not be empty";
		// alert("Please fill in your first name.");
	}
	if(lname.match(/[0-9]/g)){
		document.getElementById("ErrLname").style.display="block";
		document.getElementById("ErrLname").innerHTML="Last Name must not contain numbers";
	}
}
phno=document.getElementById("phno").value;

function isPhone(){
    if(phno.length<1){
        document.getElementById("ErrPhone").style.display="block";
        document.getElementById("ErrFname").innerHTML="Phone field should not be empty";
    }
}