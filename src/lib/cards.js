const answers = [
  "72 vírgenes.",
  "8 onzas de heroína colombiana.",
  "Un barril de 50 litros de lubricante.",
  "Un pozo lleno de cunaguaros.",
  "Un arbolito de navidad con ensalada rusa debajo.",
  "Una maldición guajira.",
  "Un pepito frío.",
  "Una presentación de Powerpoint.",
  "Una pistola de agua llena de pipí.",
  "Una bolsa de caraotas mágicas.",
  "Un desayuno balanceado.",
  "Par de putas.",
  "Un güevo e' negro.",
  "Un carajo.",
  "Un güevo más negro y grande.",
  "Un ventiañero usando capucha.",
  "Un ano blanqueado.",
  "Un nini.",
  "Un llorón.",
  "Una circunsición",
  "Un tumor cerebral.",
  "Una parranda de coñazos.",
  "Un video de un gato tan cuchi que te mueres.",
  "Un raspón clandestino en el culo.",
  "Una cava llena de órganos.",
  "Un policía que también es un perro.",
  "Una mano de mierda.",
  "Un rayo láser de la muerte.",
  "Un condón roto.",
  "Una fiesta de cumpleaños decepcionante.",
  "Una cucharada de guasacaca.",
  "Un tiroteo.",
  "Un halcón con capucha.",
  "Un feto.",
  "Una boca sucia.",
  "Un morrocoy hediondo.",
  "Una caricia por dentro del muslo.",
  "A good sniff.",
  "Adolfo Cubas cubierto en aceite de bebé.",
  "Unos maricos jugando volleyball.",
  "Un beta.",
  "Una vida de tristeza.",
  "Bajos estándares de vida.",
  "Una nube de marihuana.",
  "Un tipo en leggins.",
  "Un tipo echando los perros.",
  "Un micropene.",
  "Un viejo en patines.",
  "Un mimo convulsionando.",
  "Un mono fumando Belmont.",
  "El cunaguaro del Pinar que le cortaron las piernas.",
  "Un ajuste de cuentas.",
  "Una ladilla.",
  "Un latinlover.",
  "Una pila de cuerpos.",
  "Una piñata llena de chipos.",
  "Un sombrero depinga.",
  "Una pandilla enemiga.",
  "Un mongólico.",
  "Un dragón triste y gordo sin amigos.",
  "Un pajazo.",
  "Una sorpresa salada",
  "Una negra culona.",
  "Una fiesta de bomberos.",
  "Un mar de peos.",
  "Un universo paralelo ligeramente más mierda.",
  "Un morrocoy mordiéndote la punta del güevo.",
  "Un cover de 'Caballo Viejo'",
  "La Hora Loca en una boda.",
  "Unos carajos con raybans blancos.",
  "Un pelo e' bola.",
  "Un montón de pelo.",
  "Unos pantalones de cuero.",
  "Una nave espacial.",
  "Una explosión nuclear",
  "Un pony.",
  "Una familia disfuncional.",
  "Una cuca que te lleva a otra dimensión.",
  "Un cuello de tortuga incómodo.",
  "Una red de mentiras.",
  "La Lista Tascón.",
  "La papada de Juan Barreto.",
  "Una cachapa.",
  "SIDA.",
  "Desodorante MUM Bolita.",
  "Juan Vicente Gomez.",
  "Pararle bola.",
  "Que te peguen un tiro.",
  "Literalmente robarle un chocolate a un bebé.",
  "La Piedra.",
  "Los Niños de África",
  "Agricultura.",
  "Alcoholismo.",
  "Se te mueren los panas",
  "Gente que se va del país",
  "Toda esta sangre.",
  "Un all-you-can-eat.",
  "Monaguillos.",
  "El Mega Match.",
  "Piedreros.",
  "Un episodio de la Hojilla",
  "Complejo de Edipo",
  "Un colectivo chavista.",
  "Diarrea.",
  "Las tetas de Diosa Canales.",
  "Que se te pare la paloma por horas.",
  "Un rufinol.",
  "Un polichacao honesto sin nada que perder.",
  "Una lobotomía.",
  "Una ola de bachachos.",
  "Collar anal.",
  "Otra película de vampiros mariqueando.",
  "Otro año con Chávez.",
  "Una línea de perico.",
  "Pedir permiso en vez de pedir perdón.",
  "Unas latas en la cola de Mercal.",
  "Arnold Schwarzenegger.",
  "Gochas que no son putas.",
  "Unos cacheteros.",
  "Actitud.",
  "Ramo Verde.",
  "Perros calientes.",
  "Canibalismo.",
  "BATMAN!!!",
  "Bolas.",
  "Henrique Capriles.",
  "Un poco de porfavor.",
  "Pegarle a la jeva.",
  "Cantar la zona.",
  "Harina PAN",
  "Ser un adulto con un poco de diligencias que hacer.",
  "Ser un güevón.",
  "Ser un dinosaurio.",
  "Ser un jodido hechizero.",
  "Ser un buen polvo.",
  "Ser fabuloso.",
  "Ser un marginal.",
  "Estar prendido.",
  "Tener real en banda.",
  "Mario Silva revolcándose con cachorritos.",
  "Laureano Marquez hablando paja.",
  "Engrapar la pea.",
  "Perras.",
  "Negros.",
  "Bling bling.",
  "Peos con sopa.",
  "Mamarle el güevo a un bicho en la calle.",
  "Mocos.",
  "Llaneros.",
  "Poner orden en la pea.",
  "Lila Morillo.",
  "Paja.",
  "Ponerte unos pantalones que te quedan bien.",
  "Cards Against Humanity.",
  "Calientagüevos.",
  "Catapultas.",
  "Mal de ojo.",
  "Centauros.",
  "Manos de machetes.",
  "Carisma.",
  "Hacer trampa en las Olimpíadas Especiales.",
  "Abuso de menores.",
  "Candidatas al Miss Venezuela.",
  "Niños con correa.",
  "Caballerosidad.",
  "Edgar Ramírez.",
  "Una linterna.",
  "Muertos del 11 de abril.",
  "Guacucos.",
  "Viejas Cafetalerasß.",
  "Una visita a la morgue de Bello Monte.",
  "Abortos con un gancho de ropa.",
  "Paloma.",
  "Peleas de gallos.",
  "La UCV.",
  "Esconder una carpa.",
  "Consultores.",
  "Hacerse el güevón.",
  "Toser en un papo.",
  "El Gocho de Chicha El Chichero.",
  "Una deuda.",
  "Llorar leyendo Cabrujas.",
  "Oler pega.",
  "Enpiernarse.",
  "Atención al cliente de CANTV.",
  "Mejoras cibernéticas.",
  "Daddy issues.",
  "El cinturón de papi.",
  "Bailar con una escoba.",
  "Darth Vader.",
  "Una violación.",
  "Bebés muertos.",
  "Padres muertos.",
  "Muerto atropellado por Pastor Maldonado.",
  "Desvirgar a una cachifa.",
  "Posesión demoníaca.",
  "Frenillos falsos.",
  "Diosdado.",
  "Dedos de güevo.",
  "Cenar con una muñeco de cartón de Marieta Santana",
  "Changa.",
  "Tirar por el culo.",
  "Hacer lo correcto.",
  "Pizza de Domino's.",
  "Aliento a Dorito.",
  "Double penetración.",
  "Rascarse solo.",
  "Meterse perico para estar despierto",
  "Matar a tiros a un pana.",
  "Respirar muy fuerte",
  "Un enano tosiendo",
  "Morir solo",
  "Morir de diarrea",
  "Morir.",
  "Comerte el bigote de Maduro para obtener superpoderes.",
  "Comerte un cachito de un solo bocado.",
  "Comerte a un bebé.",
  "Comerte un güevo",
  "Comerte el último chigüire que existe.",
  "Papeles desechables.",
  "Japoneses viejos.",
  "Leche de elfo.",
  "Células madres.",
  "Emociones.",
  "Suecas gigantes.",
  "Disfunción eréctil.",
  "Estrógeno.",
  "Genocidio.",
  "Es mejor necesitar un seguro y tenerlo que necesitarlo y no tenerlo.",
  "Lo que esperabas.",
  "Jalarse bola mutuamente",
  "Existir.",
  "Esperar un eructo y echar un waffle en el suelo.",
  "Un niple.",
  "Hacerse las tetas.",
  "Escacez en Mercal.",
  "Una vaina bien.",
  "Tirarse un peo e irse.",
  "El miedo a ser uno mismo.",
  "Darle de comer a Soledad Bravo.",
  "Meterse droga mientras estás preñada.",
  "Unos peos.",
  "Flan piche.",
  "Echarse quesillo en las nalgas.",
  "Conseguir el segundo audio.",
  "Conseguir un esqueleto.",
  "Pintar con los dedos.",
  "Meterle el dedo.",
  "Tiros al aire.",
  "Fisting.",
  "Billetes de 100.",
  "Una vaguada.",
  "Quedarse cagando en bolsa.",
  "La paloma.",
  "Robots voladores que matan gente.",
  "Cuaimas voladoras.",
  "Un prepucio.",
  "Olvidar el 11 de abril.",
  "Chávez.",
  "Vainas gratis.",
  "Fricción.",
  "Plomo al hampa.",
  "Panas que se comen toda mierda.",
  "Amigos con derecho.",
  "Acabar el trapo.",
  "La zona de cruising del cerro Avila.",
  "Spoilear Game of Thrones",
  "Cine tetica.",
  "Gandalf.",
  "Aliens maricos.",
  "Pollo.",
  "Super guardias nacionales.",
  "Genghis Khan.",
  "Piercings en la paloma.",
  "La pollina de Carlos Baute.",
  "Porno de estacionamiento de maracay.",
  "Que te secuestre Robert Serra.",
  "Echarte una pea con Listerine.",
  "Que te coja el cast de Improvisto.",
  "Quitarle las pantaletas, elegantemente.",
  "Desnudarse para ver Globovisión.",
  "Meterse droga.",
  "Arrecharte tanto que te cagas un poquito.",
  "Ghandi.",
  "La llorona.",
  "Envolver un hamster en envoplast.",
  "Jevas que se la pasan hablando por Whatsapp.",
  "Dar el 110%.",
  "Juego de barrios.",
  "Calentamiento global.",
  "Gloryholes.",
  "Chocochitas.",
  "Un chivo comiendo una lata.",
  "Orcos.",
  "Dios.",
  "Ir por la vida soltando coñazos.",
  "Lluvia de oro.",
  "No hablar como un tuki.",
  "Abuela.",
  "Las cenizas del abuelo.",
  "Contenido no apto para niños.",
  "Asaltatumbas.",
  "Carajos que no llaman luego de la primera cita.",
  "Calentarla.",
  "Harry Potter erotica.",
  "Tirar sobre una pizza.",
  "Tener chuzos en lugar de piernas.",
  "Huérfanos de padre.",
  "María Isabel de Chávez.",
  "No ser marico.",
  "La mirada asesina de Maria Corina.",
  "Hipsters de la castellana.",
  "Revisionistas históricos.",
  "La Universidad Bolivariana.",
  "El video porno de Diosa Canales.",
  "Lateros.",
  "Esperanza.",
  "Hormonas.",
  "Depilación láser.",
  "Carne de chivo.",
  "Queso caliente..",
  "Gente bella..",
  "Hulk Hogan.",
  "El Desastre de Vargas.",
  "La Inmaculada Concepción.",
  "Música llanera.",
  "Incesto.",
  "Soledad indescriptible.",
  "Lujuría sin límites.",
  "Diseño Inteligente.",
  "Problemas en el cuarto.",
  "Italianos.",
  "Jafar.",
  "Jean-Claude Van Damme.",
  "Jeff Goldblum.",
  "Pajearse en una piscina de lágrimas de carajitos.",
  "Jew-fros.",
  "Una sinagoga.",
  "Hablar paja.",
  "Jose Gregorio Hernandez.",
  "Julio Borges.",
  "Brincarle a la gente.",
  "Solo la puntita miamol.",
  "Justin Bieber.",
  "Morotizados.",
  "Kanye West.",
  "Keanu Reaves.",
  "Un vacío de Polar.",
  "Chamos con cáncer de culo.",
  "Kim-Jong-il.",
  "Un GI Joe en un pesebre.",
  "Lactar.",
  "Lady Gaga.",
  "La bola perdida de Lance Armstrong.",
  "Minas antipersonakes.",
  "Empollar un huevo.",
  "Dejar un mensaje en la contestadora.",
  "Lepra.",
  "Decepcionar a todo el mundo.",
  "Subir de nivel.",
  "Lamer vainas para decir que son tuyas.",
  "Comemierda, literal.",
  "Vivir en la calle.",
  "Loki, el hermano de Thor.",
  "Hablapaja.",
  "Fantasías chavistas.",
  "Quemar las arepas..",
  "Ser una paloma.",
  "Conocer a un pana.",
  "Poner cara de culo.",
  "Besar un güego.",
  "El Sambil.",
  "Carne de hombre.",
  "Pajearte.",
  "Tiempo para uno.",
  "Yo.",
  "MechaHitler.",
  "Cobertura mediatica.",
  "Música en vivo.",
  "Hombres.",
  "La Regla.",
  "Michael Jackson.",
  "Los abdominales de Leopoldo López.",
  "Un poquito de autismo.",
  "Gritar.",
  "Doble moral.",
  "La voz de El CHUUUUUNIOR.",
  "Herpes en la boca.",
  "Marico, voltea.",
  "La escena donde muere Mufasa.",
  "Allahu akbar.",
  "Múltiples puñaladas.",
  "Caerse a tiros.",
  "Mi colección de dildos.",
  "Mi primer muerto.",
  "Mi paloma.",
  "La prima que está buena.",
  "Mis nalgas.",
  "Mis peos internos.",
  "Mi machete.",
  "Mi estado civil.",
  "Mi vida sexual.",
  "Mi alma.",
  "Mi cuca.",
  "Natalie Portman.",
  "Agrandarme la paloma.",
  "Selección natural.",
  "Nazis.",
  "Necrofilia.",
  "Neil Patrick Harris.",
  "Musica del centro piramidal del sambil.",
  "Voz Veis.",
  "Nicolas Cage.",
  "Pezones que cortan.",
  "La Baralt de noche.",
  "No servir pa' un coño.",
  "Que te sepan a mierda los pobres.",
  "No tener sexo.",
  "No devolver un mamerto.",
  "Nada.",
  "Esclavitud moderna.",
  "Bailar merengue en una boda.",
  "Obesidad.",
  "Inamovilidad laboral..",
  "Olor a viejo.",
  "Música de fondo.",
  "Una anillo para gobernarlos a todos.",
  "Mil torontos.",
  "Oompa-Loompas.",
  "Pulgares opuestos.",
  "Sobrecompensar.",
  "Joder a tu papá.",
  "Pegarle a tu madre.",
  "Chupetas gigantes.",
  "Cerveza Polar.",
  "Pac-Man incontrolablemente ahogandose en semen.",
  "Pandas tirando",
  "Pantaletas.",
  "Separar el Mar Rojo.",
  "Aguafiestas..",
  "Trans.",
  "Mear una piedra de riñón.",
  "Post-its pasivo-agresivos.",
  "Pedófilos.",
  "Mear un poquito.",
  "Envidiarle el güevo a un pana.",
  "Cuadrarte culos en una clínica de abortos.",
  "Fotos de tetas.",
  "Darle un cachazo a un rehen.",
  "Bukkake.",
  "Polichacao.",
  "Cagar pa' lante y pa' tras. Por siempre.",
  "Decisiones, cada día. Alguien pierde, alguien ganaß.",
  "Gente pobre.",
  "Chistes ofensivos del Holocausto.",
  "Pornstars.",
  "Muslos robustos.",
  "Bailar.",
  "Soltar las plumas",
  "Carajitos.",
  "Fingir felicidad.",
  "Fingir que te importa.",
  "Jugar truco.",
  "Huevos de pterodáctilo.",
  "Pubertad.",
  "Escarnio público.",
  "Acabar dentro.",
  "Parir cada 9 meses.",
  "¡Cachorritos!",
  "Meter una lonja de queso Paisa en el bluray.",
  "Tirarse un peo con la cuca.",
  "Quiche.",
  "Apretar las nalgas.",
  "Preguntas de CNU.",
  "Racismo.",
  "Violar y saquear.",
  "Re-regalar.",
  "Represión.",
  "Chavistas.",
  "Tirar arrecho.",
  "El vaquero invertido.",
  "Cabalgar por el horizonte.",
  "Arrancarle el corazón a un hombre.",
  "Revolcarte en tu tumba.",
  "Callejero.",
  "Luis Chataing.",
  "RoboCop.",
  "El Conde del Guacharo.",
  "Carlos Andrés Pérez.",
  "Roofies.",
  "Correr desnudo por la calle y cagarse encima.",
  "Chino sin camisa.",
  "Nacho montado encima de Chino.",
  "Samuel L. Jackson.",
  "El niño Jesús.",
  "La bolsa de San Nicolás.",
  "Cilia Flores.",
  "Solo de saxofón.",
  "Despellejar.",
  "Ciencia.",
  "La iglesia de Pare de Sufrir",
  "Gritar como un loco.",
  "Mal de páramo.",
  "Picazón de bolas.",
  "Rascarse una teta.",
  "Sean Connery.",
  "Sean Penn.",
  "Seducción.",
  "Flagelarte.",
  "Odiarse a uno mismo.",
  "Seppuku.",
  "Abdominales.",
  "Una obra de teatro protagonizada por Nelson Bustamante.",
  "Sexting.",
  "Humillación sexual.",
  "Tensión sexual.",
  "Peleas de almohadas.",
  "Siamesas.",
  "Chespirito.",
  "Pemones.",
  "Ugueth Urbina haciendo parrilla.",
  "Compartir inyectadoras.",
  "Callarse la jeta.",
  "Skeletor.",
  "Meterle un coñazo a una vieja racista.",
  "Cámara lenta.",
  "Lechina.",
  "El queso que sale cuando no te lavas el guevo.",
  "Estornudar y tirarse un peo mientras te haces la paja.",
  "Oler gasolina.",
  "Medias de fútbol.",
  "Cagarte encima.",
  "Un güevón con una guitarra en la playa.",
  "Birdman.",
  "Una vaina demasiado jodida.",
  "Sopa demasiado caliente.",
  "Space Jam en VHS.",
  "Brownies puyaos.",
  "Invitado musical, Trino Mora.",
  "Unos cuadritos.",
  "Gastar real.",
  "Una danta.",
  "Combustión espontánea.",
  "¡Carnavales!",
  "Estereotipos validados.",
  "La voz de seductor de Alex Cabrera.",
  "Reír cuando escuchas palabras que terminan en 'ano'.",
  "Peligro.",
  "Someter a un oso y cogértelo.",
  "Diarrea explosiva.",
  "Pensamientos suicidas.",
  "Arcoiris.",
  "Sexo sorpresa.",
  "Emigrar a Barcelona.",
  "El dulce sabor de la venganza.",
  "Llegar al orgasmo.",
  "Pasarse a Movistar.",
  "Escapar.",
  "Guarimbas.",
  "Arrancarle las bolas y los ojos a alguien y luego ponerle las bolas en los ojos.",
  "Dispararle al Santa de Banesco.",
  "Quitarte la franela.",
  "Tetas operadas..",
  "Enseñarle a un robot lo que se sienta ser amado.",
  "Team-building.",
  "Embarazo juvenil.",
  "Porno de barrio.",
  "Torsión testicular.",
  "Ese culo.",
  "El gordo de la clase..",
  "Beber petróleo.",
  "El Big Bang.",
  "La sangre de cristo.",
  "Una lonchera de los Ositos Cariñositos.",
  "Yanomamis.",
  "El baile del perrito.",
  "El general.",
  "Tú sí eres frescolita.",
  "La Fuerza.",
  "Google.",
  "Sancocho.",
  "Banesquín.",
  "Los Cocodrilos de Caracas.",
  "La Biblia.",
  "El chulo.",
  "Los judíos.",
  "El KKK.",
  "Kool-aid piche.",
  "Musipan.",
  "El Rey León.",
  "Los Criollitos.",
  "El Papa.",
  "Los Nachos de Friday's.",
  "La Venida de Cristo.",
  "El Día de la Juventud.",
  "Los Llanos.",
  "Musicales de navidad de Venevisión.",
  "RCTV.",
  "Un anillo de bodas.",
  "La vía más difícil.",
  "Pedir un taxi.",
  "Meladed llegando tarde.",
  "World of Warcraft.",
  "Un pajazo de tu abuelo.",
  "La pálida.",
  "El clítoris.",
  "Las corporaciones.",
  "El día que atacaron los pájaros.",
  "La Guerra Económica.",
  "Toda la Internet.",
  "La estupidez del hombre.",
  "La fruta prohibida.",
  "Los cuatro brazzos de Vishnu.",
  "Los gays.",
  "Una cámara de cristal.",
  "La vida.",
  "Mexicanos echándole bola.",
  "La luz del día.",
  "El corazón de un margariteño.",
  "Hipo.",
  "La agenda gay.",
  "El cuerpo humano.",
  "La muerte del universo.",
  "La mano invisible.",
  "Arepera socialista.",
  "El lechero.",
  "Un parto.",
  "Mezcla de razas.",
  "La humedad de tu boca.",
  "Lo nuevo de Radiohead.",
  "Una placenta.",
  "Tus padres tirando.",
  "Los lisiados.",
  "El Ciudadano, Leopoldo Castillo.",
  "La destrucción sistemática de la calidad de vida del venezolano.",
  "La Trocha.",
  "Los terroristas.",
  "Porno/",
  "Las manos callosas de los niños que cosen tu ropa.",
  "Las minorías.",
  "El significado de la vida.",
  "El metro.",
  "La violación de nuestros derechos humanos.",
  "Así somos los blancos.",
  "Meterle mano.",
  "Tres meses sin tirar.",
  "Pezones pequeños..",
  "Winston Vallenilla.",
  "Lengua.",
  "El papo de Lilian Tintori.",
  "Demasiada gelatina.",
  "Tripear una bola.",
  "Twittear.",
  "Dos enanas cagandose en una cubeta.",
  "Estupidez humana.",
  "Sopa.",
  "Darle un cuchillo a un mono.",
  "Par de coñazos.",
  "Atropellar a alguien.",
  "Cierre Maágico",
  "Viagra.",
  "Cuadrarse un culo en una guarimba.",
  "Vigilantes.",
  "Aplausos.",
  "Vikingos.",
  "Vomitar en medio de una paja.",
  "Esperar al matrimonio.",
  "Despertar en bolas en Petare.",
  "Sexo con marionetas de terciopelo.",
  "Waterboarding.",
  "Armas de destrucción masiva.",
  "Usar un pulpo como pantaleta.",
  "Darle la vuelta a los interiores para usarlos 2 veces.",
  "Pilates.",
  "Cuando te tiras un peo y crees que te cagaste.",
  "Llorar como una puta.",
  "Azotar a un esclavo desobediente.",
  "Sacártelo.",
  "Blancos.",
  "Oligarcas.",
  "Amas de casa.",
  "Gilberto Correa.",
  "Guiñarle el ojo a la mamá de un pana.",
  "Limpiarme el culo.",
  "Jevas en comerciales de yogurt.",
  "Voto femenino.",
  "Bla bla bla.",
  "Paz mundial.",
  "ESTE CHAVEZ DE MIERDA",
  "Hongo vaginal.",
  "Iron Man"
];


const questions = [
  "Una romántica cena a la luz de las velas estaría incompleta sin _____.",
  "Una buena entrevista de trabajo empieza con un apretón de manos y termina con _____.",
  "Luego de desmayarme de la pea en Año Nuevo, me desperté con _____.",
  "Luego de meses de debate la MUD dijo \"_____!\”",
  "Luego de la vaguada de Vargas, García Carneiro le trajo _____ a la gente.",
  "La medicina alternativa está promoviendo los beneficios de _____.",
  "Y me hubiera salido con la mía si no hubiera sido por _____.",
  "Que fue lo que trajiste para muestra y enseña?",
  "Antropólogos recientemente descubrieron _____.",
  "Como parte de su contrato, Chayanne no puede tener _____ en su vestidor.",
  "Como parte de su régimen, Marieta Santana todas las mañanas se mete _____.",
  "JAIMITO LLEGÓ AL SALÓN CON _____.",
  "Antes de ser presidente debo borrar cualquier evidencia de mi _____.",
  "Pero antes de matarlo, Señor Bond, debo mostrarle _____.",
  "Llama al INAM conseguimos _____ en el colegio.",
  "Mímina no fue lo mismo cuando mi mamá le quitó _____ al juego.",
  "Este Carnaval se estrena, _____: The Musical en el Trasnocho.",
  "Tío Wilmer, tengo problemas con ______ y quiero tu consejo.",
  "Armando Reverón tuvo un período donde dibujaba _____.",
  "Durante bachillerato era un güevón, luego conseguí el _____ Club.",
  "Durante su crisis de mediana edad, mi papá disfrutaba de _____.",
  "Cuando estoy tirando, me gusta pensar en _____.",
  "Cada navidad mi tío se rasca y me cuenta sobre _____.",
  "Al suelo todo el mundo. Acá no venimos a quebrar a nadie. Venimos a por _____.",
  "Al fin. Un servicio que entrega _____ a tu puerta.",
  "¿Problemas en el _____? ¡Intenta _____!",
  "El que controla _____ controla el mundo.",
  "Mira, flaca, vamos a mi casa y te muestro mi _____.",
  "Como mantengo mi soltería.",
  "No sé cómo se peleará la Tercera Guerra Mundial, pero la cuarta se peleará con ______.",
  "Yo bebo para olvidar _____.",
  "Se acabó el amor, empezó el _____.",
  "Yo aprendí a las malas que uno no puede andar llorando por _____.",
  "Yo estoy demasiado buena como para preocuparme por _____.",
  "Mi tarea se la comió _____.",
  "En 1000 años el papel será historia, usaremos _____ como moneda.",
  "En prisón puedes cambiar 200 cigarros por _____.",
  "Al final Michael Jack solo podía pensar en _____.",
  "En Roma dicen que en el Vaticano tienen un cuarto solo para _____.",
  "En el Museo de los Niños abrieron una exposición para _____.",
  "En su nuevo album, Chino y Nacho cantan sobre _____.",
  "Con la hablitante, Nicolás Maduro legaliza _____.",
  "En Apure aprueban el uso _____ para fomentar la unión famiiar.",
  "Es que el venezolano tiene el _____ en la cabeza.",
  "Daniela Alvarado hace de _____ en su nueva novela.",
  "En el séptimo infierno, los malandros tienen que soportar _____ por la eternidad.",
  "En Venezuela Santa le da _____ a los niños malos.",
  "Es una lástima que ahora los chamos solo están pendientes de _____.",
  "Jesus es _____.",
  "Los pemones cambiaron su estilo de vida cuando conocieron _____.",
  "Hijo, si te quieres meter en _____, Yo no voy a detenerte. Solo mantente alejado de _____.",
  "Nawebonada, lo deseo.",
  "No me digas que me quieres, dime _____.",
  "El nuevo programa de VTV es sobre _____.",
  "La liga de beisbol ha prohíbido _____.",
  "Capaz nació así. Capaz lo suyo es _____.",
  "Hay nuevos ricos que pagan demasiado real por _____.",
  "El dinero no compra el amor, pero compra _____.",
  "Venezuela, tierra de _____.",
  "A la profesora la botaron por traer _____ al salón.",
  "Mi vida es puro _____ y _____.",
  "Mi mamá me armó un peo cuando me vio metido en _____.com.",
  "J.K. Rowling presenta: Harry Potter y la Cámara de _____.",
  "A continuación en Meridiano TV: La Serie Mundial de _____.",
  "Con el Mazo Dando: cómo hablarle a un motorizado sobre _____.",
  "A mí en Navidad me dieron _____.",
  "Solo hay dos cosas seguras: la muerte y _____.",
  "La ciencia no puede explicar el origen de _____.",
  "Las ratas de laboratorio se vuelven más inteligentes al comer _____.",
  "La ley prohibe usar _____ en el avión.",
  "El Sebin tortura a guarimberos con _____.",
  "La cita era una mierda hasta que descubrimos que los dos amábamos _____.",
  "La excursión fue una mierda hasta que descubrimos _____.",
  "La rehabilitación mejoró cuando comenzamos con _____.",
  "Es un derecho humano.",
  "Ya contamos los votos. El nuevo presidente de Venezuela es _____.",
  "Estas navidades _____ debe salvar la navidad.",
  "Todo se fue a la mierda cuando _____ salió del closet.",
  "¿Esta es la cola para _____?",
  "Hoy en El Propio: ______ en la cama.",
  "Luis Chataing no para de hablar de _____.",
  "Hoy en Vale TV: _____ el documental.",
  "Parece que _____-Man no era el héroe que necesitábamos.",
  "Despierta, Venezuela. Estamos perdiendo la guerra contra _____.",
  "¿De qué sirve pelear unos con otros?",
  "¿Qué me importa en la vida?",
  "Mis padres me esconden algo.",
  "Llegó _____ y se acabó la orgía.",
  "Me lo traje de México.",
  "Me lo comí.",
  "Los cubanos lo que quieren es _____.",
  "Los viejos huelen burda a eso.",
  "Ricardo Sánchez se metió _____ por el culo.",
  "_____ en la comida china.",
  "_____ terminó mi última relación.",
  "_____ mejora con la edad.",
  "_____ me da gases.",
  "No hay que llevar _____ a una playa nudista.",
  "Leopoldo Mendoza come _____ en el desayuno.",
  "Batman tiene como debilidad _____.",
  "_____ me mantiene caliente.",
  "_____ manchó mi sofá.",
  "_____ siempre aviva la fiesta.",
  "Los negros aman _____.",
  "Tú te llegas con _____ y a alguna te coges.",
  "A la abuela le encantaría _____",
  "_____ la sacó del barrio.",
  "_____ es el mejor amigo de una dama.",
  "_____ es mi droga.",
  "_____ es mi superpoder.",
  "Huele a _____.",
  "Oigo _____.",
  "_____ sabe a culo.",
  "_____ es la gallina de los huevos de oro.",
  "_____ es demasiado emo.",
  "_____ es la nueva dieta.",
  "Me salió _____ como juguetico de McDonald's.",
  "¿Hay _____ en esta mierda?",
  "Cuando sea presidente haré el ministerio de _____.",
  "Yo haría una estatua de _____ en el Aeripuerto de la Carlota.",
  "Cagué _____ y creo que eso no es normal.",
  "La octava plaga de Egipto fue _____.",
  "Yo me hago pajas pensando en _____.",
  "Más feo que una mexicana sin duda es _____.",
  "Estoy pegajoso. Debe ser por _____.",
  "Tengo sueño. ¿Será _____?",
  "Me duele por _____.",
  "_____. Aprobado para niños.",
  "_____. Sirve en teoría, no sirve en la práctica.",
  "_____. No puedes comer solo uno.",
  "_____. Choca los cinco.",
  "_____. ¡Es una trampa!",
  "_____. Así quiero morir.",
  "_____: Sabroso hasta la última gota.",
  "_____ en la pasarela de la UNEFA.",
  "Si la virgen fuera andina y San José de los Llanos, el niño Jesús sería______.",
  "_____? Bájate el app."
];

module.exports = {
  questions: questions,
  answers: answers
};
