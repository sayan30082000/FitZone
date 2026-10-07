// All page copy lives here, so text, prices and plans can change without
// touching the layout.

export const NAV_LINKS = [
  { href: "#programs", label: "Programs" },
  { href: "#pricing", label: "Pricing" },
  { href: "#reviews", label: "Reviews" },
  { href: "#join", label: "Contact" },
];

export const STATS = [
  { icon: "star", value: "4.9", label: "Rating" },
  { icon: "dumbbell", value: "50+", label: "Classes/Week" },
  { icon: "users", value: "2,000+", label: "Members" },
];

export const FEATURES = [
  { icon: "dumbbell", title: "Personal Training", text: "1-on-1 sessions with certified trainers tailored to your goals and fitness level." },
  { icon: "flower", title: "Group Classes", text: "HIIT, yoga, spin, boxing and more. 50+ classes every week for all levels." },
  { icon: "salad", title: "Nutrition Coaching", text: "Custom meal plans and nutrition guidance to fuel your training and recovery." },
  { icon: "biceps", title: "Strength Zone", text: "Full free weights area, squat racks, and cable machines. Never wait for equipment." },
  { icon: "snowflake", title: "Recovery Suite", text: "Sauna, cold plunge, and stretching area to help you recover faster between sessions." },
  { icon: "smartphone", title: "Member App", text: "Book classes, track progress, and chat with your trainer all from your phone." },
];

export const TESTIMONIALS = [
  {
    quote: "I've been to a lot of gyms but FitZone is different. The trainers actually care about your progress. Lost 30 lbs in 4 months.",
    name: "James K.",
    role: "Member since 2023",
  },
  {
    quote: "The group classes are incredible. I look forward to coming every morning. The energy in the room is unmatched.",
    name: "Priya M.",
    role: "Group Fitness Member",
  },
  {
    quote: "Best investment I've made in myself. My trainer built a program around my back issues and I'm stronger than ever.",
    name: "David R.",
    role: "PT Client",
  },
];

export const PLANS = [
  {
    id: "basic",
    name: "Basic",
    price: 49,
    desc: "Gym access only",
    features: ["Unlimited gym access", "Locker room & showers", "Member app access", "1 free PT session/month"],
  },
  {
    id: "premium",
    name: "Premium",
    price: 89,
    desc: "Most popular plan",
    featured: true,
    features: ["Everything in Basic", "Unlimited group classes", "Recovery suite access", "4 PT sessions/month", "Nutrition coaching"],
  },
  {
    id: "elite",
    name: "Elite",
    price: 149,
    desc: "The full experience",
    features: ["Everything in Premium", "Unlimited PT sessions", "Priority class booking", "Guest passes (2/month)", "Quarterly body scan"],
  },
];

// Footer contact details and social profiles. A social link with an empty
// `url` is left out of the footer.
export const CONTACT = {
  phone: "+8801799-414228",
  phoneHref: "tel:+8801799414228",
  location: "Chittagong, Bangladesh",
  email: "bobbymelody30@gmail.com",
};

export const SOCIALS = [
  { id: "facebook", label: "Facebook", url: "" },
  { id: "instagram", label: "Instagram", url: "" },
  { id: "linkedin", label: "LinkedIn", url: "" },
  { id: "youtube", label: "YouTube", url: "" },
  { id: "whatsapp", label: "WhatsApp", url: "https://wa.me/8801799414228" },
];

export const GOALS =["Lose weight", "Build strength", "Get fitter overall", "Recover from an injury", "Just try it out"];
