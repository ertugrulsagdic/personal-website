import { Education } from "@/data/dataTypes/education";
import { Experience } from "@/data/dataTypes/experiences";
import { Project } from "@/data/dataTypes/project";
import { ToolCategory } from "@/data/dataTypes/ToolCategory";

export default {
  info: {
    name: "Ertuğrul Sağdıç",
    location: "İstanbul, Türkiye",
    locationLink: "https://www.google.com/maps/place/istanbul",
    email: "ertugrulsagdic98@gmail.com",
    mobile: "+90 (539) 445 5645",
    about: "Kendini yüksek kaliteli ürünler geliştirmeye adanmış, detay odaklı Full Stack Yazılım Mühendisi."
  },
  navbar: {
    articles: "Makaleler",
    projects: "Projeler",
    tools: "Araçlar",
    resume: "Özgeçmiş",
    toggleTheme: "Tema Değiştir",
    changeLanguage: "Dil Değiştir",
  },
  home: {
    hero: {
      greeting: "Selamlar",
      title: "Ben Ertuğrul Sağdıç",
      subtitle: "Yazılım Mühendisi",
      description: "Her satır kodla anlamlı bir etki yaratma tutkusuyla yazılım geliştiriyorum. Mühendislik yolculuğum, araştırma, ilerleme ve sürekli iyileştirme sınırlarını zorlamak üzerine tanımlanır.",
      pictureAlt: "Profil Resmi"
    },
    aboutMe: {
      title: "Benim hakkımda daha fazla",
      intro: "İstanbul'un hareketli sokaklarından Teksas'taki Lamar Üniversitesi'nin akademik koridorlarına kadar yazılım mühendisliği yolculuğum, bilgi ve inovasyona yönelik aralıksız bir arayışla şekilleniyor. Marmara Üniversitesi'nden Bilgisayar Mühendisliği alanında lisans ve Lamar Üniversitesi'nden yüksek lisans derecesine sahip biri olarak, teknoloji ve yazılım geliştirmede ilerlemeye derinden kararlıyım.",
      hobbies: "Yaratıcılığı ve yeniliği teşvik etmek için dengeli bir yaşam sürdürmenin önemine inanıyorum. Klavyeden uzakta, beni en son teknoloji trendlerini araştırırken, spor salonunda ağırlık kaldırırken, güzel bir kitabın tadını çıkarırken veya en sevdiğim TV şovlarıyla rahatlarken bulabilirsiniz.",
      roles: "Kariyerim boyunca her biri gelişimime katkıda bulunan farklı rollerde yer aldım:",
      mobileDevelopment: "Mobil Uygulama Geliştirme: ",
      mobileDevelopmentDescription: "Kullanıcı deneyimini ve işlevselliği artırmak için sezgisel mobil arayüzler tasarladım.",
      softwareEngineering: "Full Stack Web Uygulama Geliştirme: ",
      softwareEngineeringDescriptionStart: "Full-stack yazılım mühendisi olarak, dört şirkette 1.000'den fazla kullanıcıya hizmet veren öneri, kaizen ve neredeyse hata ayıklama iş akışlarını otomatikleştirmek için Node JS ve React JS kullanarak",
      softwareEngineeringDescriptionProject: "Sürekli İyileştirme Platformu",
      softwareEngineeringDescriptionEnd: "projesini geliştirdim.",
      machineLearning: "Makine Öğrenmesi Araştırmaları: ",
      machineLearningDescription: "Cilt lezyonu analizi için yenilikçi bir veri seti üreticisi oluşturdum ve yapay zekanın sınırlarını zorlayan gerçek zamanlı anormallik tespit algoritmaları geliştirildi.",
      rolesEnd: "Her rol, yazılım geliştirmenin teknik yönlerinin daha derin anlaşılmasına yönelik bir basamak olmuştur. Amacım her zaman kodun her satırının yalnızca işlevsel değil aynı zamanda etkili olduğu bir yazılım geliştirmektir.",
      technologies: "İşte son zamanlarda üzerinde çalıştığım teknolojiler:"
    },
    experience: {
      title: "Profesyonel Deneyimim",
    },
    projects: {
      title: "Üzerinde Çalıştığım Bazı Projeler",
    }
  },
  experiences: [
    {
      company: "Lamar Üniversitesi",
      companyLink: "https://www.lamar.edu/arts-sciences/computer-science/index.html",
      position: "Araştırma Asistanı",
      date: "Ocak 2023 - Halen",
      location: "Beaumont, TX, ABD",
      bullets: [
        {
          description: "Dr. Zhang'in Yönetiminde, Buckeye Partners için Pompa Sensör Verilerinin Analizi ve Anomali Tespit Sistemlerinin Geliştirilmesi:",
          subDescriptions: [
            "Buckeye ile işbirliği yaparak pompa sensör verilerini analiz ettim ve anomali tespiti için kapsamlı bir veri seti elde ettim.",
            "Veri etiketleme, anormallik tespiti ve tahmin için AutoEncoders, TranAD ve SAMFormer modellerini eğittim.",
            "Flask kullanan açık kaynaklı RESTful API'leri ve sonuçları görüntülemek ve yönetmek için NextJS kullanan bir web arayüzü geliştirildi."
          ],
        },
        {
          description: "Dr. Kockara'nın Yönetiminde, Veri Seti Üreticisinin Geliştirilmesi ve Derin Öğrenme Modellerinin Değerlendirilmesi:",
          subDescriptions: [
            "C# ve Unity Engine kullanarak, 1,398 çeşitli tüm vücut fotoğraf görüntüsü üreten TBPGen'i tasarladım.",
            "Python/Pytorch kullanarak 13 derin öğrenme modeli üzerinde cilt lezyonu tespiti ve segmentasyonu değerlendirdim.",
            "%90 üzerinde IoU ve F1 skorları elde edildi. Bu sayede, TBPGen ile üretilen veri setinin, tespit ve segmentasyon doğruluğunu artırdığını gösterdim.",
          ]
        }
      ]
    },
    {
      company: "MDP Group",
      companyLink: "https://www.mdpgroup.com/",
      position: "Full Stack Yazılım Mühendisi",
      date: "Temmuz 2021 - Ocak 2023",
      location: "İstanbul, Türkiye",
      bullets: [
        {
          description: "Sürekli İyileştirme Yazılımının geliştirilmesine öncülük ederek, kavramsal fikirden, süreçleri kâğıtsız hale getiren ve süreç süresini %60 oranında azaltan kritik Öneri, Kaizen ve Yakın Kaçış iş akışlarını içeren işlevsel uygulamaya dönüştürdüm.",
        },
        {
          description: "Node JS kullanarak 200 JSON API'si ve React JS kullanarak 25'ten fazla kullanıcı arayüzü geliştirdim; sistem güvenilirliğinden emin olmak için entegrasyon testleri ve birim testleri yaptım.",
        },
        {
          description: "Veritabanlarını yönetmek için PostgreSQL ve MongoDB'yi kullanarak %99,9 veri bütünlüğü oranı sağlandı ve sorunsuz veri sorguları elde ederek veritabanı yönetim süreçlerini kolaylaştırmış oldum.",
        },
        {
          description: "SCRUM tabanlı Agile ortamında Jira ile projeleri yöneterek, fonksiyonel kodun sık sık yayınlanmasını ve %100 zamanında görev teslimi sağlanmasını garanti altına aldım.",
        }
      ]
    },
    {
      company: "Crenno",
      position: "Mobil Yazılım Mühendisi",
      date: "Kasım 2020 - Nisan 2021",
      location: "İstanbul, Türkiye",
      bullets: [
        {
          description: "Dart/Flutter kullanarak, mobil uygulama için 15'ten fazla kullanıcı arayüzü tasarlayıp geliştirdim.",
        },
        {
          description: "Versiyon kontrolü için Git konusunda derin bilgi ve pratik uzmanlık kazandım.",
        }
      ]
    },
  ] as Experience[],
  allProjects: {
    mostRecentProjects: [
      {
        title: "Portföy Web Sitesi",
        description: "Kişisel portföy web sitesini Next.js ve Tailwind CSS kullanarak tasarladım ve geliştirdim.",
        link: {
          title: "ertugrulsagdic.com",
          url: "",
          isIntenal: true,
        },
        techStack: ["Next.js", "Tailwind CSS", "Typescript"],
        logo: "logo-dark.png",
      },
      {
        title: "DevGPT Mining Challenge",
        description: "Ortak tartışma konularını belirlemek için, geliştiricilerin ChatGPT ile etkileşimlerini kullanarak konu modellemesi geliştirildi.",
        link: {
          title: "github.com",
          url: "https://github.com/ertugrulsagdic/mining-challange"
        },
        techStack: ["Python", "Veri Analizi", "NLP"],
      },
      {
        title: "Cat Facts WebApp",
        description: "Cat Facts API'sini kullanarak HTMX ve Flask kullanarak rastgele kedi gerçeklerini görüntüleyen bir web sitesi.",
        link: {
          title: "github.com",
          url: "https://github.com/ertugrulsagdic/cat-facts-app",
        },
        techStack: ["Python", "Flask", "HTMX"],
      },
      {
        title: "WaSeat Transport App",
        description: "Ulaşım rotalarını ve karbon ayak izini izleyen mobil uygulama. Flutter hackathonunda 2. sıraya ulaştı.",
        link: {
          title: "github.com",
          url: "https://github.com/ertugrulsagdic/waseat",
        },
        techStack: ["Flutter", "Dart", "Firebase"],
        logo: "waseat-logo.png",
      },
      {
        title: "Flutter Code Generator",
        description: "Flutter uygulamaları için Flutter mimarisini otomatik dosya oluşturma işlemini sağlayan bir VS Code eklentisi.",
        link: {
          title: "github.com",
          url: "https://github.com/ertugrulsagdic/flutter_code_generator",
        },
        techStack: ["Javascript", "VS Code Eklentisi"],
      },
      {
        title: "Ahtapot Marin Web Sitesi",
        description: "Ürün listelemelerini ve iletişim bilgilerini içeren, React ile tasarlanmış responsive bir web sitesi.",
        link: {
          title: "ahtopotmarin.com",
          url: "https://www.ahtopotmarin.com/",
        },
        techStack: ["React", "CSS", "Firebase"],
        logo: "ahtapotmarin-logo.png",
      },

    ] as Project[],
    undergradProjects: [
      {
        title: "Gen Ekspresyonlarını Kullanarak Kanser Tespiti",
        description: "K-NN ve Neural Network algoritmalarını kullanarak kanser sınıflandırma modelleri uyguladım ve Rain Forest Algoritması kullanarak farklılaşan genleri araştırdım.",
        link: {
          title: "github.com",
          url: "https://github.com/ertugrulsagdic/cancer-detection"
        },
        techStack: ["Python", "Makine Öğrenmesi", "Veri Analizi"],
      },
      {
        title: "Multithreaded Web Server",
        description: "İstemci isteklerine bağlı olarak dinamik HTML nesneleri oluşturan, önbellekleme için bir proxy sunucusu içeren bir HTTP multithread web sunucusu.",
        link: {
          title: "github.com",
          url: "https://github.com/ertugrulsagdic/Multithreaded-Web-Server"
        },
        techStack: ["Python", "Ağ"],
      },
      {
        title: "CPU Digital Logic Design",
        description: "Verilog ve Logism kullanarak çalışan, 18-bit veri boyutuna ve 16 tane register içeren ve instruction setlerini yürütebilen basit bir CPU tasarımı.",
        link: {
          title: "github.com",
          url: "https://github.com/ertugrulsagdic/DigitalDesignProject",
        },
        techStack: ["Verilog", "Logism", "Dijital Mantık"],
      },
      {
        title: "Park It Analiz ve Tasarım",
        description: "Planlama, analiz, tasarım ve uygulama aşamalarını kapsayan waterfall metodolojisi kullanarak 'Park It' uygulamasının yol haritasını tasarladım.",
        link: {
          title: "github.com",
          url: "https://github.com/ertugrulsagdic/park-it-analysis-and-design"
        },
        techStack: ["Flutter", "Proje Yönetimi"],
      },
      {
        title: "Reinforcement Learning Prioritized Sweeping",
        description: "Bir grid dünya haritasında gezinmek için Prioritized Sweeping algoritmasını kullanarak bir Reinforcement Learning modeli geliştirdim.",
        link: {
          title: "github.com",
          url: "https://github.com/ertugrulsagdic/Cliff-Walking-Prioritized-Sweeping"
        },
        techStack: ["Python", "Güçlendirme Öğrenimi"],
      },
      {
        title: "Yoklama Sistemi",
        description: "Okullar için yoklama yönetimi uygulaması, yoklamayı QR kod taraması ile yapar ve duyurular ile belge yüklemeleri özellikleri içerir.",
        link: {
          title: "github.com",
          url: "https://github.com/ertugrulsagdic/OASYS"
        },
        techStack: ["React Native", "Firebase"],
      },
      {
        title: "Bir Havaalanının Veritabanı ve Web Uygulaması",
        description: "Havaalanı verilerini yönetmek için MSSQL, HTML, CSS ve JavaScript kullanarak bir veritabanı ve MVC pattern kullaranak web uygulaması geliştirdim.",
        link: {
          title: "github.com",
          url: "https://github.com/ertugrulsagdic/AirportDatabase"
        },
        techStack: ["SQL", "HTML", "CSS", "JavaScript"],
      },
      {
        title: "Monopoly Oyunu",
        description: "Nesne yönelimli prensipleri kullanarak, yinelemeli ve evrimsel geliştirme ile Java'da Monopoly oyununun bir simülasyonunu geliştirdim.",
        link: {
          title: "github.com",
          url: "https://github.com/ertugrulsagdic/MonopolyGame"
        },
        techStack: ["Java", "Yazılım Geliştirme"],
      },
      {
        title: "İş Parçacığı Senkronizasyonu ve Kendi Kabuğum",
        description: "Linux üzerinde C kullanarak, thread senkronizasyonunu uyguladım ve özel komut ve işlevsellik içeren bir shell terminal geliştirdim.",
        link: {
          title: "github.com",
          url: "https://github.com/ertugrulsagdic/OperatingSystemsProjects"
        },
        techStack: ["C", "Sistem Programlama"],
      }
    ] as Project[],
  },
  educations: [
    {
      institution: "Lamar Üniversitesi",
      location: "Beaumont, TX, ABD",
      degree: "Bilgisayar Bilimi Yüksek Lisansı",
      date: "Ocak 2023 - Mayıs 2024 ",
      gpa: "Not Ortalaması: 4.0/4.0"
    },
    {
      institution: "Marmara Üniversitesi",
      location: "İstanbul, Türkiye",
      degree: "Bilgisayar Mühendisliği Lisansı",
      date: "Eylül 2016 - Haziran 2021",
      gpa: "Not Ortalaması: 3.14/4.0"
    }
  ] as Education[],
  articles: {
    hero: {
      title: "Fikirleri Keşfediyorum: Yazılım, Yapay Zeka ve Kişisel Gelişim Üzerine",
      description: "Yazılım mühendisliği, makine öğrenimi ve kişisel gelişim yolculuğumda edindiğim düşünceleri ve deneyimleri paylaştığım makaleler koleksiyonuma dalın.",
      emptyDescription: "Şu anda yazılım mühendisliği, makine öğrenimi ve kişisel gelişimle ilgili makaleler hazırlama sürecindeyim. Keşfetmek için kısa süre sonra tekrar kontrol edin. Bunları sizinle paylaşacağım için heyecanlıyım!"
    }
  },
  projects: {
    hero: {
      title: "Büyük Değişime Doğru Küçük Adımlarım",
      description: "İşte şimdiye kadarki yolculuğumu tanımlayan projelerin bir vitrini. Mobil geliştirmeden makine öğrenimine kadar her proje, teknoloji alanındaki devam eden maceramın bir bölümünü temsil ediyor. Bu girişimlerin çoğu iş birliğine açık—bu nedenle ilginizi çeken bir şey varsa, ayrıntılara dalmaktan ve bana katılmaktan çekinmeyin!"
    },
    mostRecentProjects: {
      title: "En Son Projelerim",
      description: "Son zamanlarda üzerinde çalıştığım projeler işte bunlar"
    },
    undergradProjects: {
      title: "Lisans Projelerim",
      description: "Lisans eğitimim sırasında üzerinde çalıştığım projeler işte bunlar"
    }
  },
  tools: {
    hero: {
      title: "Kullandığım araçlar: Kodlamadan Yaratıcılığa",
      description: "Geliştirme ortamları ve programlama dillerinden proje yönetimi uygulamalarına kadar, günlük iş akışımın ayrılmaz bir parçası olan araçlara göz atın."
    },
    toolsList: [
      {
        title: "Geliştirme Ortamları ve Editörler",
        tools: [
          {
            title: "Visual Studio Code",
            description: "VS Code kullanmayı seviyorum çünkü hızlı ve istediğim gibi özelleştirmeme izin veriyor. Tüm kodlama projelerim için mükemmel.",
            href: "https://code.visualstudio.com/",
            imageURL: "https://code.visualstudio.com/assets/images/code-stable.png"
          },
          {
            title: "Jupyter Notebook",
            description: "Jupyter Notebook, verilerle uğraşmak için harika. Çalışmalarımı görmeyi ve başkalarıyla paylaşmayı kolaylaştıriyor.",
            href: "https://jupyter.org/",
            imageURL: "https://jupyter.org/assets/logos/rectanglelogo-greytext-orangebody-greymoons.svg"
          }
        ]
      },
      {
        title: "Programlama Dilleri",
        tools: [
          {
            title: "Python",
            description: "Python kullanımı çok kolay ve gerçekten güçlü. Hızlı scriptler, veri analizi ve makine öğrenimi için benim tercihim.",
            href: "https://www.python.org/",
            imageURL: "https://www.python.org/static/img/python-logo-large.c36dccadd999.png?1576869008"
          },
          {
            title: "JavaScript",
            description: "Web'in omurgası, hem frontend etkileşimliliği hem de backend hizmetleri için mükemmel.",
            href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            imageURL: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
          },
          {
            title: "TypeScript",
            description: "TypeScript, JavaScript'e benzer. Sadece JS üzerine hataları erken yakalamak için statik tip denetimi getirir. Büyük projelerimi düzenli ve hatasız tutmak için birebir.",
            href: "https://www.typescriptlang.org/",
            imageURL: "https://www.typescriptlang.org/icons/icon-48x48.png"
          }
        ]
      },
      {
        title: "Web Geliştirme",
        tools: [
          {
            title: "React",
            description: "React, web sitelerini hızlı bir şekilde oluşturmama yardımcı oluyor. Kodları yeniden kullanarak işleri sorunsuz bir şekilde yürütmemi sağlamasından gerçekten hoşlanıyorum.",
            href: "https://reactjs.org/",
            imageURL: "https://reactjs.org/favicon.ico"
          },
          {
            title: "Node.js",
            description: "JavaScript'i sunucu tarafında kullanmamı sağlayan müthiş bir araç. Ölçeklenebilir network uygulamaları oluşturmak için harika.",
            href: "https://nodejs.org/",
            imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/2560px-Node.js_logo_2015.svg.png"
          },
          {
            title: "Next.js",
            description: "Server side rendering ve statik site oluşturma desteği sunan bir React framework'ü, performanslı web uygulamaları oluşturmak için ideal. Bu aralar kullanıcı arayüzleri oluşturmak için favorim.",
            href: "https://nextjs.org/",
            imageURL: "https://nextjs.org/static/favicon/favicon-32x32.png"
          },
          {
            title: "Tailwind CSS",
            description: "Tailwind CSS, web sitelerinin stilini çok hızlı hale getiriyor. Tasarımları doğrudan HTML'ime eklememe izin vermesini seviyorum",
            href: "https://tailwindcss.com/",
            imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png"
          }
        ]
      },
      {
        title: "Makine Öğrenmesi için Framework ve Kütüphaneler",
        tools: [
          {
            title: "TensorFlow",
            description: "TensorFlow makine öğrenimi ile ilgili her şey için harika. Karmaşık projeler üzerinde çalışırken bana büyük yardımı oluyor.",
            href: "https://www.tensorflow.org/",
            imageURL: "https://www.tensorflow.org/images/tf_logo_social.png"
          },
          {
            title: "PyTorch",
            description: "Esnekliği ve kullanım kolaylığı ile bilinen, derin öğrenme projeleri oluşturmak için tercih ettiğim araç.",
            href: "https://pytorch.org/",
            imageURL: "https://pytorch.org/favicon.ico"
          },
          {
            title: "Pandas",
            description: "Yapılandırılmış veri işlemleri ve manipülasyonları için ideal, herhangi bir veri odaklı görev için vazgeçilmez.",
            href: "https://pandas.pydata.org/",
            imageURL: "https://pandas.pydata.org/static/img/favicon.ico"
          },
          {
            title: "NumPy",
            description: "NumPy matematik ve büyük hesaplamalar için olmazsa olmazdır. Neredeyse tüm veri projelerimde büyük bir yardımcıdır.",
            href: "https://numpy.org/",
            imageURL: "https://numpy.org/images/favicon.ico"
          }
        ]
      },
      {
        title: "Versiyon Kontrolü ve Proje Yönetimi",
        tools: [
          {
            title: "Git",
            description: "Git tüm proje sürümlerimi kontrol altında tutuyor. Değişiklikleri yönetmeme ve başkalarıyla kolayca çalışmamı sağlamasını seviyorum.",
            href: "https://git-scm.com/",
            imageURL: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
          },
          {
            title: "Docker",
            description: "Docker, uygulamalarımı her yerde aynı şekilde çalıştırmak için harika. Ortamları kurarken beni birçok baş ağrısından kurtarıyor.",
            href: "https://www.docker.com/",
            imageURL: "https://upload.wikimedia.org/wikipedia/commons/7/79/Docker_%28container_engine%29_logo.png"
          },
        ]
      },
      {
        title: "Verimlilik Araçları",
        tools: [
          {
            title: "Notion",
            description: "Notion tüm notlarımı ve proje planlarımı tuttuğum yer. Gerçekten esnek ve düzenli kalmama yardımcı oluyor.",
            href: "https://www.notion.so/",
            imageURL: "https://www.notion.so/images/favicon.ico"
          },
          // {
          //   title: "Zoom",
          //   description: "Sanal toplantılar için tercih edilen platform, bugünkü uzaktan çalışma ortamında vazgeçilmezdir.",
          //   href: "https://zoom.us/",
          //   imageURL: "https://1000logos.net/wp-content/uploads/2021/06/Zoom-Logo.png"
          // },
          // {
          //   title: "Slack",
          //   description: "Takım iletişimi ve işbirliği için, Slack bizi bağlı ve üretken tutan araçtır.",
          //   href: "https://slack.com/",
          //   imageURL: "https://a.slack-edge.com/80588/marketing/img/meta/favicon-32.png"
          // },
          // {
          //   title: "Discord",
          //   description: "İletişim ve topluluk oluşturma için çok yönlü bir araç, Discord hem kişisel hem de profesyonel kullanım için mükemmeldir.",
          //   href: "https://discord.com/",
          //   imageURL: "https://aoineko.org/msxgl/images/a/af/Discord_Logo.png"
          // }
        ]
      },
      {
        title: "Tasarım Araçları",
        tools: [
          {
            title: "Figma",
            description: "Figma, ekibimle web siteleri ve uygulamalar tasarlamak için harika. Hızlı ve verimli bir şekilde tasarım yapmama ve prototiplememe yardımcı oluyor. En sevdiğim özelliği, değişiklikleri gerçek zamanlı olarak görmemizi sağlaması.",
            href: "https://www.figma.com/",
            imageURL: "https://static.figma.com/app/icon/1/favicon.png"
          },
          {
            title: "Canva",
            description: "Web ve baskı için estetik tasarımları hızla oluşturmak için harika. Hızlı görsel oluşturma için sıklıkla başvurduğum bir araçtır.",
            href: "https://www.canva.com/",
            imageURL: "https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg"
          }
        ]
      },
      {
        title: "İzleme ve Analiz Araçları",
        tools: [
          {
            title: "Postman",
            description: "Postman API'leri kontrol etmek için kullanışlıdır. Yeni özellikleri kurmayı ve test etmeyi nasıl basit hale getirdiğini seviyorum.",
            href: "https://www.postman.com/",
            imageURL: "https://seeklogo.com/images/P/postman-logo-0087CA0D15-seeklogo.com.png"
          },
          {
            title: "Chrome Developer Tools",
            description: "Chrome DevTools, web sitelerimin iyi çalıştığından emin olmak için olmazsa olmazdır. Sorunları düzeltmeme ve her şeyin sorunsuz çalışmasını sağlamama yardımcı oluyor.",
            href: "https://developer.chrome.com/docs/devtools/",
            imageURL: "https://static-00.iconduck.com/assets.00/chrome-devtools-icon-1024x1024-bgoqb03p.png"
          }
        ]
      }
    ] as ToolCategory[],
  },
  resume: {
    experience: "İş Deneyimi",
    education: "Eğitim",
    skills: "Beceriler",
    projects: "Projeler",
    coverLetter: "Motivasyon Mektubu",
    coverLetterContent: [],
  },
  footer: {
    title: "© 2024 Ertuğrul Sağdıç",
    description: "Next.js, Tailwind CSS ve TypeScript kullanılarak oluşturuldu"
  }
} as const;
