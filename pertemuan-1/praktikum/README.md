<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post" action="<?php $_SERVER['PHP_SELF'];?>">
        <table width="50%" cellpadding="2" align="center">
            <tr>
                <td colspan="2"><h3>Form Tambah Mahasiswa</h3></td>
            </tr>
            <tr>
                <td>NIM</td>
                <td><input type="text" name="nim" size="10"><br/>
                    <div class="note">NIM wajib diisi</div>
                </td>
            </tr>
            <tr>
                <td> Nama Lengkap</td>
                <td><input type="text" name="nama_lengkap" size="30"><br />
                    <div class="note">Nama maksimal 30 karakter</div>
                </td>
            </tr>
            <tr>
                <td>Jurusan</td>
                <td>
                    <select name="jurusan">
                        <option value = "Teknik Informatika">Teknik Informatika</option>
                        <option value = "Teknik Elektro">Teknik Elektro</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td></td>
                <td><input id="submit" type="submit" value="Tambah Mahasiswa">
                    <input type="reset" value="Batal">
                </td>
            </tr>
        </table>
    </form>

    <br><br><br><br>


    <table border="1px solid black" cellspacing="0" cellpadding="10px" align="center">
        <thead>
            <tr>
                <th>No</th>
                <th>NIM</th>
                <th>Nama Lengkap</th>
                <th>Jurusan</th>
            </tr>
        </thead>
        <tbody id="tbody1">
            <tr>
                
            </tr>
        </tbody>

    </table>

    <script>

        function tampilkanData(){
            const dataSaved = localStorage.getItem("dataSaved");
            const dataSavedObjectArray = JSON.parse(dataSaved);
            console.log("data : ", dataSavedObjectArray);

            const tabel = document.getElementById("tbody1");
            let isiTabel = ``;

            dataSavedObjectArray.foreach(function(dataSavedObject, index){
                isiTabel += `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${dataSavedObject.nim}</td>
                        <td>${dataSavedObject.nama}</td>
                        <td>${dataSavedObject.jurusan}</td>
                    </tr>
                    `;
            });

            tabel.innerHTML = isiTabel;
        }

        var inputNIM = document.getElementsByName("nim");
        var inputNama = document.getElementsByName("nama-lengkap");
        var inputJurusan = document.getElementsByName("jurusan");
        var submitBtn = document.getElementById("submit");

        submitBtn.onclick = function() {
            const nim = inputNIM.value;
            const nama = inputNama.value;
            const jurusan = inputJurusan.value;
            
            const pesan = "data $(nama) telah ditambahkan"
            
            const data = {
                nim,
                nama,
                jurusan,
            };

            alert(pesan);
            console.log(data);

            const dataSaved = localStorage.getItem("dataSaved");
            const dataSavedObjectArray = JSON.parse(dataSaved);

            if (dataSaved === null) {
                localStorage.setItem("dataSaved", JSON.stringify([data]));
            }
            else{
                dataSavedObjectArray.push(data);
                localStorage.setItem("dataSaved", JSON.stringify(dataSavedObjectArray));
            }

            console.log("data tersimpan", dataSaved);
            console.log("dataSavedObjectArray", dataSavedObjectArray);
            tampilkanData();
        }

    </script>





</body>
</html>
