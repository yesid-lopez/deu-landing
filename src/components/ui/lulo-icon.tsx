import Image from "next/image";

const LuloIcon = () => {
  return (
    <Image
        src="/lulo.png"
        alt="Lulo logo"
        width={150}
        height={150}
        priority
      />
  );
};

export default LuloIcon;
