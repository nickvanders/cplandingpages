import { Switch, Route } from "wouter";
import ADHDHome from "./pages/adhd/Home";
import ASDHome from "./pages/asd/Home";
import CouplesHome from "./pages/couples/Home";
import TherapyHome from "./pages/therapy/Home";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/not-found";

function PageByHostname() {
  const hostname = window.location.hostname;
  if (hostname.startsWith("asd.")) return <ASDHome />;
  if (hostname.startsWith("adhd.")) return <ADHDHome />;
  if (hostname.startsWith("couples.")) return <CouplesHome />;
  if (hostname.startsWith("therapy.")) return <TherapyHome />;
  // Local dev fallback — use /asd, /couples, /adhd, /therapy or ?page= param
  if (hostname === "localhost" || hostname === "127.0.0.1") {
    const path = window.location.pathname;
    if (path.startsWith("/asd")) return <ASDHome />;
    if (path.startsWith("/couples")) return <CouplesHome />;
    if (path.startsWith("/therapy")) return <TherapyHome />;
    if (path.startsWith("/adhd")) return <ADHDHome />;
    const page = new URLSearchParams(window.location.search).get("page");
    if (page === "asd") return <ASDHome />;
    if (page === "couples") return <CouplesHome />;
    if (page === "therapy") return <TherapyHome />;
    return <ADHDHome />;
  }
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
