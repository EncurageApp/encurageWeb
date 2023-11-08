import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//layouts
import { RootLayout } from "./layouts/RootLayout";
import { FaqLayout } from "./layouts/FaqLayout";

//pages
import { Home } from "./pages/Home";
import { ChildrenHealth } from "./pages/ChildrenHealth";
import { NotFound } from "./pages/NotFound";
import { Founder } from "./pages/Founder";
import { Reviews } from "./pages/Reviews";
import { Faq } from "./pages/faq/Faq";
import { Contact } from "./pages/faq/Contact";
import { Terms } from "./pages/faq/Terms";
import { Privacy } from "./pages/faq/Privacy";
import { AppFeatures } from "./pages/AppFeatures";

//Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path="ChildrenHealth" element={<ChildrenHealth />} />

      <Route path="AppFeatures" element={<AppFeatures />} />
      <Route path="Founder" element={<Founder />} />

      <Route path="Reviews" element={<Reviews />} />

      <Route path="FaqLayout" element={<FaqLayout />}>
        <Route path="Contact" element={<Contact />} />
        <Route path="Faq" element={<Faq />} />
        <Route path="Terms" element={<Terms />} />
        <Route path="Privacy" element={<Privacy />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
