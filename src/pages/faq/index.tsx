import HeroTemplate from '@components/Hero';
import Faq from '@components/home/Faq';
import Image from '@components/primitives/image';
import PageLayout from '@layout/page';

const generalFaq = [
  {
    id: 0,
    title: 'What is Safekeep',
    content: `SafeKeep is a mobile and web blockchain application that provides easy back-up and recovery of crypto
        assets. It also allows for legacy inheritor(s) to be assigned crypto assets kept in the Safekeep
        vault. - MVP and project deliverables <br /> <br />
        In the long run, we intend to develop safekeep finance up to become a blockchain powerhouse that
        offers it users the ability to Store, Trade, send and recieve Blockchain assets ranging from Crypto,
        Nfts, Tokens etc as well as a platforms to Swap and Bridge Assets alongside the Vault feature.
    `,
  },
  {
    id: 1,
    title: 'How do i Protect my wallet',
    content: `SafeKeep is a mobile and web blockchain application that provides easy back-up and recovery of crypto
    assets. It also allows for legacy inheritor(s) to be assigned crypto assets kept in the Safekeep
    vault. - MVP and project deliverables <br /> <br />`,
  },
  {
    id: 2,
    title: 'How do i recover my crypto if i loose my key phrase',
    content: `SafeKeep is a mobile and web blockchain application that provides easy back-up and recovery of crypto
    assets. It also allows for legacy inheritor(s) to be assigned crypto assets kept in the Safekeep
    vault. - MVP and project deliverables <br /> <br />`,
  },
];

const FaqPage = () => {
  return (
    <div>
      <HeroTemplate>
        <div>
          <p>FAQS'</p>
          <h1>Top questions about safekeep finance.</h1>

          <p>Safekeep Customer Support is online 24/7 to help with your needs.</p>
        </div>
        <div>
          <Image src="cube-faq.svg" width={300} height={300} />
        </div>
      </HeroTemplate>
      <PageLayout className="p-4">
        <div className="flex flex-wrap pt-12  lg:flex-nowrap justify-between">
          <div className="lg:w-1/2 safe-darky p-3  font-paralucentMedium lg:text-[40px] text-2xl">General FAQs</div>
          <div>
            {' '}
            <Faq showTitle={false} data={generalFaq} />
          </div>
        </div>
      </PageLayout>

      <PageLayout className="p-4">
        <div className="flex flex-wrap pt-12  lg:flex-nowrap justify-between">
          <div className="lg:w-1/2 safe-darky p-3  font-paralucentMedium lg:text-[40px] text-2xl">Transaction FAQs</div>
          <div>
            {' '}
            <Faq showTitle={false} data={generalFaq} />
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default FaqPage;
