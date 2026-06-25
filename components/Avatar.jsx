import Image from "next/image";

const Avatar = ({ className = "", priority = false, sizes = "(min-width: 1280px) 737px, 70vw" }) => {
  return (
    <div
      className={`pointer-events-none select-none ${className}`.trim()}
      aria-hidden="true"
    >
      <Image
        src="/avatar.png"
        alt=""
        width={737}
        height={678}
        className="translate-z-0 h-auto w-full object-contain drop-shadow-[0_30px_80px_rgba(241,48,36,0.16)]"
        priority={priority}
        sizes={sizes}
      />
    </div>
  );
};

export default Avatar;
