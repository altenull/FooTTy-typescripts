import PLBadgeGrey from '../assets/images/PL-badge-grey.png';
import LLBadgeGrey from '../assets/images/LL-badge-grey.png';
import BLBadgeGrey from '../assets/images/BL-badge-grey.png';
import PLBadge from '../assets/images/PL-badge.png';
import LLBadge from '../assets/images/LL-badge.png';
import BLBadge from '../assets/images/BL-badge.png';

export const leagueCollection = {
  4328: {
    alias: 'PL',
    name: 'premierleague',
    displayName: 'Premier League',
    fullName: 'English Premier League',
    country: 'England',
    badgeGrey: PLBadgeGrey,
    badge: PLBadge
  },
  4335: {
    alias: 'LL',
    name: 'laliga',
    displayName: 'La Liga',
    fullName: 'Spanish La Liga',
    country: 'Spain',
    badgeGrey: LLBadgeGrey,
    badge: LLBadge
  },
  4331: {
    alias: 'BL',
    name: 'bundesliga',
    displayName: 'Bundesliga',
    fullName: 'German Bundesliga',
    country: 'Germany',
    badgeGrey: BLBadgeGrey,
    badge: BLBadge
  }
};