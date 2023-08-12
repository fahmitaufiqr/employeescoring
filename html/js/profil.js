
$(document).ready(function() {
    let formNip = $("#formNip");
    let formNama = $("#formNama");
    let formJabatan = $("#formJabatan");
    let formGantiPassword = $("#formGantiPassword");
    let formPassword = $("#formPassword");
    let pagesProfilId = $("#pagesProfilId");

    // fungsi get id karyawan pada url
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const idDariUrl = urlParams.get('id');

    formGantiPassword.click(function(){
        console.log(formGantiPassword.prop('checked'));
        if (formGantiPassword.prop('checked')) {
            formPassword.attr("disabled", false);
        } else{
            formPassword.attr("disabled", true);
        }
    })

    pagesProfileSetId();
    
    db.collection("employee").doc(idDariUrl).get().then((doc) => {
        let dataKaryawan = doc.data();

        formNip.val(dataKaryawan.nip);
        formNama.val(dataKaryawan.nama);
        formJabatan.val(dataKaryawan.jabatan);
        
        
    });

    function pagesProfileSetId() {
        console.log(pagesProfilId)
        let userData = JSON.parse(localStorage.getItem('userData'));
        console.log(userData, pagesProfilId)
        // Isi variable idPenilai dari id_key userData
        let idUser = userData.id_key ?? "-";

        pagesProfilId.attr("href", "pages-profile.html?id=" + idUser)
    }
})