import MyOrdersPage from "./MyOrdersPage";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
        {/* Left Section - Profile Info */}
        <div className="w-full md:w-1/3 lg:w-1/4 bg-white shadow-md rounded-2xl p-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">ShadowX playz</h1>
          <p className="text-lg text-gray-600 mb-4">ShadowX@gmail.com</p>
          <button className="w-full bg-black text-white py-2 rounded-xl font-semibold hover:bg-gray-800 transition duration-200">
            Sign out
          </button>
        </div>

        {/* Right Section - Orders */}
        <div className="w-full md:w-2/3 lg:w-3/4">
          <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6">
            <MyOrdersPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
