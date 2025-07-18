// Fallback data for when API is not available
const fallbackHeroSlides = [
  {
      id: 1,
      title: "९०+ पुरस्कार प्राप्त",
      subtitle: "राष्ट्रीय आणि राज्य स्तरावरील सन्मान",
      description: "उत्कृष्ट कामगिरीसाठी अनेक पुरस्कार प्राप्त",
      image: "https://cdn.pixabay.com/photo/2016/09/02/18/38/factory-1639990_960_720.jpg",
      buttonText: "पुरस्कार पहा",
      buttonLink: "/awards",
    },


    {
      id: 2,
      title: 'श्री विठ्ठल सहकारी साखर कारखाना ',
      subtitle: 'शेतकऱ्यांच्या सेवेत नेहमी तत्पर',
      description: 'आमचा कारखाना १९७४ पासून शेतकऱ्यांच्या सेवेत कार्यरत आहे',
      image: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      buttonText: 'अधिक जाणून घ्या',
      buttonLink: '/about'
    },
    {
      id: 3,
      title: 'पर्यावरण संरक्षण',
      subtitle: 'पर्यावरण दिवस',
      description: 'आमच्या कारखान्यात पर्यावरण स्नेही दिवस व सामाजिक व सांस्कृतिक दिवस साजरे केले जातात.',
      image: 'https://media.istockphoto.com/id/508655486/vector/hands-earth.jpg?s=2048x2048&w=is&k=20&c=gzO27kIqlv19uT-W2aTTZUSbm3j4YbyHsDPzL-kIMT0=',
      buttonText: 'माहितीसाठी इथे जावा.',
      buttonLink: '/award'


    }
    
  ];

  const fallbackAboutSection = {
    title: 'आमच्याबद्दल',
    description: 'श्री विठ्ठल सहकारी साखर कारखाना हा महाराष्ट्रातील अग्रगण्य साखर कारखाना आहे.',
    features: [

      'जलद सेवा ',
      'उच्च दर्जाची साखर उत्पादन',
      'आधुनिक तंत्रज्ञान',
      'शेतकर्यांच्या ऊसाला सर्वाधिक दर',
      'पर्यावरण संरक्षण'
      
    ],
    image: 'https://media.istockphoto.com/id/683503676/photo/thermal-power-plant.jpg?s=2048x2048&w=is&k=20&c=Aknr_Vh63v-_yA95_G1ZBKVUsioDHV-TCt9mogAYSL0='
  };

  const fallbackServices = [
    {
      id: 1,
      title: 'वेळेवर पेमेंट',
      description: 'ऊसाचे पैसे वेळेवर अदा',
      icon: 'fa-money-bill-wave'
    },
    {
      id: 2,
      title: 'साखर उत्पादन',
      description: 'उच्च दर्जाची साखर उत्पादन',
      icon: 'fa-industry'
    },
    {
      id: 3,
      title: 'कल्याणकारी योजना',
      description: 'शेतकऱ्यांसाठी विविध कल्याणकारी योजना',
      icon: 'fa-heart'
    },
    {
      id: 4,
      title: 'शेतकरी मार्गदर्शन',
      description: 'ऊस लागवडीसाठी तांत्रिक मार्गदर्शन',
      icon: 'fa-seedling'
    }
  ];

  const fallbackStatistics = [
    { id:1, number: '50+', label: 'वर्षांचा अनुभव', icon: 'fa-calendar' },
    { id:2, number: '२०,०००+', label: 'भागधारक शेतकरी', icon: 'fa-users' },
    { id:3, number: '६०+', label: 'पुरस्कार', icon: 'fa-trophy' },
    { id:4, number: '१००%', label: 'शेतकरी समाधान', icon: 'fa-thumbs-up' }
  ];

  export { fallbackHeroSlides, fallbackAboutSection, fallbackServices, fallbackStatistics };