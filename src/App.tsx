import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const boxVariants = {
  hover: { scale: 1.5, rotate: 90 },
  click: { scale: 1, borderRadius: "100px" },
};

function App() {
  return (
    <Wrapper>
      <Box variants={boxVariants} whileHover={"hover"} whileTap={"click"}></Box>
    </Wrapper>
  );
}

export default App;
