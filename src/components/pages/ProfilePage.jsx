import ProfilButton from '../ui/ProfileButton.jsx';

function ProfilePage() {
  return (
    <>
      <div>
        {/* edit, star, follow icon hinterlegt */}
        <ProfilButton edit={true}>Edit Profile</ProfilButton>
      </div>
    </>
  );
}

export default ProfilePage;
