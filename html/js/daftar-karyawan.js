$(document).ready(function() {
    // console.log(db); 
    let btnTambahKaryawan = $("#btnTambahKaryawan");
    let tbody = $("#tbodyDaftarKaryawan");
    let pagesProfilId = $("#pagesProfilId");
    let resetNilai =$("#resetNilai");

    // isi karyawan ke array
    let daftarKaryawan = []
    console.log(daftarKaryawan);

    // fungsi get id karyawan pada url
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const idDariUrl = urlParams.get('id');

    pagesProfileSetId();
    db.collection("employee").get().then( (snapshot) => {
        // Cara ngeget data dri Snapshot menggunakan snapshot.docs
        snapshot.docs.forEach(doc => {
            // cara mendapatkan data dengan .data()
        
            let dataDk = doc.data();
            dataDk.isFilled = false;
            daftarKaryawan.push(dataDk);

            console.log(daftarKaryawan, "Setelah");
            let userData = JSON.parse(localStorage.getItem('userData'));
            let userDataId = userData.id_key;
            let htmlString = "";

            daftarKaryawan.forEach((dk, idx) =>{
                db.collection("scoring").where("id_penilai", "==", userDataId).get().then((snapshot) => {
                    snapshot.docs.forEach(docScore => {
                        let dataScoring = docScore.data();

                        if(
                            (dataScoring.id_penilai == userDataId) &&
                            (dataScoring.id_employee == dk.id_key)
                            ){
                                daftarKaryawan[idx].isFilled = true;
                        }
                    })
                })
            })

        });

        
        console.log(daftarKaryawan, "Setelah 50");
        setTimeout(() => {
            console.log(daftarKaryawan, "Setelah 52");
            // menampilkan data ke ui
        let no = 1;
        daftarKaryawan.forEach(dk => {
            console.log(dk,"ini dk")
            // console.log(dataScoring.id_penilai == userDataId, "data scoring id penilai", dataScoring.id_employee == dk.id_key, "id employee")
            htmlString = 
            `<tr>
                <th scope="row">${no}</th>
                <td>${dk.nama}</td>
                <td>${dk.jabatan}</td>
                <td>
                    <a href="daftar-nilai-karyawan.html?id=${dk.id_key}" type="button" class="btn btn-primary">Lihat Nilai</a>
                    <a href="kuesionaire-penilaian.html?id-pegawai=${dk.id_key}" type="button" class="btn btn-primary">Beri Nilai</a>
                </td>
            </tr>`;

            console.log(dk.isFilled, "dk is filled")
            
            if(dk.isFilled){
                htmlString = 
                `<tr>
                    <th scope="row">${no}</th>
                    <td>${dk.nama}</td>
                    <td>${dk.jabatan}</td>
                    <td>
                        <a href="daftar-nilai-karyawan.html?id=${dk.id_key}" type="button" class="btn btn-primary">Lihat Nilai</a>
                    </td>
                </tr>`;
            }
            no++;
            tbody.append(htmlString);
        });    
        }, 5000);
        

        
    });

    //reset nilai
    resetNilai.click(function(){
        let ref = db.collection("scoring");
        db.collection("scoring").get().then(snapshot => {
            snapshot.docs.forEach((doc) => {
                ref.doc(doc.data().id_scoring).delete()
            })

            setTimeout(() => {
                window.location.reload();
            }, 1000);
        })

    })

    // tambah karyawan
    btnTambahKaryawan.click(function(){
        let dk = {
            id: "1",
            nama: "Fahmi",
            jabatan: "QA"
        }
        daftarKaryawan.push(dk);
        // menampilkan data ke ui
        let no = daftarKaryawan.length;
        let htmlString = 
            `<tr>
                <th scope="row">${no}</th>
                <td>${dk.nama}</td>
                <td>${dk.jabatan}</td>
                <td><a href="daftar-penilaian-karyawan.html?id-pegawai=${idDariUrl}" type="button" class="btn btn-primary">Aksi</a></td>
          </tr>`;
          console.log(daftarKaryawan.length);
          tbody.append(htmlString);
    })

    function pagesProfileSetId() {
        console.log(pagesProfilId)
        let userData = JSON.parse(localStorage.getItem('userData'));
        console.log(userData, pagesProfilId)
        // Isi variable idPenilai dari id_key userData
        let idUser = userData.id_key ?? "-";

        pagesProfilId.attr("href", "pages-profile.html?id=" + idUser)
    }
})