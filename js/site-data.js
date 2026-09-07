/* ============================================================
   SITE DATA - كلية الهندسة الميكانيكية والكهربائية
   مصدر الحقيقة الوحيد: البيانات تُعرَض تلقائياً حسب اللغة
   لاحقاً: تملأ خطط المواد الرسمية من هنا فقط
   ============================================================ */

const COURSES_EN = {
  "الرياضيات 1": "Mathematics 1",
  "الرياضيات 2": "Mathematics 2",
  "الرياضيات 3": "Mathematics 3",
  "الرياضيات 4": "Mathematics 4",
  "الفيزياء العامة 1": "Physics 1",
  "الفيزياء العامة 2": "Physics 2",
  "الكيمياء العامة": "General Chemistry",
  "الرسم الهندسي": "Engineering Drawing",
  "الرسومات بالحاسوب": "Computer-Aided Drawing",
  "الرسومات الهندسية": "Engineering Graphics",
  "مقدمة في الحاسوب": "Introduction to Computers",
  "الإحصاء الهندسي": "Engineering Statistics",
  "مهارات اللغة الإنجليزية": "English Language Skills",
  "مقدمة في هندسة ميكانيكية": "Intro to Mechanical Engineering",
  "مقدمة في التصميم": "Introduction to Design",
  "مقدمة في الهندسة الكهربائية": "Intro to Electrical Engineering",
  "مقدمة في الإلكترونيات": "Introduction to Electronics",
  "مقدمة في التحكم الآلي": "Intro to Automatic Control",
  "مقدمة في علم المواد": "Introduction to Materials Science",
  "مقدمة في هندسة الميكاترونيك": "Intro to Mechatronics Engineering",
  "الثيرموديناميكا": "Thermodynamics",
  "نقل الحرارة": "Heat Transfer",
  "الميكانيكا العامة": "General Mechanics",
  "المواد الهندسية": "Engineering Materials",
  "البرمجة بلغة C": "C Programming",
  "البرمجة بلغة C++": "C++ Programming",
  "البرمجة بلغة Python": "Python Programming",
  "مقاومة المواد": "Strength of Materials",
  "الديناميكا": "Dynamics",
  "برامج CAD": "CAD Software",
  "تصميم الآلات": "Machine Design",
  "عمليات الإنتاج": "Production Processes",
  "الآلات الحرارية": "Thermal Machines",
  "ميكانيكا الموائع": "Fluid Mechanics",
  "الإلكترونيات": "Electronics",
  "التصميم الميكانيكي": "Mechanical Design",
  "البرامج الهندسية": "Engineering Software",
  "المضخات والآلات التوربينية": "Pumps & Turbomachines",
  "التحكم الآلي": "Automatic Control",
  "الاهتزازات": "Vibrations",
  "المبدلات الحرارية": "Heat Exchangers",
  "الاقتصاد الهندسي": "Engineering Economy",
  "أنظمة التبريد والتكييف": "Refrigeration & Air Conditioning",
  "المحركات": "Engines",
  "أنظمة النقل": "Power Transmission Systems",
  "مشروع التخرج 1": "Graduation Project 1",
  "مشروع التخرج 2": "Graduation Project 2",
  "مشروع التخرج 3": "Graduation Project 3",
  "مشروع التخرج 4 (الرسالة)": "Graduation Project 4 (Thesis)",
  "مشروع التخرج": "Graduation Project",
  "الرسالة": "Thesis",
  "التدريب الميداني": "Field Training",
  "التدريب النهائي": "Final Training",
  "إدارة المشاريع": "Project Management",
  "أخلاقيات المهندس": "Engineering Ethics",
  "أنظمة التشغيل الآلي": "Automation Systems",
  "الصيانة": "Maintenance",
  "اختياري": "Elective",
  "اختياري 1": "Elective 1",
  "اختياري 2": "Elective 2",
  "اختياري 3": "Elective 3",
  "اختياري 4": "Elective 4",
  "التصاميم ثلاثية الأبعاد": "3D Design",
  "عمليات التصنيع": "Manufacturing Processes",
  "ضبط الجودة": "Quality Control",
  "المحاكاة الحاسوبية": "Computer Simulation",
  "الإنتاج الآلي": "Automated Production",
  "تخطيط المصانع": "Factory Planning",
  "مشروع 1": "Project 1",
  "مشروع 2": "Project 2",
  "مشروع 3": "Project 3",
  "النسب الهندسية": "Engineering Metrology",
  "المعالجة الحرارية": "Heat Treatment",
  "الإنتاج المتقدم": "Advanced Manufacturing",
  "التكنولوجيا الحديثة": "Modern Technology",
  "إدارة الإنتاج": "Production Management",
  "الدوائر الكهربائية": "Electrical Circuits",
  "الفيزياء الكهربائية": "Electrical Physics",
  "الآلات الكهربائية": "Electrical Machines",
  "القوى الكهربائية": "Electrical Power",
  "المحولات": "Transformers",
  "أنظمة التوزيع الكهربائي": "Power Distribution Systems",
  "حماية الشبكات": "Network Protection",
  "الشبكات الكهربائية": "Electrical Grids",
  "الطاقة المتجددة": "Renewable Energy",
  "أنظمة القوى الكهربائية": "Power Systems",
  "محطات التوليد": "Power Plants",
  "أنظمة عليا": "High-Level Systems",
  "SCADA": "SCADA",
  "الصيانة الكهربائية": "Electrical Maintenance",
  "الدوائر الإلكترونية التناظرية": "Analog Electronic Circuits",
  "الفيزياء الإلكترونية": "Electronics Physics",
  "الدوائر الإلكترونية الرقمية": "Digital Electronic Circuits",
  "الإلكترونيات الأرضية": "Ground Electronics",
  "الاتصالات": "Communications",
  "معالجة الإشارات": "Signal Processing",
  "الأتمتة": "Automation",
  "الحساسات": "Sensors",
  "الإلكترونيات المتقدمة": "Advanced Electronics",
  "الاتصالات الرقمية": "Digital Communications",
  "البث": "Broadcasting",
  "الشبكات": "Networks",
  "الأنظمة الرقمية": "Digital Systems",
  "الأنظمة اللاسلكية": "Wireless Systems",
  "إلكترونيات بصرية": "Optoelectronics",
  "الدوائر الرقمية": "Digital Circuits",
  "آلات كهربائية": "Electrical Machines",
  "PLC و البرمجة الصناعية": "PLC & Industrial Programming",
  "PLC و التحكم الصناعي": "PLC & Industrial Control",
  "الروبوتات": "Robotics",
  "الحساسات والمحولات": "Sensors & Transducers",
  "SCADA و HMI": "SCADA & HMI",
  "التحكم الرقمي": "Digital Control",
  "الأتمتة الصناعية": "Industrial Automation",
  "الذكاء الاصطناعي": "Artificial Intelligence",
  "الذكاء الاصطناعي للمهندسين": "AI for Engineers",
  "الأنظمة الموزعة": "Distributed Systems",
  "إنترنت الأشياء IoT": "Internet of Things (IoT)",
  "كيمياء المواد": "Materials Chemistry",
  "فيزياء المواد": "Materials Physics",
  "البلورات": "Crystallography",
  "السبائك": "Alloys",
  "التشكيل": "Metal Forming",
  "الخواص الميكانيكية": "Mechanical Properties",
  "المعادن غير الحديدية": "Non-Ferrous Metals",
  "الأكاسيد": "Oxides",
  "تكنولوجيا الصلب": "Steel Technology",
  "المواد المتقدمة": "Advanced Materials",
  "المواد السيراميكية": "Ceramic Materials",
  "المساحيق": "Powder Metallurgy",
  "الكهرباء العامة": "General Electricity",
  "ديناميكا الموائع": "Fluid Dynamics",
  "إلكترونيات تناظرية": "Analog Electronics",
  "إلكترونيات رقمية": "Digital Electronics",
  "الروبوتات الصناعية": "Industrial Robotics",
  "الروبوتات الذكية": "Smart Robotics",
  "الأنظمة الصناعية": "Industrial Systems",
  "الأنظمة الدقيقة": "Microsystems",
  "معالجة الإشارات الرقمية": "Digital Signal Processing",
  "إدارة الصيانة": "Maintenance Management",
  "آلات التبريد": "Refrigeration Machines",
  "آلات التشكيل والتشغيل": "Forming and Machining Machines",
  "آلات الرفع": "Hoisting Machines",
  "آلات النقل": "Transport Machines",
  "آلات النقل والرفع": "Transport and Hoisting Machines",
  "آلات تشكيل المعادن": "Metal Forming Machines",
  "أسس التحكم والروبوت الصناعي": "Fundamentals of Control and Industrial Robotics",
  "أسس الروبوت الصناعي": "Fundamentals of Industrial Robotics",
  "أسس الهندسة الإلكترونية": "Fundamentals of Electronic Engineering",
  "أسس الهندسة الحرارية": "Fundamentals of Thermal Engineering",
  "أسس الهندسة الكهربائية": "Fundamentals of Electrical Engineering",
  "أسس الهندسة الكهربائية/1": "Fundamentals of Electrical Engineering 1",
  "أسس الهندسة الكهربائية/2": "Fundamentals of Electrical Engineering 2",
  "أنظمة الاتصال الصناعية": "Industrial Communication Systems",
  "إدارة الجودة": "Quality Management",
  "إلكترونيات القدرة الكهربائية/1": "Electric Power Electronics 1",
  "إلكترونيات القدرة الكهربائية/2": "Electric Power Electronics 2",
  "اتصالات المعطيات": "Data Communications",
  "اختبار المواد/1": "Materials Testing 1",
  "اختبار المواد/2": "Materials Testing 2",
  "اختبار المواد/3": "Materials Testing 3",
  "اقتصاديات الشبكات الكهربائية": "Economics of Electrical Grids",
  "الآلات الكهربائية وقيادتها": "Electrical Machines and Drives",
  "الآلات الكهربائية/1": "Electrical Machines 1",
  "الآلات الكهربائية/2": "Electrical Machines 2",
  "الآلات الكهربائية/3": "Electrical Machines 3",
  "الآلات الكهربائية/4": "Electrical Machines 4",
  "الآلات المائية": "Hydraulic Machines",
  "الآلات والدارات الهيدروليكية": "Hydraulic Machines and Circuits",
  "الأمن الصناعي": "Industrial Safety",
  "الإلكترونيات الدقيقة": "Microelectronics",
  "الإلكترونيات الصناعية": "Industrial Electronics",
  "الإنشاءات والهياكل المعدنية": "Metal Constructions and Structures",
  "البرمجة في التصميم والإنتاج": "Programming in Design and Production",
  "البرمجة في الطاقة الكهربائية": "Programming in Electrical Power",
  "البرمجة/1": "Programming 1",
  "البرمجة/2": "Programming 2",
  "التحكم الآلي الإلكتروني": "Electronic Automatic Control",
  "التحكم الآلي الإلكتروني/1": "Electronic Automatic Control 1",
  "التحكم الآلي الإلكتروني/2": "Electronic Automatic Control 2",
  "التحكم الآلي الإلكتروني/3": "Electronic Automatic Control 3",
  "التحكم الآلي الإلكتروني/4": "Electronic Automatic Control 4",
  "التحكم الآلي/1": "Automatic Control 1",
  "التحكم الآلي/2": "Automatic Control 2",
  "التحكم الرقمي المبرمج": "Programmed Digital Control",
  "التدفئة والتكييف": "Heating and Air Conditioning",
  "التدفئة والتهوية الصناعية": "Industrial Heating and Ventilation",
  "الترموديناميك الهندسي": "Engineering Thermodynamics",
  "الترموديناميك الهندسي/1": "Engineering Thermodynamics 1",
  "الترموديناميك الهندسي/2": "Engineering Thermodynamics 2",
  "الترموديناميك والآلات الحرارية": "Thermodynamics and Thermal Machines",
  "التشغيل المبرمج": "Programmed Operation",
  "التصميم الإلكتروني بمساعدة الحاسب": "Computer-Aided Electronic Design",
  "التصميم الإلكتروني بمساعدة الحاسوب": "Computer-Aided Electronic Design",
  "التصميم باستخدام الحاسوب": "Design Using Computers",
  "التصميم بالحاسوب": "Computer-Aided Design",
  "التصميم بمساعدة الحاسوب": "Computer-Aided Design",
  "التمثيل والرسم الهندسي": "Representation and Engineering Drawing",
  "التنظيم الصناعي": "Industrial Organization",
  "التنظيم الصناعي وإدارة المشروعات": "Industrial Organization and Project Management",
  "التنظيم والأمن الصناعي": "Industrial Organization and Safety",
  "التنظيم والاقتصاد الصناعي": "Industrial Organization and Economy",
  "الجودة الصناعية": "Industrial Quality",
  "الخطوط والإنتاجية وتصميمها": "Lines, Productivity and Their Design",
  "الخوارزميات وبنى المعطيات": "Algorithms and Data Structures",
  "الدارات الكهربائية/1": "Electrical Circuits 1",
  "الدارات الكهربائية/2": "Electrical Circuits 2",
  "الدارات المتكاملة": "Integrated Circuits",
  "الذكاء الصنعي": "Artificial Intelligence",
  "الرسم الهندسي/1": "Engineering Drawing 1",
  "الرسم الهندسي/2": "Engineering Drawing 2",
  "الرسم الهندسي/3": "Engineering Drawing 3",
  "الرسم والتمثيل الهندسي": "Drawing and Engineering Representation",
  "الرياضيات/1": "Mathematics 1",
  "الرياضيات/2": "Mathematics 2",
  "الرياضيات/3": "Mathematics 3",
  "الرياضيات/4": "Mathematics 4",
  "السبائك الخاصة ومعالجاتها": "Special Alloys and Their Treatments",
  "السكب آلاته": "Casting and Its Machines",
  "الشبكات الحاسوبية": "Computer Networks",
  "الشبكات الحاسوبية/1": "Computer Networks 1",
  "الشبكات الحاسوبية/2": "Computer Networks 2",
  "الصيانة والأمن الصناعي": "Maintenance and Industrial Safety",
  "الطاقات البديلة وحماية البيئة": "Alternative Energies and Environment Protection",
  "العنفات البخارية": "Steam Turbines",
  "العنفات الغازية": "Gas Turbines",
  "الفيزياء": "Physics",
  "الفيزياء/1": "Physics 1",
  "الفيزياء/2": "Physics 2",
  "القيادة الكهربائية": "Electric Drives",
  "القيادة الكهربائية/1": "Electric Drives 1",
  "القيادة الكهربائية/2": "Electric Drives 2",
  "القياس وأجهزة القياس": "Measurement and Instruments",
  "القياس وأجهزة القياس الكهربائية": "Electrical Measurement and Instruments",
  "القياس وأجهزة القياس الكهربائية/1": "Electrical Measurement and Instruments 1",
  "القياسات الميكانيكية": "Mechanical Measurements",
  "القياسات وأجهزة القياس": "Measurements and Measuring Instruments",
  "الكهرصوتيات": "Electroacoustics",
  "الكيمياء الصناعية": "Industrial Chemistry",
  "الكيمياء العامة والتحليلية/1": "General and Analytical Chemistry 1",
  "الكيمياء العامة والتحليلية/2": "General and Analytical Chemistry 2",
  "الكيمياء الفيزيائية": "Physical Chemistry",
  "اللغة الأجنبية/1": "Foreign Language 1",
  "اللغة الأجنبية/2": "Foreign Language 2",
  "اللغة الأجنبية/3": "Foreign Language 3",
  "اللغة الأجنبية/4": "Foreign Language 4",
  "اللغة العربية": "Arabic Language",
  "المحطات الكهربائية/1": "Electrical Substations 1",
  "المحطات الكهربائية/2": "Electrical Substations 2",
  "المعالجات التفرعية والبنى للحاسوب": "Parallel Processors and Computer Architectures",
  "المعالجات الحرارية": "Heat Treatments",
  "المعالجات الحرارية/1": "Heat Treatments 1",
  "المعالجات الحرارية/2": "Heat Treatments 2",
  "المواد المركبة": "Composite Materials",
  "الميكانيك الهندسي": "Engineering Mechanics",
  "الميكانيك الهندسي/1": "Engineering Mechanics 1",
  "الميكانيك الهندسي/2": "Engineering Mechanics 2",
  "النظم الخبيرة": "Expert Systems",
  "النظم المنطقية والدارات الرقمية": "Logic Systems and Digital Circuits",
  "النمذجة والمحاكاة": "Modeling and Simulation",
  "النمذجة والمحاكاة في النظم الميكانيكية": "Modeling and Simulation of Mechanical Systems",
  "الهندسة الإلكترونية/1": "Electronic Engineering 1",
  "الهندسة الإلكترونية/2": "Electronic Engineering 2",
  "الهندسة الإلكترونية/3": "Electronic Engineering 3",
  "الهندسة الإلكترونية/4": "Electronic Engineering 4",
  "الهندسة الصناعية": "Industrial Engineering",
  "الهندسة الوصفية": "Descriptive Geometry",
  "الهوائيات وانتشار الأمواج": "Antennas and Wave Propagation",
  "الوحدات المحيطية للحاسوب": "Computer Peripheral Units",
  "الورشات التخصصية": "Specialized Workshops",
  "انتقال الحرارة والكتلة": "Heat and Mass Transfer",
  "بنية الحاسوب": "Computer Architecture",
  "بنية الحاسوب/1": "Computer Architecture 1",
  "بنية الحاسوب/2": "Computer Architecture 2",
  "تآكل واهتراء المعادن": "Corrosion and Wear of Metals",
  "تحليل الإشارة": "Signal Analysis",
  "تحليل الشبكات الكهربائية": "Analysis of Electrical Grids",
  "ترشيد استهلاك الطاقة": "Energy Conservation",
  "ترشيد استهلاك الطاقة والبيئة": "Energy Conservation and Environment",
  "تصميم الآلات الكهربائية": "Design of Electrical Machines",
  "تصميم الآلات/1": "Machine Design 1",
  "تصميم الآلات/2": "Machine Design 2",
  "تصميم الأنظمة الميكا إلكترونية": "Design of Mechatronic Systems",
  "تصميم الشبكات الكهربائية": "Design of Electrical Grids",
  "تصميم القوالب المعدنية": "Design of Metal Molds",
  "تصميم اللحام": "Welding Design",
  "تصميم مبادلات حرارية": "Design of Heat Exchangers",
  "تصميم محركات الاحتراق الداخلي": "Design of Internal Combustion Engines",
  "تطبيقات PLC في الروبوت": "PLC Applications in Robotics",
  "تطبيقات صناعية": "Industrial Applications",
  "تقنية البصريات": "Optics Technology",
  "تكنولوجيا صب المعادن/1": "Metal Casting Technology 1",
  "تكنولوجيا صب المعادن/2": "Metal Casting Technology 2",
  "حساسات ومجسات": "Sensors and Probes",
  "حماية نظم القدرة الكهربائية": "Protection of Electrical Power Systems",
  "حماية نظم القدرة والتنسيق": "Power System Protection and Coordination",
  "خواص أنصاف النواقل": "Properties of Semiconductors",
  "خواص المواد الكهربائية": "Properties of Electrical Materials",
  "ديناميك آلات واهتزازات": "Machine Dynamics and Vibrations",
  "ديناميك الآلات والاهتزازات": "Machine Dynamics and Vibrations",
  "ديناميك الآلات واهتزازات": "Machine Dynamics and Vibrations",
  "ديناميك الغازات": "Gas Dynamics",
  "طرائق الإنتاج/1": "Production Methods 1",
  "طرائق الإنتاج/2": "Production Methods 2",
  "علم الليزر الصناعي": "Industrial Laser Science",
  "علم المعادن": "Metallurgy",
  "علم المعادن/1": "Metallurgy 1",
  "علم المعادن/2": "Metallurgy 2",
  "علم المعادن/3": "Metallurgy 3",
  "علم المواد واختباراتها": "Materials Science and Testing",
  "علم المواد وخواصها": "Materials Science and Properties",
  "علوم الليزر الصناعي": "Industrial Laser Sciences",
  "عناصر الآلات/1": "Machine Elements 1",
  "عناصر الآلات/2": "Machine Elements 2",
  "مبادئ الذكاء الصنعي": "Principles of Artificial Intelligence",
  "مبادئ عمل الحاسوب": "Principles of Computer Operation",
  "مبادئ عمل الحواسيب": "Principles of Computers Operation",
  "متحكمات صغرية": "Microcontrollers",
  "متحكمات منطقية قابلة للبرمجة (PLC)": "Programmable Logic Controllers (PLC)",
  "محركات الاحتراق الداخلي/1": "Internal Combustion Engines 1",
  "محركات الاحتراق الداخلي/2": "Internal Combustion Engines 2",
  "محركات ومحطات الطاقة": "Engines and Power Plants",
  "محطات توليد الطاقة": "Power Generation Plants",
  "معالجة الإشارة": "Signal Processing",
  "معالجة الصور": "Image Processing",
  "مقاومة المواد وخواصها": "Strength and Properties of Materials",
  "مقاومة المواد/1": "Strength of Materials 1",
  "مقاومة المواد/2": "Strength of Materials 2",
  "مولدات البخار": "Steam Generators",
  "ميكانيك الموائع": "Fluid Mechanics",
  "ميكانيك الموائع/1": "Fluid Mechanics 1",
  "ميكانيك الموائع/2": "Fluid Mechanics 2",
  "نظرية الآلات": "Theory of Machines",
  "نظرية التدفقات": "Theory of Flows",
  "نظرية الحقول": "Field Theory",
  "نظرية المعلومات": "Information Theory",
  "نظرية تشكيل المعادن": "Theory of Metal Forming",
  "نظرية تشكيل المعادن/1": "Theory of Metal Forming 1",
  "نظرية تشكيل المعادن/2": "Theory of Metal Forming 2",
  "نظرية قطع المعادن": "Theory of Metal Cutting",
  "نظرية هندسة اللحام/1": "Theory of Welding Engineering 1",
  "نظرية هندسة اللحام/2": "Theory of Welding Engineering 2",
  "نظم الآلات المبرمجة والروبوت": "Programmed Machines and Robotics Systems",
  "نظم التحصيل": "Acquisition Systems",
  "نظم التحكم": "Control Systems",
  "نظم التحكم الصناعي": "Industrial Control Systems",
  "نظم التحكم في الزمن الحقيقي": "Real-Time Control Systems",
  "نظم التشغيل": "Operating Systems",
  "نظم القدرة الكهربائية": "Electrical Power Systems",
  "نظم القدرة الكهربائية/1": "Electrical Power Systems 1",
  "نظم القدرة الكهربائية/2": "Electrical Power Systems 2",
  "نظم القياسات الإلكترونية": "Electronic Measurement Systems",
  "نظم القياسات المعلوماتية": "Measurement Informatics Systems",
  "نظم القياسات المعلوماتية/1": "Measurement Informatics Systems 1",
  "نظم القياسات المعلوماتية/2": "Measurement Informatics Systems 2",
  "نظم المعالجات الصغرية": "Microprocessor Systems",
  "هندسة الأمواج الميكروية": "Microwave Engineering",
  "هندسة الإنارة": "Lighting Engineering",
  "هندسة الإنتاج": "Production Engineering",
  "هندسة الإنتاج/1": "Production Engineering 1",
  "هندسة الإنتاج/2": "Production Engineering 2",
  "هندسة الإنتاج/3": "Production Engineering 3",
  "هندسة الاتصالات": "Communications Engineering",
  "هندسة الاتصالات/1": "Communications Engineering 1",
  "هندسة الاتصالات/2": "Communications Engineering 2",
  "هندسة الاتصالات/3": "Communications Engineering 3",
  "هندسة الاتصالات/4": "Communications Engineering 4",
  "هندسة التدفئة وتكييف الهواء": "Heating and Air Conditioning Engineering",
  "هندسة التلفزيون": "Television Engineering",
  "هندسة التهوية": "Ventilation Engineering",
  "هندسة التوتر العالي/1": "High Voltage Engineering 1",
  "هندسة التوتر العالي/2": "High Voltage Engineering 2",
  "هندسة الحواسيب": "Computer Engineering",
  "هندسة الحواسيب/1": "Computer Engineering 1",
  "هندسة الحواسيب/2": "Computer Engineering 2",
  "هندسة الدارات الرقمية": "Digital Circuits Engineering",
  "هندسة الرادار": "Radar Engineering",
  "هندسة السطوح": "Surface Engineering",
  "هندسة اللدائن": "Plastics Engineering",
  "هندسة المواد المركبة": "Composite Materials Engineering",
  "هندسة مساحيق المعادن": "Metal Powders Engineering"
};

function cName(course) {
  if (window.LANG === 'en' && COURSES_EN[course]) return COURSES_EN[course];
  return course;
}

/* كل فرع: [فصل أول، فصل ثانٍ] لكل سنة من السنوات الخمس */
const DEPARTMENTS = [
  {
    slug: "qowa",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',
    color: "var(--dept-qowa)",
    name: { ar: "هندسة القوى الميكانيكية", en: "Mechanical Power Engineering" },
    title: { ar: "القوى الميكانيكية", en: "Mechanical Power" },
    tagline: { ar: "تصميم وتحليل الآلات وأنظمة النقل والطاقة الميكانيكية", en: "Design and analysis of machines, power and transmission systems" },
    about: {
      ar: "فرع يهتم بتحويل الطاقة الميكانيكية والعمل، يتعلم الطالب تصميم وتحليل الآلات والمحركات وأنظمة الحرارة والسوائل، ويكتسب القدرة على دراسة المصانع وأنظمة التشغيل والصيانة من الناحية الميكانيكية والمبادلات الحرارية.",
      en: "A branch focused on mechanical energy conversion. Students learn to design and analyse machines, engines, heat and fluid systems, and gain the ability to study factories, operation systems, maintenance and heat exchangers."
    },
    careers: {
      ar: [
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>', title: "مصانع السيارات", text: "تصميم وتجميع وتطوير أنظمة المركبات" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.7s6 6.5 6 11.3a6 6 0 0 1-12 0c0-4.8 6-11.3 6-11.3z"/></svg>', title: "شركات النفط والغاز", text: "تجهيزات وحقول ومحطات الضخ" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 13l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 4.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/></svg>', title: "مراكز صيانة الطائرات", text: "صيانة المحركات وأنظمة الدفع" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20"/><path d="M4 20V8l5 4V8l5 4V4h6v16"/></svg>', title: "المصانع الصناعية", text: "خطوط الإنتاج والآلات الحرارية" }
      ],
      en: [
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>', title: "Auto industries", text: "Design, assembly and vehicle systems development" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.7s6 6.5 6 11.3a6 6 0 0 1-12 0c0-4.8 6-11.3 6-11.3z"/></svg>', title: "Oil & gas companies", text: "Equipment, fields and pumping stations" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 13l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 4.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/></svg>', title: "Aircraft maintenance", text: "Engine and propulsion systems maintenance" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20"/><path d="M4 20V8l5 4V8l5 4V4h6v16"/></svg>', title: "Industrial plants", text: "Production lines and thermal machines" }
      ]
    },
    guide: {
      ar: ["الأقوى في: الآلات والمحركات والسيارات", "تناسبك إذا: تحب تفكيك الآلات والاشتغال بيديك", "بيئة العمل: مصانع، شركات نفط، صيانة"],
      en: ["Strong in: machines, engines and cars", "Fits you if: you love dismantling machines", "Workplace: factories, oil, maintenance"]
    },
    years: [
      [["الرياضيات/1", "الفيزياء/1", "اللغة الأجنبية/1", "الهندسة الوصفية", "الكيمياء الصناعية", "اللغة العربية"],
        ["الرياضيات/2", "اللغة الأجنبية/2", "الفيزياء/2", "الرسم الهندسي/1", "الميكانيك الهندسي/1"]],
      [["الرياضيات/3", "اللغة الأجنبية/3", "الميكانيك الهندسي/2", "الرسم الهندسي/2", "هندسة الحواسيب/1", "أسس الهندسة الكهربائية"],
        ["الرياضيات/4", "اللغة الأجنبية/4", "الترموديناميك الهندسي/1", "هندسة الحواسيب/2", "الآلات الكهربائية وقيادتها", "مقاومة المواد/1"]],
      [["مقاومة المواد/2", "القياسات الميكانيكية", "ميكانيك الموائع/1", "الترموديناميك الهندسي/2", "انتقال الحرارة والكتلة", "علم المواد وخواصها"],
        ["الإلكترونيات الصناعية", "عناصر الآلات/1", "محركات الاحتراق الداخلي/1", "ميكانيك الموائع/2", "نظرية الآلات", "هندسة الإنتاج"]],
      [["محركات الاحتراق الداخلي/2", "عناصر الآلات/2", "ترشيد استهلاك الطاقة", "العنفات البخارية", "ديناميك الآلات والاهتزازات", "الأمن الصناعي"],
        ["تصميم محركات الاحتراق الداخلي", "تصميم مبادلات حرارية", "ديناميك الغازات", "العنفات الغازية", "التصميم بمساعدة الحاسوب", "مولدات البخار"]],
      [["النمذجة والمحاكاة في النظم الميكانيكية", "الطاقات البديلة وحماية البيئة", "آلات التبريد", "هندسة التدفئة وتكييف الهواء", "التنظيم الصناعي وإدارة المشروعات"],
        ["أسس الروبوت الصناعي", "الآلات المائية", "هندسة التهوية", "التحكم الآلي", "محطات توليد الطاقة"]]
     ]
  },

  {
    slug: "tasmim",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><circle cx="11" cy="11" r="2"/></svg>',
    color: "var(--dept-tasmim)",
    name: { ar: "هندسة التصميم والإنتاج", en: "Design & Production Engineering" },
    title: { ar: "التصميم والإنتاج", en: "Design & Production" },
    tagline: { ar: "من الفكرة إلى المنتج النهائي: التصنيع والتكنولوجيا وضمان الجودة", en: "From idea to final product: manufacturing, technology and quality assurance" },
    about: {
      ar: "فرع يربط الإبداع في التصميم بتقنيات الإنتاج الحديثة. يتعلم الطالب تصميم المنتجات والقطع، عمليات التصنيع والتشكيل، التصنيع الرقمي وضبط الجودة، ليصبح قادراً على تحويل أي فكرة إلى منتج حقيقي قابل للتصنيع بجودة واقتصاد.",
      en: "A branch linking creative design with modern production techniques. Students learn product design, manufacturing and forming processes, digital fabrication and quality control, enabling them to turn any idea into a real, quality and economical product."
    },
    careers: {
      ar: [
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20"/><path d="M4 20V8l5 4V8l5 4V4h6v16"/></svg>', title: "شركات التصنيع", text: "تصميم وإدارة خطوط الإنتاج" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>', title: "مراكز التصميم", text: "تطوير المنتجات والهندسة الرقمية" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8l-9-5-9 5v8l9 5 9-5z"/><path d="M3.3 7l8.7 4.7L20.7 7M12 22V11"/></svg>', title: "الطباعة ثلاثية الأبعاد", text: "النمذجة والتصنيع الإضافي" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>', title: "مصانع الأدوية والغذاء", text: "تجهيزات ومعالق التصنيع الآمن" }
      ],
      en: [
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20"/><path d="M4 20V8l5 4V8l5 4V4h6v16"/></svg>', title: "Manufacturing firms", text: "Design and manage production lines" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>', title: "Design centres", text: "Product development and digital engineering" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8l-9-5-9 5v8l9 5 9-5z"/><path d="M3.3 7l8.7 4.7L20.7 7M12 22V11"/></svg>', title: "3D printing", text: "Modelling and additive manufacturing" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>', title: "Pharma & food plants", text: "Safe processing equipment" }
      ]
    },
    guide: {
      ar: ["الأقوى في: تحويل الفكرة إلى منتج", "تناسبك إذا: تحب التصميم والإبداع والتصنيع", "بيئة العمل: مصانع، مراكز تصميم، طباعة 3D"],
      en: ["Strong in: turning ideas into products", "Fits you if: you love design, creativity and making", "Workplace: factories, design centres, 3D printing"]
    },
    years: [
      [["الرياضيات/1", "الفيزياء/1", "اللغة الأجنبية/1", "الهندسة الوصفية", "الكيمياء الصناعية", "اللغة العربية"],
        ["الرياضيات/2", "اللغة الأجنبية/2", "الفيزياء/2", "الرسم الهندسي/1", "الميكانيك الهندسي/1"]],
      [["الرياضيات/3", "اللغة الأجنبية/3", "الرسم الهندسي/2", "الميكانيك الهندسي/2", "مقاومة المواد/1", "أسس الهندسة الكهربائية"],
        ["الرياضيات/4", "اللغة الأجنبية/4", "الرسم الهندسي/3", "مقاومة المواد/2", "هندسة الإنتاج/1", "علم المواد واختباراتها"]],
      [["علم المعادن", "نظرية الآلات", "الترموديناميك الهندسي", "هندسة الإنتاج/2", "القياسات الميكانيكية", "هندسة الحواسيب"],
        ["محركات ومحطات الطاقة", "هندسة الإنتاج/3", "ميكانيك الموائع", "تصميم الآلات/1", "الآلات الكهربائية وقيادتها", "البرمجة في التصميم والإنتاج", "التشغيل المبرمج"]],
      [["المعالجات الحرارية", "الهندسة الصناعية", "تصميم الآلات/2", "آلات النقل", "الآلات والدارات الهيدروليكية", "نظرية تشكيل المعادن"],
        ["التحكم الآلي", "آلات الرفع", "ديناميك الآلات واهتزازات", "التدفئة والتهوية الصناعية", "التصميم بالحاسوب", "الخطوط والإنتاجية وتصميمها"]],
      [["علوم الليزر الصناعي", "أسس الروبوت الصناعي", "الصيانة والأمن الصناعي", "نظرية قطع المعادن", "المواد المركبة"],
        ["آلات التشكيل والتشغيل", "هندسة اللدائن", "التنظيم والاقتصاد الصناعي", "السكب آلاته", "تصميم القوالب المعدنية"]]
     ]
  },

  {
    slug: "taqa",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
    color: "var(--dept-taqa)",
    name: { ar: "هندسة الطاقة الكهربائية", en: "Electrical Power Engineering" },
    title: { ar: "الطاقة الكهربائية", en: "Electrical Power" },
    tagline: { ar: "أنظمة التوليد والنقل والاستهلاك الكهربائي والطاقة المتجددة", en: "Generation, transmission and renewable energy systems" },
    about: {
      ar: "فرع متخصص في عالم الطاقة الكهربائية من محطات التوليد حتى المقبس. يتعلم الطالب الآلات الكهربائية والمحولات والشبكات وأنظمة الحماية والطاقة المتجددة، ويصبح قادراً على العمل في هندسة القوى وتوزيع الطاقة.",
      en: "A specialised branch in the electric power world, from generation stations to the socket. Students study electrical machines, transformers, grids, protection systems and renewables, ready for power engineering careers."
    },
    careers: {
      ar: [
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>', title: "شركة الكهرباء", text: "التوزيع ونقل الطاقة" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20"/><path d="M4 20V8l5 4V8l5 4V4h6v16"/></svg>', title: "محطات التوليد", text: "تشغيل وصيانة وحدات التوليد" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>', title: "شركات الطاقة الشمسية", text: "تصميم وتركيب الأنظمة الكهروضوئية" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2v6M15 2v6M7 8h10v4a5 5 0 0 1-5 5 5 5 0 0 1-5-5V8zM12 17v5"/></svg>', title: "المصانع الكهربائية", text: "أنظمة القوى والكهروميكانيك" }
      ],
      en: [
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>', title: "Electricity company", text: "Distribution and power transmission" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20"/><path d="M4 20V8l5 4V8l5 4V4h6v16"/></svg>', title: "Power plants", text: "Operation and maintenance of units" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>', title: "Solar companies", text: "Design and install PV systems" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2v6M15 2v6M7 8h10v4a5 5 0 0 1-5 5 5 5 0 0 1-5-5V8zM12 17v5"/></svg>', title: "Electrical plants", text: "Power and electromechanical systems" }
      ]
    },
    guide: {
      ar: ["الأقوى في: الكهرباء والتوليد والطاقة المتجددة", "تناسبك إذا: تحب الكهرباء والطاقة الشمسية", "بيئة العمل: شركة الكهرباء، محطات التوليد"],
      en: ["Strong in: electricity, generation and renewables", "Fits you if: you love electricity and solar energy", "Workplace: power company, generation plants"]
    },
    years: [
      [["الرياضيات/1", "الفيزياء/1", "مبادئ عمل الحواسيب", "الميكانيك الهندسي", "اللغة الأجنبية/1"],
        ["الرياضيات/2", "الفيزياء/2", "الكيمياء الصناعية", "التمثيل والرسم الهندسي", "اللغة العربية", "اللغة الأجنبية/2"]],
      [["الرياضيات/3", "البرمجة/1", "خواص المواد الكهربائية", "الترموديناميك والآلات الحرارية", "أسس الهندسة الكهربائية/1", "اللغة الأجنبية/3"],
        ["الرياضيات/4", "التنظيم والأمن الصناعي", "اللغة الأجنبية/4", "مقاومة المواد وخواصها", "أسس الهندسة الكهربائية/2", "الورشات التخصصية"]],
      [["أسس الهندسة الإلكترونية", "الآلات الكهربائية/1", "نظرية الحقول", "الدارات الكهربائية/1", "القياس وأجهزة القياس", "البرمجة/2"],
        ["الدارات الكهربائية/2", "الآلات الكهربائية/2", "هندسة الإنارة", "إلكترونيات القدرة الكهربائية/1", "نظم القدرة الكهربائية/1", "ترشيد استهلاك الطاقة والبيئة"]],
      [["التحكم الآلي/1", "إلكترونيات القدرة الكهربائية/2", "الآلات الكهربائية/3", "البرمجة في الطاقة الكهربائية", "هندسة التوتر العالي/1", "نظم القدرة الكهربائية/2"],
        ["التحكم الآلي/2", "الآلات الكهربائية/4", "هندسة التوتر العالي/2", "الذكاء الصنعي", "المحطات الكهربائية/1"]],
      [["تحليل الشبكات الكهربائية", "القيادة الكهربائية/1", "حماية نظم القدرة الكهربائية", "تصميم الآلات الكهربائية", "المحطات الكهربائية/2"],
        ["القيادة الكهربائية/2", "تصميم الشبكات الكهربائية", "إدارة الجودة", "حماية نظم القدرة والتنسيق", "اقتصاديات الشبكات الكهربائية"]]
     ]
  },

  {
    slug: "electron",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="5" width="14" height="14" rx="2"/><rect x="10" y="10" width="4" height="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg>',
    color: "var(--dept-electron)",
    name: { ar: "هندسة الإلكترونيات والاتصالات", en: "Electronics & Communications Engineering" },
    title: { ar: "الإلكترونيات والاتصالات", en: "Electronics & Comms" },
    tagline: { ar: "الدوائر الإلكترونية وأشباه الموصلات وأنظمة الاتصال الحديثة", en: "Electronic circuits, semiconductors and modern communication systems" },
    about: {
      ar: "فرع يعمل في قلب التقنية الحديثة: الدوائر الإلكترونية، معالجة الإشارات، أنظمة الاتصالات والبث. يتعلم الطالب تصميم الأنظمة الإلكترونية الرقمية والتناظرية وفهم بنية الشبكات والأنظمة اللاسلكية.",
      en: "A branch at the heart of modern technology: electronic circuits, signal processing, communications and broadcasting. Students design analog and digital systems and understand networks and wireless technologies."
    },
    careers: {
      ar: [
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 8.5a14 14 0 0 1 20 0"/><path d="M5 12a9 9 0 0 1 14 0"/><path d="M8.5 15.5a4 4 0 0 1 7 0"/><circle cx="12" cy="19" r="1.2"/></svg>', title: "شركات الاتصالات", text: "الشبكات والبنية التحتية" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>', title: "مراكز البحث", text: "تطوير الأنظمة الإلكترونية" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="5" width="14" height="14" rx="2"/><rect x="10" y="10" width="4" height="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg>', title: "مصانع الإلكترونيات", text: "تصميم وتجميع اللوحات" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10a12 12 0 0 1 16 0"/><path d="M6 14a7 7 0 0 1 12 0"/><circle cx="12" cy="17" r="2"/></svg>', title: "شركات البث", text: "أنظمة الإرسال والاستقبال" }
      ],
      en: [
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 8.5a14 14 0 0 1 20 0"/><path d="M5 12a9 9 0 0 1 14 0"/><path d="M8.5 15.5a4 4 0 0 1 7 0"/><circle cx="12" cy="19" r="1.2"/></svg>', title: "Telecom companies", text: "Networks and infrastructure" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>', title: "Research centres", text: "Developing electronic systems" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="5" width="14" height="14" rx="2"/><rect x="10" y="10" width="4" height="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg>', title: "Electronics plants", text: "Board design and assembly" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10a12 12 0 0 1 16 0"/><path d="M6 14a7 7 0 0 1 12 0"/><circle cx="12" cy="17" r="2"/></svg>', title: "Broadcasting", text: "Transmission and reception systems" }
      ]
    },
    guide: {
      ar: ["الأقوى في: الدوائر والاتصالات والبث", "تناسبك إذا: تحب الدقة والإلكترونيات والتفاصيل", "بيئة العمل: شركات اتصالات، مراكز بحث"],
      en: ["Strong in: circuits, communications and broadcast", "Fits you if: you love precision and electronics", "Workplace: telecom firms, research centres"]
    },
    years: [
      [["الرياضيات/1", "الفيزياء/1", "الميكانيك الهندسي", "مبادئ عمل الحواسيب", "اللغة الأجنبية/1"],
        ["الرياضيات/2", "الكيمياء الصناعية", "اللغة العربية", "التمثيل والرسم الهندسي", "الفيزياء/2", "اللغة الأجنبية/2"]],
      [["الرياضيات/3", "أسس الهندسة الكهربائية/1", "خواص المواد الكهربائية", "نظرية الحقول", "اللغة الأجنبية/3", "الترموديناميك والآلات الحرارية"],
        ["الرياضيات/4", "أسس الهندسة الكهربائية/2", "البرمجة/1", "القياس وأجهزة القياس الكهربائية", "مقاومة المواد وخواصها", "اللغة الأجنبية/4"]],
      [["الكهرصوتيات", "الهندسة الإلكترونية/1", "الدارات الكهربائية/1", "نظم القدرة الكهربائية", "البرمجة/2", "الخوارزميات وبنى المعطيات"],
        ["الشبكات الحاسوبية", "النظم المنطقية والدارات الرقمية", "نظم القياسات الإلكترونية", "التحكم الآلي الإلكتروني", "الدارات الكهربائية/2", "الهندسة الإلكترونية/2"]],
      [["الدارات المتكاملة", "الهندسة الإلكترونية/3", "بنية الحاسوب", "هندسة الاتصالات/1", "تحليل الإشارة", "الإلكترونيات الصناعية"],
        ["هندسة الرادار", "هندسة الاتصالات/2", "الهندسة الإلكترونية/4", "هندسة الأمواج الميكروية", "نظم القياسات المعلوماتية", "إدارة الجودة"]],
      [["هندسة الاتصالات/3", "التصميم الإلكتروني بمساعدة الحاسب", "هندسة التلفزيون", "الهوائيات وانتشار الأمواج", "اتصالات المعطيات"],
        ["نظرية المعلومات", "الإلكترونيات الدقيقة", "معالجة الإشارة", "هندسة الاتصالات/4"]]
     ]
  },

  {
    slug: "tahakum",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
    color: "var(--dept-tahakum)",
    name: { ar: "هندسة التحكم الآلي والحواسيب", en: "Automatic Control & Computers Engineering" },
    title: { ar: "التحكم الآلي والحواسيب", en: "Control & Computers" },
    tagline: { ar: "أنظمة التحكم الصناعي والأتمتة وبرمجة الحواسيب الدقيقة", en: "Industrial control, automation and microcontroller programming" },
    about: {
      ar: "فرع يدمج البرمجة بالهندسة: يتعلم الطالب لغات البرمجة، المتحكمات الصناعية PLC، أنظمة التحكم الرقمي، الأتمتة والذكاء الاصطناعي، ليصبح قادراً على بناء الأنظمة الذكية التي تعمل تلقائياً.",
      en: "A branch merging programming with engineering: C/C++ languages, PLC industrial controllers, digital control, automation and AI, to build intelligent self-running systems."
    },
    careers: {
      ar: [
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20"/><path d="M4 20V8l5 4V8l5 4V4h6v16"/></svg>', title: "المصانع الذكية", text: "أتمتة وتحديث الخطوط" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>', title: "شركات البرمجيات", text: "تطوير أنظمة التحكم" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>', title: "أنظمة SCADA", text: "مراقبة وإدارة العمليات" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M12 4v4"/><path d="M9 4h6"/><circle cx="8.5" cy="13.5" r="1"/><circle cx="15.5" cy="13.5" r="1"/><path d="M9 16.5h6"/></svg>', title: "مراكز المراقبة", text: "أنظمة التحكم المركزي" }
      ],
      en: [
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20"/><path d="M4 20V8l5 4V8l5 4V4h6v16"/></svg>', title: "Smart factories", text: "Automation and line upgrades" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>', title: "Software firms", text: "Developing control systems" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>', title: "SCADA systems", text: "Process monitoring and management" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M12 4v4"/><path d="M9 4h6"/><circle cx="8.5" cy="13.5" r="1"/><circle cx="15.5" cy="13.5" r="1"/><path d="M9 16.5h6"/></svg>', title: "Control centres", text: "Centralised control systems" }
      ]
    },
    guide: {
      ar: ["الأقوى في: البرمجة والأتمتة والأنظمة الذكية", "تناسبك إذا: تحب البرمجة والحاسوب والخوارزميات", "بيئة العمل: مصانع ذكية، شركات برمجيات"],
      en: ["Strong in: programming, automation, smart systems", "Fits you if: you love coding and computing", "Workplace: smart factories, software firms"]
    },
    years: [
      [["الرياضيات/1", "الفيزياء/1", "الميكانيك الهندسي", "مبادئ عمل الحواسيب", "اللغة الأجنبية/1"],
        ["الرياضيات/2", "الفيزياء/2", "الكيمياء الصناعية", "التمثيل والرسم الهندسي", "اللغة العربية", "اللغة الأجنبية/2"]],
      [["الرياضيات/3", "أسس الهندسة الكهربائية/1", "القياس وأجهزة القياس الكهربائية/1", "نظرية الحقول", "اللغة الأجنبية/3", "الترموديناميك والآلات الحرارية"],
        ["الرياضيات/4", "أسس الهندسة الكهربائية/2", "البرمجة/1", "مقاومة المواد وخواصها", "خواص المواد الكهربائية", "اللغة الأجنبية/4"]],
      [["تحليل الإشارة", "الهندسة الإلكترونية/1", "الدارات الكهربائية/1", "التحكم الآلي الإلكتروني/1", "البرمجة/2", "الخوارزميات وبنى المعطيات"],
        ["الوحدات المحيطية للحاسوب", "النظم المنطقية والدارات الرقمية", "نظم القياسات الإلكترونية", "التحكم الآلي الإلكتروني/2", "الدارات الكهربائية/2", "الهندسة الإلكترونية/2"]],
      [["هندسة الاتصالات", "الهندسة الإلكترونية/3", "التحكم الآلي الإلكتروني/3", "الدارات المتكاملة", "نظم المعالجات الصغرية", "نظم القياسات المعلوماتية/1"],
        ["بنية الحاسوب/1", "التصميم الإلكتروني بمساعدة الحاسوب", "مبادئ الذكاء الصنعي", "معالجة الإشارة", "التحكم الآلي الإلكتروني/4", "نظم التشغيل"]],
      [["نظم التحصيل", "نظم الآلات المبرمجة والروبوت", "الشبكات الحاسوبية/1", "بنية الحاسوب/2", "نظم التحكم الصناعي"],
        ["نظم القياسات المعلوماتية/2", "المعالجات التفرعية والبنى للحاسوب", "الشبكات الحاسوبية/2", "النظم الخبيرة", "نظم التحكم في الزمن الحقيقي"]]
     ]
  },

  {
    slug: "mechatronics",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M12 4v4"/><path d="M9 4h6"/><circle cx="8.5" cy="13.5" r="1"/><circle cx="15.5" cy="13.5" r="1"/><path d="M9 16.5h6"/></svg>',
    color: "var(--dept-mechatronics)",
    name: { ar: "هندسة الميكاترونيك", en: "Mechatronics Engineering" },
    title: { ar: "الميكاترونيك", en: "Mechatronics" },
    tagline: { ar: "الدمج بين الميكانيكا والكهرباء والبرمجيات لتصميم الأنظمة الذكية", en: "Merging mechanics, electronics and software to design smart systems" },
    about: {
      ar: "فرع هندسي متعدد التخصصات يجمع الميكانيكا والكهرباء والتحكم والحاسوب. يتعلم الطالب تصميم وبرمجة الروبوتات والأنظمة الذكية وخطوط الإنتاج الأوتوماتيكية، ليصبح مهندساً شاملاً يربط الجسور بين التخصصات التقنية.",
      en: "A multidisciplinary engineering branch combining mechanics, electricity, control and computing. Students design and program robots, smart systems and automated lines — a comprehensive engineer connecting technical fields."
    },
    careers: {
      ar: [
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20"/><path d="M4 20V8l5 4V8l5 4V4h6v16"/></svg>', title: "التصنيع الأوتوماتيكي", text: "تصميم خطوط الإنتاج الذكية" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M12 4v4"/><path d="M9 4h6"/><circle cx="8.5" cy="13.5" r="1"/><circle cx="15.5" cy="13.5" r="1"/><path d="M9 16.5h6"/></svg>', title: "الروبوتات", text: "تصميم وبرمجة الروبوتات" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>', title: "أنظمة التحكم", text: "PLC و SCADA" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>', title: "البحث والتطوير", text: "حلول تقنية مبتكرة" }
      ],
      en: [
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20"/><path d="M4 20V8l5 4V8l5 4V4h6v16"/></svg>', title: "Automated manufacturing", text: "Designing smart production lines" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M12 4v4"/><path d="M9 4h6"/><circle cx="8.5" cy="13.5" r="1"/><circle cx="15.5" cy="13.5" r="1"/><path d="M9 16.5h6"/></svg>', title: "Robotics", text: "Robot design and programming" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>', title: "Control systems", text: "PLC and SCADA" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>', title: "R&D", text: "Innovative technical solutions" }
      ]
    },
    guide: {
      ar: ["الأقوى في: دمج الميكانيكا والكهرباء والبرمجيات", "تناسبك إذا: تحب كل المجالات وتبني الأنظمة الذكية", "بيئة العمل: روبوتات، أتمتة، تصنيع ذكي"],
      en: ["Strong in: combining mechanics, electronics, software", "Fits you if: you love building smart systems", "Workplace: robotics, automation, smart manufacturing"]
    },
    years: [
      [["الرياضيات/1", "الفيزياء", "اللغة الأجنبية/1", "مبادئ عمل الحاسوب", "الرسم والتمثيل الهندسي", "الكيمياء الصناعية"],
        ["الرياضيات/2", "اللغة الأجنبية/2", "البرمجة/1", "أسس الهندسة الكهربائية", "اللغة العربية", "الميكانيك الهندسي/1"]],
      [["الرياضيات/3", "اللغة الأجنبية/3", "البرمجة/2", "الميكانيك الهندسي/2", "هندسة الإنتاج", "مقاومة المواد وخواصها"],
        ["الرياضيات/4", "اللغة الأجنبية/4", "نظم التحكم", "أسس الهندسة الحرارية", "أسس الهندسة الإلكترونية", "حساسات ومجسات", "ميكانيك الموائع"]],
      [["الشبكات الحاسوبية", "نظرية الآلات", "القياسات وأجهزة القياس", "الآلات الكهربائية", "بنية الحاسوب", "تقنية البصريات"],
        ["تصميم الآلات", "الإلكترونيات الصناعية", "التصميم باستخدام الحاسوب", "هندسة الدارات الرقمية", "تصميم الأنظمة الميكا إلكترونية", "متحكمات منطقية قابلة للبرمجة (PLC)"]],
      [["التحكم الآلي", "النمذجة والمحاكاة", "القيادة الكهربائية", "الصيانة والأمن الصناعي", "آلات النقل والرفع", "إدارة الجودة"],
        ["الأتمتة الصناعية", "متحكمات صغرية", "معالجة الإشارة", "ديناميك آلات واهتزازات", "آلات تشكيل المعادن", "التدفئة والتكييف"]],
      [["تطبيقات صناعية", "نظم التحكم في الزمن الحقيقي", "نظم القياسات المعلوماتية", "ترشيد استهلاك الطاقة والبيئة", "أنظمة الاتصال الصناعية"],
        ["الذكاء الصنعي", "معالجة الصور", "الاتصالات", "تطبيقات PLC في الروبوت", "التنظيم الصناعي"]]
     ]
  },

  {
    slug: "maaden",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.3L4.6 18.2A2 2 0 0 0 6.4 21h11.2a2 2 0 0 0 1.8-2.8L14 9.3V2"/><path d="M8.5 2h7"/><path d="M8.6 14.5h6.8"/></svg>',
    color: "var(--dept-maaden)",
    name: { ar: "هندسة المعادن", en: "Metallurgical Engineering" },
    title: { ar: "المعادن", en: "Metallurgy" },
    tagline: { ar: "علوم المواد وهندسة المعادن والمعالجة الحرارية وتطوير السبائك", en: "Materials science, metallurgy, heat treatment and alloys" },
    about: {
      ar: "فرع يدرس سلوك المواد والمعادن من الذرة حتى المنتج. يتعلم الطالب علم المواد والبلورات والمعالجة الحرارية وتشكيل المعادن وتطوير السبائك، ويعمل على المادة التي تقوم عليها كل الصناعات.",
      en: "A branch studying the behaviour of materials and metals, from the atom to the product. Students learn materials science, crystallography, heat treatment, metal forming and alloy development — the foundation of every industry."
    },
    careers: {
      ar: [
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20"/><path d="M4 20V8l5 4V8l5 4V4h6v16"/></svg>', title: "مصانع الصلب", text: "إنتاج وفهرس المواد" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3l4 8 5-5 5 15H2L8 3z"/></svg>', title: "شركات التعدين", text: "استخراج ومعالجة الخامات" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>', title: "مراكز البحث", text: "تطوير مواد جديدة" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>', title: "مصانع السيراميك والزجاج", text: "مواد البناء المتقدمة" }
      ],
      en: [
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20"/><path d="M4 20V8l5 4V8l5 4V4h6v16"/></svg>', title: "Steel mills", text: "Production and materials engineering" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3l4 8 5-5 5 15H2L8 3z"/></svg>', title: "Mining firms", text: "Ore extraction and processing" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>', title: "Research centres", text: "Developing new materials" },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>', title: "Ceramics & glass", text: "Advanced building materials" }
      ]
    },
    guide: {
      ar: ["الأقوى في: علوم المواد والسبائك والمعالجة", "تناسبك إذا: تحب الكيمياء والمواد والتكنولوجيا", "بيئة العمل: مصانع صلب، تعدين، سيراميك"],
      en: ["Strong in: materials science and alloys", "Fits you if: you love chemistry and materials", "Workplace: steel mills, mining, ceramics"]
    },
    years: [
      [["الرياضيات/1", "الفيزياء/1", "الهندسة الوصفية", "الكيمياء العامة والتحليلية/1", "اللغة الأجنبية/1", "اللغة العربية"],
        ["الرياضيات/2", "الفيزياء/2", "الرسم الهندسي/1", "الكيمياء العامة والتحليلية/2", "اللغة الأجنبية/2"]],
      [["الرياضيات/3", "أسس الهندسة الكهربائية", "مقاومة المواد", "الرسم الهندسي/2", "الميكانيك الهندسي/1", "اللغة الأجنبية/3"],
        ["الرياضيات/4", "الميكانيك الهندسي/2", "اللغة الأجنبية/4", "الإنشاءات والهياكل المعدنية", "المواد الهندسية", "اختبار المواد/1"]],
      [["الكيمياء الفيزيائية", "اختبار المواد/2", "طرائق الإنتاج/1", "نظرية التدفقات", "القياسات الميكانيكية", "هندسة الحواسيب"],
        ["طرائق الإنتاج/2", "نظرية تشكيل المعادن/1", "هندسة مساحيق المعادن", "عناصر الآلات/1", "علم المعادن/1", "التحكم الرقمي المبرمج"]],
      [["علم المعادن/2", "نظرية هندسة اللحام/1", "المعالجات الحرارية/1", "عناصر الآلات/2", "تكنولوجيا صب المعادن/1", "نظرية تشكيل المعادن/2"],
        ["المعالجات الحرارية/2", "نظرية هندسة اللحام/2", "تكنولوجيا صب المعادن/2", "اختبار المواد/3", "الجودة الصناعية", "علم المعادن/3"]],
      [["علم الليزر الصناعي", "أسس التحكم والروبوت الصناعي", "ديناميك الآلات والاهتزازات", "خواص أنصاف النواقل", "هندسة المواد المركبة"],
        ["تآكل واهتراء المعادن", "هندسة السطوح", "الصيانة والأمن الصناعي", "السبائك الخاصة ومعالجاتها", "تصميم اللحام"]]
     ]
  }
];

/* ============================================================
   QUIZ DATA - اختبار تخصصك
   كل سؤال له 7 خيارات (واحد لكل فرع): qowa, tasmim, taqa, electron, tahakum, mechatronics, maaden
   كل خيار يضيف 1 نقطة للفرع المقابل
   ============================================================ */

const QUIZ_QUESTIONS = [
  {
    ar: "ما المادة الدراسية التي تستمتع بها أكثر؟",
    en: "Which subject do you enjoy the most?",
    options: [
      { ar: "الميكانيكا والفيزياء التطبيقية", en: "Mechanics & applied physics", dept: "qowa" },
      { ar: "التصميم والرسومات الهندسية", en: "Design & engineering drawing", dept: "tasmim" },
      { ar: "الدوائر الكهربائية والطاقة", en: "Electrical circuits & power", dept: "taqa" },
      { ar: "الإلكترونيات والبرمجة", en: "Electronics & programming", dept: "electron" },
      { ar: "البرمجة والخوارزميات", en: "Programming & algorithms", dept: "tahakum" },
      { ar: "دمج كل شيء: ميكانيكا + كهرباء + برمجة", en: "Combining everything: mech + elec + code", dept: "mechatronics" },
      { ar: "الكيمياء وعلوم المواد", en: "Chemistry & materials science", dept: "maaden" }
    ]
  },
  {
    ar: "أين تتخيّل بيئة عملك المستقبلية؟",
    en: "Where do you envision your future workplace?",
    options: [
      { ar: "مصنع أو ورشة كبيرة", en: "A large factory or workshop", dept: "qowa" },
      { ar: "مكتب تصميم أو استوديو", en: "A design office or studio", dept: "tasmim" },
      { ar: "محطة توليد أو شبكة كهرباء", en: "Power plant or electrical grid", dept: "taqa" },
      { ar: "مختبر أبحاث أو غرفة سيرفرات", en: "Research lab or server room", dept: "electron" },
      { ar: "مركز تحكم صناعي", en: "Industrial control centre", dept: "tahakum" },
      { ar: "خط إنتاج ذكي أو مختبر روبوتات", en: "Smart production line or robotics lab", dept: "mechatronics" },
      { ar: "مصنع تعدين أو صناعات مواد", en: "Mining or materials factory", dept: "maaden" }
    ]
  },
  {
    ar: "ما الذي يثير حماسك أكثر؟",
    en: "What excites you the most?",
    options: [
      { ar: "تفكيك الآلات وفهم كيف تعمل", en: "Dismantling machines and understanding how they work", dept: "qowa" },
      { ar: "تحويل فكرة إلى منتج ملموس", en: "Turning an idea into a real product", dept: "tasmim" },
      { ar: "توليد الكهرباء وتوزيعها", en: "Generating and distributing electricity", dept: "taqa" },
      { ar: "بناء دوائر إلكترونية تعمل فعلاً", en: "Building electronic circuits that actually work", dept: "electron" },
      { ar: "برمجة أنظمة تعمل تلقائياً", en: "Programming systems that run automatically", dept: "tahakum" },
      { ar: "بناء روبوت يتحرك ويتفاعل", en: "Building a robot that moves and interacts", dept: "mechatronics" },
      { ar: "اكتشاف خواص مواد جديدة", en: "Discovering properties of new materials", dept: "maaden" }
    ]
  },
  {
    ar: "هل تفضل العمل العملي أم النظري؟",
    en: "Do you prefer practical or theoretical work?",
    options: [
      { ar: "عملي بالكامل — أحب أشياء بيدي", en: "Fully practical — I love working with my hands", dept: "qowa" },
      { ar: "تصميم + تطبيق — أحب الإبداع", en: "Design + implementation — I love creativity", dept: "tasmim" },
      { ar: "نظري وعملي — أفهم النظريات وأطبقها", en: "Both — I understand theories and apply them", dept: "taqa" },
      { ar: " عملي ودقيق — أحب التجارب", en: "Practical & precise — I love experiments", dept: "electron" },
      { ar: "برمجي — أحب كتابة الكود", en: "Software — I love writing code", dept: "tahakum" },
      { ar: "مزيج شامل — أحب كل شيء", en: "A comprehensive mix — I love everything", dept: "mechatronics" },
      { ar: "مختبري — أحب التجارب الكيميائية", en: "Lab-based — I love chemical experiments", dept: "maaden" }
    ]
  },
  {
    ar: "أي مهارة تشعر أنها عندك بشكل طبيعي؟",
    en: "Which skill feels most natural to you?",
    options: [
      { ar: "فهم الآلات وطريقة عملها", en: "Understanding machines and how they work", dept: "qowa" },
      { ar: "التفكير البصري والتصميم", en: "Visual thinking and design", dept: "tasmim" },
      { ar: "فهم الدوائر والأنظمة الكهربائية", en: "Understanding circuits and electrical systems", dept: "taqa" },
      { ar: "الدقة في التفاصيل الإلكترونية", en: "Precision in electronic details", dept: "electron" },
      { ar: "التفكير المنطيقي وحل المسائل", en: "Logical thinking and problem solving", dept: "tahakum" },
      { ar: "التكامل بين المهارات المختلفة", en: "Integrating different skills", dept: "mechatronics" },
      { ar: "المهارة في المختبر والكيمياء", en: "Lab skills and chemistry", dept: "maaden" }
    ]
  },
  {
    ar: "ما نوع المشاريع الذي تحب العمل عليه؟",
    en: "What type of project do you love working on?",
    options: [
      { ar: "صيانة أو تحسين آلة كبيرة", en: "Maintaining or improving a large machine", dept: "qowa" },
      { ar: "تصميم منتج أو قطعة جديدة", en: "Designing a new product or part", dept: "tasmim" },
      { ar: "تصميم شبكة كهرباء أو نظام توليد", en: "Designing a power grid or generation system", dept: "taqa" },
      { ar: "بناء جهاز إلكتروني ذكي", en: "Building a smart electronic device", dept: "electron" },
      { ar: "برمجة نظام أتمتة كامل", en: "Programming a full automation system", dept: "tahakum" },
      { ar: "بناء روبوت أو آلة ذكية", en: "Building a robot or smart machine", dept: "mechatronics" },
      { ar: "تطوير مادة أو سبيكة جديدة", en: "Developing a new material or alloy", dept: "maaden" }
    ]
  },
  {
    ar: "ما أكثر شيء تحبه في الهندسة؟",
    en: "What do you love most about engineering?",
    options: [
      { ar: "أنها تجعل الآلات تعمل بشكل أفضل", en: "It makes machines work better", dept: "qowa" },
      { ar: "أنها تحوّل الأفكار إلى واقع", en: "It turns ideas into reality", dept: "tasmim" },
      { ar: "أنها تولّد الطاقة التي نحتاجها", en: "It generates the energy we need", dept: "taqa" },
      { ar: "أنها تصنع أجهزة ذكية", en: "It creates smart devices", dept: "electron" },
      { ar: "أنها تجعل الأنظمة تعمل تلقائياً", en: "It makes systems run automatically", dept: "tahakum" },
      { ar: "أنها تدمج كل التخصصات معاً", en: "It combines all disciplines together", dept: "mechatronics" },
      { ar: "أنها تفهم المادة التيتُصنع كل شيء", en: "It understands the material that makes everything", dept: "maaden" }
    ]
  }
];