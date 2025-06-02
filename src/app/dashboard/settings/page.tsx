import { AccountSettings } from "@/components/account-settings2"
import { PasswordForm } from "@/components/password-form"
import { Separator } from "@/components/ui/separator"

export default function SettingsPage() {
  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-6">Account Settings</h1>

      <div className="space-y-8">
        <AccountSettings />
        <Separator />
        <PasswordForm />
      </div>
    </div>
  )
}
