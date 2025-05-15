import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";

// Hàm đăng nhập với Google
export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const data = {
      fullname: user.displayName || "",
      username: user.uid, // hoặc user.email.split("@")[0]
      email: user.email,
      phone: user.phoneNumber || "",
      gender: "Other",
      address: [],
      role: null,
      password: "google", // hoặc generate ngẫu nhiên 1 chuỗi
    };

    // Gửi thông tin user về backend
    await fetch("http://localhost:9999/users/google-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return user;
  } catch (error) {
    console.error("Lỗi đăng nhập Google:", error.message);
    throw error;
  }
};
