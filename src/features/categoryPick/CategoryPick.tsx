import { NavLink } from "react-router";
import CategoryItem from "../../UI/CategoryItem";
import Header from "../../UI/Header";
import PageContainer from "../../UI/PageContainer";
import { motion } from "motion/react";

// eslint-disable-next-line react-refresh/only-export-components
export const categories = [
  "movies",
  "tv_shows",
  "countries",
  "capital_cities",
  "animals",
  "sports",
] as const;

export type Categories = (typeof categories)[number];

function CategoryPick() {
  return (
    <PageContainer>
      <Header> Pick a Category</Header>
      <div className="mt-10 grid gap-4 md:mt-28.5 md:grid-cols-2 md:gap-8 lg:mt-40 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12.5 [@media(min-height:0px)_and_(max-height:842px)]:lg:mt-25">
        {categories.map((category, i) => (
          <NavLink key={i} to={`/difficulty?category=${category}`}>
            <motion.div
              style={{ willChange: "transform" }}
              initial={{ y: -500 }}
              animate={{ y: 0 }}
              transition={{ duration: i * 0.15, ease: "easeOut" }}
            >
              <CategoryItem>{category.replace("_", " ")}</CategoryItem>
            </motion.div>
          </NavLink>
        ))}
      </div>
    </PageContainer>
  );
}

export default CategoryPick;
