import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Info from "@/components/Info";

export default function BusinessCard() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(true);
    setTimeout(() => navigate("/home"), 300);
  };

  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: isOpen ? 0 : 1, scale: isOpen ? 0.95 : 1 }}
      transition={{ duration: 0.5 }}
      className="w-screen h-screen flex justify-center items-center bg-black text-black/98"
    >
      <div className="flex flex-col gap-6">
        {/* 메인페이지로 이동 */}
        <div className="w-108 h-64 bg-[url(/assets/images/main/businessCard.png)] bg-cover pl-10 pr-24 py-14 flex justify-between items-end uppercase">
          <p className="text-xl">Go to → → →</p>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <p className="text-2xl italic cursor-pointer text-red-500/98 border-b-1" onClick={handleClick}>
              Portfolio
            </p>
          </motion.div>
        </div>

        {/* Info */}
        <Info />
      </div>
    </motion.div>
  );
}
