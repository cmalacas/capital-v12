import CompaniesHouseSvg from '@/images/companies-house.svg';
import SafeNSecure from '@/images/safe-n-secure.svg';
import TrustPilot from '@/images/trustpilot.svg';
import Stripe from '@/images/stripe-3.svg';
import google from '@/images/google-2015.svg';
import paypal from '@/images/paypal-3.svg';
export default function FooterLogos() {

    return (

        <div className="section footer pb-0">
            <div className="container">
                <div className="logos">
                    <div>
                        <img src={SafeNSecure} />
                    </div>
                    <div>
                        <img src={TrustPilot} />
                    </div>
                    <div>
                        <img src={ CompaniesHouseSvg } />
                    </div>
                    <div>
                        <img src={Stripe} />
                    </div>
                    <div>
                        <img src={google} />
                    </div>
                    <div>
                        <img src={paypal} />
                    </div>
                </div>
            </div>
        </div>

    )

}