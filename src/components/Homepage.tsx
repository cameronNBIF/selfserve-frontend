import { ArrowRight, BarChart3, Database, Search, Shield, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mx-auto mb-8 flex justify-center">
            <img 
              src="/NBIF_Logo.svg" 
              alt="NBIF Logo" 
              className="h-24 w-auto drop-shadow-lg"
            />
          </div>
          
          <h1 className="mb-6 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 bg-clip-text text-5xl font-bold text-transparent md:text-6xl lg:text-7xl">
            SelfServe
          </h1>
          
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 md:text-xl">
            Your comprehensive platform for accessing investment data, analytics, and insights. 
            Empowering informed decisions through intelligent data visualization.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link to="/search">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <Search className="mr-2 h-5 w-5" />
                Explore Investments
                <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </Link>
            <Button variant="outline" size="lg" className="shadow-md hover:shadow-lg transition-all duration-300">
              <BarChart3 className="mr-2 h-4 w-4" />
              View Analytics
            </Button>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 left-0 -z-10 h-full w-full">
          <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-blue-200 opacity-20 blur-xl"></div>
          <div className="absolute bottom-20 right-10 h-40 w-40 rounded-full bg-indigo-200 opacity-20 blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100 opacity-30 blur-2xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Powerful Investment Intelligence
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Access comprehensive investment data with advanced search capabilities, 
              secure authentication, and intuitive data visualization.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                  <Search className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Advanced Search</CardTitle>
                <CardDescription>
                  Powerful search capabilities to find investments by company name, 
                  executive summary, and other key criteria.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 group-hover:bg-green-200 transition-colors">
                  <Database className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Comprehensive Data</CardTitle>
                <CardDescription>
                  Access detailed investment information including amounts awarded, 
                  company details, and geographical insights.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Secure Access</CardTitle>
                <CardDescription>
                  Enterprise-grade security with Microsoft authentication 
                  ensuring your data remains protected and confidential.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 group-hover:bg-orange-200 transition-colors">
                  <BarChart3 className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Data Visualization</CardTitle>
                <CardDescription>
                  Interactive tables with sorting, pagination, and export 
                  functionality for comprehensive data analysis.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 group-hover:bg-red-200 transition-colors">
                  <TrendingUp className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">Real-time Insights</CardTitle>
                <CardDescription>
                  Stay up-to-date with the latest investment trends and 
                  opportunities in the New Brunswick innovation ecosystem.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 group-hover:bg-teal-200 transition-colors">
                  <Users className="h-8 w-8 text-teal-600" />
                </div>
                <CardTitle className="text-xl">Collaborative Platform</CardTitle>
                <CardDescription>
                  Share insights and collaborate with team members to make 
                  informed investment decisions together.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white/80 backdrop-blur-sm py-16 px-4">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-blue-600 md:text-5xl">2600+</div>
              <div className="text-gray-600">Investment Records</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-green-600 md:text-5xl">$85M+</div>
              <div className="text-gray-600">Total Investments Tracked</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-purple-600 md:text-5xl">24/7</div>
              <div className="text-gray-600">Data Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Card className="mx-auto max-w-2xl border-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-2xl">
            <CardContent className="p-12">
              <h3 className="mb-4 text-3xl font-bold">Ready to Get Started?</h3>
              <p className="mb-8 text-lg text-blue-100">
                Join the NBIF SelfServe platform and unlock the power of investment intelligence.
              </p>
              <Button size="lg" variant="secondary" className="shadow-lg hover:shadow-xl transition-all duration-300">
                <Search className="mr-2 h-5 w-5" />
                Start Exploring Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4 text-white">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            Built by Cameron Horwood © 2025 | Powered by NBIF
          </p>
        </div>
      </footer>
    </div>
  );
}