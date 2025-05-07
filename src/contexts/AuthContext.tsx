
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
  register: async () => {},
  logout: () => {},
  isLoading: true,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // This is a mock login - in a real app, you'd call your API
      if (email && password) {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        // Create mock user
        const newUser = {
          id: "user-" + Math.random().toString(36).substr(2, 9),
          name: email.split("@")[0],
          email,
        };
        
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
        toast.success("Login successful!");
      } else {
        throw new Error("Please provide email and password");
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Login failed");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      // This is a mock registration - in a real app, you'd call your API
      if (name && email && password) {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        // Create mock user
        const newUser = {
          id: "user-" + Math.random().toString(36).substr(2, 9),
          name,
          email,
        };
        
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
        toast.success("Registration successful!");
      } else {
        throw new Error("Please fill all required fields");
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Registration failed");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    toast.success("Logged out successfully");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
