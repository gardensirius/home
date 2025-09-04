import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import logoImage from "@/assets/logo-sirius-garden.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-24 h-16 bg-transparent from-primary to-nature rounded-lg flex items-center justify-center">
              <img src={logoImage} alt="logo sirius garden" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Sírius Garden</h1>
              <p className="text-sm text-muted-foreground">Jardinagem & Piscina</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">Sobre</a>
            <a href="#servicos" className="text-foreground hover:text-primary transition-colors">Serviços</a>
            <a href="#projetos" className="text-foreground hover:text-primary transition-colors">Projetos</a>
            <a href="#depoimentos" className="text-foreground hover:text-primary transition-colors">Depoimentos</a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">Contato</a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>(85) 99419-8383 / (85) 98108-3612</span>
            </div>
            <a href="https://wa.me/85994198383" target="_blank" className="text-primary-foreground px-3 rounded-sm h-9 flex items-center justify-center bg-gradient-to-r from-primary to-nature hover:from-primary-hover hover:to-primary">
              Solicitar Orçamento
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#sobre" className="text-foreground hover:text-primary transition-colors">Sobre</a>
              <a href="#servicos" className="text-foreground hover:text-primary transition-colors">Serviços</a>
              <a href="#projetos" className="text-foreground hover:text-primary transition-colors">Projetos</a>
              <a href="#depoimentos" className="text-foreground hover:text-primary transition-colors">Depoimentos</a>
              <a href="#contato" className="text-foreground hover:text-primary transition-colors">Contato</a>
              <div className="pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                  <Phone className="w-4 h-4" />
                  <span>(11) 9999-9999</span>
                </div>
                <Button size="sm" className="w-full bg-gradient-to-r from-primary to-nature">
                  Solicitar Orçamento
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;