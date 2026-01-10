import CategoriesSection from "./components/home/categories";
import HeroSection from "./components/home/hero";
import ProductsSection from "./components/home/products";

export default function Home() {
  return (
    <main>
      {/* Masukkan semua komponen disini*/}
      <HeroSection></HeroSection>
      <CategoriesSection></CategoriesSection>
      <ProductsSection></ProductsSection>
    </main>
  );
}

//Digunakan jika struktur berubah jika berpindah halaman
