import Image from "next/image";

const LuloIcon = () => {
  return (
    <Image
        src="/lulo.png"
        alt="Lulo logo"
        width={120}
        height={120}
        priority
      />
  );
};

export default LuloIcon;
