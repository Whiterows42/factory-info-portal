// Fallback data for when API is not available
const fallbackHeroSlides = [
    {
      id: 1,
      title: 'श्री विघ्नहर सहकारी साखर कारखाना',
      subtitle: 'शेतकऱ्यांच्या सेवेत नेहमी तत्पर',
      description: 'आमचा कारखाना १९८१ पासून शेतकऱ्यांच्या सेवेत कार्यरत आहे',
      image: 'https://shrivighnaharssk.com/wp-content/uploads/2021/06/8-1-1024x549.jpg',
      buttonText: 'अधिक जाणून घ्या',
      buttonLink: '/about'
    },
    {
      id: 2,
      title: "६०+ पुरस्कार प्राप्त",
      subtitle: "राष्ट्रीय आणि राज्य स्तरावरील सन्मान",
      description: "उत्कृष्ट कामगिरीसाठी अनेक पुरस्कार प्राप्त",
      image:
        "https://shrivighnaharssk.com/wp-content/uploads/2021/06/DSC_8314.jpg",
      buttonText: "पुरस्कार पहा",
      buttonLink: "/awards",
    },
  ];

  const fallbackAboutSection = {
    title: 'आमच्याबद्दल',
    description: 'श्री विघ्नहर सहकारी साखर कारखाना हा महाराष्ट्रातील अग्रगण्य साखर कारखाना आहे. आम्ही शेतकऱ्यांच्या कल्याणासाठी काम करतो.',
    features: [
      'उच्च दर्जाची साखर उत्पादन',
      'शेतकऱ्यांना योग्य दर',
      'आधुनिक तंत्रज्ञान',
      'पर्यावरण संरक्षण'
    ],
    image: 'https://shrivighnaharssk.com/wp-content/uploads/2021/06/DSC_8314.jpg'
  };

  const fallbackServices = [
    {
      id: 1,
      title: 'साखर उत्पादन',
      description: 'उच्च दर्जाची साखर उत्पादन',
      icon: 'fa-industry'
    },
    {
      id: 2,
      title: 'शेतकरी मार्गदर्शन',
      description: 'ऊस लागवडीसाठी तांत्रिक मार्गदर्शन',
      icon: 'fa-seedling'
    },
    {
      id: 3,
      title: 'कल्याणकारी योजना',
      description: 'शेतकऱ्यांसाठी विविध कल्याणकारी योजना',
      icon: 'fa-heart'
    },
    {
      id: 4,
      title: 'वेळेवर पेमेंट',
      description: 'ऊसाचे पैसे वेळेवर अदा',
      icon: 'fa-money-bill-wave'
    }
  ];

  const fallbackStatistics = [
    { number: '३९+', label: 'वर्षांचा अनुभव', icon: 'fa-calendar' },
    { number: '२०,०००+', label: 'भागधारक शेतकरी', icon: 'fa-users' },
    { number: '६०+', label: 'पुरस्कार', icon: 'fa-trophy' },
    { number: '१००%', label: 'शेतकरी समाधान', icon: 'fa-thumbs-up' }
  ];

  export { fallbackHeroSlides, fallbackAboutSection, fallbackServices, fallbackStatistics };