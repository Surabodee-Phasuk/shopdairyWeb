export interface Product {
  id: string;
  name: string;
  subtitle: string;
  date: string; // ISO format "YYYY-MM-DD" style
  description: string;
  image: string;
  affiliateLink: string;
  category: string;
  fullReview: string;
}

export type PageView = "home" | "catalog" | "detail";

export interface NavigationState {
  currentPage: PageView;
  activeProductId?: string;
}
