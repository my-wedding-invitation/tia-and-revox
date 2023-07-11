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
                        <div class="row mt-5 mb-5 text-center">
                            <div class="col-lg-12">
                                <h2 style="font-family: 'Great Vibes', cursive;color: #9E5454;">Suprihatin Setia Ningsih, S.Pd</h2>
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
                                <h2 style="font-family: 'Great Vibes', cursive;color: #9E5454;">Revox Rizkian</h2>
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
        <section id="counter" class="container-fluid">
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
                        class="btn mt-3" style="background-color: #9E5454; font-size: 12px; color: #fff;">
                        <i class="fa fa-calendar"></i> Google Calendar
                    </a>
                    <div class="mt-3">
                        <img class="img-fluid w-50" src="/img/data/basmalah.png" />
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
        <div ref="player" class="music-player"></div>
        <div class="floating-icons">
            <button class="start-stop" @click="toggleSong">
            <i :class="['fa', song.play ? 'fa-pause' : 'fa-play']"></i>
            </button>
        </div>
    </app-fragment>
</template>
<script>
import { Fragment } from 'vue-fragment';
import { mapActions, mapState } from 'pinia'
import { useGuestStore } from '@/store/guest'
import YouTubePlayer from 'youtube-player'

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
            }
        }
    },
    mounted() {
        const body = document.querySelector('body')
        body.classList.add('landing-page')
        body.classList.add('no-skin-config')
        this.registerSong()
        this.registerParticleJS()
        this.registerParticleJS('-2')
        this.registerLottieJS()
        this.countdownToDate('2023-07-23')
        $(this.$refs.open).modal('show')
        setTimeout(() => {
            this.registerParticleJS('-3')
        }, 1e3)
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
            this.loadYouTubeAPI().then(() => {
                this.$nextTick(() => {
                    this.song.player = YouTubePlayer(this.$refs.player, {
                        videoId: this.song.id,
                        playerVars: {
                            autoplay: 0,
                            controls: 0,
                            modestbranding: 1,
                            rel: 0,
                            loop: 1,
                            start: 0
                        }
                    })

                    this.song.player.on('ready', () => {
                        this.onPlayerReady()
                    })

                    this.song.player.on('stateChange', event => {
                        this.onPlayerStateChange(event)
                    })
                })
            })
        },
        loadYouTubeAPI() {
            return new Promise(resolve => {
                const tag = document.createElement('script')
                tag.src = 'https://www.youtube.com/iframe_api'
                const firstScriptTag = document.getElementsByTagName('script')[0]
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
                window.onYouTubeIframeAPIReady = () => {
                    resolve()
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
        openInvitation() {
            $(this.$refs.open).modal('hide')
        },
        toggleSong() {
            if (this.song.play) {
                this.song.player.pauseVideo()
            } else {
                this.song.player.playVideo()
            }
            this.song.play = !this.song.play
        },
        onPlayerReady(event) {
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
#particles-js,
#particles-js-2,
#particles-js-3 {
    position: absolute;
    width: 100%;
    height: 100%;
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
}
.music-player {
  width: 0;
  height: 0;
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
  font-size: 24px;
  color: #9E5454;
  transition: color 0.3s;
}

.start-stop:hover {
  color: #9E5454;
}
</style>