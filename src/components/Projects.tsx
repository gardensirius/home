import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Users, Droplets, TreePine, Home } from "lucide-react";

const Projects = () => {
  const caseStudies = [
    {
      title: "Jardim Vertical: Reconstrução e Irrigação Inteligente",
      client: "Sra. Catarina Ramos (Residência no Jardim Ibisa, Eusébio)",
      challenge: "Remontar todo o jardim vertical; algumas plantas nos vasos não eram apropriadas para esse tipo de jardim, estavam muito grandes, com raízes extensas e danificando o muro.",
      solution: "Removemos todas as plantas desses vasos do jardim vertical que não eram adequadas, trouxemos novas mudas de outras espécies para recompor e colocamos a “mão na massa”. Montamos os vasos um a um com areia, brita, adubo e pedriscos para a drenagem. Removemos as raízes do muro e, em seguida, começamos a montar novamente todo o jardim vertical da cliente.",
      features: ["Remontagem de jardim vertical", "Drenagem dos jarros", "Jardim vertical sustentável", "sistema de irrigação automática inteligente"],
      category: "Jardim Vertical",
      icon: TreePine,
      gradient: "from-nature to-primary"
    },
    {
      title: "Manutenção de Piscina — Parc du Soleil",
      client: "Condomínio Parc du Soleil",
      challenge: "Serviço de manutenção e limpeza de piscina.",
      solution: "Iniciamos verificando o nível da água. Removemos os detritos da superfície, verificamos o nível de pH e o nível de cloro (ou substituto), esvaziamos o cesto do skimmer e da bomba, aspiramos a piscina, verificamos a pressão do filtro e realizamos a escovação das paredes e do fundo.<br/>Em seguida, finalizamos com a manutenção preventiva, deixando a piscina limpa, com água cristalina e pronta para uso — com a qualidade que só a Sirius Garden oferece!",
      features: ["Manutenção e limpeza de piscina", "Limpeza do filtro", "Escovação de paredes e fundo da piscina", "Manutenção preventiva"],
      category: "Piscina corporativa",
      icon: Droplets,
      gradient: "from-accent to-water"
    },
    {
      title: "Revitalização de Jardim e Jardim Vertical – Sebrae Fortaleza",
      client: "SEDE SEBRAE FORTALEZA-CE",
      challenge: "Serviço de jardinagem visando à manutenção, limpeza e revitalização de todo o jardim do prédio do SEBRAE.",
      solution: " Iniciamos com a manutenção completa, incluindo podas e limpeza geral do jardim do SEBRAE, bem como a manutenção do jardim vertical. Em seguida, o técnico avaliou as necessidades de cada planta presente tanto no jardim principal quanto no jardim vertical. Começamos o processo de nutrição das plantas com adubação adequada, rega intensiva e aplicação de defensivos para controle de pragas e fungos, quando necessário. Continuaremos zelando e cuidando de cada planta conforme suas necessidades específicas, valorizando as áreas verdes e oferecendo soluções completas em jardinagem, paisagismo e pequenos reparos.",
      features: ["Jardinagem", "Revitalização do jardim", "Jardim vertical sustentável", "Drenagem dos jarros"],
      category: "Jardinagem corportativa",
      icon: TreePine,
      gradient: "from-nature to-primary"
    }
  ];

  return (
    <section id="projetos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projetos em <span className="bg-gradient-to-r from-primary to-nature bg-clip-text text-transparent">Destaque</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conheça alguns dos nossos projetos mais marcantes e veja como transformamos 
            desafios em soluções inovadoras e sustentáveis.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="overflow-hidden border-0 shadow-soft hover:shadow-elevated transition-all duration-300">
                <div className="">
                  {/* Project Info */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center justify-between mb-6">
                      <Badge variant="outline" className="border-primary text-primary">
                        {project.category}
                      </Badge>
                      <div className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                    
                    {/* Project Details */}
                    <div className="mb-6">
                      <div>
                        <div className="text-sm text-muted-foreground">Cliente</div>
                        <div className="font-medium text-foreground">{project.client}</div>
                      </div>
                    </div>

                    {/* Challenge */}
                    <div className="mb-6">
                      <h4 className="font-bold text-foreground mb-2">🎯 Desafio</h4>
                      <p className="text-muted-foreground">{project.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div className="mb-6">
                      <h4 className="font-bold text-foreground mb-2">💡 Solução</h4>
                      <p className="text-muted-foreground" dangerouslySetInnerHTML={{__html: project.solution}} />
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-bold text-foreground mb-3">✨ Características Principais</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-nature/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Pronto para Transformar Seu Espaço?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Cada projeto é único e desenvolvido especialmente para suas necessidades. 
              Vamos criar algo extraordinário juntos!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/85994198383" target="_blank" className="flex items-center justify-center gap-2 px-8 rounded-md h-11 text-primary-foreground bg-gradient-to-r from-primary to-nature hover:from-primary-hover hover:to-primary leading-[13px]">
                Solicitar Orçamento Gratuito
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;