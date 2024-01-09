import SkeletonCard from "../components/SkeletonCard";

interface Recipe {
  title: string;
  image: string;
  time: number;
  description: string;
  vegan: boolean;
  id: string;
}

async function getRecipes(): Promise<Recipe[]> {
  const result = await fetch("http://localhost:4000/recipes");

  return result.json();
}
const loading = async () => {
  const recipes = await getRecipes();

  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {recipes.map((i) => (
          <SkeletonCard key={i.id} />
        ))}
      </div>
    </main>
  );
};

export default loading;
