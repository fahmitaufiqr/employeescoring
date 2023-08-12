$(document).ready(function() {
    // console.log(db); 
    let btnTambahKaryawan = $("#btnTambahKaryawan");
    let tbody = $("#tbodyDaftarKaryawan");
    let pagesProfilId = $("#pagesProfilId");

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
            console.log("ini Data", doc.data());
            daftarKaryawan.push(doc.data());
        });

        
        console.log(daftarKaryawan, "Setelah");

        // menampilkan data ke ui
        let no = 1;
        daftarKaryawan.map(dk => {
            console.log(dk,"ini dk")
            let htmlString = 
            `<tr>
                <th scope="row">${no}</th>
                <td>${dk.nama}</td>
                <td>${dk.jabatan}</td>
                <td>
                    <a href="daftar-nilai-karyawan.html?id=${dk.id_key}" type="button" class="btn btn-primary">Lihat Nilai</a>
                    <a href="kuesionaire-penilaian.html?id-pegawai=${dk.id_key}" type="button" class="btn btn-primary">Beri Nilai</a>
                </td>
        </tr>`;
        no++;
        tbody.append(htmlString);
        });
    });
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