import { Route, Routes, useLocation } from "react-router";
import { NotFoundPage } from "@/pages/not-found/NotFoundPage";
import { HomePage } from "@/pages/home/HomePage";
import { ItineraryPage } from "@/pages/itinerary/ItineraryPage";
import { ItineraryDay1Page } from "@/pages/itinerary/ItineraryDay1Page";
import { BudgetPage } from "@/pages/budget/BudgetPage";
import { GuidePage } from "@/pages/guide/GuidePage";
import { AboutPage } from "@/pages/about/AboutPage";
import { NavigationBar } from "@/components/navigation/NavigationBar";
import { NAVIGATION_KEY } from "@/components/navigation/constants";
import { isHomePage } from "@/components/navigation/functions";

export default function App() {
  const location = useLocation();
  
  return (
    <>
      <NavigationBar />
      <main className={isHomePage(location.pathname) ? "bg-background" : "bg-background pt-15"}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path={NAVIGATION_KEY.ITINERARY} element={<ItineraryPage />} />
          <Route path={NAVIGATION_KEY.ITINERARY_DAY_1} element={<ItineraryDay1Page />} />
          <Route path={NAVIGATION_KEY.BUDGET} element={<BudgetPage />} />
          <Route path={NAVIGATION_KEY.GUIDE} element={<GuidePage />} />
          <Route path={NAVIGATION_KEY.ABOUT} element={<AboutPage />} />
          <Route path={NAVIGATION_KEY.NOT_FOUND} element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  )
}
