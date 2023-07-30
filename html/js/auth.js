// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAn5cGXmyXJHdSUZVWOL1Ryt0HWPqRM9l0",
    authDomain: "employeescoring.firebaseapp.com",
    projectId: "employeescoring",
    storageBucket: "employeescoring.appspot.com",
    messagingSenderId: "225061859032",
    appId: "1:225061859032:web:4381c216172f26c1d6f1ad",
    measurementId: "G-CRSPJVM0NT"
};
  
// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

$(document).ready(function() {
    cekDataLogin();


    // console.log(db); 
    let username = $("#username");
    let password = $("#password");
    let btnSign = $("#btn-sign");
    
    //fungsi login
    btnSign.click(function(){
        console.log("click login")
        db.collection("employee").where("nip", "==", username.val()).get().then(
            function(querySnapshot) {
                if(querySnapshot?.docs[0]?.data()){
                    let dataPertama = querySnapshot.docs[0].data();

                    let nip = username.val();
                    let md5Password = md5(password.val());

                    if(md5Password == dataPertama.password && nip == dataPertama.nip) {
                        localStorage.setItem("userData", JSON.stringify(dataPertama))

                        window.location.href = 'pages-profile.html?id=' + dataPertama.id_key;
                        console.log(md5Password, nip)
                    } else {
                        alert("username atau password salah");
                    }
                }    
                else{
                    alert("username atau password salah");
                }
            }
        )
    })

    //fungsi logout
    $(document).ready(function() {
        let logout = $("#btnLogout")
    
        logout.click(function(){
            localStorage.removeItem("userData");
            window.location.href = 'login.html';
        })
    })
})

function cekDataLogin() {
    let currentUrl = window.location.pathname;
    let dataLocal = localStorage.getItem("userData");
    console.log("dataLocal", dataLocal);

    //auto login
    if (dataLocal != null && currentUrl.includes("login.html")) {
        window.location.href = "pages-profile.html";       
    }

    //auto logout
    if (dataLocal == null && !currentUrl.includes("login.html")) {
        window.location.href = 'login.html';
    }
}