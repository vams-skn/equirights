import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="EquiRights">
      <Image src={logo} alt="EquiRights Logo" width={32} height={32} />
    </Link>
  );
}