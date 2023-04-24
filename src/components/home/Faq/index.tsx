import AnimatedSection from '@components/AnimatedSetion';
import AngleDown from 'assets/images/Faq/angle-down.svg';

const defaultData = [
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
    title: ' How do i Protect my wallet',
    content: `SafeKeep is a mobile and web blockchain application that provides easy back-up and recovery of crypto
    assets. It also allows for legacy inheritor(s) to be assigned crypto assets kept in the Safekeep
    vault. - MVP and project deliverables <br /> <br />
    In the long run, we intend to develop safekeep finance up to become a blockchain powerhouse that
    offers it users the ability to Store, Trade, send and recieve Blockchain assets ranging from Crypto,
    Nfts, Tokens etc as well as a platforms to Swap and Bridge Assets alongside the Vault feature.
`,
  },
];

const Faq = ({ data = defaultData, showTitle = true }) => {
  return (
    <AnimatedSection>
      <div
        className={`relative max-w-[1026px] w-full  mx-auto flex flex-col text-black ${
          showTitle ? 'px-8 lg:px-9' : ''
        }`}
      >
        {showTitle && (
          <div className="text-center mb-14">
            <p className="font-paralucentMedium text-4xl leading-[48px] lg:text-[69px] lg:leading-[83px] text-safekeep-blue">
              FAQ
            </p>
            <p className="safe-darky font-dm">All the important questions you want answered, fast.</p>
          </div>
        )}

        <div className="">
          <div className="accordion-group">
            {data.map((faq) => (
              <AnimatedSection key={faq.id}>
                <div className="accordion">
                  <input type="checkbox" id={String(faq.id)} className="accordion-toggle" />
                  <label
                    for={faq.id}
                    className="accordion-title text-2xl leading-[58px] font-paralucentMedium border-0"
                    style={{
                      background: 'linear-gradient(206.51deg, #01A0FF -0.2%, #0123F7 130.88%)',
                      //   @ts-ignore
                      '-webkit-background-clip': ' text',
                      '-webkit-text-fill-color': 'transparent',
                      'background-clip': 'text',
                      'text-fill-color': 'transparent',
                      borderTop: '2px solid #E6F1FF',
                    }}
                  >
                    {faq.title}
                  </label>
                  <span className="accordion-icon">
                    <AngleDown />
                  </span>
                  <div className="accordion-content text-content2 font-polySansTrial font-light text-lg">
                    <div className="min-h-0">
                      <div dangerouslySetInnerHTML={{ __html: faq.content }} />
                      SafeKeep is a mobile and web blockchain application that provides easy back-up and recovery of
                      crypto assets. It also allows for legacy inheritor(s) to be assigned crypto assets kept in the
                      Safekeep vault. - MVP and project deliverables <br /> <br />
                      In the long run, we intend to develop safekeep finance up to become a blockchain powerhouse that
                      offers it users the ability to Store, Trade, send and recieve Blockchain assets ranging from
                      Crypto, Nfts, Tokens etc as well as a platforms to Swap and Bridge Assets alongside the Vault
                      feature.
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Faq;
