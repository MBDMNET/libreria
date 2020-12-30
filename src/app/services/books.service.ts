import { Injectable } from '@angular/core';
import { exit } from 'process';

@Injectable({providedIn: 'root'})
export class BooksService {

    private books:any[]=[
      {
        isbn:"978-84-08-23551-4",
        tittle: "Aquitania",
        author:"Eva García Sáenz de Urturi",
        genders:["Ficción histórica"],      
        synopsis: "1137. El duque de Aquitania —la región más codiciada de Francia— aparece muerto en Compostela. El cuerpo queda de color azul y con la marca del «águila de sangre», una ancestral tortura normanda. Su hija Eleanor decide vengarse y para ello se casa con el hijo del que cree su asesino: Luy VI el Gordo, rey de Francia.Pero el propio rey muere durante la boda en idénticas circunstancias. Eleanor y Luy VII intentarán averiguar, junto con los gatos aquitanos —los épicos espías de los duques—, quién quiere a los inexpertos reyes en el trono.Décadas antes de la muerte del duque de Aquitania, un niño sin nombre es abandonado en un bosque por sus cinco madres. Acaso un monstruo, o tal vez un santo, el pequeño superviviente acabará convirtiéndose en uno de los hombres más excepcionales del medievo europeo. Un cautivador thriller histórico que atraviesa un siglo repleto de venganzas, incestos y batallas. Un turbador misterio en torno a tres vidas que forjarán lo que más tarde se llamará Europa. Vuelve la autora de la exitosa Trilogía de la Ciudad Blanca (El silencio de la ciudad blanca, Los ritos del agua, Los señores del tiempo).",
        img: "assets/img/Aquitania.gif",
        aparicion: "05-11-2020",
        price:21.06,
        tax:0.04,
        excerpt:"1137. El duque de Aquitania —la región más codiciada de Francia— aparece muerto..."
      },
      {
        isbn:"978-84-233-5754-3",
        tittle: "El bosque de los cuatro vientos",
        author:"Oruña, María",
        genders:["Ficcion"],      
        synopsis: "A comienzos del siglo xix, el doctor Vallejo viaja de Valladolid a Galicia junto con su hija Marina para servir como médico en un poderoso monasterio de Ourense. Allí descubrirán unas costumbres muy particulares y vivirán la caída de la Iglesia. Marina, interesada en la medicina y la botánica pero sin permiso para estudiar, luchará contra las convenciones que su época le impone sobre el saber y el amor y se verá inmersa en una aventura que guardará un secreto de más de mil años. En nuestros días, Jon Bécquer, un inusual antropólogo que trabaja localizando piezas históricas perdidas, investiga una leyenda. Nada más comenzar sus indagaciones, en la huerta del antiguo monasterio aparece el cadáver de un hombre vestido con un hábito benedictino propio del xix. Este hecho hará que Bécquer se interne en los bosques de Galicia buscando respuestas y descendiendo por los sorprendentes escalones del tiempo.",
        img: "assets/img/El_bosque_de_los_cuatro_vientos.gif",
        aparicion: "25-08-2020",
        price:20.90,
        tax:0.04,
        excerpt:"A comienzos del siglo xix, el doctor Vallejo viaja de Valladolid a Galicia..."
      },
      {
        isbn:"978-84-08-23320-6",
        tittle: "La Puerta",
        author:"Manel Loureiro",
        genders:["Ficción histórica","Género policíaco y misterio","Obra de misterio y suspense"],      
        synopsis: "El hallazgo del cadáver de una joven, asesinada mediante una antigua forma ritual a los pies de la mítica Puerta de Alén, desconcierta a sus investigadores. La agente Raquel Colina es una recién llegada a ese rincón perdido de Galicia para tratar de salvar a su hijo, al que la medicina ya no puede curar. Sin otra alternativa, y llena de dudas, Raquel había recurrido a una menciñeira local, que prometía su sanación. Sin embargo, la misteriosa desaparición de la curandera y el descubrimiento de la víctima de la Puerta hacen sospechar a Raquel que ambos casos pueden estar relacionados. Con la complicidad de su compañero, en un ambiente mágico y rural que no acaba de comprender y donde todo el mundo parece guardar un secreto, la agente comenzará una desesperada cuenta atrás para resolver el caso y así hallar la última tabla de salvación que le queda a su hijo.",
        img: "assets/img/la_puerta.gif",
        aparicion: "29-09-2020",
        price:18.90,
        tax:0.04,
        excerpt:"El hallazgo del cadáver de una joven, asesinada mediante una antigua forma ritual..."
      },
      {
        isbn:"978-84-233-5754-3",
        tittle: "Las tinieblas y el alba (La precuela de Los pilares de la Tierra)",
        author:"Ken Follett",
        genders:["Ficción histórica","Género policíaco y misterio","Obra de misterio y suspense"],      
        synopsis: "LA PRECUELA DEL ÉXITO MUNDIAL LOS PILARES DE LA TIERRA En Las tinieblas y el alba, Ken Follett embarca al lector en un épico viaje que termina donde Los pilares de la Tierra comienza. Año 997, finales de la Edad Oscura. Inglaterra se enfrenta a los ataques de los galeses por el oeste y de los vikingos por el este. La vida es difícil y aquellos que ostentan algo de poder lo ejercen con puño de hierro y, a menudo, en conflicto con el propio rey. En estos tiempos turbulentos, tres vidas se entrecruzan: el joven constructor de barcos Edgar, a punto de fugarse con la mujer a la que ama, comprende que su futuro será muy diferente a lo que había imaginado cuando su hogar es arrasado por los vikingos; Ragna, la rebelde hija de un noble normando, acompaña a su marido a una nueva tierra al otro lado del mar solo para descubrir que las costumbres allí son peligrosamente distintas; y Aldred, un monje idealista, sueña con transformar su humilde abadía en un centro de saber admirado en toda Europa. Los tres se verán abocados a un enfrentamiento con el despiadado obispo Wynstan, decidido a aumentar su poder a cualquier precio. El gran maestro de la narrativa de acción y suspense nos transporta al ocaso de una época violenta y brutal y al comienzo de un nuevo tiempo en un monumental y emocionante relato de ambición y rivalidad, nacimiento y muerte, amor y odio. La crítica ha dicho... «El autor de Los pilares de la Tierra llega con un nuevo libro histórico y una preocupación muy actual.»El País «Pasas las páginas de Las tinieblas y el alba, precuela de Los pilares de la Tierra, y sientes el mismo placer que cuando bebes un gran vaso de agua a primera hora de la mañana. Entra fácil, relaja la mente, sacia el cuerpo. Pues lo mismo con las novelas del galés.»Álvaro Colomer, Tendencias «Ken Follett es, sin lugar a dudas, uno de los escritores más exitosos de la actualidad.»El Español «Sus libros crean adicción. No se leen. Se devoran.»La Voz de Asturias «Las tinieblas y el alba, la precuela de Los pilares de la Tierra, es todo un monumento (sin forma de catedral) a la integridad, el ingenio y la resiliencia contra el abuso de poder.»Esquire «Fiel a la receta con la que ha logrado tantos éxitos, Follett construye una tupida red de tramas entrelazadas en las que sus héroes solo resuelven cada uno de sus problemas para encontrar una amenaza aún mayor en la siguiente página.»eldiario.es «El escritor galés retoma el universo de su best seller Los pilares de la Tierra, que vendió más de 27 millones de copias en todo el mundo, en Las tinieblas y el alba, una esperada precuela que aborda el complejo periodo que vivió el mundo alrededor del año 1000, cuyas luchas y problemas resuenan en el presente.»El Cultural Sobre la saga Los pilares de la Tierra han dicho:«Fantástico desde todos los puntos de vista.»El Mundo «Follett es un maestro.»The Washington Post «Una obra que destaca como un triunfo del esfuerzo y la profesionalidad.»The Guardian «No hay rincón sin sorpresa ni página tediosa.»Qué leer «Sigo envidiando como el primer día la capacidad de Follett para entretener. Sus tramas funcionan siempre y te mantiene pegado a cada página.»Juan Gómez Jurado, ABC",
        img: "assets/img/las_tinieblas_y_el_alba.gif",
        aparicion: "15-09-2020",
        price:24.90,
        tax:0.04,
        excerpt:"LA PRECUELA DEL ÉXITO MUNDIAL LOS PILARES DE LA TIERRA..."
      },
      {
        isbn:"978-84-267-2604-9",
        tittle: "El gran libro de Angular",
        author:"Boada Oriols , David Miquel / GÓMEZ GUTIÉRREZ, JUAN ANTONIO",
        genders:["Lenguajes de programación y extensión/scripting: general"],      
        synopsis: "Angular es el framework que te permitirá desarrollar y mantener aplicaciones web del lado cliente (FronEnd). Podrás crear aplicaciones Single-Page Application (SPA) con las que conseguirás una experiencia de usuario tan fluida como cualquier aplicación de escritorio. Este libro presenta en 100 ejercicios prácticos todos los elementos (módulos, componentes, servicios, etc.) y apartados a considerar cuando te dispones a desarrollar aplicaciones con Angular. Asimismo, refuerza e introduce otros temas que participan activamente en el mundo del desarrollo web: Ejercicios sobre CSS, HTML, JSON y jQuery. Desarrollo de una aplicación MEAN completa, con su backend (Express) y frontend (Angular), que te permitirá el mantenimiento de una tabla de base de datos MongoDB. Explicación del trabajo con Bootstrap para que puedas realizar aplicaciones vistosas con muy poco esfuerzo y aprovechar un buen número de recursos ya ofrecidos por este framework complementario. Además, en la parte inferior de la primera página del libro encontrarás el código de acceso que te permitirá acceder de forma gratuita a los contenidos adicionales del libro en www.marcombo.info. Con Angular conseguirás un trabajo ordenado y escalable, pues favorece el uso del patrón de arquitectura MVC (Modelo Vista Controlador). Incluso, gracias a TypeScript, podrás realizar una programación orientada a objetos similar a la que harías con otros lenguajes de programación como Java o C#. Si quieres disponer de una buena base para seguir profundizando en el inmenso mundo de la programación web, ¡aventúrate a entrar en El gran libro de Angular!",
        img: "assets/img/programacion_angular.gif",
        aparicion: "20-09-2018",
        price:24.80,
        tax:0.04,
        excerpt:"Angular es el framework que te permitirá desarrollar y mantener aplicaciones web..."
      },
      {
        isbn:"978-84-267-2604-9",
        tittle: "ANALISIS DE GRANDES VOLUMENES DE DATOS EN ORGANIZACIONES",
        author:"LUIS JOYANES AGUILAR",
        genders:["Computación en la nube"],      
        synopsis: "Big Data (grandes volúmenes de datos o macrodatos) supone la confluencia de una multitud de tendencias tecnológicas que venían madurando desde la primera década del siglo cuando han explosionado e irrumpido con gran fuerza en organizaciones y empresas, en particular, y en la sociedad, en general. Muchas veces estos datos no están estructurados, esta tecnología viene a iluminarlos. El libro se divide en 3 partes principales, se introduce el tema, se descubre la infraestructura y la analítica del Big Data. Tiene en sus manos la referencia necesaria para introducirse en Big Data. Aprenda: ¿Qué es Big Data? Analítica de datos, analítica Web y analítica social. Sectores estratégicos de Big Data y Open Data. Conozca: Las mejores herramientas informáticas para procesar sus datos. Las nuevas tendencias tecnológicas y sociales que traen la nube y los Big Data.",
        img: "assets/img/big_data.gif",
        aparicion: "01-09-2013",
        price:22.80,
        tax:0.04,
        excerpt:"Big Data (grandes volúmenes de datos o macrodatos) supone la confluencia de..."
      },
      
    ];
    
    constructor() { }

    getBooks()
    {
       return this.books;
    }
    getBook(idx:string)
    {
      return this.books[idx];
    }

    searchBook(search:string){
      let booksArr:Books[]=[];
      console.log('conole desde servicios: '+search);
      search = search.toLowerCase(); //pasamos lo que nos llega a minuscula
      for(let book of this.books){
        let tittle = book.tittle.toLowerCase();
        if(tittle.indexOf( search )>=0)        {
          booksArr.push(book);         
          
        }
       
      }
      console.log(booksArr);
      return booksArr;
    }
    
  
    
}

export interface Books{
    isbn:string,
    tittle: string,
    author:string,
    genders:string[],      
    synopsis: string,
    img: string,
    aparicion: string,
    price:number,
    tax:number,
    excerpt:string
}