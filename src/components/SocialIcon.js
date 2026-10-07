import { siFacebook, siInstagram, siWhatsapp, siYoutube } from "simple-icons";

// Brand marks from simple-icons (CC0). LinkedIn is no longer distributed
// there, so it is drawn as the familiar "in" on LinkedIn blue.
const BRANDS = {
  facebook: siFacebook,
  instagram: siInstagram,
  youtube: siYoutube,
  whatsapp: siWhatsapp,
};

export default function SocialIcon({ id, className = "" }) {
  if (id === "linkedin") {
    return (
      <span aria-hidden className={`grid place-items-center rounded-[5px] bg-[#0a66c2] font-sans text-[15px] leading-none font-bold text-white ${className}`}>
        in
      </span>
    );
  }
  const icon = BRANDS[id];
  if (!icon) return null;
  return (
    <span aria-hidden className={`grid place-items-center rounded-[5px] ${className}`} style={{ backgroundColor: `#${icon.hex}` }}>
      <svg viewBox="0 0 24 24" className="size-[60%] fill-white">
        <path d={icon.path} />
      </svg>
    </span>
  );
}
