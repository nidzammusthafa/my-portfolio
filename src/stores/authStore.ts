import { create } from "zustand";

interface AuthState {
  isLoggedIn: boolean;
  isAuthChecked: boolean;
  token: string | null;
  login: () => void;
  logout: () => void;
  setToken: (token: string | null) => void;
  checkLoginStatus: () => void;
}

const decodeJwtAndCheckExp = (token: string | null): boolean => {
  if (!token) {
    return false;
  }
  try {
    const base64Url = token.split(".")[1];
    if (!base64Url) {
      return false;
    }
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const payload = JSON.parse(atob(base64));

    if (payload.exp) {
      const expirationTime = payload.exp * 1000;
      const currentTime = Date.now();
      return currentTime < expirationTime;
    }
    return false;
  } catch (error) {
    console.error("Error decoding JWT or checking expiration:", error);
    return false;
  }
};

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  isAuthChecked: false,
  token: null,
  login: () => {
    set({ isLoggedIn: true });
    if (typeof window !== "undefined") {
      localStorage.setItem("isLoggedIn", "true");
    }
  },
  logout: () => {
    set({ isLoggedIn: false, token: null });
    if (typeof window !== "undefined") {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("authToken");
    }
  },
  setToken: (token) => {
    set({ token });
  },
  checkLoginStatus: () => {
    if (typeof window !== "undefined") {
      const storedStatus = localStorage.getItem("isLoggedIn");
      const storedToken = localStorage.getItem("authToken");

      const isTokenValid = decodeJwtAndCheckExp(storedToken);

      if (storedStatus === "true" && isTokenValid) {
        set({
          isLoggedIn: true,
          token: storedToken,
          isAuthChecked: true,
        });
      } else {
        set({
          isLoggedIn: false,
          token: null,
          isAuthChecked: true,
        });
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("authToken");
      }
    } else {
      set({ isLoggedIn: false, isAuthChecked: true });
    }
  },
}));

