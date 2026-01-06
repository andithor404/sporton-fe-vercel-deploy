import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";

const poppins = Poppins({
  variable: "--font-poppins",
  display:"swap",
  weight:["400","500","600","700","800"],
});

export const metadata: Metadata = {
  title: "SportOn Website",
  description: "Engineered for endurance and designed for speed. Experience gear that moves as fast as you do. Premium fabrics. Unmatched comfort. Limitless motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Header></Header>
        {children} {/* children digunakan untuk menyuntikkan isi page.tsx kesini supaya muncul di browser*/}
        <Footer></Footer>
        </body>

    </html>
  );
}


//Digunakan jika struktur tidak berubah jika pindah halaman