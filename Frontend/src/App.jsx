import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Navbar from "./components/ui/shared/Navbar";

import Login from "./components/ui/auth/Login";
import Signup from "./components/ui/auth/Signup";
import Home from "./components/ui/Home";
import Jobs from "./components/Jobs";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import JobDescription from "./components/JobDescription";
import Companies from "./components/admin/Companies";
import CompanyCreate from "./components/admin/CompanyCreate";
import CompanySetup from "./components/admin/CompanySetup";
import AdminJobs from "./components/admin/AdminJobs";
import PostJobs from "./components/admin/PostJobs";
import Applicants from "./components/admin/Applicants";
import ProtectRoute from "./components/admin/ProtectRoute";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/description/:id",
    element: <JobDescription />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  // Admin Routes Starts //
  {
    path: "/admin/companies",
    element: (
      <ProtectRoute>
        <Companies />
      </ProtectRoute>
    ),
  },
  {
    path: "/admin/companies/create",
    element: (
      <ProtectRoute>
        <CompanyCreate />
      </ProtectRoute>
    ),
  },
  {
    path: "/admin/companies/:id",
    element: (
      <ProtectRoute>
        <CompanySetup />
      </ProtectRoute>
    ),
  },
  {
    path: "/admin/jobs",
    element: (
      <ProtectRoute>
        <AdminJobs />
      </ProtectRoute>
    ),
  },
  {
    path: "/admin/jobs/create",
    element: (
      <ProtectRoute>
        <PostJobs />
      </ProtectRoute>
    ),
  },
  {
    path: "admin/jobs/:id/applicants",
    element: (
      <ProtectRoute>
        <Applicants />
      </ProtectRoute>
    ),
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
