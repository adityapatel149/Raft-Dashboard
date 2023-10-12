const Logo = () => {
  return (
    <div
      className="Logo"
      className="flex flex-start gap-2 items-center w-full h-10 m-4"
    >
      <img src="/images/Logo.svg" alt="Omoi" className="h-full" />
      <p className="text-[#1E1E1E] text-[1.75rem] not-italic font-semibold leading-[normal]">
        Omoi
      </p>
    </div>
  );
};

export default Logo;
