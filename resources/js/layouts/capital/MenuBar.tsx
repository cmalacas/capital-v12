export default function MenuBar() {

    return (

        <div data-collapse="medium" 
            data-animation="default" 
            data-duration="400" 
            data-easing="ease" 
            data-easing2="ease"
            role="banner" 
            className="navbar w-nav">
          <div className="container">
            <a href="https://www.yourvirtualofficelondon.co.uk/" aria-current="page"
                className="brand-logo w-nav-brand w--current">
                <img src="https://uploads-ssl.webflow.com/6061bca8343bd7394f600454/606c60e8a408bf29987db0aa_logo.png"
                loading="lazy" alt="Capital Office logo" />
            </a>
        
            <nav role="navigation" className="nav-menu w-nav-menu">
                <a 
                  href="https://www.yourvirtualofficelondon.co.uk/" 
                  aria-current="page"
                  className="navlink home w-nav-link w--current">Home</a>
          
                <a 
                  href="https://www.yourvirtualofficelondon.co.uk/pricing" 
                  className="navlink w-nav-link">Pricing</a>

                <div data-hover="true" data-delay="0" className="w-dropdown">
                  <div className="navlink w-dropdown-toggle">
                    <div className="icon w-icon-dropdown-toggle"></div>
                    <div>Services</div>
                  </div>
            
                  <nav className="mega-menu w-dropdown-list">
                    <div className="w-row">
                      <div className="nopad w-col w-col-3 w-col-medium-6 w-col-small-small-stack">
                        <h4 className="mega-menu-header">Address Services</h4>
                        
                        <a href="https://www.yourvirtualofficelondon.co.uk/services/registered-office-address"
                        className="dropdown-link w-dropdown-link">Registered Office</a>
                        
                        <a href="https://www.yourvirtualofficelondon.co.uk/services/mail-forwarding-service" 
                        className="dropdown-link w-dropdown-link">London Office Address</a>

                        <a href="https://www.yourvirtualofficelondon.co.uk/services/directors-address"
                        className="dropdown-link w-dropdown-link">Officers Service Address London</a>
                      </div>

                      <div className="nopad w-col w-col-3 w-col-medium-6 w-col-small-small-stack">
                        <h4 className="mega-menu-header">Call Answering</h4>
                        <a href="https://www.yourvirtualofficelondon.co.uk/services/voicemail-service"  className="dropdown-link w-dropdown-link">Voicemail Only Service</a>

                        <a href="https://www.yourvirtualofficelondon.co.uk/services/call-answering-service"  className="dropdown-link w-dropdown-link">Call Answering Service</a>

                        <h4 className="mega-menu-header">Virtual Office</h4>

                        <a href="https://www.yourvirtualofficelondon.co.uk/services/virtual-office-service"  className="dropdown-link w-dropdown-link">Complete Virtual Office</a>
                      </div>

                      <div className="nopad w-col w-col-3 w-col-medium-6 w-col-small-small-stack">
                        
                        <h4 className="mega-menu-header">Company Formation</h4>
                        
                        <a href="https://www.yourvirtualofficelondon.co.uk/services/online-limited-company-formation"  className="dropdown-link w-dropdown-link">Limited Company Formation</a>

                        <a href="https://www.yourvirtualofficelondon.co.uk/services/llp-company-formation-service" className="dropdown-link w-dropdown-link">LLP Company Formation</a>

                        <a href="https://www.yourvirtualofficelondon.co.uk/services/ltd-by-guatrantee-company-formation" className="dropdown-link w-dropdown-link">Ltd By Guarantee Company Formation</a>
                      </div>

                      <div className="nopad w-col w-col-3 w-col-medium-6 w-col-small-small-stack">
                        <h4 className="mega-menu-header">Other Services</h4>
                        <a href="https://www.yourvirtualofficelondon.co.uk/services/meeting-room-hire-london" className="dropdown-link w-dropdown-link">Meeting Room Hire London</a>

                        <a href="https://www.yourvirtualofficelondon.co.uk/services/business-accounting-service" className="dropdown-link w-dropdown-link">Business Accounting</a>

                        <a href="https://www.yourvirtualofficelondon.co.uk/services/get-a-uk-business-bank-account" className="dropdown-link w-dropdown-link">Free Business Banking</a>

                        <a href="https://www.yourvirtualofficelondon.co.uk/services/uk-business-website-design" className="dropdown-link w-dropdown-link">UK Business Webdesign</a>
                      </div>
                    </div>
                  </nav>
                </div>

                <div data-hover="true" data-delay="0" className="w-dropdown">
                  <div className="navlink w-dropdown-toggle">
                    <a href="https://www.yourvirtualofficelondon.co.uk/faqs" className="navlink-drop w-inline-block">
                      <div className="icon w-icon-dropdown-toggle"></div>
                      <div>FAQs</div>
                    </a>
                  </div>

                  <nav className="dropdown-list w-dropdown-list">
                    <a href="https://www.yourvirtualofficelondon.co.uk/about-us"
                    className="dropdown-link single w-dropdown-link">About Us</a>

                    <a href="https://www.yourvirtualofficelondon.co.uk/contact-capital-office"
                    className="dropdown-link single w-dropdown-link">Contact Us</a>
                  </nav>
                </div>

                <a href="https://www.yourvirtualofficelondon.co.uk/blog" className="navlink w-nav-link">Blog</a>

                <a href="https://www.yourvirtualofficelondon.co.uk/resource-centre" className="navlink w-nav-link">Resource Centre</a>

                <a href="https://admin.capital-office.co.uk/login" className="navlink w-nav-link">Login</a>
              </nav>
            
              <div className="menu-button w-nav-button">
                <div className="w-icon-nav-menu"></div>
              </div>
            </div>
          </div>

    )

}