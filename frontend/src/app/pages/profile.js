import Navbar from "../components/Navbar";
import ProfileHeader from "../components/ProfileHeader";
import EmploymentHistory from "../components/EmploymentHistory";
import EducationHistory from "../components/EducationHistory";
import Skills from "../components/Skills";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <ProfileHeader />
      <EmploymentHistory />
      <EducationHistory />
      <Skills />
    </div>
  );
};

export default Profile;
