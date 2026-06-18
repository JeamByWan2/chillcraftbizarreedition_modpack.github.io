/* ===========================================================
   Base de datos de Mods
   Estructura: { categoryId: { titulo, mods: [...] } }
   =========================================================== */
const db = {
        "performance": {
        "titulo": "⚙️ Optimización y Rendimiento",
        "mods": [
            {
                "nombre": "All The Leaks",
                "url": "https://www.curseforge.com/projects/1091339",
                "descripcion": "Soluciona fugas de memoria subyacentes en el código base y dependencias de Forge.",
                "version": "1.1.1+1.20.1-forge",
                "autor": "Uncandango",
                "jar": "alltheleaks-1.1.1+1.20.1-forge.jar"
            },
            {
                "nombre": "Alternate Current",
                "url": "https://www.curseforge.com/projects/548115",
                "descripcion": "Algoritmo de redstone altamente optimizado que mitiga el lag en los circuitos.",
                "version": "1.7.0",
                "autor": "Space Walker",
                "jar": "alternate_current-mc1.20-1.7.0.jar"
            },
            {
                "nombre": "Async Logger",
                "url": "https://www.curseforge.com/projects/1491426",
                "descripcion": "Desplaza la escritura de logs a un hilo asíncrono para evitar micro-bloqueos en el hilo principal.",
                "version": "1.1.1+1.20.1-forge",
                "autor": "decce",
                "jar": "asynclogger-1.1.1+1.20.1-forge.jar"
            },
            {
                "nombre": "AttributeFix",
                "url": "https://www.curseforge.com/projects/280510",
                "descripcion": "Elimina los límites arbitrarios del sistema de atributos (armadura, daño) para un cálculo eficiente a gran escala.",
                "version": "21.0.5",
                "autor": "Darkhax",
                "jar": "AttributeFix-Forge-1.20.1-21.0.5.jar"
            },
            {
                "nombre": "BadOptimizations",
                "url": "https://www.curseforge.com/projects/949555",
                "descripcion": "Micro-optimizaciones al código del juego enfocadas en los sistemas de luz y colisiones.",
                "version": "2.4.1",
                "autor": "Thosea",
                "jar": "BadOptimizations-2.4.1-1.20.1.jar"
            },
            {
                "nombre": "Balm",
                "url": "https://www.curseforge.com/projects/531761",
                "descripcion": "Capa de abstracción que facilita la compatibilidad y optimiza la ejecución cruzada de mods.",
                "version": "7.3.38",
                "autor": "BlayTheNinth",
                "jar": "balm-forge-1.20.1-7.3.38-all.jar"
            },
            {
                "nombre": "Bee Fix",
                "url": "https://www.curseforge.com/projects/547989",
                "descripcion": "Corrige problemas de rendimiento severos relacionados con los cálculos de ruta e IA de las abejas.",
                "version": "1.0.7",
                "autor": "Lupicus, MacTso",
                "jar": "BeeFix-1.20-1.0.7.jar"
            },
            {
                "nombre": "Bocchium",
                "url": "https://www.curseforge.com/projects/905450",
                "descripcion": "Colección de optimizaciones experimentales de red y carga para cliente y servidor.",
                "version": "1.20.1-0.0.3",
                "autor": "TeamPotato",
                "jar": "bocchium-1.20.1-0.0.3.jar"
            },
            {
                "nombre": "chunksending mod",
                "url": "https://www.curseforge.com/projects/831663",
                "descripcion": "Modifica la tasa de transferencia de chunks del servidor al cliente previniendo la saturación del ancho de banda.",
                "version": "1.20.1-2.8",
                "autor": "Someaddon",
                "jar": "chunksending-1.20.1-2.8.jar"
            },
            {
                "nombre": "Chunky",
                "url": "https://modrinth.com/mod/fALzjamp",
                "descripcion": "Herramienta crítica de pregeneración de chunks multihilo para estabilizar los TPS del servidor.",
                "version": "1.3.146",
                "autor": "pop4959",
                "jar": "Chunky-1.3.146.jar"
            },
            {
                "nombre": "clientcrafting mod",
                "url": "https://www.curseforge.com/projects/888790",
                "descripcion": "Traslada los cálculos lógicos del crafteo al cliente para aligerar la carga del servidor.",
                "version": "1.20.1-2.1",
                "autor": "Someaddon",
                "jar": "clientcrafting-1.20.1-2.1.jar"
            },
            {
                "nombre": "Clumps",
                "url": "https://www.curseforge.com/projects/256717",
                "descripcion": "Agrupa orbes de experiencia físicamente para reducir dramáticamente el lag por exceso de entidades renderizadas.",
                "version": "12.0.0.4",
                "autor": "Jaredlll08",
                "jar": "Clumps-forge-1.20.1-12.0.0.4.jar"
            },
            {
                "nombre": "Concurrent Chunk Management Engine (Forge)",
                "url": "https://www.curseforge.com/projects/1484205",
                "descripcion": "Reescribe el motor de chunks para utilizar subprocesos múltiples, acelerando radicalmente la generación de terreno.",
                "version": "0.2.0+alpha.13",
                "autor": "RelativityMC, ishland, sjhub xinian",
                "jar": "c2meF-0.2.0+alpha.13-all.jar"
            },
            {
                "nombre": "Connectivity Mod",
                "url": "https://www.curseforge.com/projects/470193",
                "descripcion": "Resuelve problemas de conexión, timeouts y mejora la capa de comunicación en la red.",
                "version": "1.20.1-7.6",
                "autor": "Someaddons",
                "jar": "connectivity-1.20.1-7.6.jar"
            },
            {
                "nombre": "Connector Extras",
                "url": "https://www.curseforge.com/projects/1148422",
                "descripcion": "Librerías auxiliares integradas para mejorar la compatibilidad y rendimiento de Sinytra Connector.",
                "version": "1.11.2+1.20.1",
                "autor": "Su5eD",
                "jar": "ConnectorExtras-1.11.2+1.20.1-rea.jar"
            },
            {
                "nombre": "CrashExploitFixer",
                "url": "https://www.curseforge.com/projects/1079896",
                "descripcion": "Filtra y parchea peticiones de paquetes maliciosos o exploits que pueden sobrecargar o crashear el servidor.",
                "version": "1.1.0",
                "autor": "Drex",
                "jar": "crashexploitfixer-forge-1.1.0+1.20.1.jar"
            },
            {
                "nombre": "Cull Less Leaves Reforged",
                "url": "https://www.curseforge.com/projects/840788",
                "descripcion": "Mejora el rendimiento en bosques descartando la renderización de hojas interiores sin sacrificar la densidad visual.",
                "version": "1.20.1-1.0.5",
                "autor": "CCr4ft3r (this port), isXander (original fabric version)",
                "jar": "CullLessLeaves-Reforged-1.20.1-1.0.5.jar"
            },
            {
                "nombre": "Cupboard utilities",
                "url": "https://www.curseforge.com/projects/326652",
                "descripcion": "Librería base que provee rutinas de código optimizadas compartidas por múltiples mods técnicos.",
                "version": "1.20.1-3.7",
                "autor": "Someaddon",
                "jar": "cupboard-1.20.1-3.7.jar"
            },
            {
                "nombre": "DespawnTweaker",
                "url": "https://www.curseforge.com/projects/905468",
                "descripcion": "Ajusta agresivamente la lógica de desaparición de entidades hostiles lejanas para liberar RAM constante.",
                "version": "1.20.1-1.0.0",
                "autor": "TeamPotato",
                "jar": "despawn_tweaker-1.20.1-1.0.0.jar"
            },
            {
                "nombre": "DEUF - Duplicate Entity UUID Fix",
                "url": "https://www.curseforge.com/projects/296646",
                "descripcion": "Previene caídas del servidor eliminando silenciosamente colisiones de identificadores UUID duplicados en entidades.",
                "version": "1.20.1-1.3",
                "autor": "CAS_ual_TY",
                "jar": "deuf-1.20.1-1.3.jar"
            },
            {
                "nombre": "Dynamic FPS",
                "url": "https://www.curseforge.com/projects/335493",
                "descripcion": "Frena activamente la renderización, reduciendo uso de procesador y RAM al 0.1% cuando se hace alt-tab fuera del juego.",
                "version": "3.11.4",
                "autor": "juliand665 & LostLuma",
                "jar": "dynamic-fps-3.11.4+minecraft-1.20.0-forge.jar"
            },
            {
                "nombre": "Embeddium",
                "url": "https://www.curseforge.com/projects/908741",
                "descripcion": "Modifica por completo el pipeline de OpenGL, duplicando o triplicando los fotogramas (FPS) estables.",
                "version": "0.3.31+mc1.20.1",
                "autor": "embeddedt",
                "jar": "embeddium-0.3.31+mc1.20.1.jar"
            },
            {
                "nombre": "Enhanced Block Entities",
                "url": "https://www.curseforge.com/projects/452046",
                "descripcion": "Mejora masivamente el rendimiento renderizando entidades de bloque (cofres, letreros) mediante caché instanciado.",
                "version": "0.9+1.20",
                "autor": "FoundationGames",
                "jar": "enhancedblockentities-0.9+1.20.jar"
            },
            {
                "nombre": "EntityCulling",
                "url": "https://www.curseforge.com/projects/448233",
                "descripcion": "Usa trazado de rayos asíncrono para verificar visibilidad y detener la renderización de entidades ocultas.",
                "version": "1.10.2",
                "autor": "tr7zw",
                "jar": "entityculling-forge-1.10.2-mc1.20.1.jar"
            },
            {
                "nombre": "Farsight mod",
                "url": "https://www.curseforge.com/projects/495693",
                "descripcion": "Mantiene cacheados chunks locales en el cliente permitiendo distancias de visión superiores al límite del servidor.",
                "version": "1.20.1-4.5",
                "autor": "Love, Cheese and small house plants",
                "jar": "farsight-1.20.1-4.5.jar"
            },
            {
                "nombre": "Fast IP Ping",
                "url": "https://www.curseforge.com/projects/904356",
                "descripcion": "Paraleliza las solicitudes de ping en la lista de servidores para una actualización casi instantánea sin bloqueos.",
                "version": "1.0.11",
                "autor": "Fallen_Breath",
                "jar": "fast-ip-ping-v1.0.11-mc1.20.4-forge.jar"
            },
            {
                "nombre": "Fast Item Frames",
                "url": "https://www.curseforge.com/projects/1210171",
                "descripcion": "Deshabilita el renderizado complejo en marcos de objetos cuando no se están visualizando directamente.",
                "version": "20.1.5",
                "autor": "Fuzs",
                "jar": "FastItemFrames-v20.1.5-1.20.1-Forge.jar"
            },
            {
                "nombre": "Fast NBT",
                "url": "https://www.curseforge.com/projects/1417466",
                "descripcion": "Optimiza la serialización y el análisis de etiquetas NBT para reducir la carga en el hilo principal.",
                "version": "1.20.1-1.3-forge",
                "autor": "Desconocido",
                "jar": "fastnbt-1.20.1-1.3-forge.jar"
            },
            {
                "nombre": "Fast Noise Mod",
                "url": "https://www.curseforge.com/projects/1460602",
                "descripcion": "Implementa generadores de ruido de alto rendimiento para acelerar cálculos de terreno y biomas.",
                "version": "1.0.11",
                "autor": "ZenXArch",
                "jar": "zfastnoise-1.0.11+1.20+forge.jar"
            },
            {
                "nombre": "Fast Paintings",
                "url": "https://www.curseforge.com/projects/883287",
                "descripcion": "Modifica el modelo de dibujado de los cuadros para que no impacten los cuadros por segundo al agruparse.",
                "version": "1.20-1.2.7",
                "autor": "MehVahdJukaar",
                "jar": "fastpaintings-1.20-1.2.7.jar"
            },
            {
                "nombre": "fastasyncworldsave mod",
                "url": "https://www.curseforge.com/projects/951499",
                "descripcion": "Evita los picos de lag (stutters) procesando el guardado automático del mundo de manera asíncrona.",
                "version": "1.20.1-2.6",
                "autor": "Someaddon",
                "jar": "fastasyncworldsave-1.20.1-2.6.jar"
            },
            {
                "nombre": "FastEvent",
                "url": "https://www.curseforge.com/projects/1249053",
                "descripcion": "Optimiza el bus de eventos subyacente de Forge descartando iteraciones innecesarias.",
                "version": "1.1.1",
                "autor": "ZZZank",
                "jar": "FastEvent-1.20.1-1.1.1.jar"
            },
            {
                "nombre": "FastQuit",
                "url": "https://www.curseforge.com/projects/1177884",
                "descripcion": "Permite retornar al menú principal al instante mientras el mundo finaliza su guardado en segundo plano.",
                "version": "3.0.1+1.20.1forge",
                "autor": "KingContaria, Kaleb Langley",
                "jar": "Fastquit-3.0.1+1.20.1forge.jar"
            },
            {
                "nombre": "Faster Random",
                "url": "https://www.curseforge.com/projects/912121",
                "descripcion": "Reemplaza el generador de números aleatorios subyacente de Java por alternativas de mayor rendimiento computacional.",
                "version": "5.1.0",
                "autor": "AnOpenSauceDev",
                "jar": "fasterrandom-5.1.0.jar"
            },
            {
                "nombre": "Ferrite Core",
                "url": "https://www.curseforge.com/projects/429235",
                "descripcion": "Optimizador que altera los estados y bloques cacheados de Java para reducir la asignación masiva de memoria RAM.",
                "version": "6.0.1",
                "autor": "malte0811",
                "jar": "ferritecore-6.0.1-forge.jar"
            },
            {
                "nombre": "Flerovium",
                "url": "https://www.curseforge.com/projects/1142875",
                "descripcion": "Colección de parches de micro-optimización de código matemático y matrices internas.",
                "version": "1.2.18",
                "autor": "Desconocido",
                "jar": "flerovium-forge-1.20.1-1.2.18-all.jar"
            },
            {
                "nombre": "Gnetum",
                "url": "https://www.curseforge.com/projects/1220460",
                "descripcion": "Optimiza los diccionarios y estructuras de datos nativos de la base del juego para un acceso más veloz a memoria.",
                "version": "2.4.3",
                "autor": "decce",
                "jar": "gnetum-2.4.3.jar"
            },
            {
                "nombre": "Gpu memory leak fix",
                "url": "https://www.curseforge.com/projects/882495",
                "descripcion": "Corrige fugas específicas de VRAM presentes en la implementación base de renderizado de Minecraft.",
                "version": "1.20.1-1.8",
                "autor": "Someaddon",
                "jar": "gpumemleakfix-1.20.1-1.8.jar"
            },
            {
                "nombre": "Icterine",
                "url": "https://www.curseforge.com/projects/974774",
                "descripcion": "Reestructura la forma en que el juego asigna hilos asíncronos disminuyendo la latencia de procesamiento.",
                "version": "1.3.0",
                "autor": "Mephodio",
                "jar": "Icterine-forge-1.20.0-1-1.3.0.jar"
            },
            {
                "nombre": "ImmediatelyFast",
                "url": "https://www.curseforge.com/projects/686911",
                "descripcion": "Mod brutal que refactoriza OpenGL redirigiendo llamadas inútiles optimizando interfaces y mobs.",
                "version": "1.5.4+1.20.4",
                "autor": "RK_01",
                "jar": "ImmediatelyFast-Forge-1.5.4+1.20.4.jar"
            },
            {
                "nombre": "Immersive Optimization",
                "url": "https://www.curseforge.com/projects/1163206",
                "descripcion": "Ajusta parámetros de cálculos matemáticos para modelos 3D y colisiones complejas in-game.",
                "version": "0.1.4",
                "autor": "Luke100000",
                "jar": "immersive_optimization-forge-1.20.1-0.1.4.jar"
            },
            {
                "nombre": "Ixeris",
                "url": "https://www.curseforge.com/projects/1285307",
                "descripcion": "Limita recalculos visuales ineficientes en modelos de entidades al moverse fuera de cámara.",
                "version": "4.2.0+1.20.1-forge",
                "autor": "decce",
                "jar": "Ixeris-4.2.0+1.20.1-forge.jar"
            },
            {
                "nombre": "Kerria",
                "url": "https://www.curseforge.com/projects/1503432",
                "descripcion": "Estandariza y optimiza los motores de cálculos de luz disminuyendo caídas de fotogramas al minar.",
                "version": "1.0.4+1.20.1-forge",
                "autor": "decce",
                "jar": "Kerria-1.0.4+1.20.1-forge.jar"
            },
            {
                "nombre": "Krypton Reno",
                "url": "https://www.curseforge.com/projects/1269169",
                "descripcion": "Optimiza la pila de red del juego para mejorar el rendimiento de la conexión y reducir la latencia.",
                "version": "26.1.0-1.20.1",
                "autor": "tuxed, 404",
                "jar": "Krypton Reno-forge-1.20.1-26.1.0-1.20.1.jar"
            },
            {
                "nombre": "leaky mod",
                "url": "https://www.curseforge.com/projects/856906",
                "descripcion": "Parchea y recolecta basura activamente en eventos y variables que causan fugas crónicas de RAM en Forge.",
                "version": "1.20.1-2.3",
                "autor": "Someaddon",
                "jar": "leaky-1.20.1-2.3.jar"
            },
            {
                "nombre": "Limited Chunkloading",
                "url": "https://www.curseforge.com/projects/456640",
                "descripcion": "Evita sobrecargas en servidores bloqueando la carga incontrolada de chunks debido a máquinas de vuelo o exploits.",
                "version": "1.8",
                "autor": "Desconocido",
                "jar": "limitedchunks-1.20.1-4.1.jar"
            },
            {
                "nombre": "Load My F***ing Tags",
                "url": "https://www.curseforge.com/projects/656346",
                "descripcion": "Evita errores de registro en el arranque y optimiza el tiempo de indexación de tags de objetos.",
                "version": "1.0.4+1.20.1",
                "autor": "Blodhgarm",
                "jar": "lmft-1.0.4+1.20.1-forge.jar"
            },
            {
                "nombre": "MaxHealthFix",
                "url": "https://www.curseforge.com/projects/492246",
                "descripcion": "Evita bucles y lag resolviendo desincronizaciones del cliente respecto a los valores de salud máxima modificada.",
                "version": "12.0.4",
                "autor": "Darkhax",
                "jar": "MaxHealthFix-Forge-1.20.1-12.0.4.jar"
            },
            {
                "nombre": "memorysettings mod",
                "url": "https://www.curseforge.com/projects/526901",
                "descripcion": "Reasigna dinámicamente comportamientos de GC y memoria base para mitigar bloqueos por falta de asignación.",
                "version": "1.20.1-6.0",
                "autor": "Love, Cheese and small house plants",
                "jar": "memorysettings-1.20.1-6.0.jar"
            },
            {
                "nombre": "ModernFix",
                "url": "https://www.curseforge.com/projects/790626",
                "descripcion": "Optimizador central que reduce la carga e indexado minimizando el consumo base de RAM del cliente fuertemente.",
                "version": "5.27.22+mc1.20.1",
                "autor": "embeddedt",
                "jar": "modernfix-forge-5.27.22+mc1.20.1.jar"
            },
            {
                "nombre": "Nolijium",
                "url": "https://www.curseforge.com/projects/969602",
                "descripcion": "Ajustes estructurales orientados a incrementar los fotogramas y corregir irregularidades de rendering (stuttering).",
                "version": "0.5.6",
                "autor": "Nolij (@xdMatthewbx#1337)",
                "jar": "nolijium-0.5.6.jar"
            },
            {
                "nombre": "Oculus",
                "url": "https://www.curseforge.com/projects/581495",
                "descripcion": "Adaptación nativa y super-optimizada del pipeline de renderización de Shaders Iris en Forge.",
                "version": "1.8.0",
                "autor": "NanoLive, dima_dencep, coderbot, IMS212, Justsnoopy30, FoundationGames",
                "jar": "oculus-mc1.20.1-1.8.0.jar"
            },
            {
                "nombre": "Particle Core",
                "url": "https://www.curseforge.com/projects/985426",
                "descripcion": "Detiene y limita dinámicamente las rutinas de partículas fuera de visión para economizar procesamiento gráfico.",
                "version": "0.3.3+1.20.1+forge",
                "autor": "fzzyhmstrs",
                "jar": "particle_core-0.3.3+1.20.1+forge.jar"
            },
            {
                "nombre": "PerformanceTweaks",
                "url": "https://www.curseforge.com/projects/1194310",
                "descripcion": "Colección de micro-ajustes a la lógica de actualización (ticking) de IA y bloques para preservar los TPS.",
                "version": "1.3.1",
                "autor": "Desconocido",
                "jar": "performancetweaks-forge-1.3.1.jar"
            },
            {
                "nombre": "recipeessentials mod",
                "url": "https://www.curseforge.com/projects/907856",
                "descripcion": "Elimina redundancias de red cargando de forma cacheada los directorios de recetas de los mods.",
                "version": "1.20.1-4.0",
                "autor": "Someaddon",
                "jar": "recipeessentials-1.20.1-4.0.jar"
            },
            {
                "nombre": "Save My Shit Network",
                "url": "https://www.curseforge.com/projects/1129397",
                "descripcion": "Sanea y protege las operaciones de guardado, previniendo corrupciones severas causadas por fallos de red.",
                "version": "1.4.1-1.20.1",
                "autor": "Gizmo",
                "jar": "smsn-forge-1.4.1-1.20.1.jar"
            },
            {
                "nombre": "Sinytra Connector",
                "url": "https://www.curseforge.com/projects/890127",
                "descripcion": "Capa de traducción avanzada para ejecutar mods nativos de Fabric sobre instancias de Forge.",
                "version": "7594389",
                "autor": "Su5eD",
                "jar": "Connector-1.0.0-beta.48+1.20.1.jar"
            },
            {
                "nombre": "smoothmovement mod",
                "url": "https://www.curseforge.com/projects/852498",
                "descripcion": "Interpola los ticks de coordenadas, proveyendo animaciones de movimiento más fluidas bajo servidores exigidos.",
                "version": "1.20.1-2.6",
                "autor": "Someaddon",
                "jar": "smoothmovement-1.20.1-2.6.jar"
            },
            {
                "nombre": "Smoothchunk mod",
                "url": "https://www.curseforge.com/projects/582327",
                "descripcion": "Modera el impacto en FPS durante el movimiento rápido alterando la prioridad y la animación de carga de los chunks.",
                "version": "1.20.1-4.1",
                "autor": "Someaddons",
                "jar": "smoothchunk-1.20.1-4.1.jar"
            },
            {
                "nombre": "Sodium Dynamic Lights",
                "url": "https://modrinth.com/mod/PxQSWIcD",
                "descripcion": "Motor de luz dinámica programado de cero con nulo impacto sobre las métricas de rendimiento renderizado.",
                "version": "1.0.9",
                "autor": "toni, LambdAurora",
                "jar": "sodiumdynamiclights-forge-1.0.10-1.20.1.jar"
            },
            {
                "nombre": "spark",
                "url": "https://www.curseforge.com/projects/361579",
                "descripcion": "Perfilador de rendimiento en tiempo real indispensable para diagnosticar cuellos de botella en la CPU y RAM.",
                "version": "1.10.53",
                "autor": "Luck",
                "jar": "spark-1.10.53-forge.jar"
            },
            {
                "nombre": "Structure Essentials mod",
                "url": "https://www.curseforge.com/projects/832882",
                "descripcion": "Alivia severamente el uso de memoria RAM delegando a hilos dedicados la validación y posicionamiento de grandes estructuras.",
                "version": "1.20.1-5.0",
                "autor": "Someaddon",
                "jar": "structureessentials-1.20.1-5.0.jar"
            },
            {
                "nombre": "Structure Layout Optimizer",
                "url": "https://www.curseforge.com/projects/1087831",
                "descripcion": "Acelera la generación de aldeas y estructuras grandes eliminando la repetición ineficiente de comprobaciones de terreno.",
                "version": "1.0.11",
                "autor": "TelepathicGrunt",
                "jar": "structure_layout_optimizer-forge-1.0.11.jar"
            },
            {
                "nombre": "Too Fast",
                "url": "https://www.curseforge.com/projects/550678",
                "descripcion": "Anula verificaciones redundantes de la velocidad del jugador en la red suprimiendo interrupciones repentinas en el vuelo.",
                "version": "0.4.3.5",
                "autor": "Noobanidus",
                "jar": "toofast-1.20-0.4.3.5.jar"
            }
        ]
        },
        "worldgen": {
            "titulo": "🌍 Generación, Biomas y Estructuras",
            "mods": [
                {
                    "nombre": "[Let's Do Addon] Structures",
                    "url": "https://modrinth.com/mod/2PaVx3ow",
                    "descripcion": "Añade nuevas estructuras temáticas compatibles e integradas con el ecosistema de mods Let's Do.",
                    "version": "1.7.2",
                    "autor": "Ninjdai",
                    "jar": "letsdo-addon-structures-1.7.2.jar"
                },
                {
                    "nombre": "[Let's Do] BloomingNature",
                    "url": "https://modrinth.com/mod/4Vno77MY",
                    "descripcion": "Expande la generación de terreno con nuevos biomas boscosos, árboles detallados y vegetación densa.",
                    "version": "1.0.12",
                    "autor": "satisfy",
                    "jar": "letsdo-bloomingnature-forge-1.0.12.jar"
                },
                {
                    "nombre": "[Let's Do] Meadow",
                    "url": "https://modrinth.com/mod/ra7o6Sl7",
                    "descripcion": "Transforma los biomas de pradera con nueva flora, bloques de construcción rústicos y mecánicas agrícolas.",
                    "version": "1.3.25",
                    "autor": "satisfy, jason13official",
                    "jar": "letsdo-meadow-forge-1.3.25.jar"
                },
                {
                    "nombre": "atistructures",
                    "url": "https://modrinth.com/mod/bii8qPSt",
                    "descripcion": "Introduce una amplia colección de estructuras abandonadas, ruinas y mazmorras en el Overworld.",
                    "version": "1.4.0",
                    "autor": "ATi",
                    "jar": "ATi Structures V1.4.3 (1.20+).jar"
                },
                {
                    "nombre": "Better village",
                    "url": "https://modrinth.com/mod/dGVX5JbJ",
                    "descripcion": "Rediseña la arquitectura y distribución de las aldeas vanilla para un aspecto más realista e inmersivo.",
                    "version": "3.3.1",
                    "autor": "JTorLeon Studios",
                    "jar": "bettervillage-forge-1.20.1-3.3.1-all.jar"
                },
                {
                    "nombre": "Biomes O' Plenty",
                    "url": "https://modrinth.com/mod/HXF82T3G",
                    "descripcion": "Modificación masiva de generación que añade docenas de biomas únicos, bloques y vegetación en múltiples dimensiones.",
                    "version": "19.0.0.96",
                    "autor": "Adubbz, Forstride",
                    "jar": "BiomesOPlenty-forge-1.20.1-19.0.0.96.jar"
                },
                {
                    "nombre": "Blast From The Past",
                    "url": "https://modrinth.com/mod/UAhT844S",
                    "descripcion": "Agrega estructuras prehistóricas, ruinas y fauna extinta al entorno de supervivencia.",
                    "version": "1.0.4",
                    "autor": "Team Recrafted, Zigy, Clonz, Tenebris Mors",
                    "jar": "blastfromthepast-1.0.4-1.20.1.jar"
                },
                {
                    "nombre": "Create: Sky Village",
                    "url": "https://modrinth.com/mod/1sKEbgoN",
                    "descripcion": "Genera aldeas flotantes en el cielo equipadas con componentes y estética del mod Create.",
                    "version": "0.0.38",
                    "autor": "SmartStreamLabs",
                    "jar": "create_sky_village-0.0.38 Forge 1.20.1.jar"
                },
                {
                    "nombre": "Darker Depths",
                    "url": "https://modrinth.com/mod/wCbFXJKH",
                    "descripcion": "Expande las cuevas profundas con nuevos biomas subterráneos, bloques decorativos y peligros ambientales.",
                    "version": "2.1.4",
                    "autor": "Naterbobber, Blackgear, Toxteer, Orcinus",
                    "jar": "Darker Depths-1.20.1-2.1.4.jar"
                },
                {
                    "nombre": "Dungeon Crawl",
                    "url": "https://modrinth.com/mod/q0rRg4lH",
                    "descripcion": "Genera estructuras subterráneas laberínticas y multicapa con alta densidad de generadores de monstruos y botín.",
                    "version": "2.3.15",
                    "autor": "xiroc",
                    "jar": "Dungeon Crawl-1.20.1-2.3.15.jar"
                },
                {
                    "nombre": "Dynamic Trees",
                    "url": "https://modrinth.com/mod/vdjF5PL5",
                    "descripcion": "Reemplaza el sistema de crecimiento de árboles estático por modelos dinámicos que crecen gradualmente con raíces y ramas.",
                    "version": "1.20.1-1.4.11",
                    "autor": "Ferreusveritas",
                    "jar": "DynamicTrees-1.20.1-1.4.11.jar"
                },
                {
                    "nombre": "Dynamic Trees Plus",
                    "url": "https://modrinth.com/mod/qaO9Dqpu",
                    "descripcion": "Extensión que proporciona compatibilidad de crecimiento dinámico para cactus y otros tipos de vegetación no arbórea.",
                    "version": "1.20.1-1.2.2",
                    "autor": "Ferreusveritas, Max Hyper/supermassimo, Harley O'Connor",
                    "jar": "DynamicTreesPlus-1.20.1-1.2.2.jar"
                },
                {
                    "nombre": "Ecologics",
                    "url": "https://modrinth.com/mod/NCKpPR0Z",
                    "descripcion": "Mejora biomas vanilla como playas, desiertos y praderas heladas con nueva flora, fauna y estructuras discretas.",
                    "version": "2.2.6",
                    "autor": "SameButDifferent, Zero_DSRS_VX, Drigonis, Crispytwig, Irishjevil, Foquito Azul",
                    "jar": "ecologics-forge-1.20.1-2.2.6.jar"
                },
                {
                    "nombre": "End Villager Outpost",
                    "url": "https://www.curseforge.com/projects/1341317",
                    "descripcion": "Agrega puestos de avanzada en la dimensión del End ocupados por variantes locales de aldeanos.",
                    "version": "1.0.0",
                    "autor": "Wario",
                    "jar": "end_villager_outpost-1.0.0-forge-1.20.1.jar"
                },
                {
                    "nombre": "End Villager Trader",
                    "url": "https://www.curseforge.com/projects/1204232",
                    "descripcion": "Introduce un comerciante específico para el End con intercambios orientados a los recursos de dicha dimensión.",
                    "version": "1.0.1",
                    "autor": "Leonxkingx, MadeBySanny",
                    "jar": "end_villager_trader-1.0.1-forge-1.20.1.jar"
                },
                {
                    "nombre": "Explorify",
                    "url": "https://modrinth.com/mod/HSfsxuTo",
                    "descripcion": "Integra gran cantidad de ruinas y mazmorras de tamaño pequeño/mediano que respetan estrictamente la estética vanilla.",
                    "version": "1.6.5",
                    "autor": "bebebea_loste",
                    "jar": "Explorify v1.6.5.mod.jar"
                },
                {
                    "nombre": "Gnumus Settlement",
                    "url": "https://www.curseforge.com/projects/720397",
                    "descripcion": "Agrega aldeas y campamentos de una nueva facción (Gnumus) con recursos y diseños de construcción particulares.",
                    "version": "1.0.0",
                    "autor": "Mongoose_artist, MCreator",
                    "jar": "gnumus_settlement_[Forge]1.20.1_v1.0.jar"
                },
                {
                    "nombre": "Integrated Dungeons and Structures",
                    "url": "https://modrinth.com/mod/Z8OZShAU",
                    "descripcion": "Mazmorras generadas proceduralmente que utilizan bloques y entidades de otros mods instalados para mayor cohesión.",
                    "version": "1.13.0+1.20.1",
                    "autor": "CraisinLord",
                    "jar": "idas_forge-1.13.0+1.20.1.jar"
                },
                {
                    "nombre": "Integrated Villages",
                    "url": "https://modrinth.com/mod/o1qh5qIF",
                    "descripcion": "Actualiza la generación de aldeas utilizando paletas de bloques y decoraciones provenientes de tu lista de mods.",
                    "version": "1.3.2+1.20.1-forge",
                    "autor": "CraisinLord",
                    "jar": "integrated_villages-1.3.2+1.20.1-forge.jar"
                },
                {
                    "nombre": "MoogsSoaringStructures",
                    "url": "https://modrinth.com/mod/RJCLIx7k",
                    "descripcion": "Añade diversas islas flotantes y estructuras en el cielo para expandir la exploración vertical.",
                    "version": "2.1.0",
                    "autor": "FinnDog",
                    "jar": "MoogsSoaringStructures-1.20-2.1.0.jar"
                },
                {
                    "nombre": "MoogsVoyagerStructures",
                    "url": "https://modrinth.com/mod/OQAgZMH1",
                    "descripcion": "Agrega un catálogo amplio de ruinas y puntos de interés terrestres para incentivar el viaje superficial.",
                    "version": "5.0.6",
                    "autor": "FinnDog",
                    "jar": "MoogsVoyagerStructures-1.20-5.0.6.jar"
                },
                {
                    "nombre": "Mystic's Biomes",
                    "url": "https://modrinth.com/mod/kUpOjknA",
                    "descripcion": "Introduce biomas de fantasía con paletas de colores vibrantes, campos de fresas y bosques de lavanda.",
                    "version": "3.5.2",
                    "autor": "Jay",
                    "jar": "mysticsbiomes-1.20.1-3.5.2.jar"
                },
                {
                    "nombre": "Oh The Biomes We've Gone",
                    "url": "https://modrinth.com/mod/NTi7d3Xc",
                    "descripcion": "Mod de generación a gran escala que redefine la topografía añadiendo biomas complejos y diversas paletas de colores.",
                    "version": "1.7.5",
                    "autor": "Joseph T. McQuigg (JT122406), AOCAWOL, YaBoiChips, Corgi Taco",
                    "jar": "Oh-The-Biomes-Weve-Gone-Forge-1.7.5.jar"
                },
                {
                    "nombre": "Oh The Trees You'll Grow",
                    "url": "https://modrinth.com/mod/g8NOG5OR",
                    "descripcion": "Complemento de biomas enfocado exclusivamente en integrar una gran variedad de árboles majestuosos.",
                    "version": "1.6.0",
                    "autor": "Corgi Taco",
                    "jar": "Oh-The-Trees-Youll-Grow-forge-1.20.1-1.6.0.jar"
                },
                {
                    "nombre": "Project: Vibrant Journeys",
                    "url": "https://modrinth.com/mod/Z8Xbk4yv",
                    "descripcion": "Agrega detalles ambientales al suelo (piedras, ramas, conchas) y pequeñas estructuras de ambientación superficial.",
                    "version": "1.20.1-6.2.2",
                    "autor": "OrderedChaosDev",
                    "jar": "projectvibrantjourneys-1.20.1-6.2.2.jar"
                },
                {
                    "nombre": "Realm RPG: Fallen Adventurers",
                    "url": "https://modrinth.com/mod/tu54PMAb",
                    "descripcion": "Genera restos de esqueletos de aventureros pasados que sirven como elementos narrativos y fuentes de botín.",
                    "version": "1.1.0",
                    "autor": "NoCube",
                    "jar": "realmrpg_skeletons-1.1.0-forge-1.20.1.jar"
                },
                {
                    "nombre": "Regions Unexplored",
                    "url": "https://modrinth.com/mod/Tkikq67H",
                    "descripcion": "Modificación titánica de generación de terreno con más de 70 biomas nuevos, árboles y tipos de roca.",
                    "version": "0.5.6",
                    "autor": "UHQ_GAMES",
                    "jar": "RegionsUnexploredForge-0.5.6+1.20.1.jar"
                },
                {
                    "nombre": "Sky Villages",
                    "url": "https://www.curseforge.com/projects/545467",
                    "descripcion": "Genera asentamientos de aldeanos suspendidos a gran altitud, accesibles solo por vuelo o construcción vertical.",
                    "version": "1.0.4",
                    "autor": "Aureljz, Y4Z0N",
                    "jar": "SkyVillages-1.0.4-1.19.2-1.20.1-forge-release.jar"
                },
                {
                    "nombre": "Stalwart Dungeons",
                    "url": "https://modrinth.com/mod/BCLngNKp",
                    "descripcion": "Expande el Nether y el End con gigantescas fortalezas, mazmorras y jefes finales nativos.",
                    "version": "1.2.8",
                    "autor": "Furti_Two, Zezer_123",
                    "jar": "stalwart-dungeons-1.20.1-1.2.8.jar"
                },
                {
                    "nombre": "Terralith",
                    "url": "https://modrinth.com/mod/8oi3bsk5",
                    "descripcion": "Generador de terreno avanzado que crea formaciones topográficas extremas usando únicamente bloques vanilla.",
                    "version": "2.5.4",
                    "autor": "Stardust Labs",
                    "jar": "Terralith_1.20.x_v2.5.4.jar"
                },
                {
                    "nombre": "Terralith ReStoned",
                    "url": "https://modrinth.com/mod/oTQsXi8U",
                    "descripcion": "Ajuste de compatibilidad que reintroduce piedras y minerales moddeados a la generación de terreno de Terralith.",
                    "version": "1.3.1",
                    "autor": "catter1",
                    "jar": "Terralith_ReStoned_v1.3.1.jar"
                },
                {
                    "nombre": "The Graveyard",
                    "url": "https://modrinth.com/mod/U1jdQuSf",
                    "descripcion": "Añade estructuras de temática oscura como cementerios, criptas y ruinas infestadas de no-muertos.",
                    "version": "3.1",
                    "autor": "Lion",
                    "jar": "The_Graveyard_3.1_(FORGE)_for_1.20.1.jar"
                },
                {
                    "nombre": "Valhelsia Structures",
                    "url": "https://modrinth.com/mod/T21szC0a",
                    "descripcion": "Genera castillos en ruinas, casas y estructuras abandonadas con un alto nivel de detalle estético.",
                    "version": "1.20.1-1.1.2",
                    "autor": "Valhelsia Team",
                    "jar": "valhelsia_structures-forge-1.20.1-1.1.2.jar"
                },
                {
                    "nombre": "YUNG's Better Desert Temples",
                    "url": "https://modrinth.com/mod/XNlO7sBv",
                    "descripcion": "Rediseña los templos del desierto, convirtiéndolos en laberintos con rompecabezas, trampas y cámaras de botín.",
                    "version": "1.20-Forge-3.0.3",
                    "autor": "YUNGNICKYOUNG, Tera",
                    "jar": "YungsBetterDesertTemples-1.20-Forge-3.0.3.jar"
                },
                {
                    "nombre": "YUNG's Better Jungle Temples",
                    "url": "https://modrinth.com/mod/z9Ve58Ih",
                    "descripcion": "Reconstruye los templos de la jungla enfocándose en trampas más complejas y una estructura expandida.",
                    "version": "1.20-Forge-2.0.5",
                    "autor": "YUNGNICKYOUNG, Tera",
                    "jar": "YungsBetterJungleTemples-1.20-Forge-2.0.5.jar"
                },
                {
                    "nombre": "YUNG's Better Mineshafts",
                    "url": "https://modrinth.com/mod/HjmxVlSr",
                    "descripcion": "Añade dinamismo a las minas abandonadas con redes complejas, variantes de bioma y zonas de minerales densos.",
                    "version": "1.20-Forge-4.0.4",
                    "autor": "YUNGNICKYOUNG",
                    "jar": "YungsBetterMineshafts-1.20-Forge-4.0.4.jar"
                },
                {
                    "nombre": "YUNG's Better Ocean Monuments",
                    "url": "https://modrinth.com/mod/3dT9sgt4",
                    "descripcion": "Transforma los monumentos oceánicos en ruinas sumergidas gigantescas, desafiantes y detalladas.",
                    "version": "1.20-Forge-3.0.4",
                    "autor": "YUNGNICKYOUNG, Tera",
                    "jar": "YungsBetterOceanMonuments-1.20-Forge-3.0.4.jar"
                },
                {
                    "nombre": "YUNG's Better Strongholds",
                    "url": "https://modrinth.com/mod/kidLKymU",
                    "descripcion": "Rediseña radicalmente las fortalezas (Strongholds) convirtiéndolas en complejas ciudades subterráneas.",
                    "version": "1.20-Forge-4.0.3",
                    "autor": "YUNGNICKYOUNG, Acarii",
                    "jar": "YungsBetterStrongholds-1.20-Forge-4.0.3.jar"
                },
                {
                    "nombre": "YUNG's Better Witch Huts",
                    "url": "https://modrinth.com/mod/t5FRdP87",
                    "descripcion": "Mejora arquitectónicamente las cabañas de bruja, añadiendo altares e integrándolas mejor en los pantanos.",
                    "version": "1.20-Forge-3.0.3",
                    "autor": "YUNGNICKYOUNG, Acarii",
                    "jar": "YungsBetterWitchHuts-1.20-Forge-3.0.3.jar"
                },
                {
                    "nombre": "YUNG's Bridges",
                    "url": "https://modrinth.com/mod/Ht4BfYp6",
                    "descripcion": "Genera puentes automáticos estéticamente integrados a través de los cuerpos de agua del mundo.",
                    "version": "1.20-Forge-4.0.3",
                    "autor": "YUNGNICKYOUNG",
                    "jar": "YungsBridges-1.20-Forge-4.0.3.jar"
                },
                {
                    "nombre": "YUNG's Cave Biomes",
                    "url": "https://modrinth.com/mod/cs7iGVq1",
                    "descripcion": "Suma nuevos biomas subterráneos inmersivos que incrementan la diversidad de la exploración al minar.",
                    "version": "1.20.1-Forge-2.0.5",
                    "autor": "YUNGNICKYOUNG, HellionGames, Sully, LudoCrypt, Jasmine, K.jpg, Neko, Frenderman, Refresh Studios",
                    "jar": "YungsCaveBiomes-1.20.1-Forge-2.0.5.jar"
                },
                {
                    "nombre": "YUNG's Extras",
                    "url": "https://modrinth.com/mod/ZYgyPyfq",
                    "descripcion": "Incorpora diversas estructuras ambientales menores como puestos de avanzada y ruinas complementarias.",
                    "version": "1.20-Forge-4.0.3",
                    "autor": "YUNGNICKYOUNG, Acarii",
                    "jar": "YungsExtras-1.20-Forge-4.0.3.jar"
                }
            ]
        },
        "dimensions": {
            "titulo": "🌌 Dimensiones y Expansiones",
            "mods": [
                {
                    "nombre": "Blue Skies",
                    "url": "https://modrinth.com/mod/DOSy3C4M",
                    "descripcion": "Añade dos nuevas dimensiones inmersivas, Everbright y Everdawn, con sus propios biomas, estructuras y jefes.",
                    "version": "1.20.1-1.3.31",
                    "autor": "KingPhygieBoo, Silver_David, Lachney",
                    "jar": "blue_sky-1.20.1-1.3.31.jar"
                },
                {
                    "nombre": "Deep Dark: Regrowth",
                    "url": "https://www.curseforge.com/projects/827619",
                    "descripcion": "Expande la dimensión del Deep Dark con nuevos elementos, biomas y desafíos subterráneos.",
                    "version": "1.2.6.1 - 1.20.1",
                    "autor": "Clorofite, MCreator",
                    "jar": "Deep Dark Regrowth 1.2.6.1 - 1.20.1.jar"
                },
                {
                    "nombre": "End Remastered",
                    "url": "https://modrinth.com/mod/jA9z3c0p",
                    "descripcion": "Reimagina la forma de acceder al End, requiriendo encontrar varios ojos especiales repartidos por todo el mundo.",
                    "version": "5.3.3",
                    "autor": "Kyanite Team",
                    "jar": "EndRemastered-1.20.1-5.3.3.jar"
                },
                {
                    "nombre": "L'ender Cataclysm",
                    "url": "https://modrinth.com/mod/lender-cataclysm",
                    "descripcion": "Introduce jefes masivos y mazmorras únicas en la dimensión del End, aumentando significativamente la dificultad.",
                    "version": "1.20.1-1.0.2",
                    "autor": "mrcrayfish",
                    "jar": "cataclysm-1.20.1-1.0.2.jar"
                },
                {
                    "nombre": "Moog's End Structures",
                    "url": "https://modrinth.com/mod/moogs-end-structures",
                    "descripcion": "Añade una gran variedad de estructuras generadas proceduralmente en la dimensión del End.",
                    "version": "1.20.1-0.1.0",
                    "autor": "Moog",
                    "jar": "moogs-end-structures-1.20.1.jar"
                },
                {
                    "nombre": "Moog's Nether Structures",
                    "url": "https://modrinth.com/mod/moogs-nether-structures",
                    "descripcion": "Introduce múltiples estructuras inmersivas diseñadas específicamente para el Nether.",
                    "version": "1.20.1-0.1.0",
                    "autor": "Moog",
                    "jar": "moogs-nether-structures-1.20.1.jar"
                },
                {
                    "nombre": "Stellarity (End Rework)",
                    "url": "https://modrinth.com/mod/stellarity",
                    "descripcion": "Una revisión completa de la dimensión del End que mejora el combate, la generación de terreno y el botín.",
                    "version": "1.20.1-2.0.0",
                    "autor": "Stellarity Team",
                    "jar": "stellarity-1.20.1.jar"
                },
                {
                    "nombre": "The Bumblezone",
                    "url": "https://modrinth.com/mod/bumblezone",
                    "descripcion": "Añade una dimensión temática de abejas, llena de miel, bloques decorativos y desafíos únicos.",
                    "version": "1.20.1-7.0.0",
                    "autor": "TelepathicGrunt",
                    "jar": "the_bumblezone-1.20.1-7.0.0.jar"
                },
                {
                    "nombre": "The Twilight Forest",
                    "url": "https://modrinth.com/mod/twilight-forest",
                    "descripcion": "Una clásica dimensión de aventura con grandes bosques, mazmorras progresivas y jefes únicos.",
                    "version": "1.20.1-4.3.189",
                    "autor": "Benimatic",
                    "jar": "twilightforest-1.20.1-4.3.189.jar"
                },
                {
                    "nombre": "YUNG's Better Nether Fortresses",
                    "url": "https://modrinth.com/mod/yungs-better-nether-fortresses",
                    "descripcion": "Reemplaza las fortalezas del Nether por variantes mucho más grandes, complejas y detalladas.",
                    "version": "1.20.1-2.0.0",
                    "autor": "YUNGNICKYOUNG",
                    "jar": "YungsBetterNetherFortresses-1.20.1-2.0.0.jar"
                }
            ]
        },
        "mobs": {
            "titulo": "🐾 Criaturas, Compañeros y Jefes",
            "mods": [
                {
                    "nombre": "[Let's Do] Wilder Nature",
                    "url": "https://modrinth.com/mod/AAiRU4aQ",
                    "descripcion": "Añade nuevos animales y criaturas ambientadas en biomas salvajes, mejorando la biodiversidad.",
                    "version": "1.0.6",
                    "autor": "satisfy",
                    "jar": "letsdo-wildernature-forge-1.0.6.jar"
                },
                {
                    "nombre": "Adorable Hamster Pets",
                    "url": "https://modrinth.com/mod/LmrhZdK2",
                    "descripcion": "Introduce hámsters como mascotas domesticables, con varias razas y comportamientos de interacción.",
                    "version": "3.6.0-1.20.1+forge",
                    "autor": "The Scarlet Fox",
                    "jar": "adorablehamsterpets-3.6.0-1.20.1+forge.jar"
                },
                {
                    "nombre": "Ambient Additions",
                    "url": "https://modrinth.com/mod/EdXRAo60",
                    "descripcion": "Añade diversas criaturas pequeñas para mejorar la atmósfera y el realismo del entorno.",
                    "version": "1.20.1-1.1.2",
                    "autor": "codyhuh, VakyPanda",
                    "jar": "ambientadditions-1.20.1-1.1.2.jar"
                },
                {
                    "nombre": "Aquamirae",
                    "url": "https://modrinth.com/mod/k23mNPhZ",
                    "descripcion": "Introduce contenido acuático desafiante, incluyendo nuevos jefes, armaduras y enemigos marinos hostiles.",
                    "version": "6.4.0",
                    "autor": "Obscuria, Pluvia",
                    "jar": "aquamirae-forge-1.20.1-6.4.0.jar"
                },
                {
                    "nombre": "Born in Chaos",
                    "url": "https://modrinth.com/mod/1kcHy4de",
                    "descripcion": "Añade criaturas hostiles y jefes basados en un entorno oscuro y caótico para aumentar la dificultad.",
                    "version": "1.7.5",
                    "autor": "Mongoose_artist, MCreator",
                    "jar": "born_in_chaos_[Forge]1.20.1_1.7.5.jar"
                },
                {
                    "nombre": "Bosses of Mass Destruction",
                    "url": "https://modrinth.com/mod/hFUzfDsn",
                    "descripcion": "Añade jefes masivos con mecánicas únicas y complejas, centrados en el combate PvE avanzado.",
                    "version": "1.1.2",
                    "autor": "CerbonXD",
                    "jar": "BOMD-Forge-1.20.1-1.1.2.jar"
                },
                {
                    "nombre": "Bosses'Rise",
                    "url": "https://modrinth.com/mod/q2bV1Tm1",
                    "descripcion": "Introduce nuevos jefes desafiantes con patrones de ataque distintos para mejorar el endgame.",
                    "version": "2.1.2",
                    "autor": "Block Factory",
                    "jar": "block_factorys_bosses-2.1.2-forge-1.20.1.jar"
                },
                {
                    "nombre": "Bossominium",
                    "url": "https://modrinth.com/mod/QYXaSFOk",
                    "descripcion": "Añade jefes adicionales con habilidades únicas, enfocados en expandir los encuentros de combate.",
                    "version": "18.6",
                    "autor": "Shaywsgu",
                    "jar": "bossominium-18.6.jar"
                },
                {
                    "nombre": "Call of Drowner",
                    "url": "https://modrinth.com/mod/UHdgIXh2",
                    "descripcion": "Añade nuevas criaturas acuáticas hostiles inspiradas en los ahogados, mejorando el peligro en el océano.",
                    "version": "0.1.1",
                    "autor": "BrainCrash",
                    "jar": "call_of_drowner-0.1.1-forge-1.20.1.jar"
                },
                {
                    "nombre": "Call of Yucatan",
                    "url": "https://modrinth.com/mod/RV4ezinu",
                    "descripcion": "Introduce criaturas, enemigos y mecánicas inspiradas en la mitología y entorno yucateco.",
                    "version": "1.0.13",
                    "autor": "Furti_Two, Sweetygamer",
                    "jar": "call_of_yucutan-1.0.13-forge-1.20.1.jar"
                },
                {
                    "nombre": "Chefs Delight",
                    "url": "https://modrinth.com/mod/pvcsfne4",
                    "descripcion": "Añade aldeanos cocineros y expande las interacciones de comida con nuevas entidades.",
                    "version": "1.0.4-forge-1.20.1",
                    "autor": "Redstone Games",
                    "jar": "chefsdelight-1.0.4-forge-1.20.1.jar"
                },
                {
                    "nombre": "Creeper Overhaul",
                    "url": "https://modrinth.com/mod/MI1LWe93",
                    "descripcion": "Reimagina los Creepers con variantes de bioma, cada uno con habilidades y apariencias únicas.",
                    "version": "3.0.2",
                    "autor": "Artist/Creator - Joosh, Dev - ThatGravyBoat",
                    "jar": "creeperoverhaul-3.0.2-forge.jar"
                },
                {
                    "nombre": "Critters and Companions",
                    "url": "https://modrinth.com/mod/Yd4wb5wZ",
                    "descripcion": "Añade animales realistas, mascotas y compañeros de exploración al mundo.",
                    "version": "1.20.1-2.3.5",
                    "autor": "Joosh, EterDelta",
                    "jar": "crittersandcompanions-forge-1.20.1-2.3.5.jar"
                },
                {
                    "nombre": "Deeper and Darker",
                    "url": "https://modrinth.com/mod/fnAffV0n",
                    "descripcion": "Expande la dimensión del Warden con nuevos enemigos hostiles y estructuras peligrosas.",
                    "version": "1.3.3",
                    "autor": "Kyanite Team",
                    "jar": "deeperdarker-forge-1.20.1-1.3.3.jar"
                },
                {
                    "nombre": "Dragon Mounts: Legacy",
                    "url": "https://modrinth.com/mod/G3EPcczP",
                    "descripcion": "Permite la crianza y doma de dragones, añadiendo estas criaturas majestuosas como monturas.",
                    "version": "1.2.3-beta",
                    "autor": "Kay9",
                    "jar": "dragonmounts-1.20.1-1.2.3-beta.jar"
                },
                {
                    "nombre": "EEEAB's Mobs",
                    "url": "https://modrinth.com/mod/N8MNCv66",
                    "descripcion": "Añade una variedad de criaturas inmersivas y mobs hostiles diseñados para encajar con el estilo vanilla.",
                    "version": "1.20.1-0.98.1",
                    "autor": "EEEAB",
                    "jar": "eeeabsmobs-1.20.1-0.98.1.jar"
                },
                {
                    "nombre": "Enderman Overhaul",
                    "url": "https://modrinth.com/mod/Lq6ojcWv",
                    "descripcion": "Introduce variantes de Enderman específicas por bioma, con habilidades únicas y comportamientos mejorados.",
                    "version": "1.0.4",
                    "autor": "Alex Nijjar, Joosh",
                    "jar": "endermanoverhaul-forge-1.20.1-1.0.4.jar"
                },
                {
                    "nombre": "Ender Trigon",
                    "url": "https://modrinth.com/mod/bIGwdx6D",
                    "descripcion": "Añade nuevos mobs hostiles en el End para aumentar la dificultad de la dimensión.",
                    "version": "1.20.1-1.1",
                    "autor": "nonamecrackers2",
                    "jar": "endertrigon-1.20.1-1.1-all.jar"
                },
                {
                    "nombre": "Ghosts",
                    "url": "https://modrinth.com/mod/gJKLGvbS",
                    "descripcion": "Introduce espíritus y fantasmas hostiles que aparecen en ciertas condiciones, añadiendo peligro paranormal.",
                    "version": "1.3.2",
                    "autor": "Joosh7889, Xylonity",
                    "jar": "ghosts-forge-1.20.1-1.3.2.jar"
                },
                {
                    "nombre": "Goblin Traders",
                    "url": "https://www.curseforge.com/projects/363703",
                    "descripcion": "Añade Goblins comerciantes que ofrecen botín raro y objetos únicos en el mundo.",
                    "version": "1.11.5",
                    "autor": "MrCrayfish",
                    "jar": "goblintraders-forge-1.20.1-1.11.5.jar"
                },
                {
                    "nombre": "Golem Overhaul",
                    "url": "https://modrinth.com/mod/qEYs2G9A",
                    "descripcion": "Mejora las variantes de golems, permitiendo la creación de golems especializados con habilidades defensivas.",
                    "version": "1.1.0",
                    "autor": "Alex Nijjar, Joosh, 3xpl01t",
                    "jar": "golemoverhaul-forge-1.20.1-1.1.0.jar"
                },
                {
                    "nombre": "Guard Ribbits",
                    "url": "https://modrinth.com/mod/t7UhdlGh",
                    "descripcion": "Introduce guardias en las aldeas de ranas, añadiendo protección y facciones a los biomas de pantano.",
                    "version": "1.20.1-Forge-1.0.4",
                    "autor": "sunbatheproductions28",
                    "jar": "GuardRibbits-1.20.1-Forge-1.0.4.jar"
                },
                {
                    "nombre": "Illage and Spillage: Respillaged",
                    "url": "https://www.curseforge.com/projects/1079714",
                    "descripcion": "Añade variantes de Illagers con habilidades únicas, magias y patrones de ataque.",
                    "version": "1.2.8",
                    "autor": "Original mod by Yellowbross Productions, port and subsequent updates by TheDarkPeasant",
                    "jar": "illageandspillagerespillaged-1.2.8.jar"
                },
                {
                    "nombre": "Illager Additions",
                    "url": "https://www.curseforge.com/projects/682835",
                    "descripcion": "Introduce nuevos enemigos Illager y estructuras de asalto para aumentar el peligro de las incursiones.",
                    "version": "1.20.1-0.0.2-alpha",
                    "autor": "Pikachu",
                    "jar": "illager_additions-1.20.1-0.1.0-beta.jar"
                },
                {
                    "nombre": "Illager Revolution",
                    "url": "https://www.curseforge.com/projects/841586",
                    "descripcion": "Añade una facción enemiga Illager organizada, con jefes, patrullas y mecánicas de incursión avanzadas.",
                    "version": "1.4",
                    "autor": "AstianBK, BloodBK",
                    "jar": "illagerrevolutionmod-1.5.1.jar"
                },
                {
                    "nombre": "It Takes A Pillage",
                    "url": "https://www.curseforge.com/projects/635843",
                    "descripcion": "Añade nuevas variantes de Illagers y mecánicas relacionadas con el saqueo y las incursiones.",
                    "version": "1.0.3",
                    "autor": "izofar",
                    "jar": "takesapillage-1.0.3-1.20.1.jar"
                },
                {
                    "nombre": "Legendary Monsters",
                    "url": "https://modrinth.com/mod/9d9Bkqva",
                    "descripcion": "Introduce mobs únicos y raros con alta dificultad y drops exclusivos para el progreso avanzado.",
                    "version": "1.20.1",
                    "autor": "Miauczel",
                    "jar": "legendarymonsters-2.1.15 MC 1.20.1.jar"
                },
                {
                    "nombre": "Luminous: Beasts",
                    "url": "https://modrinth.com/mod/fGCP5k6m",
                    "descripcion": "Añade criaturas luminosas y exóticas al mundo, mejorando la estética y fauna nocturna.",
                    "version": "1.2.7",
                    "autor": "RipleysMods",
                    "jar": "Luminous Beasts V1.2.7 - Forge 1.20.1.jar"
                },
                {
                    "nombre": "Luminous: Butterflies",
                    "url": "https://modrinth.com/mod/yoTUVxcS",
                    "descripcion": "Introduce mariposas luminosas como ambientación y elemento coleccionable.",
                    "version": "1.2.1",
                    "autor": "RipleysMods",
                    "jar": "Luminous Butterflies V1.2.1 - Forge 1.20.1.jar"
                },
                {
                    "nombre": "Luminous: Nether",
                    "url": "https://modrinth.com/mod/2CL6BDdJ",
                    "descripcion": "Añade criaturas específicas para el Nether, mejorando la fauna de la dimensión infernal.",
                    "version": "1.3.2",
                    "autor": "RipleysMods",
                    "jar": "Luminous Nether V1.3.2 - Forge 1.20.1.jar"
                },
                {
                    "nombre": "More Mob Variants",
                    "url": "https://modrinth.com/mod/JiEhJ3WG",
                    "descripcion": "Introduce múltiples texturas y variantes para mobs vanilla, mejorando la diversidad visual.",
                    "version": "1.3.0.1",
                    "autor": "nyuppo",
                    "jar": "moremobvariants-forge+1.20.1-1.3.0.1.jar"
                },
                {
                    "nombre": "Mowzie's Mobs",
                    "url": "https://www.curseforge.com/projects/250498",
                    "descripcion": "Añade jefes y mobs hostiles con inteligencia artificial compleja y animaciones de alta calidad.",
                    "version": "1.8.2",
                    "autor": "BobMowzie, Wadoo, Vakypanda, Noonyez, pau101",
                    "jar": "mowziesmobs-1.8.2.jar"
                },
                {
                    "nombre": "MythicMounts",
                    "url": "https://modrinth.com/mod/xP7vOoRA",
                    "descripcion": "Introduce monturas míticas y legendarias domesticables con habilidades de movimiento únicas.",
                    "version": "20.1-7.4.2-forge",
                    "autor": "Desconocido",
                    "jar": "mythicmounts-20.1-7.4.2-forge.jar"
                },
                {
                    "nombre": "Naturalist",
                    "url": "https://modrinth.com/mod/F8BQNPWX",
                    "descripcion": "Añade animales realistas y ecosistemas funcionales, mejorando la fauna global del mundo.",
                    "version": "5.0pre3",
                    "autor": "Starfish Studios",
                    "jar": "naturalist-5.0pre3+forge-1.20.1.jar"
                },
                {
                    "nombre": "Player Companions",
                    "url": "https://modrinth.com/mod/fTwCsQR9",
                    "descripcion": "Permite reclutar NPCs como compañeros de aventura que ayudan en combate y recolección.",
                    "version": "7.0.0",
                    "autor": "Markus Bordihn",
                    "jar": "player_companions-forge-1.20.1-7.0.0.jar"
                },
                {
                    "nombre": "Primal",
                    "url": "https://modrinth.com/mod/41B2buzz",
                    "descripcion": "Añade criaturas prehistóricas y peligros primitivos al mundo, aumentando la dificultad de supervivencia.",
                    "version": "1.1.6",
                    "autor": "Tenebris Mors, Natsirt, Domino, Misty, Portakal",
                    "jar": "primal-1.1.6+1.20.1.jar"
                },
                {
                    "nombre": "Queen Bee",
                    "url": "https://www.curseforge.com/projects/523596",
                    "descripcion": "Introduce la Reina Abeja como un mob boss o especial dentro de los biomas de colmenas.",
                    "version": "3.1.4",
                    "autor": "CerbonXD",
                    "jar": "QueenBee-Forge-1.20.1-3.1.4.jar"
                },
                {
                    "nombre": "Realm RPG: Sea Dwellers",
                    "url": "https://www.curseforge.com/projects/536530",
                    "descripcion": "Añade habitantes marinos hostiles, nuevos enemigos y jefes para la exploración oceánica.",
                    "version": "2.9.9",
                    "autor": "NoCube, BlackAures",
                    "jar": "realmrpg_seadwellers_2.9.9_forge_1.20.1.jar"
                },
                {
                    "nombre": "Ribbits",
                    "url": "https://modrinth.com/mod/8YcE8y4T",
                    "descripcion": "Añade ranas domesticables y nuevas mecánicas de anfibios con variaciones de color.",
                    "version": "1.20.1-Forge-3.0.5",
                    "autor": "Joosh, YUNGNICKYOUNG, HellionGames, Refresh Studios",
                    "jar": "Ribbits-1.20.1-Forge-3.0.5.jar"
                },
                {
                    "nombre": "Ribbits Add On: Croaks",
                    "url": "https://modrinth.com/mod/VtNWzBdM",
                    "descripcion": "Expande las mecánicas de las ranas con nuevas interacciones y sonidos.",
                    "version": "1.0.0",
                    "autor": "jonah, MCreator",
                    "jar": "croaks-1.9.6-forge-1.20.1.jar"
                },
                {
                    "nombre": "Smarter Farmers",
                    "url": "https://modrinth.com/mod/Bh6ZOMvp",
                    "descripcion": "Mejora la IA de los aldeanos agricultores, optimizando sus tareas y comportamientos.",
                    "version": "1.20-2.1.2",
                    "autor": "MehVahdJukaar",
                    "jar": "smarterfarmers-1.20-2.1.2.jar"
                },
                {
                    "nombre": "Tameable Beasts",
                    "url": "https://modrinth.com/mod/IOZULlo2",
                    "descripcion": "Permite domesticar una amplia gama de criaturas salvajes, otorgándoles habilidades de combate o utilidad.",
                    "version": "7.1",
                    "autor": "ModderG",
                    "jar": "tameablebeasts-1.20.1-7.1.3.jar"
                },
                {
                    "nombre": "Villager Golem Healer",
                    "url": "https://modrinth.com/mod/mKTLIOjN",
                    "descripcion": "Introduce golems capaces de curar y proteger aldeanos, añadiendo una nueva capa de defensa.",
                    "version": "1.0.0",
                    "autor": "USER, MCreator",
                    "jar": "villagergolemhealer 1.20.1.jar"
                },
                {
                    "nombre": "Wither Reincarnated",
                    "url": "https://modrinth.com/mod/YDc8cRWF",
                    "descripcion": "Añade una versión reencarnada y más peligrosa del Wither como un boss endgame.",
                    "version": "1.0.5",
                    "autor": "Alexander's Fun and Games",
                    "jar": "witherreincarnated-1.20.1-1.0.5.jar"
                }
            ]
        },
        "rpg": {
            "titulo": "⚔️ Combate, Magia y Mécanicas",
            "mods": [
                {
                    "nombre": "Artifacts",
                    "url": "https://modrinth.com/mod/P0Mu4wcQ",
                    "descripcion": "Añade accesorios poderosos y únicos con habilidades especiales que se equipan en ranuras adicionales.",
                    "version": "9.5.19",
                    "autor": "ochotonida",
                    "jar": "artifacts-forge-9.5.19.jar"
                },
                {
                    "nombre": "Better Combat",
                    "url": "https://modrinth.com/mod/5sy6g3kz",
                    "descripcion": "Reimagina el sistema de combate de Minecraft, añadiendo animaciones de ataque, hitboxes precisas y soporte para armas duales.",
                    "version": "1.9.0+1.20.1",
                    "autor": "Daedelus",
                    "jar": "bettercombat-forge-1.9.0+1.20.1.jar"
                },
                {
                    "nombre": "Better Totem of Undying",
                    "url": "https://modrinth.com/mod/qRwFcI3W",
                    "descripcion": "Mejora el Tótem de la Inmortalidad, permitiendo su uso desde el inventario o ranuras dedicadas sin necesidad de sostenerlo en la mano.",
                    "version": "2.1.1",
                    "autor": "CerbonXD",
                    "jar": "BetterTotemOfUndying-Forge-1.20.4-2.1.1.jar"
                },
                {
                    "nombre": "Bountiful",
                    "url": "https://modrinth.com/mod/BpwWFOVM",
                    "descripcion": "Añade un sistema de contratos y recompensas a través de tablones de anuncios en las aldeas.",
                    "version": "6.0.4+1.20.1",
                    "autor": "Ejektaflex",
                    "jar": "Bountiful-6.0.4+1.20.1-forge.jar"
                },
                {
                    "nombre": "Cardiac",
                    "url": "https://modrinth.com/mod/C5PewmIj",
                    "descripcion": "Introduce mecánicas inmersivas de ritmo cardíaco y adrenalina que afectan dinámicamente tu rendimiento físico en combate.",
                    "version": "0.5.3.2",
                    "autor": "OctoStudios",
                    "jar": "Cardiac-FORGE-0.5.3.2+1.20.1.jar"
                },
                {
                    "nombre": "Combat Roll",
                    "url": "https://modrinth.com/mod/wGKYL7st",
                    "descripcion": "Permite realizar maniobras de esquiva (rodar) para evitar daño y moverse rápidamente durante los enfrentamientos.",
                    "version": "1.3.3+1.20.1",
                    "autor": "Daedelus",
                    "jar": "combatroll-forge-1.3.3+1.20.1.jar"
                },
                {
                    "nombre": "Combat Roll Potions",
                    "url": "https://modrinth.com/mod/Hw5Svh7p",
                    "descripcion": "Añade pociones de efecto específicas que potencian y se activan directamente con la mecánica de esquiva.",
                    "version": "1.0.0",
                    "autor": "voxelparrot",
                    "jar": "cr_potions-1.0.0-forge-1.20.1.jar"
                },
                {
                    "nombre": "Corail Tombstone",
                    "url": "https://www.curseforge.com/projects/243707",
                    "descripcion": "Asegura tu inventario en una tumba al morir e integra un profundo sistema de magia de almas y teletransporte.",
                    "version": "9.0.10",
                    "autor": "Corail31",
                    "jar": "tombstone-1.20.1-9.0.10.jar"
                },
                {
                    "nombre": "Crawl on Demand",
                    "url": "https://modrinth.com/mod/wcXLQVhg",
                    "descripcion": "Permite al jugador arrastrarse voluntariamente mediante una tecla para atravesar espacios de un bloque de altura.",
                    "version": "1.3.0",
                    "autor": "TheCraftyCoder",
                    "jar": "crawlondemand-1.20-1.20.1-1.3.0+forge.jar"
                },
                {
                    "nombre": "Enhanced Netherite",
                    "url": "https://www.curseforge.com/projects/1555789",
                    "descripcion": "Expande drásticamente el uso de la Netherita con aleaciones elementales y equipo único con bonificaciones.",
                    "version": "1.3.0",
                    "autor": "Xian_Ziyu",
                    "jar": "enhanced_netherite-1.3.0.jar"
                },
                {
                    "nombre": "Expanded Combat",
                    "url": "https://modrinth.com/mod/sElBpAJt",
                    "descripcion": "Incorpora nuevo arsenal con mecánicas de combate variadas, incluyendo escudos, guanteletes y armas a distancia.",
                    "version": "3.2.7",
                    "autor": "Userofbricks",
                    "jar": "expanded_combat-1.20.1-3.2.7-all.jar"
                },
                {
                    "nombre": "Feathers",
                    "url": "https://modrinth.com/mod/6Na0gn2c",
                    "descripcion": "Implementa un sistema de energía y estamina (representado con plumas) para limitar y balancear movimientos físicos como correr o nadar.",
                    "version": "1.1",
                    "autor": "Elenai",
                    "jar": "feathers-1.1.jar"
                },
                {
                    "nombre": "FTB Quests",
                    "url": "https://www.curseforge.com/projects/289412",
                    "descripcion": "Framework para la creación de sistemas de misiones, árboles de progresión narrativa y recompensas en el mundo.",
                    "version": "2001.4.22",
                    "autor": "FTB Team",
                    "jar": "ftb-quests-forge-2001.4.22.jar"
                },
                {
                    "nombre": "Immersive Armors",
                    "url": "https://modrinth.com/mod/eE2Db4YU",
                    "descripcion": "Añade decenas de armaduras de estilo vanilla sumamente detalladas que aportan habilidades y stats únicos para roles RPG.",
                    "version": "1.7.2+1.20.1",
                    "autor": "Luke100000",
                    "jar": "immersive_armors-1.7.2+1.20.1-forge.jar"
                },
                {
                    "nombre": "Iron's Spells 'n Spellbooks",
                    "url": "https://www.curseforge.com/projects/855414",
                    "descripcion": "Introduce un masivo sistema de hechicería con docenas de hechizos, grimorios y equipo especializado para magos.",
                    "version": "1.20.1-3.16.1",
                    "autor": "Iron431, Lab3",
                    "jar": "irons_spellbooks-1.20.1-3.16.1.jar"
                },
                {
                    "nombre": "Iron's Spells 'n Spellbooks Dynamic Skill Tree",
                    "url": "https://modrinth.com/mod/cdEXZLO4",
                    "descripcion": "Conecta el sistema de magia de Iron con un árbol de habilidades dinámico y clases para una progresión más profunda.",
                    "version": "1.1.0",
                    "autor": "Raimu",
                    "jar": "irons_spells_dynamic_skilltree_1.1.0.jar"
                },
                {
                    "nombre": "JCraft",
                    "url": "https://modrinth.com/mod/Hcpu2FXm",
                    "descripcion": "Mod inspirado en Jojo's Bizarre Adventure que trae habilidades místicas y un sistema de combate de stands.",
                    "version": "0.18.0",
                    "autor": "Arna, Ayutac, PlanetTeamSpeak",
                    "jar": "jcraft-forge-0.18.0.jar"
                },
                {
                    "nombre": "JCraft Additions",
                    "url": "https://modrinth.com/mod/kjWHJg7F",
                    "descripcion": "Expansión oficial para JCraft que añade nuevos materiales de crafteo, accesorios y progresión temática.",
                    "version": "1.0.1",
                    "autor": "Subsetgaming",
                    "jar": "jcraft-additions-forge-1.0.1.jar"
                },
                {
                    "nombre": "Lootr",
                    "url": "https://modrinth.com/mod/EltpO5cN",
                    "descripcion": "Instancia los cofres de estructuras (mazmorras, aldeas) por jugador, garantizando que todos obtengan botín propio en multijugador.",
                    "version": "0.7.35.94",
                    "autor": "Noobanidus",
                    "jar": "lootr-forge-1.20-0.7.35.94.jar"
                },
                {
                    "nombre": "Majrusz's Accessories",
                    "url": "https://modrinth.com/mod/6roN0iTa",
                    "descripcion": "Incorpora anillos y collares que ofrecen bonificaciones pasivas sustanciales al ser encontrados y equipados.",
                    "version": "1.5.3",
                    "autor": "Majrusz",
                    "jar": "majruszs-accessories-forge-1.20.1-1.5.3.jar"
                },
                {
                    "nombre": "Majrusz's Progressive Difficulty",
                    "url": "https://modrinth.com/mod/GGDBwjOg",
                    "descripcion": "El mundo se vuelve más hostil conforme avanzas, introduciendo nuevas eras (Experto, Maestro) con enemigos más duros y mejores recompensas.",
                    "version": "1.9.10",
                    "autor": "Majrusz",
                    "jar": "majruszs-difficulty-forge-1.20.1-1.9.10.jar"
                },
                {
                    "nombre": "Paraglider",
                    "url": "https://modrinth.com/mod/esqWA0aQ",
                    "descripcion": "Añade la paravela y los contenedores de estamina/salud de The Legend of Zelda para una movilidad vertical gratificante.",
                    "version": "20.1.3",
                    "autor": "Tictim",
                    "jar": "Paraglider-forge-20.1.3.jar"
                },
                {
                    "nombre": "PlayerRevive",
                    "url": "https://modrinth.com/mod/ABIMzABM",
                    "descripcion": "Reemplaza la muerte instantánea por un estado de 'desangrado' en el suelo, permitiendo a tus aliados reanimarte a tiempo.",
                    "version": "2.0.31",
                    "autor": "CreativeMD",
                    "jar": "PlayerRevive_FORGE_v2.0.31_mc1.20.1.jar"
                },
                {
                    "nombre": "[NoCube's] Realm RPG: Treasure Balloons",
                    "url": "https://modrinth.com/mod/slMy2SdH",
                    "descripcion": "Genera globos flotantes en los cielos de diferentes biomas que sueltan cajas de botín valioso al ser disparados.",
                    "version": "1.0.0",
                    "autor": "NoCube",
                    "jar": "realmrpg_balloons-1.0.0-forge-1.20.1.jar"
                },
                {
                    "nombre": "Relics",
                    "url": "https://modrinth.com/mod/OCJRPujW",
                    "descripcion": "Suma reliquias perdidas y artefactos legendarios dispersos en las estructuras, con efectos pasivos y activos únicos.",
                    "version": "0.8.0.13",
                    "autor": "SSKirillSS",
                    "jar": "relics-1.20.1-0.8.0.13.jar"
                },
                {
                    "nombre": "Samurai Dynasty",
                    "url": "https://modrinth.com/mod/lMWJDrbO",
                    "descripcion": "Transporta tu mundo al Japón feudal con armas orientales, katanas, armaduras de samurái y estructuras temáticas.",
                    "version": "0.0.51-1.20.1-forge",
                    "autor": "VeroxUniverse",
                    "jar": "samurai_dynasty-0.0.51-1.20.1-forge.jar"
                },
                {
                    "nombre": "Skillable Reforged",
                    "url": "https://modrinth.com/mod/gpOU2vN3",
                    "descripcion": "Un sistema que bloquea el uso de ciertas armas, armaduras u objetos hasta que alcanzas el nivel de habilidad requerido.",
                    "version": "1.0",
                    "autor": "Leave",
                    "jar": "skillablereforged-1.0.jar"
                },
                {
                    "nombre": "Stardew Fishing",
                    "url": "https://modrinth.com/mod/Rw1Ylmn4",
                    "descripcion": "Reemplaza el sistema de pesca base por el envolvente y satisfactorio minijuego de tensión clásico de Stardew Valley.",
                    "version": "3.7",
                    "autor": "bonker",
                    "jar": "stardew_fishing-3.7-1.20.1.jar"
                },
                {
                    "nombre": "TarotCards",
                    "url": "https://modrinth.com/mod/haEej4hJ",
                    "descripcion": "Incluye una baraja mística de cartas coleccionables que otorgan alteraciones de estado permanente al llevarlas en el inventario.",
                    "version": "2.3.0-hotfix",
                    "autor": "Suel_ki, shiroroku",
                    "jar": "tarotcards-2.3.0-hotfix-forge-1.20.1.jar"
                },
                {
                    "nombre": "Terramity",
                    "url": "https://modrinth.com/mod/RHN9OPTT",
                    "descripcion": "Expansión que trae decenas de armas, jefes y progresión inspirada en Terraria directamente al 3D.",
                    "version": "0.9.8",
                    "autor": "Aurukel",
                    "jar": "terramity-0.9.8-forge-1.20.1.jar"
                },
                {
                    "nombre": "Waystones",
                    "url": "https://modrinth.com/mod/LOpKHB2A",
                    "descripcion": "Introduce obeliscos activables (waystones) que permiten el viaje rápido entre ciudades, aldeas y tu base principal.",
                    "version": "14.1.20",
                    "autor": "BlayTheNinth",
                    "jar": "waystones-forge-1.20.1-14.1.20.jar"
                }
            ]
        },
        "food": {
            "titulo": "🌾 Agropecuaria y Cocina",
            "mods": [
                {
                    "nombre": "[Let's Do] Bakery",
                    "url": "https://modrinth.com/mod/oNB5jhlA",
                    "descripcion": "Añade una gran variedad de panes, pasteles y estaciones de trabajo para hornear de forma interactiva y estética.",
                    "version": "2.0.6",
                    "autor": "Satisfy",
                    "jar": "letsdo-bakery-forge-2.0.6.jar"
                },
                {
                    "nombre": "[Let's Do] Brewery",
                    "url": "https://modrinth.com/mod/b7NV2plI",
                    "descripcion": "Introduce un sistema detallado para la elaboración de bebidas alcohólicas y licores utilizando barriles y lúpulo.",
                    "version": "2.0.6",
                    "autor": "satisfy",
                    "jar": "letsdo-brewery-forge-2.0.6.jar"
                },
                {
                    "nombre": "[Let's Do] Candlelight",
                    "url": "https://modrinth.com/mod/qwbArkQk",
                    "descripcion": "Proporciona elementos decorativos y comidas refinadas ideales para cenas elegantes y ambientación rústica.",
                    "version": "2.0.5",
                    "autor": "satisfy",
                    "jar": "letsdo-candlelight-forge-2.0.5.jar"
                },
                {
                    "nombre": "[Let's Do] Farm & Charm",
                    "url": "https://modrinth.com/mod/HJetCzWo",
                    "descripcion": "Expande significativamente la agricultura y ganadería con nuevos cultivos, herramientas y recetas de comida rústica.",
                    "version": "1.0.14",
                    "autor": "satisfy, jason13",
                    "jar": "letsdo-farm_and_charm-forge-1.0.14.jar"
                },
                {
                    "nombre": "[Let's Do] HerbalBrews",
                    "url": "https://modrinth.com/mod/Eh11TaTm",
                    "descripcion": "Permite la creación de infusiones, tés y medicinas naturales utilizando diversas hierbas y plantas del mundo.",
                    "version": "1.0.12",
                    "autor": "satisfy",
                    "jar": "letsdo-herbalbrews-forge-1.0.12.jar"
                },
                {
                    "nombre": "[Let's Do] NetherVinery",
                    "url": "https://modrinth.com/mod/4TTDxtOx",
                    "descripcion": "Lleva la viticultura a la dimensión del Nether, introduciendo uvas infernales, vinos únicos y vegetación resistente al fuego.",
                    "version": "1.2.19",
                    "autor": "satisfy",
                    "jar": "letsdo-nethervinery-forge-1.2.19.jar"
                },
                {
                    "nombre": "[Let's Do] Vinery",
                    "url": "https://modrinth.com/mod/1DWmBJVA",
                    "descripcion": "Añade un sistema inmersivo de cultivo de uvas y elaboración de vino junto con bloques decorativos rústicos.",
                    "version": "1.4.41",
                    "autor": "Jason13Official, Satisfy",
                    "jar": "letsdo-vinery-forge-1.4.41.jar"
                },
                {
                    "nombre": "Aquaculture 2",
                    "url": "https://modrinth.com/mod/Vl1uNAuy",
                    "descripcion": "Expande drásticamente el ecosistema acuático y el sistema de pesca con decenas de nuevos peces y cañas de pescar personalizables.",
                    "version": "2.5.7",
                    "autor": "Shadowclaimer, Girafi",
                    "jar": "Aquaculture-1.20.1-2.5.7.jar"
                },
                {
                    "nombre": "BotanyPots",
                    "url": "https://modrinth.com/mod/U6BUTZ7K",
                    "descripcion": "Introduce macetas especiales que permiten cultivar todo tipo de plantas y cultivos de forma compacta y automatizable.",
                    "version": "13.0.43",
                    "autor": "Darkhax",
                    "jar": "BotanyPots-Forge-1.20.1-13.0.43.jar"
                },
                {
                    "nombre": "BotanyPotsTiers",
                    "url": "https://modrinth.com/mod/fvMhZPuf",
                    "descripcion": "Expande BotanyPots añadiendo diferentes niveles de macetas con velocidades de crecimiento y tasas de recolección mejoradas.",
                    "version": "6.0.1",
                    "autor": "Ultramega",
                    "jar": "BotanyPotsTiers-Forge-1.20.1-6.0.2.jar"
                },
                {
                    "nombre": "BotanyTrees",
                    "url": "https://modrinth.com/mod/mvs7RoIW",
                    "descripcion": "Complemento para BotanyPots que añade soporte para cultivar y recolectar árboles directamente desde las macetas.",
                    "version": "9.0.20",
                    "autor": "Darkhax",
                    "jar": "BotanyTrees-Forge-1.20.1-9.0.20.jar"
                },
                {
                    "nombre": "ButchersDelight",
                    "url": "https://modrinth.com/mod/B0xSlae0",
                    "descripcion": "Incorpora mecánicas inmersivas de procesamiento de carne, incluyendo ganchos, cuchillos y cortes específicos de animales.",
                    "version": "1.20.1-2.1.0",
                    "autor": "Onuadan, MCreator",
                    "jar": "Butchersdelight beta 1.20.1 2.1.0.jar"
                },
                {
                    "nombre": "ButchersDelightfoods",
                    "url": "https://modrinth.com/mod/u9J9M7PQ",
                    "descripcion": "Extensión para Butchers Delight que añade una enorme variedad de recetas y platos preparados con los nuevos cortes de carne.",
                    "version": "1.20.1-1.0.3",
                    "autor": "Onuadan, MCreator",
                    "jar": "Butchersdelight Foods beta 1.20.1 1.0.3.jar"
                },
                {
                    "nombre": "Delightful",
                    "url": "https://modrinth.com/mod/JtSnhtNJ",
                    "descripcion": "Expande Farmer's Delight con decenas de nuevos ingredientes, snacks y comidas, además de alta compatibilidad con otros mods.",
                    "version": "3.7.2",
                    "autor": "brnbrd",
                    "jar": "Delightful-1.20.1-3.7.2.jar"
                },
                {
                    "nombre": "Delightful Burgers",
                    "url": "https://modrinth.com/mod/AqHNT5iP",
                    "descripcion": "Agrega una deliciosa selección de hamburguesas personalizables e ingredientes de comida rápida al estilo de Farmer's Delight.",
                    "version": "1.20.1",
                    "autor": "luhcarti",
                    "jar": "delightfulburgers-1.20.1.jar"
                },
                {
                    "nombre": "Delightful Sandwiches",
                    "url": "https://modrinth.com/mod/wmyqU46J",
                    "descripcion": "Complemento culinario que permite la creación de elaborados sándwiches y bocadillos aprovechando los ingredientes agrícolas.",
                    "version": "1.20.1",
                    "autor": "luhcarti",
                    "jar": "delightfulsandwich-1.20.1.jar"
                },
                {
                    "nombre": "Farmer's Delight",
                    "url": "https://modrinth.com/mod/R2OftAxM",
                    "descripcion": "Una expansión agrícola y culinaria integral que añade cultivos, ollas de cocción y ricas recetas para revitalizar la gastronomía.",
                    "version": "1.20.1-1.2.9",
                    "autor": "vectorwing",
                    "jar": "FarmersDelight-1.20.1-1.2.9.jar"
                },
                {
                    "nombre": "More Delight",
                    "url": "https://modrinth.com/mod/znHQQtuU",
                    "descripcion": "Añade aún más herramientas culinarias, ingredientes nativos y recetas deliciosas para complementar la experiencia base de Farmer's Delight.",
                    "version": "26.05.20-1.20-forge",
                    "autor": "Axperty",
                    "jar": "moredelight-26.05.20-1.20-forge.jar"
                }
            ]
        },
        "construction": {
            "titulo": "🏗️ Construcción y Decoración",
            "mods": [
                {
                    "nombre": "[Let's Do] Beachparty",
                    "url": "https://modrinth.com/mod/lets-do-beachparty",
                    "descripcion": "Añade elementos decorativos y bloques temáticos para crear fiestas en la playa, heladerías y ambientes costeros relajantes.",
                    "version": "1.1.4",
                    "autor": "satisfy",
                    "jar": "letsdo-beachparty-forge-1.1.4.jar"
                },
                {
                    "nombre": "[Let's Do] Furniture",
                    "url": "https://modrinth.com/mod/lets-do-furniture",
                    "descripcion": "Agrega una gran variedad de muebles rústicos y decoraciones altamente detalladas para interiores de madera y piedra.",
                    "version": "1.0.2",
                    "autor": "satisfy",
                    "jar": "letsdo-furniture-forge-1.0.2.jar"
                },
                {
                    "nombre": "Amendments",
                    "url": "https://modrinth.com/mod/6iTJugQR",
                    "descripcion": "Mejora bloques vanilla con nuevas funcionalidades visuales e interacciones decorativas, como calderos con líquidos y carteles colgantes animados.[cite: 2]",
                    "version": "1.20-2.2.5",
                    "autor": "MehVahdJukaar",
                    "jar": "amendments-1.20-2.2.5.jar"
                },
                {
                    "nombre": "Another Furniture",
                    "url": "https://modrinth.com/mod/ulloLmqG",
                    "descripcion": "Introduce muebles de estilo vanilla con un toque de encanto, incluyendo sillas, mesas, toldos y estanterías interactivas.[cite: 2]",
                    "version": "1.20.1-3.0.4",
                    "autor": "Starfish Studios",
                    "jar": "another_furniture-forge-1.20.1-3.0.4.jar"
                },
                {
                    "nombre": "Beautify",
                    "url": "https://modrinth.com/mod/beautify",
                    "descripcion": "Añade detalles decorativos colgantes, persianas funcionales, enrejados y cuadros para dar más vida a las construcciones.",
                    "version": "1.1.0",
                    "autor": "exline",
                    "jar": "beautify-1.20.1-1.1.0.jar"
                },
                {
                    "nombre": "Cluttered",
                    "url": "https://modrinth.com/mod/cluttered",
                    "descripcion": "Proporciona una inmensa cantidad de muebles adorables y desorden decorativo temático para llenar estanterías y mesas vacías.",
                    "version": "2.1.0",
                    "autor": "Starry",
                    "jar": "cluttered-1.20.1-2.1.0-forge.jar"
                },
                {
                    "nombre": "Construction Wand",
                    "url": "https://www.curseforge.com/projects/399558",
                    "descripcion": "Ofrece varitas mágicas de construcción que permiten colocar múltiples bloques a la vez, acelerando drásticamente la edificación.",
                    "version": "1.1.6",
                    "autor": "ThetaDev",
                    "jar": "constructionwand-1.20.1-1.1.6.jar"
                },
                {
                    "nombre": "Fnaf Plushie Remastered",
                    "url": "https://www.curseforge.com/projects/fnaf-plushie-remastered",
                    "descripcion": "Incluye peluches decorativos remasterizados basados en la popular franquicia de terror para decorar habitaciones y bases.",
                    "version": "1.0.0",
                    "autor": "Tio_Zabto",
                    "jar": "fnaf-plushies-1.20.1-1.0.0.jar"
                },
                {
                    "nombre": "Immersive Paintings",
                    "url": "https://modrinth.com/mod/immersive-paintings",
                    "descripcion": "Permite crear cuadros personalizados usando imágenes y URLs propias, integrándolas estéticamente en el mundo.",
                    "version": "0.6.0",
                    "autor": "Luke100000",
                    "jar": "immersive_paintings-1.20.1-0.6.0.jar"
                },
                {
                    "nombre": "Macaw's Bridges",
                    "url": "https://modrinth.com/mod/macaws-bridges",
                    "descripcion": "Ofrece una amplia selección de puentes modulares de distintos materiales, con barandillas y escalones realistas.",
                    "version": "3.0.0",
                    "autor": "sketch_macaw",
                    "jar": "macawsbridges-1.20.1-3.0.0.jar"
                },
                {
                    "nombre": "Macaw's Doors",
                    "url": "https://modrinth.com/mod/macaws-doors",
                    "descripcion": "Expande enormemente las opciones arquitectónicas con nuevas puertas shoji, metálicas, de cristal y dobles.",
                    "version": "1.1.0",
                    "autor": "sketch_macaw",
                    "jar": "macawsdoors-1.20.1-1.1.0.jar"
                },
                {
                    "nombre": "Macaw's Fences and Walls",
                    "url": "https://modrinth.com/mod/macaws-fences-and-walls",
                    "descripcion": "Añade nuevas vallas, muros y puertas de valla con estilos visuales únicos y conexiones lógicas para exteriores.",
                    "version": "1.1.1",
                    "autor": "sketch_macaw",
                    "jar": "macawsfences-1.20.1-1.1.1.jar"
                },
                {
                    "nombre": "Macaw's Furniture",
                    "url": "https://modrinth.com/mod/macaws-furniture",
                    "descripcion": "Incorpora mobiliario moderno y de almacenamiento como armarios conectables, mesitas de noche y escritorios de todas las maderas.",
                    "version": "3.2.2",
                    "autor": "sketch_macaw",
                    "jar": "macawsfurniture-1.20.1-3.2.2.jar"
                },
                {
                    "nombre": "Macaw's Lights and Lamps",
                    "url": "https://modrinth.com/mod/macaws-lights-and-lamps",
                    "descripcion": "Proporciona diversas opciones de iluminación estética como faroles de papel, lámparas de techo y farolas de jardín.",
                    "version": "1.0.6",
                    "autor": "sketch_macaw",
                    "jar": "macawslights-1.20.1-1.0.6.jar"
                },
                {
                    "nombre": "Macaw's Paths and Pavings",
                    "url": "https://modrinth.com/mod/macaws-paths-and-pavings",
                    "descripcion": "Añade caminos, pavimentos modulares y senderos decorativos que combinan perfectamente con el entorno de los jardines.",
                    "version": "1.0.4",
                    "autor": "sketch_macaw",
                    "jar": "macawspaths-1.20.1-1.0.4.jar"
                },
                {
                    "nombre": "Macaw's Roofs",
                    "url": "https://modrinth.com/mod/macaws-roofs",
                    "descripcion": "Permite construir tejados reales en diferentes ángulos, toldos superpuestos y canalones en múltiples materiales.",
                    "version": "2.3.0",
                    "autor": "sketch_macaw",
                    "jar": "macawsroofs-1.20.1-2.3.0.jar"
                },
                {
                    "nombre": "Macaw's Stairs and Balconies",
                    "url": "https://modrinth.com/mod/macaws-stairs-and-balconies",
                    "descripcion": "Ofrece nuevas formas de escaleras estilizadas y balcones con barandillas conectables para construcciones detalladas.",
                    "version": "1.0.0",
                    "autor": "sketch_macaw",
                    "jar": "macawsstairs-1.20.1-1.0.0.jar"
                },
                {
                    "nombre": "Macaw's Windows",
                    "url": "https://modrinth.com/mod/macaws-windows",
                    "descripcion": "Introduce ventanas de cristal personalizables, marcos dobles de madera y persianas que se pueden abrir y cerrar interactivamente.",
                    "version": "2.2.1",
                    "autor": "sketch_macaw",
                    "jar": "macawswindows-1.20.1-2.2.1.jar"
                },
                {
                    "nombre": "Miku Plushies",
                    "url": "https://www.curseforge.com/minecraft/mc-mods/miku-plushies",
                    "descripcion": "Añade adorables peluches coleccionables de la famosa idol virtual Hatsune Miku y sus variantes para decorar bases.",
                    "version": "1.2.0",
                    "autor": "miku_fan",
                    "jar": "mikuplushies-1.20.1-1.2.0.jar"
                },
                {
                    "nombre": "Perfect Plushies",
                    "url": "https://modrinth.com/mod/perfect-plushies",
                    "descripcion": "Ofrece una inmensa colección de peluches altamente detallados de animales y criaturas del juego para decoración.",
                    "version": "1.6.0",
                    "autor": "Falkreon",
                    "jar": "perfectplushies-1.20.1-1.6.0.jar"
                },
                {
                    "nombre": "Plushie Buddies",
                    "url": "https://www.curseforge.com/projects/plushie-buddies",
                    "descripcion": "Introduce pequeños y simpáticos compañeros de peluche que se pueden colocar en casi cualquier superficie.",
                    "version": "1.0.3",
                    "autor": "MCreator",
                    "jar": "plushiebuddies-1.20.1-1.0.3.jar"
                },
                {
                    "nombre": "Plushie Mod",
                    "url": "https://www.curseforge.com/projects/plushie-mod",
                    "descripcion": "Añade aún más variantes de muñecos de peluche crafteables para darle un toque acogedor a tus construcciones.",
                    "version": "2.1.0",
                    "autor": "PlushieDev",
                    "jar": "plushiemod-1.20.1-2.1.0.jar"
                },
                {
                    "nombre": "Rechiseled",
                    "url": "https://modrinth.com/mod/rechiseled",
                    "descripcion": "Permite cincelar bloques en numerosas variantes conectadas con texturas continuas, ideal para grandes proyectos de suelo o pared.",
                    "version": "1.1.5",
                    "autor": "SuperMartijn642",
                    "jar": "rechiseled-1.1.5-forge-1.20.jar"
                },
                {
                    "nombre": "Reconnectible Chains",
                    "url": "https://www.curseforge.com/projects/reconnectible-chains",
                    "descripcion": "Mejora la flexibilidad decorativa de las cadenas del juego permitiendo conectarlas visualmente en diferentes direcciones y ángulos.",
                    "version": "1.0.1",
                    "autor": "Fuzs",
                    "jar": "reconnectiblechains-1.20.1-1.0.1.jar"
                },
                {
                    "nombre": "Saro's Player Plushie Mod",
                    "url": "https://www.curseforge.com/projects/saros-player-plushies",
                    "descripcion": "Añade la posibilidad de craftear peluches que adoptan dinámicamente la skin de los jugadores del servidor.",
                    "version": "1.2.0",
                    "autor": "Saro",
                    "jar": "sarosplayerplushies-1.20.1-1.2.0.jar"
                },
                {
                    "nombre": "Valhelsia Furniture",
                    "url": "https://modrinth.com/mod/valhelsia-furniture",
                    "descripcion": "Ofrece muebles de altísima calidad visual y utilidades domésticas que encajan perfectamente con una estética vanilla refinada.",
                    "version": "1.1.2",
                    "autor": "Valhelsia Team",
                    "jar": "valhelsia_furniture-1.20.1-1.1.2.jar"
                }
            ]
        },
        "technology": {
            "titulo": "⚙️ Tecnología y Almacenamiento",
            "mods": [
                {
                    "nombre": "Create",
                    "url": "https://modrinth.com/mod/LNytGWDc",
                    "descripcion": "Mod de ingeniería mecánica con engranajes, cintas transportadoras y máquinas rotativas para automatizar prácticamente cualquier proceso del juego.",
                    "version": "6.0.8",
                    "autor": "simibubi",
                    "jar": "create-1.20.1-6.0.8.jar"
                },
                {
                    "nombre": "Immersive Aircraft",
                    "url": "https://modrinth.com/mod/x3HZvrj6",
                    "descripcion": "Añade aeronaves funcionales crafteables como biplanos y dirigibles que se controlan en primera persona y respetan la física del entorno.",
                    "version": "1.4.1+1.20.1",
                    "autor": "Luke100000",
                    "jar": "immersive_aircraft-1.4.1+1.20.1-forge.jar"
                },
                {
                    "nombre": "Iron Furnaces",
                    "url": "https://modrinth.com/mod/yPlaLxD1",
                    "descripcion": "Expande los hornos vanilla con variantes de materiales superiores que procesan objetos hasta cuatro veces más rápido y con mayor eficiencia de combustible.",
                    "version": "4.1.8",
                    "autor": "Qelifern (pizzaatime), XenoMustache, BOLT_M4G1C",
                    "jar": "ironfurnaces-1.20.1-4.1.8.jar"
                },
                {
                    "nombre": "Iron Chests: Restocked",
                    "url": "https://modrinth.com/mod/n2de3t2z",
                    "descripcion": "Ofrece cofres de mayor capacidad en distintos materiales como hierro, oro, diamante y esmeralda para organizar y escalar grandes inventarios.",
                    "version": "5.0.2",
                    "autor": "ThatGravyBoat, Kekie",
                    "jar": "ironchests-5.0.2-forge.jar"
                },
                {
                    "nombre": "Sophisticated Backpacks",
                    "url": "https://modrinth.com/mod/TyCTlI4b",
                    "descripcion": "Añade mochilas altamente personalizables con slots de filtros, mejoras de compresión y upgrades de automatización para gestionar el inventario en el campo.",
                    "version": "3.24.57.1908",
                    "autor": "P3pp3rF1y, Ridanisaurus",
                    "jar": "sophisticatedbackpacks-1.20.1-3.24.57.1908.jar"
                },
                {
                    "nombre": "Tinkers' Construct",
                    "url": "https://modrinth.com/mod/rxIIYO6c",
                    "descripcion": "Sistema modular de fabricación de herramientas y armas que permite combinar materiales para obtener estadísticas únicas y aplicar modificadores progresivos.",
                    "version": "3.11.2.166",
                    "autor": "Slime Knights",
                    "jar": "TConstruct-1.20.1-3.11.2.166.jar"
                },
                {
                    "nombre": "Tom's Simple Storage Mod",
                    "url": "https://modrinth.com/mod/XZNI4Cpy",
                    "descripcion": "Sistema de almacenamiento centralizado con interfaz de búsqueda intuitiva que interconecta múltiples cofres sin requerir controladores complejos.",
                    "version": "1.7.1",
                    "autor": "tom5454",
                    "jar": "toms_storage-1.20-1.7.1.jar"
                }
            ]
        },
        "sound": {
            "titulo": "🎵 Instrumentos, Efectos de Sonido y Música",
            "mods": [
                {
                    "nombre": "AmbientSounds",
                    "url": "https://modrinth.com/mod/fM515JnW",
                    "descripcion": "Enriquece la atmósfera del mundo con capas dinámicas de sonidos ambientales adaptados al bioma, la hora del día y las condiciones climáticas.",
                    "version": "6.3.8",
                    "autor": "CreativeMD",
                    "jar": "AmbientSounds_FORGE_v6.3.8_mc1.20.1.jar"
                },
                {
                    "nombre": "Aquamirae Mod EXTRA Music",
                    "url": "https://modrinth.com/mod/lwSm57fu",
                    "descripcion": "Añade pistas musicales y temas de jefes exclusivos que complementan y enriquecen la experiencia sonora del mod Aquamirae.",
                    "version": "1.0.0",
                    "autor": "Marcus, MCreator",
                    "jar": "Aquamirae Mod Boss Music Tweaks 1.20.1 v1.1.0.jar"
                },
                {
                    "nombre": "Cool Rain",
                    "url": "https://modrinth.com/mod/IgftU6Mn",
                    "descripcion": "Reemplaza los efectos de sonido y partículas de la lluvia por versiones más realistas e inmersivas que varían según el bioma y la superficie.",
                    "version": "1.0.3",
                    "autor": "Leclowndu93150",
                    "jar": "coolrain-1.20.1-Forge-1.0.3.jar"
                },
                {
                    "nombre": "Even More Instruments!",
                    "url": "https://modrinth.com/mod/Mcs3cqJ1",
                    "descripcion": "Introduce una amplia variedad de instrumentos musicales tocables en tiempo real, como guitarras, flautas y percusiones, con soporte de notas completo.",
                    "version": "6.1.4",
                    "autor": "StavWasPlayZ",
                    "jar": "evenmoreinstruments-1.20-1.20.1-6.1.4.jar"
                },
                {
                    "nombre": "ExtraSounds Next",
                    "url": "https://modrinth.com/mod/jv7tzVE4",
                    "descripcion": "Agrega efectos de sonido detallados para acciones de interfaz como abrir inventarios, hacer clic en slots y scrollear, mejorando notablemente la retroalimentación auditiva.",
                    "version": "1.5.2",
                    "autor": "Arborsm, stashymane",
                    "jar": "extrasounds-1.5.4+1.20.1-forge.jar"
                },
                {
                    "nombre": "Genshin Instruments",
                    "url": "https://modrinth.com/mod/UUD6Qkij",
                    "descripcion": "Incorpora la lira y otros instrumentos interactivos del universo Genshin Impact con su sistema de notas, melodías y UI característicos.",
                    "version": "5.0",
                    "autor": "StavWasPlayZ",
                    "jar": "genshinstrument-1.20-1.20.1-5.0.jar"
                },
                {
                    "nombre": "IllagerRaidMusic",
                    "url": "https://www.curseforge.com/projects/947227",
                    "descripcion": "Reproduce música épica y tensa exclusiva durante las incursiones de los illagers, intensificando dramáticamente la atmósfera del combate.",
                    "version": "1.1.1",
                    "autor": "Picono435",
                    "jar": "illagerraidmusic-1.20-1.20.1-1.2.jar"
                },
                {
                    "nombre": "Immersive Melodies",
                    "url": "https://modrinth.com/mod/TaSmHw8V",
                    "descripcion": "Permite reproducir canciones personalizadas mediante instrumentos del juego utilizando archivos MIDI importados, abriendo un sistema musical completo en el servidor.",
                    "version": "0.6.1+1.20.1",
                    "autor": "Luke100000",
                    "jar": "immersive_melodies-0.6.1+1.20.1-forge.jar"
                },
                {
                    "nombre": "JoJo's Bizarre Adventure Music",
                    "url": "https://modrinth.com/mod/m3dwgb3y",
                    "descripcion": "Incorpora la icónica banda sonora de la serie JoJo's Bizarre Adventure, con temas y efectos de sonido que se reproducen dinámicamente en el juego.",
                    "version": "1.20.1-1.1.0",
                    "autor": "JCraft EoE Team",
                    "jar": "jjbamusic-forge-1.20.1-1.1.0.jar"
                }
            ]
        },
        "utilities": {
            "titulo": "🛠️ Utilidades, Calidad de Vida (QoL) y Logística",
            "mods": [
                {
                    "nombre": "AstikorCarts Redux",
                    "url": "https://modrinth.com/mod/mnLFouB0",
                    "descripcion": "Añade carros tirados por caballos y vehículos de tracción animal para transportar jugadores, objetos y mobs a través del mundo de forma eficiente.",
                    "version": "1.1.8",
                    "autor": "MennoMax, pau101, talhanation, jusipat",
                    "jar": "astikorcarts-1.20.1-1.1.8.jar"
                },
                {
                    "nombre": "Campfire Resting",
                    "url": "https://modrinth.com/mod/k9O8NrbO",
                    "descripcion": "Permite a los jugadores descansar junto a fogatas para saltarse la noche, como alternativa funcional a las camas durante la exploración.",
                    "version": "1.6.0",
                    "autor": "Klausster, MCreator",
                    "jar": "campfireresting-1.6.0-forge-1.20.1.jar"
                },
                {
                    "nombre": "Carry On",
                    "url": "https://modrinth.com/mod/joEfVgkn",
                    "descripcion": "Permite agarrar y transportar bloques funcionales como cofres u hornos, e incluso mobs pequeños, con las manos vacías sin necesidad de herramientas.",
                    "version": "2.1.2.7",
                    "autor": "Tschipp, Purplicious_Cow, cy4n",
                    "jar": "carryon-forge-1.20.1-2.1.2.7.jar"
                },
                {
                    "nombre": "Cinematic Zoom",
                    "url": "https://www.curseforge.com/projects/1291754",
                    "descripcion": "Añade un zoom cinematográfico suave activable por tecla, ideal para capturas de pantalla, exploración detallada y grabación de contenido.",
                    "version": "1.0.0j",
                    "autor": "Kubepixel",
                    "jar": "cinematiczoom-1.0.0k.jar"
                },
                {
                    "nombre": "Comforts",
                    "url": "https://www.curseforge.com/projects/276951",
                    "descripcion": "Añade sacos de dormir y hamacas para saltarse la noche sin alterar el punto de reaparición, manteniendo la movilidad del jugador durante la exploración.",
                    "version": "6.4.0+1.20.1",
                    "autor": "Illusive Soulworks",
                    "jar": "comforts-forge-6.4.0+1.20.1.jar"
                },
                {
                    "nombre": "CraftTweaker",
                    "url": "https://modrinth.com/mod/Xg35A4rS",
                    "descripcion": "Motor de scripts que permite añadir, eliminar o modificar recetas de crafteo, hornos y loot tables usando lenguaje ZenScript desde archivos externos.",
                    "version": "14.0.60",
                    "autor": "Jaredlll08, Kindlich, StanHebben and TheSilkMiner",
                    "jar": "CraftTweaker-forge-1.20.1-14.0.60.jar"
                },
                {
                    "nombre": "Default Options",
                    "url": "https://www.curseforge.com/projects/232131",
                    "descripcion": "Permite distribuir opciones de juego y keybinds preconfigurados junto con el modpack, asegurando una experiencia uniforme para todos los jugadores desde el primer inicio.",
                    "version": "18.0.4",
                    "autor": "BlayTheNinth",
                    "jar": "defaultoptions-forge-1.20.1-18.0.4.jar"
                },
                {
                    "nombre": "Easy Anvils",
                    "url": "https://modrinth.com/mod/OZBR5JT5",
                    "descripcion": "Elimina el límite de niveles de los yunques y los hace indestructibles, permitiendo combinaciones y encantamientos sin las restricciones arbitrarias de costo habituales.",
                    "version": "8.0.2",
                    "autor": "Fuzs",
                    "jar": "EasyAnvils-v8.0.2-1.20.1-Forge.jar"
                },
                {
                    "nombre": "Easy Magic",
                    "url": "https://modrinth.com/mod/9hx3AbJM",
                    "descripcion": "Permite repetir tiradas de encantamiento en la mesa sin consumir niveles extra y recuerda la última cantidad de lapis usada para agilizar el proceso.",
                    "version": "8.0.1",
                    "autor": "Fuzs",
                    "jar": "EasyMagic-v8.0.1-1.20.1-Forge.jar"
                },
                {
                    "nombre": "Easy NPC (Config & UI)",
                    "url": "https://modrinth.com/mod/uTGjf7vA",
                    "descripcion": "Añade NPCs completamente configurables con diálogos, skins y roles personalizados, gestionados desde una interfaz gráfica intuitiva integrada directamente en el juego.",
                    "version": "6.20.0",
                    "autor": "Markus Bordihn",
                    "jar": "easy_npc_config_ui-forge-1.20.1-6.20.0.jar"
                },
                {
                    "nombre": "Elevator Mod",
                    "url": "https://modrinth.com/mod/hi2dSXTu",
                    "descripcion": "Añade bloques de ascensor que teletransportan verticalmente a los jugadores entre pisos del mismo color, simplificando el desplazamiento en construcciones de varias plantas.",
                    "version": "1.20.1-1.9.1-forge",
                    "autor": "VsnGamer",
                    "jar": "elevatorid-1.20.1-1.9.1-forge.jar"
                },
                {
                    "nombre": "EMI",
                    "url": "https://modrinth.com/mod/fRiHVvU7",
                    "descripcion": "Visor de recetas avanzado y altamente personalizable que reemplaza a JEI, con árboles de crafteo, marcadores y filtros para gestionar eficientemente el conocimiento del modpack.",
                    "version": "1.1.24+1.20.1+forge",
                    "autor": "Emi",
                    "jar": "emi-1.1.24+1.20.1+forge.jar"
                },
                {
                    "nombre": "EMI Enchanting",
                    "url": "https://modrinth.com/mod/wbWoo11W",
                    "descripcion": "Complemento de EMI que añade una vista detallada del sistema de encantamientos, mostrando costos de nivel, lapis requerido y posibles resultados de manera ordenada.",
                    "version": "0.1.2+1.20.1+forge",
                    "autor": "fzzyhmstrs",
                    "jar": "emi_enchanting-0.1.2+1.20.1+forge.jar"
                },
                {
                    "nombre": "EMI Enchants",
                    "url": "https://modrinth.com/mod/11hKNQb2",
                    "descripcion": "Complemento de EMI que lista todos los encantamientos del juego como recetas consultables, mostrando sus niveles, efectos y condiciones de aplicación directamente en el visor.",
                    "version": "1.0.0",
                    "autor": "Mephodio",
                    "jar": "EMIEnchants-forge-1.19.3-1.20.4-1.0.0.jar"
                },
                {
                    "nombre": "EMI Ores",
                    "url": "https://modrinth.com/mod/sG4TqDb8",
                    "descripcion": "Plugin de EMI que muestra la distribución por altura de todos los minerales del mundo, facilitando la planificación de sesiones de minería con información visual clara.",
                    "version": "1.3+1.20.1+forge",
                    "autor": "Abbie",
                    "jar": "emi_ores-1.3+1.20.1+forge.jar"
                },
                {
                    "nombre": "EMI Trades",
                    "url": "https://modrinth.com/mod/j2HhbEE7",
                    "descripcion": "Plugin de EMI que integra los tratos de aldeanos y mercaderes errantes como recetas consultables, permitiendo planificar intercambios sin necesidad de buscar a los NPCs físicamente.",
                    "version": "1.2.1+mc1.20.1",
                    "autor": "Prismwork, Flamarine",
                    "jar": "emitrades-forge-1.2.1+mc1.20.1.jar"
                },
                {
                    "nombre": "Enchantment Descriptions",
                    "url": "https://modrinth.com/mod/UVtY3ZAC",
                    "descripcion": "Añade descripciones en el juego a los libros encantados y objetos, eliminando la necesidad de consultar wikis externas para entender el efecto de cada encantamiento.",
                    "version": "17.1.21",
                    "autor": "Darkhax",
                    "jar": "EnchantmentDescriptions-Forge-1.20.1-17.1.21.jar"
                },
                {
                    "nombre": "Every Compat (Wood Good)",
                    "url": "https://modrinth.com/mod/eiktJyw1",
                    "descripcion": "Genera automáticamente variantes de todos los tipos de madera instalados para mods de decoración y construcción como Supplementaries o Macaw's, eliminando huecos de compatibilidad.",
                    "version": "1.20-2.9.23",
                    "autor": "MehVahdJukaar, Xel'Bayria, WenXin2",
                    "jar": "everycomp-1.20-2.9.23-forge.jar"
                },
                {
                    "nombre": "Explorer's Compass",
                    "url": "https://modrinth.com/mod/RV1qfVQ8",
                    "descripcion": "Brújula especial que permite localizar cualquier estructura generada en el mundo mediante un clic derecho, mostrando distancia y dirección en tiempo real.",
                    "version": "1.20.1-1.4.0-forge",
                    "autor": "ChaosTheDude",
                    "jar": "ExplorersCompass-1.20.1-1.4.0-forge.jar"
                },
                {
                    "nombre": "Exposure",
                    "url": "https://modrinth.com/mod/hB899VmG",
                    "descripcion": "Mod de cámara analógica completamente funcional que permite tomar fotografías, revelarlas químicamente y exhibirlas en marcos, replicando el proceso fotográfico real dentro del juego.",
                    "version": "1.9.21",
                    "autor": "mortuusars",
                    "jar": "exposure-forge-1.20.1-1.9.21.jar"
                },
                {
                    "nombre": "Exposure Polaroid",
                    "url": "https://modrinth.com/mod/WEWiqYkW",
                    "descripcion": "Complemento de Exposure que añade cámaras y marcos estilo Polaroid, permitiendo obtener fotografías instantáneas con una estética retro característica.",
                    "version": "1.1.4",
                    "autor": "mortuusars",
                    "jar": "exposure_polaroid-forge-1.20.1-1.1.4.jar"
                },
                {
                    "nombre": "Exposure: Expanded",
                    "url": "https://modrinth.com/mod/61XQmq6p",
                    "descripcion": "Expansión del mod Exposure que añade nuevas cámaras, tipos de película y accesorios fotográficos, ampliando considerablemente las posibilidades creativas del sistema de fotografía.",
                    "version": "1.1.0",
                    "autor": "Sparkwave",
                    "jar": "exposure_expanded-forge-1.1.0-1.20.1.jar"
                },
                {
                    "nombre": "FTB Chunks",
                    "url": "https://www.curseforge.com/projects/314906",
                    "descripcion": "Sistema de reclamación y precarga de chunks con soporte de equipos, protegiendo zonas de griefing y garantizando que las máquinas automáticas operen incluso sin jugadores conectados.",
                    "version": "2001.3.8",
                    "autor": "FTB Team",
                    "jar": "ftb-chunks-forge-2001.3.8.jar"
                },
                {
                    "nombre": "FTB Essentials",
                    "url": "https://www.curseforge.com/projects/410811",
                    "descripcion": "Añade comandos esenciales para servidores como /home, /spawn y /tpa, mejorando notablemente la experiencia y movilidad de los jugadores en partidas multijugador.",
                    "version": "2001.2.4",
                    "autor": "FTB Team",
                    "jar": "ftb-essentials-forge-2001.2.4.jar"
                },
                {
                    "nombre": "FTB Ranks",
                    "url": "https://www.curseforge.com/projects/314905",
                    "descripcion": "Sistema de gestión de permisos y rangos para servidores, permitiendo a los administradores controlar qué comandos y funcionalidades tiene disponible cada grupo de jugadores.",
                    "version": "2001.1.7",
                    "autor": "FTB Team",
                    "jar": "ftb-ranks-forge-2001.1.7.jar"
                },
                {
                    "nombre": "FTB Teams",
                    "url": "https://www.curseforge.com/projects/404468",
                    "descripcion": "Sistema de gestión de equipos que permite agrupar jugadores para compartir claims de FTB Chunks, coordinar recursos y mantener inventarios y bases comunes.",
                    "version": "2001.3.2",
                    "autor": "FTB Team",
                    "jar": "ftb-teams-forge-2001.3.2.jar"
                },
                {
                    "nombre": "Get It Together, Drops!",
                    "url": "https://modrinth.com/mod/T0OUgf8P",
                    "descripcion": "Configura los items soltados para que sean atraídos automáticamente hacia los jugadores cercanos y combina drops similares en una sola entidad, reduciendo el lag por exceso de objetos.",
                    "version": "1.3",
                    "autor": "bl4ckscor3",
                    "jar": "getittogetherdrops-forge-1.20-1.3.jar"
                },
                {
                    "nombre": "Healing Bed",
                    "url": "https://modrinth.com/mod/2kPukywy",
                    "descripcion": "Modifica las camas para que restauren puntos de vida al jugador durante el descanso nocturno, añadiendo un incentivo extra para dormir más allá de simplemente saltarse la noche.",
                    "version": "1.20.1",
                    "autor": "NoxGame1230",
                    "jar": "HealingBed 1.20.1.jar"
                },
                {
                    "nombre": "Healing Campfire",
                    "url": "https://modrinth.com/mod/kOuPUitF",
                    "descripcion": "Convierte las fogatas en fuentes de regeneración de vida pasiva para jugadores y animales cercanos, creando un incentivo estratégico para su uso en campamentos y bases.",
                    "version": "6.2",
                    "autor": "Rick South",
                    "jar": "healingcampfire-1.20.1-6.2.jar"
                },
                {
                    "nombre": "HT's TreeChop",
                    "url": "https://modrinth.com/mod/gHoB7SHO",
                    "descripcion": "Permite talar árboles completos golpeando únicamente el bloque de tronco base, con una animación progresiva de caída que hace el proceso más rápido y satisfactorio.",
                    "version": "0.18.8",
                    "autor": "hammertater",
                    "jar": "TreeChop-1.20.1-forge-0.19.0.jar"
                },
                {
                    "nombre": "InControl",
                    "url": "https://modrinth.com/mod/KpICtuVx",
                    "descripcion": "Sistema avanzado de control de spawn que permite configurar mediante reglas JSON qué mobs aparecen, en qué condiciones, con qué equipamiento y qué drops producen.",
                    "version": "1.20-9.4.6",
                    "autor": "McJty",
                    "jar": "incontrol-1.20-9.4.6.jar"
                },
                {
                    "nombre": "Inventory Management Deluxe",
                    "url": "https://www.curseforge.com/projects/1293085",
                    "descripcion": "Añade botones de ordenado inteligente, auto-reapilado y gestión avanzada a cualquier inventario o contenedor, reduciendo el tiempo invertido en organizar objetos.",
                    "version": "1.0.7",
                    "autor": "Leclowndu93150, Roundaround",
                    "jar": "inventorymanagement-1.20.1-Forge-1.0.7.jar"
                },
                {
                    "nombre": "ItemPhysic",
                    "url": "https://www.curseforge.com/projects/258587",
                    "descripcion": "Aplica física realista a los objetos soltados al suelo, incluyendo rebotes, rodamiento por pendientes y flotación en agua, añadiendo inmersión visual al comportamiento de los drops.",
                    "version": "1.8.13",
                    "autor": "CreativeMD",
                    "jar": "ItemPhysic_FORGE_v1.8.13_mc1.20.1.jar"
                },
                {
                    "nombre": "Jade",
                    "url": "https://modrinth.com/mod/nvQzSEkH",
                    "descripcion": "Muestra en pantalla información detallada del bloque o entidad que el jugador está mirando, incluyendo estado, contenido, progreso y datos extendidos de muchos mods instalados.",
                    "version": "11.13.2+forge",
                    "autor": "Snownee",
                    "jar": "Jade-1.20.1-Forge-11.13.2.jar"
                },
                {
                    "nombre": "Jade Addons",
                    "url": "https://modrinth.com/mod/xuDOzCLy",
                    "descripcion": "Complemento de Jade que añade proveedores de información para docenas de mods populares, mostrando datos específicos de máquinas, almacenamiento y entidades de mods de terceros.",
                    "version": "5.5.1+forge",
                    "autor": "Snownee",
                    "jar": "JadeAddons-1.20.1-Forge-5.5.1.jar"
                },
                {
                    "nombre": "Just Hammers",
                    "url": "https://modrinth.com/mod/edU0NbZZ",
                    "descripcion": "Añade martillos de minería que excavan un área de 3×3 bloques con un solo golpe, acelerando enormemente la extracción de minerales y la excavación de túneles.",
                    "version": "2.0.3+mc1.20.1",
                    "autor": "ErrorMikey",
                    "jar": "justhammers-forge-2.0.3+mc1.20.1.jar"
                },
                {
                    "nombre": "Looter's Compass",
                    "url": "https://modrinth.com/mod/u7HUuWes",
                    "descripcion": "Brújula especial que señala hacia cofres de loot cercanos en estructuras generadas como mazmorras o templos, facilitando la búsqueda de tesoros sin necesidad de mapas.",
                    "version": "1.2.4",
                    "autor": "3xpl01t",
                    "jar": "looters_compass-1.2.4.jar"
                },
                {
                    "nombre": "MmmMmmMmmMmm (Dummies)",
                    "url": "https://modrinth.com/mod/Adega8YN",
                    "descripcion": "Añade maniquíes de entrenamiento crafteables que muestran los números de daño al ser golpeados, permitiendo probar builds, armas y encantamientos sin necesidad de atacar mobs reales.",
                    "version": "1.20-2.0.11",
                    "autor": "MehVahdJukaar, Bonusboni, Plantkillable",
                    "jar": "dummmmmmy-1.20-2.0.12-forge.jar"
                },
                {
                    "nombre": "Mob Lassos",
                    "url": "https://modrinth.com/mod/ftOBbnu8",
                    "descripcion": "Añade lazos que permiten capturar mobs vivos y transportarlos en forma de ítem, facilitando la creación y traslado de granjas automáticas sin infraestructura de transporte compleja.",
                    "version": "8.0.1",
                    "autor": "Fuzs",
                    "jar": "MobLassos-v8.0.1-1.20.1-Forge.jar"
                },
                {
                    "nombre": "Mod Menu",
                    "url": "https://modrinth.com/mod/modmenu",
                    "descripcion": "Añade una pantalla de lista de mods instalados accesible desde el menú principal, con acceso directo a la configuración de cada uno y detalles de versión y autoría.",
                    "version": "7.2.2",
                    "autor": "Prospector, haykam821, TerraformersMC",
                    "jar": "modmenu-7.2.2.jar"
                },
                {
                    "nombre": "Mouse Tweaks",
                    "url": "https://www.curseforge.com/projects/60089",
                    "descripcion": "Mejora el comportamiento del ratón en inventarios permitiendo arrastrar para distribuir stacks, clic derecho para rellenar ranuras y otras funciones que aceleran la gestión de objetos.",
                    "version": "2.25.1",
                    "autor": "Ivan Molodetskikh (YaLTeR)",
                    "jar": "MouseTweaks-forge-mc1.20.1-2.25.1.jar"
                },
                {
                    "nombre": "Nature's Compass",
                    "url": "https://modrinth.com/mod/fPetb5Kh",
                    "descripcion": "Brújula especial que permite buscar y navegar hacia cualquier bioma del mundo seleccionándolo en una interfaz, mostrando distancia y dirección hasta el objetivo.",
                    "version": "1.20.1-1.12.0-forge",
                    "autor": "ChaosTheDude",
                    "jar": "NaturesCompass-1.20.1-1.12.0-forge.jar"
                },
                {
                    "nombre": "Neko's Enchanted Books",
                    "url": "https://modrinth.com/mod/VZWuyRVr",
                    "descripcion": "Asigna a cada tipo de libro encantado una textura visual única según el encantamiento que contiene, permitiendo identificarlos de un vistazo sin necesidad de leer su nombre en el tooltip.",
                    "version": "2.0.3",
                    "autor": "Infernal Studios",
                    "jar": "NekosEnchantedBooks-1.19.3-2.0.3.jar"
                },
                {
                    "nombre": "OpenLoader",
                    "url": "https://modrinth.com/mod/KwWsINvD",
                    "descripcion": "Permite cargar datapacks y resource packs personalizados desde una carpeta global compartida entre todos los mundos, simplificando la distribución de contenido personalizado en el servidor.",
                    "version": "19.0.5",
                    "autor": "Darkhax",
                    "jar": "OpenLoader-Forge-1.20.1-19.0.5.jar"
                },
                {
                    "nombre": "Pehkui",
                    "url": "https://modrinth.com/mod/t5W7Jfwy",
                    "descripcion": "Permite modificar el tamaño físico de jugadores y entidades mediante comandos, habilitando experiencias de escala variable que afectan hitbox, velocidad y mecánicas de juego.",
                    "version": "3.8.2+1.20.1-forge",
                    "autor": "Virtuoel",
                    "jar": "Pehkui-3.8.2+1.20.1-forge.jar"
                },
                {
                    "nombre": "Piercing Paxels",
                    "url": "https://modrinth.com/mod/gHkzYDn7",
                    "descripcion": "Añade paxels que combinan pico, hacha y pala en una sola herramienta con la capacidad adicional de excavar áreas extendidas para un trabajo más eficiente y versátil.",
                    "version": "1.0.12",
                    "autor": "",
                    "jar": "piercingpaxels-1.0.12.jar"
                },
                {
                    "nombre": "Ping Wheel",
                    "url": "https://modrinth.com/mod/QQXAdCzh",
                    "descripcion": "Añade una rueda de pings radial que permite a los jugadores marcar ubicaciones, objetos y puntos de interés para sus compañeros de equipo en tiempo real durante el multijugador.",
                    "version": "1.12.1",
                    "autor": "Luken, RXJpaw",
                    "jar": "Ping-Wheel-1.12.1-forge-1.20.1.jar"
                },
                {
                    "nombre": "Polymorph",
                    "url": "https://modrinth.com/mod/tagwiZkJ",
                    "descripcion": "Resuelve conflictos de recetas entre mods mediante una interfaz de selección que aparece cuando existen múltiples recetas válidas para el mismo resultado en la mesa de crafteo.",
                    "version": "0.49.10+1.20.1",
                    "autor": "Illusive Soulworks",
                    "jar": "polymorph-forge-0.49.10+1.20.1.jar"
                },
                {
                    "nombre": "Quark",
                    "url": "https://modrinth.com/mod/qnQsVE2z",
                    "descripcion": "Mod de contenido vanilla-style que añade cientos de mejoras, bloques y tweaks en todas las categorías del juego, desde almacenamiento y construcción hasta exploración y combate.",
                    "version": "4.0-462",
                    "autor": "Vazkii, WireSegal, MCVinnyq, Sully",
                    "jar": "Quark-4.0-462.jar"
                },
                {
                    "nombre": "Rightclick Harvest",
                    "url": "https://modrinth.com/mod/Cnejf5xM",
                    "descripcion": "Permite cosechar cultivos maduros con clic derecho, recolectando la producción y replantando la semilla automáticamente sin necesidad de romper y volver a colocar el cultivo.",
                    "version": "4.6.1+1.20.1",
                    "autor": "Jamalam",
                    "jar": "rightclickharvest-forge-4.6.1+1.20.1.jar"
                },
                {
                    "nombre": "Searchables",
                    "url": "https://modrinth.com/mod/fuuu3xnx",
                    "descripcion": "Librería que provee un componente de barra de búsqueda reutilizable para CraftTweaker y otros mods, estandarizando la funcionalidad de filtrado en listas de objetos e interfaces.",
                    "version": "1.0.3",
                    "autor": "Jaredlll08",
                    "jar": "Searchables-forge-1.20.1-1.0.3.jar"
                },
                {
                    "nombre": "Supplementaries",
                    "url": "https://modrinth.com/mod/fFEIiSDQ",
                    "descripcion": "Gran mod de contenido vanilla que añade numerosos bloques decorativos y funcionales como cuerdas, señales, relojes, cañones y docenas de utilidades para construcción y automatización.",
                    "version": "1.20-3.1.43",
                    "autor": "MehVahdJukaar, Plantkillable",
                    "jar": "supplementaries-1.20-3.1.43-forge.jar"
                },
                {
                    "nombre": "Tool Belt",
                    "url": "https://www.curseforge.com/projects/260262",
                    "descripcion": "Añade un cinturón de herramientas equipable con ranuras adicionales de acceso rápido, permitiendo cambiar entre herramientas y objetos frecuentes sin reorganizar el hotbar principal.",
                    "version": "1.20.03",
                    "autor": "gigaherz",
                    "jar": "ToolBelt-1.20.1-1.20.03.jar"
                },
                {
                    "nombre": "WaterFrames",
                    "url": "https://modrinth.com/mod/eBzFuVTM",
                    "descripcion": "Añade marcos interactivos capaces de reproducir imágenes, videos y contenido web desde URLs directamente en el juego, abriendo posibilidades creativas de exhibición y decoración multimedia.",
                    "version": "2.1.22",
                    "autor": "SrRapero720",
                    "jar": "waterframes-FORGE-mc1.20.1-v2.1.22.jar"
                },
                {
                    "nombre": "WaterVision",
                    "url": "https://modrinth.com/mod/dGGbEGoV",
                    "descripcion": "Mejora drásticamente la visibilidad bajo el agua reduciendo la niebla acuática y aumentando el brillo en entornos subacuáticos, facilitando la exploración oceánica y de biomas acuáticos.",
                    "version": "0.1.0-alpha",
                    "autor": "SrRapero720",
                    "jar": "watervision-FG-mc1.20.1-v0.1.0-alpha.jar"
                },
                {
                    "nombre": "WITS (What Is This Structure?)",
                    "url": "https://www.curseforge.com/projects/909375",
                    "descripcion": "Muestra en pantalla el nombre de la estructura generada en la que se encuentra el jugador al entrar en ella, eliminando la necesidad de comandos o mapas para identificarla.",
                    "version": "1.1.0+1.20.1-forge",
                    "autor": "TelepathicGrunt",
                    "jar": "wits-1.1.0+1.20.1-forge.jar"
                },
                {
                    "nombre": "Zipline",
                    "url": "https://modrinth.com/mod/C1MoWQlb",
                    "descripcion": "Añade ganchos y cuerdas crafteables para construir tirolesas funcionales, permitiendo deslizarse a alta velocidad a través de grandes distancias de forma dinámica y eficiente.",
                    "version": "1.2.2",
                    "autor": "Evan, Tomate0613",
                    "jar": "zipline-forge-1.20.1-1.2.2.jar"
                }
            ]
        },
        "rendering": {
        "titulo": "🎨 UI, Animaciones, Personalización y Detalles",
        "mods": [
            {
                "nombre": "3d-Skin-Layers",
                "url": "https://modrinth.com/mod/zV5r3pPn",
                "descripcion": "Renderiza la segunda capa de la skin (overlay) en 3D para una apariencia más realista del personaje.",
                "version": "1.11.1",
                "autor": "tr7zw",
                "jar": "skinlayers3d-forge-1.11.1-mc1.20.1.jar"
            },
            {
                "nombre": "A Good Place",
                "url": "https://modrinth.com/mod/BwPeriwJ",
                "descripcion": "Añade nuevas decoraciones, criptas y detalles ambientales para personalizar y embellecer el entorno del jugador.",
                "version": "1.20-1.2.8",
                "autor": "MehVahdJukaar, Enjarai",
                "jar": "a_good_place-1.20-1.2.8.jar"
            },
            {
                "nombre": "Advancement Plaques",
                "url": "https://modrinth.com/mod/9NM0dXub",
                "descripcion": "Reemplaza las notificaciones de logros por placas elegantes y personalizables en una esquina de la pantalla.",
                "version": "1.6.9",
                "autor": "Grend",
                "jar": "AdvancementPlaques-1.20.1-forge-1.6.9.jar"
            },
            {
                "nombre": "Better Advancements",
                "url": "https://modrinth.com/mod/Q2OqKxDG",
                "descripcion": "Rediseña por completo la interfaz del árbol de logros, haciéndola más clara, ordenada y fácil de navegar.",
                "version": "0.4.2.60",
                "autor": "way2muchnoise",
                "jar": "BetterAdvancements-Forge-1.20.1-0.4.2.60.jar"
            },
            {
                "nombre": "Better Quest Pop-up",
                "url": "https://modrinth.com/mod/8dr3Xg1i",
                "descripcion": "Mejora visualmente las notificaciones emergentes de misiones de FTB Quests con un diseño más limpio.",
                "version": "1.0.1",
                "autor": "Katatsumuri.pan",
                "jar": "BetterQuestPopup-1.20.1(forge)-1.0.1.jar"
            },
            {
                "nombre": "Cave Dust",
                "url": "https://modrinth.com/mod/jawg7zT1",
                "descripcion": "Añade partículas de polvo y motas de luz flotante en cuevas y zonas oscuras para mayor inmersión.",
                "version": "2.0.4",
                "autor": "LizIsTired",
                "jar": "cavedust-2.0.4-1.20.1-forge.jar"
            },
            {
                "nombre": "Chat Impressive Animation",
                "url": "https://modrinth.com/mod/DnL1AGAI",
                "descripcion": "Anima la aparición y desaparición de los mensajes del chat con efectos suaves y modernos.",
                "version": "1.6.0+mc1.20.4",
                "autor": "Wulian233, TexTrue",
                "jar": "ChatImpressiveAnimation-forge-1.6.0+mc1.20.4.jar"
            },
            {
                "nombre": "Chat Heads",
                "url": "https://modrinth.com/mod/Wb5oqrBJ",
                "descripcion": "Muestra la cabeza del jugador o entidad que envía cada mensaje junto al chat, al estilo de apps de mensajería.",
                "version": "0.15.2",
                "autor": "dzwdz, Fourmisain",
                "jar": "chat_heads-0.15.2-forge-1.20.jar"
            },
            {
                "nombre": "Continuity",
                "url": "https://modrinth.com/mod/1IjD5062",
                "descripcion": "Habilita texturas conectadas para bloques como vidrio, arena y nieve, mejorando la coherencia visual de resource packs.",
                "version": "3.0.0+1.20.1.forge",
                "autor": "PepperCode1",
                "jar": "continuity-3.0.0+1.20.1.forge.jar"
            },
            {
                "nombre": "CosmeticArmorReworked",
                "url": "https://www.curseforge.com/projects/237307",
                "descripcion": "Añade ranuras de armadura cosmética independientes de las estadísticas reales del equipo.",
                "version": "1.20.1-v1a",
                "autor": "zlainsama",
                "jar": "cosmeticarmorreworked-1.20.1-v1a.jar"
            },
            {
                "nombre": "EEEAB's Mobs: Bossbars",
                "url": "https://modrinth.com/mod/SAaf5yvD",
                "descripcion": "Agrega barras de jefe personalizadas para los mobs del addon EEEAB's Mobs.",
                "version": "1.0.1",
                "autor": "Don't Smart",
                "jar": "eeeabsmobs_bossbars-1.0.1-forge-1.20.1.jar"
            },
            {
                "nombre": "Eating Animation",
                "url": "https://modrinth.com/mod/X8CISwXp",
                "descripcion": "Sustituye la animación vanilla de comer por una más fluida y realista en primera y tercera persona.",
                "version": "5.1.0",
                "autor": "Matyrobbrt",
                "jar": "eatinganimation-1.20.1-5.1.0.jar"
            },
            {
                "nombre": "Enhanced Boss Bars",
                "url": "https://modrinth.com/mod/J5bVsBt9",
                "descripcion": "Mejora el diseño y la información mostrada en las barras de salud de los jefes.",
                "version": "1.20.1-1.0.0",
                "autor": "Nakuring",
                "jar": "enhanced_boss_bars-1.20.1-1.0.0.jar"
            },
            {
                "nombre": "Euphoria Patcher",
                "url": "https://modrinth.com/mod/4H6sumDB",
                "descripcion": "Conjunto de parches de shaders que adapta perfiles como Complementary o BSL para un mejor rendimiento y compatibilidad con Forge.",
                "version": "1.9.3-r5.8.1-forge",
                "autor": "SpacEagle17",
                "jar": "EuphoriaPatcher-1.9.3-r5.8.1-forge.jar"
            },
            {
                "nombre": "Explosive Enhancement",
                "url": "https://modrinth.com/mod/r0camchr",
                "descripcion": "Añade efectos visuales y de partículas mejorados a las explosiones del juego.",
                "version": "1.1.0",
                "autor": "Xylonity",
                "jar": "explosiveenhancement-forge-1.20.1-1.1.0-client.jar"
            },
            {
                "nombre": "Fallingleaves",
                "url": "https://modrinth.com/mod/2JAUNCL4",
                "descripcion": "Genera hojas que caen de los árboles de forma animada, añadiendo ambientación otoñal al paisaje.",
                "version": "2.1.2",
                "autor": "Cheaterpaul, Fourmisain, BrekiTomasson and RandomMcSomethin",
                "jar": "fallingleaves-1.20.1-2.1.2.jar"
            },
            {
                "nombre": "FancyMenu",
                "url": "https://modrinth.com/mod/Wq5SjeWM",
                "descripcion": "Permite personalizar por completo los menús del juego (título, pausa, etc.) con imágenes, animaciones y botones propios.",
                "version": "3.9.3",
                "autor": "Keksuccino",
                "jar": "fancymenu_forge_3.9.3_MC_1.20.1.jar"
            },
            {
                "nombre": "HoldMyItems - Reforged",
                "url": "https://modrinth.com/mod/VPPMiyrF",
                "descripcion": "Muestra visualmente los objetos que el jugador sostiene en las manos, la espalda o el cinturón.",
                "version": "2.0",
                "autor": "bene2212 (forge port), thesapling (original author), ",
                "jar": "holdmyitems-1.20.1-4v2.0.jar"
            },
            {
                "nombre": "Hourglass",
                "url": "https://www.curseforge.com/projects/511172",
                "descripcion": "Suaviza la transición entre el día y la noche, y permite votar para acelerar el sueño en multijugador.",
                "version": "1.2.1.1",
                "autor": "DuckyCrayfish",
                "jar": "hourglass-1.20-1.2.1.1.jar"
            },
            {
                "nombre": "ImmersiveUI",
                "url": "https://modrinth.com/mod/9wv7LuMc",
                "descripcion": "Rediseña elementos de la interfaz vanilla con un estilo más inmersivo y cohesivo.",
                "version": "0.3.0",
                "autor": "OctoStudios",
                "jar": "ImmersiveUI-FORGE-0.3.0.jar"
            },
            {
                "nombre": "Item Borders",
                "url": "https://modrinth.com/mod/b1fMg6sH",
                "descripcion": "Añade bordes de color a los íconos de objetos en el inventario según su rareza o categoría.",
                "version": "1.2.2",
                "autor": "Grend",
                "jar": "ItemBorders-1.20.1-forge-1.2.2.jar"
            },
            {
                "nombre": "JeremySeq's Damage Indicator",
                "url": "https://www.curseforge.com/projects/881096",
                "descripcion": "Muestra números de daño flotantes sobre las entidades al recibir golpes.",
                "version": "2.2.1-1.20.1",
                "autor": "JeremySeq",
                "jar": "damageindicator-2.2.1-1.20.1.jar"
            },
            {
                "nombre": "JeremySeq's Trajectory Indicator",
                "url": "https://www.curseforge.com/projects/1209837",
                "descripcion": "Dibuja la trayectoria estimada de proyectiles como flechas y bolas de fuego antes de lanzarlos.",
                "version": "1.0.0-1.20.1",
                "autor": "JeremySeq",
                "jar": "trajectory_indicator-1.0.0-1.20.1.jar"
            },
            {
                "nombre": "JoJo's Bizzare Adventure Cosplay",
                "url": "https://modrinth.com/mod/NE0IWuJA",
                "descripcion": "Añade trajes y skins inspirados en personajes del anime JoJo's Bizarre Adventure.",
                "version": "1.20.1-1.0.0",
                "autor": "JCraft EoE Team",
                "jar": "jjbacosplay-forge-1.20.1-1.0.0.jar"
            },
            {
                "nombre": "Leaves Be Gone",
                "url": "https://modrinth.com/mod/AVq17PqV",
                "descripcion": "Modifica la forma en que se eliminan las hojas al talar árboles, mejorando el rendimiento y la estética.",
                "version": "8.0.0",
                "autor": "Fuzs",
                "jar": "LeavesBeGone-v8.0.0-1.20.1-Forge.jar"
            },
            {
                "nombre": "LootBeams",
                "url": "https://modrinth.com/mod/QWTmZu53",
                "descripcion": "Añade un haz de luz vertical sobre los objetos en el suelo para que sean más visibles a distancia.",
                "version": "1.20.1",
                "autor": "shiroroku(elise)",
                "jar": "lootbeams-1.20.1-1.2.2.jar"
            },
            {
                "nombre": "Loot Journal",
                "url": "https://modrinth.com/mod/OJ6ZYz5L",
                "descripcion": "Lleva un registro detallado del botín obtenido de cofres, mobs y estructuras en un libro consultable con estadísticas.",
                "version": "6.2.1",
                "autor": "Obscuria",
                "jar": "loot_journal-forge-1.20.1-6.2.1.jar"
            },
            {
                "nombre": "Wardrobe",
                "url": "https://www.curseforge.com/projects/968067",
                "descripcion": "Añade un armario funcional donde guardar y cambiar rápidamente entre atuendos y skins cosméticas.",
                "version": "1.0.3.1",
                "autor": "LuckyOwl, MCreator",
                "jar": "wardrobe-1.0.3.1-forge-1.20.1.jar"
            },
            {
                "nombre": "Make Bubbles Pop",
                "url": "https://modrinth.com/mod/gPCdW0Wr",
                "descripcion": "Hace que las burbujas de agua estallen con un efecto visual al llegar a la superficie en lugar de desaparecer silenciosamente.",
                "version": "${file.jarVersion}-forge",
                "autor": "Tschipcraft",
                "jar": "make_bubbles_pop-0.3.0-forge-mc1.19.4-1.20.4.jar"
            },
            {
                "nombre": "NotEnoughAnimations",
                "url": "https://modrinth.com/mod/MPCX6s5C",
                "descripcion": "Añade animaciones adicionales al personaje en primera y tercera persona, como sentarse, gatear o tumbarse.",
                "version": "1.12.3",
                "autor": "tr7zw",
                "jar": "notenoughanimations-forge-1.12.3-mc1.20.1.jar"
            },
            {
                "nombre": "Notable Bubble Text",
                "url": "https://modrinth.com/mod/KVBd6Odb",
                "descripcion": "Reemplaza el texto de chat sobre la cabeza de los jugadores por burbujas de diálogo estilizadas.",
                "version": "1.0.5",
                "autor": "Mrbysco, ShyNieke",
                "jar": "NotableBubbleText-1.20.1-1.0.5.jar"
            },
            {
                "nombre": "Obscure Tooltips",
                "url": "https://modrinth.com/mod/5vetjDBY",
                "descripcion": "Mejora y enriquece los tooltips de los objetos con información adicional y un diseño más detallado.",
                "version": "3.10.0",
                "autor": "Obscuria",
                "jar": "obscure_tooltips-forge-1.20.1-3.10.0.jar"
            },
            {
                "nombre": "Obscure Tooltips Fix",
                "url": "https://www.curseforge.com/projects/1103943",
                "descripcion": "Corrige errores de compatibilidad y renderizado del mod Obscure Tooltips.",
                "version": "1.3.0",
                "autor": "Cadentem",
                "jar": "obscure_tooltips_fix-1.20.1-1.3.0-all.jar"
            },
            {
                "nombre": "Overflowing Bars",
                "url": "https://modrinth.com/mod/XD7XOrAF",
                "descripcion": "Permite que las barras de vida y absorción del jugador se desborden visualmente al superar el máximo vanilla.",
                "version": "8.0.1",
                "autor": "Fuzs",
                "jar": "OverflowingBars-v8.0.1-1.20.1-Forge.jar"
            },
            {
                "nombre": "Perception",
                "url": "https://modrinth.com/mod/P8STLvzB",
                "descripcion": "Añade indicadores visuales sutiles que resaltan elementos cercanos relevantes en el entorno del jugador.",
                "version": "0.1.4",
                "autor": "OctoStudios",
                "jar": "Perception-FORGE-0.1.4+1.20.1.jar"
            },
            {
                "nombre": "Presence Footsteps [FORGE]",
                "url": "https://modrinth.com/mod/dLfueQtY",
                "descripcion": "Genera sonidos de pisadas dinámicos y realistas según el material del suelo y el tipo de entidad.",
                "version": "1.0.0",
                "autor": "Hurricaaane (Ha3), Sollace, 1Influence",
                "jar": "Presence Footsteps [FORGE] 1.0.0.jar"
            },
            {
                "nombre": "ReBlured",
                "url": "https://www.curseforge.com/projects/637729",
                "descripcion": "Añade un efecto de desenfoque (blur) al menú de pausa y otras pantallas de interfaz.",
                "version": "1.20.1-1.3.0",
                "autor": "Cheaterpaul",
                "jar": "Reblured-1.20.1-1.3.0.jar"
            },
            {
                "nombre": "Shoulder Surfing Reloaded",
                "url": "https://modrinth.com/mod/kepjj2sy",
                "descripcion": "Implementa una cámara en tercera persona por encima del hombro, totalmente configurable.",
                "version": "1.20.1-4.22.12",
                "autor": "Exopandora",
                "jar": "ShoulderSurfing-Forge-1.20.1-4.22.12.jar"
            },
            {
                "nombre": "Streamotes",
                "url": "https://github.com/XspeedPL/Streamotes",
                "descripcion": "Permite que los espectadores de un stream interactúen enviando emotes que aparecen como animaciones sobre el personaje.",
                "version": "1.2.14+1.20.1",
                "autor": "Xspeed",
                "jar": "streamotes-1.2.14+1.20.1.jar"
            },
            {
                "nombre": "Subtle Effects",
                "url": "https://modrinth.com/mod/4q8UOK1d",
                "descripcion": "Añade pequeños efectos visuales ambientales, como partículas de viento o salpicaduras, sin saturar la pantalla.",
                "version": "1.14.3",
                "autor": "MincraftEinstein",
                "jar": "SubtleEffects-forge-1.20.1-1.14.3.jar"
            },
            {
                "nombre": "Traveler's Titles",
                "url": "https://modrinth.com/mod/JtifUr64",
                "descripcion": "Muestra un título emergente con el nombre del bioma al entrar en una nueva zona.",
                "version": "1.20-Forge-4.0.2",
                "autor": "YUNGNICKYOUNG",
                "jar": "TravelersTitles-1.20-Forge-4.0.2.jar"
            },
            {
                "nombre": "Wakes",
                "url": "https://modrinth.com/mod/E0SdeAoH",
                "descripcion": "Genera estelas y ondas visuales en el agua al moverse barcos y entidades sobre su superficie.",
                "version": "1.3.5",
                "autor": "Leclowndu93150",
                "jar": "wakes-1.20.1-Forge-1.3.5.jar"
            },
            {
                "nombre": "Xaero's Minimap",
                "url": "https://modrinth.com/mod/1bokaNcj",
                "descripcion": "Añade un minimapa configurable en la esquina de la pantalla con marcadores de waypoints y entidades.",
                "version": "26.1.0",
                "autor": "xaero96",
                "jar": "xaerominimap-forge-1.20.1-26.1.0.jar"
            },
            {
                "nombre": "Xaero's World Map",
                "url": "https://modrinth.com/mod/NcUtCpym",
                "descripcion": "Complementa el minimapa con un mapa del mundo completo a pantalla, navegable y con múltiples capas de información.",
                "version": "1.41.0",
                "autor": "xaero96",
                "jar": "xaeroworldmap-forge-1.20.1-1.41.0.jar"
            },
            {
                "nombre": "YDM's Mob Health Bar",
                "url": "https://modrinth.com/mod/wtk2r10e",
                "descripcion": "Muestra una barra de vida flotante sobre los mobs al recibir daño.",
                "version": "2.3.0",
                "autor": "YourDailyModder",
                "jar": "mobhealthbar-forge-1.20.x-2.3.0.jar"
            },
            {
                "nombre": "YDM's Weapon Master",
                "url": "https://modrinth.com/mod/qi1sj2da",
                "descripcion": "Añade efectos visuales e indicadores especiales asociados a distintos tipos de arma al golpear.",
                "version": "4.2.3",
                "autor": "YourDailyModder",
                "jar": "weaponmaster_ydm-forge-1.20.1-4.2.3.jar"
            }
        ]
        },
        "core": {
        "titulo": "🧩 Librerías, APIs Base y Parches de Compatibilidad",
        "mods": [
            {
                "nombre": "Architectury",
                "url": "https://www.curseforge.com/projects/419699",
                "descripcion": "API multiplataforma que permite a los desarrolladores compartir código común entre Forge, Fabric y NeoForge, reduciendo el trabajo de mantener varias versiones de un mismo mod.",
                "version": "9.2.14",
                "autor": "shedaniel",
                "jar": "architectury-9.2.14-forge.jar"
            },
            {
                "nombre": "AzureLib",
                "url": "https://modrinth.com/mod/7zlUOZvb",
                "descripcion": "Librería de animación 3D avanzada para entidades, bloques e items, sucesora de GeckoLib con mejoras de rendimiento y nuevas herramientas de animación.",
                "version": "3.1.10",
                "autor": "AzureDoom, Bvanseg, DerToaster, ZigyTheBird, Gecko, Eliot, Chappie, Tslat",
                "jar": "azurelib-neo-1.20.1-3.1.10.jar"
            },
            {
                "nombre": "Balm",
                "url": "https://www.curseforge.com/projects/531761",
                "descripcion": "Capa de abstracción que facilita escribir mods compatibles tanto con Forge como con Fabric/NeoForge a partir de una sola base de código.",
                "version": "7.3.38",
                "autor": "BlayTheNinth",
                "jar": "balm-forge-1.20.1-7.3.38-all.jar"
            },
            {
                "nombre": "BornInConfiguration",
                "url": "https://modrinth.com/mod/8rGW0cNk",
                "descripcion": "Librería de utilidades para el registro de contenido y la gestión de archivos de configuración usada como dependencia por otros mods.",
                "version": "3.2.1",
                "autor": "The Crimson",
                "jar": "borninconfiguration-3.2.1[FORGE].jar"
            },
            {
                "nombre": "Bookshelf",
                "url": "https://modrinth.com/mod/uy4Cnpcm",
                "descripcion": "Librería de utilidades compartidas de Darkhax con herramientas comunes de registro, eventos y networking usadas por numerosos mods.",
                "version": "20.2.15",
                "autor": "Darkhax",
                "jar": "Bookshelf-Forge-1.20.1-20.2.15.jar"
            },
            {
                "nombre": "Botarium",
                "url": "https://modrinth.com/mod/2u6LRnMa",
                "descripcion": "Librería multiplataforma que ofrece compatibilidad de fluidos y energía entre Forge y Fabric para mods de tecnología.",
                "version": "2.3.4",
                "autor": "CodexAdrian",
                "jar": "botarium-forge-1.20.1-2.3.4.jar"
            },
            {
                "nombre": "Caelus API",
                "url": "https://modrinth.com/mod/40FYwb4z",
                "descripcion": "API que gestiona el vuelo con elytra y otros sistemas de vuelo personalizados para que distintos mods puedan interactuar entre sí.",
                "version": "3.2.0+1.20.1",
                "autor": "C4",
                "jar": "caelus-forge-3.2.0+1.20.1.jar"
            },
            {
                "nombre": "Cataclysm & BetterCombat - Compatibility",
                "url": "https://modrinth.com/mod/53TJSd8P",
                "descripcion": "Parche de compatibilidad que ajusta el combate de los jefes de Cataclysm cuando se usa junto al mod BetterCombat.",
                "version": "1.20.1-1.0.2",
                "autor": "Desconocido",
                "jar": "cataclysm_compat_1.20.1-1.0.2.jar"
            },
            {
                "nombre": "Cerbons API",
                "url": "https://modrinth.com/mod/GkIc6rRo",
                "descripcion": "Librería base que centraliza utilidades de registro y funciones comunes usadas por los mods del autor CerbonXD.",
                "version": "1.1.0",
                "autor": "CerbonXD",
                "jar": "CerbonsAPI-Forge-1.20.1-1.1.0.jar"
            },
            {
                "nombre": "Citadel",
                "url": "https://modrinth.com/mod/jJfV67b1",
                "descripcion": "Librería de modelos y animaciones avanzadas para entidades, usada como base por mods como Alex's Mobs.",
                "version": "2.6.3",
                "autor": "Alexthe666",
                "jar": "citadel-2.6.3-1.20.1.jar"
            },
            {
                "nombre": "Cloth Config v10 API",
                "url": "https://www.curseforge.com/projects/348521",
                "descripcion": "Librería que genera pantallas de configuración dentro del juego para mods que la utilizan como dependencia.",
                "version": "11.1.136",
                "autor": "shedaniel",
                "jar": "cloth-config-11.1.136-forge.jar"
            },
            {
                "nombre": "Collective",
                "url": "https://modrinth.com/mod/e0M1UDsY",
                "descripcion": "Librería de utilidades compartidas de Serilum con funciones comunes reutilizadas por varios de sus mods.",
                "version": "8.25",
                "autor": "Rick South",
                "jar": "collective-1.20.1-8.25.jar"
            },
            {
                "nombre": "Compass to Map: Xaero's Minimap & Explorer's Compass & Nature's Compass Addon",
                "url": "https://modrinth.com/mod/V7BPfphg",
                "descripcion": "Adición que integra los puntos de interés detectados por Explorer's Compass y Nature's Compass directamente en el minimapa de Xaero.",
                "version": "0.1.1",
                "autor": "KURONAMI",
                "jar": "compasstomapxaeros-0.1.1.jar"
            },
            {
                "nombre": "Configured",
                "url": "https://www.curseforge.com/projects/457570",
                "descripcion": "Genera pantallas de configuración dentro del juego para mods que únicamente usan archivos de configuración de Forge, sin interfaz propia.",
                "version": "2.2.3",
                "autor": "MrCrayfish",
                "jar": "configured-forge-1.20.1-2.2.3.jar"
            },
            {
                "nombre": "Controlling",
                "url": "https://modrinth.com/mod/xv94TkTM",
                "descripcion": "Mejora la pantalla de configuración de controles, permitiendo buscar atajos y detectar conflictos entre teclas.",
                "version": "12.0.2",
                "autor": "Jaredlll08",
                "jar": "Controlling-forge-1.20.1-12.0.2.jar"
            },
            {
                "nombre": "CorgiLib",
                "url": "https://modrinth.com/mod/ziOp6EO8",
                "descripcion": "Librería de utilidades compartida del autor Corgi Taco usada como base por varios de sus mods.",
                "version": "4.0.3.4",
                "autor": "Corgi Taco",
                "jar": "Corgilib-Forge-1.20.1-4.0.3.4.jar"
            },
            {
                "nombre": "CoroUtil",
                "url": "https://modrinth.com/mod/rLLJ1OZM",
                "descripcion": "Librería de utilidades generales que provee funciones comunes de animación e inteligencia artificial reutilizadas por otros mods.",
                "version": "1.20.1-1.3.7",
                "autor": "Corosus",
                "jar": "coroutil-forge-1.20.1-1.3.7.jar"
            },
            {
                "nombre": "CreativeCore",
                "url": "https://modrinth.com/mod/OsZiaDHq",
                "descripcion": "Librería base requerida por los mods de CreativeMD, como AmbientSounds y Decorative Blocks.",
                "version": "2.12.38",
                "autor": "CreativeMD",
                "jar": "CreativeCore_FORGE_v2.12.38_mc1.20.1.jar"
            },
            {
                "nombre": "Cristel Lib",
                "url": "https://modrinth.com/mod/cl223EMc",
                "descripcion": "Librería de utilidades del autor Cristelknight usada como dependencia por los mods de la serie Let's Do.",
                "version": "1.1.6",
                "autor": "Cristelknight999",
                "jar": "cristellib-1.1.6-forge.jar"
            },
            {
                "nombre": "Cucumber Library",
                "url": "https://modrinth.com/mod/Rw1NrDzF",
                "descripcion": "Librería de utilidades de BlakeBr0 usada como base por mods como Mystical Agriculture y Mining Gadgets.",
                "version": "7.0.16",
                "autor": "BlakeBr0",
                "jar": "Cucumber-1.20.1-7.0.16.jar"
            },
            {
                "nombre": "Cupboard utilities",
                "url": "https://www.curseforge.com/projects/326652",
                "descripcion": "Librería de utilidades compartidas que ofrece herramientas comunes de desarrollo reutilizadas por otros mods.",
                "version": "1.20.1-3.7",
                "autor": "Someaddon",
                "jar": "cupboard-1.20.1-3.7.jar"
            },
            {
                "nombre": "Curios API",
                "url": "https://www.curseforge.com/projects/309927",
                "descripcion": "API que añade ranuras de inventario adicionales para que los jugadores equipen accesorios definidos por otros mods.",
                "version": "5.14.1+1.20.1",
                "autor": "C4",
                "jar": "curios-forge-5.14.1+1.20.1.jar"
            },
            {
                "nombre": "Delight Lib",
                "url": "https://modrinth.com/mod/rmDY6fYt",
                "descripcion": "Librería de utilidades compartida usada por los mods de cocina y decoración de la serie Delight.",
                "version": "26.05.18-1.20-forge",
                "autor": "Axperty",
                "jar": "delightlib-26.05.18-1.20-forge.jar"
            },
            {
                "nombre": "DreamCasLib",
                "url": "https://www.curseforge.com/projects/1323703",
                "descripcion": "Librería de soporte usada por mods creados con MCreator que requieren funciones adicionales de modelos y animaciones.",
                "version": "1.0.0",
                "autor": "ROG, MCreator",
                "jar": "DreamCasLib 1.0.1 - 1.20.1.jar"
            },
            {
                "nombre": "DucLib",
                "url": "https://www.curseforge.com/projects/823186",
                "descripcion": "Librería de utilidades compartida requerida como dependencia por los mods del autor Itskillerluc.",
                "version": "1.1.4",
                "autor": "Itskillerluc",
                "jar": "duclib-1.20-1.1.4.jar"
            },
            {
                "nombre": "Dynamic Trees for Biomes o' Plenty",
                "url": "https://modrinth.com/mod/8QHjGuhP",
                "descripcion": "Extensión que añade soporte de árboles dinámicos y con crecimiento realista a los árboles del mod Biomes O' Plenty.",
                "version": "1.20.1-3.3.4",
                "autor": "mangoose, Max Hyper",
                "jar": "DynamicTreesBOP-1.20.1-3.3.4.jar"
            },
            {
                "nombre": "Dynamic Trees for BWG",
                "url": "https://modrinth.com/mod/z5yJOJnS",
                "descripcion": "Extensión que añade soporte de árboles dinámicos a los árboles del mod Biomes We've Gone (BWG).",
                "version": "1.20.1-1.0.9",
                "autor": "Max Hyper",
                "jar": "Dynamic Trees BWG-1.20.1-1.0.9.jar"
            },
            {
                "nombre": "Dynamic Trees for Ecologics",
                "url": "https://modrinth.com/mod/2H9XSQjq",
                "descripcion": "Extensión que añade soporte de árboles dinámicos a los árboles del mod Ecologics.",
                "version": "1.20.1-1.1.0",
                "autor": "Max Hyper",
                "jar": "DynamicTreesEcologics-1.20.1-1.1.0.jar"
            },
            {
                "nombre": "Dynamic Trees for Quark",
                "url": "https://modrinth.com/mod/9paueCZy",
                "descripcion": "Extensión que añade soporte de árboles dinámicos a los árboles añadidos por Quark.",
                "version": "1.20.1-2.5.3",
                "autor": "Max Hyper",
                "jar": "DynamicTreesQuark-1.20.1-2.5.3.jar"
            },
            {
                "nombre": "Dynamic Trees for Regions Unexplored",
                "url": "https://modrinth.com/mod/IOcN8dvy",
                "descripcion": "Extensión que añade soporte de árboles dinámicos a los árboles del mod Regions Unexplored.",
                "version": "1.20.1-1.0.1",
                "autor": "Max Hyper",
                "jar": "DynamicTreesRU-1.20.1-1.0.1.jar"
            },
            {
                "nombre": "Dynamic Trees for Terralith",
                "url": "https://modrinth.com/mod/o8eM9Cnp",
                "descripcion": "Extensión que añade soporte de árboles dinámicos a los árboles del mod Terralith.",
                "version": "1.20.1-1.2.6",
                "autor": "DJS, Max Hyper",
                "jar": "DynamicTreesTerralith-1.20.1-1.2.6.jar"
            },
            {
                "nombre": "EC Samurai Dynasty Plugin",
                "url": "https://modrinth.com/mod/RNAo6Pei",
                "descripcion": "Complemento que añade contenido y compatibilidad de la temática Samurai Dynasty al sistema de combate del modpack.",
                "version": "1.1.5",
                "autor": "Userofbricks",
                "jar": "ec_es_plugin-1.20.1-1.1.5-all.jar"
            },
            {
                "nombre": "Elysium",
                "url": "https://www.curseforge.com/projects/1158628",
                "descripcion": "Librería base requerida por los mods de contenido del paquete Elysium.",
                "version": "1.1.3",
                "autor": "ThatJadenXgamer",
                "jar": "ElysiumAPI-1.20.1-1.1.3.jar"
            },
            {
                "nombre": "emi-letsdo-compat",
                "url": "https://modrinth.com/mod/k6hi4lMv",
                "descripcion": "Parche de compatibilidad que integra las recetas de los mods de la serie Let's Do en el visor de recetas EMI.",
                "version": "1.8.1",
                "autor": "Desconocido",
                "jar": "1.8.1+1.20.1+forge.jar"
            },
            {
                "nombre": "Entity Model Features",
                "url": "https://www.curseforge.com/projects/844662",
                "descripcion": "Permite que los paquetes de recursos personalicen y sustituyan los modelos 3D de las entidades del juego.",
                "version": "3.2.4",
                "autor": "Traben",
                "jar": "entity_model_features-3.2.4-1.20.1-forge.jar"
            },
            {
                "nombre": "Entity Sound Features",
                "url": "https://modrinth.com/mod/IMuO8COj",
                "descripcion": "Permite que los paquetes de recursos personalicen los sonidos emitidos por las entidades del juego.",
                "version": "0.8.1",
                "autor": "Traben",
                "jar": "entity_sound_features-0.8.1-1.20.1-forge.jar"
            },
            {
                "nombre": "Entity Texture Features",
                "url": "https://www.curseforge.com/projects/568563",
                "descripcion": "Permite que los paquetes de recursos aplique texturas aleatorias, emisivas y personalizadas a las entidades del juego.",
                "version": "7.1",
                "autor": "Traben",
                "jar": "entity_texture_features_1.20.1-forge-7.1.jar"
            },
            {
                "nombre": "ExtraLib",
                "url": "https://www.curseforge.com/projects/1083780",
                "descripcion": "Librería de utilidades compartida que provee funciones comunes reutilizadas por otros mods del autor Vecoo.",
                "version": "3.0.6",
                "autor": "Vecoo",
                "jar": "ExtraLib-3.0.6-1.20.1-Forge.jar"
            },
            {
                "nombre": "Forgified Fabric API",
                "url": "https://www.curseforge.com/projects/889079",
                "descripcion": "Adaptación de la API de Fabric que permite ejecutar mods de Fabric bajo Forge, facilitando la compatibilidad cruzada entre cargadores.",
                "version": "0.92.6+1.11.14+1.20.1",
                "autor": "FabricMC, Sinytra",
                "jar": "fabric-api-0.92.6+1.11.14+1.20.1.jar"
            },
            {
                "nombre": "Fragmentum",
                "url": "https://modrinth.com/mod/49C5QgTK",
                "descripcion": "Librería base de utilidades usada como dependencia por otros mods que requieren herramientas comunes de desarrollo.",
                "version": "1.3.0",
                "autor": "Obscuria",
                "jar": "fragmentum-forge-1.20.1-1.3.0.jar"
            },
            {
                "nombre": "Framework",
                "url": "https://www.curseforge.com/projects/549225",
                "descripcion": "Librería base de utilidades de MrCrayfish que centraliza funciones comunes reutilizadas por sus otros mods.",
                "version": "0.8.0",
                "autor": "MrCrayfish",
                "jar": "framework-forge-1.20.1-0.8.0.jar"
            },
            {
                "nombre": "Fusion",
                "url": "https://modrinth.com/mod/p19vrgc2",
                "descripcion": "Librería de optimización y compatibilidad de SuperMartijn642 usada como dependencia por otros mods.",
                "version": "1.2.12",
                "autor": "SuperMartijn642",
                "jar": "fusion-1.2.12-forge-mc1.20.1.jar"
            },
            {
                "nombre": "Fzzy Config",
                "url": "https://www.curseforge.com/projects/1005914",
                "descripcion": "Librería que ofrece un sistema de configuración en el juego con sincronización automática entre cliente y servidor.",
                "version": "0.7.6+1.20.1+forge",
                "autor": "fzzyhmstrs",
                "jar": "fzzy_config-0.7.6+1.20.1+forge.jar"
            },
            {
                "nombre": "GeckoLib 4",
                "url": "https://modrinth.com/mod/8BmcQJ2H",
                "descripcion": "Librería de animaciones avanzadas en 3D para entidades, bloques e items, ampliamente usada por mods de criaturas.",
                "version": "4.8.3",
                "autor": "Gecko, Eliot, AzureDoom, DerToaster, Tslat, Witixin",
                "jar": "geckolib-forge-1.20.1-4.8.3.jar"
            },
            {
                "nombre": "GlitchCore",
                "url": "https://modrinth.com/mod/s3dmwKy5",
                "descripcion": "Librería base requerida por mods que añaden efectos visuales tipo \"glitch\" o distorsión.",
                "version": "0.0.1.1",
                "autor": "Adubbz",
                "jar": "GlitchCore-forge-1.20.1-0.0.1.1.jar"
            },
            {
                "nombre": "GroovyModLoader (GML)",
                "url": "https://modrinth.com/mod/zg2tT2Vu",
                "descripcion": "Permite escribir scripts en lenguaje Groovy para modificar recetas y comportamientos del juego sin necesidad de programar un mod completo.",
                "version": "s7gFqeVL",
                "autor": "Desconocido",
                "jar": "gml-4.0.10-all.jar"
            },
            {
                "nombre": "GTBC's SpellLib",
                "url": "https://www.curseforge.com/projects/1194714",
                "descripcion": "Librería de utilidades para sistemas de hechizos, usada como base por mods de combate y magia.",
                "version": "1.5.0-1.20.1",
                "autor": "GameTechBC",
                "jar": "gtbcs_spell_lib-1.5.0-1.20.1.jar"
            },
            {
                "nombre": "Iceberg",
                "url": "https://modrinth.com/mod/5faXoLqX",
                "descripcion": "Librería de utilidades compartida usada como dependencia por mods como Cold Sweat.",
                "version": "1.1.25",
                "autor": "Grend",
                "jar": "Iceberg-1.20.1-forge-1.1.25.jar"
            },
            {
                "nombre": "Integrated API",
                "url": "https://modrinth.com/mod/V6fKbpBN",
                "descripcion": "Librería base requerida por los mods de la familia Integrated, como Integrated Dynamics.",
                "version": "1.7.2+1.20.1-forge",
                "autor": "CraisinLord",
                "jar": "integrated_api-1.7.2+1.20.1-forge.jar"
            },
            {
                "nombre": "Iron's Lib",
                "url": "https://www.curseforge.com/projects/1492763",
                "descripcion": "Librería de utilidades compartida usada como dependencia por los mods de armas de Iron431 (Iron's Spells 'n Spellbooks, Iron's Weapons).",
                "version": "1.20.1-1.1.0",
                "autor": "Iron431",
                "jar": "irons_lib-1.20.1-1.1.0.jar"
            },
            {
                "nombre": "Item Production Lib",
                "url": "https://www.curseforge.com/projects/950401",
                "descripcion": "Librería de utilidades centrada en sistemas de producción e items personalizados.",
                "version": "1.0.2a",
                "autor": "Daripher",
                "jar": "ItemProductionLib-1.20.1-1.0.2a-all.jar"
            },
            {
                "nombre": "JamLib",
                "url": "https://modrinth.com/mod/IYY9Siz8",
                "descripcion": "Librería de utilidades compartida usada como dependencia por los mods del autor Jamalam.",
                "version": "1.3.6+1.20.1-patch.1",
                "autor": "Jamalam",
                "jar": "jamlib-forge-1.3.6+1.20.1-patch.1.jar"
            },
            {
                "nombre": "Kambrik",
                "url": "https://modrinth.com/mod/zfbCkvdZ",
                "descripcion": "Librería de utilidades compartida que centraliza funciones comunes reutilizadas por otros mods.",
                "version": "6.1.1+1.20.1",
                "autor": "Me!",
                "jar": "Kambrik-6.1.1+1.20.1-forge.jar"
            },
            {
                "nombre": "Kiwi Library",
                "url": "https://modrinth.com/mod/ufdDoWPd",
                "descripcion": "Librería de utilidades de Snownee usada como dependencia por sus mods, como Towns and Towers.",
                "version": "11.10.2+forge",
                "autor": "Snownee",
                "jar": "Kiwi-1.20.1-Forge-11.10.2.jar"
            },
            {
                "nombre": "Konkrete",
                "url": "https://modrinth.com/mod/J81TRJWm",
                "descripcion": "Librería de utilidades compartida requerida por mods como Mowzie's Mobs y Cataclysm.",
                "version": "1.8.0",
                "autor": "Keksuccino",
                "jar": "konkrete_forge_1.8.0_MC_1.20-1.20.1.jar"
            },
            {
                "nombre": "Kotlin for Forge",
                "url": "https://www.curseforge.com/projects/351264",
                "descripcion": "Añade soporte para el lenguaje de programación Kotlin en mods que lo requieren como dependencia.",
                "version": "7291067",
                "autor": "Desconocido",
                "jar": "kotlinforforge-4.12.0-all.jar"
            },
            {
                "nombre": "[Let's Do] API",
                "url": "https://modrinth.com/mod/4XJZeZbM",
                "descripcion": "Librería base que centraliza las funciones comunes usadas por todos los mods de la serie Let's Do.",
                "version": "1.2.15",
                "autor": "Cristelknight, BaumeisterJO",
                "jar": "letsdo-API-forge-1.2.15-forge.jar"
            },
            {
                "nombre": "LibX",
                "url": "https://modrinth.com/mod/qEH6GYul",
                "descripcion": "Librería de utilidades compartida de ModdingX usada como dependencia por otros mods.",
                "version": "1.20.1-5.0.14",
                "autor": "ModdingX",
                "jar": "LibX-1.20.1-5.0.14.jar"
            },
            {
                "nombre": "Library ferret",
                "url": "https://modrinth.com/mod/DOB2l4oJ",
                "descripcion": "Librería de utilidades compartida requerida por los mods de JTorLeon Studios.",
                "version": "4.0.0",
                "autor": "JTorLeon Studios",
                "jar": "libraryferret-forge-1.20.1-4.0.0.jar"
            },
            {
                "nombre": "Library of Exile",
                "url": "https://modrinth.com/mod/p87a38Zl",
                "descripcion": "Librería de utilidades compartida usada por mods inspirados en la mecánica de Path of Exile.",
                "version": "2.1.3",
                "autor": "mcrobertx22",
                "jar": "Library_of_Exile-1.20.1-2.1.3.jar"
            },
            {
                "nombre": "LionfishAPI",
                "url": "https://modrinth.com/mod/FoVacERa",
                "descripcion": "Librería base requerida como dependencia por mods de contenido relacionados con el océano.",
                "version": "3.0",
                "autor": "Desconocido",
                "jar": "lionfishapi-3.0.jar"
            },
            {
                "nombre": "Luminous:Tag",
                "url": "https://modrinth.com/mod/uX4Rl6YL",
                "descripcion": "Añade etiquetas (tags) de compatibilidad utilizadas internamente por los mods de la serie Luminous.",
                "version": "1.1",
                "autor": "RipleysMods",
                "jar": "Luminous Tag V1.1 - Forge 1.20.1.jar"
            },
            {
                "nombre": "MaFgLib",
                "url": "https://modrinth.com/mod/SKI34J7B",
                "descripcion": "Librería de utilidades compartida usada como dependencia por los mods de TexTrue y ThinkingStudio.",
                "version": "0.1.14-mc1.20.1",
                "autor": "TexTrue, ThinkingStudio",
                "jar": "MaFgLib-0.1.14-mc1.20.1.jar"
            },
            {
                "nombre": "Majrusz Library",
                "url": "https://modrinth.com/mod/PYQD8noM",
                "descripcion": "Librería de utilidades compartida usada por los mods de Majrusz, como Majrusz's Difficulty.",
                "version": "7.0.8",
                "autor": "Majrusz",
                "jar": "majrusz-library-forge-1.20.1-7.0.8.jar"
            },
            {
                "nombre": "Mantle",
                "url": "https://modrinth.com/mod/Cg6Uc79H",
                "descripcion": "Librería de utilidades compartida de Slime Knights usada como base por mods como Tinkers' Construct.",
                "version": "1.11.104",
                "autor": "Slime Knights",
                "jar": "Mantle-1.20.1-1.11.104.jar"
            },
            {
                "nombre": "Melody",
                "url": "https://modrinth.com/mod/CVT4pFB2",
                "descripcion": "Librería de utilidades para la gestión de sonidos personalizados utilizada por otros mods.",
                "version": "1.0.2",
                "autor": "Keksuccino",
                "jar": "melody_forge_1.0.3_MC_1.20.1-1.20.4.jar"
            },
            {
                "nombre": "Moonlight Library",
                "url": "https://www.curseforge.com/projects/499980",
                "descripcion": "Librería de utilidades de MehVahdJukaar usada como dependencia por numerosos de sus mods.",
                "version": "1.20-2.16.33",
                "autor": "MehVahdJukaar",
                "jar": "moonlight-1.20-2.16.33-forge.jar"
            },
            {
                "nombre": "Moog's Structure Lib",
                "url": "https://modrinth.com/mod/1oUDhxuy",
                "descripcion": "Librería de utilidades dedicada a la generación de estructuras personalizadas en el mundo.",
                "version": "3.0.0",
                "autor": "FinnDog",
                "jar": "moogs_structures-1.20-1.20.4-alpha-3.0.0-forge.jar"
            },
            {
                "nombre": "Mowzie's Cataclysm",
                "url": "https://www.curseforge.com/projects/1128348",
                "descripcion": "Contenido y librería compartida entre los mods de Mowzie y el mod Cataclysm.",
                "version": "1.2.1",
                "autor": "cyber_rat",
                "jar": "mowzies_cataclysm-1.2.1.jar"
            },
            {
                "nombre": "Obscure API",
                "url": "https://modrinth.com/mod/fU7jbFHc",
                "descripcion": "Librería de utilidades compartida usada como dependencia por los mods de Obscuria.",
                "version": "18",
                "autor": "Obscuria",
                "jar": "obscure_api-18.jar"
            },
            {
                "nombre": "OctoLib",
                "url": "https://modrinth.com/mod/RH2KUdKJ",
                "descripcion": "Librería de utilidades compartida usada como dependencia por los mods de Octo-Studios.",
                "version": "0.5.0.1",
                "autor": "OctoStudios",
                "jar": "OctoLib-FORGE-0.5.0.1+1.20.1.jar"
            },
            {
                "nombre": "Oh The Trees You'll Grow",
                "url": "https://modrinth.com/mod/g8NOG5OR",
                "descripcion": "Añade nuevas variantes de árboles fantásticos y coloridos al mundo del juego.",
                "version": "1.6.0",
                "autor": "Corgi Taco",
                "jar": "Oh-The-Trees-Youll-Grow-forge-1.20.1-1.6.0.jar"
            },
            {
                "nombre": "Patchouli",
                "url": "https://modrinth.com/mod/nU0bVIaL",
                "descripcion": "Permite crear y leer libros de guía interactivos dentro del juego, usados como manuales por otros mods.",
                "version": "1.20.1-85-FORGE",
                "autor": "Vazkii",
                "jar": "Patchouli-1.20.1-85-FORGE.jar"
            },
            {
                "nombre": "Ping to Map: Xaero's Minimap & Ping Wheel Addon",
                "url": "https://modrinth.com/mod/8YgFuv6f",
                "descripcion": "Adición que muestra las señales (pings) del Ping Wheel directamente en el minimapa de Xaero.",
                "version": "1.1.0",
                "autor": "KURONAMI",
                "jar": "pingtomapxaeros-1.1.0-forge-1.20.1.jar"
            },
            {
                "nombre": "Placebo",
                "url": "https://modrinth.com/mod/tCkE8p2N",
                "descripcion": "Librería de utilidades compartida de Shadows_of_Fire usada como base por mods como Apotheosis.",
                "version": "8.6.3",
                "autor": "Shadows_of_Fire",
                "jar": "Placebo-1.20.1-8.6.3.jar"
            },
            {
                "nombre": "Player Animator",
                "url": "https://modrinth.com/mod/gedNE4y2",
                "descripcion": "Permite a otros mods añadir animaciones personalizadas al modelo del jugador.",
                "version": "1.0.2-rc1+1.20",
                "autor": "KosmX",
                "jar": "player-animation-lib-forge-1.0.2-rc1+1.20.jar"
            },
            {
                "nombre": "Prism",
                "url": "https://modrinth.com/mod/1OE8wbN0",
                "descripcion": "Librería de utilidades compartida usada como dependencia por mods del autor Grend.",
                "version": "1.0.5",
                "autor": "Grend",
                "jar": "Prism-1.20.1-forge-1.0.5.jar"
            },
            {
                "nombre": "Pufferfish's Attributes",
                "url": "https://modrinth.com/mod/FCFcFw09",
                "descripcion": "Sistema que añade nuevos atributos personalizados a entidades e items para ser usados por otros mods.",
                "version": "0.8.2",
                "autor": "Pufferfish",
                "jar": "puffish_attributes-0.8.2-1.20-forge.jar"
            },
            {
                "nombre": "Pufferfish's Skills",
                "url": "https://modrinth.com/mod/hqQqvaa4",
                "descripcion": "Sistema de habilidades y árbol de progresión personalizable para el jugador.",
                "version": "0.18.0",
                "autor": "Pufferfish",
                "jar": "puffish_skills-0.18.0-1.20-forge.jar"
            },
            {
                "nombre": "Pufferfish's Unofficial Additions",
                "url": "https://modrinth.com/mod/IAao6ECB",
                "descripcion": "Añade contenido y compatibilidad adicional al ecosistema de mods de Pufferfish.",
                "version": "2.2.4",
                "autor": "Cadentem",
                "jar": "pufferfish_unofficial_additions-1.20.1-2.2.4-all.jar"
            },
            {
                "nombre": "Puzzles Lib",
                "url": "https://www.curseforge.com/projects/495476",
                "descripcion": "Librería de utilidades compartida de Fuzs usada como dependencia por sus mods.",
                "version": "8.1.33",
                "autor": "Fuzs",
                "jar": "PuzzlesLib-v8.1.33-1.20.1-Forge.jar"
            },
            {
                "nombre": "Radiant Gear",
                "url": "https://modrinth.com/mod/AtT9wm5O",
                "descripcion": "Librería/contenido base de equipo y progresión usada por mods de Illusive Soulworks.",
                "version": "2.2.0+1.20.1",
                "autor": "Illusive Soulworks",
                "jar": "radiantgear-forge-2.2.0+1.20.1.jar"
            },
            {
                "nombre": "RAR-Compat",
                "url": "https://modrinth.com/mod/GnU07giL",
                "descripcion": "Parche de compatibilidad para el mod Reliquified Artifacts con otros mods presentes en el modpack.",
                "version": "0.5",
                "autor": "Octo-Studios",
                "jar": "rarcompat-1.20.1-0.5.jar"
            },
            {
                "nombre": "Resourceful Lib",
                "url": "https://modrinth.com/mod/G1hIVOrD",
                "descripcion": "Librería de utilidades compartida usada por los mods de la serie Resourceful, como Resourceful Furnaces.",
                "version": "2.1.29",
                "autor": "ThatGravyBoat, Epic_Oreo",
                "jar": "resourcefullib-forge-1.20.1-2.1.29.jar"
            },
            {
                "nombre": "Resourcefulconfig",
                "url": "https://www.curseforge.com/projects/714059",
                "descripcion": "Sistema de configuración en el juego usado por los mods de la serie Resourceful.",
                "version": "2.1.3",
                "autor": "Desconocido",
                "jar": "resourcefulconfig-forge-1.20.1-2.1.3.jar"
            },
            {
                "nombre": "Shoulder Surfing Pehkui Compat",
                "url": "https://modrinth.com/mod/zMCclQtM",
                "descripcion": "Parche de compatibilidad entre la cámara en tercera persona de Shoulder Surfing y el cambio de escala de Pehkui.",
                "version": "1.0.1",
                "autor": "Desconocido",
                "jar": "Shoulder_Surfing_Pehkui_Compat-1.0.1.jar"
            },
            {
                "nombre": "Sodium Options API",
                "url": "https://www.curseforge.com/projects/1103431",
                "descripcion": "Librería que expone las opciones de Sodium para que otros mods las integren en sus propias interfaces.",
                "version": "1.0.10",
                "autor": "toni",
                "jar": "sodiumoptionsapi-forge-1.0.10-1.20.1.jar"
            },
            {
                "nombre": "Sodium Options Mod Compat",
                "url": "https://www.curseforge.com/projects/1146393",
                "descripcion": "Parche de compatibilidad que adapta las opciones de Sodium Options API para su uso en Forge.",
                "version": "1.0.0",
                "autor": "Toni, DeeChael",
                "jar": "sodiumoptionsmodcompat-forge-1.0.0-1.20.1.jar"
            },
            {
                "nombre": "Sophisticated Core",
                "url": "https://modrinth.com/mod/nmoqTijg",
                "descripcion": "Librería base compartida entre los mods Sophisticated Backpacks y Sophisticated Storage.",
                "version": "1.3.54.2027",
                "autor": "P3pp3rF1y",
                "jar": "sophisticatedcore-1.20.1-1.3.54.2027.jar"
            },
            {
                "nombre": "Structure Gel API",
                "url": "https://modrinth.com/mod/T8TGycIQ",
                "descripcion": "API que facilita la generación de estructuras personalizadas y complejas en el mundo.",
                "version": "2.16.2",
                "autor": "Silver_David, KingPhygieBoo, Jonathing",
                "jar": "structure_gel-1.20.1-2.16.2.jar"
            },
            {
                "nombre": "SuperMartijn642's Config Library",
                "url": "https://modrinth.com/mod/LN9BxssP",
                "descripcion": "Librería que genera pantallas de configuración dentro del juego para los mods de SuperMartijn642.",
                "version": "1.1.8",
                "autor": "SuperMartijn642",
                "jar": "supermartijn642configlib-1.1.8-forge-mc1.20.jar"
            },
            {
                "nombre": "SuperMartijn642's Core Lib",
                "url": "https://modrinth.com/mod/rOUBggPv",
                "descripcion": "Librería de utilidades base compartida usada por todos los mods de SuperMartijn642.",
                "version": "1.1.21",
                "autor": "SuperMartijn642",
                "jar": "supermartijn642corelib-1.1.21-forge-mc1.20.1.jar"
            },
            {
                "nombre": "TerraBlender",
                "url": "https://modrinth.com/mod/kkmrDlKT",
                "descripcion": "API que permite combinar y mezclar regiones de biomas provenientes de distintos mods de generación de mundo.",
                "version": "3.0.1.10",
                "autor": "Adubbz",
                "jar": "TerraBlender-forge-1.20.1-3.0.1.10.jar"
            },
            {
                "nombre": "WaterMedia",
                "url": "https://modrinth.com/mod/G922NeHS",
                "descripcion": "Librería multimedia que permite reproducir vídeo y audio dentro del juego, usada por pantallas y carteles interactivos.",
                "version": "2.1.37",
                "autor": "SrRapero720, Goedix",
                "jar": "watermedia-2.1.37.jar"
            },
            {
                "nombre": "WaterMedia YT Plugin",
                "url": "https://modrinth.com/mod/P0w3IrnX",
                "descripcion": "Complemento de WaterMedia que añade soporte para reproducir contenido directamente desde YouTube.",
                "version": "2.1.2",
                "autor": "SrRapero720",
                "jar": "watermedia_youtube_plugin-2.1.2.jar"
            },
            {
                "nombre": "Xaero's Map - Waystones Compability",
                "url": "https://modrinth.com/mod/7mLhyqIY",
                "descripcion": "Parche de compatibilidad que muestra las piedras de viaje (Waystones) en el minimapa y mapa de Xaero.",
                "version": "1.1",
                "autor": "arcanealloy",
                "jar": "xaeros_waystones_compatibility-1.1 - 1.20.1.jar"
            },
            {
                "nombre": "YetAnotherConfigLib",
                "url": "https://modrinth.com/mod/1eAoo2KR",
                "descripcion": "Librería que ofrece pantallas de configuración modernas dentro del juego para otros mods.",
                "version": "3.6.6+1.20.1-forge",
                "autor": "isXander",
                "jar": "yet_another_config_lib_v3-3.6.6+1.20.1-forge.jar"
            },
            {
                "nombre": "YUNG's API",
                "url": "https://modrinth.com/mod/Ua7DFN59",
                "descripcion": "Librería base compartida requerida por todos los mods de generación de mundo de YUNG.",
                "version": "1.20-Forge-4.0.6",
                "autor": "YUNGNICKYOUNG",
                "jar": "YungsApi-1.20-Forge-4.0.6.jar"
            },
            {
                "nombre": "Zeta",
                "url": "https://modrinth.com/mod/MVARlG2f",
                "descripcion": "Librería de utilidades base derivada de Quark, usada por mods como Quark y Domum Ornamentum.",
                "version": "1.0-31",
                "autor": "Vazkii, quat, IThundxr, siuol, wiresegal, MehVahdJukaar",
                "jar": "Zeta-1.0-31.jar"
            }
        ]
        }
};

/* ===========================================================
   Base de datos de Resource Packs
   Estructura: { nombre, descripcion, version, autor }
   =========================================================== */
const resourcePacksDb = [
    {
        nombre: '!§bKnightArmor',
        descripcion: 'Modificación de apariencia estética para armaduras estilo caballero.',
        version: '1.8',
        autor: 'Desconocido'
    },
    {
        nombre: 'Fresh Moves v3.1 (No Animated Eyes)',
        descripcion: 'Paquete de movimientos dinámicos adaptado sin animaciones oculares.',
        version: '3.1',
        autor: 'Desconocido'
    },
    {
        nombre: 'Enhanced Boss Bars',
        descripcion: 'Mejora visual y detallada para las barras de jefes.',
        version: '1.5',
        autor: 'Desconocido'
    },
    {
        nombre: 'A Good Place Sample Pack',
        descripcion: 'Paquete de muestra con texturas optimizadas para el entorno.',
        version: '1.20 - 1.20.1',
        autor: 'Desconocido'
    },
    {
        nombre: 'Alternative Rain Sounds',
        descripcion: 'Variación de efectos de audio ambientales para la lluvia.',
        version: '1.21.9 - 1.21.11',
        autor: 'Desconocido'
    },
    {
        nombre: 'Assorted Allays x FA',
        descripcion: 'Variantes visuales para Allays compatibles con Fresh Animations.',
        version: '1.10',
        autor: 'Desconocido'
    },
    {
        nombre: 'Colourful Containers - Modded Dark Mode GUI Compat',
        descripcion: 'Compatibilidad de interfaz oscura para contenedores modificados.',
        version: '1.20 - 1.20.1',
        autor: 'Desconocido'
    },
    {
        nombre: 'Colourful containers GUI',
        descripcion: 'Interfaces de usuario detalladas y coloridas para los contenedores de almacenamiento.',
        version: '1.20 - 1.20.1',
        autor: 'Desconocido'
    },
    {
        nombre: 'CrOv + FrAn',
        descripcion: 'Paquete de compatibilidad cruzada de texturas.',
        version: '1.2.4',
        autor: 'Desconocido'
    },
    {
        nombre: 'cubic-sun-moon',
        descripcion: 'Texturas personalizadas en forma cúbica para el sol y la luna.',
        version: '1.8.5',
        autor: 'Desconocido'
    },
    {
        nombre: 'DSWG Thunder Sound',
        descripcion: 'Efectos acústicos alternativos e inmersivos para los truenos.',
        version: '1.1',
        autor: 'Desconocido'
    },
    {
        nombre: 'Eating Animations Compats',
        descripcion: 'Extensión de compatibilidad de animaciones de consumo para múltiples modificaciones.',
        version: '1.16.2 - 1.16.5',
        autor: 'Desconocido'
    },
    {
        nombre: 'EnderEyes',
        descripcion: 'Rediseño estético y detallado de los ojos de Ender.',
        version: '3.0',
        autor: 'Desconocido'
    },
    {
        nombre: 'Endhanced End',
        descripcion: 'Mejoras en el entorno visual y atmósfera de la dimensión del End.',
        version: '1.20 - 1.20.1',
        autor: 'Desconocido'
    },
    {
        nombre: 'Environmental Water',
        descripcion: 'Ajustes visuales y de transparencia para fluidos acuáticos en el entorno.',
        version: '1.20.0 - 1.20.1',
        autor: 'Desconocido'
    },
    {
        nombre: 'FA+Objects',
        descripcion: 'Paquete complementario de objetos compatible con Fresh Animations.',
        version: '2.1.1',
        autor: 'Desconocido'
    },
    {
        nombre: 'FA+Quivers',
        descripcion: 'Texturas dinámicas para carcajs compatibles con Fresh Animations.',
        version: '2.2',
        autor: 'Desconocido'
    },
    {
        nombre: 'Fancy Beds',
        descripcion: 'Modelos tridimensionales y texturas estilizadas para las camas.',
        version: '4.1',
        autor: 'Desconocido'
    },
    {
        nombre: 'Fresh Patch - More Mob Variants',
        descripcion: 'Parche de compatibilidad que añade variantes a las criaturas utilizando la base de FA.',
        version: '1.20 - 1.20.1',
        autor: 'Desconocido'
    },
    {
        nombre: 'FreshAnimations',
        descripcion: 'Animaciones dinámicas y realistas para todas las entidades del juego.',
        version: '1.10.4',
        autor: 'FreshLX'
    },
    {
        nombre: 'FreshCompats',
        descripcion: 'Archivos de compatibilidad general para configuraciones basadas en Fresh Animations.',
        version: '1.6',
        autor: 'Desconocido'
    },
    {
        nombre: 'Glowing Emissive Ores',
        descripcion: 'Texturas emisivas que permiten el brillo de los bloques de mineral en la oscuridad.',
        version: '1.20 - 1.20.1',
        autor: 'Desconocido'
    },
    {
        nombre: 'Golems Refreshed x FA',
        descripcion: 'Actualización visual de los modelos de golem integrada con animaciones dinámicas.',
        version: '2.1',
        autor: 'Desconocido'
    },
    {
        nombre: "Hellim's Xaero's Maps Mob Icons",
        descripcion: 'Iconos personalizados de criaturas para la interfaz de los mapas de Xaero.',
        version: '1.3',
        autor: 'Hellim'
    },
    {
        nombre: 'Mobs Refreshed x FA',
        descripcion: 'Optimización y rediseño de texturas de entidades compatibles con Fresh Animations.',
        version: '2.2.1',
        autor: 'Desconocido'
    },
    {
        nombre: 'Quark Programmer Art',
        descripcion: 'Adaptación de las texturas del mod Quark al estilo técnico clásico original.',
        version: '1.18 - 1.18.2',
        autor: 'Vazkii'
    },
    {
        nombre: 'SimplySwordsWhimscape',
        descripcion: 'Paquete de compatibilidad estética entre las armas de Simply Swords y el estilo Whimscape.',
        version: '1.1',
        autor: 'Desconocido'
    },
    {
        nombre: 'Skyrim Soundpack',
        descripcion: 'Reemplazo integral de efectos de sonido inspirados en la interfaz y entorno de Skyrim.',
        version: '6.1',
        autor: 'Desconocido'
    },
    {
        nombre: 'Water+Improved',
        descripcion: 'Mejora estética y optimización de renderizado para las superficies de agua.',
        version: '1.20 - 1.20.1',
        autor: 'Desconocido'
    },
    {
        nombre: 'waystones',
        descripcion: 'Actualización de texturas y consistencia visual para los bloques del mod Waystones.',
        version: 'Update 5',
        autor: 'Desconocido'
    },
    {
        nombre: 'Whimscape x BiomesWeveGone',
        descripcion: 'Soporte del estilo artístico píxel-art de Whimscape para los ecosistemas de Biomes We\'ve Gone.',
        version: '1.20 - 1.20.1',
        autor: 'Kromder'
    },
    {
        nombre: 'Whimscape x Exploration',
        descripcion: 'Expansión de texturas enfocada en elementos e interfaces de exploración.',
        version: '2.0',
        autor: 'Kromder'
    },
    {
        nombre: 'Whimscape',
        descripcion: 'Paquete central de texturas Whimscape de baja resolución con estilo limpio y detallado.',
        version: 'r8',
        autor: 'Kromder'
    },
    {
        nombre: 'Whimscape Leaves',
        descripcion: 'Optimización y diseño específico para el follaje y las hojas de los árboles.',
        version: 'r1',
        autor: 'Kromder'
    },
    {
        nombre: 'Whimscape x Overflowing Bars',
        descripcion: 'Ajuste de interfaz para las barras de estado superpuestas adaptadas a Whimscape.',
        version: '1.21',
        autor: 'Kromder'
    },
    {
        nombre: 'WhimscapePlus',
        descripcion: 'Adiciones estéticas complementarias para el ecosistema visual de Whimscape.',
        version: '1.20 - 1.20.1',
        autor: 'Kromder'
    }
];


/**
 * Toggle de las secciones estáticas (Requisitos del Sistema, Guías de
 * Instalación, Resource Packs, Shader Packs, Galería, Teclas Importantes).
 * Es independiente del catálogo de mods: se ejecuta primero y no depende
 * de "db" ni "resourcePacksDb", por lo que sigue funcionando aunque esos
 * datos fallen o no estén disponibles.
 */
document.querySelectorAll('.static-toggle').forEach((title) => {
    title.addEventListener('click', () => {
        title.classList.toggle('collapsed');
        const content = title.nextElementSibling;
        if (content) {
            content.classList.toggle('collapsed-content');
        }
    });
});

const tabsContainer = document.getElementById('category-tabs');
const modContainer = document.getElementById('mod-container');
const resourcePackContainer = document.getElementById('resourcepack-grid');

/**
 * Crea una tarjeta de mod o resource pack.
 * El enlace (url) y el badge "jar" son opcionales según el item.
 */
function createModCard(item) {
    const card = document.createElement('div');
    card.className = 'mod-card';

    const nameTag = item.url
        ? `<a href="${item.url}" class="mod-name" target="_blank" rel="noopener noreferrer">${item.nombre}</a>`
        : `<span class="mod-name">${item.nombre}</span>`;

    const jarBadge = item.jar
        ? `<span class="badge badge-jar">${item.jar}</span>`
        : '';

    card.innerHTML = `
        <div class="mod-header">${nameTag}</div>
        <p class="mod-description">${item.descripcion}</p>
        <div class="mod-meta">
            <span class="badge badge-version">v${item.version}</span>
            <span class="badge badge-author">${item.autor}</span>
            ${jarBadge}
        </div>
    `;

    return card;
}

/**
 * Genera el botón de pestaña y la sección de una categoría de mods.
 * Cada categoría inicia colapsada por defecto, ya que el catálogo
 * puede contener una gran cantidad de mods.
 */
function renderCategory(categoryId, categoryData, isFirst) {
    const btn = document.createElement('button');
    btn.className = `tab-btn ${isFirst ? 'active' : ''}`;
    btn.textContent = categoryData.titulo;
    btn.dataset.target = categoryId;

    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.category-section').forEach(s => s.classList.remove('active'));

        btn.classList.add('active');
        document.getElementById(categoryId).classList.add('active');
    });

    tabsContainer.appendChild(btn);

    const section = document.createElement('div');
    section.id = categoryId;
    section.className = `category-section ${isFirst ? 'active' : ''}`;

    const title = document.createElement('h2');
    title.className = 'category-title mod-toggle collapsed';
    title.textContent = categoryData.titulo;
    section.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'mod-grid collapsed-content';

    categoryData.mods.forEach(mod => grid.appendChild(createModCard(mod)));

    section.appendChild(grid);
    modContainer.appendChild(section);
}

/**
 * Renderiza los resource packs reutilizando la misma lógica de tarjetas
 * que el catálogo de mods.
 */
function renderResourcePacks(items) {
    if (!resourcePackContainer) return;
    items.forEach(item => resourcePackContainer.appendChild(createModCard(item)));
}

try {
    let isFirst = true;
    for (const [categoryId, categoryData] of Object.entries(db)) {
        renderCategory(categoryId, categoryData, isFirst);
        isFirst = false;
    }

    renderResourcePacks(resourcePacksDb);
} catch (err) {
    console.error('No se pudo renderizar el catálogo de mods:', err);
}

/* Toggle exclusivo de las categorías del catálogo de mods (generadas dinámicamente) */
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('mod-toggle')) {
        e.target.classList.toggle('collapsed');

        const content = e.target.nextElementSibling;
        if (content) {
            content.classList.toggle('collapsed-content');
        }
    }
});

/* Carrusel horizontal de la galería */
const galleryTrack = document.getElementById('gallery-track');
const galleryPrev = document.getElementById('gallery-prev');
const galleryNext = document.getElementById('gallery-next');

if (galleryTrack && galleryPrev && galleryNext) {
    const scrollAmount = 340;

    galleryPrev.addEventListener('click', () => {
        galleryTrack.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    galleryNext.addEventListener('click', () => {
        galleryTrack.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
}

/* Lightbox: abre cada imagen de la galería en grande y permite cerrarla
   sin salir de la página (click en la X, fuera de la imagen o tecla Esc) */
const lightbox = document.getElementById('gallery-lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    lightboxImg.src = '';
}

if (lightbox && lightboxImg && lightboxClose) {
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            lightboxImg.src = item.dataset.full || img.src;
            lightboxImg.alt = img.alt;
            lightbox.classList.add('active');
        });
    });

    lightboxClose.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}
