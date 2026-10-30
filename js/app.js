// 1. PEGA AQUÍ LA URL DE TU GOOGLE APPS SCRIPT (CONECTADO A TU GOOGLE SHEET)
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby35nwok8I23F8IsthFrB7OT2xtGGWV0DD_DdTGzsy8v9orpT3OF7n-LZ5HlBiIhRMu/exec";

// 2. CATÁLOGO COMPLETO DE LAS 71 CLASES CON TUS ENLACES REALES DE GOOGLE DRIVE
const CLASES = [
  // MÓDULO 1 - GENERALIDADES (Clases 1 y 2 GRATIS para enganchar al visitante)
  {
    modulo: "MÓDULO 1 - GENERALIDADES",
    titulo: "1 - INTRODUCCIÓN",
    enlace: "https://drive.google.com/file/d/1rkIqAAhcwTIrzQzaJwf7ipUK97nBGYNN/view?usp=drivesdk",
    gratis: true
  },
  {
    modulo: "MÓDULO 1 - GENERALIDADES",
    titulo: "2 - CLASE EN VIVO 1 IMPORTANTE VER DE PRIMERO",
    enlace: "https://drive.google.com/file/d/16TDD_Waw6Po8mSI4mh_1pxW2pk9uoj5h/view?usp=drivesdk",
    gratis: true
  },
  {
    modulo: "MÓDULO 1 - GENERALIDADES",
    titulo: "3 - HERRAMIENTAS NECESARIAS MÍNIMAS",
    enlace: "https://drive.google.com/file/d/1WlBWnojox1VUg2EACTs-ErK9eYAuJDV_/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 1 - GENERALIDADES",
    titulo: "4 - LEY DE OHM PARA ANÁLISIS DE CELULARES",
    enlace: "https://drive.google.com/file/d/1sagknwH8GStgWeQ065lxHdFuMiD4zpfa/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 1 - GENERALIDADES",
    titulo: "5 - MULTÍMETRO COMO HERRAMIENTA PRINCIPAL",
    enlace: "https://drive.google.com/file/d/1Vp0FVXOY7YM-ibVaW7l4sEwSfOqDOfXW/view?usp=drivesdk",
    gratis: false
  },

  // MÓDULO 2 - PARTES (12 Clases ordenadas del 1 al 12)
  {
    modulo: "MÓDULO 2 - PARTES",
    titulo: "1 - DESEMBALAJE TOTAL 1",
    enlace: "https://drive.google.com/file/d/1uTk_3wGtUL6awEcPEebsI6aiMIvoyCH6/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 2 - PARTES",
    titulo: "2 - DESEMBALAJE TOTAL 2",
    enlace: "https://drive.google.com/file/d/1wfMFJSMCiN9ihzQ9Bo6Kv9K51fjdlBBc/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 2 - PARTES",
    titulo: "3 - RECONOCIMIENTO DE PARTES",
    enlace: "https://drive.google.com/file/d/1NO8AL7jLivdyiJwdJ_C9MDZ5gNcuWMF7/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 2 - PARTES",
    titulo: "4 - RECONOCIMIENTO DE PARTES o MÓDULOS 1",
    enlace: "https://drive.google.com/file/d/12rSgpKQ7P1Zbxf45zHo6NU4sa9d_mIKi/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 2 - PARTES",
    titulo: "5 - RECONOCIMIENTO DE PARTES o MÓDULOS 2",
    enlace: "https://drive.google.com/file/d/1dV5bFz6YA05Dzqg3sOFVxaba2QF9Ei5H/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 2 - PARTES",
    titulo: "6 - RECONOCIMIENTO DE PARTES o MÓDULOS 3",
    enlace: "https://drive.google.com/file/d/1OPcNKtIgwL-USB6c8fowqrMX-7ju0V8c/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 2 - PARTES",
    titulo: "7 - RECONOCIMIENTO DE FALLAS I PARTE",
    enlace: "https://drive.google.com/file/d/1rjD9JAREl8kjGnHM5BCgYR4Cg7ezcJMW/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 2 - PARTES",
    titulo: "8 - RECONOCIMIENTO DE FALLAS II PARTE",
    enlace: "https://drive.google.com/file/d/14cjtjhF1f5ZOaXMzm4kRzObCIZ_3c5Bv/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 2 - PARTES",
    titulo: "9 - CAMBIO MÓDULOS COMPLETOS",
    enlace: "https://drive.google.com/file/d/1XyBwf67J0aMsWCX6FQYvpYGHY8ZRko3d/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 2 - PARTES",
    titulo: "10 - EMBALAJE TOTAL 1",
    enlace: "https://drive.google.com/file/d/1M5fQT-9GH-W-Mi4MrMQQbQo8ONaTK5Ie/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 2 - PARTES",
    titulo: "11 - EMBALAJE TOTAL 2",
    enlace: "https://drive.google.com/file/d/1CopN7CtlPBPUAWrAT5LM9Cgshd0_IT8H/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 2 - PARTES",
    titulo: "12 - EMBALAJE TOTAL 3",
    enlace: "https://drive.google.com/file/d/1rcT8e1-yuOFJj-J8NT7evj9Puxa2RBIP/view?usp=drivesdk",
    gratis: false
  },

  // MÓDULO 3 - BATERÍAS (3 Clases)
  {
    modulo: "MÓDULO 3 - BATERÍAS",
    titulo: "1 - TIPOS DE BATERÍAS",
    enlace: "https://drive.google.com/file/d/170VjKTxzrLmLhNj7HfIAeZGteyqopSD5/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 3 - BATERÍAS",
    titulo: "2 - MEDICIONES DE BATERÍAS",
    enlace: "https://drive.google.com/file/d/1Z-iLp_kOZfJHLUHqQEe-rWlXIIwnHRQG/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 3 - BATERÍAS",
    titulo: "3 - DIAGNÓSTICO Y CAMBIOS DE BATERÍAS",
    enlace: "https://drive.google.com/file/d/1wiS5f9OUBBKwmO-oO5JwgKrR3a39wvpi/view?usp=drivesdk",
    gratis: false
  },

  // MÓDULO 4 - SOLDADURA (4 Clases)
  {
    modulo: "MÓDULO 4 - SOLDADURA",
    titulo: "1 - INTRODUCCIÓN A LA SOLDADURA",
    enlace: "https://drive.google.com/file/d/14bWtlo-Psb7wXHICCEyHhSMY754iAYwF/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 4 - SOLDADURA",
    titulo: "2 - HERRAMIENTAS Y MATERIALES",
    enlace: "https://drive.google.com/file/d/1sisA27J3i8k5gQQ_GIWX8NqXseNphdW3/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 4 - SOLDADURA",
    titulo: "3 - APLICACIÓN MICROSOLDADURAS DESOLDAR 1",
    enlace: "https://drive.google.com/file/d/1FXy7hR6vt2uwbk_Zyza9RDye1RjsavvV/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 4 - SOLDADURA",
    titulo: "4 - APLICACIÓN MICROSOLDADURAS DESOLDAR 2",
    enlace: "https://drive.google.com/file/d/1RgNN69l6TTmd5wX-Jcfl7P3ztlpbs-h4/view?usp=drivesdk",
    gratis: false
  },

  // MÓDULO 5 - CAMBIO PARTES (13 Clases ordenadas del 1 al 13)
  {
    modulo: "MÓDULO 5 - CAMBIO PARTES",
    titulo: "1 - CAMBIO LECTOR SIM I PARTE",
    enlace: "https://drive.google.com/file/d/1JxgpX1U9VHlhHrw6ZgC3aECmo-kQHReV/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 5 - CAMBIO PARTES",
    titulo: "2 - CAMBIO LECTOR SIM II PARTE",
    enlace: "https://drive.google.com/file/d/1a4PIsfMk80_9DVnyg15btz3esDY-nuu_/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 5 - CAMBIO PARTES",
    titulo: "3 - CAMBIO LECTOR SIM III PARTE",
    enlace: "https://drive.google.com/file/d/1rDPPr9ftq0vohdfo2aNy_8h-FiOIbJU4/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 5 - CAMBIO PARTES",
    titulo: "4 - CAMBIO MICRÓFONOS I PARTE",
    enlace: "https://drive.google.com/file/d/144e4B2Fzt0mFtBY4_1IeaAlgCmQOaXmj/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 5 - CAMBIO PARTES",
    titulo: "5 - CAMBIO MICRÓFONOS II PARTE",
    enlace: "https://drive.google.com/file/d/11let5avNBF2wDQ0hVaB3wTvIrPCd3vwk/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 5 - CAMBIO PARTES",
    titulo: "6 - CAMBIO CENTRO DE CARGA 1 PARTE I",
    enlace: "https://drive.google.com/file/d/1GDTSDKL60N17xFa7JeCumLJDql7zvlAI/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 5 - CAMBIO PARTES",
    titulo: "7 - CAMBIO CENTRO DE CARGA 1 PARTE II",
    enlace: "https://drive.google.com/file/d/1jtuGllAEWfVFavXQBhWHKFianvXXZKjy/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 5 - CAMBIO PARTES",
    titulo: "8 - CAMBIO CENTRO DE CARGA 1 PARTE III",
    enlace: "https://drive.google.com/file/d/18Rrwz_BywuFozSniym5VGwyRZ3BzRQub/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 5 - CAMBIO PARTES",
    titulo: "9 - CAMBIO CENTRO DE CARGA 2 PARTE I",
    enlace: "https://drive.google.com/file/d/1zvdaCqppaxDfz0mr6c2xyN-CdePR3yON/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 5 - CAMBIO PARTES",
    titulo: "10 - CAMBIO CENTRO DE CARGA 2 PARTE II",
    enlace: "https://drive.google.com/file/d/1o6-3WmwVPaAh0Sn7fPClqcuYbxgTKNJz/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 5 - CAMBIO PARTES",
    titulo: "11 - CAMBIO DE CENTRO DE CARGA 3 I PARTE",
    enlace: "https://drive.google.com/file/d/1KbhS-KLXLx4u_uQAzeeBlLUaDaHH0iJx/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 5 - CAMBIO PARTES",
    titulo: "12 - CAMBIO DE CENTRO DE CARGA 3 II PARTE",
    enlace: "https://drive.google.com/file/d/1aHQmmePipdSWTvC715LaWy0_HVA58WH_/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 5 - CAMBIO PARTES",
    titulo: "13 - CAMBIO DE CENTRO DE CARGA 3 III PARTE",
    enlace: "https://drive.google.com/file/d/10FpYx5YCDeXlrN7YguxYc5tWrWpCVUuT/view?usp=drivesdk",
    gratis: false
  },

  // MÓDULO 6 - BONOS EXTRA (5 Clases en Video)
  {
    modulo: "MÓDULO 6 - BONOS EXTRA",
    titulo: "BONO 1 Software Básico Android",
    enlace: "https://drive.google.com/file/d/1uVywDqgNOLVRKZgJKoC1MCCNYAn3MGjZ/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 6 - BONOS EXTRA",
    titulo: "BONO 2 ATENCIÓN POR HUMEDAD",
    enlace: "https://drive.google.com/file/d/1LLxwXnD7lFdssWnGD-hcEb5UBny6uZFC/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 6 - BONOS EXTRA",
    titulo: "BONO 3 HERRAMIENTAS AVANZADAS",
    enlace: "https://drive.google.com/file/d/1die0prxgMfCAYRuwXa-mgVvYgg58YvM-/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 6 - BONOS EXTRA",
    titulo: "BONO 4 MICROSOLDADURA VISTA MICROSCOPIO",
    enlace: "https://drive.google.com/file/d/1NYW119YB49SB_6kMempTTeleHMFWlkix/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 6 - BONOS EXTRA",
    titulo: "BONO 5 ATENCIÓN AL CLIENTE",
    enlace: "https://drive.google.com/file/d/10O18i0Cs7ZZhiAT3w9ftatjZ8Z3nMABn/view?usp=drivesdk",
    gratis: false
  },

  // MÓDULO 7 - CLASES EN VIVO (6 Clases)
  {
    modulo: "MÓDULO 7 - CLASES EN VIVO",
    titulo: "CLASE EN VIVO 1 DEL 08-01-2021",
    enlace: "https://drive.google.com/file/d/1OtwjIn8NUP3c9ME29HKAQ5pdlwuowadT/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 7 - CLASES EN VIVO",
    titulo: "CLASE EN VIVO 2 DEL 15-01-2021",
    enlace: "https://drive.google.com/file/d/1JHa8ElIKi4GIQJ1LyNXcmeAQ4ydeExKO/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 7 - CLASES EN VIVO",
    titulo: "CLASE EN VIVO 3 DEL 22-01-2021",
    enlace: "https://drive.google.com/file/d/15A_kBkPhQqxzliziQ-Gh6TRTPi4BqhOS/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 7 - CLASES EN VIVO",
    titulo: "CLASE EN VIVO 4 DEL 29-01-2021",
    enlace: "https://drive.google.com/file/d/14uRB4Rz_xxU7t_9J4KuWKNVKOp7ByFTE/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 7 - CLASES EN VIVO",
    titulo: "CLASE EN VIVO 5 DEL 05-02-2021",
    enlace: "https://drive.google.com/file/d/1HgOUXZuBDng7QuOo4S7M4ha8XhhiC_Nx/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 7 - CLASES EN VIVO",
    titulo: "CLASE EN VIVO 6 DEL 12-02-2021",
    enlace: "https://drive.google.com/file/d/1kEVrfyAFl7sZccRqOnElbBDy4oPKkAs_/view?usp=drivesdk",
    gratis: false
  },

  // MÓDULO 8 - BONO CURSO DE MARKETING DIGITAL (13 Clases ordenadas del 1 al 13)
  {
    modulo: "MÓDULO 8 - MARKETING DIGITAL",
    titulo: "1 - CREAR UNA MARCA",
    enlace: "https://drive.google.com/file/d/1Mea3YnlVBiDV9PZ2Ts_NFZ2MWBONPB0s/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 8 - MARKETING DIGITAL",
    titulo: "2 - EL NOMBRE DEL NEGOCIO",
    enlace: "https://drive.google.com/file/d/1FVgj2Ievy13CQD9RSRWnZylQzdSMxElZ/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 8 - MARKETING DIGITAL",
    titulo: "3 - EL LOGO Y EL SLOGAN",
    enlace: "https://drive.google.com/file/d/1jgM_4g6VxFksOCyLrQip2hSdLIQWdKl8/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 8 - MARKETING DIGITAL",
    titulo: "4 - CREAR LA PÁGINA DE FACEBOOK I PARTE",
    enlace: "https://drive.google.com/file/d/1zehw7ZakaGCyrfcbOzo8Qe0Ru4Xxjanv/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 8 - MARKETING DIGITAL",
    titulo: "5 - CREAR LA PÁGINA DE FACEBOOK II PARTE",
    enlace: "https://drive.google.com/file/d/1Y0GdFLGE0ewunbDR1ggZHfypie6T1fyy/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 8 - MARKETING DIGITAL",
    titulo: "6 - CONFIGURACIÓN DE LA PÁGINA DE FACEBOOK Y CREACIÓN DE CONTENIDO",
    enlace: "https://drive.google.com/file/d/1GZwvL7dtAULq4stG04VCvOZMCHHFn64J/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 8 - MARKETING DIGITAL",
    titulo: "7 - FUNDAMENTAL POLÍTICAS DE FACEBOOK",
    enlace: "https://drive.google.com/file/d/1CYcrsBZdddzBSelYOumZkmHb53xC1J8p/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 8 - MARKETING DIGITAL",
    titulo: "8 - CREACIÓN DEL BUSINESS MANAGER I PARTE",
    enlace: "https://drive.google.com/file/d/1qDrVVWVNXXDYkstj5tyfI-ZAAx_UIt-q/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 8 - MARKETING DIGITAL",
    titulo: "9 - CREACIÓN DEL BUSINESS MANAGER II PARTE",
    enlace: "https://drive.google.com/file/d/1fH0V8Q2iTHnvK-ak8bqp4pjauxTdtxio/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 8 - MARKETING DIGITAL",
    titulo: "10 - OBJETIVOS DE CAMPAÑA DE FACEBOOK",
    enlace: "https://drive.google.com/file/d/1FgnktD1oJjytmvQ4nZ3LYYG-yDGYD9lx/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 8 - MARKETING DIGITAL",
    titulo: "11 - CONFIGURANDO PRIMERA CAMPAÑA",
    enlace: "https://drive.google.com/file/d/19c7-871vxR0zNUYvvtVM1xcavLL55Hmr/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 8 - MARKETING DIGITAL",
    titulo: "12 - CAMPAÑA DE INTERACCIÓN",
    enlace: "https://drive.google.com/file/d/1bhhqIcbKcFufqeplPILJX5JVeV8jonqm/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 8 - MARKETING DIGITAL",
    titulo: "13 - CAMPAÑA DE MENSAJES Y ANÁLISIS DE DATOS",
    enlace: "https://drive.google.com/file/d/1_074g_bo5OZLbLwaowJ4u5lTx4NqyyCB/view?usp=drivesdk",
    gratis: false
  },

  // MÓDULO 9 - PANTALLAS (6 Capítulos)
  {
    modulo: "MÓDULO 9 - PANTALLAS",
    titulo: "CAPÍTULO 1 - MATERIALES Y HERRAMIENTAS",
    enlace: "https://drive.google.com/file/d/1xEmtkHOBYc2U7Navf93CnIUnMyEbkegp/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 9 - PANTALLAS",
    titulo: "CAPÍTULO 2 - TIPOS DE PANTALLAS",
    enlace: "https://drive.google.com/file/d/1X8P7XEcGDkID7MbuY-kJDBL3zu7bshW7/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 9 - PANTALLAS",
    titulo: "CAPÍTULO 3 - CALIDADES DE PANTALLA",
    enlace: "https://drive.google.com/file/d/1TCT9UxVQyel_ud8WQjy5WwiP41wvBE3u/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 9 - PANTALLAS",
    titulo: "CAPÍTULO 4 - INSTALACIÓN 1 DE PANTALLA",
    enlace: "https://drive.google.com/file/d/1s5QwleL6hmUzqww9TUF-Zw3-KxUE6XVt/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 9 - PANTALLAS",
    titulo: "CAPÍTULO 5 - CAMBIO PANTALLA OLED J400M",
    enlace: "https://drive.google.com/file/d/1TDcc_3vol45aUTPS6Igk1ZkYfvrH2AVL/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 9 - PANTALLAS",
    titulo: "CAPÍTULO 6 - CAMBIO PANTALLA LCD Y5 LITE 2018",
    enlace: "https://drive.google.com/file/d/1-NFd60bFPJMnjZ2lmAkMmAzM_stvjQBH/view?usp=drivesdk",
    gratis: false
  },

  // MÓDULO 10 - MICROELECTRÓNICA (4 Capítulos)
  {
    modulo: "MÓDULO 10 - MICROELECTRÓNICA",
    titulo: "CAPÍTULO 1 - CONDENSADORES 1",
    enlace: "https://drive.google.com/file/d/1EpW8r69DEyNQqnyZZDp6jg7jrZm-CN0V/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 10 - MICROELECTRÓNICA",
    titulo: "CAPÍTULO 2 - CONDENSADORES II PARTE",
    enlace: "https://drive.google.com/file/d/1cpltYW03Pm3eI2y76jbvULCZ7SdGwwjA/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 10 - MICROELECTRÓNICA",
    titulo: "CAPÍTULO 3 - RESISTENCIAS",
    enlace: "https://drive.google.com/file/d/1UgDKVS4UHfh39oojjspIdASDPXTY4xb5/view?usp=drivesdk",
    gratis: false
  },
  {
    modulo: "MÓDULO 10 - MICROELECTRÓNICA",
    titulo: "CAPÍTULO 4 - BOBINAS",
    enlace: "https://drive.google.com/file/d/1WrzVvjCZ7tBtWOBKf5yIjU4Mm63shjxm/view?usp=drivesdk",
    gratis: false
  }
];

// 3. DIAGRAMAS ESQUEMÁTICOS EN PDF Y RECURSOS DEL MÓDULO 6 CON TUS ENLACES REALES
const DIAGRAMAS_PDF = [
  {
    nombre: "Samsung A10 (SM-A105F).pdf",
    enlace: "https://drive.google.com/file/d/1dK2VIvs9pUocAlCM3Hj_wDcdzd9o4iMb/view?usp=drivesdk"
  },
  {
    nombre: "Samsung A20 (SM-A205F).pdf",
    enlace: "https://drive.google.com/file/d/1dDa0izZJhf4-MskCFVAW68q4Du3-_H8L/view?usp=drivesdk"
  },
  {
    nombre: "Samsung A30 (SM-A305N).pdf",
    enlace: "https://drive.google.com/file/d/1B_ouRjIasp7miB9Oh0w3bL7Kl1f4k3Sz/view?usp=drivesdk"
  },
  {
    nombre: "Samsung A40 (SM-A405F).pdf",
    enlace: "https://drive.google.com/file/d/1Fl36hfa3Uh7kCqmx54wslD3QgSkBtLPu/view?usp=drivesdk"
  },
  {
    nombre: "Samsung A50 (SM-A505F).pdf",
    enlace: "https://drive.google.com/file/d/1OCGrNZZOoRpntBvo3aEbg4LYPXHq-Xyy/view?usp=drivesdk"
  },
  {
    nombre: "Samsung A60 (SM-A6060).pdf",
    enlace: "https://drive.google.com/file/d/1SaIszqpHOUlQRIFnkHa6SgnxZAh_VEN0/view?usp=drivesdk"
  },
  {
    nombre: "Samsung A70 (SM-A750FN).pdf",
    enlace: "https://drive.google.com/file/d/12ZWh9QqF8rrTTiN__1Y0en3r1Ksbqnmx/view?usp=drivesdk"
  },
  {
    nombre: "Samsung A80 (SM-A805F).pdf",
    enlace: "https://drive.google.com/file/d/1j45LtJErLK7lsqaQKQZIvzsmiqB_E4IG/view?usp=drivesdk"
  },
  {
    nombre: "Instrucciones Diagramas (.txt)",
    enlace: "https://drive.google.com/file/d/1h-TeD1TDDs7ECN6ugfWG53nkKFsKmF_Q/view?usp=drivesdk"
  },
  {
    nombre: "Recurso Adicional (Leer Más)",
    enlace: "https://drive.google.com/file/d/1Mp9YQ9BfnaTU-oDN9eCIsj83nCpuubSD/view?usp=drivesdk"
  }
];

const LS_TOKEN = "alumno_celulares_token";
const LS_PROGRESO = "alumno_celulares_progreso";

document.addEventListener("DOMContentLoaded", () => {
  let indiceActual = 0;
  let clasesCompletadas = leerProgresoLocal();

  const $ = (id) => document.getElementById(id);

  const iframeReproductor = $("iframe-reproductor");
  const capaBloqueo = $("capa-bloqueo");
  const etiquetaModulo = $("etiqueta-modulo-actual");
  const etiquetaEstado = $("etiqueta-estado-clase");
  const tituloClaseActual = $("titulo-clase-actual");
  const btnMarcarVista = $("btn-marcar-vista");
  const textoPorcentaje = $("texto-porcentaje");
  const barraRelleno = $("barra-relleno");
  const itemsClase = document.querySelectorAll(".item-clase");

  const modalVentas = $("modal-ventas");
  const modalAuth = $("modal-auth");

  const tabEntrar = $("tab-entrar");
  const tabActivar = $("tab-activar");
  const formLogin = $("form-login");
  const formRegistro = $("form-registro");
  const mensajeAuth = $("mensaje-auth");

  function leerProgresoLocal() {
    try {
      const datos = JSON.parse(localStorage.getItem(LS_PROGRESO) || "[]");
      return Array.isArray(datos) ? datos.filter((n) => Number.isInteger(n)) : [];
    } catch (e) {
      return [];
    }
  }

  function guardarProgresoLocal() {
    localStorage.setItem(LS_PROGRESO, JSON.stringify(clasesCompletadas));
  }

  function estaLogueado() {
    return Boolean(localStorage.getItem(LS_TOKEN));
  }

  // Transforma el enlace de Google Drive ".../view?usp=drivesdk" en ".../preview"
  function convertirAEmbedDrive(url) {
    return url.replace(/\/view.*$/, "/preview");
  }

  async function enviarAScript(payload) {
    const resp = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload)
    });
    return resp.json();
  }

  function actualizarBarraYPalomitas() {
    const total = CLASES.length;
    const completadasCount = clasesCompletadas.length;
    const porcentaje = total ? Math.round((completadasCount / total) * 100) : 0;

    if (textoPorcentaje && barraRelleno) {
      textoPorcentaje.textContent = `${porcentaje}% (${completadasCount}/${total})`;
      barraRelleno.style.width = `${porcentaje}%`;
    }

    itemsClase.forEach((btn) => {
      const idx = Number(btn.dataset.indice);
      const iconoSpan = btn.querySelector(".item-clase__icono");
      const claseObj = CLASES[idx];
      const vista = clasesCompletadas.includes(idx);

      btn.classList.toggle("item-clase--completada", vista);

      if (!iconoSpan) return;
      if (vista) {
        iconoSpan.textContent = "✅";
      } else if (estaLogueado() || (claseObj && claseObj.gratis)) {
        iconoSpan.textContent = "▶️";
      } else {
        iconoSpan.textContent = "🔒";
      }
    });

    if (btnMarcarVista) {
      const actualVista = clasesCompletadas.includes(indiceActual);
      btnMarcarVista.textContent = actualVista ? "✅ Clase Completada" : "⬜ Marcar como vista";
      btnMarcarVista.classList.toggle("boton--check-activo", actualVista);
    }
  }

  async function alternarClaseVista(indice) {
    const clase = CLASES[indice];
    if (!clase) return;

    if (!estaLogueado() && !clase.gratis) {
      $("recurso-intentado").textContent = clase.titulo;
      modalVentas.classList.remove("oculto");
      return;
    }

    const pos = clasesCompletadas.indexOf(indice);
    if (pos === -1) {
      clasesCompletadas.push(indice);
    } else {
      clasesCompletadas.splice(pos, 1);
    }

    guardarProgresoLocal();
    actualizarBarraYPalomitas();

    const usuario = localStorage.getItem(LS_TOKEN);
    if (usuario) {
      try {
        await enviarAScript({
          accion: "guardar_progreso",
          usuario: usuario,
          progreso: clasesCompletadas
        });
      } catch (e) {
        // Queda almacenado localmente si falla la red
      }
    }
  }

  if (btnMarcarVista) {
    btnMarcarVista.onclick = () => alternarClaseVista(indiceActual);
  }

  function cargarClase(indice) {
    if (indice < 0 || indice >= CLASES.length) return;
    indiceActual = indice;
    const clase = CLASES[indice];
    const tieneAcceso = clase.gratis || estaLogueado();

    etiquetaModulo.textContent = clase.modulo;
    tituloClaseActual.textContent = clase.titulo;

    etiquetaEstado.classList.remove(
      "reproductor-barra__estado--gratis",
      "reproductor-barra__estado--desbloqueado",
      "reproductor-barra__estado--bloqueado"
    );

    if (clase.gratis) {
      etiquetaEstado.textContent = "🔓 CLASE GRATUITA";
      etiquetaEstado.classList.add("reproductor-barra__estado--gratis");
    } else if (estaLogueado()) {
      etiquetaEstado.textContent = "✅ ACCESO VITALICIO ACTIVO";
      etiquetaEstado.classList.add("reproductor-barra__estado--desbloqueado");
    } else {
      etiquetaEstado.textContent = "🔒 DESBLOQUEA TODO POR S/ 10";
      etiquetaEstado.classList.add("reproductor-barra__estado--bloqueado");
    }

    itemsClase.forEach((btn) => {
      btn.classList.remove("item-clase--activa");
      if (Number(btn.dataset.indice) === indice) {
        btn.classList.add("item-clase--activa");
        const acordeonPadre = btn.closest("details");
        if (acordeonPadre) acordeonPadre.open = true;
      }
    });

    if (tieneAcceso) {
      capaBloqueo.classList.add("oculto");
      const url = convertirAEmbedDrive(clase.enlace);
      if (iframeReproductor.dataset.actual !== url) {
        iframeReproductor.src = url;
        iframeReproductor.dataset.actual = url;
      }
    } else {
      iframeReproductor.src = "about:blank";
      iframeReproductor.dataset.actual = "";
      capaBloqueo.classList.remove("oculto");
    }

    actualizarBarraYPalomitas();
  }

  function renderizarPDFs() {
    const contenedorPdfs = $("contenedor-pdfs");
    contenedorPdfs.innerHTML = "";
    DIAGRAMAS_PDF.forEach((pdf) => {
      const btn = document.createElement("button");
      btn.className = "pdf-btn";
      const icono = estaLogueado() ? "📥" : "🔒";
      btn.innerHTML = `<span>📄 ${pdf.nombre}</span><span>${icono}</span>`;
      btn.onclick = () => {
        if (!estaLogueado()) {
          $("recurso-intentado").textContent = pdf.nombre;
          modalVentas.classList.remove("oculto");
        } else {
          window.open(pdf.enlace, "_blank", "noopener");
        }
      };
      contenedorPdfs.appendChild(btn);
    });
  }

  function actualizarInterfazUsuario() {
    const usuario = localStorage.getItem(LS_TOKEN);
    const navInvitado = $("nav-invitado");
    const navAlumno = $("nav-alumno");

    if (usuario) {
      navInvitado.classList.add("oculto");
      navAlumno.classList.remove("oculto");
      $("texto-alumno").textContent = `✅ Alumno: ${usuario}`;
    } else {
      navInvitado.classList.remove("oculto");
      navAlumno.classList.add("oculto");
    }
    renderizarPDFs();
    cargarClase(indiceActual);
  }

  itemsClase.forEach((btn) => {
    btn.addEventListener("click", () => {
      cargarClase(Number(btn.dataset.indice));
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  $("btn-anterior").onclick = () => {
    if (indiceActual > 0) cargarClase(indiceActual - 1);
  };
  $("btn-siguiente").onclick = () => {
    if (indiceActual < CLASES.length - 1) cargarClase(indiceActual + 1);
  };

  function cambiarTab(modo) {
    mensajeAuth.textContent = "";
    const entrar = modo === "entrar";
    tabEntrar.classList.toggle("tabs__btn--activo", entrar);
    tabActivar.classList.toggle("tabs__btn--activo", !entrar);
    formLogin.classList.toggle("oculto", !entrar);
    formRegistro.classList.toggle("oculto", entrar);
  }

  $("cerrar-modal-ventas").onclick = () => modalVentas.classList.add("oculto");
  $("cerrar-modal-auth").onclick = () => modalAuth.classList.add("oculto");
  $("btn-abrir-login").onclick = () => {
    modalAuth.classList.remove("oculto");
    cambiarTab("entrar");
  };
  $("btn-overlay-codigo").onclick = () => {
    modalAuth.classList.remove("oculto");
    cambiarTab("activar");
  };
  $("pasar-a-login").onclick = () => {
    modalVentas.classList.add("oculto");
    modalAuth.classList.remove("oculto");
    cambiarTab("activar");
  };

  tabEntrar.onclick = () => cambiarTab("entrar");
  tabActivar.onclick = () => cambiarTab("activar");

  async function consultarGoogleSheets(payload) {
    mensajeAuth.className = "formulario__estado formulario__estado--info";
    mensajeAuth.textContent = "Verificando tus datos y cargando tu avance...";
    try {
      const data = await enviarAScript(payload);

      if (data.exito) {
        localStorage.setItem(LS_TOKEN, data.usuario);

        if (Array.isArray(data.progreso)) {
          const union = new Set([...data.progreso, ...clasesCompletadas]);
          clasesCompletadas = [...union].filter((n) => Number.isInteger(n)).sort((a, b) => a - b);
          guardarProgresoLocal();
        }

        mensajeAuth.className = "formulario__estado formulario__estado--exito";
        mensajeAuth.textContent = `✅ ¡Bienvenido! Desbloqueando las ${CLASES.length} clases...`;
        setTimeout(() => {
          modalAuth.classList.add("oculto");
          actualizarInterfazUsuario();
        }, 700);
      } else {
        mensajeAuth.className = "formulario__estado formulario__estado--error";
        mensajeAuth.textContent = "❌ " + (data.mensaje || "No se pudo validar tu acceso.");
      }
    } catch (err) {
      console.error("Error real:", err);
      mensajeAuth.className = "formulario__estado formulario__estado--error";
      mensajeAuth.textContent = "Error de conexión. Verifica tu internet.";
    }
  }

  formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    consultarGoogleSheets({
      accion: "login",
      usuario: $("input-login-user").value.trim(),
      password: $("input-login-pass").value.trim()
    });
  });

  formRegistro.addEventListener("submit", (e) => {
    e.preventDefault();
    consultarGoogleSheets({
      accion: "registro",
      codigo: $("input-reg-codigo").value.trim(),
      usuario: $("input-reg-user").value.trim(),
      password: $("input-reg-pass").value.trim(),
      progreso: clasesCompletadas
    });
  });

  $("btn-salir").onclick = () => {
    localStorage.removeItem(LS_TOKEN);
    localStorage.removeItem(LS_PROGRESO);
    location.reload();
  };

  actualizarInterfazUsuario();
});