import React from 'react'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import {
  faCalendar,
  faCode,
  faComment,
  faGraduationCap,
  faHandshake,
  faHeart,
  faLaptop,
  faMoneyCheck,
  faPuzzlePiece,
  faUser,
} from '@fortawesome/fontawesome-free-solid'

import {
  faFacebook,
  faGithub,
  faMeetup,
  faSlack,
  faTwitter,
  faYoutube,
  faInstagram,
} from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(
  faCalendar,
  faCode,
  faFacebook,
  faGithub,
  faGraduationCap,
  faHandshake,
  faHeart,
  faLaptop,
  faMeetup,
  faMoneyCheck,
  faPuzzlePiece,
  faSlack,
  faTwitter,
  faUser,
  faYoutube
)

const ICONS = {
  admissions: ['fas', 'graduation-cap'],
  apply: ['fas', 'laptop'],
  calendar: ['fas', 'calendar'],
  facebook: ['fab', 'facebook'],
  faq: ['fas', 'puzzle-piece'],
  github: ['fab', 'github'],
  heart: ['fas', 'heart'],
  instagram: ['fab', 'instagram'],
  meetup: ['fab', 'meetup'],
  network: ['fas', 'handshake'],
  program: ['fas', 'code'],
  referrals: ['fas', 'comment'],
  slack: ['fab', 'slack'],
  success: ['fas', 'heart'],
  tuition: ['fas', 'money-check'],
  twitter: ['fab', 'twitter'],
  youtube: ['fab', 'youtube'],
  organizations: ['fas', 'users'],
  sponsors: ['fas', 'handshake'],
  jointTraining: ['fas', 'laptop'],
  hiring: ['fas', 'user-plus'],
  user: ['fas', 'user'],
}

const Icon = ({ name }) => (
  <span className="icon">
    <FontAwesomeIcon icon={ICONS[name]} size="lg" />
  </span>
)

export default Icon
