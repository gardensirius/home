import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Linkedin,
  TreePine,
  ArrowRight,
  Leaf
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Sírius Garden</h3>
                <p className="text-sm text-primary-foreground/80">Jardinagem & Piscina</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Especialistas em criar, manter e valorizar áreas externas e internas com foco 
              em sustentabilidade e qualidade de vida.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-3">
              <a href="https://www.instagram.com/sirius__garden" target="_blank" className="inline-flex items-center justify-center gap-2 text-primary whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:text-accent-foreground h-9 rounded-md p-2 hover:bg-gradient-to-r from-primary to-nature">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/people/S%C3%ADrius-Garden/61579645234571/" target="_blank" className="inline-flex items-center justify-center gap-2 text-primary whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:text-accent-foreground h-9 rounded-md p-2 hover:bg-gradient-to-r from-primary to-nature">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Nossos Serviços</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>Jardinagem & Paisagismo</li>
              <li>Piscinas & Áreas Aquáticas</li>
              <li>Manutenção & Reparos</li>
              <li>Projetos de Interiores</li>
              <li>Gestão de Espaços</li>
              <li>Consultoria & Design</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><a href="#sobre" className="hover:text-primary-foreground transition-colors">Sobre Nós</a></li>
              <li><a href="#projetos" className="hover:text-primary-foreground transition-colors">Projetos</a></li>
              <li><a href="#depoimentos" className="hover:text-primary-foreground transition-colors">Depoimentos</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Orçamento</a></li>
              <li><a href="#contato" className="hover:text-primary-foreground transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-foreground/60" />
                <a href="https://wa.me/85994198383" target="_blank" className="flex flex-col">
                  <span className="text-primary-foreground">(85) 99419-8383</span>
                  <span className="text-sm text-primary-foreground/60">WhatsApp e Ligações</span>
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-foreground/60" />
                <a href="mailto:gardensirius@gmail.com" className="flex flex-col">
                  <span className="text-primary-foreground">gardensirius@gmail.com</span>
                  <span className="text-sm text-primary-foreground/60">E-mail principal</span>
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-foreground/60" />
                <div>
                  <div className="text-primary-foreground">Fortaleza, CE</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Trust */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="text-center">
            <div className="flex flex-wrap justify-center items-center gap-6 mb-6 text-sm text-primary-foreground/60">
              <span>✓ Licença Ambiental</span>
              <span>✓ CREA Regularizado</span>
              <span>✓ Seguro Total</span>
              <span>✓ Materiais Certificados</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-primary-foreground/10 border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80">
            <div>
              © 2024 Sírius Garden. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="hover:text-primary-foreground transition-colors">LGPD</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;