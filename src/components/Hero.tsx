import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden group">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=2000"
          alt="Ultra Modern Dental Clinic"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/20 lg:to-transparent"></div>
      </div>

      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-sky-600 font-bold text-sm tracking-[0.2em] uppercase mb-4 block">Cuidados Dentários de Confiança</span>
            <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
              Excelência em Medicina Dentária, <br/>
              <span className="text-sky-700 font-bold">Dedicada à sua Saúde.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg font-medium">
              Oferecemos serviços de medicina dentária geral, estética e cirúrgica com elevada qualidade para toda a comunidade, num ambiente confortável e moderno.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => {
                  const el = document.getElementById('services');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-sky-900 text-white px-10 py-4 rounded font-bold text-base shadow-2xl shadow-sky-900/30 hover:bg-sky-800 transition-all uppercase tracking-wide cursor-pointer"
              >
                OS NOSSOS SERVIÇOS
              </button>
              <button 
                onClick={() => {
                  const el = document.getElementById('about');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-sky-900 text-sky-900 px-10 py-4 rounded font-bold text-base bg-white/40 backdrop-blur-sm hover:bg-white transition-all uppercase tracking-wide cursor-pointer"
              >
                MAIS INFORMAÇÕES
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
