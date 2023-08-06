$(document).ready(function() { 
    let daftarNilai = $("#daftarNilai")
    let tbodyNilai = $("#tbodyDaftarNilaiKaryawan");
    let arrDaftarNilai = [];
    let arrRekanKerja = [];
    let daftarNilaiSeluruh = [];
    console.log(arrDaftarNilai.length, "isi Arr Daftar Nilai");

    
    let q1_total = 0;
    let q2_total = 0;
    let q3_total = 0;
    let q4_total = 0;
    let q5_total = 0;
    let q6_total = 0;
    let q7_total = 0;
    let q8_total = 0;
    let q9_total = 0;
    let q10_total = 0;
    let q11_total = 0;
    let q12_total = 0;
    let q13_total = 0;
    let q14_total = 0;
    let q15_total = 0;
    let q16_total = 0;
    let q17_total = 0;
    let q18_total = 0;
    let q19_total = 0;
    let q20_total = 0;
    let q21_total = 0;
    let q22_total = 0;

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
                    console.log(dp.data(),"ini total listNilaiKaryawan")
                    let dataPenilai = dp.data();
                    mengisiArray(dataPenilai);
                });
                console.log(arrRekanKerja)
                totalNilaiRekan();
                avgNilaiRekan();
                console.log(daftarNilaiSeluruh.length, "ini isi");
                daftarNilaiSeluruh.map(dns => {
                    let htmlString = 
                    `<tr>
                        <th scope="row">${no}</th>
                        <td>${dns.diriSendiri}</td>
                        <td>${dns.atasan}</td>
                        <td>${dns.rekanKerja}</td>
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
            daftarNilaiSeluruh[0].rekanKerja = q1_total;
            daftarNilaiSeluruh[1].rekanKerja = q2_total;
            daftarNilaiSeluruh[2].rekanKerja = q3_total;
            daftarNilaiSeluruh[3].rekanKerja = q4_total;
            daftarNilaiSeluruh[4].rekanKerja = q5_total;
            daftarNilaiSeluruh[5].rekanKerja = q6_total;
            daftarNilaiSeluruh[6].rekanKerja = q7_total;
            daftarNilaiSeluruh[7].rekanKerja = q8_total;
            daftarNilaiSeluruh[8].rekanKerja = q9_total;
            daftarNilaiSeluruh[9].rekanKerja = q10_total;
            daftarNilaiSeluruh[10].rekanKerja = q11_total;
            daftarNilaiSeluruh[11].rekanKerja = q12_total;
            daftarNilaiSeluruh[12].rekanKerja = q13_total;
            daftarNilaiSeluruh[13].rekanKerja = q14_total;
            daftarNilaiSeluruh[14].rekanKerja = q15_total;
            daftarNilaiSeluruh[15].rekanKerja = q16_total;
            daftarNilaiSeluruh[16].rekanKerja = q17_total;
            daftarNilaiSeluruh[17].rekanKerja = q18_total;
            daftarNilaiSeluruh[18].rekanKerja = q19_total;
            daftarNilaiSeluruh[19].rekanKerja = q20_total;
            daftarNilaiSeluruh[20].rekanKerja = q21_total;
            daftarNilaiSeluruh[21].rekanKerja = q22_total;


        }
    }

    function totalNilaiRekan() {
        console.log(q1_total, "ini q1 total hitungadas", arrRekanKerja.length)
        arrRekanKerja.map(rk => {
            console.log(q1_total, "ini q1 total hitungadaasdsas", arrRekanKerja.length)
            q1_total = q1_total + rk.q1_score;
            console.log(q1_total, "ini q1 total hitung")
            q2_total = q2_total + rk.q2_score;
            q3_total = q3_total + rk.q3_score;
            q4_total = q4_total + rk.q4_score;
            q5_total = q5_total + rk.q5_score;
            q6_total = q6_total + rk.q6_score;
            q7_total = q7_total + rk.q7_score;
            q8_total = q8_total + rk.q8_score;
            q9_total = q9_total + rk.q9_score;
            q10_total = q10_total + rk.q10_score;
            q11_total = q11_total + rk.q11_score;
            q12_total = q12_total + rk.q12_score;
            q13_total = q13_total + rk.q13_score;
            q14_total = q14_total + rk.q14_score;
            q15_total = q15_total + rk.q15_score;
            q16_total = q16_total + rk.q16_score;
            q17_total = q17_total + rk.q17_score;
            q18_total = q18_total + rk.q18_score;
            q19_total = q19_total + rk.q19_score;
            q20_total = q20_total + rk.q20_score;
            q21_total = q21_total + rk.q21_score;
            q22_total = q22_total + rk.q22_score;
        })

    }

    function avgNilaiRekan() {
        console.log(q1_total, "ini q1 tot", arrRekanKerja.length);
        let rkPersenNilai = 0.33;
        q1_total = q1_total*rkPersenNilai/arrRekanKerja.length;
        console.log(q1_total, "ini q1 tot setelah");
        q2_total = q2_total*rkPersenNilai/arrRekanKerja.length;
        q3_total = q3_total*rkPersenNilai/arrRekanKerja.length;
        q4_total = q4_total*rkPersenNilai/arrRekanKerja.length;
        q5_total = q5_total*rkPersenNilai/arrRekanKerja.length;
        q6_total = q6_total*rkPersenNilai/arrRekanKerja.length;
        q7_total = q7_total*rkPersenNilai/arrRekanKerja.length;
        q8_total = q8_total*rkPersenNilai/arrRekanKerja.length;
        q9_total = q9_total*rkPersenNilai/arrRekanKerja.length;
        q10_total = q10_total*rkPersenNilai/arrRekanKerja.length;
        q11_total = q11_total*rkPersenNilai/arrRekanKerja.length;
        q12_total = q12_total*rkPersenNilai/arrRekanKerja.length;
        q13_total = q13_total*rkPersenNilai/arrRekanKerja.length;
        q14_total = q14_total*rkPersenNilai/arrRekanKerja.length;
        q15_total = q15_total*rkPersenNilai/arrRekanKerja.length;
        q16_total = q16_total*rkPersenNilai/arrRekanKerja.length;
        q17_total = q17_total*rkPersenNilai/arrRekanKerja.length;
        q18_total = q18_total*rkPersenNilai/arrRekanKerja.length;
        q19_total = q19_total*rkPersenNilai/arrRekanKerja.length;
        q20_total = q20_total*rkPersenNilai/arrRekanKerja.length;
        q21_total = q21_total*rkPersenNilai/arrRekanKerja.length;
        q22_total = q22_total*rkPersenNilai/arrRekanKerja.length;

        
        daftarNilaiSeluruh[0].rekanKerja = Math.round(q1_total * 100) / 100;
        daftarNilaiSeluruh[1].rekanKerja = Math.round(q2_total * 100) / 100;
        daftarNilaiSeluruh[2].rekanKerja = Math.round(q3_total * 100) / 100;
        daftarNilaiSeluruh[3].rekanKerja = Math.round(q4_total * 100) / 100;
        daftarNilaiSeluruh[4].rekanKerja = Math.round(q5_total * 100) / 100;
        daftarNilaiSeluruh[5].rekanKerja = Math.round(q6_total * 100) / 100;
        daftarNilaiSeluruh[6].rekanKerja = Math.round(q7_total * 100) / 100;
        daftarNilaiSeluruh[7].rekanKerja = Math.round(q8_total * 100) / 100;
        daftarNilaiSeluruh[8].rekanKerja = Math.round(q9_total * 100) / 100;
        daftarNilaiSeluruh[9].rekanKerja = Math.round(q10_total * 100) / 100;
        daftarNilaiSeluruh[10].rekanKerja = Math.round(q11_total * 100) / 100;
        daftarNilaiSeluruh[11].rekanKerja = Math.round(q12_total * 100) / 100;
        daftarNilaiSeluruh[12].rekanKerja = Math.round(q13_total * 100) / 100;
        daftarNilaiSeluruh[13].rekanKerja = Math.round(q14_total * 100) / 100;
        daftarNilaiSeluruh[14].rekanKerja = Math.round(q15_total * 100) / 100;
        daftarNilaiSeluruh[15].rekanKerja = Math.round(q16_total * 100) / 100;
        daftarNilaiSeluruh[16].rekanKerja = Math.round(q17_total * 100) / 100;
        daftarNilaiSeluruh[17].rekanKerja = Math.round(q18_total * 100) / 100;
        daftarNilaiSeluruh[18].rekanKerja = Math.round(q19_total * 100) / 100;
        daftarNilaiSeluruh[19].rekanKerja = Math.round(q20_total * 100) / 100;
        daftarNilaiSeluruh[20].rekanKerja = Math.round(q21_total * 100) / 100;
        daftarNilaiSeluruh[21].rekanKerja = Math.round(q22_total * 100) / 100;
    }

})