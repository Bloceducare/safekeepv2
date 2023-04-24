import PageLayout from '@layout/page';

const privacyData = {
  intro: `Thank you for choosing to be part of our community at Safekeep Finance, Inc. (“Safekeep”, "Company", "we", "us", "our"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this Privacy Policy, or our practices with regards to your personal information, please contact us at support@safekeep.co.<br /> <br />
    This Privacy Policy applies to our website https://safekeep.co (the "Website"), use of our mobile applications, as the case may be (each, an "App"), and any other feature, widget or other online service that is owned or controlled by us (each, including the Website and any App, each a “Channel”), that posts a link to this Privacy Policy and by Safekeep offline. We appreciate that you are trusting us with your personal information. We take your privacy very seriously. In this Privacy Policy, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this Privacy Policy that you do not agree with, please discontinue use of our Channels immediately.,
    <br /> <br />
    This Privacy Policy applies to all information collected through our Channels (which, as described above, includes our Website and App), as well as, any related services, sales, marketing or events.Please read this Privacy Policy carefully as it will help you understand what we do with the information that we collect.`,
  table: [
    'What Information Do We Collect?',
    'How Do We Use Your Information?',
    'Will Your Information Be Shared With Anyone?',
    'Do We Use Cookies and Other Tracking Technologies?',
    'How Do We Handle Your Social Logins?',
    'What Is Our Stance On Third-party Websites?',
    'How Long Do We Keep Your Information?',
    'How Do We Keep Your Information Safe?',
    'Do We Collect Information From Minors?',
    'What Are Your Privacy Rights?',
    'Your Privacy and Online Advertising and Analytics Providers',
    'Controls For Do-not-track Features',
    'Consent To Transfer and Storage In The United States',
    'Sweepstakes, Contests and Promotions',
    'Do California Residents Have Specific Privacy Rights?',
    'Do Nevada Residents Have Specific Privacy Rights?',
    'Do We Make Updates To This Notice?',
    'How Can You Contact Us About This Notice?',
    'How Can You Review, Update or Delete The Data We Collect From You?',
  ],
   body: `Thank you for choosing to be part of our community at Safekeep Finance, Inc. (“Safekeep”, "Company", "we", "us", "our"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this Privacy Policy, or our practices with regards to your personal information, please contact us at support@safekeep.co.
 <br /> <br />
   This Privacy Policy applies to our website https://safekeep.co (the "Website"), use of our mobile applications, as the case may be (each, an "App"), and any other feature, widget or other online service that is owned or controlled by us (each, including the Website and any App, each a “Channel”), that posts a link to this Privacy Policy and by Safekeep offline. We appreciate that you are trusting us with your personal information. We take your privacy very seriously. In this Privacy Policy, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this Privacy Policy that you do not agree with, please discontinue use of our Channels immediately.
   <br /> <br />
   This Privacy Policy applies to all information collected through our Channels (which, as described above, includes our Website and App), as well as, any related services, sales, marketing or events.Please read this Privacy Policy carefully as it will help you understand what we do with the information that we collect.`,
};

const TermsView = () => {
  return (
    <PageLayout className="mt-16 max-w-4xl px-4 mx-auto text-justify  leading-10">
      <div className="text-center">
        <div className="text-center pill-btn-grey inline-block font-dmSans">Terms & conditions</div>
      </div>

     

      <div className="mb-8">
        <p className="text-[#000] font-paralucentMedium text-2xl my-2">What Information Do We Collect?</p>
        <div className="mt-2 p-3 font-dmSans" dangerouslySetInnerHTML={{ __html: privacyData.body }} />
      </div>
    </PageLayout>
  );
};

export default TermsView;
