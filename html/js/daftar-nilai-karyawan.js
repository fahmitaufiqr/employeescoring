$(document).ready(function() { 
    let daftarNilai = $("#daftarNilai")
    let tbodyNilai = $("#tbodyDaftarNilaiKaryawan");
    let arrDaftarNilai = [];
    let arrRekanKerja = [];
    let daftarNilaiSeluruh = [];
    console.log(arrDaftarNilai.length, "isi Arr Daftar Nilai");

    // fungsi get id karyawan pada url
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    console.log(id, "here");

    //fungsi untuk get nama karyawan yang diklik
    db.collection("employee").where("id_key", "==", id).get().then(
        function(querySnapshot) {
            if(querySnapshot?.docs[0]?.data()){
                let dataKaryawan = querySnapshot?.docs[0]?.data()
                console.log(dataKaryawan, "ini data karyawan")
                daftarNilai.text("Daftar Nilai " + dataKaryawan.nama)
            }    
            // else{
            //     alert("Karyawan Tidak Ditemukan");
            // }
        }
    )

    

    db.collection("scoring").where("id_employee", "==", id).get().then(
        function(querySnapshot) {
            if(querySnapshot?.docs[0]?.data()){
                let listNilaiKaryawan = querySnapshot?.docs;
                console.log(listNilaiKaryawan)


                // menampilkan data ke ui
                let no = 1;
                inisiasiArray22();
                listNilaiKaryawan.map(dp => {
                    console.log(dp.data(),"ini listNilaiKaryawan")
                    let dataPenilai = dp.data();
                    mengisiArray(dataPenilai);
                });
                console.log(daftarNilaiSeluruh.length, "ini isi");
                daftarNilaiSeluruh.map(dns => {
                    let htmlString = 
                    `<tr>
                        <th scope="row">${no}</th>
                        <td>${dns.diriSendiri}</td>
                        <td>${dns.rekanKerja}</td>
                        <td>${dns.atasan}</td>
                    </tr>`;
                    no++;
                    tbodyNilai.append(htmlString);
                });
            }
        }
    )

    function inisiasiArray22() {
        for (let index = 0; index < 22; index++) {
            let roleDanNilai = {
                diriSendiri: 0,
                rekanKerja: 0,
                atasan: 0
            };
            daftarNilaiSeluruh.push(roleDanNilai);
        }
    }

    function mengisiArray(dataPenilai) {
        if (dataPenilai.role_penilai == "Diri Sendiri") {
            daftarNilaiSeluruh[0].diriSendiri = dataPenilai.q1_score;
            daftarNilaiSeluruh[1].diriSendiri = dataPenilai.q2_score;
            daftarNilaiSeluruh[2].diriSendiri = dataPenilai.q3_score;
            daftarNilaiSeluruh[3].diriSendiri = dataPenilai.q4_score;
            daftarNilaiSeluruh[4].diriSendiri = dataPenilai.q5_score;
            daftarNilaiSeluruh[5].diriSendiri = dataPenilai.q6_score;
            daftarNilaiSeluruh[6].diriSendiri = dataPenilai.q7_score;
            daftarNilaiSeluruh[7].diriSendiri = dataPenilai.q8_score;
            daftarNilaiSeluruh[8].diriSendiri = dataPenilai.q9_score;
            daftarNilaiSeluruh[9].diriSendiri = dataPenilai.q10_score;
            daftarNilaiSeluruh[10].diriSendiri = dataPenilai.q11_score;
            daftarNilaiSeluruh[11].diriSendiri = dataPenilai.q12_score;
            daftarNilaiSeluruh[12].diriSendiri = dataPenilai.q13_score;
            daftarNilaiSeluruh[13].diriSendiri = dataPenilai.q14_score;
            daftarNilaiSeluruh[14].diriSendiri = dataPenilai.q15_score;
            daftarNilaiSeluruh[15].diriSendiri = dataPenilai.q16_score;
            daftarNilaiSeluruh[16].diriSendiri = dataPenilai.q17_score;
            daftarNilaiSeluruh[17].diriSendiri = dataPenilai.q18_score;
            daftarNilaiSeluruh[18].diriSendiri = dataPenilai.q19_score;
            daftarNilaiSeluruh[19].diriSendiri = dataPenilai.q20_score;
            daftarNilaiSeluruh[20].diriSendiri = dataPenilai.q21_score;
            daftarNilaiSeluruh[21].diriSendiri = dataPenilai.q22_score;
        }
        if (dataPenilai.role_penilai == "Atasan") {
            daftarNilaiSeluruh[0].atasan = dataPenilai.q1_score;
            daftarNilaiSeluruh[1].atasan = dataPenilai.q2_score;
            daftarNilaiSeluruh[2].atasan = dataPenilai.q3_score;
            daftarNilaiSeluruh[3].atasan = dataPenilai.q4_score;
            daftarNilaiSeluruh[4].atasan = dataPenilai.q5_score;
            daftarNilaiSeluruh[5].atasan = dataPenilai.q6_score;
            daftarNilaiSeluruh[6].atasan = dataPenilai.q7_score;
            daftarNilaiSeluruh[7].atasan = dataPenilai.q8_score;
            daftarNilaiSeluruh[8].atasan = dataPenilai.q9_score;
            daftarNilaiSeluruh[9].atasan = dataPenilai.q10_score;
            daftarNilaiSeluruh[10].atasan = dataPenilai.q11_score;
            daftarNilaiSeluruh[11].atasan = dataPenilai.q12_score;
            daftarNilaiSeluruh[12].atasan = dataPenilai.q13_score;
            daftarNilaiSeluruh[13].atasan = dataPenilai.q14_score;
            daftarNilaiSeluruh[14].atasan = dataPenilai.q15_score;
            daftarNilaiSeluruh[15].atasan = dataPenilai.q16_score;
            daftarNilaiSeluruh[16].atasan = dataPenilai.q17_score;
            daftarNilaiSeluruh[17].atasan = dataPenilai.q18_score;
            daftarNilaiSeluruh[18].atasan = dataPenilai.q19_score;
            daftarNilaiSeluruh[19].atasan = dataPenilai.q20_score;
            daftarNilaiSeluruh[20].atasan = dataPenilai.q21_score;
            daftarNilaiSeluruh[21].atasan = dataPenilai.q22_score;
        }
        if (dataPenilai.role_penilai == "Rekan Kerja") {
            arrRekanKerja.push(dataPenilai);
            avgNilaiRekan();
        }
    }

    function avgNilaiRekan() {
        let q1_total = 0;
        let q2_total = 0;
        arrRekanKerja.map(rk => {
            q1_total = q1_total + rk.q1_score;
            q2_total = q2_total + rk.q2_score;
        })
        arrRekanKerja.map(rk => {
            q1_total = q1_total/arrRekanKerja.length;
            q2_total = q2_total/arrRekanKerja.length;
        })
    }
})