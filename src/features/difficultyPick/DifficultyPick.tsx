import { NavLink, useSearchParams } from "react-router";
import Header from "../../UI/Header";
import PageContainer from "../../UI/PageContainer";
import DifficultyItem from "../../UI/CategoryItem";
import { motion } from "motion/react";

const difficulty = ["easy", "medium", "hard"];

function DifficultyPick() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  return (
    <PageContainer>
      <Header type="difficulty">Pick Difficulty</Header>
      <div className="mt-25 grid gap-4 md:mt-28.5 md:grid-cols-2 md:gap-8 lg:mt-40 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12.5">
        {difficulty.map((difficulty, i) => (
          <NavLink
            key={i}
            to={`/game?category=${category}&difficulty=${difficulty}`}
          >
            <motion.div
              initial={{ y: -500 }}
              animate={{ y: 0 }}
              transition={{ duration: i * 0.3 }}
            >
              <DifficultyItem>{difficulty}</DifficultyItem>
            </motion.div>
          </NavLink>
        ))}
      </div>
    </PageContainer>
  );
}

export default DifficultyPick;
