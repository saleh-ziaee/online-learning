import MyCourses from "@/component/Profile-MyCourses/MyCourses.jsx";
import ProfileLayout from "@/component/Layout/profile";

function Profile() {
  return (
    <>
      <MyCourses></MyCourses>
    </>
  );
}

Profile.isProtected = true;

Profile.Layout = ProfileLayout

export default Profile;
