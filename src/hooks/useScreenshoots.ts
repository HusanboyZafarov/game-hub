import { useQuery } from "@tanstack/react-query";
import { Screenshoot } from "../entities/Screenshoot";
import APIClient from "../services/api-client";

const useScreenshoots = (gameId: number) => {
  const apiClient = new APIClient<Screenshoot>(`/games/${gameId}/screenshoots`);
 
  return useQuery({
    queryKey: ["screenshoots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshoots;
