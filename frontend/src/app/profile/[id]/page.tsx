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
    <div>
      <h1>Profile</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Location:</strong> {user.location}</p>
      <p><strong>Phone Number:</strong> {user.phone_number}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Description:</strong> {user.description}</p>
      <p><strong>Rating:</strong> {user.rating}</p>
    </div>
  );
}
