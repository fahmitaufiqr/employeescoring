$(document).ready(function() {
    // inisialisasi variabel
    let btnSimpanPenilaian = $("#btnSimpanPenilaian");
    let role = "diri sendiri";
    let id_pegawai = "";
    let nilaiAkhir = 0;
    let q1Val = 0;
    let q2Val = 0;
    let q3Val = 0;
    let q4Val = 0;
    let q5Val = 0;
    let q6Val = 0;
    let q7Val = 0;
    let q8Val = 0;
    let q9Val = 0;
    let q10Val = 0;
    let q11Val = 0;
    let q12Val = 0;
    let q13Val = 0;
    let q14Val = 0;
    let q15Val = 0;
    let q16Val = 0;
    let q17Val = 0;
    let q18Val = 0;
    let q19Val = 0;
    let q20Val = 0;
    let q21Val = 0;
    let q22Val = 0;
    let bulan = "";
    let tahun = "";

   

    // function
    // simpan penilaian
    btnSimpanPenilaian.click(function(){
        // fungsi get id karyawan pada url
        const queryString = window.location.search;
        console.log(queryString);
        const urlParams = new URLSearchParams(queryString);
        const idDariUrl = urlParams.get('id-pegawai');
        console.log(idDariUrl, 'ini ID PEGAWAI');
        id_pegawai = "";
        role = "diri sendiri";

        setIdDanRoleUserPenilai(idDariUrl);
        q1Val = $("input[name='q1']:checked").val();
        q2Val = $("input[name='q2']:checked").val();
        q3Val = $("input[name='q3']:checked").val();
        q4Val = $("input[name='q4']:checked").val();
        q5Val = $("input[name='q5']:checked").val();
        q6Val = $("input[name='q6']:checked").val();
        q7Val = $("input[name='q7']:checked").val();
        q8Val = $("input[name='q8']:checked").val();
        q9Val = $("input[name='q9']:checked").val();
        q10Val = $("input[name='q10']:checked").val();
        q11Val = $("input[name='q11']:checked").val();
        q12Val = $("input[name='q12']:checked").val();
        q13Val = $("input[name='q13']:checked").val();
        q14Val = $("input[name='q14']:checked").val();
        q15Val = $("input[name='q15']:checked").val();
        q16Val = $("input[name='q16']:checked").val();
        q17Val = $("input[name='q17']:checked").val();
        q18Val = $("input[name='q18']:checked").val();
        q19Val = $("input[name='q19']:checked").val();
        q20Val = $("input[name='q20']:checked").val();
        q21Val = $("input[name='q21']:checked").val();
        q22Val = $("input[name='q22']:checked").val();
        bulan = $('#bulan :selected').val();
        tahun = $('#tahun :selected').val();
    
        //untuk ngambil data penilai yang login dari local storage
        let userData = JSON.parse(localStorage.getItem('userData'));

        let penilaian = {
            id_scoring: makeid(10),
            id_employee: idDariUrl,
            nama_penilai: userData.nama,
            id_penilai: id_penilai,
            role_penilai: role,
            bulan: bulan,
            tahun: tahun,
            q1_score: rumusPenilaian("q1", role, q1Val),
            q2_score: rumusPenilaian("q2", role, q2Val),
            q3_score: rumusPenilaian("q3", role, q3Val),
            q4_score: rumusPenilaian("q4", role, q4Val),
            q5_score: rumusPenilaian("q5", role, q5Val),
            q6_score: rumusPenilaian("q6", role, q6Val),
            q7_score: rumusPenilaian("q7", role, q7Val),
            q8_score: rumusPenilaian("q8", role, q8Val),
            q9_score: rumusPenilaian("q9", role, q9Val),
            q10_score: rumusPenilaian("q10", role, q10Val),
            q11_score: rumusPenilaian("q11", role, q11Val),
            q12_score: rumusPenilaian("q12", role, q12Val),
            q13_score: rumusPenilaian("q13", role, q13Val),
            q14_score: rumusPenilaian("q14", role, q14Val),
            q15_score: rumusPenilaian("q15", role, q15Val),
            q16_score: rumusPenilaian("q16", role, q16Val),
            q17_score: rumusPenilaian("q17", role, q17Val),
            q18_score: rumusPenilaian("q18", role, q18Val),
            q19_score: rumusPenilaian("q19", role, q19Val),
            q20_score: rumusPenilaian("q20", role, q20Val),
            q21_score: rumusPenilaian("q21", role, q21Val),
            q22_score: rumusPenilaian("q22", role, q22Val),
            qtotal_score: 0
        }
        console.log(penilaian);

        // fungsi tambah data ke firestore

        penilaian.qtotal_score = (penilaian.q1_score + penilaian.q2_score 
            + penilaian.q3_score + penilaian.q4_score + penilaian.q5_score 
            + penilaian.q6_score + penilaian.q7_score + penilaian.q8_score 
            + penilaian.q9_score + penilaian.q10_score + penilaian.q11_score 
            + penilaian.q12_score + penilaian.q13_score + penilaian.q14_score 
            + penilaian.q15_score + penilaian.q16_score + penilaian.q17_score 
            + penilaian.q18_score + penilaian.q19_score + penilaian.q20_score 
            + penilaian.q21_score + penilaian.q22_score)

        db.collection("scoring").doc(penilaian.id_scoring).set(penilaian)
        .then((docRef) => {
            alert("Data Berhasil Ditambahkan")
            history.back()
        })
        .catch((error) => {
            alert("Error, Data Gagal Ditambahkan")
            console.error("Error adding document: ", error);
        });
    })

    //rumus
    function rumusPenilaian(pertanyaan, role, nilai){
        
        console.log(nilaiAkhir, "nilai akhir luar sc bbb")
        console.log(nilai, role, pertanyaan, "ini isi rumus penilaian")
        console.log(nilaiAkhir, "nilai akhir luar sc aaa")
        nilaiAkhir = 0;
            console.log(nilaiAkhir, "nilai akhir luar sc")
        //penilaian berdasarkan role
        switch(role){
            case "Diri Sendiri":
                nilaiAkhir = nilai*0.12;
                console.log(nilaiAkhir, "nilai akhir dalam sc")
            break;
            case "Rekan Kerja":
                nilaiAkhir = nilai;
                console.log(nilaiAkhir, "nilai akhir dalam sc")
            break;
            case "Supervisor":
                nilaiAkhir = nilai*0.55;
                console.log(nilaiAkhir, "nilai akhir dalam sc")
            break;
        }
        console.log("random")

        console.log(nilaiAkhir, "ini nilai akhir")

        // penilaian berdasarkan pertanyaan
        switch(pertanyaan){
            case "q1":
                nilaiAkhir = nilaiAkhir*0.03;
            break;
            case "q2":
                nilaiAkhir = nilaiAkhir*0.05;
            break;
            case "q3":
                nilaiAkhir = nilaiAkhir*0.07;
            break;
            case "q4":
                nilaiAkhir = nilaiAkhir*0.02;
            break;
            case "q5":
                nilaiAkhir = nilaiAkhir*0.02;
            break;
            case "q6":
                nilaiAkhir = nilaiAkhir*0.06;
            break;
            case "q7":
                nilaiAkhir = nilaiAkhir*0.02;
            break;
            case "q8":
                nilaiAkhir = nilaiAkhir*0.03;
            break;
            case "q9":
                nilaiAkhir = nilaiAkhir*0.075;
            break;
            case "q10":
                nilaiAkhir = nilaiAkhir*0.075;
            break;
            case "q11":
                nilaiAkhir = nilaiAkhir*0.1;
            break;
            case "q12":
                nilaiAkhir = nilaiAkhir*0.03;
            break;
            case "q13":
                nilaiAkhir = nilaiAkhir*0.05;
            break;
            case "q14":
                nilaiAkhir = nilaiAkhir*0.04;
            break;
            case "q15":
                nilaiAkhir = nilaiAkhir*0.06;
            break;
            case "q16":
                nilaiAkhir = nilaiAkhir*0.05;
            break;
            case "q17":
                nilaiAkhir = nilaiAkhir*0.1;
            break;
            case "q18":
                nilaiAkhir = nilaiAkhir*0.02;
            break;
            case "q19":
                nilaiAkhir = nilaiAkhir*0.025;
            break;
            case "q20":
                nilaiAkhir = nilaiAkhir*0.025;
            break;
            case "q21":
                nilaiAkhir = nilaiAkhir*0.03;
            break;
            case "q22":
                nilaiAkhir = nilaiAkhir*0.02;
            break;
        }
        console.log(nilaiAkhir, "ini nilai akhir setelah diproses")
        return nilaiAkhir;
    }

    function setIdDanRoleUserPenilai(idDariUrlVal) {
        // Get Data Dari Localstorage
        let userData = JSON.parse(localStorage.getItem('userData'));
        
        console.log(userData, "Ini User Data");
        console.log(userData.id_key, "Ini User Data id KEY");

        // Isi variable idPenilai dari id_key userData
        id_penilai = userData.id_key ?? "-";

        // Set role Penilai berdasarkan ID dan jabatan
        if (id_penilai === idDariUrlVal) {
            role = "Diri Sendiri";
        } else if (id_penilai !== idDariUrlVal && userData.jabatan === 'Supervisor') {
            role = "Supervisor";
        } else {
            role = "Rekan Kerja";
        }        
        
        console.log(id_penilai, 'ini ID Penilai');
        console.log(role, 'ini Role');
    }

    function makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }
})