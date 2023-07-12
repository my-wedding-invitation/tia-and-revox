<template>
    <app-fragment>
        <div id="particles-js">
            <div id="overlay"></div>
        </div>
        <section id="home" class="container-fluid h-100">
            <div class="row h-100 justify-content-center align-items-end pb-5">
                <div class="col-lg-12 text-center wow zoomIn animated">
                    <h2 class="mt-5" style="font-family: 'Montserrat', sans-serif;font-size: 24px;color: #ffffff;font-weight: bold;">Pernikahan</h2>
                    <h3 id="name" style="font-family: 'Great Vibes', cursive;font-size: 72px;margin: 30px 0px;color: #9E5454;">Tia & Revox </h3>
                    <p style="color: #ffffff;">Tanpa Mengurangi Rasa Hormat <br /> Kami Mengundang Bapak/Ibu/Saudara/i <br /> Untuk Hadir Dalam Acara Pernikahan Kami</p>
                    <b style="color: #9E5454;font-weight: bold;">23 Juli 2023</b>
                </div>
            </div>
        </section>
        <section id="bride" class="container-fluid">
            <div class="row justify-content-center align-items-top">
                <div class="col-lg-12">
                    <div class="container-fluid">
                        <div class="row mt-5">
                            <div class="col-lg-12 text-center wow">
                                <h3>Pasangan</h3>
                                <h1 id="pengantin" style="font-family: 'Great Vibes', cursive;font-size: 72px;margin: 30px 0px;color: #9E5454;">Pengantin</h1>
                                <div>Maha Suci Allah yang telah menciptakan</div>
                                <div>makhluk-Nya berpasang-pasangan,</div>
                                <div>Ya Allah perkenankanlah pernikahan kami</div>
                            </div>
                        </div>
                        <div class="row mt-5">
                            <div class="col-lg-12 d-flex justify-content-around">
                                <img class="img-fluid w-25" src="/img/data/Foto CPW.jpg" style="-webkit-mask-image: url('/img/data/mask-photo.png');-webkit-mask-size: 100%;-webkit-mask-position: center center;-webkit-mask-repeat: no-repeat;" />
                                <div id="lottie-container" class="w-25"></div>
                                <img class="img-fluid w-25" src="/img/data/Foto CPP.jpg"  style="-webkit-mask-image: url('/img/data/mask-photo.png');-webkit-mask-size: 100%;-webkit-mask-position: center center;-webkit-mask-repeat: no-repeat;" />
                            </div>
                        </div>
                        <div class="row mt-4 mb-5 text-center">
                            <div class="col-lg-12">
                                <h2 id="tia" style="font-family: 'Great Vibes', cursive;color: #9E5454;">Suprihatin Setia Ningsih, S.Pd</h2>
                                <h5>
                                    <i class="fa fa-instagram mr-1" style="color: #9E5454;transition: color 0.3s;"></i>
                                    <a href="https://instagram.com/tiulala_" target="_blank">@tiulala_</a>
                                </h5>
                                <hr class="w-50" style="border-top-color: #676a6c;" />
                                <h4 style="color: #9E5454;">Putri Pertama Dari</h4>
                                <p style="font-weight: bold; color: #676a6c;">
                                    Bapak Bambang Kuncoro<br>
                                    &<br>
                                    Ibu Siti Aminah
                                </p>
                                <h1 class="my-4" style="font-family: 'Great Vibes', cursive;color: #9E5454;">&</h1>
                                <h2 id="revox" style="font-family: 'Great Vibes', cursive;color: #9E5454;">Revox Rizkian</h2>
                                <h5>
                                    <i class="fa fa-instagram mr-1" style="color: #9E5454;transition: color 0.3s;"></i>
                                    <a href="https://instagram.com/revianrr" target="_blank">@revianrr</a>
                                </h5>
                                <hr class="w-50" style="border-top-color: #676a6c;" />
                                <h4 style="color: #9E5454;">Putra Kedua Dari</h4>
                                <p style="font-weight: bold; color: #676a6c;">
                                    Bapak Wahyudi Dono Midjoyo, S.Sn<br>
                                    &<br>
                                    Ibu Yeniati
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="counter" class="container-fluid w-100">
            <div id="particles-js-2"></div>
            <div id="overlay-2"></div>
            <div id="overlay-3"></div>
            <div class="row justify-content-center align-items-center">
                <div class="col-lg-12 text-center wow zoomIn animated mt-5" style="position: relative;">
                    <img class="im-fluid" id="botanical" style="width: 5%;" src="/img/data/Botanical-line-Art-white-1.png" />
                    <h3 class="text-white mt-3 mb-3">Hitung Mundur</h3>
                    <h1 style="font-family: 'Great Vibes', cursive;color: #9E5454;">Menuju Hari Bahagia</h1>
                    <div v-if="typeof(counter) == 'string'" style="font-size: 40px;">{{ counter }}</div>
                    <table v-else class="w-75 mx-auto my-3">
                        <thead>
                            <tr>
                                <th class="text-white">
                                    <h2>{{ counter.day }}</h2>
                                </th>
                                <th>:</th>
                                <th class="text-white">
                                    <h2>{{ counter.hour }}</h2>
                                </th>
                                <th>:</th>
                                <th class="text-white">
                                    <h2>{{ counter.minute }}</h2>
                                </th>
                                <th>:</th>
                                <th class="text-white">
                                    <h2>{{ counter.second }}</h2>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Hari</td>
                                <td></td>
                                <td>Jam</td>
                                <td></td>
                                <td>Menit</td>
                                <td></td>
                                <td>Detik</td>
                            </tr>
                        </tbody>
                    </table>
                    <a href="https://www.google.com/calendar/render?action=TEMPLATE&text=Tia+%26+Revox+Wedding&location=Jl.+KH.+Sholeh+Iskandar+Kukupu+Blok+Binong+RT+01+RW+05%2C+Kelurahan+Cibadak%2C+Kecamatan+Tanah+Sereal%2C+Kota+Bogor&dates=20230723T020000Z%2F20230723T130000Z"
                        class="btn mt-3 mb-3" style="background-color: #9E5454; font-size: 12px; color: #fff;">
                        <i class="fa fa-calendar"></i> Google Calendar
                    </a>
                    <div class="mt-3">
                        <img class="img-fluid w-50" id="basmalah" src="/img/data/basmalah.png" />
                    </div>
                    <p class="mx-auto text-white mt-3 px-3">
                        "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
                    </p>
                    <h3 style="font-family: 'Great Vibes', cursive;color: #9E5454;" class="text-white mb-5 mt-4">- Q.S Ar - Rum: 21 -</h3>
                </div>
            </div>
        </section>
        <section id="bride" class="container-fluid">
            <div class="row justify-content-center align-items-top">
                <div class="col-lg-12">
                    <div class="container-fluid">
                        <div class="row mt-5">
                            <div class="col-lg-12 text-center wow">
                                <h3>Waktu & Tempat</h3>
                                <h1 id="pengantin" style="font-family: 'Great Vibes', cursive;font-size: 72px;margin: 30px 0px;color: #9E5454;">Pernikahan</h1>
                                <div>Pertemuan adalah permulaan, tetap bersama adalah perkembangan, bekerja sama adalah keberhasilan.</div>
                            </div>
                        </div>
                        <div class="row mt-5 mb-5 text-center">
                            <div class="col-lg-6">
                                <img class="img-fluid" src="/img/data/wedding-contract.png" />
                                <h1 class="mt-4 mb-3" style="font-family: 'Great Vibes', cursive;color: #9E5454;">Akad</h1>
                                <hr class="w-50" style="border-top-color: #676a6c;" />
                                <h1 class="mb-0" style="font-family: 'Great Vibes', cursive;color: #9E5454;">23</h1>
                                <h4 class="mt-0">Juli 2023</h4>
                                <h3 class="mt-4 mb-1" style="color: #9E5454;">09.00 WIB</h3>
                                <h5>s.d. Selesai</h5>
                            </div>
                            <div class="col-lg-6" id="resepsi">
                                <img class="img-fluid" src="/img/data/eat.png" />
                                <h1 class="mt-4 mb-3" style="font-family: 'Great Vibes', cursive;color: #9E5454;">Resepsi</h1>
                                <hr class="w-50" style="border-top-color: #676a6c;" />
                                <h1 class="mb-0" style="font-family: 'Great Vibes', cursive;color: #9E5454;">23</h1>
                                <h4 class="mt-0">Juli 2023</h4>
                                <h3 class="mt-4 mb-1" style="color: #9E5454;">12.00 WIB</h3>
                                <h5>s.d. 20.00 WIB</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="location" class="container-fluid">
            <div class="row justify-content-center align-items-center h-100">
                <div class="col-lg-12 text-center wow h-100">
                    <div class="container-fluid h-100">
                        <div class="row mt-5" id="top">
                            <div class="col-lg-12">
                                <img class="img-fluid mt-5" src="/img/data/map.png" />
                                <h3 class="mt-3">Bertempat Di</h3>
                                <h1 class="mt-3" style="font-family: 'Great Vibes', cursive;color: #9E5454;">Mempelai Wanita</h1>
                                <h5 class="mt-3">Jl. KH. Sholeh Iskandar Kukupu Blok Binong RT 01 RW 05, Kelurahan Cibadak, Kecamatan Tanah Sereal, Kota Bogor</h5>
                                <iframe style="border:3px solid #9e5454;height: 250px;max-width: 100%;" class="mt-3 same-object" loading="lazy" src="https://maps.google.com/maps?q=Warung+Ibu+Tia,+Cibadak,+Kec.+Tanah+Sereal,+Kota+Bogor,+Jawa+Barat&t=m&z=15&output=embed&iwloc=near"></iframe>
                                <br>
                                <button class="btn text-white mt-3" style="background-color: #9e5454;">
                                    <a class="text-white" href="https://www.google.com/maps/place/Warung+Ibu+Tia,+Cibadak,+Kec.+Tanah+Sereal,+Kota+Bogor,+Jawa+Barat/data=!4m2!3m1!1s0x2e69c47f7d52249f:0xee6cfa7855a6128f?utm_source=mstt_1&entry=gps&lucs=47068615&g_ep=CAESCjExLjgxLjE1MDIYACDXggMqCDQ3MDY4NjE1QgJJRA%3D%3D" target="_blank">Buka Map</a>
                                </button>
                            </div>
                        </div>
                        <div class="row mb-5" id="bottom">
                            <div class="col-lg-12">
                                <div id="streaming" class="mt-4 same-object"></div>
                                <h3 class="mt-3">Kami Akan Melakukan</h3>
                                <h1 class="mt-3" style="font-family: 'Great Vibes', cursive;color: #9E5454;">Live Streaming</h1>
                                <h5 class="mt-3 mb-0">Momen kebahagiaan Akad dan Resepsi pernikahan kami secara virtual melalui Instagram.</h5>
                                <a href="https://www.instagram.com/tiulala_/" target="_blank">
                                    <img class="img-fluid w-50 mt-0 mb-4" id="instagram" src="/img/data/instagram.png" >
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="gallery" class="container-fluid">
            <div class="row justify-content-center align-items-top">
                <div class="col-lg-12">
                    <div class="container-fluid">
                        <div class="row mt-5">
                            <div class="col-lg-12 text-center wow">
                                <h3>Moment</h3>
                                <h1 style="font-family: 'Great Vibes', cursive;margin: 30px 0px;color: #9E5454;">Bahagia Kami</h1>
                                <div>"Mencintai bukan untuk menyamai, tetapi keikhlasan menerima perbedaan."</div>
                            </div>
                        </div>
                        <div class="row mt-3 mb-3" ref="gallery">
                            <div class="col-lg-12 mt-3">
                                <video class="img-thumbnail w-100" controls>
                                    <source src="/img/data/Video Cinematic.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="row mt-3">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <a data-fancybox="gallery" href="/img/data/Foto Galeri 1.jpg">
                                                <img class="img-thumbnail mt-3" src="/img/data/Foto Galeri 1.jpg" />
                                            </a>
                                        </div>
                                        <div class="col-lg-4">
                                            <a data-fancybox="gallery" href="/img/data/Foto Galeri 2.jpg">
                                                <img class="img-thumbnail mt-3" src="/img/data/Foto Galeri 2.jpg" />
                                            </a>
                                        </div>
                                        <div class="col-lg-4">
                                            <a data-fancybox="gallery" href="/img/data/Foto Galeri 3.jpg">
                                                <img class="img-thumbnail mt-3" src="/img/data/Foto Galeri 3.jpg" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <a data-fancybox="gallery" href="/img/data/Foto Galeri 4.jpg">
                                                <img class="img-thumbnail mt-3" src="/img/data/Foto Galeri 4.jpg" />
                                            </a>
                                        </div>
                                        <div class="col-lg-4">
                                            <a data-fancybox="gallery" href="/img/data/Foto Galeri 5.jpg">
                                                <img class="img-thumbnail mt-3" src="/img/data/Foto Galeri 5.jpg" />
                                            </a>
                                        </div>
                                        <div class="col-lg-4">
                                            <a data-fancybox="gallery" href="/img/data/Foto Galeri 6.jpg">
                                                <img class="img-thumbnail mt-3" src="/img/data/Foto Galeri 6.jpg" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="timeline" class="container-fluid mt-5 text-white">
            <div class="row justify-content-center align-items-top">
                <div class="col-lg-12">
                    <div class="container-fluid">
                        <div class="row mt-5">
                            <div class="col-lg-12 text-center wow">
                                <h3>Sebuah Kisah</h3>
                                <h1 style="font-family: 'Great Vibes', cursive;margin: 30px 0px;">Perjalanan Kami</h1>
                                <div>Perjalanan yang tak terlupakan, dan perjalanan yang mengubah tujuan hidup kami.</div>
                            </div>
                        </div>
                        <div class="row mt-3 mb-5">
                            <div class="col-lg-12">
                                <div id="vertical-timeline" class="vertical-container light-timeline">
                                    <div class="vertical-timeline-block">
                                        <div class="vertical-timeline-icon" style="background-color: #9E5454;">
                                            <i class="fa fa-heartbeat"></i>
                                        </div>
                                        <div class="vertical-timeline-content">
                                            <h2 style="color: #D68686;">Tahun 2017</h2>
                                            <p style="color: #676a6c;">
                                                Kenalan melalui Dating Apps dan pertama kali bertemu di Tahun 2017, udah merasa cocok, ngobrolnya seru tetapi memutuskan hanya untuk berteman saja, karna aku yang masih belum bisa Move On dari mantan hehe.
                                                <br>Padahal waktu itu Mas udah seserius itu sampe nyamperin kerumah ku tapi mungkin memang belum waktunya jadi kandas deh..
                                            </p>
                                        </div>
                                    </div>
                                    <div class="vertical-timeline-block">
                                        <div class="vertical-timeline-icon" style="background-color: #9E5454;">
                                            <i class="fa fa-heartbeat"></i>
                                        </div>
                                        <div class="vertical-timeline-content">
                                            <h2 style="color: #D68686;">Tahun 2021</h2>
                                            <p style="color: #676a6c;">
                                                Tapii entah gimana caranya Aku dan Mas bisa berkomunikasi kembali dan bertemu kembali setelah lost contact selama kurang lebih 5 tahun.
                                                <br>Dan memutuskan untuk berkomitmen tanpa pernyataan "Kamu mau nggak jadi pacar aku?"  Karna jujur aja sampe sekarang Mas Nggak pernah bilang kaya gitu jadi kita nggak ada Hari Jadian untuk dirayakan...
                                                <br>Tapi dalam menjalani hubungan yg berkomitmen itu juga tentu aja nggak mulus, banyak masalah, ujian, cobaan entah dari calon orang ketiga, perbedaan pendapat dan lain sebagainya.
                                                <br>Tetapi Alhamdulillah dengan komitmen dan niat yang kita ucap satu sama lain buat terus bersama menghabiskan waktu sampai akhir,
                                                <br>Dengan dan bagaimana pun keadaan kita satu sama lain, Kurang dan Lebihnya dari diri kita, baik dan buruk sikap dan sifat kita, Alhamdulillah kita bisa melalui sampai ke tahap selanjutnya…
                                            </p>
                                        </div>
                                    </div>
                                    <div class="vertical-timeline-block">
                                        <div class="vertical-timeline-icon" style="background-color: #9E5454;">
                                            <i class="fa fa-heartbeat"></i>
                                        </div>
                                        <div class="vertical-timeline-content">
                                            <h2 style="color: #D68686;">Tahun 2023</h2>
                                            <p style="color: #676a6c;">
                                                Ditahun 2023 ini kami memutuskan untuk meresmikan komitmen ini dengan Acara Lamaran pada Tanggal 5 Maret 2023 dengan dihadiri oleh Keluarga serta kerabat dekat dari Mas dan Aku,
                                                <br>Dimana Mas menyatakan langsung didepan Kedua Orang Tua, Keluarga dan Kerabat untuk menjadikan aku sebagai Istrinya, Sumber Kebahagiannya, Madrasah Pertama dari calon Penerusnya,
                                                <br>Dan Menjadi Wanita yang menemani di Hari Tua nya Nanti..
                                                <br>Dan Atas Izin Allah Serta Atas Restu Kedua Orang Tua Mas dan Aku,
                                                <br>Bismillah Kami akan Melangsungkan Pernikahan dan saling berjanji untuk mengarungi bahtera rumah tangga bagaimana pun keadaannya Di tanggal 23 Juli 2023…
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="reservasi" class="container-fluid">
            <div class="row justify-content-center align-items-top">
                <div class="col-lg-12">
                    <div class="container-fluid">
                        <div class="row mt-3">
                            <div class="col-lg-12 text-center wow">
                                <h1 style="font-family: 'Great Vibes', cursive;color: #9E5454;margin: 30px 0px;">Reservasi</h1>
                            </div>
                        </div>
                        <div class="row mt-3 mb-5">
                            <div class="col-lg-12">
                                <div class="ibox">
                                    <div class="ibox-content pb-0">
                                        <form role="form">
                                            <div class="form-group">
                                                <label>Nama</label>
                                                <input type="nama" placeholder="Masukan Nama" class="form-control">
                                            </div>
                                            <div class="form-group">
                                                <label>Jumlah Tamu</label>
                                                <input type="number" placeholder="Masukan Jumlah Tamu" class="form-control">
                                            </div>
                                            <div class="form-group">
                                                <label>Konfirmasi</label>
                                                <table class="w-100">
                                                    <tbody>
                                                        <tr>
                                                            <td class="pr-1"><input type="radio" style="font-size: 3px;" class="form-control" value="1" name="reservation"></td>
                                                            <td>Iya, Saya Akan Datang</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="pr-1"><input type="radio" style="font-size: 3px;" class="form-control" value="0" name="reservation"></td>
                                                            <td>Maaf, Saya Tidak Bisa Datang</td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="2">
                                                                <button class="text-white btn btn-sm btn-primary float-right mt-3" style="background-color; #9E5454 !important;max-height: 28px;"><strong>Kirim</strong></button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div ref="open" class="modal inmodal fade p-0" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg p-0 m-0 h-100" style="max-width: 100%; max-height: 100%;">
                <div class="modal-content h-100" style="background-color: rgba(0, 0, 0, 0.7);">
                    <div id="particles-js-3"></div>
                    <div class="modal-body" style="background: rgba(0, 0, 0, 0.7);">
                        <div class="container-fluid h-100">
                            <div class="row h-100 justify-content-center align-items-center">
                                <div class="col-lg-12 text-center">
                                    <img id="cover" class="img-fluid w-25" src="/img/data/Foto Cover Depan.jpg" style="-webkit-mask-image: url('/img/data/mask-photo.png');-webkit-mask-size: 100%;-webkit-mask-position: center center;-webkit-mask-repeat: no-repeat;" />
                                    <h2 class="mt-5" style="font-family: 'Montserrat', sans-serif;font-size: 24px;color: #ffffff;font-weight: bold;">Pernikahan</h2>
                                    <h3 id="name" style="font-family: 'Great Vibes', cursive;font-size: 72px;margin: 30px 0px;color: #9E5454;">Tia & Revox </h3>
                                    <p style="color: #ffffff;font-size: 16px;">Special Invite To:</p>
                                    <p style="color: #9E5454;font-weight: bold;" class="mt-0">{{ guests ? guests.name : '' }}</p>
                                    <button class="btn text-white" style="background-color: #9E5454;" @click="openInvitation">
                                        <i class="fa fa-envelope-open mr-2"></i>
                                        Buka Undangan
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="player-wrapper">
            <div id="player" class="music-player"></div>
            <div class="floating-icons">
                <button class="start-stop" @click="toggleSong">
                <i :class="['fa', song.play ? 'fa-pause' : 'fa-play']"></i>
                </button>
            </div>
        </div>
    </app-fragment>
</template>
<script>
import { Fragment } from 'vue-fragment';
import { mapActions, mapState } from 'pinia'
import { useGuestStore } from '@/store/guest'
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

export default {
    name: 'Landing',
    components: {
        'app-fragment': Fragment
    },
    created() {
        if (this.$route.query.to) {
            this.slug(this.$route.query.to)
        }
    },
    data() {
        return {
            counter: '',
            song: {
                id: '7azGGgUEEGY',
                play: false,
                player: null,
            },
        }
    },
    mounted() {
        const body = document.querySelector('body')
        body.classList.add('landing-page')
        body.classList.add('no-skin-config')
        this.registerSong()
        .then(() => {
            this.song.player = new window.YT.Player('player', {
                videoId: this.song.id,
                playerVars: {
                    autoplay: 0,
                    controls: 0,
                    modestbranding: 1,
                    rel: 0,
                    loop: 1,
                    start: 0
                },
                events: {
                    onReady: this.onPlayerReady,
                    onStateChange: this.onPlayerStateChange
                }
            })
        })
        this.registerParticleJS()
        this.registerParticleJS('-2')
        this.registerLottieJS()
        this.registerGallery()
        this.countdownToDate('2023-07-23')
        $(this.$refs.open).modal('show')
        setTimeout(() => {
            this.registerParticleJS('-3')
        }, 1e3)
        let lastYOffset = 0
        addEventListener('scroll', () => {
            if (window.pageYOffset > 50 &&  window.pageYOffset > lastYOffset) {
                $('.floating-icons').css('top', '40px')
            } else {
                $('.floating-icons').css('top', '10px')
            }
            lastYOffset = window.pageYOffset
        })
    },
    computed: {
        ...mapState(useGuestStore, ['guests']),
    },
    methods: {
        ...mapActions(useGuestStore, ['slug']),
        countdownToDate(targetDate) {
            var self = this
            var targetTime = new Date(targetDate).getTime()
            setInterval(function() {
                var currentDate = new Date().getTime()
                var timeLeft = targetTime - currentDate

                var daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
                var hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
                var minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
                var secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000)

                self.counter = {
                    day: daysLeft,
                    hour: hoursLeft,
                    minute: minutesLeft,
                    second: secondsLeft
                }

                if (timeLeft < 0) {
                    clearInterval(countdownFunction)
                    self.counter = "Sedang Berlangsung"
                }
            }, 1000)
        },
        registerSong() {
            return new Promise((resolve) => {
                if (window.YT && typeof window.YT.Player === 'function') {
                    resolve()
                } else {
                    const tag = document.createElement('script')
                    tag.src = 'https://www.youtube.com/iframe_api'
                    const firstScriptTag = document.getElementsByTagName('script')[0]
                    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
                    window.onYouTubeIframeAPIReady = () => {
                        resolve()
                    }
                }
            })
        },
        registerParticleJS(suffix = '') {
            particlesJS(`particles-js${suffix}`, {
                "particles": {
                    "number": {
                        "value": 75,
                        "density": {
                            "enable": false,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#fff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 10,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 10,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": false,
                        "distance": 500,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 2
                    },
                    "move": {
                        "enable": true,
                        "speed": 3,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": false,
                            "mode": "bubble"
                        },
                        "onclick": {
                            "enable": false,
                            "mode": "repulse"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 0.5
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 4,
                            "duration": 0.3,
                            "opacity": 1,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            })
            let update = function() {
                requestAnimationFrame(update)
            }
            requestAnimationFrame(update)
        },
        registerLottieJS() {
            const container = document.getElementById('lottie-container')
            const animationPath = 'json/love.json'
            lottie.loadAnimation({
                container: container,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: animationPath
            })
        },
        registerGallery() {
            Fancybox.bind(this.$refs.gallery, '[data-fancybox]', {
                Carousel: {
                    infinite: false,
                }
            });
        },
        openInvitation() {
            $(this.$refs.open).modal('hide')
            this.toggleSong()
            setTimeout(() => {
                this.toggleSong()
            }, 5e2)
        },
        toggleSong() {
            if (this.song.play) {
                this.song.player.pauseVideo()
            } else {
                this.song.player.playVideo()
            }
            this.song.play = !this.song.play
        },
        onPlayerReady() {
            this.song.player.playVideo()
            this.song.play = true
        },
        onPlayerStateChange(event) {
            if (event.data === window.YT.PlayerState.ENDED) {
                this.song.player.seekTo(0)
                this.song.player.playVideo()
            }
        }
    }
}
</script>
<style scoped>
html, body {
    overflow: hidden;
}
#particles-js,
#particles-js-2,
#particles-js-3 {
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 100%;
    background-color: #b61924;
    background-image: url('/img/data/Foto Cover Bagian Belakang.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
}
#overlay,
#overlay-2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
}
#overlay-3 {
    position: absolute;
    width: calc(100% - 2rem);
    height: calc(100% - 2rem);
    top: 1rem;
    left: 1rem;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.1);
}
#counter {
    position: relative;
    width: 100%;
    height: fit-content;
}
#lottie-container path {
  fill: #b61924; /* Change the fill color to blue */
}
@media screen and (max-width: 767px) {
    #name,
    #pengantin {
        font-size: 48px !important;
    }
    #botanical {
        width: 10% !important;
    }
    #resepsi {
        margin-top: 3rem;
    }
}
@media screen and (min-width: 767px) {
    #particles-js,
    #particles-js-2,
    #particles-js-3 {
        background-position: 50% 35%;
    }
    #cover {
        width: 10% !important;
    }
    #tia,
    #revox {
        font-size: 48px;
    }
    #basmalah {
        width: 25% !important;
    }
    #instagram {
        width: 20% !important;
    }
    .same-object {
        height: 500px !important;
        width: 100%;
        background-position: 50% 40% !important;
    }
}
#player-wrapper {
    position: fixed;
}
.floating-icons {
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 999;
}

.start-stop {
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 10px;
  line-height: 2;
  color: #9E5454;
  transition: color 0.3s;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
}

.start-stop:hover {
  color: #9E5454;
}

#location {
    height: fit-content;
    background-color: #9E5454;
    clip-path: polygon(100% 0, 100% 98.5%, 50% 100%, 0 98.5%, 0 0, 50% 1.5%);
}

#timeline {
    background-color: #9E5454;
    clip-path: polygon(100% 0, 100% 98.5%, 50% 100%, 0 98.5%, 0 0, 50% 1.5%);
}

#top {
    background-color: #ffffff;
    border-top-left-radius: 14rem;
    border-top-right-radius: 14rem;
}

#bottom {
    background-color: #ffffff;
    border-bottom-left-radius: 14rem;
    border-bottom-right-radius: 14rem;
}

#streaming {
    height: 250px;
    width: 100%;
    background: url('/img/data/Foto Live Streaming.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.vertical-timeline-icon {
    top: calc(50% - 15px) !important;
}

.vertical-timeline-content::before {
    top: 50% !important;
}
</style>
