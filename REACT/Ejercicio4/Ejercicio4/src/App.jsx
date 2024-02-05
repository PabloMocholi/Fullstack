import TarjetaProducto from "./components/TarjetaProducto/TarjetaProducto"


function App() {

  let nintendo = [{
    id: 1,
    nombre: "Nintendo Switch",
    imagen: "https://i.blogs.es/1da4e7/intendo-switch/450_1000.jpg",
    precio: "300€",
    stock: "10",
    descripc: ["Nintendo Switch (ニンテンドー スイッチ Nintendō Suitchi?) es una consola de videojuegos desarrollada por Nintendo. Conocida en el desarrollo por su nombre código «NX», se dio a conocer en octubre de 2016 y fue lanzada mundialmente el 3 de marzo de 2017.",
      "Nintendo considera a Switch una consola híbrida. Se puede utilizar como consola de sobremesa con la unidad principal insertada en una estación de acoplamiento para conectarla con un televisor. Alternativamente, puede ser extraída de la base y utilizada de forma similar a una tableta a través de su pantalla táctil o colocada sobre una superficie gracias a su soporte plástico integrado siendo así visible por varios jugadores."]

  }, {
    id: 2,
    nombre: "Joy-Cons",
    imagen: "https://static.carrefour.es/hd_510x_/crs/cdn_static/catalog/hd/336770_00_1.jpg",
    precio: "75.99€",
    stock: "0",
    descripc: ["El versátil Joy-Con ofrece múltiples formas nuevas y sorprendentes para que los jugadores se diviertan. Se pueden usar dos Joy-Con de forma independiente en cada mano, o juntos como un solo mando de juego cuando se acopla al soporte Joy-Con. También se pueden conectar a la consola principal para usarlas en modo portátil o compartirse con amigos para disfrutar de la acción de dos jugadores en los juegos compatibles."]

  }, {
    id: 3,
    nombre: "Transportín Nintendo",
    imagen: "https://m.media-amazon.com/images/I/71L3JJFcltL._AC_UF1000,1000_QL80_.jpg",
    precio: "58€",
    stock: "2",
    descripc: ["Compatibilidad</b>: esta funda para Nintendo Switch está especialmente diseñada para Nintendo Switch. Delgado y portátil, almacenado de forma segura cuando viaja o cuando no está en uso",
      "Alta calidad: este estuche de transporte para Nintendo Switch está hecho de EVA dura, una carcasa dura duradera y un material interior suave que protege su consola Nintendo Switch sin daños ni rayones.",
      "Gran capacidad: compartimento principal para tu Nintendo Switch. Proporciona 20 compartimentos para guardar tus cartas de juego. Bolsillo de malla separado con cremallera para 2 botones Joy-Cons adicionales, cables de carga, cargador portátil delgado, auriculares y otros accesorios adicionales esenciales más pequeños de Nintendo Switch; asegura que sus artículos pequeños no se caigan",
      "Diseño fácil de usar: el compartimento principal está construido con una pequeña solapa que puede ayudarle a sacar el interruptor fácilmente. La pestaña también se puede utilizar como gancho y bucle para mantener el interruptor más estable sin que se caiga. El cabezal interior de la cremallera está hecho de nailon, no rayará el interruptor.",
      "Elección ideal: este delgado estuche de transporte portátil es una excelente opción de regalo para sus familiares y amigos, lo suficientemente fuerte como para una gran protección diaria y adecuado para viajar. Si tienes alguna pregunta sobre este estuche portátil para Nintendo Switch, contáctanos"]

  }, {
    id: 4,
    nombre: "Nintendo Switch Edición Pokemon",
    imagen: "https://www.powerplanetonline.com/cdnassets/nintendo_switch_oled_pokemon_escarlata_violeta_03_ad_l.jpg",
    precio: "700€",
    stock: "1",
    descripc: ["Nintendo Switch Edición Pokemon Púrpura y Escarlata, con una buena pantalla de 7 pulgadas",
      "Pantalla OLED de 7” - Soporte ancho ajustable - Base con puerto LAN - 64GB de almacenamiento interno – Altavoces con audio estéreo - Tres modos de juego - Basado en Pokemon",
      "La nueva consola Nintendo Switch Modelo OLED Edición Pokemon Púrpura y Escarlata tiene un acabado basado en la popular franquicia de Pokemon con una pantalla OLED de 7 pulgadas, que mostrará los colores de forma más intensa. Además, tiene un acabado basado en los Pokemon legendarios de las últimas entregas de Pokemon."]
  }, {
    id: 5,
    nombre: "Volante Mario",
    imagen: "https://www.tradeinn.com/f/13781/137814388/hori-volante-racing-nintendo-switch-mario-kart-pro-deluxe.jpg",
    precio: "84.34€",
    stock: "0",
    descripc: ["Experimenta la emoción de las carreras en tu Nintendo Switch con nuestro volante. Diseño ergonómico, controles accesibles y la opción de pedales para una experiencia inmersiva. Fácil de instalar, lleva tus juegos al siguiente nivel. ¡Hazte con el tuyo y disfruta de la velocidad como nunca antes!"]
  },
  {
    id: 6,
    nombre: "Fundas Silicona",
    imagen: "https://ae01.alicdn.com/kf/H17e4c534980d4cb1984d8a84153436e4H.jpg_640x640Q90.jpg_.webp",
    precio: "10€",
    stock: "23",
    descripc: ["Asegura la integridad de tu Nintendo Switch con nuestras fundas de silicona premium. Estas fundas están diseñadas con un ajuste perfecto para tu consola, ofreciendo una protección completa contra caídas, golpes y arañazos. Su material de silicona duradero absorbe los impactos, manteniendo tu Switch en condiciones óptimas durante más tiempo.",
      "Además de su excelente protección, estas fundas de silicona tienen un diseño delgado que no añade volumen innecesario a tu dispositivo, manteniendo su aspecto elegante y portátil. Los recortes precisos garantizan un acceso completo a todos los botones, puertos y funciones de la Switch, sin comprometer la comodidad ni la facilidad de uso",
      "Ya sea que estés jugando en casa o de viaje, nuestras fundas de silicona brindan una tranquilidad adicional, permitiéndote disfrutar de tus juegos sin preocupaciones. Disponibles en una variedad de colores y diseños, puedes personalizar tu Switch para que se adapte a tu estilo único.",
      "No arriesgues la seguridad de tu consola. Protege tu inversión con nuestras fundas de silicona de alta calidad y asegúrate de que tu Nintendo Switch esté siempre lista para la acción."]
  }]


  return (
    <>
      <h1 className="TitPagina">TIENDA"OFICIAL" NINTENDO</h1>
      <div className="DisplayTarjetas">
        {

          nintendo.map(item => {
            return (<TarjetaProducto key={item.id} nombre={item.nombre} imagen={item.imagen} precio={item.precio} stock={item.stock}>
              {item.descripc}
            </TarjetaProducto>)
          })
        }
      </div>
    </>


  )
}

export default App
