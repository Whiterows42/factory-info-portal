export const contactData = {
  basic: {
    phone: '७७९६२८८५८२',
    email: 'moteajit10@gmail.com',
    address: 'श्री विघ्नहर सहकारी साखर कारखाना लि., जुन्नर / आंबेगाव, जिल्हा पुणे, महाराष्ट्र'
  },

  officeHours: {
    weekdays: { open: 'सकाळी ९:००', close: 'संध्याकाळी ६:००' },
    saturday: { open: 'सकाळी ९:००', close: 'दुपारी २:००' },
    sunday: 'बंद',
    holidays: 'राष्ट्रीय सुट्ट्यांमध्ये बंद'
  },

  departments: [
    {
      name: 'प्रशासन विभाग',
      phone: '०२१३२ २४६००१',
      email: 'admin@vighnaharsugar.com',
      head: 'श्री. संजय देशमुख',
      services: ['सामान्य चौकशी', 'कागदपत्रे', 'प्रमाणपत्रे']
    },
    {
      name: 'शेती विभाग',
      phone: '०२१३२ २४६००२',
      email: 'agriculture@vighnaharsugar.com',
      head: 'श्री. महेश कुलकर्णी',
      services: ['ऊस लागवड सल्ला', 'बीज वितरण', 'तांत्रिक मार्गदर्शन']
    },
    {
      name: 'वित्त विभाग',
      phone: '०२१३२ २४६००३',
      email: 'finance@vighnaharsugar.com',
      head: 'श्री. प्रकाश गायकवाड',
      services: ['पेमेंट', 'हिशेब', 'ऑडिट']
    },
    {
      name: 'तांत्रिक विभाग',
      phone: '०२१३२ २४६००४',
      email: 'technical@vighnaharsugar.com',
      head: 'श्री. अजय मोरे',
      services: ['यंत्रसामग्री', 'दुरुस्ती', 'देखभाल']
    }
  ],

  services: [
    {
      name: 'निःशुल्क सल्ला उपलब्ध',
      description: 'शेतकऱ्यांसाठी निःशुल्क तांत्रिक सल्ला',
      icon: 'fa-check-circle'
    },
    {
      name: 'शेतकरी सेवा केंद्र',
      description: 'सर्व शेतकरी सेवा एकाच ठिकाणी',
      icon: 'fa-check-circle'
    },
    {
      name: 'तांत्रिक मार्गदर्शन',
      description: 'आधुनिक शेती पद्धतींचे प्रशिक्षण',
      icon: 'fa-check-circle'
    },
    {
      name: '२४/७ आपत्कालीन सेवा',
      description: 'गरजेच्या वेळी तत्काळ मदत',
      icon: 'fa-check-circle'
    }
  ],

  location: {
    coordinates: { lat: 19.2183, lng: 73.8478 },
    landmark: 'जुन्नर बस स्टॅंडपासून ५ कि.मी.',
    directions: [
      'मुंबई-नाशिक महामार्गावरून जुन्नर',
      'जुन्नर शहरातून आंबेगाव दिशेने',
      'कारखाना मुख्य रस्त्यावरच स्थित'
    ]
  },

  socialMedia: [
    { platform: 'Facebook', url: '#', icon: 'fab fa-facebook' },
    { platform: 'Twitter', url: '#', icon: 'fab fa-twitter' },
    { platform: 'Instagram', url: '#', icon: 'fab fa-instagram' },
    { platform: 'YouTube', url: '#', icon: 'fab fa-youtube' }
  ],

  statistics: [
    {
      number: "२४/७",
      label: "आपत्कालीन सेवा",
      icon: "fa-phone"
    },
    {
      number: "२४ तास",
      label: "प्रतिसाद वेळ",
      icon: "fa-clock"
    },
    {
      number: "२०,०००+",
      label: "संतुष्ट ग्राहक",
      icon: "fa-users"
    },
    {
      number: "१००%",
      label: "ग्राहक समाधान",
      icon: "fa-headset"
    }
  ]
}; 