import ExplorePageFilterOnRenovasiSekolah from "../../imports/ExplorePageFilterOnRenovasiSekolah";

interface SchoolMapModalProps {
  show: boolean;
  onClose: () => void;
  onSelectSchool: (school: {
    name: string;
    npsn: string;
    level: string;
    students: number;
    teachersPNS: number;
    teachersNonPNS: number;
    location: string;
    mapsLink: string;
  }) => void;
}

export function SchoolMapModal({ show, onClose, onSelectSchool }: SchoolMapModalProps) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center p-4">
      <ExplorePageFilterOnRenovasiSekolah onSelectSchool={onSelectSchool} onClose={onClose} />
    </div>
  );
}