import { Route, Routes } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import UpdatePassword from "./components/auth/password/UpdatePassword";
import ForgotPassword from "./components/auth/password/forgotPassword";
import AtheProfile from "./components/layout/AtheProfileLayout";
import DoctorTraining from "./components/layout/DoctorTrainingComponent";
import AtheBookings from "./pages/AtheBookings";
import Account from "./pages/AtheProfileNavigations/Account";
import EditProfile from "./pages/AtheProfileNavigations/EditProfile";
import Password from "./pages/AtheProfileNavigations/Password";
import AtheTransactions from "./pages/AtheTransactions";
import Athedrill from "./pages/Athedrill";
import AtheleHome from "./pages/AtheleHome";
import DoctorAppointment from "./pages/DoctorAppointment";
import DoctorConsultationCall from "./pages/DoctorConsultationCall";
import DoctorSelectUserType from "./pages/DoctorHome";
import DoctorInOffice from "./pages/DoctorInOffice";
import DoctorPlansPackages from "./pages/DoctorPlansPackages";
import DoctorPrescriptionForm from "./pages/DoctorPrescriptionForm";
import DoctorProfile from "./pages/DoctorProfile";
import DoctorServiceSelection from "./pages/DoctorServiceSelection";
import Step1 from "./pages/Forms/Client Information/Step1";
import PageNotFound from "./pages/PageNotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RecentBookings from "./pages/RecentBookings";
import RecentEvaluation2 from "./pages/RecentEvaluation2";
import RecentPrescriptions from "./pages/RecentPrescriptions";
import TermsOfUse from "./pages/TermsOfUse";
import "./styles/doctor.css";
import "./styles/login.css";
import "./styles/recent_bookings.css";
import ErrorBoundary from "./utils/ErrorBoundary.js";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <>
      <ErrorBoundary>
        {/* <Router> */}
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/a-home" element={<AtheleHome />} />
          <Route path="/a-transactions" element={<AtheTransactions />} />
          <Route path="/athelete-home" element={<AtheleHome />} />
          <Route path="/a-booking" element={<AtheBookings />} />
          <Route path="/a-drill" element={<Athedrill />} />
          <Route path="/a-profile" element={<EditProfile />} />
          <Route path="/a-account" element={<Account />} />
          <Route path="/a-security" element={<Password />} />
          <Route path="/a-profile" element={<AtheProfile />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/update-password" element={<UpdatePassword />} />
          <Route path="*" element={<PageNotFound />} />

          <Route path="/doctor" element={<ProtectedRoute />}>
            <Route path="dashboard" element={<DoctorSelectUserType />} />
            <Route path="dashboard/client_form" element={<Step1 />} />
            {/* <Route path="/step2" element={<Step2 />} />
            <Route path="/step3" element={<Step3 />} /> */}
            <Route path="dashboard/profile" element={<DoctorProfile />} />
            <Route
              path="dashboard/doctor-service-selection"
              element={<DoctorServiceSelection />}
            />
            <Route
              path="dashboard/doctor-inoffice"
              element={<DoctorInOffice />}
            />
            <Route
              path="dashboard/doctor-plans"
              element={<DoctorPlansPackages />}
            />
            <Route
              path="dashboard/consultation-call"
              element={<DoctorConsultationCall />}
            />
            <Route
              path="dashboard/appointment"
              element={<DoctorAppointment />}
            />
            <Route path="dashboard/training" element={<DoctorTraining />} />
            {/* <Route path="/recent-evaluation" element={<RecentEvaluation />} /> */}
            <Route
              path="dashboard/recent-evaluation2"
              element={<RecentEvaluation2 />}
            />
            <Route
              path="dashboard/recent-prescription"
              element={<RecentPrescriptions />}
            />{" "}
            <Route
              path="dashboard/start-prescription"
              element={<DoctorPrescriptionForm />}
            />
            <Route
              path="dashboard/recent-bookings"
              element={<RecentBookings />}
            />
          </Route>
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
        </Routes>
        {/* </Router> */}
      </ErrorBoundary>
    </>
  );
}

export default App;
