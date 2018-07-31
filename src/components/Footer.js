import React from 'react'
import Link from 'gatsby-link'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Icon from './Icon'
import logoMain from '../images/logo.svg'

const Footer = () => (
  <footer className="Footer">
    <hr />
    <section>
      <div className="ident">
        <img
          src={logoMain}
          alt="Suncoast Developers Guild Shield Logo"
          height="100"
        />
        <p>
          <strong>Suncoast Developers Guild, Inc.</strong> is a Florida
          not-for-profit corporation and registered 501(c)(3) organization.
        </p>
        <p>
          <OutboundLink href="mailto:hello@suncoast.io">
            hello@suncoast.io
          </OutboundLink>
        </p>
        <p>
          Questions? <Link to="/contact">Contact Us</Link>.
        </p>
      </div>
      <div className="locate">
        <h3>Location</h3>
        <p>
          <OutboundLink
            href="https://www.google.com/maps/place/2220+Central+Ave,+St.+Petersburg,+FL+33712/@27.770774,-82.663524,16z"
            target="_blank"
          >
            2220 Central Ave
            <br />
            St Petersburg, FL 33712
          </OutboundLink>
        </p>
        <ul>
          <li>
            <Link to="/conduct">Code of Conduct</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/terms">Terms of Service</Link>
          </li>
        </ul>
      </div>
      <div className="site">
        <ul className="social">
          <li>
            <OutboundLink
              href="https://www.facebook.com/SuncoastDevelopersGuild/"
              target="_blank"
            >
              <Icon name="facebook" />
            </OutboundLink>
          </li>
          <li>
            <OutboundLink href="https://twitter.com/suncoastio" target="_blank">
              <Icon name="twitter" />
            </OutboundLink>
          </li>
          <li>
            <OutboundLink
              href="https://www.meetup.com/suncoast-developers-guild/"
              target="_blank"
            >
              <Icon name="meetup" />
            </OutboundLink>
          </li>
          <li>
            <OutboundLink
              href="https://www.instagram.com/suncoastdevelopersguild"
              target="_blank"
            >
              <Icon name="instagram" />
            </OutboundLink>
          </li>
          {/* <li>
            <OutboundLink
              href="https://www.youtube.com/channel/UCHEG7eYS1ijBUjh44mpBwVg"
              target="_blank"
            >
              <Icon name="youtube" />
            </OutboundLink>
          </li> */}
          <li>
            <OutboundLink
              href="https://suncoast-devs.slack.com"
              target="_blank"
            >
              <Icon name="slack" />
            </OutboundLink>
          </li>
        </ul>
        <nav>
          <ul>
            <li>
              <Link to="/Community">Community</Link>
            </li>
            <li>
              <Link to="/Academy">Academy</Link>
            </li>
            <li>
              <Link to="/team">Our Team</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
    <p className="copyright">
      &copy; 2018 Suncoast Developers Guild, Inc.&nbsp;
      <OutboundLink href="https://github.com/suncoast-devs/web" target="_blank">
        <Icon name="github" />
      </OutboundLink>
    </p>
    <p className="love">
      Made with <Icon name="heart" /> in St Petersburg, Florida.
    </p>
  </footer>
)

export default Footer
