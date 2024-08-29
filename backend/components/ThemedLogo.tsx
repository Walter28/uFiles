"use client"
import Image from "next/image";
import { useTheme } from "next-themes"; // Import the useTheme hook

// Make sure the component name starts with an uppercase letter
const ThemedLogo = ({width, height}) => {
  // Call the useTheme hook inside the component
  const { theme } = useTheme(); 

  console.log(theme)

  return (
    <Image
      src={theme === "dark" ? "/uFiles-dark-logo.png" : "/uFiles-light-logo.png"} // Conditionally set the image source
      width={width}
      height={height}
      alt="dak logo"
    />
  );
};

export default ThemedLogo;
