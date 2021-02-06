var scenario2 = new Object();
scenario2.top = new Object();
scenario2.setup = new Object();
scenario2.level1 = new Object();
scenario2.level2 = new Object();
scenario2.ask = new Object();

scenario2.choice = {
    choice1: 'Healthcare',
    choice2: 'Retail'
};
scenario2.setup = {
    conversation:[
        {
            response: '',
            salesRep: 'Where are you on your cloud Journey?  What cloud Services do you use  or are planning to use?',
            customer: 'We have just started to deploy in production, after our Cloud pilot program was so successful.',
            choice1: '',
            choice2: '',
            salesRepAudio: 'S2RepB6.mp3',
            customerAudio: 'S2CustC7.mp3',
            choice1Audio: 'blank.mp3',
            choice2Audio: 'blank.mp3',
        }
    ]
};
scenario2.top = {
    conversation:[
        {
            response: 'good',
            salesRep: 'You get a call from a partner sales rep saying there is interest in one of your accounts.  They want to schedule a bake off between you an another vendor.',
            customer: '',
            choice1: 'This is a good start that there is interest, but before you engage in a POC, you need to find out required capabilities, use cases, and success criteria. This is the only way to ensure success in a POC.',
            choice2: 'This is a good start that there is interest, but before you engage in a POC, you need to find out required capabilities, use cases, and success criteria. This is the only way to ensure success in a POC.',
            salesRepAudio: 'blank.mp3', //'S2NarrF5.mp3', -
            customerAudio: 'blank.mp3',
            choice1Audio: 'S2NarrH5I5.mp3',
            choice2Audio: 'S2NarrH5I5.mp3',
            image: 'help-desk.svg'
        },{
            response: 'bad',
            salesRep: 'You email the CISO weekly asking for a meeting on cloud security',
            customer: '',
            choice1: 'This may not be a great idea, as a blind email to the CISO often does not work.  They get many vendor emails daily.  May want to start with someone you have a relationship with and tailor this communication directly to how you have helped healthcare companies.',
            choice2: 'This may not be a great idea, as a blind email to the CISO often does not work.  They get many vendor emails daily.  May want to start with someone you have a relationship with and tailor this communication directly to how you have helped retail companies.',
            salesRepAudio: 'blank.mp3', //'S2NarrJ5.mp3',
            customerAudio: 'blank.mp3',
            choice1Audio: 'S2NarrL5.mp3',
            choice2Audio: 'S2NarrM5.mp3',
            image: 'cloud-se.svg'
        },{
            response: 'best',
            salesRep: 'You have a meeting with the CISO for an endpoint update program and you expand the conversation and perform some discovery for cloud.',
            customer: '',
            choice1: '',
            choice2: '',
            salesRepAudio: 'blank.mp3', //'S2NarrB5.mp3', -
            customerAudio: 'blank.mp3',
            choice1Audio: 'blank.mp3',
            choice2Audio: 'blank.mp3',
            image: 'marketing-manager.svg'
        }
    ]
};
scenario2.level1 = {
    conversation:[
        {
            response: 'bad',
            salesRep: 'Would you like a quote for <span class="red-text">M</span>VISION Cloud?',
            customer: 'We have committed our budget for the year already. We will have to get back you after we start our new budgets for next year, in six to nine months.',
            choice1: 'It&apos;s good that you are asking for an order, however you have not established any value for the customer yet.  Use Command of the message to establish value.  For Healthcare accounts, if you can tie into real issues like HIPAA compliance, the customer will figure out a way to get budget.',
            choice2: 'It&apos;s good that you are asking for an order, however you have not established any value for the customer yet.  Use Command of the message to establish value.  For retail accounts, if you can tie into compliance issues like PCI/DSS, the customer will figure out a way to get budget.',
            salesRepAudio: 'blank.mp3', //'S2RepJ8.mp3',
            customerAudio: 'S2CustK8.mp3',
            choice1Audio: 'S2NarrL8.mp3',
            choice2Audio: 'S2NarrM8.mp3',
        },{
            response: 'best',
            salesRep: 'How do you provide  visibility and control of sensitive data in your cloud services?',
            customer: 'For IaaS, we are using  the built in security features like Macie. For our SaaS services we are currently evaluating Netskope and Microsoft.',
            choice1: '',
            choice2: '',
            salesRepAudio: 'blank.mp3', //'S2RepB8.mp3',
            customerAudio: 'S2CustC8.mp3',
            choice1Audio: 'blank.mp3',
            choice2Audio: 'blank.mp3',
        },{
            response: 'good',
            salesRep: 'Speaking of pilot projects, are you ready for a Proof of Concept for CASB yet?',
            customer: 'We do not have any resources for a POC right now, please check back in a couple of months when we send out RFPs for the project.',
            choice1: 'Although a POC might be an excellent way to show the customer what we can do, it&apos;s still too early in the process. You don&apos;t have an  understanding of the required capabilities or PBO&apos;s. If possible,  offer to help with creating the  RFP with the Customer, building in Required Capabilities that &amp;lt;span class=&quot;red-text&quot;&amp;gt;M&amp;lt;/span&amp;gt;VISION Cloud has over the competition.',
            choice2: 'Although a POC might be an excellent way to show the customer what we can do, it&apos;s still too early in the process. You don&apos;t have an  understanding of the required capabilities or PBO&apos;s. If possible,  offer to help with creating the  RFP with the Customer, building in Required Capabilities that &amp;lt;span class=&quot;red-text&quot;&amp;gt;M&amp;lt;/span&amp;gt;VISION Cloud has over the competition.',
            salesRepAudio: 'blank.mp3', //'S2RepF8.mp3',
            customerAudio: 'S2CustG8.mp3',
            choice1Audio: 'S2NarrH8I8.mp3',
            choice2Audio: 'S2NarrH8I8.mp3',
        }
    ]
};
scenario2.level2 = {
    conversation:[
        {
            response: 'best',
            salesRep: 'Tell me about the use cases you are trying to solve. For instance, are you concerned about compromised accounts, unauthorized user activity, and protecting against malware being spread by cloud services?',
            customer: 'Hmm, we didn’t think of that! We were only focusing on controlling unauthorized sharing of files, preventing sensitive data from being stored in the cloud, and controlling access from unmanaged devices.',
            choice1: '',
            choice2: '',
            salesRepAudio: 'blank.mp3', //'S2RepB9.mp3',
            customerAudio: 'S2CustC9.mp3',
            choice1Audio: 'blank.mp3',
            choice2Audio: 'blank.mp3',
        },
        {
            response: 'good',
            salesRep: 'I can understand why you would want to go that way, but from what our other customers tell us, Macie only alerts them about sensitive data in S3 buckets and has no DLP or Remediation capabilities.',
            customer: 'Oh really? From what I&apos;ve heard, it might be good enough for our company.',
            choice1: 'Use Command of the Message concepts to get the customer to come up with our advanced attributes as Required Capabilities (such as On-Demand Scans for HIPAA violating data in AWS S3 buckets) rather than lead with just feature/function.',
            choice2: 'Use Command of the Message concepts to get the customer to come up with our advanced attributes as Required Capabilities (such as On-Demand Scans for HIPAA violating data in AWS S3 buckets) rather than lead with just feature/function.',
            salesRepAudio: 'blank.mp3', //'S2RepF9.mp3',
            customerAudio: 'S2CustG9.mp3',
            choice1Audio: 'S2NarrH9I9.mp3',
            choice2Audio: 'S2NarrH9I9.mp3',
        },
        {
            response: 'bad',
            salesRep: 'What?  We are SO much better than Microsoft and Netskope! MSFT only cares about Security Breaches and I&apos;ve heard Netskope&apos;s Agent crashes client machines!',
            customer: 'Wow Okay, what kind of numbers are we talking about, maybe I can fit it in my current budget.',
            choice1: 'It&apos;s NEVER a good idea to bash the competition.  Use command of the message to define the requirements, tell how we do it and how we do it better and set trap setting questions with your customer.',
            choice2: 'It&apos;s NEVER a good idea to bash the competition.  Use command of the message to define the requirements, tell how we do it and how we do it better and set trap setting questions with your customer.',
            salesRepAudio: 'blank.mp3', //'S2RepJ9.mp3',
            customerAudio: 'S2CustK9.mp3',
            choice1Audio: 'S2NarrL9M9.mp3',
            choice2Audio: 'S2NarrL9M9.mp3',
        }
    ]
};
scenario2.ask = {
    conversation:[
        {
            response: 'best',
            salesRep: 'Would you be willing to help me in setting up a Cloud Discovery Session with the right people in your company to identify your critical use cases for Cloud Security and to help your organization come up with a plan for addressing them?',
            customer: 'Sounds great! Who would you like from my company for me to invite?',
            choice1: '',
            choice2: '',
            salesRepAudio: 'blank.mp3', //'S2RepB10.mp3',
            customerAudio: 'S2CustC10_A.mp3',
            choice1Audio: 'blank.mp3',
            choice2Audio: 'blank.mp3',
        }
    ]
};