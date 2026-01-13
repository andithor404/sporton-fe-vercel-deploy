import { getAllCategories } from "../services/category.service";
import { getAllProducts } from "../services/product.service";
import CategoriesSection from "./components/home/categories";
import HeroSection from "./components/home/hero";
import ProductsSection from "./components/home/products";

export default async function Home() {
  const [categories, products] = await Promise.all([
    getAllCategories(),
    getAllProducts(),
  ]);

  return (
    <main>
      {/* Masukkan semua komponen disini*/}
      <HeroSection></HeroSection>
      <CategoriesSection categories={categories}></CategoriesSection>
      <ProductsSection products={products}></ProductsSection>
    </main>
  );
}

//Digunakan jika struktur berubah jika berpindah halaman
