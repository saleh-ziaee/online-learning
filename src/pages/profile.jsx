import MyCourses from "@/component/Profile-MyCourses/MyCourses.jsx";

function Profile() {
  return (
    <>
      <MyCourses></MyCourses>
    </>
  );
}

Profile.isProtected = true;

export default Profile;
