/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable max-len */
import {IStore} from '../Components/IApp'

const gameOstData:IStore[][] = [
    [
        {
            id: 1,
            name: 'Minit',
            publisher: 'Devolver Digital',
            description: 'Minit — своеобразное маленькое приключение, длящееся всего одну минуту за раз.',
            image: require('../assets/image/Indie/minit.jpg'),
            audio: require('../assets/audio/Indie/minits.mp3')
        },
        {
            id: 2,
            name: 'Super mear boy',
            publisher: 'Team meat',
            description: 'Super Meat Boy — это крутой, как яйцо, платформер, где вам предстоит сыграть за живой мясной кубик, который пытается спасти свою подружку (сделанную из бинтов) от злого эмбриона в пробирке, одетого в смокинг.',
            image: require('../assets/image/Indie/SMB.jpg'),
            audio: require('../assets/audio/Indie/Smb.mp3')
        },
        {
            id: 3,
            name: 'The Binding of Isaac',
            publisher: 'Nicalis. Inc',
            description: 'The Binding of Isaac — это двухмерный шутер со случайно генерируемыми уровнями и элементами ролевых и роуглайк (Rogue-like) игр. ',
            image: require('../assets/image/Indie/Isaac.jpg'),
            audio: require('../assets/audio/Indie/isaac.mp3')
        },
        {
            id: 4,
            name: 'Katana zero',
            publisher: 'Developer digital',
            description: 'Katana ZERO представляет из себя ураганный неонуарный экшн-платформер с мгновенной смертью. Рубите, уворачивайтесь и управляйте временем, разгадывая секреты собственного прошлого.',
            image: require('../assets/image/Indie/Katana zero.jpg'),
            audio: require('../assets/audio/Indie/Katana ZERO.mp3')
        },
        {
            id: 5,
            name: 'Transistor',
            publisher: 'Supergian games',
            description: 'Transistor — научно-фантастическая игра в жанре Action RPG от создателей Bastion, в которой вам предстоит путешествовать по завораживающему футуристическому городу, защищая свою жизнь при помощи невероятного оружия неизвестного происхождения.',
            image: require('../assets/image/Indie/Transistor.jpg'),
            audio: require('../assets/audio/Indie/transistor.mp3')
        },
        {
            id: 6,
            name: 'Yuppie Psycho',
            publisher: 'Another Indie',
            description: 'Присоединитесь к Брайану Пастернаку в его первый рабочий день в одной из самых больших компаний в мире, Синтракорп. Есть ли у неуверенного, неподготовленного и абсолютно неквалифицированного Пастернака то, что поможет ему найти свое место в иерархии...',
            image: require('../assets/image/Indie/Yuppie Psycho.jpg'),
            audio: require('../assets/audio/Indie/Yuppie Psycho.mp3')
        },
    ],
    [
        {
            id: 1,
            name: 'DOOM Eternal',
            publisher: 'Bethesda Softwork',
            description: 'Армии ада вторглись на Землю. Станьте Палачом Рока и убейте демонов во всех измерениях, чтобы спасти человечество. Они боятся только… тебя.',
            image: require('../assets/image/Shooter/Doom.jpg'),
            audio: require('../assets/audio/Shooter/DOOM.mp3')
        },
        {
            id: 2,
            name: 'Serious Sam HD: The First Encounter',
            publisher: 'Devolver Digital',
            description: 'Первая игра серии. Сюжет повествует о некоем открытии, данном человечеству в виде заложенного в землю Египта артефакта могущественной цивилизации с планеты Сириус',
            image: require('../assets/image/Shooter/Sam.jpg'),
            audio: require('../assets/audio/Shooter/Sam.mp3')
        },
        {
            id: 3,
            name: 'Far Cry® 3',
            publisher: 'Ubisoft',
            description: 'Мультиплатформенная видеоигра в жанре Action в открытом мире, с элементами RPG[2], разработанная Ubisoft Montreal при участии Ubisoft Shanghai и Ubisoft Massive и изданная Ubisoft. Является третьей (не считая дополнений и спин-оффов) игрой из одноимённой серии игр',
            image: require('../assets/image/Shooter/FC3.jpg'),
            audio: require('../assets/audio/Shooter/FC3.mp3')
        },
        {
            id: 4,
            name: 'S.T.A.L.K.E.R.: Shadow of Chernobyl',
            publisher: 'GSC Game World',
            description: 'S.T.A.L.K.E.R.: Тень Чернобыля рассказывает о выживании в Зоне – крайне опасном месте, где нужно бояться не только радиации, аномалий и смертоносных существ, но и других "сталкеров", преследующих собственные цели.',
            image: require('../assets/image/Shooter/Stalker.jpg'),
            audio: require('../assets/audio/Shooter/Stalker.mp3')
        },
        {
            id: 5,
            name: 'Wolfenstein II: The New Colossus',
            publisher: 'Bethesda Softwork',
            description: 'Америка, 1961 г. Генерал Череп убит, но миром правят нацисты. Вы Би Джей Бласковиц, боец сопротивления и последняя надежда человечества. Только вы можете раздуть пламя второй Американской революции.',
            image: require('../assets/image/Shooter/Wolfenstein2.jpg'),
            audio: require('../assets/audio/Shooter/Wolfenstein2 .mp3')
        },
        {
            id: 6,
            name: 'Borderlands 3',
            publisher: '2K',
            description: 'Америка, 1961 г. Генерал Череп убит, но миром правят нацисты. Вы Би Джей Бласковиц, боец сопротивления и последняя надежда человечества. Только вы можете раздуть пламя второй Американской революции.',
            image: require('../assets/image/Shooter/Borderlands3.jpg'),
            audio: require('../assets/audio/Shooter/Borderlands3.mp3')
        },
    ],
    [
        {
            id: 1,
            name: 'The Elder Scrolls III: Morrowind',
            publisher: 'Bethesda Softwork',
            description: 'Эпическая, нелинейная одиночная RPG Morrowind позволяет вам создать и играть любым персонажем, которого вы только сможете придумать. Вы можете идти по главной сюжетной линии и найти источник пагубной болезни, отравляющей землю или отправиться в собственное путешествие, изучая удивительные локации и совершенствуя образ своего персонажа его поступками в игре.',
            image: require('../assets/image/RPG/TES3.jpg'),
            audio: require('../assets/audio/RPG/TES3.mp3')
        },
        {
            id: 2,
            name: 'Gothic II',
            publisher: 'THQ Nordic',
            description: 'Вы уничтожили магический барьер и освободили заключённых Долины Рудников. Вырвавшиеся на свободу бывшие заключённые стали терроризировать окрестности города Хоринис. У городского ополчения слишком мало сил, чтобы бороться с преступниками за пределами города. Но самое страшное то, что начали ходить слухи о возвращении мифических драконов.',
            image: require('../assets/image/RPG/Gothic2.jpg'),
            audio: require('../assets/audio/RPG/Gothic2.mp3')
        },
        {
            id: 3,
            name: 'Divinity: Original Sin',
            publisher: 'Larian Studious',
            description: 'Пошаговая партийная компьютерная ролевая игра, приквел Divine Divinity, с однопользовательским и многопользовательским режимами игры, разработанная компанией Larian Studios на средства, полученные с пожертвований с Kickstarter',
            image: require('../assets/image/RPG/Divinity.jpg'),
            audio: require('../assets/audio/RPG/Divinity.mp3')
        },
        {
            id: 4,
            name: 'The Witcher® 3: Wild Hunt',
            publisher: 'CD Projects Red',
            description: 'Когда в Северных королевствах бушует война, вы заключаете величайший контракт своей жизни — отыскать Дитя предназначения, живое оружие, которое может изменить облик мира.',
            image: require('../assets/image/RPG/The witcher 3.jpg'),
            audio: require('../assets/audio/RPG/The witcher 3.mp3')
        },
        {
            id: 5,
            name: 'Greedfall',
            publisher: 'Focus Home Interactive',
            description: 'Исследуйте новый таинственный мир, где царит могущественная магия и водятся невероятные существа.',
            image: require('../assets/image/RPG/Greedfall.jpg'),
            audio: require('../assets/audio/RPG/Greedfall.mp3')
        },
        {
            id: 6,
            name: 'Dragon Age II',
            publisher: 'Electronic Arts',
            description: 'Погрузитесь в продолжение лучшей игры 2009 года от создателей серии Mass Effect, с восторгом принятой критиками. Поведайте десятилетнюю историю своего защитника, путешествуя по миру магии в компании верных спутников.',
            image: require('../assets/image/RPG/DA2.jpg'),
            audio: require('../assets/audio/RPG/DA2.mp3')
        },
    ],
    [
        {
            id: 1,
            name: 'Age of Wonders II: The Wizards Throne',
            publisher: 'Paradox Interactive',
            description: 'Вторая игра из серии пошаговых стратегий Age of Wonders.',
            image: require('../assets/image/Strategie/AOW2.jpg'),
            audio: require('../assets/audio/Strategie/AOW2.mp3')
        },
        {
            id: 2,
            name: 'Age of Empires II',
            publisher: 'XBox Game Studios',
            description: 'Является второй игрой из серии Age of Empires. Была выпущена в 1999 году, а год спустя увидело свет дополнение The Conquerors, содержащее новые сюжетные линии, игровые цивилизации и усовершенствованный игровой процесс',
            image: require('../assets/image/Strategie/AOE2.jpg'),
            audio: require('../assets/audio/Strategie/AOE2.mp3')
        },
        {
            id: 3,
            name: 'Crusader Kings II',
            publisher: 'Paradox Interactive',
            description: 'Глобальная стратегия в реальном времени (с тактической паузой), проект от студии Paradox Interactive',
            image: require('../assets/image/Strategie/CK2.jpg'),
            audio: require('../assets/audio/Strategie/CK2.mp3')
        },
        {
            id: 4,
            name: 'Sid Meier’s Civilization® VI',
            publisher: '2K',
            description: 'Изначально созданная легендарным дизайнером Сидом Мейером, Civilization представляет собой пошаговую стратегию, в которой игроку предлагается построить империю, способную выдержать испытание временем.',
            image: require('../assets/image/Strategie/Civilization VI.jpg'),
            audio: require('../assets/audio/Strategie/Civilization VI.mp3')
        },
        {
            id: 5,
            name: 'Total War™: ROME II ',
            publisher: 'Sega',
            description: 'Покоривший сердца игроков со всего мира сериал Total War возвращается в Рим и задает новый стандарт качества для стратегических игр. Встаньте во главе первой в мире сверхдержавы и возьмите под свое командование самую мощную военную машину древнего мира.',
            image: require('../assets/image/Strategie/TW2.jpg'),
            audio: require('../assets/audio/Strategie/TW2.mp3')
        },
        {
            id: 6,
            name: 'Heroes® of Might & Magic® III',
            publisher: 'Ubisoft Entertaiment',
            description: 'Компьютерная игра в жанре пошаговой стратегии с элементами RPG, третья часть в серии Heroes of Might and Magic',
            image: require('../assets/image/Strategie/Heroes3.jpg'),
            audio: require('../assets/audio/Strategie/Heroes3.mp3')
        },
    ],
    [
        {
            id: 1,
            name: 'The Fruit of Grisaia',
            publisher: 'Fronwing USA',
            description: 'Японская игра-визуальный роман в жанре эроге, выпущенная компанией Front Wing.',
            image: require('../assets/image/Novels/Grisaya.jpg'),
            audio: require('../assets/audio/Novels/Grisaya.mp3')
        },
        {
            id: 2,
            name: 'Necrobarista',
            publisher: 'Route 59',
            description: 'Это игра в жанре визуальная новелла, разрабатываемая Route 59 для платформы PC',
            image: require('../assets/image/Novels/Necrobarista.jpg'),
            audio: require('../assets/audio/Novels/Necrobarista.mp3')
        },
        {
            id: 3,
            name: 'Danganronpa: Trigger Happy Havoc',
            publisher: 'Spike Chunsoft',
            description: 'Игра в жанре визуальный роман, разработанная и опубликованная компанией Spike Chunsoft, позже была адаптирована в аниме и мангу',
            image: require('../assets/image/Novels/Danganronpa.jpg'),
            audio: require('../assets/audio/Novels/Danganronpa.mp3')
        },
        {
            id: 4,
            name: 'STEINS;GATE',
            publisher: 'Spike Chunksoft',
            description: 'Японский визуальный роман, разработанный компаниями 5pb. и Nitroplus. Является второй игрой в серии Science Adventure. Действие сюжета разворачивается спустя год после событий, описанных в игре Chaos;Head',
            image: require('../assets/image/Novels/Steins gate.jpg'),
            audio: require('../assets/audio/Novels/Steins Gate.mp3')
        },
        {
            id: 5,
            name: 'Zero Escape: The Nonary Games ',
            publisher: 'Spike Chunksoft',
            description: 'Это игра в жанре визуальная новелла и логическая, разрабатываемая Spike Chunsoft Co., Ltd. для платформы PC',
            image: require('../assets/image/Novels/999.jpg'),
            audio: require('../assets/audio/Novels/999.mp3')
        },
        {
            id: 6,
            name: 'AI: The Somnium Files',
            publisher: 'Spike Chunksoft',
            description: 'Это приключенческая видеоигра, разработанная и изданная Spike Chunsoft, которая выпущена для Microsoft Windows, PlayStation 4 и Nintendo Switch в сентябре 2019 года',
            image: require('../assets/image/Novels/AI.jpg'),
            audio: require('../assets/audio/Novels/AI.mp3')
        },
    ],
    [
        {
            id: 1,
            name: 'Ori and the Will of the Wisps',
            publisher: 'Xbox Game Studios',
            description: 'Маленький дух Ори не понаслышке знаком со всевозможными опасностями. Его юная подруга, сова Ку, очутилась в беде после злополучного полёта. Ори предстоит воссоединить свою семью, спасти искажённый край и узнать, что уготовано ему судьбой, — а одной храбрости для этого мало.',
            image: require('../assets/image/Platformer/Ori.jpg'),
            audio: require('../assets/audio/Platformer/Ori.mp3')
        },
        {
            id: 2,
            name: 'Hollow Knight',
            publisher: 'Team Cherry',
            description: 'Hollow Knight – это эпическое приключение в огромном разрушенном королевстве, полном насекомых и героев. Исследуйте извилистые пещеры, сражайтесь с порчеными тварями и заводите дружбу со странными жуками – все это в классической двухмерной ручной рисовке.',
            image: require('../assets/image/Platformer/Hollow knight.jpg'),
            audio: require('../assets/audio/Platformer/Hollow knght.mp3')
        },
        {
            id: 3,
            name: 'Bloodstained: Ritual of the Night',
            publisher: '505 Games',
            description: 'Игра от геймдизайнера и создателя игры Castlevania: Symphony of the Night Кодзи Игараси',
            image: require('../assets/image/Platformer/bloodstained.jpg'),
            audio: require('../assets/audio/Platformer/Bloodstained.mp3')
        },
        {
            id: 4,
            name: 'Chasm',
            publisher: 'Bit Kid',
            description: 'Это видеоигра Metroidvania, разработанная и изданная компанией Maryland, американская студия Bit Kid, Inc., США',
            image: require('../assets/image/Platformer/chasm.jpg'),
            audio: require('../assets/audio/Platformer/Chasm.mp3')
        },
        {
            id: 5,
            name: 'They Bleed Pixels',
            publisher: 'Spooky Squid Games Inc',
            description: 'They Bleed Pixels — это дьявольски сложный экшн-платформер, вдохновлённый произведениями Г.Ф. Лавкрафта и другими классиками в жанре ужаса.',
            image: require('../assets/image/Platformer/They bleed pixels.jpg'),
            audio: require('../assets/audio/Platformer/They bleed pixels.mp3')
        },
        {
            id: 6,
            name: 'Cuphead',
            publisher: 'Studio MDHR Entertaiment Inc',
            description: 'Cuphead – это в прямом смысле слова "классический" платформер. Классический, потому что все в нем выдержано в духе 1930-х: от графики, кажется, вышедшей из-под пера самого Уолта Диснея, до акварельных фонов и джазового музыкального сопровождения.',
            image: require('../assets/image/Platformer/cuphead.jpg'),
            audio: require('../assets/audio/Platformer/Cuphead.mp3')
        },
    ]
]
export default gameOstData