
import { TranslationProject } from './types';

export const APP_TITLE = "OTS";
export const LOGO_URL = "/assets/PQ2_teaser_gif.webp"; // Replace with your actual logo URL

// MODULAR DATA: Add new translations here
export const PROJECTS: TranslationProject[] = [
  {
    id: 'P5X',
    title: 'Persona5: The Phantom X',
    genre: '',
    releaseDate: '',
    description: '',
    longDescription: 'Погрузитесь в захватывающую двойную жизнь! \n\n Persona 5: The Phantom X — это совершенно новая история во вселенной культовой RPG.\nДнем вы — обычный японский школьник, живущий в Токио и налаживающий социальные связи. Ночью вы — Фантомный Вор.\n\nСтильные пошаговые бои, новый состав Призрачных Воров, обновленная система Социальных Связей и незабываемый саундтрек.\n\nПришло время украсть сердца!',
    features: [''],
    imageUrl: '/assets/P5X/p5x.jpg',
    logoUrl: '/assets/P5X/p5xLG.png',
    arcana: '0. THE FOOL',
    downloadLink: 'https://github.com/OTTYSS/P5X-Russian-translate/releases/download/0.3/main.zip',
    progress: 100,
    installationSteps: [
      { 
        text: "Скачиваем драйверные файлы",
        link: { url: "https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-10.0.100-windows-x64-installer", label: "СКАЧАТЬ Dotnet" }
      },
      { 
        text: "",
        link: { url: "https://github.com/ennerperez/VCRedistInstaller/releases/download/v1.0.1/VCRedistInstaller.exe", label: "СКАЧАТЬ Vcredist" }
      },
      { 
        text: "Откройте папку с установленной игрой в Steam (ПКМ -> Управление -> Просмотреть локальные файлы).",
        imageUrl: "/assets/P5X/2.png" 
      },
      { 
        text: "Скачайте архив с переводом",
        link: { url: "https://github.com/OTTYSS/P5X-Russian-translate/releases/download/0.3/main.zip", label: "СКАЧАТЬ" },
      },
      { text: "Скопируйте содержимое архива в по пути client/pc с заменой файлов.",
        imageUrl: "/assets/P5X/3.png"
      },
      { text: "Данный шаг не обязателен, но настоятельно рекомендуется.\nТ.к из-за батника при скачивании писалось, что там ВИРУСЫ, делаем следующее.\nИдём по пути P5X/client/pc/BepInEx/plugins и тут запускаем P5XDL.exe\nУ вас скачается актуальная версия перевода (дальше перевод будет автоматически проверять обновления при запуске игры)" }
    ]
  },
  {
    id: 'PQ2',
    title: 'Persona Q2',
    genre: 'Action RPG',
    releaseDate: '',
    description: 'Философский трактат андроидов на русском языке.',
    longDescription: 'Перевод, фокусирующийся на передаче сложной терминологии и эмоционального подтекста диалогов между 2B и 9S. Включает перевод всех побочных квестов и архивных записей.',
    features: [''],
    imageUrl: '/assets/PQ2/pq2.jpg',
    logoUrl: '/assets/PQ2/PQ2_logo.png',
    arcana: 'XVI. THE TOWER',
    progress: 85,
    installationSteps: [
      { text: "Скачайте руссификатор для соответствующей версии.",
        link: { url: "https://github.com/OTTYSS/PQ2-Russian-translate/releases", label: "СКАЧАТЬ" }
      },
      { text: "Для эмулятора иструкция дальше. Для Консоли перейди к пункту №5" },
      { text: "Открой свой эмулятор 3DS и щелкни правой кнопкой мыши на игре Persona Q2. Затем открой подменю 'Open' и выбери 'Mods Location'.",
        imageUrl: "/assets/PQ2/2.webp"},
      { text: "В открывшуюся папку скопируйте содержимое архива" },
      { text: "С выключенной консолью, удерживайте кнопку SELECT и включите её, чтобы попасть в меню Luma3DS.В этом меню активируйте опцию 'Enable game patching', а затем нажмите 'Save and exit'.",
        imageUrl: "/assets/PQ2/1.webp"},
       { text: "Извлеките карту памяти из вашей консоли, вставьте её в компьютер и скопируйте папку из архива в папку luma/titles" }
    ]
  },
  {
    id: 'RC',
    title: 'Rain Code',
    genre: '',
    releaseDate: '',
    description: '',
    longDescription: 'Наслаждайтесь совершенно новым мрачным фэнтезийным детективным экшеном от создателей серии Danganronpa!\n\nГород дождя, находящийся под полным контролем мегакорпорации, охвачен бесчисленными неразгаданными тайнами. Лучшие детективы со всего мира, каждый из которых обладает уникальными способностями, должны принять вызов и раскрыть правду. Вместе с Шинигами Юма присоединяется к расследованию в качестве стажера детективного агентства.\n\nСюжет развивается через расследование в "реальном мире", направленное на сбор улик, необходимых для раскрытия дела, а затем на преодоление "Таинственного лабиринта" с помощью собранных улик.\n\nДокопайтесь до истины, в полной мере используя свои улики в Таинственном лабиринте.',
    features: ['Gabriel Volt'],
    imageUrl: '/assets/RC/rcbg.jpg',
    logoUrl: '/assets/RC/RC.png',
    arcana: 'XVIII. THE MOON',
    progress: 45,
    installationSteps: [
      { 
        text: "Откройте папку с установленной игрой в Steam (ПКМ -> Управление -> Просмотреть локальные файлы)."
      },
      { 
        text: "Скачайте архив с переводом",
        link: { url: "https://github.com/OTTYSS/MDARC_RU/releases/download/v.1.1/MDARCRU1.1.zip", label: "СКАЧАТЬ" },
      },
            { text: "Скопируйте содержимое архива по пути /Content/Paks с заменой файлов."
      }
    ]
  },
  {
    id: 'THL',
    title: 'The Hundred Line -Last Defense Academy-',
    genre: '',
    releaseDate: '',
    description: '',
    longDescription: 'Такуми Сумино - обычный подросток, живущий в Токийском жилом комплексе, где каждый день похож на предыдущий и никогда не случается ничего плохого. Все меняется, когда на город нападают жуткие монстры и начинают сеять хаос. Появляется странное существо, называющее себя Сирей, и предлагает Такуми силу, чтобы защитить тех, кто ему дорог... Все, что ему нужно сделать, это ударить себя ножом в грудь!\n\nСледующее, что он помнит, - Такуми оказывается в Академии Последней обороны, школе у черта на куличках, окруженной стеной потустороннего пламени. Он и еще 14 учеников были призваны в Специальное подразделение защиты, команде, которой поручено обеспечивать безопасность школы в течение следующих 100 дней. Чем они готовы пожертвовать, чтобы вернуть свою нормальную жизнь и спасти мир от гротескных школьных захватчиков?\n\nЗанавес поднимается над "100 днями войны и отчаяния"...',
    features: [''],
    imageUrl: '/assets/THL/hlbg.jpg',
    logoUrl: '/assets/THL/hllogo.png',
    arcana: 'XIII. DEATH',
    progress: 95,
    installationSteps: [
      { 
        text: "Откройте папку с установленной игрой в Steam (ПКМ -> Управление -> Просмотреть локальные файлы)."
      },
      { 
        text: "Скачайте архив с переводом",
        link: { url: "https://github.com/OTTYSS/THL_RU/releases/download/rel/THLLDARURU1.2.zip", label: "СКАЧАТЬ" },
      },
            { text: "Скопируйте содержимое архива в открытую папку с заменой файлов."
      }
    ]
  }
];


;
