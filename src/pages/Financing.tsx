import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  Calculator, 
  CreditCard, 
  CheckCircle, 
  Star,
  DollarSign,
  Calendar,
  Percent,
  Shield,
  Clock,
  FileText,
  Phone,
  MessageCircle,
  TrendingUp,
  Award,
  Users,
  Zap
} from "lucide-react";

const Financing = () => {
  const navigate = useNavigate();
  const [simulatorData, setSimulatorData] = useState({
    vehiclePrice: "",
    downPayment: "",
    financingTerm: "60",
    income: "",
    hasGuarantor: "false"
  });

  const [requestData, setRequestData] = useState({
    name: "",
    email: "",
    phone: "",
    cpf: "",
    income: "",
    occupation: "",
    company: "",
    hasGuarantor: "false",
    guarantorName: "",
    guarantorPhone: "",
    selectedMotorcycle: "",
    financingTerm: "60",
    downPayment: ""
  });

  const financingTerms = [
    { value: "12", label: "12x", interest: 0.8 },
    { value: "24", label: "24x", interest: 1.2 },
    { value: "36", label: "36x", interest: 1.5 },
    { value: "48", label: "48x", interest: 1.8 },
    { value: "60", label: "60x", interest: 2.0 }
  ];

  const calculateFinancing = useCallback(() => {
    const price = parseFloat(simulatorData.vehiclePrice) || 0;
    const downPayment = parseFloat(simulatorData.downPayment) || 0;
    const term = parseInt(simulatorData.financingTerm);
    const termData = financingTerms.find(t => t.value === simulatorData.financingTerm);
    const interestRate = termData?.interest || 2.0;

    const financedAmount = price - downPayment;
    const monthlyInterest = interestRate / 100;
    const monthlyPayment = financedAmount * (monthlyInterest * Math.pow(1 + monthlyInterest, term)) / 
                          (Math.pow(1 + monthlyInterest, term) - 1);
    const totalAmount = monthlyPayment * term;
    const totalInterest = totalAmount - financedAmount;

    return {
      financedAmount,
      monthlyPayment,
      totalAmount,
      totalInterest,
      interestRate
    };
  }, [simulatorData, financingTerms]);

  const financing = calculateFinancing();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const handleSimulatorChange = (field: string, value: string) => {
    setSimulatorData(prev => ({ ...prev, [field]: value }));
  };

  const handleRequestChange = (field: string, value: string) => {
    setRequestData(prev => ({ ...prev, [field]: value }));
  };

  const handleSimulatorSubmit = () => {
    if (simulatorData.vehiclePrice && simulatorData.downPayment) {
      // Scroll to request form
      document.getElementById('request-form')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestSubmit = () => {
    console.log("Solicitação de financiamento:", requestData);
    alert("Solicitação enviada com sucesso! Entraremos em contato em até 24h.");
    navigate('/');
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
                <h1 className="text-3xl font-bold">Financiamento de Motos</h1>
                <p className="text-muted-foreground">Simule e solicite seu financiamento com as melhores condições</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="h-4 w-4" />
                As Melhores Condições do Mercado
              </div>
              <h2 className="text-4xl font-bold mb-4">Por que escolher nosso financiamento?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Oferecemos as taxas mais competitivas e o processo mais rápido do mercado
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Percent className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Taxas Competitivas</h3>
                <p className="text-muted-foreground">
                  A partir de 0,8% ao mês com as melhores condições do mercado
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Aprovação Rápida</h3>
                <p className="text-muted-foreground">
                  Resposta em até 24h com documentação simplificada
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">100% Seguro</h3>
                <p className="text-muted-foreground">
                  Processo transparente e sem pegadinhas
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Simulator Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Simulador de Financiamento</h2>
              <p className="text-xl text-muted-foreground">
                Calcule suas parcelas e veja quanto você pode financiar
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Simulator Form */}
              <Card className="border-0 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-t-lg">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Calculator className="h-6 w-6 text-primary" />
                    Simule seu Financiamento
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="vehiclePrice">Valor da Moto (R$) *</Label>
                    <Input
                      id="vehiclePrice"
                      type="number"
                      placeholder="45000"
                      value={simulatorData.vehiclePrice}
                      onChange={(e) => handleSimulatorChange('vehiclePrice', e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="downPayment">Entrada (R$) *</Label>
                    <Input
                      id="downPayment"
                      type="number"
                      placeholder="10000"
                      value={simulatorData.downPayment}
                      onChange={(e) => handleSimulatorChange('downPayment', e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="financingTerm">Prazo de Pagamento</Label>
                    <Select onValueChange={(value) => handleSimulatorChange('financingTerm', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o prazo" />
                      </SelectTrigger>
                      <SelectContent>
                        {financingTerms.map((term) => (
                          <SelectItem key={term.value} value={term.value}>
                            {term.label} - {term.interest}% a.m.
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="income">Renda Mensal (R$)</Label>
                    <Input
                      id="income"
                      type="number"
                      placeholder="5000"
                      value={simulatorData.income}
                      onChange={(e) => handleSimulatorChange('income', e.target.value)}
                    />
                  </div>
                  
                  <Button 
                    onClick={handleSimulatorSubmit}
                    className="w-full bg-gradient-primary"
                    disabled={!simulatorData.vehiclePrice || !simulatorData.downPayment}
                  >
                    <Calculator className="h-4 w-4 mr-2" />
                    Calcular Financiamento
                  </Button>
                </CardContent>
              </Card>

              {/* Results */}
              <Card className="border-0 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-t-lg">
                  <CardTitle className="flex items-center gap-2 text-xl text-green-600">
                    <TrendingUp className="h-6 w-6" />
                    Resultado da Simulação
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-6 space-y-6">
                  {simulatorData.vehiclePrice && simulatorData.downPayment ? (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-muted/50 rounded-lg">
                          <p className="text-sm text-muted-foreground">Valor Financiado</p>
                          <p className="text-2xl font-bold text-primary">
                            {formatPrice(financing.financedAmount)}
                          </p>
                        </div>
                        
                        <div className="text-center p-4 bg-muted/50 rounded-lg">
                          <p className="text-sm text-muted-foreground">Parcela Mensal</p>
                          <p className="text-2xl font-bold text-green-600">
                            {formatPrice(financing.monthlyPayment)}
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                          <span className="text-sm">Total a Pagar</span>
                          <span className="font-semibold">{formatPrice(financing.totalAmount)}</span>
                        </div>
                        
                        <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                          <span className="text-sm">Total de Juros</span>
                          <span className="font-semibold text-red-500">{formatPrice(financing.totalInterest)}</span>
                        </div>
                        
                        <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                          <span className="text-sm">Taxa de Juros</span>
                          <span className="font-semibold">{financing.interestRate}% a.m.</span>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="font-semibold text-green-800 dark:text-green-200">
                            Condições Especiais
                          </span>
                        </div>
                        <p className="text-sm text-green-700 dark:text-green-300">
                          Aprovação em até 24h • Sem taxa de abertura • Primeira parcela em 30 dias
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-12">
                      <Calculator className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Preencha os dados ao lado para ver a simulação
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Request Form Section */}
        <section id="request-form" className="py-16 bg-gradient-to-b from-background to-secondary/20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Solicitar Financiamento</h2>
              <p className="text-xl text-muted-foreground">
                Preencha o formulário e receba uma proposta personalizada
              </p>
            </div>

            <Card className="border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-t-lg">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <FileText className="h-6 w-6 text-primary" />
                  Dados para Financiamento
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-8">
                <Tabs defaultValue="personal" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="personal">Dados Pessoais</TabsTrigger>
                    <TabsTrigger value="financial">Dados Financeiros</TabsTrigger>
                    <TabsTrigger value="vehicle">Dados da Moto</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="personal" className="space-y-6 mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome Completo *</Label>
                        <Input
                          id="name"
                          placeholder="Seu nome completo"
                          value={requestData.name}
                          onChange={(e) => handleRequestChange('name', e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="seu@email.com"
                          value={requestData.email}
                          onChange={(e) => handleRequestChange('email', e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                        <Input
                          id="phone"
                          placeholder="(11) 99999-9999"
                          value={requestData.phone}
                          onChange={(e) => handleRequestChange('phone', e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="cpf">CPF *</Label>
                        <Input
                          id="cpf"
                          placeholder="000.000.000-00"
                          value={requestData.cpf}
                          onChange={(e) => handleRequestChange('cpf', e.target.value)}
                        />
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="financial" className="space-y-6 mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="requestIncome">Renda Mensal *</Label>
                        <Input
                          id="requestIncome"
                          type="number"
                          placeholder="5000"
                          value={requestData.income}
                          onChange={(e) => handleRequestChange('income', e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="occupation">Profissão *</Label>
                        <Input
                          id="occupation"
                          placeholder="Sua profissão"
                          value={requestData.occupation}
                          onChange={(e) => handleRequestChange('occupation', e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="company">Empresa</Label>
                        <Input
                          id="company"
                          placeholder="Nome da empresa onde trabalha"
                          value={requestData.company}
                          onChange={(e) => handleRequestChange('company', e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="hasGuarantor">Tem Fiador?</Label>
                        <Select onValueChange={(value) => handleRequestChange('hasGuarantor', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="true">Sim</SelectItem>
                            <SelectItem value="false">Não</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    {requestData.hasGuarantor === "true" && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-muted/30 rounded-lg">
                        <div className="space-y-2">
                          <Label htmlFor="guarantorName">Nome do Fiador</Label>
                          <Input
                            id="guarantorName"
                            placeholder="Nome do fiador"
                            value={requestData.guarantorName}
                            onChange={(e) => handleRequestChange('guarantorName', e.target.value)}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="guarantorPhone">Telefone do Fiador</Label>
                          <Input
                            id="guarantorPhone"
                            placeholder="(11) 99999-9999"
                            value={requestData.guarantorPhone}
                            onChange={(e) => handleRequestChange('guarantorPhone', e.target.value)}
                          />
                        </div>
                      </div>
                    )}
                  </TabsContent>
                  
                  <TabsContent value="vehicle" className="space-y-6 mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="selectedMotorcycle">Moto de Interesse</Label>
                        <Select onValueChange={(value) => handleRequestChange('selectedMotorcycle', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione a moto" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="catalog">Ver catálogo completo</SelectItem>
                            <SelectItem value="custom">Moto personalizada</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="requestFinancingTerm">Prazo Desejado</Label>
                        <Select onValueChange={(value) => handleRequestChange('financingTerm', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o prazo" />
                          </SelectTrigger>
                          <SelectContent>
                            {financingTerms.map((term) => (
                              <SelectItem key={term.value} value={term.value}>
                                {term.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="requestDownPayment">Valor da Entrada (R$)</Label>
                        <Input
                          id="requestDownPayment"
                          type="number"
                          placeholder="10000"
                          value={requestData.downPayment}
                          onChange={(e) => handleRequestChange('downPayment', e.target.value)}
                        />
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <div className="mt-8 pt-6 border-t">
                  <Button 
                    onClick={handleRequestSubmit}
                    className="w-full bg-gradient-primary"
                    size="lg"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Solicitar Financiamento
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-accent text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-6 border border-white/30">
                <Users className="h-5 w-5" />
                Suporte Especializado
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 drop-shadow-lg">
                Precisa de Ajuda?
              </h2>
              <p className="text-xl lg:text-2xl mb-8 text-white/95 max-w-3xl mx-auto leading-relaxed">
                Nossa equipe especializada está pronta para tirar suas dúvidas sobre financiamento
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
              {/* Phone Card */}
              <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl hover:bg-white/20 hover:border-white/40 hover:shadow-3xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-white/30 group-hover:bg-white/30 group-hover:border-white/50 transition-all duration-300">
                    <Phone className="h-10 w-10 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white/95 transition-colors duration-300">Ligue Agora</h3>
                  <p className="text-white/90 mb-6 text-lg group-hover:text-white transition-colors duration-300">
                    Fale diretamente com nossos especialistas em financiamento
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full bg-white text-primary hover:bg-gray-100 font-semibold text-lg py-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:bg-gray-50"
                  >
                    <Phone className="h-6 w-6 mr-3" />
                    (11) 9999-9999
                  </Button>
                  <p className="text-white/80 text-sm mt-3 group-hover:text-white/90 transition-colors duration-300">
                    Segunda a Sexta: 8h às 18h
                  </p>
                </CardContent>
              </Card>

              {/* WhatsApp Card */}
              <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl hover:bg-white/20 hover:border-white/40 hover:shadow-3xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-white/30 group-hover:bg-white/30 group-hover:border-white/50 transition-all duration-300">
                    <MessageCircle className="h-10 w-10 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white/95 transition-colors duration-300">WhatsApp</h3>
                  <p className="text-white/90 mb-6 text-lg group-hover:text-white transition-colors duration-300">
                    Envie uma mensagem e receba resposta imediata
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full bg-white text-primary hover:bg-gray-100 font-semibold text-lg py-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:bg-gray-50"
                  >
                    <MessageCircle className="h-6 w-6 mr-3" />
                    Enviar Mensagem
                  </Button>
                  <p className="text-white/80 text-sm mt-3 group-hover:text-white/90 transition-colors duration-300">
                    Resposta em até 5 minutos
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="mt-12 text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <Clock className="h-6 w-6 text-white" />
                  <div className="text-left">
                    <p className="font-semibold text-white">Atendimento</p>
                    <p className="text-white/80 text-sm">24h por dia</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <Shield className="h-6 w-6 text-white" />
                  <div className="text-left">
                    <p className="font-semibold text-white">Segurança</p>
                    <p className="text-white/80 text-sm">100% confiável</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <Zap className="h-6 w-6 text-white" />
                  <div className="text-left">
                    <p className="font-semibold text-white">Rapidez</p>
                    <p className="text-white/80 text-sm">Resposta imediata</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Financing;
