import { navData } from '../data';
import { Socials } from '../components';

const NavMobile = () => {
  // destructure navData
  const { items } = navData;

  return (
    <nav className="w-full h-full flex flex-col justify-evenly overflow-hidden">
      <ul className="flex flex-col justify-center items-center gap-y-6 py-6 mb-8">
        {items.map((item, index) => {
          return <li key={index}>
            <a href={item.href} className="text-2xl font-primary uppercase">{item.name}</a>
          </li>
        })}
      </ul>
      <div className="text-2xl">
        <Socials />
      </div>
    </nav>
  );
};

export default NavMobile;
