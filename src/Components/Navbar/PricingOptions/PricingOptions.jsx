import React, { use } from 'react';
import PricingCard from '../../PricingCard/PricingCard';

const PricingOptions = ({pricingPromise}) => {

    const PricingData= use(pricingPromise);
    // console.log(pricingPromise);

    return (
        <div>
            <h2 className='text-4xl'>Get our Membership</h2>
            <div className='grid md:grid-cols-3 gap-4'>
                {
                    PricingData.map(pricing=> <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;