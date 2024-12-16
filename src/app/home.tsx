import { HomeView } from "@/views/home/home-view";
import { useHomeViewModel } from "@/views/home/home-view-model";

export default function Home() {
  const homeViewModel = useHomeViewModel();
  return <HomeView {...homeViewModel} />;
}
