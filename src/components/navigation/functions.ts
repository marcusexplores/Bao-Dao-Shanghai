import { NAVIGATION_KEY } from "./constants";

export const isHomePage = (path: string): boolean => {
  return path === NAVIGATION_KEY.HOME;
}

export const IsNotFoundPage = (path: string): boolean => {
  const allRoutes = Object.values(NAVIGATION_KEY);
  const listedRoutes = allRoutes.filter(route => route !== NAVIGATION_KEY.NOT_FOUND);
  return !listedRoutes.includes(path); 
}