const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'imports', 'UpdatedLandingPage.tsx');
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

// Keep lines 0-1743 (before wizard, index starts at 0)
const before = lines.slice(0, 1744);

// The replacement
const replacement = [
  '',
  '      {/* Contribution Form Wizard */}',
  '      <ContributionFormWizard',
  '        show={showContributionForm}',
  '        selectedProgram={selectedProgram}',
  '        setSelectedProgram={setSelectedProgram}',
  '        cardDetails={cardDetails}',
  '        formData={formData}',
  '        setFormData={setFormData}',
  '        currentStep={currentStep}',
  '        setCurrentStep={setCurrentStep}',
  '        onClose={() => setShowContributionForm(false)}',
  '        onOpenSchoolMap={(idx) => {',
  '          setCurrentProgramIdx(idx);',
  '          setShowSchoolMap(true);',
  '        }}',
  '        onOpenProgramSelection={() => setShowProgramSelection(true)}',
  '        expandedPrograms={expandedPrograms}',
  '        setExpandedPrograms={setExpandedPrograms}',
  '        ProgramIllustration={ProgramIllustration}',
  '      />',
];

// Keep lines from 2329 onwards (index 2329 in zero-based)
const after = lines.slice(2329);

// Combine
const newContent = [...before, ...replacement, ...after].join('\n');

fs.writeFileSync(filePath, newContent, 'utf8');

console.log(`Success! Replaced lines 1745-2329 (${2329 - 1744} lines) with component call (${replacement.length} lines)`);
console.log(`Old: ${lines.length} lines, New: ${before.length + replacement.length + after.length} lines`);
console.log(`Saved ${lines.length - (before.length + replacement.length + after.length)} lines`);
