import React from "react";
import { Link } from "gatsby";
import styles from "./test.module.css";

const navData = [
  { url: '/', label: 'Home' },
  { url: '/play', label: 'Play' },
  { url: '/how-it-works', label: 'How it Works' },
  { url: '/prizes', label: 'Prizes' },
  {
    url: '/winners',
    label: 'Results',
    submenu: [
      { url: '/winners', label: 'Recent Winners' },
      { url: '/winners/millions', label: 'Postcode Millions' },
      { url: '/winners/daily-prize', label: 'Daily Prizes' },
      { url: '/winners/street-prize', label: 'Street Prizes' },
    ],
  },
  {
    url: '/charities',
    label: 'Charities',
    submenu: [
      { url: '/charities', label: 'Good Causes' },
      { url: '/charities/prize-draw-calendar', label: 'Prize Draw Calendar' },
      { url: '/charities/licence-details', label: 'Licence Details ' },
      { url: '/charities/ambassadors', label: 'Ambassadors' },
    ],
  },
  {
    url: '/about-us',
    label: 'About Us',
    submenu: [
      { url: '/about-us/contact-us', label: 'Contact Us' },
      { url: '/about-us/news', label: 'News' },
      { url: '/about-us/press-office', label: 'Press Office' },
      { url: '/about-us/careers', label: 'Careers' },
      { url: '/about-us/our-history', label: 'Our History' },
      { url: '/about-us/annual-reports', label: 'Annual Reports' },
      { url: '/about-us/faqs', label: 'FAQs' },
    ],
  },
];

export default ({ children }) => (
  <div>
    <div className={styles.menuBarOne} />
    <nav>
      <ul className={styles.listSpacing}>
        {navData.map((navItem) => (
          <li key={navItem.url} className={styles.navBtn}>
            <Link href={navItem.url}>
              <a className={styles.menuItem}>{navItem.label}</a>
            </Link>
            {navItem.submenu
              && (
              <nav>
                <ul className={styles.subNavListSpacing}>
                  {navItem.submenu.map((subNavItem) => (
                    <li key={subNavItem.url} className={styles.navBtn}>
                      <Link href={subNavItem.url}>
                        <a className={styles.menuItem}>{subNavItem.label}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              )}
          </li>
        ))}
      </ul>
    </nav>
  </div>
);




















  
//   <nav>
//     <ul>
//       <li>
//         <Link to="/">
//           <a>Home</a>
//         </Link>
//       </li>
//       <li>
//         <Link to="/play">
//           <a>Play</a>
//         </Link>
//       </li>
//       <li>
//         <Link to="/winners">
//           <a>Results</a>
//         </Link>
//       </li>
//       <li>
//         <Link to="/howitworks">
//           <a>How it Works</a>
//         </Link>
//       </li>
//       <li>
//         <Link to="/charities">
//           <a>Charities</a>
//         </Link>
//       </li>
//     </ul>
//   </nav>
// );
