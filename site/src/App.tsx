import { Switch, Route } from "wouter";
import ADHDHome from "./pages/adhd/Home";
import ASDHome from "./pages/asd/Home";
import CouplesHome from "./pages/couples/Home";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/not-found";

export default function App() {
  return (
    <Switch>
      <Route path="/adhd" component={ADHDHome} />
      <Route path="/asd" component={ASDHome} />
      <Route path="/couples" component={CouplesHome} />
      <Route path="/thank-you" component={ThankYou} />
      <Route component={NotFound} />
    </Switch>
  );
}
