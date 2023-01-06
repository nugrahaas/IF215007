# The Mighty 3D : Three JS

## Introduction 

Three JS yang mana merupakan _library_ JavaScript ini saya gunakan untuk menampilkan 3D botol di website saya. 
Dalam penggunaannya banyak sekali syntax dan bahasa baru yang saya pelajari.
Mulai dari setting camera, lighting, dan berbagai kode lainnya yang saya pun masih belajar untuk memahami hal tersebut.

## Practice

- Pertama-tama kita harus sudah pasti yang namanya mengimpor three js nya. Ada cdn version, tapi saya pakai versi npm dengan cara `npm install three`
- Kedua-dua kalo kita menggunakan cara npm, tambahkan kode berikut di file .html kalian
```
<script src="node_modules/three/build/three.js"></script>
<script src="node_modules/three/examples/js/controls/OrbitControls.js"></script>
<script src="node_modules/three/examples/js/loaders/GLTFLoader.js"></script>
<script src="node_modules/three/examples/js/loaders/RGBELoader.js"></script>
```

- Ketiga-tiga kita tinggal yang namanya ngoding sesuai ketentuan standar dari three js nya, yaitu `renderer`, `scene`, `camera`, dan terakhir `controls` yang kita perlukan.
- Sehabis itu, kita bisa langsung yang namanya konfigurasi atau ibarat kata disetting dulu biar bebeledagan. Setting gimana sih maksudnya? Nih daripada bingung aku kasih contoh kepada kalian semua.

- `
renderer.setSize( window.innerWidth, window.innerHeight );
` Itu untuk ngatur bakal segimana ukuran renderer nya.

- `
camera.position.set( 1, 1, 60 );
controls.update();
` Untuk setting posisi kamera nya. Kalo sudah update posisi kamera secara manual, jangan lupa untuk selalu memanggil kode dibawahnya yaitu update().
- Sehabis itu jangan lupa juga setting lighting nya supaya kelihatan lebih _aesthetic_ dan real. Terakhir tinggal :
`
renderer.render( scene, camera );
`

- Nah, untuk konfigurasi awal nya sudah beres. Selanjutnya kita panggil bahan 3D nya (dalam hal ini botol) ke dalam kodingan kita menggunakan GLTFLoader().
- Sebenarnya ada beberapa loader yang lain untuk file yang beda, seperti Collada. Hanya saja karena saya menggunakan file .gltf jadi menggunakan GLTFLoader().
```
const loader = new THREE.GLTFLoader();
loader.load( 'model/water_bottel_turbo.gltf', function ( gltf ) {
	scene.add( gltf.scene );
}, undefined, function ( error ) {
	console.error( error );
} );
```
- Terakhir kita bisa eksplorasi mengenai lighting, camera, dll. Supaya website kita lebih terlihat realistis dan _aesthetic_. Saya eksplor HemisphereLight dan SpotLight supaya keren lightingnya.
- Oiya jangan lupa untuk panggil `renderer.render(scene,camera)` untuk selalu update ketika kita melakukan perubahan manual di kodingan.
- Happy Explore Guys.
