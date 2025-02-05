import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Info() {
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
			className="uppercase w-screen h-screen flex justify-center items-center"
		>
			<div className="flex flex-col gap-6">
				{/* 메인페이지로 이동 */}
				<div className="w-108 h-64 bg-[rgba(255,255,255,0.95)] pl-10 pr-24 py-14 flex justify-between items-end">
					<p className="text-xl">Go to → → →</p>
					<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
						<p
							className="text-2xl italic cursor-pointer text-red-500/98 border-b-1"
							onClick={handleClick}
						>
							portfolio
						</p>
					</motion.div>
				</div>

				{/* INFO */}
				<div className="w-108 h-64 bg-[rgba(255,255,255,0.95)] p-6 flex flex-col justify-between">
					<div className="flex justify-between">
						<p className="text-3xl font-normal">Hyerin Choi</p>
						<p
							className="text-sm mt-18 lowercase"
							style={{
								fontFamily: "DiatypeMono",
							}}
						>
							&lt;frontend developer /&gt;
						</p>
					</div>
					<p className="text-sm italic mt-3">+ contact</p>
					<div className="flex justify-between mt-4">
						<div className="flex flex-col justify-center">
							<a href="mailto:hrinc.dev@gmail.com">hrinc.dev@gmail.com</a>
							<div className="flex space-x-4">
								<a href="https://github.com/choihyerln">github</a>
								<a href="https://velog.io/@cwg5656">blog</a>
								<a href="https://choihyerln.notion.site/0b69fc8f761b45269110a0fa1c2fdcdf?v=f4e5adc15c0b4fa2b84f5acc834bd0c7">
									notion
								</a>
							</div>
						</div>
						<p className="text-sm mt-auto">Seoul, South Korea</p>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
