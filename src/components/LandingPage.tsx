import React, { useState } from "react";
import { PageView } from "../types";
import { motion } from "motion/react";
import { Coffee, ChevronRight, HelpCircle, Phone, X, Heart, ThumbsUp } from "lucide-react";

interface LandingPageProps {
  onNavigate: (page: PageView) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF5EB] font-sans text-gray-900 selection:bg-amber-200 flex flex-col relative overflow-hidden">
      {/* Header / Nav */}
      <header className="px-6 py-4 md:px-12 md:py-8 flex justify-between items-center z-10">
        <div className="flex items-center gap-3">
          {/* Shob Diary Circular Logo */}
          <div className="w-16 h-16 rounded-full bg-[#EEDCC4] border border-[#D3BEA2] p-1.5 flex flex-col items-center justify-center text-center shadow-sm">
            {/* Custom mini shopping cart icon */}
            <svg
              className="w-7 h-7 text-[#7D5A44]"
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
            <span className="text-[9px] font-extrabold text-[#7D5A44] leading-tight mt-0.5 tracking-tighter uppercase">
              shop dairy
            </span>
          </div>

          <div className="flex flex-col">
            <h1 className="text-xl font-black text-[#5C3E2F] tracking-tight">Shob Dairy</h1>
            <p className="text-sm font-bold text-[#8C6D58]">ช้อปทุกวัน! ของดีบอกต่อ</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => setShowAbout(true)}
            className="px-6 py-2.5 bg-[#FDBF5A] hover:bg-[#efa630] border-2 border-slate-900 rounded-xl font-bold text-sm shadow-[3px_3px_0px_#000] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_#000] transition-all duration-200"
            id="nav-about-btn"
          >
            About Us
          </button>
          <button
            onClick={() => setShowContact(true)}
            className="px-6 py-2.5 bg-[#FDBF5A] hover:bg-[#efa630] border-2 border-slate-900 rounded-xl font-bold text-sm shadow-[3px_3px_0px_#000] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_#000] transition-all duration-200"
            id="nav-contact-btn"
          >
            Contact
          </button>
        </div>
      </header>

      {/* Main Hero Elements */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 py-10 z-10">
        {/* Left Core Message Column */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <div className="space-y-1">
            <motion.h2
              className="text-8xl md:text-[110px] font-black tracking-tight text-[#2B2B2B] leading-[0.9]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              SHOB
            </motion.h2>
            <motion.h2
              className="text-8xl md:text-[110px] font-black tracking-tight text-[#FDBF5A] leading-[0.9]"
              style={{ WebkitTextStroke: "2px #2B2B2B" }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              DAIRY
            </motion.h2>
          </div>

          <motion.p
            className="text-xl font-bold text-[#5C4538] max-w-md mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            ช้อปสนุก รีวิวจริงใจ รวบรวมคลังสินค้าเด็ดประจำวันพร้อมดีลปังจากร้านดังบอกต่อตรงถึงหน้ามือถือคุณ!
          </motion.p>

          <motion.div
            className="mt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* View Product Button Styled exact as Page 1 Screenshot */}
            <button
              onClick={() => onNavigate("catalog")}
              className="group flex items-center justify-between gap-12 p-4 md:p-5 bg-[#FDBF5A] hover:bg-[#fcae33] border-3 border-slate-900 rounded-2xl w-fit shadow-[6px_6px_0px_#1E293B] hover:translate-y-[4px] hover:shadow-[2px_2px_0px_#1E293B] transition-all duration-200"
              id="cta-view-product"
            >
              <div className="flex flex-col items-start leading-tight">
                <span className="text-3xl font-extrabold text-slate-900 tracking-tight">View</span>
                <span className="text-3xl font-extrabold text-slate-900 tracking-tight">Product</span>
              </div>
              <div className="w-14 h-14 rounded-full bg-white border-3 border-slate-900 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-slate-900"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </button>
          </motion.div>
        </div>

        {/* Right Illustration Column (Custom High-Contrast Vector Matching Page 1 Cartoon) */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <motion.div
            className="relative w-full max-w-[500px] h-[450px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            {/* Custom high-fidelity interactive illustration instead of broken image URLs */}
            <svg
              viewBox="0 0 600 500"
              className="w-full h-full text-slate-900"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Hearts floating above */}
              <g className="animate-bounce" style={{ animationDuration: "3s" }}>
                {/* Heart 1 */}
                <path
                  d="M340 100 C 330 80, 305 80, 305 95 C 305 110, 340 130, 340 130 C 340 130, 375 110, 375 95 C 375 80, 350 80, 340 100 Z"
                  fill="#FF6B6B"
                  stroke="#1E293B"
                  strokeWidth="3.5"
                />
                {/* Heart 2 */}
                <path
                  d="M360 160 C 352 145, 332 145, 332 155 C 332 165, 360 180, 360 180 C 360 180, 388 165, 388 155 C 388 145, 368 145, 360 160 Z"
                  fill="#FF8E8E"
                  stroke="#1E293B"
                  strokeWidth="3"
                  transform="scale(0.8) translate(80, 30)"
                />
              </g>

              {/* Handcart support outline (Luggage framework) */}
              <path
                d="M480 430 L480 180 C480 140, 560 140, 560 180 L560 430"
                stroke="#1E293B"
                strokeWidth="5"
                strokeLinecap="round"
              />
              {/* Handcart bar divider */}
              <line x1="480" y1="360" x2="560" y2="360" stroke="#1E293B" strokeWidth="4" />
              <line x1="480" y1="280" x2="560" y2="280" stroke="#1E293B" strokeWidth="4" />
              <line x1="480" y1="200" x2="560" y2="200" stroke="#1E293B" strokeWidth="4" />

              {/* Handcart main rod hanging handle */}
              <line x1="520" y1="140" x2="520" y2="200" stroke="#1E293B" strokeWidth="4" />
              {/* Top hook circle */}
              <circle cx="520" cy="130" r="10" fill="white" stroke="#1E293B" strokeWidth="4" />

              {/* Luggage Box 1 (Bottom Right) */}
              <rect
                x="490"
                y="370"
                width="60"
                height="50"
                rx="6"
                fill="#FDBF5A"
                stroke="#1E293B"
                strokeWidth="4"
              />
              <path d="M500 395 L540 395" stroke="#1E293B" strokeWidth="3" />
              <circle cx="505" cy="382" r="3" fill="#1E293B" />
              <circle cx="535" cy="382" r="3" fill="#1E293B" />

              {/* Luggage Box 2 (Middle) */}
              <rect
                x="493"
                y="295"
                width="54"
                height="55"
                rx="8"
                fill="#FAF5EB"
                stroke="#1E293B"
                strokeWidth="4"
              />
              <path d="M505 322 L535 322" stroke="#1E293B" strokeWidth="3.5" strokeLinecap="round" />
              <rect x="510" y="303" width="20" height="10" rx="3" fill="none" stroke="#1E293B" strokeWidth="3" />

              {/* Luggage Box 3 (Top Mini Case) */}
              <rect
                x="495"
                y="215"
                width="50"
                height="55"
                rx="5"
                fill="#EEDCC4"
                stroke="#1E293B"
                strokeWidth="4"
              />
              <circle cx="520" cy="242" r="6" fill="white" stroke="#1E293B" strokeWidth="3" />

              {/* Tiny Backpack */}
              <rect
                x="440"
                y="330"
                width="34"
                height="90"
                rx="8"
                fill="#FDBF5A"
                stroke="#1E293B"
                strokeWidth="4"
              />
              <circle cx="457" cy="350" r="4" fill="#1E293B" />
              <line x1="440" y1="365" x2="474" y2="365" stroke="#1E293B" strokeWidth="3" />
              <line x1="440" y1="400" x2="474" y2="400" stroke="#1E293B" strokeWidth="3" />

              {/* Handcart Wheels */}
              <circle cx="488" cy="442" r="14" fill="#1E293B" />
              <circle cx="488" cy="442" r="5" fill="white" />
              <circle cx="552" cy="442" r="14" fill="#1E293B" />
              <circle cx="552" cy="442" r="5" fill="white" />

              {/* Girl / Person Pushing (Cartoon style) */}
              <g id="animated-person">
                {/* Legs (Walking) */}
                <path
                  d="M338 410 L348 445 L368 448"
                  stroke="#1E293B"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M405 410 L418 438 L438 432"
                  stroke="#1E293B"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Boots */}
                <ellipse cx="361" cy="449" rx="10" ry="7" fill="#1E293B" />
                <ellipse cx="431" cy="433" rx="10" ry="7" fill="#1E293B" />

                {/* Body (Coat/Pants) */}
                <path
                  d="M335 410 L415 410 L395 255 L350 255 Z"
                  fill="#1E293B"
                  stroke="#1E293B"
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                />

                {/* Collar */}
                <path d="M363 255 C370 248, 380 248, 387 255" stroke="#1E293B" strokeWidth="3.5" />

                {/* Head */}
                <circle cx="375" cy="225" r="15" fill="#FAF5EB" stroke="#1E293B" strokeWidth="3.5" />

                {/* Hair Ribbon / Cap */}
                <path d="M363 214 L387 214 L382 205 L368 205 Z" fill="#1E293B" />

                {/* Pontytail */}
                <path
                  d="M360 225 C340 230, 315 255, 315 270"
                  stroke="#1E293B"
                  strokeWidth="6"
                  strokeLinecap="round"
                />

                {/* Arms extending to push handle of luggage carrier */}
                <path
                  d="M388 275 Q440 255, 485 220"
                  stroke="#1E293B"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>

              {/* Speech bubble 1: Smile (Left Middle) */}
              <g transform="translate(290, 220)">
                <rect
                  x="0"
                  y="0"
                  width="60"
                  height="45"
                  rx="15"
                  fill="white"
                  stroke="#1E293B"
                  strokeWidth="3.5"
                />
                <path d="M50 35 L60 45 L50 43 Z" fill="white" stroke="#1E293B" strokeWidth="3.5" />
                <path d="M49.2 34 L56 41" stroke="white" strokeWidth="4.5" />
                {/* Smiley Face */}
                <circle cx="23" cy="20" r="3" fill="#1E293B" />
                <circle cx="37" cy="20" r="3" fill="#1E293B" />
                <path d="M23 27 Q30 34, 37 27" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
              </g>

              {/* Speech bubble 2: Like (Right Top) */}
              <g transform="translate(390, 100)">
                <rect
                  x="0"
                  y="0"
                  width="70"
                  height="50"
                  rx="15"
                  fill="white"
                  stroke="#1E293B"
                  strokeWidth="3.5"
                />
                {/* Speech tail pointed left-down */}
                <path d="M20 45 L10 55 L22 49" fill="white" stroke="#1E293B" strokeWidth="3.5" />
                <path d="M19 44 L21 47" stroke="white" strokeWidth="4" />
                {/* Thumbs Up Icon shape drawn manually */}
                <path
                  d="M32 30 L32 25 Q32 22, 34 22 L36 22 L36 26 L40 26 C43 26, 44 28, 43 30 L41.5 35 C41 37, 39 37, 37 37 L32 37 Z"
                  fill="#FDBF5A"
                  stroke="#1E293B"
                  strokeWidth="3"
                />
              </g>
            </svg>
          </motion.div>
        </div>
      </main>

      {/* Decorative Warm Footer */}
      <footer className="py-6 border-t border-[#EEDCC4] text-center text-xs font-mono text-[#8C6D58]">
        © 2026 Shob Dairy. All rights reserved. • 
      </footer>

      {/* Slide Out Panel: About Us */}
      {showAbout && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            className="bg-[#FAF5EB] border-3 border-slate-900 rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-[8px_8px_0px_#000] relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <button
              onClick={() => setShowAbout(false)}
              className="absolute top-4 right-4 p-1.5 bg-red-100 hover:bg-red-200 border-2 border-slate-900 rounded-full"
            >
              <X className="w-5 h-5 text-red-700" />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-amber-100 rounded-xl border-2 border-slate-900 text-amber-600">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">About Shob Dairy</h3>
            </div>
            <div className="space-y-4 text-[#5c4234] font-bold leading-relaxed">
              <p>
                ยินดีต้อนรับสู่ <span className="text-[#e29c29] font-black underline">Shob Dairy</span> คลังป้ายยาสินค้าและออมดีลพิเศษประจำวันของพวกเรา!
              </p>
              <p>
                พวกเราคือผู้แนะนำและรีวิวสินค้าแบบเจาะลึก คัดสรรมาอย่างดีตั้งแต่หนังสือสร้างแรงบันดาลใจ ของอร่อย เครื่องใช้มินิมอล จนถึงอุปกรณ์ตกแต่งโต๊ะทำงานที่ทำให้คุณตกหลุมรักตั้งแต่แรกพบ
              </p>
              <p>
                ภารกิจหลักของเราคือ "ช้อปทุกวัน! ของดีบอกต่อ" ช่วยให้การตัดสินใจเลือกซื้อของของคุณคุ้มค่า สนุก และสะดวกที่สุดผ่าน website ของเราได้เลย!
              </p>
            </div>
            <button
              onClick={() => setShowAbout(false)}
              className="mt-6 w-full py-3 bg-[#FDBF5A] border-2 border-slate-900 rounded-xl font-bold hover:bg-[#efa630] transition-colors shadow-[2px_2px_0px_#000]"
            >
              รับทราบความน่ารัก
            </button>
          </motion.div>
        </div>
      )}

      {/* Slide Out Panel: Contact Info */}
      {showContact && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            className="bg-[#FAF5EB] border-3 border-slate-900 rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-[8px_8px_0px_#000] relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <button
              onClick={() => setShowContact(false)}
              className="absolute top-4 right-4 p-1.5 bg-red-100 hover:bg-red-200 border-2 border-slate-900 rounded-full"
            >
              <X className="w-5 h-5 text-red-700" />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-amber-100 rounded-xl border-2 border-slate-900 text-amber-600">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Contact Channels</h3>
            </div>
            <div className="space-y-4 text-[#5c4234] font-bold">
              <p className="mb-2">ช่องทางติดตามและติดต่องานพวกเรา Shob Dairy:</p>
              <div className="space-y-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61589378985973"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white hover:bg-slate-50 border-2 border-slate-900 rounded-xl transition-all cursor-pointer group/item"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#FDBF5A] flex items-center justify-center font-bold text-xs border border-slate-900 group-hover/item:scale-110 transition-all">
                    FB
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-mono">Facebook Page</p>
                    <p className="text-sm font-extrabold text-[#5c4234] group-hover/item:text-[#e29c29] transition-all">Shob Dairy - ช้อปทุกวันของดีบอกต่อ</p>
                  </div>
                </a>
                <a
                  href="https://www.tiktok.com/@shobdaily"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white hover:bg-slate-50 border-2 border-slate-900 rounded-xl transition-all cursor-pointer group/item"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#FDBF5A] flex items-center justify-center font-bold text-xs border border-slate-900 group-hover/item:scale-110 transition-all">
                    TIK
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-mono">TikTok @shobdaily</p>
                    <p className="text-sm font-extrabold text-[#5c4234] group-hover/item:text-[#e29c29] transition-all">tiktok.com/@shobdaily</p>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/shobdairy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white hover:bg-slate-50 border-2 border-slate-900 rounded-xl transition-all cursor-pointer group/item"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#FDBF5A] flex items-center justify-center font-bold text-xs border border-slate-900 group-hover/item:scale-110 transition-all">
                    IG
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-mono">Instagram @shobdairy</p>
                    <p className="text-sm font-extrabold text-[#5c4234] group-hover/item:text-[#e29c29] transition-all">instagram.com/shobdairy</p>
                  </div>
                </a>
                <a
                  href="https://www.youtube.com/@shobdairyco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white hover:bg-slate-50 border-2 border-slate-900 rounded-xl transition-all cursor-pointer group/item"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#FDBF5A] flex items-center justify-center font-bold text-xs border border-slate-900 group-hover/item:scale-110 transition-all">
                    YT
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-mono">Youtube @shobdairyco</p>
                    <p className="text-sm font-extrabold text-[#5c4234] group-hover/item:text-[#e29c29] transition-all">youtube.com/@shobdairyco</p>
                  </div>
                </a>
              </div>
            </div>
            <button
              onClick={() => setShowContact(false)}
              className="mt-6 w-full py-3 bg-[#FDBF5A] border-2 border-slate-900 rounded-xl font-bold hover:bg-[#efa630] transition-colors shadow-[2px_2px_0px_#000]"
            >
              ปิดหน้าต่างช่องทางติดต่อ
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
