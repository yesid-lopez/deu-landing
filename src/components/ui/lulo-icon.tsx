import Image from "next/image";

interface LuloIconProps {
  width?: number;
  height?: number;
  className?: string;
}

const LuloIcon = ({ width = 120, height = 120, className = "" }: LuloIconProps) => {
  return (
    <div 
      className={`relative inline-block ${className}`} 
      style={{ 
        width: `${width}px`, 
        height: `${height}px`,
        minWidth: `${width}px`,
        minHeight: `${height}px`
      }}
    >
      <Image
        src="/lulo.png"
        alt="Lulo logo"
        fill
        style={{ objectFit: "contain" }}
        priority
      />
    </div>
  );
};

export default LuloIcon;
