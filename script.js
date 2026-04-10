const body = document.body;
const navbar = document.getElementById("navbar");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

const appointmentModal = document.getElementById("appointmentModal");
const modalOverlay = document.getElementById("modalOverlay");
const closeModal = document.getElementById("closeModal");

const openButtons = [
  document.getElementById("bookBtn"),
  document.getElementById("heroBookBtn"),
  document.getElementById("contactBookBtn"),
  document.getElementById("mobileBookBtn")
].filter(Boolean);

const themeButtons = [
  document.getElementById("themeToggle"),
  document.getElementById("themeToggleMobile")
].filter(Boolean);

const langButtons = [
  document.getElementById("langToggle"),
  document.getElementById("langToggleMobile")
].filter(Boolean);

const translations = {
  en: {
    brandTop: "NIRAMAYAM",
    brandBottom: "Physiotherapy Clinic",
    navHome: "Home",
    navServices: "Services",
    navTreatments: "Treatments",
    navAbout: "About",
    navContact: "Contact",
    darkMode: "Dark",
    bookAppointment: "Book Appointment",
    eyebrow: "Trusted Physiotherapy Care",
    heroTitle: "Move better, feel stronger, and recover with confidence.",
    heroText: "Expert physiotherapy in Gwalior for pain relief, neuro rehabilitation, posture correction, sports injury recovery, and mobility improvement.",
    exploreServices: "Explore Services",
    metric1: "Personal attention in every session",
    metric2: "Specialised neuro physiotherapy care",
    metric3: "Focused pain relief and recovery plans",
    metric4: "Support for movement and balance",
    heroCardLabel: "Meet Your Doctor",
    heroCardTitle: "Personalised treatment plans designed for real recovery.",
    feature1Title: "Assessment first",
    feature1Text: "Every treatment starts with understanding the exact reason behind your pain or movement problem.",
    feature2Title: "Practical recovery",
    feature2Text: "Treatment plans are made for daily life, so recovery feels realistic and sustainable.",
    feature3Title: "Clear guidance",
    feature3Text: "Patients get simple explanations, home exercise support, and progress-focused care.",
    servicesEyebrow: "Services",
    servicesTitle: "Physiotherapy services for common pain and recovery needs",
    servicesText: "Simple, patient-friendly treatment information with focused care for different conditions.",
    service1Title: "Neuro Physiotherapy",
    service1Text: "Support for stroke, paralysis, Parkinson’s disease, facial palsy, cerebral palsy, and spinal cord conditions.",
    service2Title: "Pain Management",
    service2Text: "Treatment for neck pain, back pain, shoulder pain, knee pain, sciatica, heel pain, and arthritis.",
    service3Title: "Mobility Recovery",
    service3Text: "Gait training, posture correction, balance work, and movement recovery for walking difficulties.",
    service4Title: "Sports Injury Rehab",
    service4Text: "Rehabilitation for muscle strain, ligament injury, joint instability, and return-to-sport recovery.",
    service5Title: "Joint and Shoulder Care",
    service5Text: "Care for frozen shoulder, stiffness, limited movement, and ongoing joint discomfort.",
    service6Title: "Rehab Planning",
    service6Text: "Structured therapy plans with clinic sessions, progress tracking, and home exercise guidance.",
    conditionsEyebrow: "Conditions We Treat",
    conditionsTitle: "Common problems we help with",
    conditionsText: "Physiotherapy support for pain, stiffness, injury recovery, and movement-related concerns.",
    condition1: "Stroke and Paralysis",
    condition2: "Parkinson’s Disease",
    condition3: "Facial Palsy",
    condition4: "Walking Difficulties",
    condition5: "Cerebral Palsy",
    condition6: "Cervical and Neck Pain",
    condition7: "Spinal Cord Injury",
    condition8: "Back and Shoulder Pain",
    condition9: "Knee and Joint Pain",
    condition10: "Frozen Shoulder",
    condition11: "Arthritis",
    condition12: "Sciatica",
    aboutEyebrow: "About the Clinic",
    aboutTitle: "Patient-focused care with practical treatment and clear guidance.",
    aboutText1: "Led by <strong>Dr. Sumit Agrawal (BPT)</strong>, Niramayam Physiotherapy Clinic focuses on evidence-based physiotherapy with a calm, supportive patient experience.",
    aboutText2: "The website now highlights real services, clear information, and a cleaner layout that feels more like a live clinic website.",
    point1: "✓ Responsive design for mobile, tablet, and desktop",
    point2: "✓ Easy appointment call to action",
    point3: "✓ Clear treatment information for patients",
    point4: "✓ English and Hindi language switch",
    testimonialEyebrow: "Patient Feedback",
    testimonialTitle: "Trusted by patients for supportive and professional care",
    testimonialText: "Sample reviews shown below can be replaced with real clinic testimonials later.",
    review1: "“I visited for back pain and started feeling better within a few sessions. The exercises were explained very clearly.”",
    review1Name: "Patient Review",
    review1Type: "Pain relief treatment",
    review2: "“The doctor listened properly, checked movement carefully, and gave a treatment plan that was easy to follow at home.”",
    review2Name: "Patient Review",
    review2Type: "Mobility recovery",
    review3: "“Good experience overall. The clinic felt professional and the sessions were focused on real improvement.”",
    review3Name: "Patient Review",
    review3Type: "General physiotherapy care",
    contactEyebrow: "Book a Visit",
    contactTitle: "Start your recovery with guided physiotherapy care.",
    contactText: "Call the clinic or book an appointment online to discuss your condition and treatment needs.",
    callClinic: "Call Clinic",
    location: "Location",
    phone: "Phone",
    appointments: "Appointments",
    appointmentNote: "Online booking and phone support available",
    footerText: "© 2026 Niramayam Physiotherapy Clinic. All rights reserved.",
    appointmentPortal: "Appointment Portal",
    bookConsultation: "Book your consultation",
    modalText: "You can keep this Calendly link or replace it with your final booking system.",
    modalNote2: "You can also connect WhatsApp booking, phone call support, Google Form, or a custom booking page."
  },
  hi: {
    brandTop: "निरामयम्",
    brandBottom: "फिजियोथेरेपी क्लिनिक",
    navHome: "होम",
    navServices: "सेवाएं",
    navTreatments: "उपचार",
    navAbout: "हमारे बारे में",
    navContact: "संपर्क",
    darkMode: "डार्क",
    bookAppointment: "अपॉइंटमेंट बुक करें",
    eyebrow: "विश्वसनीय फिजियोथेरेपी देखभाल",
    heroTitle: "बेहतर चलें, मजबूत महसूस करें और भरोसे के साथ रिकवरी करें।",
    heroText: "ग्वालियर में दर्द से राहत, न्यूरो रिहैबिलिटेशन, पोस्चर सुधार, स्पोर्ट्स इंजरी रिकवरी और मोबिलिटी सुधार के लिए विशेषज्ञ फिजियोथेरेपी।",
    exploreServices: "सेवाएं देखें",
    metric1: "हर सेशन में व्यक्तिगत ध्यान",
    metric2: "विशेष न्यूरो फिजियोथेरेपी देखभाल",
    metric3: "दर्द से राहत के लिए केंद्रित प्लान",
    metric4: "मूवमेंट और बैलेंस के लिए सहायता",
    heroCardLabel: "अपने डॉक्टर से मिलें",
    heroCardTitle: "वास्तविक रिकवरी के लिए व्यक्तिगत उपचार योजना।",
    feature1Title: "पहले जांच",
    feature1Text: "हर उपचार आपकी समस्या के सही कारण को समझने से शुरू होता है।",
    feature2Title: "व्यावहारिक रिकवरी",
    feature2Text: "उपचार योजना रोजमर्रा की जिंदगी को ध्यान में रखकर बनाई जाती है।",
    feature3Title: "स्पष्ट मार्गदर्शन",
    feature3Text: "मरीजों को आसान समझ, होम एक्सरसाइज सपोर्ट और प्रोग्रेस आधारित देखभाल मिलती है।",
    servicesEyebrow: "सेवाएं",
    servicesTitle: "दर्द और रिकवरी की आम जरूरतों के लिए फिजियोथेरेपी सेवाएं",
    servicesText: "अलग-अलग समस्याओं के लिए सरल और मरीजों के लिए समझने लायक जानकारी।",
    service1Title: "न्यूरो फिजियोथेरेपी",
    service1Text: "स्ट्रोक, पैरालिसिस, पार्किंसन, फेशियल पाल्सी, सेरेब्रल पाल्सी और स्पाइनल कॉर्ड समस्याओं के लिए सहायता।",
    service2Title: "पेन मैनेजमेंट",
    service2Text: "गर्दन, पीठ, कंधे, घुटने, सायटिका, एड़ी के दर्द और आर्थराइटिस के लिए उपचार।",
    service3Title: "मोबिलिटी रिकवरी",
    service3Text: "चलने में दिक्कत, पोस्चर सुधार, बैलेंस ट्रेनिंग और मूवमेंट रिकवरी के लिए सहायता।",
    service4Title: "स्पोर्ट्स इंजरी रिहैब",
    service4Text: "मसल स्ट्रेन, लिगामेंट इंजरी, जॉइंट अस्थिरता और खेल में वापसी के लिए रिहैब।",
    service5Title: "जॉइंट और शोल्डर केयर",
    service5Text: "फ्रोजन शोल्डर, जकड़न, कम मूवमेंट और लंबे समय के जॉइंट दर्द के लिए देखभाल।",
    service6Title: "रिहैब प्लानिंग",
    service6Text: "क्लिनिक सेशन, प्रोग्रेस ट्रैकिंग और होम एक्सरसाइज के साथ संरचित थेरेपी प्लान।",
    conditionsEyebrow: "हम किन समस्याओं का इलाज करते हैं",
    conditionsTitle: "आम समस्याएं जिनमें हम मदद करते हैं",
    conditionsText: "दर्द, जकड़न, चोट के बाद रिकवरी और मूवमेंट से जुड़ी समस्याओं के लिए फिजियोथेरेपी सहायता।",
    condition1: "स्ट्रोक और पैरालिसिस",
    condition2: "पार्किंसन रोग",
    condition3: "फेशियल पाल्सी",
    condition4: "चलने में दिक्कत",
    condition5: "सेरेब्रल पाल्सी",
    condition6: "सर्वाइकल और गर्दन दर्द",
    condition7: "स्पाइनल कॉर्ड इंजरी",
    condition8: "पीठ और कंधे का दर्द",
    condition9: "घुटने और जॉइंट दर्द",
    condition10: "फ्रोजन शोल्डर",
    condition11: "आर्थराइटिस",
    condition12: "सायटिका",
    aboutEyebrow: "क्लिनिक के बारे में",
    aboutTitle: "मरीजों पर केंद्रित देखभाल, व्यावहारिक उपचार और स्पष्ट मार्गदर्शन।",
    aboutText1: "<strong>डॉ. सुमित अग्रवाल (BPT)</strong> के नेतृत्व में, निरामयम् फिजियोथेरेपी क्लिनिक प्रमाण आधारित उपचार और शांत, सहयोगी अनुभव पर ध्यान देता है।",
    aboutText2: "अब वेबसाइट में वास्तविक सेवाएं, स्पष्ट जानकारी और एक साफ लेआउट है जो लाइव क्लिनिक वेबसाइट जैसा महसूस होता है।",
    point1: "✓ मोबाइल, टैबलेट और डेस्कटॉप के लिए रिस्पॉन्सिव डिजाइन",
    point2: "✓ आसान अपॉइंटमेंट कॉल टू एक्शन",
    point3: "✓ मरीजों के लिए स्पष्ट उपचार जानकारी",
    point4: "✓ हिंदी और अंग्रेजी भाषा विकल्प",
    testimonialEyebrow: "मरीजों की प्रतिक्रिया",
    testimonialTitle: "सहयोगी और प्रोफेशनल देखभाल के लिए मरीजों का भरोसा",
    testimonialText: "नीचे दिए गए सैंपल रिव्यू बाद में असली क्लिनिक टेस्टिमोनियल से बदले जा सकते हैं।",
    review1: "“मैं पीठ दर्द के लिए आया था और कुछ ही सेशन में राहत महसूस होने लगी। एक्सरसाइज बहुत स्पष्ट तरीके से समझाई गई।”",
    review1Name: "मरीज की राय",
    review1Type: "दर्द राहत उपचार",
    review2: "“डॉक्टर ने ध्यान से सुना, मूवमेंट सही से चेक किया और एक आसान ट्रीटमेंट प्लान दिया जिसे घर पर भी फॉलो करना आसान था।”",
    review2Name: "मरीज की राय",
    review2Type: "मोबिलिटी रिकवरी",
    review3: "“कुल मिलाकर अच्छा अनुभव रहा। क्लिनिक प्रोफेशनल लगा और सेशन वास्तविक सुधार पर केंद्रित थे।”",
    review3Name: "मरीज की राय",
    review3Type: "सामान्य फिजियोथेरेपी देखभाल",
    contactEyebrow: "विजिट बुक करें",
    contactTitle: "मार्गदर्शित फिजियोथेरेपी देखभाल के साथ अपनी रिकवरी शुरू करें।",
    contactText: "अपनी समस्या और उपचार जरूरतों पर बात करने के लिए क्लिनिक को कॉल करें या ऑनलाइन अपॉइंटमेंट बुक करें।",
    callClinic: "क्लिनिक को कॉल करें",
    location: "लोकेशन",
    phone: "फोन",
    appointments: "अपॉइंटमेंट",
    appointmentNote: "ऑनलाइन बुकिंग और फोन सपोर्ट उपलब्ध",
    footerText: "© 2026 निरामयम् फिजियोथेरेपी क्लिनिक। सर्वाधिकार सुरक्षित।",
    appointmentPortal: "अपॉइंटमेंट पोर्टल",
    bookConsultation: "अपनी कंसल्टेशन बुक करें",
    modalText: "आप इस Calendly लिंक को रख सकते हैं या बाद में अपनी फाइनल बुकिंग सिस्टम से बदल सकते हैं।",
    modalNote2: "आप WhatsApp बुकिंग, फोन सपोर्ट, Google Form या कस्टम बुकिंग पेज भी जोड़ सकते हैं।"
  }
};

function openBookingModal() {
  appointmentModal.classList.add("show");
  body.style.overflow = "hidden";
}

function closeBookingModal() {
  appointmentModal.classList.remove("show");
  body.style.overflow = "";
}

openButtons.forEach((btn) => {
  btn.addEventListener("click", openBookingModal);
});

closeModal.addEventListener("click", closeBookingModal);
modalOverlay.addEventListener("click", closeBookingModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeBookingModal();
  }
});

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    menuBtn.classList.toggle("active");
  });
}

document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    if (menuBtn) {
      menuBtn.classList.remove("active");
    }
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach((el) => observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();

    const yOffset = -80;
    const y =
      target.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth"
    });
  });
});

function applyTheme(theme) {
  const isDark = theme === "dark";
  body.classList.toggle("dark-theme", isDark);

  document.querySelectorAll(".theme-icon").forEach((icon) => {
    icon.textContent = isDark ? "☀️" : "🌙";
  });

  localStorage.setItem("theme", theme);
}

function applyLanguage(lang) {
  const selected = translations[lang] ? lang : "en";
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const value = translations[selected][key];
    if (!value) return;
    element.innerHTML = value;
  });

  document.documentElement.lang = selected === "hi" ? "hi" : "en";
  localStorage.setItem("lang", selected);
}

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextTheme = body.classList.contains("dark-theme") ? "light" : "dark";
    applyTheme(nextTheme);
  });
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const current = localStorage.getItem("lang") || "en";
    const nextLang = current === "en" ? "hi" : "en";
    applyLanguage(nextLang);
  });
});

applyTheme(localStorage.getItem("theme") || "light");
applyLanguage(localStorage.getItem("lang") || "en");