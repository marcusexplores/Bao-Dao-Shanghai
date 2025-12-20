import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { Page } from "@/components/page/Page";
import { PageContainer } from "@/components/page/PageContainer";
import { PageHeadline } from "@/components/page/PageHeadline";
import { PageContainerItem } from "@/components/page/PageContainerItem";
import { Pagination } from "@/components/pagination/Pagination";
import { NAVIGATION_KEY } from "@/components/navigation/constants";
import { ItineraryDayPageContext } from "./ItineraryDayPageContext";
import { itineraryDays } from "./data/days";

const getDayNumber = (path: string): number | null => {
  const regex = /day(\d+)/i;
  const match = regex.exec(path);

  if (match?.[1]) {
    const parsed = parseInt(match[1], 10);
    return isNaN(parsed) ? null : parsed;
  }

  return null;
};

export const ItineraryDayPageLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentDay, setCurrentDay] = useState<number>(0);

  useEffect(() => {
    const pathParts = location.pathname.split("/");
    const dayFromUrl = getDayNumber(pathParts[pathParts.length - 1]);

    if (dayFromUrl != null) {
      setCurrentDay(dayFromUrl);
    }
  }, [location]);

  const handlePageChange = (day: number) => {
    // This updates the URL, which in turn updates currentDay via the useEffect above
    void navigate(`${NAVIGATION_KEY.ITINERARY}/day${day.toString()}`);
  };

  const pageTitles: string[] = itineraryDays.map((day) => day.title);

  return (
    <ItineraryDayPageContext.Provider value={{ currentDay, setCurrentDay }}>
      <Page>
        <PageContainer>
          <PageHeadline>{itineraryDays[currentDay].title}</PageHeadline>
          <PageContainerItem className="flex justify-center items-center">
            {itineraryDays[currentDay].date}
          </PageContainerItem>
          <Outlet />
          <PageContainerItem className="pt-5 md:pt-12">
            <Pagination
              totalDays={8}
              startDay={0}
              currentDay={currentDay}
              onPageChange={handlePageChange}
              dayTitles={pageTitles}
            />
          </PageContainerItem>
        </PageContainer>
      </Page>
    </ItineraryDayPageContext.Provider>
  );
};
