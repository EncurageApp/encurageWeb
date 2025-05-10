// App.js
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//layouts
import { RootLayout } from "./layouts/RootLayout";
import { HelpCenter } from "./layouts/HelpCenterLayout";

//pages
import { Home } from "./pages/Home";
import { ChildMedicationManagement } from "./pages/ChildMedicationManagement";
import { NotFound } from "./pages/NotFound";
import { OurStory } from "./pages/OurStory";
import { Reviews } from "./pages/Reviews";
import { Faq } from "./pages/faq/Faq";
import { Contact } from "./pages/faq/Contact";
import { Terms } from "./pages/faq/Terms";
import { Privacy } from "./pages/faq/Privacy";
import { MedicationManagementTools } from "./pages/MedicationManagementTools";
import { DataPolicy } from "./pages/faq/DataPolicy";
import { HelmetProvider } from "react-helmet-async";
import ReactGA from "react-ga4";
ReactGA.initialize("G-WHLKC5QEE6");

//Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route
        path="ChildMedicationManagement"
        element={<ChildMedicationManagement />}
      />

      <Route
        path="MedicationManagementTools"
        element={<MedicationManagementTools />}
      />
      <Route path="OurStory" element={<OurStory />} />

      <Route path="Reviews" element={<Reviews />} />

      <Route path="helpcenter" element={<HelpCenter />}>
        <Route path="Contact" element={<Contact />} />
        <Route path="Faq" element={<Faq />} />
        <Route path="Terms" element={<Terms />} />
        <Route path="Privacy" element={<Privacy />} />
        <Route path="DataPolicy" element={<DataPolicy />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
