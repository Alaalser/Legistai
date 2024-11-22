import { notFound } from 'next/navigation';

interface UserProfile {
  userID: number;
  name: string;
  location: string;
  phone_number: string;
  email: string;
  description: string;
  rating: number;
}

async function fetchUserProfile(userID: string): Promise<UserProfile | null> {
  const response = await fetch(`http://127.0.0.1:5000/getProfileById/${userID}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    return null;
  }

  return response.json();
}

export default async function ProfilePage({ params }: { params: { id: string } }) {
  const user = await fetchUserProfile(params.id);

  if (!user) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <div className="flex items-center space-x-6 mb-8">
          <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
            <img
              src="/user-placeholder.png"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-gray-500">Rating: ⭐ {user.rating}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-sm font-semibold text-gray-500">Location</h2>
            <p className="text-gray-700">{user.location}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-gray-500">Phone Number</h2>
            <p className="text-gray-700">{user.phone_number}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-gray-500">Email</h2>
            <p className="text-gray-700">{user.email}</p>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-sm font-semibold text-gray-500">Description</h2>
          <p className="text-gray-700">{user.description}</p>
        </div>
      </div>
    </div>
  );
}
