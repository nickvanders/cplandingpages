interface Clinician {
  id: string;
  name: string;
  title: string;
  photo_url: string;
}

const CLINICIANS: Record<string, Clinician[]> = {
  "adhd-assessment": [
    { id: "rivkah", name: "Rivkah Bendet", title: "Psychologist", photo_url: "/assets/rivkah.jpg" },
    { id: "avi",    name: "Avi Winner",    title: "Psychologist", photo_url: "/assets/avi.jpg" },
    { id: "david",  name: "David Bokan",   title: "Psychologist", photo_url: "/assets/david.png" },
    { id: "bridget",name: "Bridget Kosmas",title: "Provisional Psychologist", photo_url: "/assets/bridget.png" },
  ],
  "asd-assessment": [
    { id: "rivkah", name: "Rivkah Bendet", title: "Psychologist", photo_url: "/assets/rivkah.jpg" },
    { id: "avi",    name: "Avi Winner",    title: "Psychologist", photo_url: "/assets/avi.jpg" },
    { id: "david",  name: "David Bokan",   title: "Psychologist", photo_url: "/assets/david.png" },
  ],
  "couples": [
    { id: "lucy",   name: "Lucy Adlard",   title: "Psychologist", photo_url: "/assets/lucy.jpg" },
  ],
  "individual-therapy": [
    { id: "claudia", name: "Claudia Hounslow", title: "Director & Psychologist", photo_url: "/assets/claudia.png" },
    { id: "rivkah",  name: "Rivkah Bendet",   title: "Psychologist",             photo_url: "/assets/rivkah.jpg" },
    { id: "avi",    name: "Avi Winner",    title: "Psychologist",             photo_url: "/assets/avi.jpg" },
    { id: "david",  name: "David Bokan",   title: "Psychologist",             photo_url: "/assets/david.png" },
    { id: "bridget",name: "Bridget Kosmas",title: "Provisional Psychologist", photo_url: "/assets/bridget.png" },
    { id: "lucy",   name: "Lucy Adlard",   title: "Psychologist",             photo_url: "/assets/lucy.jpg" },
  ],
};

export function useCliniciansForService(serviceType: string | null): Clinician[] {
  if (!serviceType) return [];
  return CLINICIANS[serviceType] ?? [];
}
