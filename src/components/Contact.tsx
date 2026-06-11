import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-8 lg:px-16 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-stretch relative z-10">
          <div className="flex flex-col justify-center">
            <span className="text-sky-600 font-bold text-sm tracking-[0.2em] uppercase mb-4 block">Contacte-nos</span>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Juntos pela sua Saúde Oral.</h2>
            <p className="text-slate-600 text-lg mb-12 max-w-md leading-relaxed">
              Estamos localizados numa zona central e de fácil acesso. Entre em contacto connosco para agendar a sua próxima consulta ou esclarecer qualquer dúvida sobre os nossos tratamentos.
            </p>

            <div className="space-y-6">
              {[
                { icon: MapPin, title: 'Localização', detail: 'Rua da Saúde 123, Cidade do Sorriso' },
                { icon: Phone, title: 'Ligue-nos', detail: '(555) 123-4567' },
                { icon: Clock, title: 'Horário', detail: 'Seg - Qui: 8:00 - 17:00' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 flex-shrink-0 flex items-center justify-center text-sky-600 border border-sky-100">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-slate-400 font-bold uppercase tracking-wider text-[10px] mb-0.5">{item.title}</p>
                    <p className="text-slate-800 font-bold">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-10 lg:p-12 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 text-slate-900"
          >
            <h3 className="text-2xl font-bold mb-8 text-sky-900">Pedir Informações</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  required
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-sky-500 transition-all font-medium placeholder:text-slate-300 text-slate-800"
                  placeholder="Nome Completo"
                />
                <input
                  type="tel"
                  required
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-sky-500 transition-all font-medium placeholder:text-slate-300 text-slate-800"
                  placeholder="Número de Telefone"
                />
              </div>
              <input
                type="email"
                required
                className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-sky-500 transition-all font-medium placeholder:text-slate-300 text-slate-800"
                placeholder="E-mail"
              />
              <textarea
                rows={4}
                required
                className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-sky-500 transition-all font-medium placeholder:text-slate-300 text-slate-800"
                placeholder="Como podemos ajudar?"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-sky-900 text-white font-bold py-4 rounded-lg hover:bg-sky-800 transition-all shadow-lg shadow-sky-900/20 flex items-center justify-center gap-2 uppercase tracking-wide cursor-pointer"
              >
                Enviar Pedido
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
