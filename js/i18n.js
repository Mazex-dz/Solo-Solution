// i18n.js - Language switcher (English / Arabic)

const translations = {
    en: {
        nav_about: "About us",
        nav_how: "How it works",
        nav_req: "Request Part",
        hero_title: "Find Any Car Part.<br>Fast. Reliable. <span class=\"text-gradient\">Professional.</span>",
        hero_sub: "The ultimate premium sourcing network for automotive spare parts. Skip the search, we find it for you.",
        hero_btn1: "Request a Part Now",
        hero_btn2: "Learn More",
        stat_time: "Average Quote Time",
        stat_qual: "Quality Assured",
        trust_title: "The Standard in Part Sourcing",
        trust_sub: "We leverage a global network of verified suppliers to deliver OEM and premium aftermarket parts directly to you.",
        feat1_title: "Fast Sourcing",
        feat1_text: "Submit your request and our intelligent network begins locating your specific part within minutes.",
        feat2_title: "Verified Suppliers",
        feat2_text: "We strictly work with authorized distributors and top-tier salvage yards to guarantee authenticity.",
        feat3_title: "Quality Checked",
        feat3_text: "Every part undergoes a rigorous inspection protocol before it is approved for final delivery.",
        req_title: "Request a Specific Part",
        req_sub: "Provide as much detail as possible. Have a VIN number? Include it in the description for 100% accuracy.",
        lbl_fname: "First Name",
        err_fname: "First name is required",
        lbl_lname: "Last Name",
        err_lname: "Last name is required",
        lbl_email: "Email Address",
        err_email: "Valid email is required",
        lbl_phone: "Phone Number",
        err_phone: "Phone number is required",
        sec_veh: "Vehicle Details",
        lbl_brand: "Make (e.g., BMW)",
        err_brand: "Make is required",
        lbl_model: "Model (e.g., M3)",
        err_model: "Model is required",
        lbl_year: "Year",
        err_year: "Valid year required",
        sec_part: "Part Information",
        lbl_reqpart: "Part Name / Component",
        err_reqpart: "Part name is required",
        lbl_desc: "Detailed Description (Include VIN if possible)",
        err_desc: "Description is required",
        lbl_upload: "Upload Reference Image (Optional)",
        btn_submit: "Submit Request",
        ftr_tagline: "Premium automotive parts sourcing network.",
        ftr_privacy: "Privacy Policy",
        ftr_terms: "Terms of Service",
        ftr_contact: "Contact",
        ftr_rights: " Solo Solution. All rights reserved.",
        lang_btn: "\u0639\u0631\u0628\u064a"
    },
    ar: {
        nav_about: "\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0639\u0646\u0627",
        nav_how: "\u0643\u064a\u0641 \u064a\u0639\u0645\u0644",
        nav_req: "\u0627\u0637\u0644\u0628 \u0642\u0637\u0639\u0629",
        hero_title: "\u0627\u0628\u062d\u062b \u0639\u0646 \u0623\u064a \u0642\u0637\u0639\u0629 \u0633\u064a\u0627\u0631\u0629.<br>\u0628\u0633\u0631\u0639\u0629. \u0645\u0648\u062b\u0648\u0642\u064a\u0629. <span class=\"text-gradient\">\u0627\u062d\u062a\u0631\u0627\u0641\u064a\u0629.</span>",
        hero_sub: "\u0634\u0628\u0643\u0629 \u0627\u0644\u062a\u0648\u0631\u064a\u062f \u0627\u0644\u0645\u0645\u062a\u0627\u0632\u0629 \u0627\u0644\u0645\u0637\u0644\u0642\u0629 \u0644\u0642\u0637\u0639 \u063a\u064a\u0627\u0631 \u0627\u0644\u0633\u064a\u0627\u0631\u0627\u062a. \u062a\u062e\u0637\u0649 \u0627\u0644\u0628\u062d\u062b\u060c \u0646\u062d\u0646 \u0646\u062c\u062f\u0647\u0627 \u0644\u0643.",
        hero_btn1: "\u0627\u0637\u0644\u0628 \u0642\u0637\u0639\u0629 \u0627\u0644\u0622\u0646",
        hero_btn2: "\u0627\u0639\u0631\u0641 \u0627\u0644\u0645\u0632\u064a\u062f",
        stat_time: "\u0645\u062a\u0648\u0633\u0637 \u0648\u0642\u062a \u0627\u0644\u062a\u0633\u0639\u064a\u0631",
        stat_qual: "\u062c\u0648\u062f\u0629 \u0645\u0636\u0645\u0648\u0646\u0629",
        trust_title: "\u0627\u0644\u0645\u0639\u064a\u0627\u0631 \u0641\u064a \u062a\u0648\u0631\u064a\u062f \u0627\u0644\u0642\u0637\u0639",
        trust_sub: "\u0646\u062d\u0646 \u0646\u0633\u062a\u0641\u064a\u062f \u0645\u0646 \u0634\u0628\u0643\u0629 \u0639\u0627\u0644\u0645\u064a\u0629 \u0645\u0646 \u0627\u0644\u0645\u0648\u0631\u062f\u064a\u0646 \u0627\u0644\u0645\u0639\u062a\u0645\u062f\u064a\u0646 \u0644\u062a\u0642\u062f\u064a\u0645 \u0642\u0637\u0639 \u0623\u0635\u0644\u064a\u0629 \u0648\u0645\u0627 \u0628\u0639\u062f \u0627\u0644\u0628\u064a\u0639 \u0627\u0644\u0645\u0645\u062a\u0627\u0632\u0629 \u0645\u0628\u0627\u0634\u0631\u0629 \u0625\u0644\u064a\u0643.",
        feat1_title: "\u062a\u0648\u0631\u064a\u062f \u0633\u0631\u064a\u0639",
        feat1_text: "\u0623\u0631\u0633\u0644 \u0637\u0644\u0628\u0643 \u0648\u062a\u0628\u062f\u0623 \u0634\u0628\u0643\u062a\u0646\u0627 \u0627\u0644\u0630\u0643\u064a\u0629 \u0641\u064a \u062a\u062d\u062f\u064a\u062f \u0645\u0648\u0642\u0639 \u0627\u0644\u0642\u0637\u0639\u0629 \u0627\u0644\u0645\u062d\u062f\u062f\u0629 \u0641\u064a \u063a\u0636\u0648\u0646 \u062f\u0642\u0627\u0626\u0642.",
        feat2_title: "\u0645\u0648\u0631\u062f\u0648\u0646 \u0645\u0639\u062a\u0645\u062f\u0648\u0646",
        feat2_text: "\u0646\u062d\u0646 \u0646\u0639\u0645\u0644 \u0628\u0635\u0631\u0627\u0645\u0629 \u0645\u0639 \u0627\u0644\u0645\u0648\u0632\u0639\u064a\u0646 \u0627\u0644\u0645\u0639\u062a\u0645\u062f\u064a\u0646 \u0648\u0633\u0627\u062d\u0627\u062a \u0627\u0644\u062e\u0631\u062f\u0629 \u0645\u0646 \u0627\u0644\u062f\u0631\u062c\u0629 \u0627\u0644\u0623\u0648\u0644\u0649 \u0644\u0636\u0645\u0627\u0646 \u0627\u0644\u0623\u0635\u0627\u0644\u0629.",
        feat3_title: "\u0641\u062d\u0635 \u0627\u0644\u062c\u0648\u062f\u0629",
        feat3_text: "\u062a\u062e\u0636\u0639 \u0643\u0644 \u0642\u0637\u0639\u0629 \u0644\u0628\u0631\u0648\u062a\u0648\u0643\u0648\u0644 \u0641\u062d\u0635 \u0635\u0627\u0631\u0645 \u0642\u0628\u0644 \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 \u0639\u0644\u064a\u0647\u0627 \u0644\u0644\u062a\u0633\u0644\u064a\u0645 \u0627\u0644\u0646\u0647\u0627\u0626\u064a.",
        req_title: "\u0627\u0637\u0644\u0628 \u0642\u0637\u0639\u0629 \u0645\u062d\u062f\u062f\u0629",
        req_sub: "\u0642\u062f\u0645 \u0623\u0643\u0628\u0631 \u0642\u062f\u0631 \u0645\u0645\u0643\u0646 \u0645\u0646 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644. \u0647\u0644 \u0644\u062f\u064a\u0643 \u0631\u0642\u0645 VIN\u061f \u0642\u0645 \u0628\u062a\u0636\u0645\u064a\u0646\u0647 \u0641\u064a \u0627\u0644\u0648\u0635\u0641 \u0644\u0636\u0645\u0627\u0646 \u0627\u0644\u062f\u0642\u0629 \u0628\u0646\u0633\u0628\u0629 100\u066a.",
        lbl_fname: "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0623\u0648\u0644",
        err_fname: "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0623\u0648\u0644 \u0645\u0637\u0644\u0648\u0628",
        lbl_lname: "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0623\u062e\u064a\u0631",
        err_lname: "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0623\u062e\u064a\u0631 \u0645\u0637\u0644\u0648\u0628",
        lbl_email: "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a",
        err_email: "\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0627\u0644\u0635\u0627\u0644\u062d \u0645\u0637\u0644\u0648\u0628",
        lbl_phone: "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641",
        err_phone: "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641 \u0645\u0637\u0644\u0648\u0628",
        sec_veh: "\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0645\u0631\u0643\u0628\u0629",
        lbl_brand: "\u0627\u0644\u0639\u0644\u0627\u0645\u0629 (\u0645\u062b\u0644 BMW)",
        err_brand: "\u0627\u0644\u0639\u0644\u0627\u0645\u0629 \u0645\u0637\u0644\u0648\u0628\u0629",
        lbl_model: "\u0627\u0644\u0645\u0648\u062f\u064a\u0644 (\u0645\u062b\u0644 M3)",
        err_model: "\u0627\u0644\u0645\u0648\u062f\u064a\u0644 \u0645\u0637\u0644\u0648\u0628",
        lbl_year: "\u0627\u0644\u0633\u0646\u0629",
        err_year: "\u0633\u0646\u0629 \u0635\u0627\u0644\u062d\u0629 \u0645\u0637\u0644\u0648\u0628\u0629",
        sec_part: "\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0642\u0637\u0639\u0629",
        lbl_reqpart: "\u0627\u0633\u0645 \u0627\u0644\u0642\u0637\u0639\u0629 / \u0627\u0644\u0645\u0643\u0648\u0646",
        err_reqpart: "\u0627\u0633\u0645 \u0627\u0644\u0642\u0637\u0639\u0629 \u0645\u0637\u0644\u0648\u0628",
        lbl_desc: "\u0648\u0635\u0641 \u062a\u0641\u0635\u064a\u0644\u064a (\u0642\u0645 \u0628\u062a\u0636\u0645\u064a\u0646 \u0631\u0642\u0645 VIN \u0625\u0646 \u0623\u0645\u0643\u0646)",
        err_desc: "\u0627\u0644\u0648\u0635\u0641 \u0645\u0637\u0644\u0648\u0628",
        lbl_upload: "\u0631\u0641\u0639 \u0635\u0648\u0631\u0629 \u0645\u0631\u062c\u0639\u064a\u0629 (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)",
        btn_submit: "\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0637\u0644\u0628",
        ftr_tagline: "\u0634\u0628\u0643\u0629 \u062a\u0648\u0631\u064a\u062f \u0642\u0637\u0639 \u063a\u064a\u0627\u0631 \u0627\u0644\u0633\u064a\u0627\u0631\u0627\u062a \u0627\u0644\u0645\u0645\u062a\u0627\u0632\u0629.",
        ftr_privacy: "\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629",
        ftr_terms: "\u0634\u0631\u0648\u0637 \u0627\u0644\u062e\u062f\u0645\u0629",
        ftr_contact: "\u0627\u062a\u0635\u0644 \u0628\u0646\u0627",
        ftr_rights: " \u0633\u0648\u0644\u0648 \u0633\u0648\u0644\u064a\u0634\u0648\u0646. \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629.",
        lang_btn: "English"
    }
};

let currentLang = localStorage.getItem('lang') || 'en';

function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    if (lang === 'ar') {
        document.body.classList.add('lang-ar');
    } else {
        document.body.classList.remove('lang-ar');
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = translations[lang] && translations[lang][key];
        if (!value) return;
        el.innerHTML = value;
    });

    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) langBtn.textContent = translations[lang].lang_btn;
}

document.addEventListener('DOMContentLoaded', () => {
    // Only apply if Arabic is stored; English is the default HTML state
    if (currentLang === 'ar') {
        applyLanguage('ar');
    }

    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'ar' : 'en';
            localStorage.setItem('lang', currentLang);
            applyLanguage(currentLang);
        });
    }
});
