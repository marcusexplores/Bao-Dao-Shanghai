import { Route, Routes } from "react-router";
import { NotFoundPage } from "@/pages/not-found/NotFoundPage";
import { HomePage } from "@/pages/home/HomePage";
import { ItineraryPage } from "@/pages/itinerary/ItineraryPage";
import { ItineraryDayPageLayout } from "@/pages/itinerary/ItineraryDayPageLayout";
import { ItineraryDay0Page } from "@/pages/itinerary/ItineraryDay0Page";
import { ItineraryDay1Page } from "@/pages/itinerary/ItineraryDay1Page";
import { ItineraryDay2Page } from "@/pages/itinerary/ItineraryDay2Page";
import { ItineraryDay3Page } from "@/pages/itinerary/ItineraryDay3Page";
import { ItineraryDay4Page } from "@/pages/itinerary/ItineraryDay4Page";
import { ItineraryDay5Page } from "@/pages/itinerary/ItineraryDay5Page";
import { ItineraryDay6Page } from "@/pages/itinerary/ItineraryDay6Page";
import { ItineraryDay7Page } from "@/pages/itinerary/ItineraryDay7Page";
import { ItineraryDay8Page } from "@/pages/itinerary/ItineraryDay8Page";
import { BudgetPage } from "@/pages/budget/BudgetPage";
import { PreparationPage } from "@/pages/preparation/PreparationPage";
import { PreparationChecklistPage } from "@/pages/preparation/PreparationChecklistPage";
import { AboutPage } from "@/pages/about/AboutPage";
import { NavigationBar } from "@/components/navigation/NavigationBar";
import { NAVIGATION_KEY } from "@/components/navigation/constants";

export default function App() {
  return (
    <>
      <NavigationBar />
      <main>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path={NAVIGATION_KEY.ITINERARY} element={<ItineraryPage />} />

          <Route element={<ItineraryDayPageLayout />}>
            <Route path={NAVIGATION_KEY.ITINERARY_DAY_0} element={<ItineraryDay0Page />} />
            <Route path={NAVIGATION_KEY.ITINERARY_DAY_1} element={<ItineraryDay1Page />} />
            <Route path={NAVIGATION_KEY.ITINERARY_DAY_2} element={<ItineraryDay2Page />} />
            <Route path={NAVIGATION_KEY.ITINERARY_DAY_3} element={<ItineraryDay3Page />} />
            <Route path={NAVIGATION_KEY.ITINERARY_DAY_4} element={<ItineraryDay4Page />} />
            <Route path={NAVIGATION_KEY.ITINERARY_DAY_5} element={<ItineraryDay5Page />} />
            <Route path={NAVIGATION_KEY.ITINERARY_DAY_6} element={<ItineraryDay6Page />} />
            <Route path={NAVIGATION_KEY.ITINERARY_DAY_7} element={<ItineraryDay7Page />} />
            <Route path={NAVIGATION_KEY.ITINERARY_DAY_8} element={<ItineraryDay8Page />} />
          </Route>

          <Route path={NAVIGATION_KEY.BUDGET} element={<BudgetPage />} />
          <Route path={NAVIGATION_KEY.PREPARATION} element={<PreparationPage />} />
          <Route path={NAVIGATION_KEY.PREPARATION_CHECKLIST} element={<PreparationChecklistPage />} />
          <Route path={NAVIGATION_KEY.ABOUT} element={<AboutPage />} />
          <Route path={NAVIGATION_KEY.NOT_FOUND} element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  )
}
