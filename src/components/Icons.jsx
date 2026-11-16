// Small SVG icons. Each one is a tiny React component: <Mail s={18} />
const make = d => ({ s = 18 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
)
export const Instagram = make(<><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".6" /></>)
export const Linkedin = make(<path d="M6 9v10M6 5.5v.01M10 19v-6a3 3 0 0 1 6 0v6M10 12v7" />)
export const Youtube = make(<><rect x="2.5" y="5" width="19" height="14" rx="4" /><path d="m10 9 5 3-5 3z" /></>)
export const Mail = make(<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>)
export const Phone = make(<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />)
export const Pin = make(<><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></>)
export const Send = make(<path d="M21 3 10 14M21 3l-7 18-4-7-7-4z" />)
export const Arrow = make(<path d="M5 12h14M13 6l6 6-6 6" />)
export const ArrowDown = make(<path d="M12 5v14M6 13l6 6 6-6" />)
export const Left = make(<path d="M19 12H5M11 6l-6 6 6 6" />)
export const Play = ({ s = 16 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 4l14 8-14 8z" /></svg>

export const socialIcons = { Instagram, LinkedIn: Linkedin, YouTube: Youtube }
