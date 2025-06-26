import { useMsal } from "@azure/msal-react";
import { Button } from "@/components/ui/button";

export const LogoutButton: React.FC = () => {
  const { instance } = useMsal();

  const handleLogout = () => {
    instance.logoutRedirect().catch((error) => {
      console.error("Logout failed:", error);
    });
  };

  return (
    <Button onClick={handleLogout} variant="outline" size="sm">
      Sign Out
    </Button>
  );
};
