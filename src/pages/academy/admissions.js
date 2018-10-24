import React from 'react'
import Link from 'gatsby-link'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import PageHeading from '../../components/PageHeading'
import AcademyNavigation from '../../components/AcademyNavigation'

const AcademyAdmissionsPage = () => (
  <div className="AcademyPage Admissions">
    <AcademyNavigation />
    <div className="wrap">
      <PageHeading>Admissions</PageHeading>
      <Tabs>
        <TabList>
          <Tab>Application Process</Tab>
          <Tab>Requirements</Tab>
        </TabList>

        <TabPanel>
          <div className="content">
            <h3>Application Process</h3>

            <p>
              Admissions to the Suncoast Developers Guild’s Web Development
              program is done through our website. To apply, prospective
              students will complete and submit the application online.
              Questions answered in the application will assist faculty and
              staff in considering candidates.
            </p>

            <p>
              Technology-oriented interests and career goals, motivation,
              problem solving skills, and creativity will be primary indicators
              when evaluating an applicant’s potential. Previous work and
              educational experience will also be considered. Students must be
              at least 18 years of age and hold a high school diploma or
              equivalent.
            </p>

            <p>
              Applicants will be invited to a series of interviews with a
              combination of: the Program Director, instructors, and alumni of
              the program. If a consensus is found that the applicant is a good
              fit for the program, the student will be notified of acceptance. A
              signed Student Enrollment Agreement is also required. The Student
              Enrollment Agreement will not be signed by the school prior to the
              student signing the document.
            </p>

            <h3>Diversity Scholarship</h3>

            <p>
              Suncoast Developers Guild seeks to narrow the gaps in our industry
              by introducing local companies to diverse talent. We offer a
              scholarship to members of communities that are underrepresented in
              technology.
            </p>
            <ul>
              <li>
                This opportunity is available, but not limited to:
                self-identifying women, people of color, individuals with
                disabilities, and the LGBTQ community. Members of all
                underrepresented groups may apply for this scholarship.
              </li>
              <li>
                We will deduct the scholarship amount from the total cost of
                tuition.
              </li>
            </ul>

            <p>
              Apply for the{' '}
              <Link to="/academy/diversity">
                Suncoast Developers Guild Diversity Scholarship.
              </Link>
            </p>

            <h3>Notice of Nondiscriminatory Policy as to Students</h3>

            <p>
              Suncoast Developers Guild, Inc. does not and shall not
              discriminate on the basis of race, color, national origin,
              religion, creed, age, disability, military or veteran's status,
              sexual orientation, gender, gender identity, or gender expression,
              in any of its activities or operations. These activities include,
              but are not limited to: hiring and firing of staff, selection of
              volunteers and vendors, and provision of services, administration
              of its educational policies, admissions policies, scholarships,
              and other programs. We are committed to providing an inclusive and
              welcoming environment for our staff, students, volunteers, and
              members.
            </p>

            <h3>Program Catalog</h3>

            <p>
              For more information about our program and the admissions process{' '}
              <a href="/catalog.pdf">download our program catalog</a>.
            </p>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="content">
            <h3>Hardware Requirements</h3>

            <p>
              The suggested computer for students is an Apple MacBook Pro laptop
              less than two years old. Minimum requirements:
            </p>

            <ul>
              <li>8GB of RAM</li>
              <li>500GB HDD</li>
              <li>
                macOS High Sierra (10.13) or Windows 10, subject to approval
                (see below)
              </li>
            </ul>

            <p>
              Why a Mac? All of our students being on the same platform enables
              us to move at a much quicker pace. Processes like setting up new
              tools experience reduced friction because the same workflows apply
              to everyone.
            </p>

            <p>
              Additionally, The open source and web development communities are
              invested in tools and libraries that work best with POSIX based
              operating systems like UNIX, Linux, and Apple’s macOS (BSD Unix).
              In short, we believe using the macOS best prepares our students to
              work in the web development industry.
            </p>

            <p>
              Students who choose to study .NET development with us may also
              find substantial benefit from using macOS. A PC laptops can be
              approved for class use on a case by case basis during the
              interview process.
            </p>

            <h3>Software Requirements</h3>

            <p>
              The tools and materials used in our program are open source and
              free. No additional software is required.
            </p>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  </div>
)

export default AcademyAdmissionsPage
