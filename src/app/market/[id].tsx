import { MarketView } from "@/views/market/market-view";
import { useMarketViewModel } from "@/views/market/market-view-model";

export default function Market() {
  const marketViewModel = useMarketViewModel();
  return <MarketView {...marketViewModel} />;
}
