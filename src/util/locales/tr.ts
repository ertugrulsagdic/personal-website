import { Experience } from "@/util/dataTypes/experiences";
import { Project } from "@/util/dataTypes/project";

export default {
    navbar: {
        articles: "Makaleler",
        projects: "Projeler",
        tools: "Araçlar",
        resume: "Özgeçmiş",
        toggleTheme: "Temayı Değiştir",
        changeLanguage: "Dili Değiştir",
    },
    home: {
        hero: {
            greeting: "Merhaba",
            title: "Ben Ertuğrul Sağdıç",
            subtitle: "Yazılım Mühendisi",
            description: "Her satır kodla anlamlı bir etki yapmak için tutkuyla yazılım geliştiriyorum. Mühendislik yolculuğum, araştırmada, ilerlemede ve sürekli iyileştirmede sınırları zorlamakla tanımlanıyor.",
            pictureAlt: "Profil Fotoğrafı"
        },
        aboutMe: {
            title: "Hakkımda Daha Fazlası",
            intro: "İstanbul'un canlı sokaklarından Teksas'taki Lamar Üniversitesi'nin akademik koridorlarına kadar, yazılım mühendisliği yolculuğum, bilgi ve yenilik peşinde amansız bir arayışla işaretlenmiştir. Marmara Üniversitesi'nden Bilgisayar Bilimleri'nde Lisans ve Lamar Üniversitesi'nde Yüksek Lisans derecelerine sahibim ve teknoloji ve yazılım geliştirmede ilerlemeye derinden bağlıyım.",
            hobbies: "Klavyeden uzakta beni, en son teknoloji trendlerini keşfederken, spor salonunda ağırlık kaldırırken, iyi bir kitapla veya favori TV şovlarımı izlerken bulabilirsiniz. Yaratıcılığı ve yeniliği beslemek için dengeli bir hayat sürdüğüme inanıyorum.",
            roles: "Kariyerim boyunca her biri gelişimime katkıda bulunan çeşitli rollerde bulundum:",
            mobileDevelopment: "Mobil Geliştirme: ",
            mobileDevelopmentDescription: "Kullanıcı deneyimini ve işlevselliğini artıran sezgisel mobil arayüzler geliştirdim.",
            softwareEngineering: "Yazılım Mühendisliği: ",
            softwareEngineeringDescriptionStart: "Temel tam yığın mühendisi olarak,",
            softwareEngineeringDescriptionProject: "Sürekli İyileştirme Yazılımı",
            softwareEngineeringDescriptionEnd: "projesini Node JS ve React JS kullanarak otomatikleştirdim, öneri, kaizen ve yakın kazaların iş akışlarını yöneterek dört şirkette 1,000'den fazla kullanıcıya hizmet verdim.",
            machineLearning: "Makine Öğrenmesi Araştırmaları: ",
            machineLearningDescription: "Cilt lezyonu analizi için yenilikçi bir veri seti üreticisi oluşturdum ve yapay zeka sınırlarını zorlayarak gerçek zamanlı anomali tespit algoritmaları geliştirdim.",
            rolesEnd: "Her rol, yazılım geliştirmenin teknik yönlerini daha derinlemesine anlamam için bir basamak taşı oldu. Amacım, her satır kodun sadece işlevsel değil, aynı zamanda etkili olmasını sağlamak.",
            technologies: "Son zamanlarda çalıştığım teknolojiler işte bunlar:"
        },
        experience: {
            title: "Profesyonel Deneyimlerim",
            experiences: [
                {
                    company: "Lamar Üniversitesi",
                    companyLink: "https://www.lamar.edu/arts-sciences/computer-science/index.html",
                    position: "Araştırma Asistanı",
                    date: "Ocak 2023 - Şu Anda",
                    bullets: [
                        {
                            description: "Buckeye Partners Gözetiminde Anomali Tespit Sistemlerinin Geliştirilmesi ve Analizi:",
                            subDescriptions: [
                                "Pompa sensör verilerini analiz etmek için Buckeye ile işbirliği yaptım, kapsamlı bir veri seti elde ettim.",
                                "Doğrulanmış veri setini kullanarak gerçek zamanlı anomali tespiti için çeşitli makine öğrenimi modellerini geliştirdim ve ince ayar yaptım.",
                                "Model çıktılarına dayalı tahmini bakım uyarılarını etkinleştiren web tabanlı bir UI ile RESTful API'ler uyguladım.",
                            ],
                        },
                        {
                            description: "Dr. Kockara Gözetiminde Veri Seti Üreticisinin Geliştirilmesi ve Derin Öğrenme Modellerinin Değerlendirilmesi:",
                            subDescriptions: [
                                "C# ve Unity Engine kullanarak 1,398 çeşitli total vücut fotoğrafçılığı görüntüsü üreten TBPGen'i geliştirdim.",
                                "13 derin öğrenme modeli arasında Python/Pytorch kullanarak cilt lezyonu tespiti ve segmentasyonunu değerlendirdim.",
                                "TBPGen veri setinin tespit ve segmentasyon doğruluğunu artırdığını gösteren %90 IoU ve F1 skorları elde ettim.",
                            ]
                        }
                    ]
                },
                {
                    company: "MDP Grubu",
                    companyLink: "https://www.mdpgroup.com/",
                    position: "Tam Yığın Yazılım Mühendisi",
                    date: "Temmuz 2021 - Ocak 2023",
                    bullets: [
                        {
                            description: "Tam yığın mühendisi olarak Sürekli İyileştirme Yazılımını geliştirdim, dört şirkette 1,000'den fazla kullanıcıya hizmet verdim.",
                        },
                        {
                            description: "Süreçleri kağıtsız hale getiren ve süreç süresini %60 azaltan Öneri, Kaizen ve Yakın Kazalar iş akışlarını uyguladım.",
                        },
                        {
                            description: "Sistem etkileşimini ve kullanıcı deneyimini artıran 200'den fazla JSON API tasarladım ve sürdürdüm.",
                        },
                        {
                            description: "Agil metodolojileri kullanarak Jira ile projeyi yönettim, ekibin %100 zamanında görev teslimatını ve %25 üretkenlik artışını sağladım.",
                        }
                    ]
                },
                {
                    company: "Crenno",
                    position: "Mobil Yazılım Mühendisi",
                    date: "Kasım 2020 - Nisan 2021",
                    bullets: [
                        {
                            description: "Dart/Flutter kullanarak mobil uygulamalar için 15+ kullanıcı arayüzü tasarladım ve uyguladım, kullanıcı etkileşimini ve katılımını artırdım.",
                        },
                        {
                            description: "Sürüm kontrolü için derinlemesine bilgi ve pratik uzmanlık kazandım, takım iş akışını önemli ölçüde artırarak birleştirme çatışmalarını %60 azalttım.",
                        }
                    ]
                },
            ] as Experience[],
        },
        projects: {
            title: "Üzerinde Çalıştığım Bazı Projeler",
            projects: [
                {
                    title: "Portfolio Website",
                    description: "Kişisel portfolio web sitesini Next.js ve Tailwind CSS kullanarak tasarladım ve geliştirdim.",
                    link: {
                        title: "esagdic.com",
                        url: "",
                        isIntenal: true,
                    },
                    techStack: ["Next.js", "Tailwind CSS", "Typescript"],
                    logo: "logo-dark.png",
                },
                {
                    title: "DevGPT Madencilik Challenge",
                    description: "ChatGPT ile geliştirici etkileşimlerindeki ortak tartışma temalarını belirlemek için konu modellemesi gerçekleştirdim.",
                    link: {
                        title: "github.com",
                        url: "https://github.com/ertugrulsagdic/mining-challange"
                    },
                    techStack: ["Python", "Veri Analizi", "NLP"],
                },
                {
                    title: "Cat Facts WebApp",
                    description: "Cat Facts API kullanarak rastgele kedi bilgileri gösteren bir web sitesi.",
                    link: {
                        title: "github.com",
                        url: "https://github.com/ertugrulsagdic/cat-facts-app",
                    },
                    techStack: ["Python", "Flask", "HTMX"],
                },
                {
                    title: "WaSeat Transport App",
                    description: "Taşıma güzergahlarını ve karbon ayak izini takip eden mobil uygulama. Flutter hackathonunda 2. oldu.",
                    link: {
                        title: "github.com",
                        url: "https://github.com/ertugrulsagdic/waseat",
                    },
                    techStack: ["Flutter", "Dart", "Firebase"],
                    logo: "waseat-logo.png",
                },
                {
                    title: "Flutter Code Generator",
                    description: "Flutter uygulamaları için Flutter mimarisi dosya üretimini otomatikleştiren bir VS Code uzantısı.",
                    link: {
                        title: "github.com",
                        url: "https://github.com/ertugrulsagdic/flutter_code_generator",
                    },
                    techStack: ["Javascript", "VS Code Uzantısı"],
                },
                {
                    title: "Ahtapot Marin Web Sitesi",
                    description: "Ürün listelemeleri ve iletişim bilgileri içeren, React ile yapılmış duyarlı bir web sitesi.",
                    link: {
                        title: "ahtopotmarin.com",
                        url: "https://www.ahtopotmarin.com/",
                    },
                    techStack: ["React", "CSS", "Firebase"],
                    logo: "ahtapotmarin-logo.png",
                },
                {
                    title: "Kanser Tespiti Gen İfadeleri Kullanılarak",
                    description: "Tiroid kanserinde gen ifade değişikliklerini veri bilimi teknikleri kullanarak analiz ettim.",
                    link: {
                        title: "github.com",
                        url: "https://github.com/ertugrulsagdic/cancer-detection",
                    },
                    techStack: ["Python", "Veri Analizi", "Makine Öğrenimi"],
                },
                {
                    title: "CPU Dijital Mantık Tasarımı",
                    description: "Verilog ve Logism kullanarak, komut setlerini yürütebilen 18-bit veri boyutlu ve 16 kaydedicili basit bir CPU.",
                    link: {
                        title: "github.com",
                        url: "https://github.com/ertugrulsagdic/DigitalDesignProject",
                    },
                    techStack: ["Verilog", "Logism", "Dijital Mantık"],
                }

            ] as Project[],
        }
    },
    articles: {
        hero: {
            title: "Makaleler",
            description: "Yazılım mühendisliği, makine öğrenimi ve kişisel gelişim hakkında yazıyorum. İşte en son makalelerimden bazıları:"
        }
    },
} as const;
