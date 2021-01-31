<template>
  <div>
    <section id="video">
      <video class="w-full" autoplay loop muted>
        <source src="../assets/VikaKevin/Home.mp4" type="video/mp4" />
      </video>
      <!-- <iframe
        autoplay
        style="displya: none"
        allowfullscreen="1"
        allow="accelerometer"
        clipboard-write
        encrypted-media
        gyroscope
        picture-in-picture
        width="600"
        height="400"
        frameborder="0"
        src="https://www.youtube.com/embed/AyxGnxL2KbU?color=white&playlist=GPQf_EF1jFg%2CisPWOKVBwAM&enablejsapi"
      ></iframe> -->
    </section>

    <section id="vikaDoa">
        <div class="bg-black bg-opacity-10">
            <img class="py-10 w-1/2 mx-auto" src="../assets/VikaKevin/bismillah.png">
            <p class="text-gray-200 mx-8 leading-relaxed tracking-wide text-gray-300 text-center">{{ mahaSuci }}</p>
            <div class="w-full py-8">
                <div class="flex px-5 py-3 justify-center">
                    <div class="card-time min-w-78 animate__animated animate__fadeInLeft animate__faster mr-3 ">
                        <p class="caption-time">00</p>
                        <p class="font-light text-gray-400 text-xs">d</p>
                    </div>
                    <div class="card-time mr-3 min-w-78 animate__animated animate__fadeInLeft animate__fast">
                        <p class="caption-time">00</p>
                        <p class="font-light text-gray-400 text-xs">h</p>
                    </div>
                    <div class="card-time mr-3 min-w-78 animate__animated animate__fadeInLeft animate__slower">
                        <p class="caption-time">00</p>
                        <p class="font-light text-gray-400 text-xs">m</p>
                    </div>
                    <div class="card-time mr-3 min-w-78 animate__animated animate__fadeInLeft animate__slow">
                        <p class="caption-time">00</p>
                        <p class="font-light text-gray-400 text-xs">s</p>
                    </div>
                </div>
            </div>
            <div class="date text-center py-12">
                <a href="https://calendar.google.com/calendar/r/eventedit?text=Vika+%26+Kevin+Hari+Pernikahan&dates=20200222T100000/20200222T220000&ctz=Asia/Jakarta&details=Kami+akan+sangat+senang+melihat+wajah+cerah+Anda+di+pernikahan+kami&location=Rumah+Mempelai+Wanita&pli=1&uid=1521339627addtocalendar&sf=true&output=xml">
                    <span class="bg-gray-600 py-3 px-10 text-gray-200 tracking-wider">Save Wedding</span> 
                </a>
            </div>
        </div>
    </section>

    <section id="vikaAyat">
      <div>
        <img
          class="py-3 mx-auto w-3/4"
          src="../assets/VikaKevin/frameBungaAtas.png"
        />

        <div class="grid grid-cols-3">
          <span class="greatVibes primary-heading text-right text-5xl">{{
            name.man
          }}</span>
          <span class="greatVibes text-center align-text-bottom text-xl"
            >&</span
          >
          <span class="greatVibes primary-heading text-left text-5xl">{{
            name.woman
          }}</span>
        </div>

        <blockquote cite="">
          <p class="my-14 mx-8 text-gray-500 text-center tracking-wider">
            "{{ surahs.ayah }}" <br />
            <span class="text-gray-800"> {{ surahs.surah }} </span>
          </p>
        </blockquote>

        <img
          class="py-3 mx-auto w-3/4"
          src="../assets/VikaKevin/frameBungaBawah.png"
        />
      </div>

      <div>

        <figure class="md:flex  p-8 md:p-0">
            <p class="greatVibes primary-heading text-center my-6 text-5xl">{{ name.woman }}</p>
            <!-- Female -->
            <div class="py-6">                
                <img class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full" src="../assets/VikaKevin/vika.jpg" alt="" width="384" height="512">
                <div class="pt-6 md:p-8 text-left md:text-left space-y-4">
                    <p class="text-lg font-semibold">
                        {{ name.fullNameFemale }}
                    </p>
                    <figcaption class="font-medium">
                        <div class="text-cyan-600">
                            Web Designer, Jakarta
                        </div>
                        <div class="text-gray-500">
                            Putri dari Alm Bp. Alim & Ibu Sholehah
                        </div>
                        <div> 
                            <a class="text-gray-500" href="https://www.instagram.com/joeel56/">@jooel56</a>
                        </div>
                    </figcaption>
                </div>
            </div>

            <!-- Male -->
            <div class="grid justify-items-stretch py-6">                
                <img class="w-32 h-32 justify-self-end md:w-48 md:h-auto md:rounded-none rounded-full" src="../assets/VikaKevin/kevin.png" alt="" width="384" height="512">
                <div class="pt-6 md:p-8 text-right md:text-left space-y-4">
                    <p class="text-lg font-semibold">
                        {{ name.fullNameMale }}
                    </p>
                    <figcaption class="font-medium">
                        <div class="text-cyan-600">
                            Mobile Dev, Jakarta
                        </div>
                        <div class="text-gray-500">
                            Putri dari Alm Bp. Yakub & Ibu Yani
                        </div>
                        <div> 
                            <a class="text-gray-500" href="https://www.instagram.com/joeel56/">@kevinPalu</a>
                        </div>
                    </figcaption>
                </div>
                <p class="greatVibes primary-heading text-center my-6 text-5xl">{{ name.man }}</p>
            </div>
        </figure>
      </div>
    </section>

    <section id="saveDate">
        <div class=" my-6">
            <h3 class="greatVibes text-center p-6 text-4xl">Save The Date</h3>
            <!-- <hr class="border-b w-8 mx-auto"> -->
            <div class="akadNikah">
                <h4 class="pt-6 px-4 text-xl tracking-wide">Akad Nikah</h4>
                <hr class="mx-4 border-b w-8">
                <div class="mx-4 my-4 items-center grid grid-flow-col auto-cols-max">
                  <div class="pr-4">
                    <svg class=" w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div class="">
                    <p>Sabtu, 29 Januari 2021</p>
                  </div>
                </div>

                <div class="mx-4 my-4 items-center grid grid-flow-col auto-cols-max">
                  <div class="pr-4">
                    <svg class=" w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div class="">
                    <p>Pukul 09.00 WIB</p>
                  </div>
                </div>

                <div class="mx-4 my-4 items-center grid grid-flow-col flex flex-wrap auto-cols-max">
                  <div class="pr-4">
                    <svg class=" w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div class="">
                    <p>Gedung Islamic Center Bekasi <br> Jl. Jenderal A. Yani No.22</p>
                  </div>
                </div>

                <div class="date text-center py-12">
                    <a href="https://calendar.google.com/calendar/r/eventedit?text=Vika+%26+Kevin+Hari+Pernikahan&dates=20200222T100000/20200222T220000&ctz=Asia/Jakarta&details=Kami+akan+sangat+senang+melihat+wajah+cerah+Anda+di+pernikahan+kami&location=Rumah+Mempelai+Wanita&pli=1&uid=1521339627addtocalendar&sf=true&output=xml">
                        <span class="bg-gray-600 py-3 px-10 text-gray-200 tracking-wider">Save Akad</span> 
                    </a>
                </div>
            </div>

            <div class="resepsi">
                <h4 class="pt-6 px-4 text-xl tracking-wide">Resepsi</h4>
                <hr class="mx-4 border-b w-8">
                <div class="mx-4 my-4 items-center grid grid-flow-col auto-cols-max">
                  <div class="pr-4">
                    <svg class=" w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div class="">
                    <p>Sabtu, 29 Januari 2021</p>
                  </div>
                </div>

                <div class="mx-4 my-4 items-center grid grid-flow-col auto-cols-max">
                  <div class="pr-4">
                    <svg class=" w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div class="">
                    <p>Pukul 11.00 13.00 WIB</p>
                  </div>
                </div>

                <div class="mx-4 my-4 items-center grid grid-flow-col flex flex-wrap auto-cols-max">
                  <div class="pr-4">
                    <svg class=" w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div class="">
                    <p>Gedung Islamic Center Bekasi <br> Jl. Jenderal A. Yani No.22</p>
                  </div>
                </div>

                <div class="date text-center py-12">
                    <a href="https://calendar.google.com/calendar/r/eventedit?text=Vika+%26+Kevin+Hari+Pernikahan&dates=20200222T100000/20200222T220000&ctz=Asia/Jakarta&details=Kami+akan+sangat+senang+melihat+wajah+cerah+Anda+di+pernikahan+kami&location=Rumah+Mempelai+Wanita&pli=1&uid=1521339627addtocalendar&sf=true&output=xml">
                        <span class="bg-gray-600 py-3 px-10 text-gray-200 tracking-wider">Save Resepsi</span> 
                    </a>
                </div>

                <div class="prokes flex justify-center">
                  <div class="bg-gray-200 max-w-80 rounded-md mx-2 bg-opacity-50 ">
                    <svg  class="h-16 w-16 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z" />
                    </svg>
                    <p class="text-xs text-center p-2">Gunakan Masker</p>
                  </div>
                  <div class="bg-gray-200 max-w-80 rounded-md mx-2 bg-opacity-30">
                    <svg class="h-16 w-16 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                    </svg>
                    <p class="text-xs text-center p-2">Handsanitizer</p>
                  </div>
                  <div class="bg-gray-200 max-w-80 rounded-md mx-2 bg-opacity-30">
                    <svg class="h-16 w-16 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                    <p class="text-xs text-center p-2">Jaga jarak</p>
                  </div>
                </div>
            </div>
        </div>
    </section>

    <section id="mapsAkad">
      <div>
        <div class="my-8 mx-4">
          <p class="font-black py-4">Lokasi <span class="font-light">Akad Nikah</span></p>
          <div class="w-full rounded-xl">
            <div id="map" style="width:100%;height:250px"></div>
          </div>
        </div>
      </div>
    </section>

    <section id="ucapan">
      <div class="container px-2 py-4 mx-auto flex">
        <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Ucapan</h2>
          <p class="leading-relaxed mb-5 text-gray-600">Ucapan untuk memperlai</p>
          <form>            
            <div class="relative mb-4">
              <input type="text" placeholder="Nama" id="nama" name="email" class=" mb-3 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              <input type="text" placeholder="Siapa kamu? contoh: keluarga mempelai" id="siapa" name="email" class="mb-3  w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              <textarea id="message" placeholder="Pesan untuk mempelai" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>          
            <button type="submit" class="text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit 

            </button>
          </form>
        </div>
      </div>
    </section>

    <section id="ucapanKalian">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="flex flex-wrap -m-4">
          <div class="p-4 lg:w-1/2 md:w-full">
            <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
              <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="w-8 h-8"  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-bold mb-3">Sarah <span class="text-xs">Teman</span> </h2>
                <p class="leading-relaxed text-base">Selamat uciw dan ryan mudah2an jadi keluarga sakinah mawwadah warrahmah jadi istri dan ibu shalehah Amiin selamat menempuh ibadah luvvv.</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>      
    </section>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import "animate.css";
import ky from 'ky';
export default {
  setup() {
    const state = reactive({
      name: {
        man: "Kevin",
        woman: "Vika",
        fullNameFemale: "Vika Baitul Sodiqomah",
        fullNameMale: "Kevin Paul"
      },
      surahs: {
        ayah:
          "Dan diantara tanda-tanda kekuasaannya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa tentram kepadanya, dan dijadikannya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kamu yang berfikir.",
        surah: "Ar-Rum : 21",
      },
      mahaSuci: "Maha suci Allah SWT yang telah menciptakan mahluknya berpasang-pasangan. Ya Allah SWT perkenankanlah kami :",
      people: [],
    });

    onMounted(async () =>{
        
        loadPeople()
        
        myMap()

    })

    const myMap = () => {
      let myCenter = new google.maps.LatLng(-6.307318045365646, 106.83700708239041);
      // -6.307318045365646, 106.83700708239041
		  let mapCanvas = document.getElementById("map");
		  let mapOptions = {center: myCenter, zoom: 5};
		  let map = new google.maps.Map(mapCanvas, mapOptions);
		  let marker = new google.maps.Marker({position:myCenter});
		  marker.setMap(map);
    }

    const loadPeople = async () => {
        const people = await ky.get('https://randomuser.me/api/')
        console.log(people);
    }


    return {
      ...toRefs(state),
      loadPeople
    };
  },
};
</script>

<style lang="scss">
.greatVibes {
  font-family: "Great Vibes", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.primary-heading {
  color: #af7722;
}
</style>