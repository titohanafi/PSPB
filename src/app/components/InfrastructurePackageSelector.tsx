import { PackageCheckboxDetailed } from "./PackageCheckboxDetailed";
import { infrastructurePackages } from "../data/packageData";
import svgPathsInternet from "../../imports/svg-rrklaa4o2z";
import svgPathsElectricity from "../../imports/svg-if2lkdlrqq";

interface InfrastructurePackageSelectorProps {
  programIdx: number;
  schoolIdx: number;
  selectedPackages: string[];
  onPackageChange: (programIdx: number, schoolIdx: number, packageKey: string, checked: boolean) => void;
}

export function InfrastructurePackageSelector({
  programIdx,
  schoolIdx,
  selectedPackages,
  onPackageChange
}: InfrastructurePackageSelectorProps) {
  
  console.log(`[InfrastructurePackageSelector] Render - Program ${programIdx}, School ${schoolIdx}, Selected:`, selectedPackages);
  
  return (
    <div className="flex flex-col gap-3">
      {/* Internet Package */}
      <PackageCheckboxDetailed
        key={`internet-${programIdx}-${schoolIdx}`}
        uniqueId={`internet-program-${programIdx}-school-${schoolIdx}`}
        icon={svgPathsInternet}
        title={infrastructurePackages.internet.title}
        estimatedBudget={infrastructurePackages.internet.estimatedBudget}
        buildingArea={infrastructurePackages.internet.buildingArea}
        details={infrastructurePackages.internet.details}
        description={infrastructurePackages.internet.description}
        checked={selectedPackages.includes('internet')}
        onChange={(checked) => {
          console.log(`[InfrastructurePackageSelector] Internet onChange - Program ${programIdx}, School ${schoolIdx}, checked=${checked}`);
          onPackageChange(programIdx, schoolIdx, 'internet', checked);
        }}
      />
      
      {/* Electricity Package */}
      <PackageCheckboxDetailed
        key={`electricity-${programIdx}-${schoolIdx}`}
        uniqueId={`electricity-program-${programIdx}-school-${schoolIdx}`}
        icon={svgPathsElectricity}
        title={infrastructurePackages.electricity.title}
        estimatedBudget={infrastructurePackages.electricity.estimatedBudget}
        buildingArea={infrastructurePackages.electricity.buildingArea}
        details={infrastructurePackages.electricity.details}
        description={infrastructurePackages.electricity.description}
        checked={selectedPackages.includes('electricity')}
        onChange={(checked) => {
          console.log(`[InfrastructurePackageSelector] Electricity onChange - Program ${programIdx}, School ${schoolIdx}, checked=${checked}`);
          onPackageChange(programIdx, schoolIdx, 'electricity', checked);
        }}
      />
    </div>
  );
}