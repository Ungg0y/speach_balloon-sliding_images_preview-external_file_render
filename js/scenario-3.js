var scenario3 = new Object();
scenario3.top = new Object();
scenario3.setup = new Object();
scenario3.level1 = new Object();
scenario3.level2 = new Object();
scenario3.ask = new Object();

scenario3.choice = {
    choice1: 'Finance',
    choice2: 'Pharma'
};
scenario3.setup = {
    conversation:[
        {
            response: '',
            salesRep: 'Where are you on your cloud migration project?  Tell us about your overall security posture of sensitive data in the Cloud…',
            customer: 'We have fully migrated to Office 365. Any applications that we develop are built in AWS. We are interested in mitigating risk to our sensitive Data in the Cloud. How can you help us?',
            choice1: '',
            choice2: '',
            salesRepAudio: 'S3RepB6.mp3',
            customerAudio: 'S3CustC7.mp3',
            choice1Audio: 'blank.mp3',
            choice2Audio: 'blank.mp3',
        }
    ]
};
scenario3.top = {
    conversation:[
        {
            response: 'good',
            salesRep: 'Partner Tells you not to bother as they already have implemented "built-in" security features and are not interested in a CASB.',
            customer: '',
            choice1: 'Offer to help the partner understand why &quot;built-in&quot; security features are likely not enough for an enterprise customer. Perhaps they can help you get to other relevant personas in the account.',
            choice2: 'Offer to help the partner understand why &quot;built-in&quot; security features are likely not enough for an enterprise customer. Perhaps they can help you get to other relevant personas in the account.',
            salesRepAudio: 'blank.mp3', //'S3NarrF5.mp3',
            customerAudio: 'blank.mp3',
            choice1Audio: 'S3NarrH5I5.mp3',
            choice2Audio: 'S3NarrH5I5.mp3',
            image: 'help-desk.svg'
        },{
            response: 'best',
            salesRep: 'You get an email from a VP of Risk management that you met at an AWS trade show, asking for help with compliance in their AWS Cloud. You get the meeting in person with them',
            customer: '',
            choice1: '',
            choice2: '',
            salesRepAudio: 'blank.mp3', //'S3NarrB5.mp3',
            customerAudio: 'blank.mp3',
            choice1Audio: 'blank.mp3',
            choice2Audio: 'blank.mp3',
            image: 'cloud-se.svg'
        },{
            response: 'bad',
            salesRep: 'Your customer hires a new security analyst for endpoint and you try to setup a cloud security meeting with them',
            customer: 'New Security Analyst: &quot;I&apos;m in the middle of getting ramped with New Hire and am drinking form the fire hose! I don&apos;t have time to do my regular job let alone worry about cloud security!&quot;',
            choice1: 'This choice is likely NOT the right way to find out about cloud security within the account. The desktop/server team probably wont have much to do with it. However, you might want to circle back with his person and do a lunch and learn on UCE which includes endpoint.',
            choice2: 'This choice is likely NOT the right way to find out about cloud security within the account. The desktop/server team probably wont have much to do with it. However, you might want to circle back with his person and do a lunch and learn on UCE which includes endpoint.',
            salesRepAudio: 'blank.mp3', //'S3NarrJ5.mp3', -
            customerAudio: 'blank.mp3',
            choice1Audio: 'S3NarrL5M5.mp3',
            choice2Audio: 'S3NarrL5M5.mp3',
            image: 'marketing-manager.svg'
        }
    ]
};
scenario3.level1 = {
    conversation:[
        {
            response: 'best',
            salesRep: 'With regards to your AWS environment, how many AWS accounts do you have and who secures them?',
            customer: 'We have 50 AWS accounts and our developers are managing everything including security.',
            choice1: '',
            choice2: '',
            salesRepAudio: 'blank.mp3', //'S3RepB8.mp3',
            customerAudio: 'S3CustC8.mp3',
            choice1Audio: 'blank.mp3',
            choice2Audio: 'blank.mp3',
        },
        {
            response: 'good',
            salesRep: 'We just came out with a new product offering called UCE. Let&apos;s get my SE in here and we present a slide deck plus live Demo to show it to you.',
            customer: 'That&apos;s great, we&apos;ll take the meeting but we really need to know more about how your solution can mitigate risk for us in the Cloud',
            choice1: 'Listen to the Customer instead of trying to show the latest and greatest. If they tell you they&apos;re interested in Risk Mitigation, explain how we do this with Shadow IT, ODS&apos;s, NRT DLP, etc.',
            choice2: 'Listen to the Customer instead of trying to show the latest and greatest. If they tell you they&apos;re interested in Risk Mitigation, explain how we do this with Shadow IT, ODS&apos;s, NRT DLP, etc.',
            salesRepAudio: 'blank.mp3', //'S3RepF8.mp3',
            customerAudio: 'S3CustG8.mp3',
            choice1Audio: 'S3NarrH8I8.mp3',
            choice2Audio: 'S3NarrH8I8.mp3',
        },
        {
            response: 'bad',
            salesRep: 'I really don&apos;t know that much about our Cloud Security products, I&apos;ll need to schedule a call with one of our Specialists. Let me get back to you…',
            customer: 'I&apos;m sorry, but I really can&apos;t wait. Your competition has already done a high level demo and is scheduling a POC. If you&apos;re not ready, we&apos;ll have to pass. Sorry.',
            choice1: 'AS a McAfee Account Manager, you need to be prepared to talk about the &quot;Device to Cloud&quot; vision of the company. Go back and review the Sales Boosts, Cloud Boosts and Quizzes presented over the last few months.',
            choice2: 'AS a McAfee Account Manager, you need to be prepared to talk about the &quot;Device to Cloud&quot; vision of the company. Go back and review the Sales Boosts, Cloud Boosts and Quizzes presented over the last few months.',
            salesRepAudio: 'blank.mp3', //'S3RepJ8.mp3',
            customerAudio: 'S3CustK8.mp3',
            choice1Audio: 'S3NarrL8M8.mp3',
            choice2Audio: 'S3NarrL8M8.mp3',
        }
    ]
};
scenario3.level2 = {
    conversation:[
        {
            response: 'good',
            salesRep: 'Could we schedule a meeting with the Developers around Cloud Security?',
            customer: 'That&apos;s fine by me, but you might have trouble getting on their Calendar. EOY is coming fast and they have multiple deadlines to meet before then.',
            choice1: 'Instead of meeting with the Developers, try to get higher in the org so that there is less push back on adopting new platforms like &amp;lt;span class=&quot;red-text&quot;&amp;gt;M&amp;lt;/span&amp;gt;VISION Cloud.',
            choice2: 'Instead of meeting with the Developers, try to get higher in the org so that there is less push back on adopting new platforms like &amp;lt;span class=&quot;red-text&quot;&amp;gt;M&amp;lt;/span&amp;gt;VISION Cloud.',
            salesRepAudio: 'blank.mp3', //'S3RepF9.mp3',
            customerAudio: 'S3CustG9.mp3',
            choice1Audio: 'S3NarrH9I9.mp3',
            choice2Audio: 'S3NarrH9I9.mp3',
        },
        {
            response: 'bad',
            salesRep: 'I can talk to my Manager and get you the Deal of the Century on a 3 year license of <span class="red-text">M</span>VISION Cloud For Office 365!',
            customer: 'Wow Okay, what kind of numbers are we talking about, maybe I can fit it in my current budget.',
            choice1: 'You don&apos;t understand the customers required capabilities yet, therefore you have not established value/PBO&apos;s they will receive by using our product. They will only buy on price and likely never renew as they may not see value in what you are trying to deliver.',
            choice2: 'You don&apos;t understand the customers required capabilities yet, therefore you have not established value/PBO&apos;s they will receive by using our product. They will only buy on price and likely never renew as they may not see value in what you are trying to deliver.',
            salesRepAudio: 'blank.mp3', //'S3RepJ9.mp3',
            customerAudio: 'S3CustK9.mp3',
            choice1Audio: 'S3NarrL9M9.mp3',
            choice2Audio: 'S3NarrL9M9.mp3',
        },{
            response: 'best',
            salesRep: 'How do you manage visibility and control of sensitive data in your cloud services? How do you hold your developers accountable for the security of your companies most important assets in the cloud?',
            customer: 'We have been trusting the developers, but recently we had an issue with Data exfiltration due to some wide open S3 buckets',
            choice1: '',
            choice2: '',
            salesRepAudio: 'blank.mp3', //'S3RepB9.mp3',
            customerAudio: 'S3CustC9.mp3',
            choice1Audio: 'blank.mp3',
            choice2Audio: 'blank.mp3',
        }
    ]
};
scenario3.ask = {
    conversation:[
        {
            response: 'best',
            salesRep: 'Would you be willing to help me in setting up a Cloud Discovery Session with the right people in your company to identify your critical use cases for Cloud Security and to help your organization come up with a plan for addressing them?',
            customer: 'Sounds great! Who would you like from my company for me to invite?',
            choice1: '',
            choice2: '',
            salesRepAudio: 'blank.mp3', //'S3RepB10.mp3',
            customerAudio: 'S3CustC10_A.mp3',
            choice1Audio: 'blank.mp3',
            choice2Audio: 'blank.mp3',
        }
    ]
};