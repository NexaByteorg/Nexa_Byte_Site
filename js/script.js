
document.getElementById("submit-btn").style.display = "none";
document.getElementById("loder").style.display = "none";
document.getElementById("thanks_msg").style.display = "none";


document.querySelector("form").addEventListener("input", () => {

    if (document.getElementById("inputName4").value.trim() != "" && document.getElementById("inputEmail4").value.trim() != "" && document.getElementById("inputNumber4").value.trim() != "" && document.getElementById("inputState").value.trim() != "" && document.getElementById("inputMessage").value.trim() != "") {

        document.getElementById("submit-btn").style.display = "block";


    }
    else {
        document.getElementById("submit-btn").style.display = "none";

    }


})


function submit_btn() {

    document.getElementById("submit-btn").style.display = "none";
    document.getElementById("loder").style.display = "block";

    setTimeout(() => {
        document.getElementById("inputName4").value = "";
        document.getElementById("inputEmail4").value = "";
        document.getElementById("inputNumber4").value = "";
        document.getElementById("inputState").value = "";
        document.getElementById("inputMessage").value = "";

        document.getElementById("loder").style.display = "none";
        document.getElementById("thanks_msg").style.display = "block";
        document.getElementById("thanks_msg").innerText = `Thank You`;

    }, 3000);

    setTimeout(() => {
        document.getElementById("thanks_msg").style.display = "none";
    }, 10000);


}



// ===========================================================================

function page_show(id) {

    document.getElementsByClassName("nav-link")[0].style.color = "";
    document.getElementsByClassName("nav-link")[1].style.color = "";
    document.getElementsByClassName("nav-link")[2].style.color = "";
    document.getElementsByClassName("nav-link")[3].style.color = "";


    document.getElementsByClassName("nav-link")[id].style.color = "yellow";


}


function nav_close() {

    if (document.getElementById("checkbox").checked == true) {


        document.getElementById("chechboxlabel").click();
    }
}

