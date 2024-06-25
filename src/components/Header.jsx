import { useState, useEffect } from "react";
function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const handleCli = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <header className="bg-Very-Pale-Blue-(Top-BG-Pattern) dark:bg-Very-Dark-Blue-(BG) h-[235px] rounded-b-[20px] pt-8 px-6 mb-[900px] md:mb-[480px] xl:mb-[200px]">
      <h1 className="text-Very-Dark-Blue-(BG) dark:text-Very-Pale-Blue-(Top-BG-Pattern) text-2xl font-bold mb-1">
        Social Media Dashboard
      </h1>
      <p className="text-Dark-Grayish-Blue-(Text) dark:text-Desaturated-Blue-(Text)  font-bold mb-6">
        Total Followers: 23,004
      </p>
      <hr className="bg-black mb-[19px]" />
      <div className="flex justify-between">
        <p className="text-Dark-Grayish-Blue-(Text) dark:text-Desaturated-Blue-(Text) font-bold">
          Dark Mode
        </p>
        <label
          htmlFor="darkmode"
          className="border bg-Toggle w-12 h-6 rounded-full cursor-pointer p-[2px] relative overflow-hidden"
        >
          <input
            onClick={handleCli}
            id="darkmode"
            type="checkbox"
            className="peer sr-only"
          />
          <div className="absolute peer-checked:bg-Toggle-Gradient top-0 left-0 w-full h-full rounded-full"></div>
          <div className="w-[18px] h-[18px] bg-Light-Grayish-Blue-(Card-BG) rounded-full peer-checked:translate-x-[24px] transition-all"></div>
        </label>
      </div>
    </header>
  );
}

export default Header;
