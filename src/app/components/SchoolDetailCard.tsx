import svgPaths from "../../imports/svg-7ekq0nhxxz";

interface SchoolDetailCardProps {
  name: string;
  students: number;
  teachersPNS: number;
  teachersNonPNS: number;
  location: string;
  mapsLink: string;
}

function Frame1({ students }: { students: number }) {
  return (
    <div className="flex gap-1 h-6 items-center shrink-0">
      <div className="overflow-clip relative shrink-0 size-6">
        <div className="absolute bottom-1/4 left-0 right-0 top-1/4">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 12">
            <g>
              <path d={svgPaths.p3ffff500} fill="var(--icon-default)" />
              <path d={svgPaths.p2a6dd900} fill="var(--icon-default)" />
              <path d={svgPaths.p3f51baf2} fill="var(--icon-default)" />
              <path d={svgPaths.p1c7b640} fill="var(--icon-default)" />
              <path d={svgPaths.p2aa5d800} fill="var(--icon-default)" />
              <path d={svgPaths.p1e2a3400} fill="var(--icon-default)" />
            </g>
          </svg>
        </div>
      </div>
      <p className="text-foreground" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-normal)' }}>{students} Siswa</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-1 relative shrink-0 w-3">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 4">
        <g>
          <circle cx="6" cy="2" fill="currentColor" className="text-foreground" r="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame2({ teachersPNS }: { teachersPNS: number }) {
  return (
    <div className="flex gap-1 h-6 items-center shrink-0">
      <p className="text-foreground" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-normal)' }}>{teachersPNS} Guru PNS</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-1 relative shrink-0 w-3">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 4">
        <g>
          <circle cx="6" cy="2" fill="currentColor" className="text-foreground" r="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame7({ teachersNonPNS }: { teachersNonPNS: number }) {
  return (
    <div className="flex gap-1 h-6 items-center shrink-0">
      <p className="text-foreground" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-normal)' }}>{teachersNonPNS} Guru Non PNS</p>
    </div>
  );
}

function Frame4({ students, teachersPNS, teachersNonPNS }: { students: number; teachersPNS: number; teachersNonPNS: number }) {
  return (
    <div className="flex gap-2 items-center w-full">
      <Frame1 students={students} />
      <Frame5 />
      <Frame2 teachersPNS={teachersPNS} />
      <Frame6 />
      <Frame7 teachersNonPNS={teachersNonPNS} />
    </div>
  );
}

function Frame8({ location, mapsLink }: { location: string; mapsLink: string }) {
  return (
    <div className="flex flex-1 flex-col gap-1 items-start">
      <p className="text-foreground" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-normal)' }}>{location}</p>
      <a 
        href={mapsLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-primary hover:underline"
        style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-semibold)' }}
      >
        Tautan Google Maps
      </a>
    </div>
  );
}

function Frame3({ location, mapsLink }: { location: string; mapsLink: string }) {
  return (
    <div className="flex gap-1 items-start w-full">
      <div className="overflow-clip relative shrink-0 size-6">
        <div className="absolute inset-[8.33%_20.83%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 20">
            <g>
              <path d={svgPaths.p323c6900} fill="var(--icon-default)" />
              <path d={svgPaths.p24173080} fill="var(--icon-default)" />
            </g>
          </svg>
        </div>
      </div>
      <Frame8 location={location} mapsLink={mapsLink} />
    </div>
  );
}

function Frame9(props: SchoolDetailCardProps) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <Frame4 students={props.students} teachersPNS={props.teachersPNS} teachersNonPNS={props.teachersNonPNS} />
      <Frame3 location={props.location} mapsLink={props.mapsLink} />
    </div>
  );
}

export default function SchoolDetailCard(props: SchoolDetailCardProps) {
  return (
    <div className="bg-card-background flex flex-col items-start px-6 py-5 w-full rounded-lg -mt-3">
      <Frame9 {...props} />
    </div>
  );
}