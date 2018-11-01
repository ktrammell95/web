import React from 'react'
import Img from 'gatsby-image'
import CommunityNavigation from '../../components/CommunityNavigation'
import PageHeading from '../../components/PageHeading'

const Card = ({ id, name, title, children, imgData }) => (
  <div className="card">
    <div id={`${id}`} className="level">
      <h4>{name}</h4>
      <div>{children}</div>
    </div>
  </div>
)

const Image = ({ id, name, imgData }) => (
  <div className="image" id={`${id}`}>
    <Img
      name={name}
      sizes={{ ...imgData, aspectRatio: 1.6 }}
      alt={`A portrait of ${name}`}
    />
  </div>
)

const SponsorPage = props => (
  <div className="CommunityPage SponsorPage">
    <CommunityNavigation />
    <div className="wrap">
      <PageHeading>Sponsorship</PageHeading>
      <div className="who">
        <h3>Who we are</h3>
        <div className="who-wrapper">
          <h4>Your Donation is Tax Deductible. </h4>
          <p>
            The Academy at Suncoast Developers Guild is a code school that
            serves people, not profit. We are changing lives and teaching people
            to be the best software developers they can be.
          </p>
          <p>
            Not only does our coding program teach our students what they need
            to be successful coders, but we also strive to help them to fulfill
            their career goals by teaching them the soft skills they need in
            order for them to be proactive be confident while engaging with
            possible employers.
          </p>
        </div>
      </div>
      <div className="give">
        <h3>If you choose to give</h3>
        <div className="give-wrapper">
          <h4>Your Donation is Tax Deductible. </h4>
          <p>
            We are a 501c3 organization that supports the Tampa Bay tech
            community through our educational program and community events such
            as free crash courses, meetups, and our SDG Jr program.
          </p>
          <h4>Your Donation Will Change Someone’s Life. </h4>
          <p>
            Whether you donate equipment or money your donation will be put
            towards the betterment of a student or the Tampa Bay community.
          </p>
          <h4>Your Donation is Secure </h4>
          <p>
            All donations will go directly towards running the Suncoast
            Developers Guild’s programs and its students.
          </p>
        </div>
      </div>
      <div className="benefit">
        <h3>How do you benefit?</h3>
        <div className="benefit-wrapper">
          <p>
            According to Monster, the average in-house recruitment cost of
            filling a vacancy, using internal or external recruitment methods is
            reported to be around $9,000.
          </p>
          <p>
            65% of recruiters claim talent shortage is the biggest challenge in
            hiring.
          </p>
          <p>
            In 2016, 58% of small businesses reported “hiring or trying to hire”
            and 52% reported scarcity or lack of qualified applicants for their
            open positions.
          </p>
          <hr />
          <p>
            SDG not only teaches our students how to code, we teach them how to
            think like developers. Our students are able to enter the workforce
            immediately. By teaming up with our program you can help bring new
            developers that are eager to work hard and continue to learn into
            the workforce.{' '}
          </p>
          <p>
            We are cutting down on lack of qualified applicants and the time it
            can take to find them.
          </p>
        </div>
      </div>
      <div className="levels">
        <h3>Sponsorship Levels</h3>
        <Card id="friend" name="Friend ($100)">
          <p>5 T-Shirts per year</p>
        </Card>
        <Card id="supporter" name="Supporter ($200)">
          <p>5 T-Shirts per year + Community Experience</p>
          <p className="left-align">
            Community Experience - a program to enhance and support the students
            attending the program, along with the Tampa Bay tech community at
            large. This will include providing healthy snacks on campus,
            continuous community engagement through Meetups, additional courses
            on more advanced topics, and hackathons.
          </p>
        </Card>
        <Card id="junior" name="SDG JR ($500)">
          <p>Supplies + Loaner Laptops</p>
        </Card>
        <Card id="crash" name="Crash Course ($500)">
          <p>Healthy Snacks + Sponsor Promotion</p>
        </Card>
        <Card id="demo" name="Demo Day ($2,500)">
          <p>Healthy Snacks + Sponsor Promotion</p>
        </Card>
        <Card id="scholarships" name="Scholarships ($1K - 15K)">
          <p>Diversity Scholarship ($1,000)</p>
          <p>Full Tuition ($14,900)</p>
        </Card>
        <Card id="rooms" name="Room Sponsor ($5K - 50K)">
          <p>Quarterly or Annual Naming Rights</p>
          <p className="left-align">
            Naming Rights - rooms will be named in honor of the donor and names
            will be displayed prominently. Room sizing will determine the amount
            of donation requested for naming rights.
          </p>
        </Card>
      </div>
      <div className="scholarships">
        <h3>Scholarships</h3>
        <div className="images">
          <div className="image-wrapper">
            <Image name="Kenia" imgData={props.data.kenia.sizes} />
          </div>
          <div className="image-wrapper">
            <Image name="Jonathon" imgData={props.data.jonathon.sizes} />
          </div>
          <div className="image-wrapper">
            <Image name="Valeria" imgData={props.data.valeria.sizes} />
          </div>
          <div className="image-wrapper">
            <Image name="Sherry" imgData={props.data.sherry.sizes} />
          </div>
          <div className="image-wrapper">
            <Image name="Jasmine" imgData={props.data.jasmine.sizes} />
          </div>
          <div className="image-wrapper">
            <Image name="Venel" imgData={props.data.venel.sizes} />
          </div>
        </div>
        <div className="scholarship-desc">
          <p>
            In today’s development industry, diversity is the greatest issues
            faced by employers to date. Currently, the percentage of women
            coders in the field is less than 20% while African Americans and
            Hispanic or Latino populations represent less than 3% of the overall
            coding community.
          </p>
          <p>
            For these reasons and more, we’ve created the Diversity Scholarship.
            Scholarships are offered on a need-based system, covering from
            $1,900 to $14,900 of tuition for recipients.
          </p>
          <p>
            Women, U.S. military veterans, and populations underrepresented in
            technology are eligible to apply. Scholarships are awarded based on
            financial need and the applicant's ability to meet the requirements
            of both the course and scholarship application.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export const pageQuery = graphql`
  query HireAlumniPageQuery {
    jasmine: imageSharp(id: { regex: "/people/jasmine/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
    venel: imageSharp(id: { regex: "/people/venel/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
    kenia: imageSharp(id: { regex: "/people/kenia/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
    sherry: imageSharp(id: { regex: "/people/sherry/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
    jonathon: imageSharp(id: { regex: "/people/jonathon/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
    valeria: imageSharp(id: { regex: "/people/valeria/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export default SponsorPage
