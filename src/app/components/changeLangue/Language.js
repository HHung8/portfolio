"use client";
// Import the necessary dependencies
import React, { useState, useEffect } from "react";
import { useTranslation, initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Initialize i18n with language detector
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          welcome: "Welcome",
          content: "This is the content in English.",
          switch: "Switch to English",
        },
      },
      vi: {
        translation: {
          welcome: "Chào mừng",
          content: "Đây là nội dung bằng Tiếng Việt.",
          switch: "Chuyển sang Tiếng Việt",
        },
      },
    },
  });

const LanguageSwitcher = () => {
  // Destructure t function from useTranslation
  const { t } = useTranslation();

  // State to manage the current language
  const [currentLanguage, setCurrentLanguage] = useState("en");

  // Use useEffect for initialization
  useEffect(() => {
    // Set the initial language from language detector
    setCurrentLanguage(i18n.language);
  }, []);

  // Function to handle language toggle
  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "vi" : "en";
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <p>{t("content")}</p>
      <button onClick={toggleLanguage}>{t("switch")}</button>
    </div>
  );
};

export default LanguageSwitcher;
