 // Fallback data for when API is not available
 const fallbackReports = [
    {
      id: 1,
      title: 'वार्षिक अहवाल २०२२-२३',
      description: 'कारखान्याचा संपूर्ण वार्षिक अहवाल',
      category: 'वार्षिक अहवाल',
      date: '२०२३-०३-३१',
      fileSize: '२.५ MB',
      downloadUrl: '#',
      icon: 'fa-file-pdf'
    },
    {
      id: 2,
      title: 'आर्थिक अहवाल २०२२-२३',
      description: 'कारखान्याचा आर्थिक अहवाल',
      category: 'आर्थिक अहवाल',
      date: '२०२३-०३-३१',
      fileSize: '१.८ MB',
      downloadUrl: '#',
      icon: 'fa-chart-line'
    }
  ];

  const categories = [
    { name: 'वार्षिक अहवाल', count: 10, icon: 'fa-calendar-alt', color: 'primary' },
    { name: 'आर्थिक अहवाल', count: 8, icon: 'fa-chart-bar', color: 'success' },
    { name: 'उत्पादन अहवाल', count: 12, icon: 'fa-industry', color: 'warning' },
    { name: 'कल्याण अहवाल', count: 6, icon: 'fa-heart', color: 'info' }
  ];
  export { fallbackReports, categories };
