import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/UI/card";
import Dropdown, { DropDownItem } from "@/components/UI/Dropdown";
import {
  BarChart3,
  Brain,
  Building2,
  HardHat,
  Heart,
  LineChart,
  Package,
  Puzzle,
  Quote,
  Shield,
  ShoppingBag,
  Truck,
  Workflow,
} from "lucide-react";
function LandingPage() {
  const features = [
    {
      icon: <Package className="w-12 h-12 text-blue-600" />,
      title: "All-in-One Platform",
      description:
        "Finance, HR, inventory, sales, procurement, production, and CRM—unified under one roof.",
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-blue-600" />,
      title: "Real-Time Analytics",
      description:
        "Turn data into decisions with live dashboards, predictive insights, and customizable reports.",
    },
    {
      icon: <Workflow className="w-12 h-12 text-blue-600" />,
      title: "Automate Workflows",
      description:
        "Eliminate manual tasks with AI-driven automation for approvals, invoicing, and supply chain management.",
    },
    {
      icon: <LineChart className="w-12 h-12 text-blue-600" />,
      title: "Scalable & Flexible",
      description:
        "Grow effortlessly. Whether you're a startup or enterprise, LEDGRBOOK adapts to your needs.",
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Cloud-Powered Security",
      description:
        "Access data securely from anywhere, with enterprise-grade encryption and compliance.",
    },
    {
      icon: <Puzzle className="w-12 h-12 text-blue-600" />,
      title: "Seamless Integrations",
      description: "Connect to your favorite tools without coding.",
    },
  ];
  const industries = [
    {
      title: "Manufacturing",
      icon: <Building2 className="w-12 h-12 text-blue-600" />,
      description:
        "Smart factory solutions and automation systems for Industry 4.0",
    },
    {
      title: "Retail",
      icon: <ShoppingBag className="w-12 h-12 text-blue-600" />,
      description: "Omnichannel solutions and inventory management systems",
    },
    {
      title: "Logistics",
      icon: <Truck className="w-12 h-12 text-blue-600" />,
      description: "Supply chain optimization and fleet management tools",
    },
    {
      title: "Healthcare",
      icon: <Heart className="w-12 h-12 text-blue-600" />,
      description: "Patient care systems and medical data management",
    },
    {
      title: "Construction",
      icon: <HardHat className="w-12 h-12 text-blue-600" />,
      description: "Project management and site safety monitoring",
    },
    {
      title: "Professional Services",
      icon: <Brain className="w-12 h-12 text-blue-600" />,
      description: "Business intelligence and workflow automation",
    },
  ];
  return (
    <div>
      {/* Hero Section */}
      <section className="Hero relative bg-primary text-white pt-20">
        <div className="container mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Streamline Your Business with LEDGRBOOK ERP
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Streamline operations, unify data, and empower decisions.
                LEDGRBOOK connects every facet of your business into one
                intuitive platform.
              </p>
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/90 transition-colors">
                Get a Free Demo
              </button>
            </div>
            <div className="hidden md:block">
              <img
                src="/heroImage.avif"
                alt="Business Analytics Dashboard"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="Features py-20 bg-gradient-to-b from-blue-100/50 via-blue-50/30 to-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <h2 className="text-3xl font-bold text-center mb-16">
            What Makes LEDGRBOOK Unique?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm">
                <CardHeader>
                  <div className="icon my-2">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="Jndustries py-20 bg-gradient-to-b from-white/50 via-blue-50/30 to-blue-100/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/industryImage.avif')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-6 relative">
          <h2 className="text-3xl font-bold text-center mb-16">
            Industries We Serve
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/50 border-r-white/20 border-b-white/20"
              >
                <CardHeader>
                  <div className="icon my-2">{industry.icon}</div>
                  <CardTitle>{industry.title}</CardTitle>
                  <CardDescription>{industry.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonial Section */}
      </section>
      <section className="py-20 bg-gradient-to-b from-blue-100/50 via-blue-50/30 to-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <Card
            className="bg-white/10 backdrop-blur-sm p-8 text-center max-w-4xl mx-auto border-2 border-white/50 border-r-white/20 border-b-white/20"
            style={{ boxShadow: "0 25px 45px rbga(0, 0, 0, 0.2)" }}
          >
            <div className="text-primary mb-6">
              <Quote className="inline fill-primary -scale-x-100" size={46} />
            </div>
            <CardTitle className="mb-6 text-2xl">
              LEDGRBOOK revolutionized how we manage inventory and finances. Our
              productivity jumped 40% in 3 months!
            </CardTitle>
            <CardContent className="text-gray-500">
              <p className="font-semibold text-lg">Sarah Chen</p>
              <p>CEO of TechGrowth Solutions</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Don't Miss the ERP Revolution
          </h2>
          <p className="text-xl mb-8">
            Join 1,000+ companies thriving with LEDGRBOOK
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/90 transition-colors">
            Request Demo
          </button>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
