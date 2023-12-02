import { ReactNode } from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

const ChakraUi = ({ children }: { children: ReactNode }) => {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode="dark" />
      {children}
    </ChakraProvider>
  );
};

export default ChakraUi;
