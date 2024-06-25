function Header() {
  return (
    <header className="bg-Very-Pale-Blue-(Top-BG-Pattern) h-[235px] rounded-b-[20px] pt-8 px-6 ">
      <h1 className="text-Very-Dark-Blue-(BG) text-2xl font-bold mb-1">
        {" "}
        Social Media Dashboard
      </h1>
      <p className="text-Dark-Grayish-Blue-(Text) font-bold mb-6">
        Total Followers: 23,004
      </p>
      <hr className="bg-black mb-[19px]" />
      <div className="flex justify-between">
        <p className="text-Dark-Grayish-Blue-(Text) font-bold">Dark Mode</p>
        <input type="checkbox" />
      </div>
    </header>
  );
}

export default Header;
