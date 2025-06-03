import { ProfileForm } from "@/components/profile-form"

export default function ProfilePage() {
  return (
    <div className="container py-6 px-8">
      <h1 className="text-3xl font-bold mb-6">Profile Settings</h1>
      <ProfileForm />
    </div>
  )
}
