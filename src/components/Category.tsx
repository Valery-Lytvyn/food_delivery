import HeadLine from "./HeadLine";
import { categories } from "../constants/foodData";

function Category() {
  return (
    <div className="max-w-[1640px]  m-auto px-4 py-12">
      <HeadLine text="Top Rated Menu Items" />
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map(({ id, name, image }) => (
          <div
            key={id}
            className="bg-gray-100 rounded-lg p-4 flex justify-between items-center hover:scale-105 hover:duration-500"
          >
            <h2 className="font-bold sm:text-xl">{name}</h2>
            <img src={image} alt={name} className="w-20" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
