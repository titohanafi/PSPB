import { useState } from "react";
import { ContributionFormWizardV2 } from "./ContributionFormWizardV2";
import { SchoolMapModal } from "./SchoolMapModal";
import { ProgramSelectionModal } from "./ProgramSelectionModal";
import { ProgramIllustration } from "./ProgramIllustration";
import { cardDetails } from "../data/cardDetails";

interface School {
  name: string;
  npsn: string;
  level: string;
  students: number;
  teachersPNS: number;
  teachersNonPNS: number;
  location: string;
  mapsLink: string;
}

interface ContributionData {
  type: string;
  amount: string;
  notes: string;
  topikMateri: string;
  school?: School;
  packages?: string[];
}

interface FormDataType {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  position: string;
  contributions: Record<number, ContributionData>;
}

interface Block3CompleteProps {
  Frame: React.ComponentType<{ onCardClick: (index: number) => void }>;
  DetailModal: React.ComponentType<{
    selectedCard: number | null;
    onClose: () => void;
    cardDetails: typeof cardDetails;
    onSelectProgram: (index: number) => void;
  }>;
}

export function Block3Complete({ Frame, DetailModal }: Block3CompleteProps) {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<number[]>([]);
  const [showContributionForm, setShowContributionForm] = useState(false);
  const [showSchoolMap, setShowSchoolMap] = useState(false);
  const [currentProgramIdx, setCurrentProgramIdx] = useState<number | null>(null);
  const [showProgramSelection, setShowProgramSelection] = useState(false);
  const [formData, setFormData] = useState<FormDataType>({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    position: '',
    contributions: {}
  });

  const handleOpenSchoolMap = (programIdx: number) => {
    setCurrentProgramIdx(programIdx);
    setShowSchoolMap(true);
  };

  const handleSelectSchool = (school: School) => {
    if (currentProgramIdx !== null) {
      const contribution = formData.contributions[currentProgramIdx] || {
        type: '',
        amount: '',
        notes: '',
        packages: []
      };
      setFormData({
        ...formData,
        contributions: {
          ...formData.contributions,
          [currentProgramIdx]: { ...contribution, school: school }
        }
      });
    }
    setShowSchoolMap(false);
    setCurrentProgramIdx(null);
  };

  const handleRemoveProgram = (idx: number) => {
    const newSelectedProgram = selectedProgram.filter((_, i) => i !== idx);
    setSelectedProgram(newSelectedProgram);
    
    // Reorganize contributions
    const newContributions: Record<number, ContributionData> = {};
    Object.keys(formData.contributions).forEach((key) => {
      const oldIdx = parseInt(key);
      if (oldIdx < idx) {
        newContributions[oldIdx] = formData.contributions[oldIdx];
      } else if (oldIdx > idx) {
        newContributions[oldIdx - 1] = formData.contributions[oldIdx];
      }
    });
    
    setFormData({ ...formData, contributions: newContributions });
    
    if (newSelectedProgram.length === 0) {
      setShowContributionForm(false);
    }
  };

  const handleSubmit = () => {
    alert('Form berhasil dikirim! Terima kasih atas kontribusi Anda.');
    setShowContributionForm(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      organization: '',
      position: '',
      contributions: {}
    });
    setSelectedProgram([]);
  };

  const handleSelectProgram = (index: number) => {
    setSelectedProgram([...selectedProgram, index]);
    setSelectedCard(null);
  };

  return (
    <>
      {/* Program Cards Section */}
      <div className="bg-[#cedef2] content-stretch flex items-start pb-[80px] pt-[60px] px-6 md:px-[150px] relative shrink-0 w-full" data-name="block 6">
        <div className="max-w-[1440px] mx-auto w-full">
          <Frame onCardClick={setSelectedCard} />
        </div>
      </div>

      {/* Detail Modal */}
      <DetailModal
        selectedCard={selectedCard}
        onClose={() => setSelectedCard(null)}
        cardDetails={cardDetails}
        onSelectProgram={handleSelectProgram}
      />

      {/* Contribution Form Wizard */}
      {showContributionForm && (
        <ContributionFormWizardV2
          selectedProgram={selectedProgram}
          cardDetails={cardDetails}
          formData={formData}
          onFormDataChange={setFormData}
          onClose={() => {
            setShowContributionForm(false);
          }}
          onSubmit={handleSubmit}
          onOpenSchoolMap={handleOpenSchoolMap}
          onRemoveProgram={handleRemoveProgram}
          onOpenProgramSelection={() => setShowProgramSelection(true)}
        />
      )}

      {/* School Map Modal */}
      <SchoolMapModal
        show={showSchoolMap}
        onClose={() => {
          setShowSchoolMap(false);
          setCurrentProgramIdx(null);
        }}
        onSelectSchool={handleSelectSchool}
      />

      {/* Program Selection Modal */}
      <ProgramSelectionModal
        show={showProgramSelection}
        onClose={() => setShowProgramSelection(false)}
        cardDetails={cardDetails}
        selectedProgram={selectedProgram}
        onSelectProgram={(index) => {
          setSelectedProgram([...selectedProgram, index]);
          setShowProgramSelection(false);
        }}
        ProgramIllustration={ProgramIllustration}
      />
    </>
  );
}