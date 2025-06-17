// Fallback data for when API is not available
const fallbackNews = [
    {
      id: 1,
      title: 'श्री विघ्नहर कारखान्याला राज्य स्तरीय पुरस्कार',
      summary: 'उत्कृष्ट कामगिरीसाठी महाराष्ट्र शासनाकडून सन्मान',
      date: '१५ डिसेंबर २०२३',
      category: 'पुरस्कार',
      image: 'https://shrivighnaharssk.com/wp-content/uploads/2021/06/8-1-1024x549.jpg',
      featured: false
    },
    {
      id: 2,
      title: 'नवीन तंत्रज्ञानाचा वापर करून उत्पादन वाढविण्याचा निर्णय',
      summary: 'आधुनिक यंत्रसामग्री आणण्यासाठी ५० करोड रुपयांची मंजुरी',
      date: '१० डिसेंबर २०२३',
      category: 'तंत्रज्ञान',
      image: 'https://shrivighnaharssk.com/wp-content/uploads/2021/06/DSC_8314.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'शेतकरी कल्याण योजनेचा विस्तार',
      summary: 'आणखी २००० शेतकऱ्यांना योजनेचा लाभ मिळणार',
      date: '५ डिसेंबर २०२३',
      category: 'कल्याण',
      image: 'https://shrivighnaharssk.com/wp-content/uploads/2021/06/4-1.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'पर्यावरण संवर्धन मोहीम यशस्वी',
      summary: 'कारखान्याच्या परिसरात १०,००० वृक्षांची लागवड',
      date: '१ डिसेंबर २०२३',
      category: 'पर्यावरण',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3',
      featured: false
    },
    {
      id: 5,
      title: 'कर्मचारी प्रशिक्षण कार्यक्रम संपन्न',
      summary: 'नवीन तंत्रज्ञान हाताळणीचे प्रशिक्षण यशस्वी',
      date: '२८ नोव्हेंबर २०२३',
      category: 'तंत्रज्ञान',
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3',
      featured: false
    },
    {
      id: 6,
      title: 'साखर निर्यातीत वाढ',
      summary: 'कारखान्याची साखर निर्यात २५% ने वाढली',
      date: '२५ नोव्हेंबर २०२३',
      category: 'तंत्रज्ञान',
      image: 'https://images.unsplash.com/photo-1504855101244-34edfbd4b861',
      featured: false
    },
    {
      id: 7,
      title: 'शेतकरी मेळावा आयोजन',
      summary: 'ऊस उत्पादन वाढीसाठी मार्गदर्शन शिबीर',
      date: '२० नोव्हेंबर २०२३',
      category: 'कल्याण',
      image: 'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab',
      featured: false
    },
    {
      id: 8,
      title: 'सौर ऊर्जा प्रकल्प कार्यान्वित',
      summary: 'वीज बिलात ३०% बचत अपेक्षित',
      date: '१५ नोव्हेंबर २०२३',
      category: 'पर्यावरण',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      featured: false
    },
    {
      id: 9,
      title: 'कर्मचारी आरोग्य शिबिर',
      summary: 'सर्व कर्मचाऱ्यांची आरोग्य तपासणी',
      date: '१० नोव्हेंबर २०२३',
      category: 'कल्याण',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
      featured: false
    },
    {
      id: 10,
      title: 'ISO प्रमाणपत्र प्राप्त',
      summary: 'आंतरराष्ट्रीय दर्जाचे प्रमाणपत्र मिळाले',
      date: '५ नोव्हेंबर २०२३',
      category: 'पुरस्कार',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3',
      featured: false
    },
    {
      id: 11,
      title: 'नवीन प्रशासकीय इमारत',
      summary: 'अत्याधुनिक सुविधांयुक्त कार्यालय सुरू',
      date: '१ नोव्हेंबर २०२३',
      category: 'तंत्रज्ञान',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3',
      featured: false
    },
    {
      id: 12,
      title: 'महिला बचत गट प्रशिक्षण',
      summary: 'महिला सक्षमीकरण कार्यक्रमाचे आयोजन',
      date: '२८ ऑक्टोबर २०२३',
      category: 'कल्याण',
      image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3',
      featured: false
    },
    {
      id: 13,
      title: 'जलसंवर्धन प्रकल्प',
      summary: 'पाणी पुनर्वापर प्रकल्प कार्यान्वित',
      date: '२५ ऑक्टोबर २०२३',
      category: 'पर्यावरण',
      image: 'https://images.unsplash.com/photo-1468421870903-4df1664ac249?ixlib=rb-4.0.3',
      featured: false
    }
  ];

const fallbackCategories = [
  { name: 'सर्व बातम्या', count: 25, id: 'all' },
  { name: 'पुरस्कार', count: 8, id: 'awards' },
  { name: 'तंत्रज्ञान', count: 5, id: 'technology' },
  { name: 'कल्याण', count: 7, id: 'welfare' },
  { name: 'पर्यावरण', count: 3, id: 'environment' }
];

// return response.data;
const featuredNewsData = [
  {
    _id: '1',
    title: 'कारखान्याला राष्ट्रीय पुरस्कार',
    excerpt: 'उत्कृष्ट कामगिरीसाठी केंद्र सरकारकडून सन्मान',
    content: 'श्री विघ्नहर सहकारी साखर कारखान्याला याबाबत राष्ट्रीय पुरस्कार प्रदान करण्यात आला आहे...',
    image: 'https://shrivighnaharssk.com/wp-content/uploads/2021/06/DSC_8314.jpg',
    category: 'पुरस्कार',
    isFeatured: true,
    publishedAt: '२०२३-१२-१५',
    author: 'कार्यालय प्रवक्ता'
  },
  {
    _id: '2',
    title: 'नवीन तंत्रज्ञान सुरू',
    excerpt: 'अत्याधुनिक यंत्रसामग्री बसवण्यात आली',
    content: 'कारखान्यात नवीन तंत्रज्ञानाची यंत्रसामग्री बसवण्यात आली आहे...',
    image: 'https://shrivighnaharssk.com/wp-content/uploads/2021/06/new-machinery.jpg',
    category: 'तंत्रज्ञान',
    isFeatured: true,
    publishedAt: '२०२३-१२-१०',
    author: 'तांत्रिक विभाग'
  },
  {
    _id: '3',
    title: 'शेतकरी कल्याण योजना',
    excerpt: 'नवीन कल्याणकारी योजनांची घोषणा',
    content: 'शेतकऱ्यांच्या कल्याणासाठी अनेक नवीन योजना सुरू करण्यात आल्या आहेत...',
    image: 'https://shrivighnaharssk.com/wp-content/uploads/2021/06/welfare-scheme.jpg',
    category: 'कल्याण',
    isFeatured: true,
    publishedAt: '२०२३-१२-०५',
    author: 'कल्याण विभाग'
  }
];
export { fallbackNews, fallbackCategories, featuredNewsData };
