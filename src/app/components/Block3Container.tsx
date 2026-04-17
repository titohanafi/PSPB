import { useState } from "react";
import { ContributionFormWizard } from "./ContributionFormWizard";
import { SchoolMapModal } from "./SchoolMapModal";
import { ProgramSelectionModal } from "./ProgramSelectionModal";
import { ProgramIllustration } from "./ProgramIllustration";

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
  school?: School;
  schools?: Array<{ school: School; selectedBuildings?: string[] }>;
  packages?: string[];
  selectedBuildings?: string[];
}

interface FormDataType {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  position: string;
  contributions: Record<number, ContributionData>;
}

interface CardDetail {
  title: string;
  category: string;
  description: string;
  needs?: string;
}

interface Block3ContainerProps {
  cardDetails: CardDetail[];
}

export function Block3Container({ cardDetails }: Block3ContainerProps) {
  const [selectedProgram, setSelectedProgram] = useState<number[]>([]);
  const [showContributionForm, setShowContributionForm] = useState(false);
  const [showSchoolMap, setShowSchoolMap] = useState(false);
  const [currentProgramIdx, setCurrentProgramIdx] = useState<number | null>(null);
  const [currentSchoolIdx, setCurrentSchoolIdx] = useState<number | null>(null);
  const [showProgramSelection, setShowProgramSelection] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [expandedPrograms, setExpandedPrograms] = useState<number[]>([]);
  const [expandedSchools, setExpandedSchools] = useState<Record<string, boolean>>({});
  const [formData, setFormData] = useState<FormDataType>({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    position: '',
    contributions: {}
  });

  const handleOpenSchoolMap = (programIdx: number, schoolIdx?: number) => {
    setCurrentProgramIdx(programIdx);
    setCurrentSchoolIdx(schoolIdx ?? null);
    setShowSchoolMap(true);
  };

  const handleSelectSchool = (school: School) => {
    console.log('🟢 handleSelectSchool DIPANGGIL dengan school:', school);
    console.log('🟢 currentProgramIdx:', currentProgramIdx);
    
    if (currentProgramIdx !== null) {
      const contribution = formData.contributions[currentProgramIdx] || {
        type: '',
        amount: '',
        notes: '',
        packages: []
      };

      // Check if this is a multi-school program (Revitalisasi Sekolah or Infrastruktur Digital)
      const programIndex = selectedProgram[currentProgramIdx];
      const program = cardDetails[programIndex];
      const isRevitalisasiSekolah = program?.title === "Revitalisasi Sekolah";
      const isInfrastrukturDigital = program?.title === "Infrastruktur Digital";
      const isMultiSchoolProgram = isRevitalisasiSekolah || isInfrastrukturDigital;

      console.log('handleSelectSchool:', { 
        programTitle: program?.title,
        isRevitalisasiSekolah,
        isInfrastrukturDigital,
        isMultiSchoolProgram,
        currentSchoolIdx,
        school 
      });

      if (isMultiSchoolProgram) {
        // Multi-school support for Revitalisasi Sekolah & Infrastruktur Digital
        const currentSchools = contribution.schools || [];
        
        if (currentSchoolIdx !== null) {
          // Edit existing school
          const updatedSchools = [...currentSchools];
          updatedSchools[currentSchoolIdx] = {
            ...updatedSchools[currentSchoolIdx],
            school: school
          };
          const newFormData = {
            ...formData,
            contributions: {
              ...formData.contributions,
              [currentProgramIdx]: { ...contribution, schools: updatedSchools }
            }
          };
          console.log('Setting formData (edit):', newFormData);
          setFormData(newFormData);
        } else {
          // Add new school
          const newSchoolIdx = currentSchools.length;
          const newFormData = {
            ...formData,
            contributions: {
              ...formData.contributions,
              [currentProgramIdx]: { 
                ...contribution, 
                schools: [...currentSchools, { school: school, selectedBuildings: [], packages: [] }]
              }
            }
          };
          console.log('Setting formData (add new):', newFormData);
          setFormData(newFormData);
          
          // Auto-expand the newly added school
          setExpandedSchools(prev => ({
            ...prev,
            [`${currentProgramIdx}-${newSchoolIdx}`]: true
          }));
        }
      } else {
        // Single school for other programs
        setFormData({
          ...formData,
          contributions: {
            ...formData.contributions,
            [currentProgramIdx]: { ...contribution, school: school }
          }
        });
      }
    }
    setShowSchoolMap(false);
    setCurrentProgramIdx(null);
    setCurrentSchoolIdx(null);
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
      setCurrentStep(1);
    }
  };

  const handleSubmit = () => {
    alert('Form berhasil dikirim! Terima kasih atas kontribusi Anda.');
    setShowContributionForm(false);
    setCurrentStep(1);
    setExpandedPrograms([]);
    setExpandedSchools({});
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

  return (
    <>
      {/* Contribution Form Wizard */}
      <ContributionFormWizard
        show={showContributionForm}
        selectedProgram={selectedProgram}
        setSelectedProgram={setSelectedProgram}
        cardDetails={cardDetails}
        formData={formData}
        setFormData={setFormData}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        onClose={() => {
          setShowContributionForm(false);
          setCurrentStep(1);
        }}
        onOpenSchoolMap={handleOpenSchoolMap}
        onOpenProgramSelection={() => setShowProgramSelection(true)}
        expandedPrograms={expandedPrograms}
        setExpandedPrograms={setExpandedPrograms}
        expandedSchools={expandedSchools}
        setExpandedSchools={setExpandedSchools}
        ProgramIllustration={ProgramIllustration}
      />

      {/* School Map Modal */}
      <SchoolMapModal
        show={showSchoolMap}
        onClose={() => {
          setShowSchoolMap(false);
          setCurrentProgramIdx(null);
          setCurrentSchoolIdx(null);
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
          const newLength = selectedProgram.length;
          setSelectedProgram([...selectedProgram, index]);
          setExpandedPrograms([...expandedPrograms, newLength]);
          setShowProgramSelection(false);
        }}
        ProgramIllustration={ProgramIllustration}
      />
    </>
  );
}