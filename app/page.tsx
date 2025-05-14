import CommitteesSection from "./sections/CommitteesSection";
import HomeSection from "./sections/HomeSection";
import MavGradesSection from "./sections/MavGradesSection";
import OfficersSection from "./sections/OfficersSection";

export default function Home() {
  return (
    <main className="flex flex-col space-y-64 ">
      <HomeSection />
      <MavGradesSection />
      <CommitteesSection />
      <OfficersSection />
    </main>
  );
}
