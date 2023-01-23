const Home = {
    async render() {
        return `
        <section id="tupperware-cuaca">
            <div class="main-image">
                <img src="image/weather-app.png" alt="">
            </div>
            <div class="tupperware-desc">
                <p>Ketahui informasi cuaca terkini berdasarkan wilayah yang anda inginkan dan berita gempa yang akurat dengan data yang diperoleh dari BMKG</p>
            </div>
        </section>

        <section class="layanan">
            <p class="text-layanan">Layanan Kami</p>
            
            <div class="container-layanan">
                <a href="#cuaca" id="cuaca-page">
                    <div class="cek-cuaca">
                        <div class="container-image">
                            <img src="image/weather-app.png" alt="">
                        </div>                    
                        <div class="text-cuaca text-info-layanan">
                            <h2>Cek Cuaca</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis est, quaerat non culpa iure ullam?</p>
                        </div>
                    </div>
                </a>

                <a href="#gempa" id="gempa-page">
                    <div class="det-gempa">
                        <div class="container-image">
                            <img src="image/earthquake.png" alt="">
                        </div>                    
                        <div class="text-gempa text-info-layanan">
                            <h2>Berita Gempa</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem doloribus ullam magni, molestiae magnam earum.</p>
                        </div>
                    </div>
                    </a>
            </div>    
        </section>
        `;
    },

    async afterRender() {

    }
}

export default Home;