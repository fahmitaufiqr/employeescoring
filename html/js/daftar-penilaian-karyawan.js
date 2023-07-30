$(document).ready(function() { 
    let btnTambahPenilaian = $("#btnTambahPenilaian");
    let tbody = $("#tbodyDaftarPenilaian");

    // dummy karyawan
    let penilaian = {
        id: "1",
        idKaryawan: "1",
        bulan: "Januari",
        tahun: "2023"
    } 
    // isi karyawan ke array
    let daftarPenilaian = [
        penilaian
    ]
    // menampilkan data ke ui
    let no = 1;
    daftarPenilaian.map(dk => {
        let htmlString = 
        `<tr>
            <th scope="row">${no}</th>
            <td>${dk.bulan}</td>
            <td>${dk.tahun}</td>
            <td><a href="kuesionaire-penilaian.html?id=${dk.id}" type="button" class="btn btn-primary">Aksi</a></td>
      </tr>`;
      no++;
      tbody.append(htmlString);
    });

    // fungsi get id karyawan pada url
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    console.log(id);

    btnTambahPenilaian.attr("href", "kuesionaire-penilaian.html?id-pegawai="+id)
})