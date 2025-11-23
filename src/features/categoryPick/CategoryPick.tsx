import { NavLink } from "react-router";
import CategoryItem from "../../UI/CategoryItem";
import Header from "../../UI/Header";
import PageContainer from "../../UI/PageContainer";

function CategoryPick() {
  const categories = [
    "movies",
    "tv_shows",
    "countries",
    "capital_cities",
    "animals",
    "sports",
  ] as const;

  return (
    <PageContainer>
      <Header> Pick a Category</Header>
      <div className="mt-25 grid gap-4 md:mt-28.5 md:grid-cols-2 md:gap-8 lg:mt-40 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12.5">
        {categories.map((category, i) => (
          <NavLink key={i} to={`/game?category=${category}`}>
            <CategoryItem>{category.replace("_", " ")}</CategoryItem>
          </NavLink>
        ))}
      </div>
    </PageContainer>
  );
}

export default CategoryPick;
