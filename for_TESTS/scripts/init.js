// этот объект технический, нужен только для инициализации БД.
// (по сути после того как разберусь с нодой, наверное перепишу в итоге инициализацию,
// но пока так. чтоб вы могли уже работать)
// По сути в объекте БД разные свойства только те,
// которые описаны в этом техническом объекте. Используем его для заполнения.
;let newSongs = [
	{
		performerName: "Porter Robinson",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "Blink182",
		info: "ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ",
		songName: "Anthem Part 2",
		link: "audio/defaultLists/01_wakeUp/02_Blink182 – Anthem Part 2.mp3"
	},
	{
		performerName: "The No No Song",
		info: null,
		songName: "The Sounds",
		link: "audio/defaultLists/01_wakeUp/03_The No No Song - The Sounds.mp3"
	},
	{
		performerName: "American Authors",
		info: null,
		songName: "Best Day Of My Life",
		link: "audio/defaultLists/04_American Authors - Best Day Of My Life.mp3"
	},
	{
		performerName: "Trapt",
		info: null,
		songName: "Get Up",
		link: "audio/defaultLists/05_Trapt - Get Up.mp3"
	},
	{
		performerName: "Pумцум",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "vsfbfb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "asfvqbbeb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "Peveqbqerb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "qerbqerbqeb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "eqrbqebqeb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "erbqebqeb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "rnernrnrn",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "rtnrwtntnrn",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "ekebndvvw",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "ekn",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "ekwervwbr[bn",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "wwewegbbfe",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "adfvmlkb'",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "qjf[wpvn ",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "wokgwbnb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "e;fbenbe[nb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "ebebensfdvd",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "dfjeorbn ",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "vsvswvbwb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "vswsdmvsflvmsb",
		info: null,
		songName: "Lionheartedfwevgwegweg",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "vswsdmvsfdfgnnlvmsb",
		info: null,
		songName: "Lionhearted dsvwv",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "Porter Robinsonsdb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "Blink182dfbb",
		info: "ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ",
		songName: "Anthem Part 2x",
		link: "audio/defaultLists/01_wakeUp/02_Blink182 – Anthem Part 2.mp3"
	},
	{
		performerName: "The No No Song",
		info: null,
		songName: "The Soundvfbs",
		link: "audio/defaultLists/01_wakeUp/03_The No No Song - The Sounds.mp3"
	},
	{
		performerName: "American Authordfbs",
		info: null,
		songName: "Best Day Of My Life",
		link: "audio/defaultLists/04_American Authors - Best Day Of My Life.mp3"
	},
	{
		performerName: "Tradfbpt",
		info: null,
		songName: "Get Up",
		link: "audio/defaultLists/05_Trapt - Get Up.mp3"
	},
	{
		performerName: "Pуdfbмцум",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "vsfdfbbfb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "asfvqdfbdfbbbeb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "Pevedfbdfbqbqerb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "qerbqecx vcvrbqeb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "eqrbqebedefqeb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "erbnhmqebqeb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "rnegngrnrnrn",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "rtnrwntngttntnrn",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "ekebndfgbngnvvw",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "egfngmnkn",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "ekwervwbfgnfr[bn",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "wwewxvsbegbbfe",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "adfvdfbdnmlkb'",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "qjf[dndnwpvn ",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "wokgwcvbvbbnb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "e;fbendndndbe[nb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "ebecvnnbensfdvd",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "dfjefhhorbn ",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "vsvcv bcswvbwb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "vswsdmvdndnmsflvmsb",
		info: null,
		songName: "Lionheartedfwevgwegweg",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "vswscv v dmvsfdfgnnlvmsb",
		info: null,
		songName: "Lionhearted dsvwv",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "Portedfbdfbsdfbr Robinsonsdb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "Blindfbdbk182dfbb",
		info: "ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ",
		songName: "Anthem Part 2x",
		link: "audio/defaultLists/01_wakeUp/02_Blink182 – Anthem Part 2.mp3"
	},
	{
		performerName: "The dfbNo No Song",
		info: null,
		songName: "The Soundvfbs",
		link: "audio/defaultLists/01_wakeUp/03_The No No Song - The Sounds.mp3"
	},
	{
		performerName: "American Authordfbs",
		info: null,
		songName: "Best Day Of My Life",
		link: "audio/defaultLists/04_American Authors - Best Day Of My Life.mp3"
	},
	{
		performerName: "Trdfbadfbpt",
		info: null,
		songName: "Get Up",
		link: "audio/defaultLists/05_Trapt - Get Up.mp3"
	},
	{
		performerName: "Pуdcbcfbмцум",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "vsfbvbddfbbfb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "asfvqfbbddfbdfbbbeb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "Pevedfbfbvvdfbqbqerb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "qerb v qecx vcvrbqeb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "eqrbqdfbdebedefqeb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "erbnhmqdfbdebqeb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "rnegngrndfbdrnrn",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "rtnrwntndfbgttntnrn",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "ekebndfgbdfbdbngnvvw",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "egfbvbngmnkn",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "ekwecvbbrvwbfgnfr[bn",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "wwewxvsbegdfbdfbbbfe",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "adfvdfbdndfbdbmlkb'",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "qjf[dndndfbdfwpvn ",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "wokgwcvdfbdfbvbbnb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "e;fbenvcxbxbdndndbe[nb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "ebecvnnbxcbbensfdvd",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "dfjefhcbcbhorbn ",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "vsvcvcbbfsdb bcswvbwb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "vswsddfbdfbmvdndnmsflvmsb",
		info: null,
		songName: "Lionheartedfwevgwegweg",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "vswscv v cvbvbdmvsfdfgnnlvmsb",
		info: null,
		songName: "Lionhearted dsvwv",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "Portedfbdfbcv xsdfbr Robinsonsdb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "Blinxcdfbdbk182dfbb",
		info: "ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ТЕКСТА ОЧЕНЬ МНОГО ",
		songName: "Anthem Part 2x",
		link: "audio/defaultLists/01_wakeUp/02_Blink182 – Anthem Part 2.mp3"
	},
	{
		performerName: "The df dfbNo No Song",
		info: null,
		songName: "The Soundvfbs",
		link: "audio/defaultLists/01_wakeUp/03_The No No Song - The Sounds.mp3"
	},
	{
		performerName: "Americadfbdn Authordfbs",
		info: null,
		songName: "Best Day Of My Life",
		link: "audio/defaultLists/04_American Authors - Best Day Of My Life.mp3"
	},
	{
		performerName: "Trdfbdfbadfbpt",
		info: null,
		songName: "Get Up",
		link: "audio/defaultLists/05_Trapt - Get Up.mp3"
	},
	{
		performerName: "Pуdcdfbdbcfbмцум",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "vsfbvbdfbddfbbfb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "asfvqfdfbbbddfbdfbbbeb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "Pevedfbfbvdfb vdfbqbqerb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "qerb xcvv qecx vcvrbqeb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "eqrbqddfbfbdebedefqeb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "erbnhmqddfbfbdebqeb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "rnegngrnddcfbdfbdrnrn",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "rtnrwntdfbndfbgttntnrn",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "ekebndfgbdf bdfbdbngnvvw",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "egfbvbncv gmnkn",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "ekwecvbbdfbrvwbfgnfr[bn",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "wwewxvsbdfbegdfbdfbbbfe",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "adfvdfbdfbdndfbdbmlkb'",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "qjf[dndnddfbbfbdfwpvn ",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "wokgwcvddfbfbdfbvbbnb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "e;fbenvcxdfbbxbdndndbe[nb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "ebecvnnbxcbdfbbensfdvd",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "dfjefhcbcbdfbchorbn ",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "vsvcvcbbfvbbsdb bcswvbwb",
		info: null,
		songName: "Lionhearted (ft. Urban Cone)",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "vswsddfbcvbdfbmvdndnmsflvmsb",
		info: null,
		songName: "Lionheartedfwevgwegweg",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	},
	{
		performerName: "vswscv v cvbcvbvbdmvsfdfgnnlvmsb",
		info: null,
		songName: "Lionhearted dsvwv",
		link: "audio/defaultLists/01_wakeUp/01_Porter Robinson – Lionhearted (ft. Urban Cone).mp3"
	}
];

// создать в локале запись БД треков
creatMusicDataBase(newSongs);
// создать в локале запись плейлиста
creatPlayList(newSongs);


// служебная функция. Запускает newToServer, который может создать запись в локале
// только если записи по этому ключу там еще нет.
// newToServer возвращает true/false в зависимости от результата своей работы
// в startCreat return-ом возвращает её ответ
function startCreat(key) {return newToServer(key, 'Временно пуст')}


function creatMusicDataBase(trackArray) {
	// в IF-е проверяется ответ startCreat. если true (т.е. объекта не было и он успешно создан),
	// то начинаем заполнять. Иначе консолим, что объект уже есть
	if (startCreat('musicDataBase')) {
		let musicDataBase = {};

		// запускаем перебор служебного массива
		for (let i = 0; i < trackArray.length; i++) {
			// может возникнуть ситуация когда в БД пишем несколько треков одного и того же исполнителя
			// если в musicDataBase уже есть такой исполнитель
			// то нам нужно его не переписать, а дополнить
			if (trackArray[i].performerName in musicDataBase) {
				// по логтке (договоренности) я знаю, что info либо null, либо текст
				// если в объекте исполнителя в БД поле info еще null, а в служебном массиве текст
				if (!musicDataBase[trackArray[i].performerName].info && trackArray[i].info) {
					// запишем в БД info об изполнителе
					musicDataBase[trackArray[i].performerName].info = trackArray[i].info;
				}
				// по логике я знаю, что треки в служебном массиве не будут повторяться,
				// а значит по этому исполнителю добавляю объект трека через конструктор
				musicDataBase[trackArray[i].performerName].audio[trackArray[i].songName] = new CreatNewTrack(trackArray, i);
			// а если такого исполнителя нет, создаем новый объект исполнителя в БД через конструктор
			} else {
				musicDataBase[trackArray[i].performerName] = new CreatNewPerformer(trackArray, i);
			}
		}
		// получившуюся БД в JSON
		let musicDataBaseJSON = JSON.stringify(musicDataBase);
		// и на "сервак" переписать пустую БД
		overwriteToServer('musicDataBase', musicDataBaseJSON);

	} else {
		console.log('Объект musicDataBase присутствует, запуск инициализации не требуется');
	}


	// ну что происходит в конструкторах должно быть понятно...
	// данные тянем из глобальной области видимости из служебного массива
	function CreatNewPerformer(trackArray, index) {
		this.info = trackArray[index].info;
		this.defaultInfo = "Извините, но статья по данному исполнителю временно не доступна.";
		this.audio = {};
		this.audio[trackArray[index].songName] = new CreatNewTrack(trackArray, index);
	}

	function CreatNewTrack (trackArray, index) {
		this["link"] = trackArray[index].link;
		function randomInteger(min, max) {
			var rand = min + Math.random() * (max + 1 - min);
			rand = Math.floor(rand);
			return rand;
		}
		let random = randomInteger(0,100);
		this["counter"] = random;
	}
}


function creatPlayList(trackArray) {
	// в IF-е проверяется ответ startCreat. если true (т.е. объекта не было и он успешно создан),
	// то начинаем заполнять. Иначе консолим, что объект уже есть
	if (startCreat('playlist')) {
		// создаем пустой массив и заполняем его через конструктор
		// каждому элементу массива присваиваем новый объект
		let playlist = [];
		for (let i = 0; i < trackArray.length; i++) {
			playlist[i] = new CreatNewSong(trackArray, i);
		}

		let playlistJSON = JSON.stringify(playlist);
		overwriteToServer('playlist', playlistJSON);
	} else {
		console.log('Объект playlist присутствует, запуск инициализации не требуется');
	}

	function CreatNewSong(trackArray, index) {
		// данные тянем из глобальной области видимости из служебного массива
		this.performer = trackArray[index].performerName;
		this.soundName = trackArray[index].songName;
	}
}

