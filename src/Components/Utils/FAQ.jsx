import React from 'react';
import Faq from "react-faq-component";

const data = {
    // title: "FAQ (How it works)",
    rows: [
        {
            title: "What is PorkSwap?",
            content: `PorkSwap is a decentralized platform for spot and futures trading. You can trade any BEP-20 tokens on Binance Smart Chain. It eliminates trusted intermediaries and unnecessary forms of rent extraction, allowing for fast, efficient trading. Porkswap will be open-source under GPL license.`,
        },
       
        {
            title: "How do I use PorkSwap?",
            content:
                "First you’ll need a Binance Smart Chain Wallet and some BNB. Once completed, head over to the app to start using the platform to provide liquidity to spot or leverage pool and place orders. Remember that each transaction on BSC costs BNB (this is called the “gas fee” and it’s paid to miners to keep the network running).",
        },
        {
            title: "How does Spot Trading Work?",
            content: `PorkSwap uses an improved version of Uniswap's automated market maker protocol by utilizing liquidity pools.

            In practical terms this means there are template smart contracts that define a standard way to make liquidity pools and corresponding markets that are compatible with each other. There is no orderbook, no centralized party and no central facilitator of trade. Each pool is defined by a smart contract that includes a few functions to enable swapping tokens, adding liquidity and more. At its core each pool uses the function x*y=k to maintain a curve along which trades can happen. The pools keep track of reserves(liquidity) and update those reserves every single time someone trades. Because the reserves are automatically rebalanced a Porkswap pool can always be used to buy or sell a token without requiring a counterparty on the other side of your trade. `,
        },
        {
            title: "How does Futures Trading Work?",
            content: `PorkSwap uses oracles for determining real-time price of tokens, which then can be leveraged by borrowing liquidity from the lending pool. You can leverage a trade up to 5X, when you use leverage, you're given Proxy tokens which can later be exchanged to real underlying tokens when you close a leveraged trade.

            Borrowing funds cost around 2.4% interest per day, if you provide liquidity to the lending pool you make 2.4% on funds borrowed from you.
            
            To reward initial liquidity providers, we tend to prioritize funds on a first-come first serve basis.
            
            Since primary input to oracle is current spot platform pricing, that is refreshed on each trade and new block mined when your futures trade hits the liquidation price the smart contract automatically liquidates and closes your position and returns borrowed funds back to the lending pool.`,
        },
        {
            title: "How are prices determined?",
            content: `Prices are determined by the amount of tokens against liquidity in each pool. The smart contract maintains a constant using the following formula: price = liquidity / tokens. In this case liquidity = base token, y = trading token.

            For each trade a certain amount of tokens are removed from the pool for an amount of the other token. To maintain price, the balances held by the smart contract are adjusted during the execution of the trade and each block mined, therefore changing the price`,
        },
        {
            title: "How can I add a token to PorkSwap?",
            content: `Porkswap is compatible with any BEP-20 token in the Binance Smart Chain ecosystem. If you want your project to be searchable in the platform interface you should seek to be added to a reputable token list or share a link to your token using query parameters. Once loaded via link, the token will be added to the user's interface.

            Another option is to open a request using github issues.
            
            The PorkSwap team makes no guarantees or provides any timeline. Nor will the team ever charge or request funds. We’ve added many UX features to make it easier to share a new token with communities like local storage support and custom linking. Please make use of them.`,
        },
        {
            title: "What tokens will be available for leveraged trading?",
            content: `PorkSwap will be listing Binance-Pegged: ETH, Wrapped BNB, ADA, BUSD-T, DOT, XRP, UNI, LTC, LINK BCH, USDC/

            The trading will only happen when there's enough liquidity on the spot platform for each token. `,
        },
        {
            title: "How to participate in the PSWAP token airdrop?",
            content: `To celebrate the launch of Porkswap protocol, 6685 PSWAP tokens will be distributed to lucky 1337 participants, who have traded at least once on Pancakeswap.

            PSWAP tokens tokens before public listing will be distributed at value of $10 per token.
            
            To quality for airdrop you need:
            
            Wallet address that has traded on Pancakeswap first in its lifetime Follow our official Twitter account Submit your wallet address and twitter through this form.`,
        },
        {
            title: "Where will the PSWAP token be listed?",
            content: `Initial liquidity tokens will be used to create a trading pool on Pancakeswap on April 15, 2021 at 7:00 AM (UTC). The listing price will be $10 USD in BNB per PSWAP.

            PorkSwap team will gradually increase the number of available exchanges to list PSWAP including centralized exchanges.`,
        },
        {
            title: "How will the token sale funds be used?",
            content: `In order to create an initial liquidity for spot and futures traders and accelerate the development of the platform, the team decided to do a public sale.

            To promote and bring adoption to the PorkSwap protocol 100% of the total raised funds will be used to provide liquidity on PancakeSwap, platform , growth hacking, security audit and for BNB lending pool. 10% will be kept as a reserve for a further expansion of the platform.`,
        },
        {
            title: "How 50% reserved tokens will be distributed?",
            content: `50% (500,000) of the total token supply will be reserved to reward liquidity providers.

            Reserved tokens will be distributed to the platform liquidity providers as additional reward on top of their fees earnings over a period of 18 months ( can be voted to bring it short).`,
        },
        {
            title: "What are the platform fees?",
            content: `The platform charges 0.2% in transaction fees for spot swaps. 0.15% will be reward to the liquidity pool. 0.05% will be used to buy and burn PSWAP tokens

            The platform charges 5% of net profit made by trading futures, calculated in BNB. For example, if a trader buys a token for 10 BNB with 5X leverage (50 BNB in total) and the token’s price increases by 10%, then the trader’s gross profit is 1.1*50 – 40 BNB (borrowed) = 10 BNB. Suppose, the cost of capital was 0.5 BNB, so the net profit will be 9.5 BNB. The protocol fees will be 0.05*9.5 = 0.475 BNB.
            
            65% of this amount will be used to buy and burn PSWAP tokens. 35% will go to the insurance fund.`,
        },
        {
            title: "What is the insurance fund?",
            content: `The insurance fund is protocol to cover liquidity providers in case of impermanent loss.

            In the future using governance, PSWAP token holders will have a right to manage insurance fund's assets and may decide to use part of the fund for better good.`,
        },
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    // rowContentColor: 'grey',
    
    // arrowColor: "red",
};

const config = {
    // animate: true,
    arrowIcon: "V",
    // tabFocus: true
};


function FAQ() {
  return (
    <div className='comparison-bg '>
        <div className="container py-5 " >
            <div >

        <Faq className='faq'
        
        data={data}
        styles={styles}
        config={config}
        />
            
        </div>
       
        </div>

    </div>
  )
}

export default FAQ