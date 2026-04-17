import { RouterProvider } from "react-router";
import { router } from "./routes.tsx";

// App entry point - Updated: 2026-03-08 15:30
// Refactored ContributionFormWizard to use design system classes
export default function App() {
  return <RouterProvider router={router} />;
}