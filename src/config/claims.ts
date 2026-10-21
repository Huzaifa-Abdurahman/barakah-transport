// Trust claims that are NOT yet verified. Each one stays hidden (enabled: false)
// until the client supplies proof. Set `enabled: true` only after the proof is
// filed in TODO-CLIENT.md and the value is confirmed.

export const CLAIMS = {
  googleRating: { enabled: false, label: "Google Rating", value: "5.0", proof: null as string | null },
  trustpilotRating: { enabled: false, label: "Trust Pilot Rating", value: "5.0", proof: null as string | null },
  positiveReviews: { enabled: false, label: "Positive Reviews", value: "2,557", proof: null as string | null },
  saudiMot: { enabled: false, label: "Saudi MOT Certified", value: null, proof: null as string | null },
  hajjUmrahMinistry: { enabled: false, label: "Hajj & Umrah Ministry Approved", value: null, proof: null as string | null },
  nusuk: { enabled: false, label: "Nusuk Approved", value: null, proof: null as string | null },
  pilgrimsServed: { enabled: false, label: "Pilgrims Served", value: "2,500+", proof: null as string | null },
  yearsExperience: { enabled: false, label: "Years of Experience", value: "5+", proof: null as string | null },
  zeroAccidentDrivers: { enabled: false, label: "Zero-accident certified drivers", value: null, proof: null as string | null },
  licensedInsured: { enabled: false, label: "Licensed & Insured", value: null, proof: null as string | null },
  gpsTracked: { enabled: false, label: "GPS Tracked Vehicles", value: null, proof: null as string | null },
} as const;

export type ClaimKey = keyof typeof CLAIMS;

export function claimEnabled(key: ClaimKey): boolean {
  return CLAIMS[key].enabled;
}
