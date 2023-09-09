$(document).ready(function() { 
    let daftarNilai = $("#daftarNilai");
    let nilaiKinerjaPegawaiId = $("#nilaiKinerjaPegawaiId");
    let tbodyNilai = $("#tbodyDaftarNilaiKaryawan");
    let persentaseSelisiKriteriaPegawaiId = $("#persentaseSelisiKriteriaPegawaiId");
    let arrDaftarNilai = [];
    let arrRekanKerja = [];
    let daftarNilaiSeluruh = [];
    let totalNilaiKinerjaPegawai = 0;
    let totalPersentaseSelisihKriteriaPegawai = 0;
    let pagesProfilId = $("#pagesProfilId");
    
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

    console.log("123")
    pagesProfileSetId();

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
                totalSubkriteria();
                nilaiKinerjaPegawai();
                persentaseSelisihKriteriaPegawai();
                daftarNilaiSeluruh.map(dns => {
                    let htmlString = 
                    `<tr>
                        <th scope="row">${no}</th>
                        <td>${dns.diriSendiri}</td>
                        <td>${dns.atasan}</td>
                        <td>${dns.rekanKerja}</td>
                        <td>${dns.totalSubkriteria}</td>
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
        console.log(dataPenilai.role_penilai, "role penilai")
        if (dataPenilai.role_penilai == "Diri Sendiri") {
            daftarNilaiSeluruh[0].diriSendiri = Math.round(dataPenilai.q1_score*1000)/1000;
            daftarNilaiSeluruh[1].diriSendiri = Math.round(dataPenilai.q2_score*1000)/1000;
            daftarNilaiSeluruh[2].diriSendiri = Math.round(dataPenilai.q3_score*1000)/1000;
            daftarNilaiSeluruh[3].diriSendiri = Math.round(dataPenilai.q4_score*1000)/1000;
            daftarNilaiSeluruh[4].diriSendiri = Math.round(dataPenilai.q5_score*1000)/1000;
            daftarNilaiSeluruh[5].diriSendiri = Math.round(dataPenilai.q6_score*1000)/1000;
            daftarNilaiSeluruh[6].diriSendiri = Math.round(dataPenilai.q7_score*1000)/1000;
            daftarNilaiSeluruh[7].diriSendiri = Math.round(dataPenilai.q8_score*1000)/1000;
            daftarNilaiSeluruh[8].diriSendiri = Math.round(dataPenilai.q9_score*1000)/1000;
            daftarNilaiSeluruh[9].diriSendiri = Math.round(dataPenilai.q10_score*1000)/1000;
            daftarNilaiSeluruh[10].diriSendiri = Math.round(dataPenilai.q11_score*1000)/1000;
            daftarNilaiSeluruh[11].diriSendiri = Math.round(dataPenilai.q12_score*1000)/1000;
            daftarNilaiSeluruh[12].diriSendiri = Math.round(dataPenilai.q13_score*1000)/1000;
            daftarNilaiSeluruh[13].diriSendiri = Math.round(dataPenilai.q14_score*1000)/1000;
            daftarNilaiSeluruh[14].diriSendiri = Math.round(dataPenilai.q15_score*1000)/1000;
            daftarNilaiSeluruh[15].diriSendiri = Math.round(dataPenilai.q16_score*1000)/1000;
            daftarNilaiSeluruh[16].diriSendiri = Math.round(dataPenilai.q17_score*1000)/1000;
            daftarNilaiSeluruh[17].diriSendiri = Math.round(dataPenilai.q18_score*1000)/1000;
            daftarNilaiSeluruh[18].diriSendiri = Math.round(dataPenilai.q19_score*1000)/1000;
            daftarNilaiSeluruh[19].diriSendiri = Math.round(dataPenilai.q20_score*1000)/1000;
            daftarNilaiSeluruh[20].diriSendiri = Math.round(dataPenilai.q21_score*1000)/1000;
            daftarNilaiSeluruh[21].diriSendiri = Math.round(dataPenilai.q22_score*1000)/1000;
        }
        if (dataPenilai.role_penilai == "Pranata Hubungan Masyarakat" || dataPenilai.role_penilai == "Pranata Komputer Pertama") {
            daftarNilaiSeluruh[0].atasan = Math.round(dataPenilai.q1_score*1000)/1000;
            daftarNilaiSeluruh[1].atasan = Math.round(dataPenilai.q2_score*1000)/1000;
            daftarNilaiSeluruh[2].atasan = Math.round(dataPenilai.q3_score*1000)/1000;
            daftarNilaiSeluruh[3].atasan = Math.round(dataPenilai.q4_score*1000)/1000;
            daftarNilaiSeluruh[4].atasan = Math.round(dataPenilai.q5_score*1000)/1000;
            daftarNilaiSeluruh[5].atasan = Math.round(dataPenilai.q6_score*1000)/1000;
            daftarNilaiSeluruh[6].atasan = Math.round(dataPenilai.q7_score*1000)/1000;
            daftarNilaiSeluruh[7].atasan = Math.round(dataPenilai.q8_score*1000)/1000;
            daftarNilaiSeluruh[8].atasan = Math.round(dataPenilai.q9_score*1000)/1000;
            daftarNilaiSeluruh[9].atasan = Math.round(dataPenilai.q10_score*1000)/1000;
            daftarNilaiSeluruh[10].atasan = Math.round(dataPenilai.q11_score*1000)/1000;
            daftarNilaiSeluruh[11].atasan = Math.round(dataPenilai.q12_score*1000)/1000;
            daftarNilaiSeluruh[12].atasan = Math.round(dataPenilai.q13_score*1000)/1000;
            daftarNilaiSeluruh[13].atasan = Math.round(dataPenilai.q14_score*1000)/1000;
            daftarNilaiSeluruh[14].atasan = Math.round(dataPenilai.q15_score*1000)/1000;
            daftarNilaiSeluruh[15].atasan = Math.round(dataPenilai.q16_score*1000)/1000;
            daftarNilaiSeluruh[16].atasan = Math.round(dataPenilai.q17_score*1000)/1000;
            daftarNilaiSeluruh[17].atasan = Math.round(dataPenilai.q18_score*1000)/1000;
            daftarNilaiSeluruh[18].atasan = Math.round(dataPenilai.q19_score*1000)/1000;
            daftarNilaiSeluruh[19].atasan = Math.round(dataPenilai.q20_score*1000)/1000;
            daftarNilaiSeluruh[20].atasan = Math.round(dataPenilai.q21_score*1000)/1000;
            daftarNilaiSeluruh[21].atasan = Math.round(dataPenilai.q22_score*1000)/1000;
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
        if (q1_total == 0) {
            return;
        }
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

        
        daftarNilaiSeluruh[0].rekanKerja = Math.round(q1_total * 1000) / 1000;
        daftarNilaiSeluruh[1].rekanKerja = Math.round(q2_total * 1000) / 1000;
        daftarNilaiSeluruh[2].rekanKerja = Math.round(q3_total * 1000) / 1000;
        daftarNilaiSeluruh[3].rekanKerja = Math.round(q4_total * 1000) / 1000;
        daftarNilaiSeluruh[4].rekanKerja = Math.round(q5_total * 1000) / 1000;
        daftarNilaiSeluruh[5].rekanKerja = Math.round(q6_total * 1000) / 1000;
        daftarNilaiSeluruh[6].rekanKerja = Math.round(q7_total * 1000) / 1000;
        daftarNilaiSeluruh[7].rekanKerja = Math.round(q8_total * 1000) / 1000;
        daftarNilaiSeluruh[8].rekanKerja = Math.round(q9_total * 1000) / 1000;
        daftarNilaiSeluruh[9].rekanKerja = Math.round(q10_total * 1000) / 1000;
        daftarNilaiSeluruh[10].rekanKerja = Math.round(q11_total * 1000) / 1000;
        daftarNilaiSeluruh[11].rekanKerja = Math.round(q12_total * 1000) / 1000;
        daftarNilaiSeluruh[12].rekanKerja = Math.round(q13_total * 1000) / 1000;
        daftarNilaiSeluruh[13].rekanKerja = Math.round(q14_total * 1000) / 1000;
        daftarNilaiSeluruh[14].rekanKerja = Math.round(q15_total * 1000) / 1000;
        daftarNilaiSeluruh[15].rekanKerja = Math.round(q16_total * 1000) / 1000;
        daftarNilaiSeluruh[16].rekanKerja = Math.round(q17_total * 1000) / 1000;
        daftarNilaiSeluruh[17].rekanKerja = Math.round(q18_total * 1000) / 1000;
        daftarNilaiSeluruh[18].rekanKerja = Math.round(q19_total * 1000) / 1000;
        daftarNilaiSeluruh[19].rekanKerja = Math.round(q20_total * 1000) / 1000;
        daftarNilaiSeluruh[20].rekanKerja = Math.round(q21_total * 1000) / 1000;
        daftarNilaiSeluruh[21].rekanKerja = Math.round(q22_total * 1000) / 1000;
    }

    //fungsi hitung total nilai subkriteria
    function totalSubkriteria(){
        daftarNilaiSeluruh[0].totalSubkriteria = Math.round((daftarNilaiSeluruh[0].diriSendiri + daftarNilaiSeluruh[0].atasan + daftarNilaiSeluruh[0].rekanKerja)*1000)/1000;
        daftarNilaiSeluruh[1].totalSubkriteria = Math.round((daftarNilaiSeluruh[1].diriSendiri + daftarNilaiSeluruh[1].atasan + daftarNilaiSeluruh[1].rekanKerja)*1000)/1000;
        daftarNilaiSeluruh[2].totalSubkriteria = Math.round((daftarNilaiSeluruh[2].diriSendiri + daftarNilaiSeluruh[2].atasan + daftarNilaiSeluruh[2].rekanKerja)*1000)/1000;
        daftarNilaiSeluruh[3].totalSubkriteria = Math.round((daftarNilaiSeluruh[3].diriSendiri + daftarNilaiSeluruh[3].atasan + daftarNilaiSeluruh[3].rekanKerja)*1000)/1000;
        daftarNilaiSeluruh[4].totalSubkriteria = Math.round((daftarNilaiSeluruh[4].diriSendiri + daftarNilaiSeluruh[4].atasan + daftarNilaiSeluruh[4].rekanKerja)*1000)/1000;
        daftarNilaiSeluruh[5].totalSubkriteria = Math.round((daftarNilaiSeluruh[5].diriSendiri + daftarNilaiSeluruh[5].atasan + daftarNilaiSeluruh[5].rekanKerja)*1000)/1000;
        daftarNilaiSeluruh[6].totalSubkriteria = Math.round((daftarNilaiSeluruh[6].diriSendiri + daftarNilaiSeluruh[6].atasan + daftarNilaiSeluruh[6].rekanKerja)*1000)/1000;
        daftarNilaiSeluruh[7].totalSubkriteria = Math.round((daftarNilaiSeluruh[7].diriSendiri + daftarNilaiSeluruh[7].atasan + daftarNilaiSeluruh[7].rekanKerja)*1000)/1000;
        daftarNilaiSeluruh[8].totalSubkriteria = Math.round((daftarNilaiSeluruh[8].diriSendiri + daftarNilaiSeluruh[8].atasan + daftarNilaiSeluruh[8].rekanKerja)*1000)/1000;
        daftarNilaiSeluruh[9].totalSubkriteria = Math.round((daftarNilaiSeluruh[9].diriSendiri + daftarNilaiSeluruh[9].atasan + daftarNilaiSeluruh[9].rekanKerja)*1000)/1000;
        daftarNilaiSeluruh[10].totalSubkriteria = Math.round((daftarNilaiSeluruh[10].diriSendiri + daftarNilaiSeluruh[10].atasan + daftarNilaiSeluruh[10].rekanKerja)*1000)/1000;
        daftarNilaiSeluruh[11].totalSubkriteria = Math.round((daftarNilaiSeluruh[11].diriSendiri + daftarNilaiSeluruh[11].atasan + daftarNilaiSeluruh[11].rekanKerja)*1000)/1000;
        daftarNilaiSeluruh[12].totalSubkriteria = Math.round((daftarNilaiSeluruh[12].diriSendiri + daftarNilaiSeluruh[12].atasan + daftarNilaiSeluruh[12].rekanKerja)*1000)/1000;
        daftarNilaiSeluruh[13].totalSubkriteria = Math.round((daftarNilaiSeluruh[13].diriSendiri + daftarNilaiSeluruh[13].atasan + daftarNilaiSeluruh[13].rekanKerja)*1000)/1000;
        daftarNilaiSeluruh[14].totalSubkriteria = Math.round((daftarNilaiSeluruh[14].diriSendiri + daftarNilaiSeluruh[14].atasan + daftarNilaiSeluruh[14].rekanKerja)*1000)/1000;
        daftarNilaiSeluruh[15].totalSubkriteria = Math.round((daftarNilaiSeluruh[15].diriSendiri + daftarNilaiSeluruh[15].atasan + daftarNilaiSeluruh[15].rekanKerja)*1000)/1000;
        daftarNilaiSeluruh[16].totalSubkriteria = Math.round((daftarNilaiSeluruh[16].diriSendiri + daftarNilaiSeluruh[16].atasan + daftarNilaiSeluruh[16].rekanKerja)*1000)/1000;
        daftarNilaiSeluruh[17].totalSubkriteria = Math.round((daftarNilaiSeluruh[17].diriSendiri + daftarNilaiSeluruh[17].atasan + daftarNilaiSeluruh[17].rekanKerja)*1000)/1000;
        daftarNilaiSeluruh[18].totalSubkriteria = Math.round((daftarNilaiSeluruh[18].diriSendiri + daftarNilaiSeluruh[18].atasan + daftarNilaiSeluruh[18].rekanKerja)*1000)/1000;
        daftarNilaiSeluruh[19].totalSubkriteria = Math.round((daftarNilaiSeluruh[19].diriSendiri + daftarNilaiSeluruh[19].atasan + daftarNilaiSeluruh[19].rekanKerja)*1000)/1000;
        daftarNilaiSeluruh[20].totalSubkriteria = Math.round((daftarNilaiSeluruh[20].diriSendiri + daftarNilaiSeluruh[20].atasan + daftarNilaiSeluruh[20].rekanKerja)*1000)/1000;
        daftarNilaiSeluruh[21].totalSubkriteria = Math.round((daftarNilaiSeluruh[21].diriSendiri + daftarNilaiSeluruh[21].atasan + daftarNilaiSeluruh[21].rekanKerja)*1000)/1000;
    }

    function nilaiKinerjaPegawai() {
        for (let i = 0; i < daftarNilaiSeluruh.length; i++) {
            totalNilaiKinerjaPegawai = totalNilaiKinerjaPegawai + daftarNilaiSeluruh[i].totalSubkriteria;
            console.log(totalNilaiKinerjaPegawai,daftarNilaiSeluruh,"total nilai kinerja pegawai")
        }
        totalNilaiKinerjaPegawai = Math.round(totalNilaiKinerjaPegawai*100)/100;
        nilaiKinerjaPegawaiId.text(totalNilaiKinerjaPegawai)
    }

    function persentaseSelisihKriteriaPegawai() {
        totalPersentaseSelisihKriteriaPegawai = (((totalNilaiKinerjaPegawai - 2.5)/2.5)*100)+100
        console.log(totalPersentaseSelisihKriteriaPegawai, "totalPersentaseSelisihKriteriaPegawai")
        persentaseSelisiKriteriaPegawaiId.text(totalPersentaseSelisihKriteriaPegawai + "%")
    }

    function pagesProfileSetId() {
        console.log(pagesProfilId)
        let userData = JSON.parse(localStorage.getItem('userData'));
        console.log(userData, pagesProfilId)
        // Isi variable idPenilai dari id_key userData
        let idUser = userData.id_key ?? "-";

        pagesProfilId.attr("href", "pages-profile.html?id=" + idUser)
    }
})