export interface RecipeSummary {
  id: string;
  title: string;
}

export interface Recipe extends RecipeSummary {
  ingredients: string[];
  image: string;
  instruction: string;
}
