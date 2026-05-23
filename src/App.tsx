import React, { useState } from "react";
import { PageView } from "./types";
import LandingPage from "./components/LandingPage";
import CatalogPage from "./components/CatalogPage";
import DetailPage from "./components/DetailPage";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>("home");
  const [activeProductId, setActiveProductId] = useState<string>("iamthebest");

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
  };

  const handleSelectProduct = (productId: string) => {
    setActiveProductId(productId);
    setCurrentPage("detail");
  };

  return (
    <div className="bg-[#FAF5EB] min-h-screen selection:bg-amber-100 overflow-x-hidden">
      <AnimatePresence mode="wait">
        {currentPage === "home" && (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
          >
            <LandingPage onNavigate={handleNavigate} />
          </motion.div>
        )}

        {currentPage === "catalog" && (
          <motion.div
            key="catalog"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
          >
            <CatalogPage
              onNavigateHome={() => handleNavigate("home")}
              onSelectProduct={handleSelectProduct}
            />
          </motion.div>
        )}

        {currentPage === "detail" && (
          <motion.div
            key="detail"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
          >
            <DetailPage
              productId={activeProductId}
              onBackToCatalog={() => handleNavigate("catalog")}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
