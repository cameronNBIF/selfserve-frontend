import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { loginRequest } from "../AuthConfig";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, LogIn, Shield } from "lucide-react";
import { useState } from "react";

interface AuthWrapperProps {
  children: React.ReactNode;
}

export const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      await instance.loginRedirect(loginRequest);
    } catch (error) {
      console.error("Login failed:", error);
      setError("Login failed. Please try again.");
      setIsLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Logo and Branding */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <img 
                src="/NBIF_Logo.svg" 
                alt="NBIF Logo" 
                className="h-16 w-auto"
              />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">SelfServe</h1>
            <p className="text-gray-600">Secure access to your investments</p>
          </div>

          {/* Authentication Card */}
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl font-semibold text-gray-900">
                Authentication Required
              </CardTitle>
              <CardDescription className="text-gray-600 mt-2">
                Please sign in with your Microsoft account to access SelfServe
              </CardDescription>
            </CardHeader>
            
            <CardContent className="pt-0">
              {error && (
                <Alert className="mb-4 border-red-200 bg-red-50">
                  <AlertDescription className="text-red-800">
                    {error}
                  </AlertDescription>
                </Alert>
              )}
              
              <Button 
                onClick={handleLogin}
                disabled={isLoading}
                className="w-full bg-[#0078d4] hover:bg-[#106ebe] text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                size="lg"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    <LogIn className="w-4 h-4 mr-2" />
                    Sign in with Microsoft
                  </>
                )}
              </Button>
              
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">
                  By signing in, you agree to our terms of service and privacy policy
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Powered by Microsoft Azure Active Directory
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};