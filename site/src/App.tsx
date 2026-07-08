import { Switch, Route } from "wouter";
import ADHDHome from "./pages/adhd/Home";
import ASDHome from "./pages/asd/Home";
import CouplesHome from "./pages/couples/Home";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/not-found";

function PageByHostname() {
  const hostname = window.location.hostname;
  if (hostname.startsWith("asd.")) return <ASDHome />;
  if (hostname.startsWith("adhd.")) return <ADHDHome />;
  if (hostname.startsWith("couples.")) return <CouplesHome />;
  return <NotFound />;
}

export default function App() {
  return (
    <Switch>
      <Route path="/thank-you" component={ThankYou} />
      <Route component={PageByHostname} />
    </Switch>
  );
}
