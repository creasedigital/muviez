import { PageHeading } from '../../../../commons/Heading';
import { MarketingLayout } from '../../../../layout';
import { Clear, List, Text, Paragraph } from '../styles';

const Privacy = () => {
  return (
    <MarketingLayout>
      <div className="container">
        <PageHeading centered large>
          Privacy
        </PageHeading>
        <Paragraph className="text-center">Last updated <span>Aug 9, 2021</span></Paragraph>

        <Text>
          At Unboxd, your privacy is a priority for us, that's why we collect
          and retain the least information necessary to provide our services and
          debug any occasional problems that might arise.
        </Text>
        <Text>
          As long as our applications and websites can provide their
          functionality without doing so, we prefer to avoid collecting data
          from you.
        </Text>
        <Text>
          In the cases where we do collect data, we try to be clear about why
          we're collecting it, tell you how long we keep it, and delete it when
          we no longer need it.
        </Text>
        <Text>
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us at{' '}
          <a href={'mailto:privacy@unboxd.gift'}>privacy@unboxd.gift</a>
        </Text>

        <Clear />
        <PageHeading>Log files</PageHeading>
        <Text>
          Our products follow a standard procedure of using log files. These
          files log visitors when they visit websites. All hosting companies do
          this and it's part of hosting services' analytics.
        </Text>
        <Text>The information collected by log files include:</Text>
        <List>
          <li>
            Internet protocol (IP) addresses (may reveal your approximate
            geographic location).
          </li>
          <li>
            Details of the software making the request (such as browser type,
            version, operating system).
          </li>
          <li>Device type (mobile, tablet, desktop).</li>
          <li>Date and time stamp of the request.</li>
          <li>The name of the resource requested.</li>
          <li>Number of requests.</li>
          <li>Referring/exit pages.</li>
        </List>
        <Text>
          These are not linked to any information that is personally
          identifiable. The purpose of the information is for analyzing trends,
          administering the site, tracking users' movement on the website, and
          gathering demographic information.
        </Text>

        <Clear />
        <PageHeading>Personal data</PageHeading>
        <Text>
          When you contact us by using our contact forms, you may be asked
          certain personally identifiable information that can be used to
          contact or identify you ("Personal Data").
        </Text>
        <Text>
          Unboxd protects your Personal Data in line with applicable laws and
          our data privacy policies. We also take appropriate technical and
          organizational measures to protect your data against unauthorized or
          unlawful processing, and against accidental loss, destruction, damage,
          alteration, disclosure or access.
        </Text>

        <Clear />
        <PageHeading>Enroll in beta programs</PageHeading>
        <Text>
          As an Unboxd user, you may have access to private beta programs that
          you can sign up through the app. When you sign up, we collect:
        </Text>
        <List>
          <li>Your name.</li>
          <li>Your email address.</li>
          <li>Your phone number in some case</li>
        </List>
        <Text>
          We will store this information for as long as you want to be part of
          the program.
        </Text>

        <Clear />
        <PageHeading>Support inquiries</PageHeading>
        <Text>When handling support requests from you, we collect:</Text>
        <List>
          <li>Your email address.</li>
          <li>
            Any information you provide for context (crash logs, diagnostic
            info, etc.).
          </li>
        </List>
        <Text>
          This information is collected solely to help resolve your support
          inquiry. If you do contact us from our site regarding an issue you are
          facing when using the app, we recommend you to include this
          information in your inquiry.
        </Text>
        <Text>We may retain support emails indefinitely to:</Text>
        <List>
          <li>
            Have context from previous requests, which may help us answer your
            future questions more quickly.
          </li>
          <li>
            Identify trends in support inquiries, which may help us detect and
            solve problems and improve Kiff app.
          </li>
        </List>
        <Text>
          If you would like to remove any information you have sent us regarding
          a support request, contact us at 
          <a href="mailto:privacy@unboxd.gifts">pivacy@unboxd.gifts</a>
        </Text>

        <Clear />
        <PageHeading>Feedback and suggestions</PageHeading>
        <Text>
          When you contact us for giving feedback or making a suggestion, we
          collect:
        </Text>
        <List>
          <li>Your email address.</li>
          <li>
            The content of your comment or suggestion (including links, or any
            other additional material that you provide us as context).
          </li>
        </List>
        <Text>
          If you do complete the request from inside the app, we also collect
          the following data about your device:
        </Text>
        <List>
          <li>Device model (e.g. iPhone XR).</li>
          <li>Software version</li>
        </List>
        <Text>We may retain feedback emails indefinitely to:</Text>
        <List>
          <li>
            Have context from previous feedback/suggestions you may have sent to
            us, so we can understand better your needs.
          </li>
          <li>Identify potential improvements to Kiff app.</li>
        </List>
        <Text>
          If you would like to remove any information you have sent us regarding
          a feedback/suggestion request, contact us at 
          <a href="mailto:pivacy@unboxd.gifts">privacy@unboxd.gifts</a>.
        </Text>

        <Clear />
        <PageHeading>Flutterwave</PageHeading>
        <Text>We use a third party service called Flutterwave for handling contributions and payouts to local accounts. This service provides a backend for all financial transactions on Unboxd. Flutterwave does not intentionally disclose Personal Data to third parties or utilise end-use data for marketing purposes.</Text>
        <Text>We normally delete any Personal Data you share with us from their archive as soon as we process your request. </Text>
        <Text>By using our Unboxd, you acknowledge and accept that your information will be transferred for processing to Flutterwave.</Text>

        <Clear />
        <PageHeading>Security of data</PageHeading>
        <Text>We take precautions to protect your information. Wherever we collect sensitive information, that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a lock icon in the address bar and looking for "https" at the beginning of the address of this site.</Text>
        <Text>
        The security of your data is important to us, but no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use means to protect your Personal Data, we cannot guarantee its absolute security.
        </Text>

        <Clear />
        <PageHeading>Disclosure of data</PageHeading>
        <Text>Unless required to do so by law or liability reasons, we will not otherwise share or distribute any of the information you provide to us without your consent, or use your data for any purpose other than the reason we collected it originally.</Text>

        <Clear />
        <PageHeading>Access and update</PageHeading>
        <Text>You have the right to request access to the Personal Data we hold about you. You may request that we rectify or delete the Personal Data or restrict the processing of your Personal Data, if you think they are inaccurate. Furthermore, you have the right to object against the processing of your data and even ask us for your data in a portable format. We will asses and act on your request, subject to the exceptions, set out in applicable law.</Text>

        <Clear />
        <PageHeading>Transfer of data</PageHeading>
        <Text>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</Text>
        <Text>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</Text>

        <Clear />
        <PageHeading>Crash logs</PageHeading>
        <Text>
        If the app crashes while you're using it, anonymized data about the crash may be collected to help us identify the cause of the crash, so we can hopefully fix it in a future update. These "crash logs" contain information such as the state of the app, operating system, and device at the time of the crash. None of this data can identify you in any way.
        </Text>

        <Clear />
        <PageHeading>Updates</PageHeading>
        <Text>The application may update automatically once a new version or features become available to you. </Text>

        <Clear />
        <PageHeading>Third-party vendors</PageHeading>
        <Text>We use a limited third-party vendor services, for certain activities at Unboxd.</Text>
        <List>
          <li>Flutterwave: Payment processing.</li>
          <li>MailChimp: Handling of contact forms submissions.</li>
          <li>Github: Handling issues. Customer information may pass through this service as customer support processes occur.</li>
          <li>Slack: Communication tool we use internally. Customer information may pass through this service as customer support processes occur.</li>
        </List>

        <Clear />
        <PageHeading>Children's information</PageHeading>
        <Text>Unboxd does not knowingly collect any Personal Identifiable Information from children under the age of 16. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</Text>

        <Clear />
        <PageHeading>Links to other sites</PageHeading>
        <Text>Our site may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</Text>
        <Text>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</Text>

        <Clear />
        <PageHeading>Changes to Privacy Policy</PageHeading>
        <Text>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</Text>
        <Text>By using our website, you hereby consent to our Privacy Policy.</Text>
        <Text>Thank you for reading our Privacy Policy.</Text>
      </div>
    </MarketingLayout>
  );
};

export default Privacy;
