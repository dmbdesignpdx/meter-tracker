import { Checklist } from "@/components/checklist";
import { ServiceCount } from "@/components/count";
import { UserProfile } from "@/components/profile";
import { CountdownTimer } from "@/components/timer";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen flex-1 items-center justify-center bg-background px-6">
      <CountdownTimer />
      <Checklist />
      <ServiceCount />
      <UserProfile />
    </div>
  );
}
