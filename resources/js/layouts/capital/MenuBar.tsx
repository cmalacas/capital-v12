import TopLogo from '@/layouts/capital/TopLogo';
import Menus from '@/layouts/capital/Menu';
export default function MenuBar() {

    return (

      <div className="navbar w-nav">

        <div className="container">

          <div className="navbar-inner">

            <TopLogo />

            <Menus />

          </div>

        </div>


      </div>

    );
  }
