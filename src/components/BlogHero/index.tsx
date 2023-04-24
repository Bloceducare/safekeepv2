import HeroTemplate from '@components/Hero';
import Button from '@components/primitives/button';
import Image from '@components/primitives/image';
import { ArrowRightIcon } from '@radix-ui/react-icons';

const BlogHero = () => {
  return (
    <div>
      <HeroTemplate>
        <div>
          <p>Recent post</p>
          <h1>Safekeep’s Partnership to Expand Interoperability of Polygon main Supernets.</h1>
          <p>
            In keeping with Nexo’s impeccable track record for transparency and our promise to provide regular progress
            report
          </p>

          <Button onlyBtn type="outline" className="flex items-center mt-6">
            Turn to page
            <ArrowRightIcon className="ml-3 " />
          </Button>
        </div>
        <div className="relative">
          <div className="">
            <Image width={380} height={300} src="/blog-two.svg" alt="Blog Image" />
          </div>
        </div>
      </HeroTemplate>
    </div>
  );
};

export default BlogHero;
