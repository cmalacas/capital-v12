export default function TopBar() {

    return (

        <div className="topbar">
            <div className="top-header-angle">
                <div className="top-header-angle-shape"></div>
            </div>
            
            <div className="container">
                <div className="top-header-inner">
                    <div className="top-header-list">
                        <div className="top-header-item">
                            <div className="top-header-contact">
                                <img 
                                    src="https://cdn.prod.website-files.com/651c10334cdb8c891f1cdf02/65322b8abde43d64e59ef998_phone-call.svg" 
                                    loading="lazy" 
                                    alt="" 
                                    className="top-header-contact-icon" />
                                    
                                <div className="top-header-contact-label">Call our team</div>
                                <div className="top-header-contact-value">+44 (0) 207 566 3939</div>
                            </div>
                        </div>
                        
                        <div className="top-header-item hide-mob">
                            <a 
                                href="mailto:&zwj;info@capital-office.co.uk?subject=Quick%20Contact" 
                                className="top-email-btn outline-btn">Email Us</a>
                        </div>
                        
                        <div className="top-header-item hide-mob">
                            <a 
                                href="/pricing#package-table-sec" 
                                className="top-email-btn teal-border">View Packages</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>        

    )
}