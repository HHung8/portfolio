"use client";
import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";

// Tạo các biến màu sắc cho chế độ sáng và tối
const lightTheme = {
  background: "#ffffff",
  text: "#000000",
};

const darkTheme = {
  background: "#000000",
  text: "#ffffff",
};
const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  // Hàm chuyển đổi giữa chế độ sáng và tối
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Thực hiện thay đổi chủ đề khi có sự thay đổi của theme state
  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "light" ? lightTheme.background : darkTheme.background;
    document.body.style.color =
      theme === "light" ? lightTheme.text : darkTheme.text;
  }, [theme]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <button
        onClick={toggleTheme}
        style={{
          background: "transparent",
          fontSize: "1.3rem",
          border: "1px solid transparent",
        }}
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </ThemeProvider>
  );
};

export default ThemeToggle;
