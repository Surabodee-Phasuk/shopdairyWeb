import React, { useState, useEffect } from "react";
import { Product } from "../types";
import { PRODUCTS_DB } from "../data/products";
import { motion } from "motion/react";
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react";

interface CatalogPageProps {
  onNavigateHome: () => void;
  onSelectProduct: (id: string) => void;
}

export default function CatalogPage({ onNavigateHome, onSelectProduct }: CatalogPageProps) {
  const [products, setProducts] = useState<Product[]>(PRODUCTS_DB);
  const [selectedYear, setSelectedYear] = useState("2026");
  const [selectedMonth, setSelectedMonth] = useState("May");

  // Only displaying 2026 as per your specification
  const years = ["2026"];
  const months = ["Jan", "Feb", "Mar", "Apli", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

  useEffect(() => {
    // Keep it synchronized with standard PRODUCTS_DB so manual edits in /src/data/products.ts are updated
    setProducts(PRODUCTS_DB);
  }, []);

  // Filter products by selected year and month
  const checkProductMatchesFilter = (prod: Product) => {
    const dateObj = new Date(prod.date);
    if (isNaN(dateObj.getTime())) return false;

    const yearString = dateObj.getFullYear().toString();
    const monthIndex = dateObj.getMonth(); // 0-11
    
    const monthWord = selectedMonth.toLowerCase();
    const isMatchedMonth = 
      (monthWord === "jan" && monthIndex === 0) ||
      (monthWord === "feb" && monthIndex === 1) ||
      (monthWord === "mar" && monthIndex === 2) ||
      (monthWord === "apli" && monthIndex === 3) || // matching exact layout spelling "Apli" for April
      (monthWord === "may" && monthIndex === 4) ||
      (monthWord === "june" && monthIndex === 5) ||
      (monthWord === "july" && monthIndex === 6) ||
      (monthWord === "aug" && monthIndex === 7) ||
      (monthWord === "sep" && monthIndex === 8) ||
      (monthWord === "oct" && monthIndex === 9) ||
      (monthWord === "nov" && monthIndex === 10) ||
      (monthWord === "dec" && monthIndex === 11);

    return yearString === selectedYear && isMatchedMonth;
  };

  const filteredProducts = products
    .filter(checkProductMatchesFilter)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  // Format date string to display format like "23 May 2026"
  const formatDateLabel = (dateStr: string) => {
    const dateObj = new Date(dateStr);
    if (isNaN(dateObj.getTime())) return dateStr;
    const day = dateObj.getDate();
    const mths = ["Jan", "Feb", "Mar", "Apli", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = mths[dateObj.getMonth()];
    const year = dateObj.getFullYear();
    return `${day} ${month} ${year}`;
  };

  return (
    <div className="min-h-screen bg-[#FAF5EB] font-sans text-gray-900 flex flex-col relative selection:bg-amber-200">
      {/* Top Bar Header */}
      <div className="px-6 py-4 flex items-center justify-between border-b border-[#EEDCC4] bg-[#FAF5EB]/80 backdrop-blur-md sticky top-0 z-30">
        <div className="flex items-center gap-3 cursor-pointer" onClick={onNavigateHome}>
          <div className="w-10 h-10 rounded-full bg-[#EEDCC4] border border-[#D3BEA2] p-1 flex flex-col items-center justify-center text-center">
            <svg className="w-4 h-4 text-[#7D5A44]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.116 60.116 0 0 0-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </div>
          <span className="font-extrabold text-lg text-[#5C3E2F] tracking-tight hover:underline">Shob Dairy Dashboard</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onNavigateHome}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 border-2 border-slate-900 rounded-xl font-bold text-sm shadow-[2px_2px_0px_#000] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#000] transition-all"
          >
            ไปหน้าแรก
          </button>
        </div>
      </div>

      {/* FILTER 1: Years Slider Bar */}
      <div className="bg-[#EEDCC4]/30 border-b border-[#EEDCC4] py-3.5 px-4 sticky top-[73px] z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-gray-400 p-1 bg-white border border-[#EEDCC4] rounded-lg">
            <ArrowLeft className="w-4 h-4" />
          </div>

          <div className="flex-1 overflow-x-auto scrollbar-none mx-4 flex justify-center items-center gap-4 py-0.5" id="years-bar">
            {years.map((yr) => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`px-5 py-1.5 font-bold rounded-full text-sm transition-all duration-200 whitespace-nowrap ${
                  selectedYear === yr
                    ? "bg-[#FDBF5A] text-slate-950 border-2 border-slate-900 scale-105 shadow-sm"
                    : "text-slate-500 hover:text-slate-800 hover:bg-white/50"
                }`}
              >
                {yr}
              </button>
            ))}
          </div>

          <div className="text-gray-400 p-1 bg-white border border-[#EEDCC4] rounded-lg">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* FILTER 2: Month Selector Slider Bar */}
      <div className="bg-white border-b border-[#EEDCC4] py-3.5 px-4 sticky top-[138px] z-20 shadow-sm flex items-center">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="text-gray-400 p-1 bg-slate-50 border border-slate-200 rounded-lg">
            <ArrowLeft className="w-4 h-4" />
          </div>

          <div className="flex-1 overflow-x-auto scrollbar-none mx-4 flex justify-between items-center gap-1" id="months-bar">
            {months.map((mth) => (
              <button
                key={mth}
                onClick={() => setSelectedMonth(mth)}
                className={`px-4 py-1.5 font-extrabold text-[#2a2a2a] text-sm md:text-base border-b-3 transition-all duration-200 ${
                  selectedMonth === mth
                    ? "border-[#FDBF5A] text-[#1a1a1a] scale-105"
                    : "border-transparent text-slate-400 hover:text-slate-700 hover:border-slate-200"
                }`}
              >
                {mth}
              </button>
            ))}
          </div>

          <div className="text-gray-400 p-1 bg-slate-50 border border-slate-200 rounded-lg">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Main timeline listing */}
      <div className="max-w-7xl w-full mx-auto px-6 py-12 flex-1">
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-1">
            <h2 className="text-3xl font-black text-slate-900">คลังป้ายยาประจำวัน</h2>
            <p className="text-sm font-bold text-slate-500">
              ประจำปี {selectedYear} เดือน {selectedMonth === "Apli" ? "April" : selectedMonth}
            </p>
          </div>
          <div className="flex items-center gap-2 bg-[#EEDCC4]/40 border border-[#EEDCC4] px-4 py-2 rounded-2xl text-xs font-bold text-[#7D5A44]">
            <Calendar className="w-4 h-4" /> {filteredProducts.length} รายการ
          </div>
        </div>

        {/* Dynamic products list grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white border-3 border-dashed border-[#D3BEA2] rounded-3xl p-12 text-center max-w-xl mx-auto my-12 flex flex-col items-center gap-4">
            <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 text-4xl">
              ☁️
            </div>
            <h3 className="text-xl font-extrabold text-slate-700">ไม่มีรายการสินค้าจัดหมวดหมู่ในเดือนนี้</h3>
            <p className="text-sm font-bold text-slate-450 leading-relaxed">
              ยังไม่มีสินค้าในคลังตามช่วงเวลากลุ่มนี้
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((p) => (
              <motion.div
                key={p.id}
                className="flex flex-col gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Date Header */}
                <h3 className="text-2xl font-black text-slate-800 tracking-tight flex items-center justify-between">
                  <span>{formatDateLabel(p.date)}</span>
                </h3>

                {/* Highly Interactive Retro Click-themed Card */}
                <div
                  onClick={() => onSelectProduct(p.id)}
                  className="group relative bg-[#FAF5EB] aspect-[4/3] rounded-[24px] overflow-hidden border-3 border-slate-900 cursor-pointer shadow-[6px_6px_0px_#000] hover:shadow-[10px_10px_0px_#000] hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Category Pill Tag */}
                  <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-white/95 backdrop-blur-sm border-2 border-slate-900 rounded-full text-[10px] font-black tracking-wide uppercase shadow-[1px_1px_0px_#000]">
                    💡 {p.category}
                  </span>

                  {/* Core Photo */}
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* Shading Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                  {/* Title and details on lowest overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 text-white flex flex-col pointer-events-none">
                    <span className="text-xs font-black text-amber-300 tracking-wide uppercase">{p.name}</span>
                    <span className="text-sm font-bold opacity-90 truncate leading-tight">{p.subtitle}</span>
                  </div>

                  {/* RETRO "CLICK 👈" BADGE OVERLAY */}
                  <div className="absolute top-4 right-4 bg-[#FAF5EB] border-2 border-slate-900 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-[2px_2px_0px_#000] group-hover:scale-110 group-hover:bg-[#FDBF5A] transition-all duration-300">
                    <span className="text-[11px] font-extrabold text-slate-900 tracking-wider">CLICK</span>
                    <svg
                      className="w-4 h-4 text-slate-900 animate-bounce"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.303-.553-1.591 1.59m2.542 4.406-2.25-.75m-11.008 3.007 2.25-.75m-1.592-5.253 1.59 1.59M4.5 12H2.25"
                      />
                    </svg>
                  </div>
                </div>

                {/* Mini human recap under card */}
                <div className="px-1 text-xs font-bold text-[#5C4538] leading-relaxed">
                  {p.description}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
