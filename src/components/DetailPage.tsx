import React from "react";
import { Product } from "../types";
import { PRODUCTS_DB } from "../data/products";
import { motion } from "motion/react";
import { ArrowLeft, ShoppingCart, Info, Share2, Tag, Calendar } from "lucide-react";

interface DetailPageProps {
  productId: string;
  onBackToCatalog: () => void;
}

export default function DetailPage({ productId, onBackToCatalog }: DetailPageProps) {
  // Load products directly from the static PRODUCTS_DB
  const getProductData = () => {
    return PRODUCTS_DB.find((p) => p.id === productId) || PRODUCTS_DB[0];
  };

  const product = getProductData();

  // Handle CTA open affiliate link
  const handleShopNowClick = () => {
    window.open(product.affiliateLink, "_blank", "noopener,noreferrer");
  };

  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share({
        title: `${product.name} - ${product.subtitle}`,
        text: `ดูรีวิวฉบับเจ็ดร้อยจาก Shob Diary: ${product.description}`,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("คัดลอกลิงก์รีวิวไปยังคลิปบอร์ดแล้ว! สามารถส่งแชร์ให้เพื่อนๆ ได้เลย");
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF5EB] font-sans text-gray-900 flex flex-col relative overflow-x-hidden selection:bg-amber-200">
      {/* Header matching exact layout styling from Page 3 Screen */}
      <header className="px-6 py-4 md:px-12 md:py-6 flex justify-between items-center border-b border-[#EEDCC4] bg-[#FAF5EB]/90 sticky top-0 z-20 backdrop-blur-md">
        <div className="flex items-center gap-3">
          {/* Circular Logo */}
          <div className="w-12 h-12 rounded-full bg-[#EEDCC4] border border-[#D3BEA2] p-1 flex flex-col items-center justify-center text-center">
            <svg
              className="w-5 h-5 text-[#7D5A44]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.116 60.116 0 0 0-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <span className="text-[7px] font-black text-[#7D5A44] leading-tight tracking-tighter uppercase">
              shop dairy
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-extrabold text-[#8C6D58] leading-tight">ช้อปทุกวัน! ของดีบอกต่อ</span>
          </div>
        </div>

        {/* BACK button matching exact aesthetic look "BACK ◀" */}
        <button
          onClick={onBackToCatalog}
          className="group px-6 py-2.5 bg-[#FDBF5A] hover:bg-[#efa630] border-2 border-slate-900 rounded-xl font-extrabold text-sm flex items-center gap-2 shadow-[3px_3px_0px_#000] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_#000] transition-all duration-200"
          id="detail-back-btn"
        >
          BACK ◀
        </button>
      </header>

      {/* Main product page container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 md:px-12 py-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start justify-center">
          {/* Left Column: Product cover framed beautiful card box with orange thick accent outline */}
          <div className="w-full lg:w-[45%] flex flex-col gap-6">
            <motion.div
              className="p-5 bg-white border-4 border-slate-900 rounded-[32px] shadow-[8px_8px_0px_#1e293b]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Golden/orange inner frame */}
              <div className="border-6 border-[#FDBF5A] rounded-[24px] overflow-hidden aspect-[4/3] bg-amber-50 relative group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Category Badge inside top left image */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-[#1E293B] text-amber-300 rounded-full text-xs font-bold border border-slate-700">
                  {product.category}
                </span>
              </div>
            </motion.div>

            {/* Quick stats grid for trust factor */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#FAF5EB] p-4 border-2 border-slate-900 rounded-2xl flex items-center gap-3">
                <div className="p-2.5 bg-yellow-100 rounded-xl border border-slate-900 text-yellow-600">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-mono">ปล่อยเมื่อวัน </p>
                  <p className="text-xs font-black text-slate-700">{product.date}</p>
                </div>
              </div>

              <div className="bg-[#FAF5EB] p-4 border-2 border-slate-900 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-green-100 rounded-xl border border-slate-900 text-green-600">
                    <Tag className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-mono">หมวดสินค้า</p>
                    <p className="text-xs font-black text-slate-700">{product.category}</p>
                  </div>
                </div>
                <button
                  onClick={handleShareClick}
                  className="p-1.5 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg text-slate-500"
                  title="แชร์ดีลนี้"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Heading details and Review article box */}
          <div className="w-full lg:w-[50%] flex flex-col gap-6">
            {/* Title exact matching Page 3 screen layout */}
            <div className="space-y-1">
              <motion.h1
                className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {product.name}
              </motion.h1>

              <div className="flex items-center justify-between gap-4">
                <motion.h3
                  className="text-lg md:text-2xl font-black text-[#5C4538]"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {product.subtitle}
                </motion.h3>

                {/* Right chevron indicator icon next to subtitle */}
                <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-900 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-slate-900"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5l6 6-6 6m-6.75-12l6 6-6 6"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Structured "รายละเอียดสินค้า" reviews block */}
            <motion.div
              className="bg-white border-2 border-slate-900 rounded-[24px] p-6 shadow-[4px_4px_0px_#000] relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 bg-amber-100 rounded-lg text-amber-700 border border-[#FDBF5A]">
                  <Info className="w-4 h-4" />
                </div>
                <h4 className="text-lg font-black text-slate-900 tracking-tight">รายละเอียดสินค้า</h4>
              </div>

              {/* Review detailed contents styling */}
              <div className="text-gray-700 text-sm md:text-base leading-relaxed font-bold space-y-4 whitespace-pre-line">
                {product.fullReview}
              </div>
            </motion.div>

            {/* Huge shopping Call-to-Action button linked directly to Shopee Affiliate */}
            <motion.button
              onClick={handleShopNowClick}
              className="w-full flex items-center justify-center gap-3 p-4 bg-[#FF9F1C] hover:bg-[#e4830c] text-white rounded-2xl font-black text-xl tracking-wide border-3 border-slate-900 shadow-[5px_5px_0px_#1e293b] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_#1e293b] active:translate-y-[4px] active:shadow-[1px_1px_0px_#1e293b] transition-all duration-200 uppercase"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              id="cta-shop-now"
            >
              <ShoppingCart className="w-6 h-6 shrink-0" strokeWidth="2.5" />
              <span>SHOP NOW</span>
            </motion.button>

            {/* Affiliate safety notice */}
            <p className="text-center text-xs font-bold text-gray-400">
              * การกดส่วนหน้าซื้อสินค้าจะทำการเชื่อมต่อเปิดปลายทางแอป Shopee Thailand อย่างปลอดภัย
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
