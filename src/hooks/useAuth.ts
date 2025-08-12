import Firebase from "@/lib/firebase";
import { useAuthStore } from "@/store/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useAuth = () => {
  const auth = useAuthStore();

  const logIn = async (
    emailAddress: string,
    password: string
  ): Promise<void> => {
    return signInWithEmailAndPassword(
      Firebase.instance.auth,
      emailAddress,
      password
    ).then(() => {
      auth.setLoggedIn(true);
    });
  };

  const logOut = () => {
    auth.setLoggedIn(false);
  };

  return { logIn, logOut };
};
