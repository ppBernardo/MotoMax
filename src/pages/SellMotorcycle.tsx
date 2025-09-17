import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Upload, 
  Camera, 
  X, 
  CheckCircle, 
  Star,
  DollarSign,
  Calendar,
  Gauge,
  Fuel,
  Weight,
  Settings,
  Shield,
  Phone,
  MessageCircle,
  MapPin
} from "lucide-react";

const SellMotorcycle = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    // Informações básicas
    brand: "",
    model: "",
    year: "",
    mileage: "",
    condition: "",
    price: "",
    
    // Especificações técnicas
    engine: "",
    power: "",
    torque: "",
    consumption: "",
    weight: "",
    topSpeed: "",
    
    // Equipamentos
    features: [] as string[],
    
    // Informações adicionais
    description: "",
    location: "",
    contact: "",
    whatsapp: "",
    
    // Histórico
    hasAccident: "",
    maintenanceHistory: "",
    documents: ""
  });

  const availableFeatures = [
    "ABS", "Controle de Tração", "Modos de Pilotagem", "LED", "Digital", 
    "Quick Shifter", "Cruise Control", "Aquecimento de Guidão", "Central Multimídia",
    "Bluetooth", "GPS", "Alarme", "Imobilizador", "Farol de Milha", "Escape Esportivo"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFeatureToggle = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleImageUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (files.length > 0) {
      setUploadedImages(prev => [...prev, ...files].slice(0, 10)); // Máximo 10 fotos
    }
  }, []);

  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Aqui você implementaria o envio dos dados
    console.log("Dados da moto:", formData);
    console.log("Fotos:", uploadedImages);
    alert("Solicitação enviada com sucesso! Entraremos em contato em breve.");
    navigate('/');
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Header Section */}
        <section className="py-8 bg-gradient-to-b from-background to-secondary/20 border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => navigate('/')}
                className="transition-all duration-300 hover:scale-105"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar ao Início
              </Button>
              <div>
                <h1 className="text-3xl font-bold">Venda Sua Moto</h1>
                <p className="text-muted-foreground">Receba uma cotação gratuita e venda com segurança</p>
              </div>
            </div>
          </div>
        </section>

        {/* Progress Steps */}
        <section className="py-6 bg-background border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center space-x-8">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                    currentStep >= step 
                      ? 'bg-primary text-white' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {currentStep > step ? <CheckCircle className="h-5 w-5" /> : step}
                  </div>
                  <span className={`ml-2 text-sm font-medium ${
                    currentStep >= step ? 'text-primary' : 'text-muted-foreground'
                  }`}>
                    {step === 1 && 'Informações Básicas'}
                    {step === 2 && 'Especificações'}
                    {step === 3 && 'Fotos'}
                    {step === 4 && 'Contato'}
                  </span>
                  {step < 4 && (
                    <div className={`w-16 h-0.5 ml-4 ${
                      currentStep > step ? 'bg-primary' : 'bg-muted'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-t-lg">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <DollarSign className="h-6 w-6 text-primary" />
                  {currentStep === 1 && 'Informações Básicas da Moto'}
                  {currentStep === 2 && 'Especificações Técnicas'}
                  {currentStep === 3 && 'Fotos da Moto'}
                  {currentStep === 4 && 'Informações de Contato'}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-8">
                {/* Step 1: Basic Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="brand">Marca *</Label>
                        <Select onValueChange={(value) => handleInputChange('brand', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione a marca" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Honda">Honda</SelectItem>
                            <SelectItem value="Yamaha">Yamaha</SelectItem>
                            <SelectItem value="Kawasaki">Kawasaki</SelectItem>
                            <SelectItem value="Suzuki">Suzuki</SelectItem>
                            <SelectItem value="BMW">BMW</SelectItem>
                            <SelectItem value="Ducati">Ducati</SelectItem>
                            <SelectItem value="KTM">KTM</SelectItem>
                            <SelectItem value="Triumph">Triumph</SelectItem>
                            <SelectItem value="Aprilia">Aprilia</SelectItem>
                            <SelectItem value="Harley-Davidson">Harley-Davidson</SelectItem>
                            <SelectItem value="Outra">Outra</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="model">Modelo *</Label>
                        <Input
                          id="model"
                          placeholder="Ex: CBR 600RR"
                          value={formData.model}
                          onChange={(e) => handleInputChange('model', e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="year">Ano *</Label>
                        <Input
                          id="year"
                          type="number"
                          placeholder="2023"
                          min="1990"
                          max="2024"
                          value={formData.year}
                          onChange={(e) => handleInputChange('year', e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="mileage">Quilometragem *</Label>
                        <Input
                          id="mileage"
                          type="number"
                          placeholder="15000"
                          value={formData.mileage}
                          onChange={(e) => handleInputChange('mileage', e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="condition">Condição *</Label>
                        <Select onValueChange={(value) => handleInputChange('condition', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione a condição" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="nova">Nova (0 km)</SelectItem>
                            <SelectItem value="seminova">Seminova</SelectItem>
                            <SelectItem value="usada">Usada</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="price">Preço Esperado (R$)</Label>
                        <Input
                          id="price"
                          type="number"
                          placeholder="45000"
                          value={formData.price}
                          onChange={(e) => handleInputChange('price', e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="description">Descrição da Moto</Label>
                      <Textarea
                        id="description"
                        placeholder="Conte-nos mais sobre sua moto, histórico de manutenção, modificações, etc."
                        rows={4}
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Technical Specifications */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="engine">Motor</Label>
                        <Input
                          id="engine"
                          placeholder="Ex: 599cc, 4 cilindros"
                          value={formData.engine}
                          onChange={(e) => handleInputChange('engine', e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="power">Potência</Label>
                        <Input
                          id="power"
                          placeholder="Ex: 121 cv @ 13.500 rpm"
                          value={formData.power}
                          onChange={(e) => handleInputChange('power', e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="torque">Torque</Label>
                        <Input
                          id="torque"
                          placeholder="Ex: 6,3 kgfm @ 11.000 rpm"
                          value={formData.torque}
                          onChange={(e) => handleInputChange('torque', e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="consumption">Consumo</Label>
                        <Input
                          id="consumption"
                          placeholder="Ex: 17 km/l"
                          value={formData.consumption}
                          onChange={(e) => handleInputChange('consumption', e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="weight">Peso</Label>
                        <Input
                          id="weight"
                          placeholder="Ex: 194 kg"
                          value={formData.weight}
                          onChange={(e) => handleInputChange('weight', e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="topSpeed">Velocidade Máxima</Label>
                        <Input
                          id="topSpeed"
                          placeholder="Ex: 260 km/h"
                          value={formData.topSpeed}
                          onChange={(e) => handleInputChange('topSpeed', e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <Label>Equipamentos e Recursos</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {availableFeatures.map((feature) => (
                          <div
                            key={feature}
                            className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                              formData.features.includes(feature)
                                ? 'bg-primary/10 border-primary text-primary'
                                : 'bg-muted/50 border-border hover:bg-muted'
                            }`}
                            onClick={() => handleFeatureToggle(feature)}
                          >
                            <div className="flex items-center gap-2">
                              <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                                formData.features.includes(feature)
                                  ? 'bg-primary border-primary'
                                  : 'border-muted-foreground'
                              }`}>
                                {formData.features.includes(feature) && (
                                  <CheckCircle className="h-3 w-3 text-white" />
                                )}
                              </div>
                              <span className="text-sm font-medium">{feature}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Photos */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Camera className="h-12 w-12 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Adicione Fotos da Sua Moto</h3>
                      <p className="text-muted-foreground mb-6">
                        Fotos de qualidade ajudam a obter uma cotação mais precisa. 
                        Adicione até 10 fotos mostrando diferentes ângulos.
                      </p>
                    </div>
                    
                    <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                      <Upload className="h-12 w-12 text-primary mx-auto mb-4" />
                      <Label htmlFor="photos" className="cursor-pointer">
                        <span className="text-lg font-semibold text-primary hover:text-primary/80">
                          Clique para fazer upload das fotos
                        </span>
                        <p className="text-sm text-muted-foreground mt-2">
                          PNG, JPG até 10MB cada
                        </p>
                      </Label>
                      <Input
                        id="photos"
                        type="file"
                        multiple
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                      />
                    </div>
                    
                    {uploadedImages.length > 0 && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {uploadedImages.map((file, index) => (
                          <div key={index} className="relative group">
                            <img
                              src={URL.createObjectURL(file)}
                              alt={`Upload ${index + 1}`}
                              className="w-full h-32 object-cover rounded-lg"
                            />
                            <Button
                              size="sm"
                              variant="destructive"
                              className="absolute top-2 right-2 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                              onClick={() => removeImage(index)}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Step 4: Contact Information */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="contact">Nome Completo *</Label>
                        <Input
                          id="contact"
                          placeholder="Seu nome completo"
                          value={formData.contact}
                          onChange={(e) => handleInputChange('contact', e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="whatsapp">WhatsApp *</Label>
                        <Input
                          id="whatsapp"
                          placeholder="(11) 99999-9999"
                          value={formData.whatsapp}
                          onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="location">Localização *</Label>
                        <Input
                          id="location"
                          placeholder="Cidade, Estado"
                          value={formData.location}
                          onChange={(e) => handleInputChange('location', e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <Label>Histórico da Moto</Label>
                      
                      <div className="space-y-2">
                        <Label htmlFor="hasAccident">Já teve acidente?</Label>
                        <Select onValueChange={(value) => handleInputChange('hasAccident', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="nunca">Nunca</SelectItem>
                            <SelectItem value="leve">Acidente leve</SelectItem>
                            <SelectItem value="moderado">Acidente moderado</SelectItem>
                            <SelectItem value="grave">Acidente grave</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="maintenanceHistory">Histórico de Manutenção</Label>
                        <Textarea
                          id="maintenanceHistory"
                          placeholder="Descreva as manutenções realizadas, revisões, etc."
                          rows={3}
                          value={formData.maintenanceHistory}
                          onChange={(e) => handleInputChange('maintenanceHistory', e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="documents">Documentação</Label>
                        <Select onValueChange={(value) => handleInputChange('documents', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Status da documentação" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="completa">Documentação completa</SelectItem>
                            <SelectItem value="pendente">Alguma pendência</SelectItem>
                            <SelectItem value="irregular">Documentação irregular</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                  >
                    Anterior
                  </Button>
                  
                  {currentStep < 4 ? (
                    <Button onClick={nextStep}>
                      Próximo
                    </Button>
                  ) : (
                    <Button onClick={handleSubmit} className="bg-gradient-primary">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Enviar Solicitação
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Por que vender conosco?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Oferecemos as melhores condições do mercado para a venda da sua moto
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Melhor Preço</h3>
                <p className="text-muted-foreground">
                  Cotação justa baseada no mercado atual e condições da sua moto
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Venda Segura</h3>
                <p className="text-muted-foreground">
                  Processo transparente e seguro, sem complicações
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Pagamento Rápido</h3>
                <p className="text-muted-foreground">
                  Receba o pagamento em até 24h após a aprovação
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SellMotorcycle;
