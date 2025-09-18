import React, { useState, useEffect, useRef } from 'react';

export default function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [stats, setStats] = useState([
    { number: 0, target: 500, label: 'Siswa Aktif', icon: "🎓" },
    { number: 0, target: 98, label: 'Kelulusan (%)', icon: "🏆" },
    { number: 0, target: 15, label: 'Prestasi Nasional', icon: "🏅" },
    { number: 0, target: 8, label: 'Ekstrakurikuler', icon: "🎪" }
  ]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const carouselRef = useRef(null);

  // Animation for stats
  useEffect(() => {
    const timer = setInterval(() => {
      setStats(prevStats =>
        prevStats.map(stat => ({
          ...stat,
          number: stat.number < stat.target ? stat.number + 1 : stat.target
        }))
      );
    }, 50);

    return () => clearInterval(timer);
  }, []);

  // Testimonial rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 90000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Ahmad Fauzi",
      role: "Alumni 2023",
      text: "SMP IT Pelita tidak hanya mengajarkan ilmu pengetahuan, tapi juga membentuk karakter saya menjadi pribadi yang lebih bertanggung jawab dan berakhlak mulia. Program tahfidznya luar biasa!",
      avatar: "https://placehold.co/100x100/166534/ffffff?text=AF",
      rating: 5
    },
    {
      name: "Nurul Hikmah",
      role: "Orang Tua Siswa",
      text: "Sebagai orang tua, saya sangat puas dengan perkembangan anak saya di SMP IT Pelita. Disiplin, prestasi akademik, dan pembinaan karakternya sangat baik.",
      avatar: "https://placehold.co/100x100/d97706/ffffff?text=NH",
      rating: 5
    },
    {
      name: "Budi Santoso",
      role: "Guru Matematika",
      text: "Mengajar di SMP IT Pelita adalah pengalaman yang luar biasa. Siswa-siswanya antusias belajar, fasilitas lengkap, dan manajemen sekolah yang profesional.",
      avatar: "https://placehold.co/100x100/059669/ffffff?text=BS",
      rating: 5
    },
    {
      name: "Siti Aminah",
      role: "Siswa Kelas 9",
      text: "Saya suka belajar di sini karena gurunya ramah dan metode pembelajarannya menyenangkan. Saya jadi lebih percaya diri dan semangat belajar!",
      avatar: "https://placehold.co/100x100/92400e/ffffff?text=SA",
      rating: 5
    }
  ];

  const educationalValues = [
    {
      title: "Akhlak Mulia",
      description: "Membentuk karakter siswa yang berakhlak mulia sesuai tuntunan Al-Qur'an dan As-Sunnah",
      icon: "🕌",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Prestasi Akademik",
      description: "Mengembangkan potensi akademik siswa secara optimal dengan metode pembelajaran inovatif",
      icon: "📚",
      color: "from-amber-500 to-amber-600"
    },
    {
      title: "Kemandirian",
      description: "Melatih siswa untuk menjadi pribadi yang mandiri, bertanggung jawab, dan disiplin",
      icon: "💪",
      color: "from-green-600 to-amber-500"
    },
    {
      title: "Kepemimpinan",
      description: "Mengembangkan jiwa kepemimpinan melalui berbagai kegiatan organisasi dan ekstrakurikuler",
      icon: "👑",
      color: "from-amber-600 to-green-700"
    }
  ];

  const programs = [
    {
      title: "Tahfidz Qur'an",
      description: "Program pembinaan hafalan Al-Qur'an dengan target 3-5 juz selama 3 tahun",
      details: ["Target 3-5 Juz", "Setoran Harian", "Murojaah Mingguan", "Ujian Tahfidz Semesteran"],
      image: "https://placehold.co/400x300/166534/ffffff?text=Tahfidz+Qur'an",
      color: "from-amber-400 to-yellow-500"
    },
    {
      title: "STEM Education",
      description: "Pembelajaran sains, teknologi, engineering, dan matematika terintegrasi",
      details: ["Project-Based Learning", "Robotics Club", "Science Olympiad", "Coding for Kids"],
      image: "https://placehold.co/400x300/059669/ffffff?text=STEM+Education",
      color: "from-green-400 to-green-500"
    },
    {
      title: "Character Building",
      description: "Program pembentukan karakter melalui pembiasaan akhlak mulia",
      details: ["Leadership Training", "Outbound Activities", "Social Service", "Public Speaking"],
      image: "https://placehold.co/400x300/d97706/ffffff?text=Character+Building",
      color: "from-amber-500 to-green-600"
    },
    {
      title: "Bahasa Internasional",
      description: "Penguasaan bahasa Arab dan Inggris sebagai bahasa internasional",
      details: ["Conversation Class", "Debate Competition", "Language Camp", "Cultural Exchange"],
      image: "https://placehold.co/400x300/92400e/ffffff?text=Bahasa+Internasional",
      color: "from-green-500 to-amber-600"
    }
  ];

  const events = [
    {
      title: "Pekan Tahfidz",
      date: "15-20 Oktober 2024",
      description: "Kompetisi hafalan Al-Qur'an antar kelas dengan berbagai kategori dan hadiah menarik",
      image: "https://placehold.co/300x200/166534/ffffff?text=Pekan+Tahfidz",
      color: "bg-green-600"
    },
    {
      title: "Science Fair",
      date: "5-7 November 2024",
      description: "Pameran hasil penelitian dan eksperimen sains siswa dengan tema 'Teknologi Ramah Lingkungan'",
      image: "https://placehold.co/300x200/059669/ffffff?text=Science+Fair",
      color: "bg-amber-600"
    },
    {
      title: "Family Gathering",
      date: "12 Desember 2024",
      description: "Kegiatan silaturahmi antara sekolah, siswa, dan orang tua dengan berbagai permainan edukatif",
      image: "https://placehold.co/300x200/d97706/ffffff?text=Family+Gathering",
      color: "bg-gradient-to-r from-green-600 to-amber-600"
    },
    {
      title: "Leadership Camp",
      date: "15-17 Januari 2025",
      description: "Pelatihan kepemimpinan dan pengembangan diri di alam terbuka untuk siswa kelas 8 dan 9",
      image: "https://placehold.co/300x200/92400e/ffffff?text=Leadership+Camp",
      color: "bg-green-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-amber-50 overflow-x-hidden">
      {/* Header with responsive menu */}
      <header className="bg-gradient-to-r from-green-800 to-amber-800 shadow-2xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-amber-500 to-green-600 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110">
                <span className="text-white font-bold text-xl md:text-3xl">SMP</span>
              </div>
              <div>
                <h1 className="text-xl md:text-3xl font-bold text-white">SMP IT PELITA</h1>
                <p className="text-green-200 text-sm md:text-base">Sekolah Menengah Pertama Islam Terpadu</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-2">
              {["Beranda", "Profil", "Program", "Fasilitas", "Kontak"].map((item, index) => (
                <a 
                  key={index}
                  href={`#${item.toLowerCase()}`} 
                  className="text-green-100 hover:text-white transition-colors font-medium px-4 py-3 rounded-xl hover:bg-white/20 hover:shadow-lg"
                >
                  {item}
                </a>
              ))}
            </nav>
            <button 
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/20">
              {["Beranda", "Profil", "Program", "Fasilitas", "Kontak"].map((item, index) => (
                <a 
                  key={index}
                  href={`#${item.toLowerCase()}`} 
                  className="block text-green-100 hover:text-white transition-colors font-medium px-4 py-3 rounded-lg hover:bg-white/20"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="beranda" className="relative py-20 md:py-32 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-amber-800 opacity-95"></div>
        <div className="absolute inset-0">
          <img src="https://placehold.co/1920x1080/166534/ffffff?text=SMP+IT+PELITA" alt="School Building" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-green-900"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-10">
          <div className="mb-8 inline-block">
            <div className="bg-white/20 backdrop-blur-sm text-amber-100 px-6 py-3 rounded-full text-lg font-semibold border border-white/30">
              🎓 Generasi Qur'ani Berprestasi 🎓
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold mb-8 leading-tight">
            Membentuk Generasi
            <br />
            <span className="bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 bg-clip-text text-transparent">Qur'ani & Berkarakter</span>
          </h1>
          
          <p className="text-xl md:text-3xl mb-16 max-w-4xl mx-auto leading-relaxed text-green-100">
            Sekolah Menengah Pertama Islam Terpadu Pelita yang mengintegrasikan nilai-nilai Islam dalam seluruh aspek pembelajaran dan kehidupan siswa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-gray-900 font-bold py-5 px-12 rounded-2xl transition-all transform hover:scale-105 shadow-2xl hover:shadow-amber-500/50 duration-300 text-lg">
              <div className="flex items-center space-x-3">
                <span>Daftar Sekarang</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </button>
            <button className="bg-white/20 backdrop-blur-sm border-2 border-white hover:bg-white/30 text-white font-bold py-5 px-12 rounded-2xl transition-all transform hover:scale-105 shadow-xl duration-300 text-lg">
              Info Pendaftaran
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-xl font-bold mb-2">Kurikulum Terpadu</h3>
              <p className="text-green-100">Menggabungkan kurikulum nasional dengan nilai-nilai Islam</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-3">👨‍🏫</div>
              <h3 className="text-xl font-bold mb-2">Guru Profesional</h3>
              <p className="text-green-100">Tenaga pengajar berkualitas dan berpengalaman</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-xl font-bold mb-2">Prestasi Gemilang</h3>
              <p className="text-green-100">Berbagai prestasi di tingkat regional dan nasional</p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Nilai-Nilai Pendidikan Kami</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-600 to-amber-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Landasan utama dalam membentuk karakter dan kepribadian siswa
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {educationalValues.map((value, index) => (
              <div key={index} className="group bg-gradient-to-br from-green-50 to-amber-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                <div className="mt-6 w-0 group-hover:w-16 h-1 bg-gradient-to-r from-green-500 to-amber-500 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Animation */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-amber-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Pencapaian Kami</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 mx-auto rounded-full"></div>
            <p className="mt-6 text-xl text-green-100 max-w-3xl mx-auto">
              Statistik yang mencerminkan kualitas pendidikan di SMP IT Pelita
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-3xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20">
                <div className="text-5xl md:text-6xl font-bold text-amber-300 mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}{stat.label.includes('%') ? '%' : '+'}
                </div>
                <div className="text-green-100 font-medium text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs with Cards */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Program Unggulan</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-600 to-amber-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Program-program inovatif yang mendukung perkembangan komprehensif siswa
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {programs.map((program, index) => (
              <div key={index} className="group bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute top-0 right-0 m-4 px-4 py-2 bg-gradient-to-r ${program.color} text-white font-bold rounded-full shadow-lg`}>
                    {program.title}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{program.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {program.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center bg-green-50 rounded-xl px-3 py-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-green-600 to-amber-600 hover:from-green-700 hover:to-amber-700 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg">
                    Pelajari Lebih Lanjut
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with Enhanced Design */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Apa Kata Mereka?</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-600 to-amber-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Testimoni dari siswa, orang tua, dan guru yang telah merasakan pendidikan terbaik di SMP IT Pelita
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-amber-50 rounded-3xl shadow-2xl p-10 md:p-16">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <img 
                  src={testimonials[currentTestimonial].avatar} 
                  alt={testimonials[currentTestimonial].name} 
                  className="w-24 h-24 rounded-full shadow-2xl border-4 border-white"
                />
                <div className="text-center md:text-left flex-1">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-amber-600 font-medium mb-6">{testimonials[currentTestimonial].role}</p>
                  <p className="text-gray-700 text-lg leading-relaxed italic text-center md:text-left">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                </div>
              </div>
              
              <div className="flex mt-10 justify-center space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-amber-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <div className="flex justify-between mt-6">
                <button 
                  onClick={() => setCurrentTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
                  className="bg-white/30 hover:bg-white/50 text-gray-700 p-3 rounded-full transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={() => setCurrentTestimonial(prev => prev === testimonials.length - 1 ? 0 : prev + 1)}
                  className="bg-white/30 hover:bg-white/50 text-gray-700 p-3 rounded-full transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events with Enhanced Cards */}
      <section className="py-24 bg-gradient-to-br from-green-800 to-amber-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Agenda Kegiatan</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 mx-auto rounded-full"></div>
            <p className="mt-6 text-xl text-green-100 max-w-3xl mx-auto">
              Kegiatan menarik yang akan datang di SMP IT Pelita
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {events.map((event, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className={`inline-block ${event.color} text-white text-sm font-bold px-3 py-1 rounded-full mb-4`}>
                    {event.date}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                  <p className="text-green-100 mb-6 text-sm leading-relaxed">{event.description}</p>
                  <button className="text-amber-300 font-medium hover:text-amber-100 transition-colors flex items-center">
                    Selengkapnya 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action with Enhanced Design */}
      <section className="py-24 bg-gradient-to-r from-green-900 via-amber-900 to-green-900">
        <div className="max-w-5xl mx-auto text-center text-white px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 md:p-16 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Siap Bergabung dengan Kami?</h2>
            <p className="text-2xl text-green-100 mb-12 max-w-3xl mx-auto">
              Daftarkan putra-putri Anda sekarang juga dan berikan mereka pendidikan terbaik untuk masa depan yang gemilang.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <button className="bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-gray-900 font-bold py-5 px-10 rounded-2xl transition-all transform hover:scale-105 shadow-2xl hover:shadow-amber-500/50 text-lg">
                Daftar Sekarang
              </button>
              <button className="bg-white/20 hover:bg-white/30 text-white font-bold py-5 px-10 rounded-2xl transition-all border-2 border-white hover:shadow-xl text-lg">
                Jadwalkan Kunjungan
              </button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-green-200">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(021) 1234-5678</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@smptitpelita.sch.id</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-green-900 to-amber-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-green-600 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">SMP</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">SMP IT PELITA</h3>
                </div>
              </div>
              <p className="text-amber-200 text-sm leading-relaxed mb-6">
                Membentuk generasi Qur'ani yang berprestasi dan berkarakter mulia melalui pendidikan Islam terpadu.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-xl mb-6">Tautan Cepat</h4>
              <ul className="space-y-3">
                <li><a href="#beranda" className="text-amber-200 hover:text-white transition-colors">Beranda</a></li>
                <li><a href="#profil" className="text-amber-200 hover:text-white transition-colors">Profil</a></li>
                <li><a href="#program" className="text-amber-200 hover:text-white transition-colors">Program</a></li>
                <li><a href="#fasilitas" className="text-amber-200 hover:text-white transition-colors">Fasilitas</a></li>
                <li><a href="#kontak" className="text-amber-200 hover:text-white transition-colors">Kontak</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-xl mb-6">Program</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Tahfidz Qur'an</a></li>
                <li><a href="#" className="text-amber-200 hover:text-white transition-colors">STEM Education</a></li>
                <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Character Building</a></li>
                <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Bahasa Internasional</a></li>
                <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Ekstrakurikuler</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-xl mb-6">Kontak</h4>
              <div className="space-y-4 text-amber-200">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p>Jl. Pendidikan No. 123<br/>Kota Pendidikan, 12345</p>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p>(021) 1234-5678</p>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p>info@smptitpelita.sch.id</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-amber-800 pt-8 text-center">
            <p className="text-amber-300 text-lg">© 2024 SMP IT PELITA. All Rights Reserved.</p>
            <p className="text-amber-400 text-sm mt-2">Membentuk Generasi Qur'ani Berprestasi & Berkarakter</p>
          </div>
        </div>
      </footer>
    </div>
  );
}