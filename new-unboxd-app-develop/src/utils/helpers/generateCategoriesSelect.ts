import { Category } from '../../typings/appState';

const generateCategoriesSelect = (categories: any[]) => {
  let categoriesArray: { value: string; text: string }[] = [];
  categories?.map((cat: any) =>
    categoriesArray.push({ value: cat._id, text: cat.name })
  );
  return categoriesArray;
};

export const getCategoryToSelect = (category: Category) => {
  return { value: category._id, text: category.name };
};

export default generateCategoriesSelect;
