import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark-alternate text-white">
      {/* -------------------------------------------------------------------------*/}
      {/* CONTAINER 1*/}
      {/* -------------------------------------------------------------------------*/}
      <div className="container mx-auto flex justify-between pt-14 pb-24">
        <div className="w-105 mx-24">
          <Image
            src={"/images/logo-footer.svg"}
            alt="logo sporton footer"
            width={187}
            height={44}
          ></Image>
          <p className="mt-8">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do.
          </p>
        </div>
        {/* KUMPULAN LINK SEBELAH KANAN*/}
        <div className="gap-24 mx-28 justify-between grid grid-cols-2">
          <div className="flex gap-7 flex-col mx-auto">
            <Link href={"#"}>Home</Link>
            <Link href={"#"}>Categories</Link>
            <Link href={"#"}>Explore Products</Link>
            <Link href={"#"}>About Us</Link>
          </div>
          <div className="flex gap-7 flex-col mx-auto">
            <Link href={"#"}>Instagram</Link>
            <Link href={"#"}>Tiktok</Link>
            <Link href={"#"}>Facebook</Link>
            <Link href={"#"}>Youtube</Link>
          </div>
        </div>
      </div>
      {/* -------------------------------------------------------------------------*/}
      {/* CONTAINER 2*/}
      {/* -------------------------------------------------------------------------*/}
      {/*FOOTER BAWAH*/}
      <div className="border-t border-t-white/15">
        <div className="container mx-auto px-24 py-6.5 flex justify-between">
          <div>SportsOn © 2025 All Rights Reserverd.</div>
          <div className="grid gap-24 grid-cols-2">
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Terms Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
