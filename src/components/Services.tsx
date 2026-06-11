import { motion } from 'motion/react';
import { 
  Smile, 
  Sparkles, 
  Stethoscope, 
  ShieldCheck, 
  Heart, 
  Trash2,
  Clock,
  ChevronRight
} from 'lucide-react';

const services = [
  {
    title: 'Medicina Dentária Geral',
    description: 'Exames completos, destartarização/limpeza e radiografias digitais para manter a saúde do seu sorriso.',
    icon: Stethoscope,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Estética Dentária',
    description: 'Transforme o seu sorriso com facetas de porcelana personalizadas, branqueamento e outras soluções estéticas.',
    icon: Sparkles,
    color: 'bg-purple-50 text-purple-600'
  },
  {
    title: 'Medicina Dentária Restauradora',
    description: 'Coroas resistentes, pontes e restaurações estéticas concebidas para parecerem totalmente naturais.',
    icon: ShieldCheck,
    color: 'bg-emerald-50 text-emerald-600'
  },
  {
    title: 'Branqueamento Dentário',
    description: 'Tratamentos profissionais de branqueamento para iluminar o seu sorriso de forma segura e eficaz.',
    icon: Smile,
    color: 'bg-amber-50 text-amber-600'
  },
  {
    title: 'Implantes Dentários',
    description: 'Soluções permanentes para dentes em falta que devolvem a plena funcionalidade e a confiança.',
    icon: Heart,
    color: 'bg-rose-50 text-rose-600'
  },
  {
    title: 'Urgências Dentárias',
    description: 'Atendimento rápido para situações urgentes, com o objetivo de aliviar a dor e prevenir danos maiores.',
    icon: Clock,
    color: 'bg-orange-50 text-orange-600'
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-white px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Excelência Clínica
          </motion.h2>
          <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-xl border border-slate-100 flex flex-col items-center text-center transition-all duration-300 ${
                index === 2 ? 'bg-sky-800 text-white shadow-xl shadow-sky-800/20' : 'bg-slate-50 hover:bg-white hover:shadow-lg'
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${
                index === 2 ? 'bg-sky-700 text-white' : 'bg-sky-100 text-sky-600'
              }`}>
                <service.icon size={24} />
              </div>
              <h3 className={`font-bold mb-3 ${index === 2 ? 'text-white' : 'text-slate-800'}`}>{service.title}</h3>
              <p className={`text-xs leading-relaxed ${index === 2 ? 'opacity-80' : 'text-slate-500'}`}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
