import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class BooksService {

    private books:any[]=[
      {
        isbn:"978-84-08-23551-4",
        tittle: "Aquitania",
        author:"Eva García Sáenz de Urturi",
        genders:"Ficción histórica",      
        synopsis: "1137. El duque de Aquitania —la región más codiciada de Francia— aparece muerto en Compostela. El cuerpo queda de color azul y con la marca del «águila de sangre», una ancestral tortura normanda. Su hija Eleanor decide vengarse y para ello se casa con el hijo del que cree su asesino: Luy VI el Gordo, rey de Francia.Pero el propio rey muere durante la boda en idénticas circunstancias. Eleanor y Luy VII intentarán averiguar, junto con los gatos aquitanos —los épicos espías de los duques—, quién quiere a los inexpertos reyes en el trono.Décadas antes de la muerte del duque de Aquitania, un niño sin nombre es abandonado en un bosque por sus cinco madres. Acaso un monstruo, o tal vez un santo, el pequeño superviviente acabará convirtiéndose en uno de los hombres más excepcionales del medievo europeo. Un cautivador thriller histórico que atraviesa un siglo repleto de venganzas, incestos y batallas. Un turbador misterio en torno a tres vidas que forjarán lo que más tarde se llamará Europa. Vuelve la autora de la exitosa Trilogía de la Ciudad Blanca (El silencio de la ciudad blanca, Los ritos del agua, Los señores del tiempo).",
        img: "assets/img/Aquitania.gif",
        aparicion: "05-11-2020",
        price:21.06,
        impuestos:0.4
      },
      {
        isbn:"978-84-233-5754-3",
        tittle: "El bosque de los cuatro vientos",
        author:"Oruña, María",
        genders:"25-08-2020",      
        synopsis: "A comienzos del siglo xix, el doctor Vallejo viaja de Valladolid a Galicia junto con su hija Marina para servir como médico en un poderoso monasterio de Ourense. Allí descubrirán unas costumbres muy particulares y vivirán la caída de la Iglesia. Marina, interesada en la medicina y la botánica pero sin permiso para estudiar, luchará contra las convenciones que su época le impone sobre el saber y el amor y se verá inmersa en una aventura que guardará un secreto de más de mil años. En nuestros días, Jon Bécquer, un inusual antropólogo que trabaja localizando piezas históricas perdidas, investiga una leyenda. Nada más comenzar sus indagaciones, en la huerta del antiguo monasterio aparece el cadáver de un hombre vestido con un hábito benedictino propio del xix. Este hecho hará que Bécquer se interne en los bosques de Galicia buscando respuestas y descendiendo por los sorprendentes escalones del tiempo.",
        img: "assets/img/El_bosque_de_los_cuatro_vientos.gif",
        aparicion: "25-08-2020",
        price:20.90,
        impuestos:0.4
      },
      {
        isbn:"978-84-08-23320-6",
        tittle: "La Puerta",
        author:"Manel Loureiro",
        genders:"25-08-2020",      
        synopsis: "El hallazgo del cadáver de una joven, asesinada mediante una antigua forma ritual a los pies de la mítica Puerta de Alén, desconcierta a sus investigadores. La agente Raquel Colina es una recién llegada a ese rincón perdido de Galicia para tratar de salvar a su hijo, al que la medicina ya no puede curar. Sin otra alternativa, y llena de dudas, Raquel había recurrido a una menciñeira local, que prometía su sanación. Sin embargo, la misteriosa desaparición de la curandera y el descubrimiento de la víctima de la Puerta hacen sospechar a Raquel que ambos casos pueden estar relacionados. Con la complicidad de su compañero, en un ambiente mágico y rural que no acaba de comprender y donde todo el mundo parece guardar un secreto, la agente comenzará una desesperada cuenta atrás para resolver el caso y así hallar la última tabla de salvación que le queda a su hijo.",
        img: "assets/img/la_puerta.gif",
        aparicion: "29-09-2020",
        price:18.90,
        impuestos:0.4
      },
      {
        isbn:"978-84-233-5754-3",
        tittle: "La Puerta",
        author:"Oruña, María",
        genders:"25-08-2020",      
        synopsis: "A comienzos del siglo xix, el doctor Vallejo viaja de Valladolid a Galicia junto con su hija Marina para servir como médico en un poderoso monasterio de Ourense. Allí descubrirán unas costumbres muy particulares y vivirán la caída de la Iglesia. Marina, interesada en la medicina y la botánica pero sin permiso para estudiar, luchará contra las convenciones que su época le impone sobre el saber y el amor y se verá inmersa en una aventura que guardará un secreto de más de mil años. En nuestros días, Jon Bécquer, un inusual antropólogo que trabaja localizando piezas históricas perdidas, investiga una leyenda. Nada más comenzar sus indagaciones, en la huerta del antiguo monasterio aparece el cadáver de un hombre vestido con un hábito benedictino propio del xix. Este hecho hará que Bécquer se interne en los bosques de Galicia buscando respuestas y descendiendo por los sorprendentes escalones del tiempo.",
        img: "assets/img/El_bosque_de_los_cuatro_vientos.gif",
        aparicion: "25-08-2020",
        price:20.90,
        impuestos:0.4
      },
      {
        isbn:"978-84-233-5754-3",
        tittle: "La Puerta",
        author:"Oruña, María",
        genders:"25-08-2020",      
        synopsis: "A comienzos del siglo xix, el doctor Vallejo viaja de Valladolid a Galicia junto con su hija Marina para servir como médico en un poderoso monasterio de Ourense. Allí descubrirán unas costumbres muy particulares y vivirán la caída de la Iglesia. Marina, interesada en la medicina y la botánica pero sin permiso para estudiar, luchará contra las convenciones que su época le impone sobre el saber y el amor y se verá inmersa en una aventura que guardará un secreto de más de mil años. En nuestros días, Jon Bécquer, un inusual antropólogo que trabaja localizando piezas históricas perdidas, investiga una leyenda. Nada más comenzar sus indagaciones, en la huerta del antiguo monasterio aparece el cadáver de un hombre vestido con un hábito benedictino propio del xix. Este hecho hará que Bécquer se interne en los bosques de Galicia buscando respuestas y descendiendo por los sorprendentes escalones del tiempo.",
        img: "assets/img/El_bosque_de_los_cuatro_vientos.gif",
        aparicion: "25-08-2020",
        price:20.90,
        impuestos:0.4
      },
      
    ];
    constructor() { }

    getBooks()
    {
       return this.books;
    }
  
    
}

export interface Books{
    isbn:string,
    tittle: string,
    author:string,
    genders:string,      
    synopsis: string,
    img: string,
    aparicion: string,
    price:Float32Array,
    impuestos:Float32Array
}