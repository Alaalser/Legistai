"use client"; // Ensure this is client-side code

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the register page after 2 seconds
    const timer = setTimeout(() => {
      router.push("/register");
    }, 0);

    // Clean up timer if the component is unmounted
    return () => clearTimeout(timer);
  }, [router]);

  return null
};

export default HomePage;
