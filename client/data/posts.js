const posts = [
   {
      "code":"132e03d7",
      "caption":"NUS School of Computing",
      "stars":5,
      "id":"d1ae2135",
      "display_src":"http://oi66.tinypic.com/14136uw.jpg"
   },
   {
      "code":"1b34048c",
      "caption":"NUS Faculty of Engineering",
      "stars":4.5,
      "id":"0e7693ae",
      "display_src":"http://i63.tinypic.com/34zlva1.jpg"
   },
   {
      "code":"0b9402db",
      "caption":"NUS Faculty of Science",
      "stars":4.5,
      "id":"671731a8",
      "display_src":"http://i67.tinypic.com/b85rva.jpg"
   },
   {
      "code":"0f4a036d",
      "caption":"NUS Business School",
      "stars":5,
      "id":"08d36e38",
      "display_src":"http://oi67.tinypic.com/2cz6lia.jpg"
   },
   {
      "code":"0ea0033f",
      "caption":"NUS School of Medicine",
      "stars":5,
      "id":"58362a8d",
      "display_src":"http://oi65.tinypic.com/mk7m6h.jpg"
   },
   {
      "code":"027e0148",
      "caption":"NUS Faculty of Art and Social Science",
      "stars":4.5,
      "id":"fc35d654",
      "display_src":"http://oi68.tinypic.com/sl5rux.jpg"
   },
   {
      "code":"02800145",
      "caption":"NUS Faculty of Law",
      "stars":5,
      "id":"0c0b552f",
      "display_src":"http://oi63.tinypic.com/2z9k75d.jpg"
   },
   {
      "code":"089a027b",
      "caption":"NUS School of Design and Environment'",
      "stars":4.5,
      "id":"cd4f5a30",
      "display_src":"http://www.sde.nus.edu.sg/temp-4/DSC_5878.JPG"
   },
   {
      "code":"2d5b059f",
      "caption":"Kent Ridge Hall",
      "stars":5,
      "id":"ad5d9ab2",
      "display_src":"https://upload.wikimedia.org/wikipedia/commons/8/8f/NUS%2C_Kent_Ridge_Hall%2C_Nov_06.JPG"
   },
   {
      "code":"1f0204ac",
      "caption":"Temasek Hall",
      "stars":4.5,
      "id":"70730e36",
      "display_src":"https://upload.wikimedia.org/wikipedia/commons/f/fd/Main_entrance_to_Temasek_Hall%2C_NUS.JPG"
   },
   {
      "code":"4e62076a",
      "caption":"King Edward VII Hall",
      "stars":4.5,
      "id":"d1298606",
      "display_src":"http://www.kevii.nus.edu.sg/images/about-kevii/KEVII.jpg"
   },
   {
      "code":"1e9d04a5",
      "caption":"Raffles Hall",
      "stars":4.5,
      "id":"f908ed1b",
      "display_src":"https://upload.wikimedia.org/wikipedia/commons/8/85/Dining_Hall_of_Raffles_Hall%2C_National_University_of_Singapore%2C_at_night_-_20070116.jpg"
   },
   {
      "code":"1a4c044a",
      "caption":"Eusoff Hall",
      "stars":4.5,
      "id":"574045f2",
      "display_src":"https://c1.staticflickr.com/1/55/187984465_2539eba969_b.jpg"
   },
   {
      "code":"1a180448",
      "caption":"Shears Hall",
      "stars":4.5,
      "id":"c989431e",
      "display_src":"https://userscontent2.emaze.com/images/e5cc520a-621b-4022-ba0e-b158fe6ae8e3/0c51c23c-b245-4c5a-871c-4fd17ec7b420.JPG"
   },
   {
      "code":"699c08aa",
      "caption":"Prince George's Park Residence",
      "stars":5,
      "id":"32e69eed",
      "display_src":"https://c1.staticflickr.com/8/7019/6684097143_d80d4f99eb_b.jpg"
   },
   {
      "code":"b2bf0b96",
      "caption":"Ridge View Residential College",
      "stars":4.5,
      "id":"4cbc33e6",
      "display_src":"https://upload.wikimedia.org/wikipedia/commons/4/46/NUS%2C_Ridge_View_Residences_4%2C_Nov_06.JPG"
   },
   {
      "code":"2da8058a",
      "caption":"Yale-NUS College",
      "stars":5,
      "id":"a097bf5b",
      "display_src":"https://www.yale-nus.edu.sg/wp-content/uploads/2015/07/1-Courtyard-1024x732.png"
   },
   {
      "code":"5c9d0804",
      "caption":"Duke-NUS Medical School",
      "stars":5,
      "id":"18a34cec",
      "display_src":"https://www.duke-nus.edu.sg/sites/default/files/About/DukeNUSCampus.jpg"
   },
   {
      "code":"197e0448",
      "caption":"The Terrace",
      "stars":5,
      "id":"30e9cf69",
      "display_src":"http://www.gridline.sg/wp-content/uploads/2016/04/LHL-Canteen-Terrace-NUS_01.jpg"
   },
   {
      "code":"0d6e02f9",
      "caption":"The Deck",
      "stars":4.5,
      "id":"02711a47",
      "display_src":"https://s-media-cache-ak0.pinimg.com/originals/d8/eb/c1/d8ebc1a7c3adc5a56d05766ac19b44c5.jpg"
   },
   {
      "code":"339e05ac",
      "caption":"Frontier Phase 1",
      "stars":5,
      "id":"9d061e1c",
      "display_src":"http://www.nus.edu.sg/oca/images/Retail/Frontier-Phase1.JPG"
   },
   {
      "code":"180303f7",
      "caption":"Techno Edge",
      "stars":4.5,
      "id":"e554d066",
      "display_src":"https://upload.wikimedia.org/wikipedia/commons/9/9f/NUS%2C_Engineering%2C_The_Techno_Edge%2C_Nov_06.JPG"
   },
   {
      "code":"2781055b",
      "caption":"Central Square",
      "stars":4.5,
      "id":"faf7dcd1",
      "display_src":"http://www.nus.edu.sg/oca/images/Retail/Central%20Square.JPG"
   },
   {
      "code":"307905d5",
      "caption":"Pines Food Court",
      "stars":5,
      "id":"94d199e9",
      "display_src":"http://www.nus.edu.sg/oca/images/Retail/Pines-PGPR.JPG"
   },
   {
      "code":"1595040c",
      "caption":"Foodclique",
      "stars":5,
      "id":"2be9ce37",
      "display_src":"http://www.nus.edu.sg/oca/images/Retail/Foodclique%20PGPR.JPG"
   },
   {
      "code":"1b320493",
      "caption":"Supersnacks",
      "stars":5,
      "id":"a45e29ab",
      "display_src":"https://blog.nus.edu.sg/reslife/files/2015/09/1-1x4jz03.jpg"
   },
   {
      "code":"10750376",
      "caption":"McDonalds",
      "stars":4.5,
      "id":"f29e5e68",
      "display_src":"https://pathwazeproduction.s3.amazonaws.com/media/custom_storages.MediaStorage/step_image/nusmcd10.JPG"
   }
];


export default posts;
